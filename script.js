function addTask(event){
    event.preventDefault();
    let inputValue = document.getElementById('task-input').value;
    // console.log(inputValue);

    if(inputValue){  // if the inputValue is present then we will create the list item
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between';  //for bootstrap
        li.textContent = inputValue;   // set the value to the list item
        
        let deletebutton = document.createElement('button');
        deletebutton.className='btn btn-sm btn-outline-danger';
        deletebutton.textContent = 'Delete';
        li.appendChild(deletebutton);
        deletebutton.addEventListener('click', function() {
            li.remove();
        });

        document.getElementById('todo-list').appendChild(li);   // add the list item to the list
        document.getElementById('task-input').value = '';  // clear the value of input field after adding the list item to the list
    }
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
}