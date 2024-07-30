$(function(){
   
    AOS .init({
        easing:'ease',
        duration:1000,
    })
})
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.redirectButton');
    buttons.forEach(button => {
        button.onclick = function() {
            window.location.href = 'index.html'; 
        };
    });
});