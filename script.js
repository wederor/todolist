const button = document.querySelector(".to-do-add");
const input = document.querySelector(".to-do-input");
const listaTask = document.querySelector(".to-do-list");

let todoList = []

function addTask(){
    if(input.value == ''){

        alert("Não é possível adicionar tarefas vazias")

    } else {
         todoList.push({
          tarefa: input.value,
          concluida: false      

     })

     mostraTask()

        input.value = ''
    }
}

function mostraTask() {

    let novaLi = ''

    todoList.forEach((task, index) => {

        novaLi = novaLi + `
            <li class="task-to-do ${task.concluida && "done"}">
                <img src="check-img.png" alt="Tarefa-ok" onclick="completaTask(${index})">
                <p>${task.tarefa}</p>
                <img src="garbage-can-img.png" alt="Excluir-tarefa" onclick="deletarTask(${index})">
            </li>
        
        `

    })

    listaTask.innerHTML = novaLi

    localStorage.setItem('Lista', JSON.stringify(todoList))

}

function reload(){

    const tarefasLocalstorage = localStorage.getItem('Lista')

    if(tarefasLocalstorage){

        todoList = JSON.parse(tarefasLocalstorage)

    }
    

    mostraTask()

}

reload()

button.addEventListener("click", addTask)

function deletarTask(index){

    todoList.splice(index, 1)
    
    mostraTask()

}

function completaTask(index){

    todoList[index].concluida = !todoList[index].concluida

    mostraTask()

}
