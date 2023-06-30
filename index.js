// Поиск элементов на странице
const button__add = document.querySelector('.button__add')
const taskinput = document.querySelector('#taskinput')
const add__task = document.querySelector('.add__task')
const form = document.querySelector('.form')
const navbar__down = document.querySelector('.navbar__down')
// Вытаскиваю текст с задачи



form.addEventListener('submit', function (e) {

    // Отключаю стандартное поведение (обновление страницы)
    e.preventDefault()

    // Вытаскиваю текст из инпута

    const textinput = taskinput.value
    

    
    // Добавление задачи в туду лист

    const taskHTML = `<div class="list__task">
                    <label class="list__checkbox">
                        <input type="checkbox">
                    </label>
                    <div class="list__text__task">
                        ${textinput}
                    </div>
                    <div class="img__del__task">
                    <img class="group728" src="img/Group 728.png" alt="Удалить задачу">
                    </div>
                </div>`


    // Добавлем задачу в список
    navbar__down.insertAdjacentHTML('beforeend', taskHTML)
})

