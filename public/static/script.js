if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  console.log("should now be dark")
} else {
  console.log("now light")
  document.documentElement.classList.remove('dark')
}