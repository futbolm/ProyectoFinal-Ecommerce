// Botoón para abirr y cerrar menu por id
const btnMenu = document.querySelector('#btnMenu'); 
// Coger el ul que es donde tenemos los items de navegación
const menu = document.querySelector('.idmenu'); 
// Overlay
const overlayMenu = document.querySelector('.overlayMenu');


// Al hacer click en btnMenu
btnMenu.addEventListener('click', function(){
    if(menu.classList.contains('mostrar')){
        menu.classList.remove('mostrar');
        btnMenu.classList.remove('closeBar'); // Añadir y agregar el closeBar osea el efecto hamburguesa para el icono creado con el span
    }else{
        menu.classList.add('mostrar');
        btnMenu.classList.add('closeBar'); // Añadir y agregar el closeBar osea el efecto hamburguesa para el icono creado con el span
    }

    // Para el overlay
    if(btnMenu.classList.contains('closeBar')){
        overlayMenu.classList.add('displayOverlayMenu');
    }else{
        overlayMenu.classList.remove('displayOverlayMenu');
    }
});


overlayMenu.addEventListener('click', function(){
    overlayMenu.classList.remove('displayOverlayMenu');    
    menu.classList.remove('mostrar');
    btnMenu.classList.remove('closeBar'); 
});


