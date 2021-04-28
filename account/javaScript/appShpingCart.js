const $ = document;
const notification_bell = $.querySelector('.alert-Notification_Li')
const notification_popup = $.querySelector('.notification-popup')
const x = getComputedStyle(notification_popup, ':before').content

notification_bell.addEventListener('mouseenter', () => {
    // e.preventDefault()
    if (notification_popup.style.display != 'block') {
        notification_popup.style.display = 'block'
    }
    // console.log('خدایا مرسیی');
})

notification_popup.addEventListener('click', () => {
    if (notification_popup.style.display != 'none') {
        notification_popup.style.display = 'none'
    }
})