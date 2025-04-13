document.addEventListener('DOMContentLoaded', () => {
document.getElementById('todoForm').addEventListener('submit', function(event){
    event.preventDefault();
    const task = document.getElementById('task').value;
    const description = document.getElementById('description').value;

    const taskItem = document.createElement('div');
    taskItem.className='task-item';

    taskItem.innerHTML = `
                <div>
                    <strong>${task}</strong>
                    <p>${description}</p>
                </div>
                <button>Mark as Done</button>
        `;

    const markAsDoneButton = taskItem.querySelector('button');
        markAsDoneButton.addEventListener('click', function() {
        taskItem.classList.toggle('done');
    });
        
    document.getElementById('tasks').appendChild(taskItem);
    document.getElementById('task').value = '';
    document.getElementById('description').value = '';
});

document.getElementById('clickme').addEventListener('click',function(event){
    event.preventDefault();
    const elem = document.getElementById('count');
    const val = parseInt(elem.innerHTML);
    elem.innerHTML = val+1;
});

});

