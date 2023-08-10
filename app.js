

document.getElementById('click').addEventListener('click', addTolist);
document.body.addEventListener('click', deleteElement);
// add to the list 

function addTolist(e) {
  const add = document.getElementById('add').value;
  if (add === '') {
    alert('Add a value');
  } else {
    const list = document.querySelector('.list-group');
    const alement = document.createElement('li');
    const btn = document.createElement('input');
    btn.value = 'Delete';
    btn.type = 'button';
    btn.classList = 'btn btn-danger float-right';
    alement.appendChild(document.createTextNode(add));

    alement.appendChild(btn);
    alement.classList = 'list-group-item';
    list.appendChild(alement);
    clear();
    CreateMessage('bg-success text-white text-center p-3 m-3', 'SuccessFull Addded To The List');
  }
}

// Create Alert Message when an alement is created 

function CreateMessage(classname, message) {
  const div = document.createElement('div');
  const container = document.getElementById('container');
  div.innerText = message
  const h3 = document.querySelector('h3');
  div.className = classname;
  container.insertBefore(div,h3);
  RemoveAler();


}
// clear input 
function clear() {
  document.getElementById('add').value = '';
}


// Remove alement from task - list 
function deleteElement(e) {
  if (e.target.classList.contains('btn-danger')) {
    const confir = confirm('Are you sure you want to delete ...');
    if (confir) {
      e.target.parentElement.remove();
      CreateMessage('bg-danger text-center text-white p-3 m-3', 'SuccessFully Removed ! ');
    }
  }
}

// remove alert box 
function RemoveAler() {
  setTimeout(() => {
    const succss = document.querySelector('.text-center').remove();
  }, 1500);
}