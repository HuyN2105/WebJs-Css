function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}


const   main = document.querySelector('.header-main'), 
        about = document.querySelector('.header-about'), 
        roadmap = document.querySelector('.header-roadmap'), 
        contact = document.querySelector('.header-contact');

function change(){
    var top = window.scrollY;
    var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    if(Math.floor(top/height*2) / 2 >= 0 && Math.floor(top/height*2) / 2 < .5){
        document.querySelector('#main .content').style.transform = "translateX(0)";
        document.getElementById('main').querySelector('#content').style.animation = "fadeIn 2.5s";
    }else if (Math.floor(top/height*2) / 2 >= .5 && Math.floor(top/height*2) < 1.25){
        document.querySelector('#about .content').style.transform = "translateX(0)";
        document.getElementById('about').querySelector('#content').style.animation = "fadeIn 2.5s";
    }else if(Math.floor(top/height*2) / 2 - .25 >= 1.25 && Math.floor(top/height*2) < 2.25){
        document.querySelector('#roadmap .content').style.transform = "translateX(0)";
        document.getElementById('roadmap').querySelector('#content').style.animation = "fadeIn 2.5s";
    }else if(Math.floor(top/height*2) / 2 >= 2.25 && Math.floor(top/height*2) / 2 < 3.25){
        document.querySelector('#contact .content').style.transform = "translateX(0)";
        document.getElementById('contact').querySelector('#content').style.animation = "fadeIn 2.5s";
    }
    if (top < height) {
        main.classList.add('active');
        about.classList.remove('active');
        roadmap.classList.remove('active');
        contact.classList.remove('active');
    } else if (Math.floor(top / height) == 1) {
        main.classList.remove('active');
        about.classList.add('active');
        roadmap.classList.remove('active');
        contact.classList.remove('active');       
    } else if (Math.floor(top / height) == 2) {
        main.classList.remove('active');
        about.classList.remove('active');
        roadmap.classList.add('active');
        contact.classList.remove('active');
    } else if (Math.floor(top / height) == 3) {
        main.classList.remove('active');
        about.classList.remove('active');
        roadmap.classList.remove('active');
        contact.classList.add('active');
    }
};

change();

window.onscroll = function(){
    var top = window.scrollY;
    var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    if(top > 15){
        document.querySelector('.nav').style.filter = "brightness(90%)";
        document.querySelector('.nav').style.webkitFilter = "brightness(90%)";
        document.querySelector('.nav').style.backdropFilter = "blur(20px) brightness(70%)";
    }else{
        document.querySelector('.nav').style.removeProperty('filter');
        document.querySelector('.nav').style.removeProperty('-webkit-filter');
        document.querySelector('.nav').style.removeProperty('backdrop-filter');
    }
    console.log(Math.floor(top/height*100) / 100);
    if(Math.floor(top/height*100) / 100 >= 0 && Math.floor(top/height*100) / 100 < .5){
        document.querySelector('#main .content').style.transform = "translateX(0)";
        document.getElementById('main').querySelector('#content').style.animation = "fadeIn 2.5s";
    }else if (Math.floor(top/height*100) / 100 >= .5 && Math.floor(top/height*100) /100 < 1.25){
        document.querySelector('#about .content').style.transform = "translateX(0)";
        document.getElementById('about').querySelector('#content').style.animation = "fadeIn 2.5s";
    }else if(Math.floor(top/height*100) / 100 - .25 >= 1.25 && Math.floor(top/height*100) /100 < 2.25){
        document.querySelector('#roadmap .content').style.transform = "translateY(0)";
        document.getElementById('roadmap').querySelector('#content').style.animation = "fadeIn 2.5s";
    }else if(Math.floor(top/height*100) / 100 >= 2.25 && Math.floor(top/height*100) / 100 < 3.25){
        document.querySelector('#contact .content').style.transform = "translateX(0)";
        document.getElementById('contact').querySelector('#content').style.animation = "fadeIn 2.5s";
    }
    if (top < height) {
        main.classList.add('active');
        about.classList.remove('active');
        roadmap.classList.remove('active');
        contact.classList.remove('active');
    } else if (Math.floor(top / height) == 1) {
        main.classList.remove('active');
        about.classList.add('active');
        roadmap.classList.remove('active');
        contact.classList.remove('active');       
    } else if (Math.floor(top / height) == 2) {
        main.classList.remove('active');
        about.classList.remove('active');
        roadmap.classList.add('active');
        contact.classList.remove('active');
    } else if (Math.floor(top / height) == 3) {
        main.classList.remove('active');
        about.classList.remove('active');
        roadmap.classList.remove('active');
        contact.classList.add('active');
    }
}