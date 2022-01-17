//Crear variables que se van a manejar
let input = document.querySelector("input"); //selecciono la etiqueta "input" del html 
let addBtn = document.querySelector (".btn-add"); //selecciono la clase del boton agregar del html
let ul = document.querySelector ("ul"); //selecciono la etiqueta "ul" del html
let empty = document.querySelector(".empty") //selecciono la clase del div "empty" del html 

//agrego evento del boton agregar tarea 
addBtn.addEventListener('click', (e) => {
    e.preventDefault(); //para prevenir que el formulario se reinicie
    // console.log("Hago click");

    let textTarea = input.value; //capturo el valor que se escribe en el input

    if (textTarea !== "") { //corrobora que el valor del input no este vacio
        let li = document.createElement("li"); //se crea una lista 
        let p = document.createElement("p"); //se crean parrafos 
        p.textContent = textTarea; //convierto los valores del input en texto y se lo agrego a la variable p
    
        li.appendChild(p); //se agregan los parrafos con los valores del input en la li 
        li.appendChild(addDeleteBtn()); //va llamar la funcion, va crear el boton, le va agregar el evento y lo agrega al li
        ul.appendChild(li); // se agregan los elementos li a la ul del html
    
        input.value = ""; // para resetear la caja de texto del input
        empty.style.display = "none"; //cada vez que haya un elemento el p del div desaparezca
    }

});

//FUNCIONES
//funcion eliminar tarea
function addDeleteBtn () {
    let deleteBtn = document.createElement('button'); //creo la variable que crea el boton
    
    deleteBtn.textContent = "X"; //al boton le agrego texto
    deleteBtn.className = "btn-delete"; //creo la clase del boton

    deleteBtn.addEventListener('click', (e) => {
        let itemTarea = e.target.parentElement; //creo la variable que contiene la tarea y con e.target se refiere al boton y parentElement para eliminar el elemento que contiene al item
        ul.removeChild(itemTarea); //remueve el elemento seleccionado desde el padre ul
    
        let itemsLi = document.querySelectorAll("li");
        if (itemsLi.length == 0) { //corrobora que cuando no haya elementos en la li vuelva a aparecer el div .empty
            empty.style.display = "block"
        }
    });
    return deleteBtn; //regresa el boton que creamos
}

