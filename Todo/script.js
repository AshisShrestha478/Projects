let addTask = document.querySelector('#btn');
let inputTask = document.querySelector('#inputfield');
let taskContainer = document.querySelector('.task-container');
let iconButton = document.querySelector('#iconbtn');

addTask.addEventListener('click', () => {
    let taskList = inputTask.value;
    if (taskList != "") {
        let addContainer = document.createElement('div');
        addContainer.classList.add('task-div');

        let paraCreate = document.createElement('p');
        paraCreate.id = 'task';
        paraCreate.textContent = `${taskList}`;

        let buttonCreate = document.createElement('button');
        buttonCreate.classList.add('iconbtn');

        taskContainer.append(addContainer);
        addContainer.appendChild(paraCreate);
        addContainer.appendChild(buttonCreate);

        let iconCreate = document.createElement('ion-icon');
        iconCreate.setAttribute('name', 'trash-bin-outline');

        buttonCreate.appendChild(iconCreate);

        buttonCreate.addEventListener('click', () => {
            let taskContainerRemove = buttonCreate.parentNode;
            taskContainerRemove.remove();
        }
        )

    }
})