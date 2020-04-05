import { navigate } from "gatsby"

export function localisePhoneNumber(number) {
  return number.replace("+31", "0")
}

export function localisePath(path, locale) {
  return locale.default ? path : `/${locale.id}${path}`
}

export function changeLocale(localePath) {
  let path = window.location.pathname

  if (path.includes("/en")) {
    path = path.replace("/en", "")
  }

  navigate(localePath + path)
}
