const $ = document;
const dedicated_Page = $.querySelector('#dedicated_Page a')

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.ipify.org?format=json')
        .then((ip) => ip.json())
        .then(ip => {
            let clientIP = ip.ip
            checkIp(clientIP)
        })
    window.console.warn('Do not copy anything here')
    window.console.error('اینجا چیزی را کپی نکنید')
})

async function checkIp(ip) {

    let user_Ip = await ip
    console.log(user_Ip);
    if (user_Ip == '188.212.145.440') {
        alert('welcome Mohammad Amin')
    } else if (user_Ip == '188.212.145.44') {
        alert('Welcome Therre Admin')
    } else {
        alert(`you Are Not The Admin Enter Your UserName.`)
        let prompt1 = prompt('UserName?')
        if (prompt1 === 'admin1@') {
            Swal.fire(
                `hello ${prompt1}`,
                'Congratulations Your Username Was Correct',
                'success'
            )
        } else {
            location.replace('admin-Login.html')
        }
    }

}

// minute site info update
const minute_Update = $.querySelectorAll('.minute-Upgrade')
let minute = 0
setInterval(() => {
    minute++
    minute_Update[0].innerHTML = minute
    minute_Update[1].innerHTML = minute
    minute_Update[2].innerHTML = minute
    minute_Update[3].innerHTML = minute
}, 60000);

// user date
let hours_Time = $.querySelector('.hr')
let minute_Time = $.querySelector('.min')
let secound_Time = $.querySelector('.sec')
setInterval(() => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let secound = date.getSeconds()
    hours_Time.innerHTML = hours
    minute_Time.innerHTML = minutes
    secound_Time.innerHTML = secound
}, 1000);