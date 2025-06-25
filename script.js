const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');


addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">X</button>
  `;


  li.querySelector('.task-text').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  
  li.querySelector('.delete-btn').addEventListener('click', () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
