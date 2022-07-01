/*const sliderEl=document.getElementById('slider');
const slides = makeSliders(imagesArray);
sliderEl.append(slides);

function makeSliders(arrImages){
    let slides=[], slide;
    for(i=0; i<arrImages.length; i++){
        slides[i] = document.createElement('li');
        slides[i].setAttribute('class','slide');
        slide = document.createElement('img');
        slide.setAttribute('src', arrImages[i]);
        slides[i].append(slide);
    }
    return slides;
}*/

const list = document.getElementById('tasks');
const btnAdd = document.getElementById('btnAdd');
const task = document.getElementById('task');

btnAdd.addEventListener('click', addNewTask);
btnDel.addEventListener('click', deleteCheckTasks);

let time = setInterval(function() {
    var date = new Date();
    document.getElementById("time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
  }, 1000);

function addNewTask(event){
    const item = document.createElement('li');
    item.innerText = task.value;
    item.append(addCheckbox());
    list.append(item);
    task.value = "";

}

function addCheckbox(){
    const checkElem = document.createElement('input')
    checkElem.type = 'checkbox';
    checkElem.classList.add('check');
    return checkElem;
}

function deleteCheckTasks(event){
    const deletedTasks = document.querySelectorAll('input[type="checkbox"]:checked');
    deletedTasks.forEach(el => el.parentNode.remove());
}

