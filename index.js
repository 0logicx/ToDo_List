// Поиск элементов на странице
const button__add = document.querySelector('.button__add')
const taskinput = document.querySelector('#taskinput')
const add__task = document.querySelector('.add__task')
const form = document.querySelector('.form')

// Вытаскиваю текст с задачи



form.addEventListener('submit', function (e) {
    e.preventDefault()

    const textinput = taskinput.value
    
    console.log(textinput)
    
})

