class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get Nombre() {
        return this._nombre;
    }
    get Edad() {
        return this._edad;
    } 

    get img() {
        return this._img;
    }

    setComentarios(nuevoComentario){
        this._comentarios = nuevoComentario;
    }

    get sonido() {
        return this._sonido;
    }

}

class Leon extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido );
    }
    Rugir (){  
        console.log(`${this._nombre} está rugiendo: ¡Grrr!`);    
    }
}

class Lobo extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido );
    }
    Aullar (){      
    }
}

class Oso extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido );
    }
    Gruñir (){      
    }
}

class Serpiente extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido );
    }
    Sisear (){      
    }
}

class Aguila extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido );
    }
    Chillar (){      
    }
}

const nombre = document.getElementById('animal');
const edad = document.getElementById('edad');
const comentarios = getElementById('comentarios');

function obtenerImagen (){
    const imagenes = { //imagenes is declared but its value is never read
        Leon: 'assets/imgs/Leon.png',
        Lobo: 'assets/imgs/Lobo.jpg',
        Oso: 'assets/imgs/Oso.jpg',
        Serpiente: 'assets/imgs/Serpiente.jpg',
        Aguila: 'assets/imgs/Aguila.png'
    }
}

function obtenerSonido (){
    const sonidos = { // corregir
        Leon: 'assets/sounds/Rugido.mp3',
        Lobo: 'assets/sounds/Aullido.mp3',
        Oso: 'assets/assets/sounds/Grunido.mp3',
        Serpiente: 'assets/assets/sounds/Siseo.mp3',
        Aguila: 'assets/sounds/Chillido.mp3'
    }
}

function agregarAnimal() {
    const nombre = nombre.value;
    const edad = edad.value;
    const comentarios = comentarios.value;
    const img = obtenerImagen(nombre); //Pendiente implementar
    const sonido = obtenerSonido(nombre); //Pendiente

    
}