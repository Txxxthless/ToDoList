const userInput = document.querySelector('#inputTask');
const taskList = document.querySelector('#taskList');
const form = document.querySelector('#userForm');

const previewTask = document.createElement('li');
previewTask.setAttribute('class', 'list-group-item');
previewTask.innerText = 'Wash the dishes';

const previewDeleteButton = document.createElement('button');
previewDeleteButton.setAttribute('class', 'btn btn-outline-danger float-right');
previewDeleteButton.innerText = 'Delete';

previewTask.append(previewDeleteButton);
taskList.append(previewTask);

previewDeleteButton.addEventListener('click', (event) => {
    event.target.closest('li').remove();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = userInput.value;

    if (taskText.replaceAll(' ', '').length !== 0) {
        const task = document.createElement('li');
        task.setAttribute('class', 'list-group-item');
        task.innerText = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn btn-outline-danger float-right');
        deleteButton.innerText = 'Delete';


        task.append(deleteButton);
        taskList.append(task);

        deleteButton.addEventListener('click', (event) => {
            event.target.closest('li').remove();
        });
    }

    userInput.value = '';
    userInput.focus();
});