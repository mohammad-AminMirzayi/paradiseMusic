const $ = document;
const notification_bell = $.querySelector('.alert-Notification_Li')
const notification_popup = $.querySelector('.notification-popup')


notification_bell.addEventListener('click', (e) => {
    e.preventDefault()
    if (notification_popup.style.display != 'block') {
        notification_popup.style.display = 'block'
    } else {
        notification_popup.style.display = 'none'
    }
})