function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDolist = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //add delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', function(event) {
      toDoList.removeChild(this.parentElement);
    });

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  onReady();
};
