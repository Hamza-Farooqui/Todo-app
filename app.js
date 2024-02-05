var getul = document.getElementById('getul')

function addtodo() {
    var getinp = document.getElementById('inp')
    var createLi = document.createElement('li')
    var LiText = document.createTextNode(getinp.value)
    createLi.appendChild(LiText)
    getul.appendChild(createLi)
    getinp.value = ''
    var deleteBtn = document.createElement('button')
    var delText = document.createTextNode('DELETE')
    deleteBtn.appendChild(delText)
    createLi.appendChild(deleteBtn)

    var EditBtn = document.createElement('button')
    var editText = document.createTextNode('EDIT')
   EditBtn.appendChild(editText)
   createLi.appendChild(EditBtn)

   deleteBtn.setAttribute('class','btn btn-danger')
   EditBtn.setAttribute('class','btn btn-info')
   createLi.setAttribute('calss','d-flex justify-content-around m-2')
   deleteBtn.setAttribute('onclick', 'delTodo(this)')
   EditBtn.setAttribute('onclick', 'edittodo(this)')
}



function delTodo(e){
    e.parentNode.remove()

}


function delall(){

    getul.innerHTML = ''
}


function edittodo(e){
    var getprompt = prompt('Enter Updated Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = getprompt

}