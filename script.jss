function addItem() {
  var input = document.getElementById('itemInput');
  var text = input.value.trim();
  if (text === '') {
    alert('Please enter some text');
    return;
  }
  var li = document.createElement('li');
  li.textContent = text;
  var delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'removeBtn';
  delBtn.onclick = function() {
    li.remove();
  };
  li.appendChild(delBtn);
  document.getElementById('list').appendChild(li);
  input.value = '';
}
