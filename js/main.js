function activeSelectGame() {
    const gameArrow = document.querySelector('#game-arrow')
    const logoBox = document.querySelector('.logo-box')
    const gameList = document.querySelector('#game-list')

    logoBox.addEventListener('click', () => {
        gameArrow.classList.toggle('active')
        gameList.classList.toggle('active')
    })
}
activeSelectGame()

function activeLanguage() {
    const languageArrow = document.querySelector('#language-arrow')
    const languageBox = document.querySelector('.language-box')
    const languageList = document.querySelector('#language-list')
    const languageMain = document.querySelector('.language-main')

    languageBox.addEventListener('click', () => {
        languageArrow.classList.toggle('active')
        languageList.classList.toggle('active')
        languageMain.classList.toggle('active')
    })
}
activeLanguage()

function activeGameMenu() {
    const gameMenu = document.querySelector('.games-choice-menu')
    const gameMenuList = document.querySelector('.game-choice-list')

    gameMenu.addEventListener('click', () => {
        gameMenu.classList.toggle('active')
        gameMenuList.classList.toggle('active')
    })
}
activeGameMenu()

function activeMenuXS() {
    const menuXS = document.querySelector('#menu-xs')
    const iconMenuXS = document.querySelector('.menu-icon')

    iconMenuXS.addEventListener('click', () => {
        iconMenuXS.classList.toggle('active')
        menuXS.classList.toggle('active')
        document.querySelector('body').classList.toggle('active')
    })
}
activeMenuXS()