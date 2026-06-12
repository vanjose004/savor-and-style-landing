Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $root "public"
$galleryDir = Join-Path $publicDir "gallery"

function New-Color($hex) {
    $hex = $hex.TrimStart('#')
    $r = [Convert]::ToInt32($hex.Substring(0,2), 16)
    $g = [Convert]::ToInt32($hex.Substring(2,2), 16)
    $b = [Convert]::ToInt32($hex.Substring(4,2), 16)
    return [System.Drawing.Color]::FromArgb($r, $g, $b)
}

$wine     = New-Color "722F37"
$wineDark = New-Color "4A1A20"
$cream    = New-Color "F5F0DC"
$warmWhite= New-Color "FDFAF4"
$gold     = New-Color "C9A84C"

# ---------- Logo (256x256, transparent background) ----------
$logoSize = 256
$logo = New-Object System.Drawing.Bitmap($logoSize, $logoSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($logo)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear([System.Drawing.Color]::Transparent)

# Gold ring
$goldBrush = New-Object System.Drawing.SolidBrush($gold)
$g.FillEllipse($goldBrush, 4, 4, $logoSize-8, $logoSize-8)

# Wine circle
$wineBrush = New-Object System.Drawing.SolidBrush($wine)
$g.FillEllipse($wineBrush, 14, 14, $logoSize-28, $logoSize-28)

# "S&S" text
$font = New-Object System.Drawing.Font("Georgia", 64, [System.Drawing.FontStyle]::Bold)
$textBrush = New-Object System.Drawing.SolidBrush($warmWhite)
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center
$rect = New-Object System.Drawing.RectangleF(0, -6, $logoSize, $logoSize)
$g.DrawString("S&S", $font, $textBrush, $rect, $sf)

$g.Dispose()
$logo.Save((Join-Path $publicDir "logo.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$logo.Dispose()
Write-Output "Created logo.png"

# ---------- Hero image (1600x900 JPG) ----------
$heroW = 1600
$heroH = 900
$hero = New-Object System.Drawing.Bitmap($heroW, $heroH)
$g = [System.Drawing.Graphics]::FromImage($hero)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$rectF = New-Object System.Drawing.Rectangle(0, 0, $heroW, $heroH)
$gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rectF, $wineDark, $wine, 45)
$g.FillRectangle($gradBrush, $rectF)

# subtle gold diagonal accent stripe
$goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(40, $gold.R, $gold.G, $gold.B), 180)
$g.DrawLine($goldPen, 0, $heroH, $heroW, 0)

# Watermark label
$font = New-Object System.Drawing.Font("Georgia", 42, [System.Drawing.FontStyle]::Italic)
$textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(60, 255, 255, 255))
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center
$rect = New-Object System.Drawing.RectangleF(0, 0, $heroW, $heroH)
$g.DrawString("Replace with hero.jpg`n(Featured Event Photo)", $font, $textBrush, $rect, $sf)

$g.Dispose()
$hero.Save((Join-Path $publicDir "hero.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
$hero.Dispose()
Write-Output "Created hero.jpg"

# ---------- Gallery images (800x600 JPG x9) ----------
$galleryItems = @(
    @{ name = "gallery-1.jpg"; label = "Wedding Reception";    c1 = $wine;     c2 = $wineDark },
    @{ name = "gallery-2.jpg"; label = "Birthday Celebration"; c1 = $gold;     c2 = $wine },
    @{ name = "gallery-3.jpg"; label = "Corporate Event";      c1 = $wineDark; c2 = $wine },
    @{ name = "gallery-4.jpg"; label = "Debut Celebration";    c1 = $wine;     c2 = $gold },
    @{ name = "gallery-5.jpg"; label = "Christening";          c1 = $cream;    c2 = $gold },
    @{ name = "gallery-6.jpg"; label = "House Blessing";       c1 = $wineDark; c2 = $gold },
    @{ name = "gallery-7.jpg"; label = "Kiddie Party";         c1 = $gold;     c2 = $wineDark },
    @{ name = "gallery-8.jpg"; label = "Family Gathering";     c1 = $wine;     c2 = $cream },
    @{ name = "gallery-9.jpg"; label = "Buffet Setup";         c1 = $wineDark; c2 = $wine }
)

foreach ($item in $galleryItems) {
    $w = 800
    $h = 600
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    $rectF = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rectF, $item.c1, $item.c2, 45)
    $g.FillRectangle($gradBrush, $rectF)

    $font = New-Object System.Drawing.Font("Segoe UI", 30, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(230, 255, 255, 255))
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rect = New-Object System.Drawing.RectangleF(0, 0, $w, $h)
    $g.DrawString($item.label, $font, $textBrush, $rect, $sf)

    $g.Dispose()
    $bmp.Save((Join-Path $galleryDir $item.name), [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Output "Created gallery/$($item.name)"
}

Write-Output "Done."
