class AddMessage {
    // adding text from ul
    addText(text) {
        this.text = text;
        const span = $.createElement('span')
        span.appendChild($.createTextNode(text))
        const li = $.createElement('li')
        li.appendChild(span)
        addMessage_Ul_ParentOf_Li.appendChild(li)
    }

}
const addMessages = new AddMessage()
const $ = document;
const form = $.querySelector('#form')
const addMessage_Ul_ParentOf_Li = $.querySelector('.add-Message')

// listener
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user_Text = $.querySelector('#user-Text').value
    addMessages.addText(user_Text)
})