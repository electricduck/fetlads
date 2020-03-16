param (
    [string]$InFile,
    [string]$Id,
    [string]$OutFolder
)

function Test-CommandExists([string]$Command) {
    if (!(Get-Command $Command -errorAction SilentlyContinue)) {
        Write-Host "Error: '${Command}' not found. Stopping." -f Red
        Exit
    }
}

Test-CommandExists('convert')

$NewFileName = "${Id}.jpg"
$NewFileLocation = $OutFolder + "/" + $NewFileName
$ThumbnailQuality = "60"
$ThumbnailWidth = "400"

convert $InFile.ToString() -resize $ThumbnailWidth -quality $ThumbnailQuality $NewFileLocation