// Поиск элементов на странице
const button__add = document.querySelector('.button__add')
const taskinput = document.querySelector('#taskinput')
const add__task = document.querySelector('.add__task')
const form = document.querySelector('.form')
const navbar__down = document.querySelector('.navbar__down')
// Вытаскиваю текст с задачи

// ФункцияДобавление задачи


form.addEventListener('submit', addTask);

// Функция Удаления задачи
navbar__down.addEventListener('click', deleteTask);

// Функции

function addTask(e) {
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
    <div class="task__del__done">
        <div class="done__task">
            <button data-action="done">
                <span data-action="done" class="material-symbols-outlined">
                    done
                    </span>
            </button>
        </div>
        <div class="delete__task">
            <button data-action="delete">
                <span data-action="delete" class="material-symbols-outlined">
                    delete
                    </span>
            </button>
        </div>`

    
    
    // Добавлем задачу в список
    navbar__down.insertAdjacentHTML('beforeend', taskHTML)
    
    // Очищаем поля ввода, после отправки формы, и вовзращаемся фокус на инпут
    taskinput.value = ''
    taskinput.focus()

}

function deleteTask(e) {

    // Проверяем клик по кнопке удаления
    
    if (e.target.dataset.action === 'delete') {
        // Обращаемся к родительскому тегу по классу
        const parentNode = e.target.closest('.list__task')
        
        // Улаляем 

        parentNode.remove()
    }

}