var contador = 0;

function addTask(){
    if(taskInputElement.value != 0){
        tasksDataElement. innerHTML += `
        <div id="task${contador}" class="card task-card">
            <div class="card-body d-flex flex-row align-items-center">
                <button id="remove-btn-element${contador}" type="button" class="btn btn-danger m-2 delete-btn" onclick="removeTask(${contador})">✕</button>
                <li>${taskInputElement.value}</li>
            </div>
        </div>
        `
        contador++;
        taskInputElement.value = ""

    } else {
        window.alert("Cannot add an empty task! Please, type a correct task to continue.")
    }
}


function removeTask(id){
    var taskToRemove = document.getElementById(`task${id}`);
    taskToRemove.remove()
}


const taskInputElement = document.getElementById("task-input-element")
const tasksDataElement = document.getElementById("tasks-data")
const addBtnElement = document.getElementById("add-btn-element")


addBtnElement.addEventListener("click", addTask)
