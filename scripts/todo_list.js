const writeTaskInput = document.querySelector('#write-task-input');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');

let mainList = []

addTaskBtn.addEventListener('click', () => {
    const taskInp = writeTaskInput.value;
    if (taskInp.trim() === '') return;

    mainList.push({
        id: Date.now(),
        taskName: taskInp,
        done: false
    });

    writeTaskInput.value = '';
    renderTasks();
})

function renderTasks() {
    if (mainList == '') {
        taskList.innerHTML = 'No added tasks...';
    } else {
        taskList.innerHTML = '';
        for (const task of mainList) {
            taskList.innerHTML += `
                <li>
                    <div class="liquid-block mt-10">
                        <span style="text-decoration:${task.done ? 'line-through' : 'none'}">
                            ${task.taskName}
                        </span>
                        <div>
                            <button class="btn toggle-btn" data-id="${task.id}">
                                ${task.done ? 'Done' : '✓'}
                            </button>
                            <button class="btn delete-btn " data-id="${task.id}">✖</button>
                        </div> 
                    </div>   
                </li>    
            `;
        }
    }
    
}

taskList.addEventListener('click', (event) => {
    const id = Number(event.target.dataset.id);

    if (event.target.classList.contains('delete-btn')) {
        mainList = mainList.filter(task => task.id !== id);
    }

    if (event.target.classList.contains('toggle-btn')) {
        const task = mainList.find(task => task.id === id);
        if (task) {
            task.done = !task.done;
        }
    }

    renderTasks();
});

renderTasks();