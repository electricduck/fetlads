param (
    [string]$Path,
    [string]$Watermark = "",
    [string]$WatermarkGravity = "SouthWest",
    [bool]$DryRun = $true,
    [string]$ImageQuality = "75",
    [string]$ImageWidth = "1080",
    [string]$FilePrefix = "Fetlads",
    [string]$TemporaryWatermarkLocation = ".watermark"
)


if($DryRun -eq $true) {
    Write-Host "If you're sure you want to proceed, set -DryRun. Original files will be destroyed." -f Red
    Write-Host " "
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

$Files = Get-ChildItem -Path $Path
$MasterHash = ""

foreach($File in $Files) {
    $FileHash = (Get-FileHash -Algorithm Md5 $file).Hash.ToLower()
    $MasterHash += $FileHash
}

$MasterHash = Get-StringHash -String $MasterHash
$FileId = $MasterHash.SubString(0,6)
$FileNamePrefix = "${FilePrefix}_${FileId}-"
$FileIndex = 0

if($Watermark -ne "") {
    $WatermarkWidth = $ImageWidth / 4
    $dummy = convert $Watermark.ToString() -resize $WatermarkWidth $TemporaryWatermarkLocation.ToString()
}

foreach($File in $Files) {
    $FileIndex = $FileIndex + 1
    $FileIndexPadded = "{0:000}" -f $FileIndex
    $NewFileName = $FileNamePrefix + $FileIndexPadded + $File.Extension.ToLower()
    $NewFileLocation = $File.DirectoryName + "/" + $NewFileName
    
    Write-Host $File.Name -f Gray -n
    Write-Host " ➔ " -f Cyan -n 
    Write-Host $NewFileName -f Gray -n

    if($DryRun -eq $false) {
        Move-Item $File $NewFileLocation

        Resize-Image -File $NewFileLocation
        Remove-ExifData -File $NewFileLocation

        if($Watermark -ne "") {
            Watermark-Image -File $NewFileLocation
        }

        Write-Host " ✓" -f Green -n
    }

    Write-Host ""
}

if($Watermark -ne "") {
    Remove-Item -Force $TemporaryWatermarkLocation
}