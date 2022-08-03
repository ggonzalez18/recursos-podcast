const btnCollapse = document.getElementById('btn-collapse')
const menuOptions = document.getElementById('menu-options')
const arrowCategories = document.querySelector('#btn-collapse .arrow-down')
const getButtonsNodeList = document.querySelectorAll('#menu-options li button')
const getCategoriesItemsNodeList = document.querySelectorAll('#menu-options li')
const dataCategoriesTargetNodeList = document.querySelectorAll('[data-categories-target]')
const dataCategoriesContentNodeList = document.querySelectorAll('[data-categories-content]')

const buttonsToArray = [...getButtonsNodeList]
const dataTargets = [...dataCategoriesTargetNodeList]
const dataContent = [...dataCategoriesContentNodeList]
const categoriesItems = [...getCategoriesItemsNodeList]
const heightMenuOptions = menuOptions.scrollHeight
const widthOfViewport = window.innerWidth

window.onresize = resize

function resize() {
  // console.log("width: ", window.innerWidth, "px");
  if (widthOfViewport >= 1020) {
    menuOptions.style.height = `${heightMenuOptions}px`
  }
}

btnCollapse.addEventListener('click', () => {
  menuOptions.classList.toggle('show')
  menuOptions.classList.contains('show')
    ? actionsWithShowMenu()
    : actionsHiddenMenu()
})

const actionsWithShowMenu = () => {
  arrowCategories.classList.add('open')
  menuOptions.style.height = `${heightMenuOptions}px`
}

const actionsHiddenMenu = () => {
  arrowCategories.classList.remove('open')
  menuOptions.style.height = "0px"
}

buttonsToArray.forEach(button => {
  button.addEventListener('click', function () {

    // let widthOfViewport = window.innerWidth
    let getTargetId = this.dataset.categoriesTarget.slice(1)
    let target = document.getElementById(getTargetId)
    let getButtonText = this.textContent

    if (widthOfViewport < 1020) {
      menuOptions.classList.remove('show')
      menuOptions.style.height = "0px"
      arrowCategories.classList.remove('open')
    }
    
    dataContent.forEach(content => content.classList.remove('target-active'))

    buttonsToArray.forEach(item => item.classList.remove('btn-active'))

    target.classList.add('target-active')
    button.classList.add('btn-active')
    btnCollapse.children[0].textContent = getButtonText.trim();
  })
})

// Show the first content
dataContent[0].classList.add('target-active')
categoriesItems[0].classList.add('btn-active')