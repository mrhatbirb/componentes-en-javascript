/*

Componentes HTML/Javascript

1 - Una parte de un elemento grande o pequeño
2 - Pieza modular e individual
3 - Usualmente consiste de HTML, CSS y JS
4 - Reusable

*/
const botonDePublicar = document.getElementById('publicar-twit-btn');
const formulario = document.getElementById('formulario');
// Declarar el event listener
// botonDePublicar.addEventListener('click', publicarTwit);
formulario.addEventListener('submit', publicarTwit);
// Seleccionar contenedor de publicaciones
const contenedorDePublicaciones = document.getElementById('post-container');

function publicarTwit(evento){
    evento.preventDefault()
    const titleInputValue = document.getElementById('title-input');
    const postContentValue = document.getElementById('post-content');
    const twit = {
        titulo: titleInputValue.value,
        contenido: postContentValue.value,
    }

    titleInputValue.value = '';
    postContentValue.value = '';


    // CrearNuevoTwit(twit);
    // CrearNuevoTwit2(twit);

    new Twit(contenedorDePublicaciones, twit);

}


function CrearNuevoTwit({titulo, contenido}){
    // Crear el contenedor
    const contenedor = document.createElement('div');
    contenedor.classList.add('card', 'post');

    // Crear el elemento de la imágen
    const imagen = document.createElement('img');
    imagen.classList.add('post-img');
    imagen.src = 'https://lh3.googleusercontent.com/proxy/5ct9e37RtBJXlTDkJ-d0eix218oShdLKHQ7ctMgNM6nyJY26KimCOqYvt1qChHYNyG4S9z1JPZEqA3XVlj52TDz-LZ_7fYehOvbhCL5aakwZ';
    imagen.alt = 'profile pic';

    // crear el titulo
    const contenedorDeTitulo = document.createElement('div');
    contenedorDeTitulo.classList.add('post-title');
    contenedorDeTitulo.textContent = titulo;

    // Creamos el contenido
    const contenedorDeContenido = document.createElement('div');
    contenedorDeContenido.classList.add('post-content');
    contenedorDeContenido.textContent = contenido;

    contenedor.appendChild(imagen);
    contenedor.appendChild(contenedorDeTitulo);
    contenedor.appendChild(contenedorDeContenido);

    return contenedor;
}

// JSX: JavaScript XML
// JSON: JavaScript Object Notation
function CrearNuevoTwit2({titulo, contenido}){
    
    const nuevoTwit = `
    <div class="card post">
        <img class="post-img" src="https://lh3.googleusercontent.com/proxy/5ct9e37RtBJXlTDkJ-d0eix218oShdLKHQ7ctMgNM6nyJY26KimCOqYvt1qChHYNyG4S9z1JPZEqA3XVlj52TDz-LZ_7fYehOvbhCL5aakwZ" alt="profile pic">
        <div class="post-title">${titulo}</div>
        <div class="post-content">${contenido}</div>
    </div>
    `;

    contenedorDePublicaciones.innerHTML += nuevoTwit;
}

class Twit {
    constructor(contenedor, {titulo, contenido}){
        this.titulo = titulo;
        this.contenido = contenido;
        this.contenedor = contenedor;

        if(this.validarEntrada()){
            this.agregarAlContenedor();
        }
    }

    generarElementos(){
        const nuevoTwit = `
        <div class="card post">
            <img class="post-img" src="https://lh3.googleusercontent.com/proxy/5ct9e37RtBJXlTDkJ-d0eix218oShdLKHQ7ctMgNM6nyJY26KimCOqYvt1qChHYNyG4S9z1JPZEqA3XVlj52TDz-LZ_7fYehOvbhCL5aakwZ" alt="profile pic">
            <div class="post-title">${this.titulo}</div>
            <div class="post-content">${this.contenido}</div>
        </div>
        `;

        return nuevoTwit;
    }

    validarEntrada(){
        if(!this.titulo){
            alert('Debes dar un título a tu twit!');
            return false;
        }
        
        if(!this.contenido){
            alert('Debes dar contenido a tu twit!');
            return false;
        }
        return true;
    }

    agregarAlContenedor(){
        this.contenedor.innerHTML += this.generarElementos();
    }

}


{/* <div class="card post">
    <img class="post-img" src="https://lh3.googleusercontent.com/proxy/5ct9e37RtBJXlTDkJ-d0eix218oShdLKHQ7ctMgNM6nyJY26KimCOqYvt1qChHYNyG4S9z1JPZEqA3XVlj52TDz-LZ_7fYehOvbhCL5aakwZ" alt="profile pic">
    <div class="post-title">Este es el twitter faik</div>
    <div class="post-content">Hola, les escribo desde el twitter de titiri mundati</div>
</div> */}
