function toggle_item(elem){
    let element = elem.querySelector(`.accordion_body`);

    if(!elem.classList.contains(`isOpen`)){ 
    elem.classList.add(`isOpen`);
    element.style.height = `${element.scrollHeight}px`
    }else{
        elem.classList.remove(`isOpen`);
        element.removeAttribute(`style`)
    }
    
}

let elems = document.querySelectorAll(`.accordion_title`);
elems.forEach(function(el){
    el.addEventListener(`click`, function(){
        let opened = document.querySelector(`.isOpen`);
        toggle_item(this);
        if(opened && opened !== el){
            toggle_item(opened)
        }
    })
})

