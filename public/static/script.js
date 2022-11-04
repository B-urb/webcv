if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  localStorage.theme = "dark"
  console.log("should now be dark")
} else {
  console.log("now light")
  localStorage.theme = "light"
  document.documentElement.classList.remove('dark')
}