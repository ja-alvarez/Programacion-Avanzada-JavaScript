class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
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

    setComentarios(nuevoComentario) {
        this._comentarios = nuevoComentario;
    }

    get sonido() {
        return this._sonido;
    }

}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Rugir() {
        console.log(`${this._nombre} está rugiendo: ¡Grrr!`);
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Aullar() {
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Gruñir() {
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Sisear() {
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Chillar() {
    }
}

const nombreAnimal = document.getElementById('animal').value;
const edadAnimal = document.getElementById('edad').value;
const comentariosAnimal = document.getElementById('comentarios').value;

const obtenerAnimales = async () => {
    try {
        const response = await fetch('./animales.json');
        if (response.status === 200) {
            const data = await response.json();
            mostrar(data);
        }
    } catch (error) {
        console.error('Error al obtener datos', error);
    }
}

const mostrar = (data) => {
    try {
        data.forEach(animales => {
            const img = './assets/imgs/' + animales.imagen; //./animales.json
            const sonido = './assets/sounds/' + animales.sonido;
            return img, sonido;
        });
    } catch (error) {
        console.log(error)
    }
}

/*
function obtenerImagen(nombreAnimal) {
    fetch('./animales.json')
        .then(response => response.json())
        .then(data => {
            const animalData = data.animales.find(animal => animal.name === nombreAnimal);
            if (!animalData) {
                console.error('Animal no reconocido');
                return;
            }
            const imagenPath = `./assets/imgs/${animalData.imagen}`;
            const sonidoPath = `./assets/sounds/${animalData.sonido}`;
        //    console.log('Imagen path:', imagenPath);
        //    console.log('Sonido path:', sonidoPath);
        })
        .catch(error => {
            console.error('Error fetching animal data:', error);
        });
}
*/ 

let animalSeleccionado;

switch (nombreAnimal) {
    case 'Leon':
        animalSeleccionado = new Leon(nombreAnimal, edadAnimal, obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
        break;
    case 'Lobo':
        animalSeleccionado = new Lobo(nombreAnimal, edadAnimal, obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
        break;
    case 'Oso':
        animalSeleccionado = new Oso(nombreAnimal, edadAnimal, obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
        break;
    case 'Serpiente':
        animalSeleccionado = new Serpiente(nombreAnimal, edadAnimal, obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
        break;
    case 'Aguila':
        animalSeleccionado = new Aguila(nombreAnimal, edadAnimal, obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
        break;
   // default:
   //     console.error('Animal no reconocido');
}