
// Background hover effect
const mainElement = document.getElementById("main");
mainElement.addEventListener("mousemove", (e) =>{
    mainElement.style.setProperty('--x', -e.clientX * 0.25 + 'px');
    mainElement.style.setProperty('--y', -e.clientY * 0.25 + 'px');
});

function typeText(){
    
    var i = 0;
    var txt = "Hello! I am James, a creative front end developer";
    var speed = 50;

    document.querySelector(".typeText").innerHTML = "";
    function typeCharacter(){
        if(i <= txt.length){
            document.querySelector(".typeText").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeCharacter, speed);
        }
    }
    typeCharacter();
}
typeText();

