param (
    [string]$Path,
    [string]$Watermark = "",
    [string]$WatermarkGravity = "SouthWest",
    [bool]$DryRun = $true,
    [bool]$Backup = $false,
    [string]$ImageQuality = "75",
    [string]$ImageWidth = "1080",
    [string]$FilePrefix = "Fetlads",
    [string]$TemporaryWatermarkLocation = ".watermark",
    [string]$BackupLocation = "_backup",
    [bool]$OutputJson = $true
)


if($DryRun -eq $true) {
    Write-Host "If you're sure you want to proceed, set -DryRun (to `$false). Original files will be destroyed." -f Red
    Write-Host "---" -f DarkGray
}

function Test-CommandExists([string]$Command) {
    if (!(Get-Command $Command -errorAction SilentlyContinue)) {
        Write-Host "Error: '${Command}' not found. Stopping." -f Red
        Exit
    }
}

function Get-StringHash([String]$String, $HashName = "MD5") {
    $StringBuilder = New-Object System.Text.StringBuilder
    [System.Security.Cryptography.HashAlgorithm]::Create($HashName).ComputeHash([System.Text.Encoding]::UTF8.GetBytes($String))|%{
        [Void]$StringBuilder.Append($_.ToString("x2"))
    }
    $StringBuilder.ToString()
}

function Remove-ExifData([String]$File) {
    $dummy = mogrify -strip $File.ToString()
}

function Resize-Image([String]$File) {
    $TemporaryFileLocation = $File.ToString() + "_tmp"
    Move-Item $File.ToString() $TemporaryFileLocation
    $dummy = convert $TemporaryFileLocation.ToString() -resize $ImageWidth -quality $ImageQuality $File.ToString()
    Remove-Item $TemporaryFileLocation
}

function Watermark-Image([String]$File) {
    $TemporaryFileLocation = $File.ToString() + "_tmp"
    Move-Item $File.ToString() $TemporaryFileLocation
    $dummy = composite -gravity $WatermarkGravity -geometry +0+0 $TemporaryWatermarkLocation $TemporaryFileLocation.ToString() $File.ToString()
    Remove-Item $TemporaryFileLocation
}

Test-CommandExists('convert')
Test-CommandExists('composite')
Test-CommandExists('mogrify')

$BackupLocationFull
$Files = Get-ChildItem -Path $Path | Where-Object {$_.Extension.ToLower() -in ".jpg",".jpeg",".png"}
$JsonOutput = ""
$MasterHash = ""

foreach($File in $Files) {
    $FileHash = (Get-FileHash -Algorithm Md5 $file).Hash.ToLower()
    $MasterHash += $FileHash
}

if($Backup -eq $true) {
    $BackupLocationFull = $Path.ToString() + "/" + $BackupLocation
    New-Item -Type Directory -Force $BackupLocationFull | Out-Null
}

$MasterHash = Get-StringHash -String $MasterHash
$FileId = $MasterHash.SubString(0,6)
$FileNamePrefix = "${FilePrefix}_${FileId}-"
$FileIndex = 0

if($Watermark -ne "") {
    $WatermarkWidth = $ImageWidth / 5
    $dummy = convert $Watermark.ToString() -resize $WatermarkWidth $TemporaryWatermarkLocation.ToString()
}

foreach($File in $Files) {
    $FileIndex = $FileIndex + 1
    $FileIndexPadded = "{0:000}" -f $FileIndex
    $NewFileName = $FileNamePrefix + $FileIndexPadded + $File.Extension.ToLower()
    $NewFileLocation = $File.DirectoryName + "/" + $NewFileName
    
    Write-Host $File.Name -f Gray -n
    Write-Host "  ➔  " -f Cyan -n 
    Write-Host $NewFileName -f Gray -n

    if($Backup) {
        Copy-Item -Force $File $BackupLocationFull
    }

    if($DryRun -eq $false) {
        Move-Item $File $NewFileLocation

        Resize-Image -File $NewFileLocation
        Remove-ExifData -File $NewFileLocation

        if($Watermark -ne "") {
            Watermark-Image -File $NewFileLocation
        }

        Write-Host " ✓" -f Green -n
    }

    if($OutputJson) {
        $JsonOutput += "{ `"id`": ${FileIndex}, `"file`": `"${NewFileName}`" }"
        if($FileIndex -ne $Files.Length) {
            $JsonOutput += ",`n"
        }
    }

    Write-Host ""
}

if(!$DryRun) {
    if($Watermark -ne "") {
        Remove-Item -Force $TemporaryWatermarkLocation
    }
}

if($OutputJson) {
    Write-Host "---" -f DarkGray
    Write-Host $JsonOutput -f Gray
}