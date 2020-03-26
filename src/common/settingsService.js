export const getLanguageSetting = () => {
  return getSetting("language")
}

export const getThemeSetting = () => {
  return getSetting("theme")
}

export const setLanguageSetting = (language) => {
  setSetting("language", language)
  window.location.reload(false)
}

export const setThemeSetting = (theme) => {
  var osColorScheme = getComputedStyle(document.documentElement).getPropertyValue('content') // NOTE: Browsers differ in how they reply to this,
                                                                                             //       hence the replace method below.
                                                                                             //        - Blink (Chrome/Edge/Vivaldi): "light"
                                                                                             //        - WebKit (Safari/iOSfi/Epiphany): light
                                                                                             //        - Gecko (Firefox): "light"
  let defaultTheme = 'auto'
  let validThemes = [
    'auto',   // Automatic
    'dark',   // Dark
    'light'   // Light
  ]

  osColorScheme = osColorScheme.replace(/['"]+/g, '')

  if(!validThemes.includes(theme)) {
    theme = defaultTheme
  }

  if(theme === 'auto') {
    if (osColorScheme === "light") {
      document.body.className = 'light-theme'
    } else if (osColorScheme === "dark") {
      document.body.className = 'dark-theme'
    }
  } else {
    document.body.className = theme + '-theme'
  }

  setSetting("theme", theme)
}

export const getSetting = (key) => {
  return localStorage.getItem(`fetlads:settings:${key}`)
}

export const setSetting = (key, setting) => {
  localStorage.setItem(`fetlads:settings:${key}`, setting)
}