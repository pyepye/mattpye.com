let isLocalStorage = "localStorage" in window;
let currentTheme = "light";

function switchTheme() {
  if (currentTheme == "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function themeDefault() {
  const button = document.querySelector("#theme-switch-button");
  let storageTheme;
  try {
    storageTheme = localStorage.getItem("theme");
  } catch (e){
    if (e instanceof DOMException) {
      console.log(
        '"Block third-party cookies and site data" enabled in the browser. ' +
        'Unable to set theme into storage - using   default colour scheme.'
      )
      isLocalStorage = false;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        storageTheme = "dark";
      }
    }
  }
  if(storageTheme && storageTheme === 'dark') {
    setTheme("dark");
  }

}

function setTheme(theme){
  currentTheme = theme;
  const button = document.querySelector("#theme-switch-button");
  const buttonText = theme == "dark" ? "light" : "dark";  // Button should have the opposite name
  document.body.classList.add(theme);
  document.body.classList.remove(buttonText);
  if(isLocalStorage){
    localStorage.setItem("theme", theme);
  }
}
