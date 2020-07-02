function change() {
    var element = document.querySelector(".Side_bar ul");
    var tb = document.querySelector(".Side_bar > .toggle_btn");
    if(element.id == "changeClass"){
        element.removeAttribute('id');
    }
    else{
        element.id = 'changeClass';
    }
    tb.classList.toggle('change_btn');
}