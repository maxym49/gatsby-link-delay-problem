const externalRedirectTo = (linkTo) => {
  window.open(linkTo, "_blank")
}

const redirectToWithTransition = (title) => {
  setTimeout(() => {
    const linkToPage = document.getElementById(title)
    if (linkToPage) linkToPage.click()
  }, 0)
}

export { externalRedirectTo, redirectToWithTransition }