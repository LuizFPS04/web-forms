let tasks = [];
let filter = 'all';

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function filterTasks(selectedFilter) {
    filter = selectedFilter;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'active') {
            return !task.completed;
        } else {
            return true;
        }
    });

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.text}</span>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
        `;
        taskList.appendChild(li);
    });

    updateTaskCount();
}

function updateTaskCount() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const taskCount = document.getElementById('task-count');
    taskCount.innerHTML = `TOTAL: ${completedTasks} de ${tasks.length} concluídos`;
}
