// Placed in /usr/share/plasma/shells/org.kde.plasma.desktop/updates/
// This script is run for newly created users and sets the default
// wallpaper for all desktops

d = desktops()

for (i in d) {
    d[i].wallpaperPlugin = 'org.kde.image'
    d[i].currentConfigGroup = Array('Wallpaper', 'org.kde.image', 'General')
    d[i].writeConfig('wallpaper', 'tanglu')
}
