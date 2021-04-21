const $ = document;
const form = $.querySelector('#form'),
    submit_Button = $.querySelector('#form input[type="submit"]')

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.ipify.org?format=json')
        .then((res) => res.json())
        .catch(fail => {
            console.log('fail');
        }).then((ip) => {
            let user_IP = ip.ip
            console.log(user_IP);
            if (user_IP === '188.212.145.44') {
                alert('You Are Admin')
                location.replace('admin-Panel.html')
            } else {
                alert(`you Are Not An Admin And If You Think There Is A Problem Enter Your UserName And Password Correctly. `)
            }
        })
    setTimeout(() => {
        disabledButton()
    }, 50000);
})




form.addEventListener('submit', (e) => {
    const input_Name = $.querySelector('#name').value,
        input_Password = $.querySelector('#password').value
    if ((input_Name === '' || input_Name === null) || (input_Password === '' || input_Password === null)) {
        alert('Please fill in all fields')
        e.preventDefault()
        form.reset()
    } else if (input_Name == 'admin1' && input_Password == 'admin1234@') {
        alert('welcome Back Admin')
    } else {
        alert('your Password And Name Not Valid')
        submit_Button.disabled = true
        e.preventDefault()
        setTimeout(() => {
            location.reload()
        }, 9000);
    }
})

// If the user does not enter the username and password, the button will fail after 9 seconds
function disabledButton() {
    submit_Button.disabled = true
    alert('You must enter a username and password in less than 50 seconds')
    location.reload()
}