const $ = document;
const setting = $.querySelector('#setting')
const setting_Div = $.querySelector('#setting_Div')

setting.addEventListener('click', (e) => {
    e.preventDefault()
    if (setting_Div.style.display == 'none') {
        setting_Div.style.display = 'block'
    } else {
        setting_Div.style.display = 'none'

    }
})