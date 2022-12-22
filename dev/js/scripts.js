
// Background hover effect
const mainElement = document.getElementById("main");
mainElement.addEventListener("mousemove", (e) =>{
    updateBg(e.clientX, e.clientY);
    mainElement.classList.add("moved");
});
function updateBg(x,y){
    mainElement.style.setProperty('--x', -x * 0.15 + 'px');
    mainElement.style.setProperty('--y', -y * 0.15 + 'px');
}

// Typed text elements
const typedElements = document.querySelectorAll(".typedText");
typedElements.forEach(el => {
    typeText(el);
});
function typeText(element){
    var i = 0;
    var txt = element.innerHTML;
    var speed = 20;
    var delay = 0;
    var delay = element.dataset.typeDelay;
    
    element.innerHTML = "";

    function typeCharacter(){
        if(i <= txt.length){
            element.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeCharacter, speed);
        }
    }
    setTimeout(typeCharacter, delay); 
}

// PC menu items
const menuItems = document.querySelectorAll(".pc__menu button");
menuItems.forEach(el => {
    var navTarget = el.dataset.navTarget;
    console.log(navTarget);
    el.addEventListener("click", function(){
        openSidebar(navTarget);
        changePcScreen(navTarget);
    });
});

function changePcScreen(target){
    var navLocation = document.querySelector('#pcContent [data-nav-location="' + target + '"]');
    var allSlides   = Array.prototype.slice.call(document.querySelectorAll("#pcContent .owl-item"));
    var slideNumber = allSlides.indexOf(navLocation.parentNode);

    $(".pc__slider").trigger('to.owl.carousel', [slideNumber, 500]);

}

function openSidebar(target){
    var navLocation = document.querySelector('#contentSide [data-nav-location="' + target + '"]');
    var allSlides   = Array.prototype.slice.call(document.querySelectorAll("#contentSide .owl-item"));
    var slideNumber = allSlides.indexOf(navLocation.parentNode);

    console.log(allSlides);
    document.body.classList.add("sideActive");

    $(".contentSide__slider").trigger('to.owl.carousel', [slideNumber, 0]);

}

function closeSidebar(){
    document.body.classList.remove("sideActive");
}

const backButtons = document.querySelectorAll('button[data-nav-target="home"]');
backButtons.forEach(el => {
    el.addEventListener('click', function(){
        closeSidebar();
        changePcScreen("home");
    });
});

// Carousels
$(document).ready(function(){
    $(".pc__slider").owlCarousel({
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        margin: 5,
        animateIn: 'fadeIn',
    });
    $(".contentSide__slider").owlCarousel({
        items: 1,
        autoHeight: true,
        autoHeightClass: '',
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
    });
});
// $(".pc__slider").on('change.owl.carousel', function(e){
//     var typedElements = $('.pc__slider .owl-item.active .typedText');
//     typedElements.each(function(){
//         typeText($(this)[0]);
//     });
// });