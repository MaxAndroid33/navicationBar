

const menBtn =document.getElementById('menu-btn');
const navbar =document.getElementById('navbar');
const menu =document.querySelector('.menu');
const logo =document.querySelector('.brand');
const old_logo =document.createElement('img');
const new_logo =document.createElement('img');
old_logo.setAttribute('src','../image/union red1_new2.svg');
old_logo.classList.add('logo');
new_logo.setAttribute('src','../image/union red2.svg');
new_logo.classList.add('logo');
// PX offset when the navbar active
const offset =300;

// menu event click
menBtn.addEventListener('click' ,function(){
    //toggle the menu open
    menu.classList.toggle('menu-open');

});

window.addEventListener('scroll',function(){

    if (this.pageYOffset > offset ){
        navbar.classList.add('navbar-active');
       logo.replaceChild(new_logo,logo.lastChild);
    }
    else{
        navbar.classList.remove('navbar-active');
        logo.replaceChild(old_logo,logo.lastChild);
    }
});