const list = document.getElementById('list');
const add = document.getElementById('addElem');

add.addEventListener('click', function() {
    let element = document.createElement('li');
        
    let liNum = document.getElementsByTagName('li').length;
    
    element.innerHTML = 'item ' + liNum;
    
    list.appendChild(element);
})