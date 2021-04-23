const $ = document;
const search_icon = document.querySelector('.fa-search-custom')
const shoppingBag = $.querySelector('#shoppingBag_a')
const todayCalendar_Span = $.querySelector('.today-calendar')
const mobileTodayCalendar_Span = $.querySelector('.mobile-Today_Calendar')
const accountUser_a = $.querySelector('#account_a')


search_icon.addEventListener('click', (e) => {
    e.preventDefault()
    const search_input = document.querySelector('#search-input')
    // if click button changhe width
    if (search_input.style.display != 'block') {
        search_input.style.display = 'block'
        shoppingBag.classList.add('shopping-Cart_a')
        shoppingBag.style.visibility = 'hidden'
        todayCalendar_Span.style.visibility = 'hidden'
        accountUser_a.style.visibility = 'hidden'


    } else {
        search_input.style.display = 'none'
        shoppingBag.classList.add('shopping-Cart_a')
        shoppingBag.style.visibility = 'inherit'
        todayCalendar_Span.style.visibility = 'inherit'
        accountUser_a.style.visibility = 'inherit'
    }
})

// automatic music
const audio = $.querySelector('audio')

let audioPlay = 1
window.addEventListener('DOMContentLoaded', (e) => {
    audio.volume = 0.9;
    audio.play();
    const today = new Date()
    const option = {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
        year: 'numeric'
    }
    const date_Today = new Intl.DateTimeFormat('fa-IR', option).format(today)
    const todayCalendar = $.querySelector('.today-calendar').innerHTML = date_Today
    mobileTodayCalendar_Span.innerHTML = date_Today
    checkEvents(today)
})


const button_Pause = $.querySelector('#btn-pause i')

// stop music home page
// button_Pause.addEventListener('click', (e) => {
//     if (audio.play) {
//         audio.pause()
//     }
// })

// function playMusic() {
//     if (audioPlay === 1) {
//         setInterval(() => {
//             audio.volume = 0.9;
//             audio.play()
//         }, 9000);
//     }
// }

// setInterval(() => {
//     playMusic()
// }, 99000);

// header fixed on scroll page

const header = $.querySelector('.header')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 19) {
        header.classList.add('header-Fixed_Scroll')
    } else {
        header.classList.remove('header-Fixed_Scroll')
    }
})

setInterval(() => {
    const random_color = Math.floor(Math.random() * 5)
    randomColors(random_color)
}, 9000);

function randomColors(color) {
    if (color == 0) {
        header.style.background = '#000000'
    } else if (color == 1) {
        header.style.background = '#14213d'
    } else if (color == 2) {
        header.style.background = '#2a9d8f'
    } else if (color == 3) {
        header.style.background = '#8338ec'
    } else if (color == 4) {
        header.style.background = '#343a40'
    } else if (color == 5) {
        header.style.background = '#118ab2'
    } else if (color == 6) {
        header.style.background = '#540b0e'
    }
}

const arrowUp = $.querySelector('.arrow_UP')

arrowUp.addEventListener('click', (e) => {
    e.preventDefault()
    $.body.scrollTop = 0
    $.documentElement.scrollTop = 0
})

function checkEvents() {
    const date = new Date()
    const hr = date.getHours()
    const min = date.getMinutes()
    console.log(hr, min);
}