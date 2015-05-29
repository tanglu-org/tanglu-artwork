// Placed in /usr/share/plasma/shells/org.kde.plasma.desktop/updates/
// This script is run for newly created users and sets the default
// wallpaper for all activities

a = activities()

for (var i = 0; i < a.length; i++) {
    var desktopsArray = desktopsForActivity(a[i]);
    for (var j = 0; j < desktopsArray.length; j++) {
        desktopsArray[j].wallpaperPlugin = 'org.kde.image'
        desktopsArray[j].wallpaperMode = 'SingleImage'
        desktopsArray[j].currentConfigGroup = Array('Wallpaper', 'org.kde.image')
        desktopsArray[j].writeConfig('wallpaper', 'tanglu')
        desktopsArray[j].writeConfig('wallpaperposition', '2')
    }
}
