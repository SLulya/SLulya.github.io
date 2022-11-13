function showModal(id){
 document.getElementById(id).classList.add(`show`);
}
function hideModal(id){
    document.getElementById(id).classList.remove(`show`);
}
function saveTask(){
    let savet = document.getElementById(`textt`).value;
    let saves = document.getElementById(`select`).value;
    let task = {
        describe: savet,
        status: saves
    }
    let tasks =  getTasks()
    tasks.push(task);
    localStorage.setItem(`tasks`, JSON.stringify(tasks))
    drawTasks();
    hideModal(`newTaskModal`)
}


function getTasks(){
    let tasks = JSON.parse(localStorage.getItem(`tasks`));
    if (tasks === null){
        tasks = [];
    }
    return tasks;

}

function drawTasks(){
    let tasks = getTasks();
    let tabl = document.getElementById(`tabl`);
    
    let y = ``;
    tasks.forEach(function(taskk, index){
        
        let status = ``;
        if(taskk.status == `Провалено`){status = `<b class="red">Провалено</b>`}
        if(taskk.status == `Виконано`){status = `<b class="lime">Виконано</b>`}
        if(taskk.status == `Виконується`){status = `<b class="orange">Виконується</b>`}
        
        y += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${taskk.describe}</td>
        <td><b class="lime">${status}</b></td>
        <td class="text-center"><button class="btn btn-warning btn-sm" onclick="showModal('editTaskModal')">edit</button></td>
        <td class="text-center"><button class="btn btn-danger btn-sm">x</button></td>
      </tr>`
    })
    tabl.innerHTML = y;
}
drawTasks()

function deleteTask(index){
    let tasks = getTasks();
    
}
