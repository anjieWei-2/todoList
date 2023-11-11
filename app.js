const addButton = document.getElementById('addButton')
const inputSec = document.getElementById('inputSec')
const inputConent = inputSec.getElementsByTagName('input')[0]
const confirmAddButton = inputSec.getElementsByTagName('button')[0]
const showTodo = document.getElementById('todos')

const addDropdown = addButton.addEventListener('click',()=>{
    if (inputSec.classList.contains('notShow')) {
        inputSec.classList.remove('notShow')
        addButton.textContent = '-'
    } else {
        inputSec.classList.add('notShow')
        addButton.textContent = '+'
    }
})

const confirmAdd = confirmAddButton.addEventListener('click', ()=>{
    if(inputConent.value){
        const todoItemDiv = document.createElement('div')
        todoItemDiv.classList.add('todoItemDiv')
        const addTodoItem = document.createElement('span')
        addTodoItem.textContent = inputConent.value
        todoItemDiv.appendChild(addTodoItem)
    
        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.classList.add('editButton')
        todoItemDiv.appendChild(editButton)
    
        const delButton = document.createElement('button')
        delButton.textContent = 'Delete'
        delButton.classList.add('delButton')
        todoItemDiv.appendChild(delButton)
    
        showTodo.appendChild(todoItemDiv)
        inputConent.value = ''
    
        let todoSec
        let todoItem
        editButton.addEventListener('click',()=>{
            todoSec = editButton.parentElement
            todoItem = todoSec.getElementsByTagName('span')[0]
    
            const addEditInput = document.createElement('input')
            addEditInput.type = 'text'
            addEditInput.value = todoItem.textContent
            todoSec.replaceChild(addEditInput,todoItem)            
    
            todoSec.getElementsByClassName('delButton')[0].classList.add('notShow')
            todoSec.getElementsByClassName('editButton')[0].classList.add('notShow')
    
            let confirmEdit
            if (todoSec.getElementsByClassName('confirmEdit')[0]){
                confirmEdit = todoSec.getElementsByClassName('confirmEdit')[0]
                confirmEdit.classList.remove('notShow')
            }else{
                confirmEdit = document.createElement('button')
                confirmEdit.textContent = 'Confirm'
                confirmEdit.classList.add('confirmEdit')
                todoSec.appendChild(confirmEdit)
            }
    
            confirmEdit.addEventListener('click', ()=>{
                const editInput = todoSec.getElementsByTagName('input')[0]
                if (editInput.value){
                    const addConfirmedEdit = document.createElement('span')
                    addConfirmedEdit.textContent = editInput.value
                    todoSec.replaceChild(addConfirmedEdit, editInput)
                    todoSec.getElementsByClassName('delButton')[0].classList.remove('notShow')
                    todoSec.getElementsByClassName('editButton')[0].classList.remove('notShow')
                    confirmEdit.classList.add('notShow')
                }else{
                    alert("Input can't be empty!")
                }
    
            })
        })
    
        delButton.addEventListener('click',()=>{
            todoSec = delButton.parentElement
            todoItem = todoSec.getElementsByTagName('span')[0]
            todoItem.classList.add('markedTodo')
            setTimeout(()=>{
                showTodo.removeChild(todoSec)
            }, 1000)
        })
    }else{
        alert("Input can't be empty!")
    }

})

