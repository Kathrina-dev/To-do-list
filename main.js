const todoList = [];
function rendertodoList(){
    let todoListhtml='';
    for (let i=0; i<todoList.length; i++){
        const todo = todoList[i];
        const todoObject=todoList[i];
        const {name}=todoObject;
        const {dueDate}=todoObject;
        const html=`
                <div class="grid-container">
                    <div class="taskName">${name}</div>
                    <div class="dayOfTodo">${dueDate}</div>
                    <div class="delete-button">
                        <button onclick="todoList.splice(${i},1);
                        rendertodoList();"
                        ><img src="Images/delete-icon.png" class="delete-icon"></button> 
                    </div>
                </div>` 
        todoListhtml += html;
    } 
    document.querySelector('.js-displayList')
        .innerHTML= todoListhtml;
}
function addToDo(){
    const inputElement= document.querySelector('.js-input');
    const name=inputElement.value;
    const inputDateElement=document.querySelector('.js-date-input');
    const dueDate=inputDateElement.value;
    todoList.push({
        name,
        dueDate
    })
    inputElement.value='';
    rendertodoList()
}