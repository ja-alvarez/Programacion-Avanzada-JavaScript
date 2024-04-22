(function () {
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
            const audio = new Audio(this._sonido);
            audio.play();
        }
    }

    class Lobo extends Animal {
        constructor(nombre, edad, img, comentarios, sonido) {
            super(nombre, edad, img, comentarios, sonido);
        }
        Aullar() {
            const audio = new Audio(this._sonido);
            audio.play();
        }
    }

    class Oso extends Animal {
        constructor(nombre, edad, img, comentarios, sonido) {
            super(nombre, edad, img, comentarios, sonido);
        }
        Grunir() {
            const audio = new Audio(this._sonido);
            audio.play();
        }
    }

    class Serpiente extends Animal {
        constructor(nombre, edad, img, comentarios, sonido) {
            super(nombre, edad, img, comentarios, sonido);
        }
        Sisear() {
            const audio = new Audio(this._sonido);
            audio.play();
        }
    }

    class Aguila extends Animal {
        constructor(nombre, edad, img, comentarios, sonido) {
            super(nombre, edad, img, comentarios, sonido);
        }
        Chillar() {
            const audio = new Audio(this._sonido);
            audio.play();
        }
    }

    const mostrar = async (data) => {
        try {
            const nombreAnimal = document.getElementById('animal').value;
            const edadAnimal = document.getElementById('edad').value;
            const comentariosAnimal = document.getElementById('comentarios').value;

            //Validación que los campos no estén vacíos
            if (!nombreAnimal || !edadAnimal || !comentariosAnimal) {
                alert('Por favor, complete todos los campos del formulario antes de agregar el animal.');
                return;
            }

            let animalSeleccionado;

            switch (nombreAnimal) {
                case 'Leon':
                    animalSeleccionado = new Leon(nombreAnimal, edadAnimal, await obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
                    break;
                case 'Lobo':
                    animalSeleccionado = new Lobo(nombreAnimal, edadAnimal, await obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
                    break;
                case 'Oso':
                    animalSeleccionado = new Oso(nombreAnimal, edadAnimal, await obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
                    break;
                case 'Serpiente':
                    animalSeleccionado = new Serpiente(nombreAnimal, edadAnimal, await obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
                    break;
                case 'Aguila':
                    animalSeleccionado = new Aguila(nombreAnimal, edadAnimal, await obtenerImagen(nombreAnimal), comentariosAnimal, obtenerSonido(nombreAnimal));
                    break;
            }

            const nuevaImagen = document.createElement('img');
            nuevaImagen.src = `./assets/imgs/${animalSeleccionado.img}`;
            nuevaImagen.alt = nombreAnimal;

            nuevaImagen.onclick = () => mostrarDetalleModal(animalSeleccionado);

            const iconoSonido = document.createElement('input');
            iconoSonido.type = 'image';
            iconoSonido.src = 'assets/imgs/audio.svg';
            iconoSonido.alt = 'Imagen de botón';
            iconoSonido.onclick = () => reproducirSonido(animalSeleccionado.sonido);

            const contenedorAnimal = document.createElement('div');
            contenedorAnimal.classList.add('animal-container');
            contenedorAnimal.appendChild(nuevaImagen);
            contenedorAnimal.appendChild(iconoSonido);

            const contenedorAnimales = document.getElementById('Animales');

            contenedorAnimales.appendChild(contenedorAnimal);
            limpiarFormulario();
            asociarReproduccionAudio();
        } catch (error) {
            console.log(error)
        }
    }

    const limpiarFormulario = () => {
        document.getElementById('animal').selectedIndex = 0;
        document.getElementById('edad').selectedIndex = 0;
        document.getElementById('comentarios').value = '';
    }

    const asociarReproduccionAudio = () => {
        const botonesAudio = document.querySelectorAll('.btn-audio');
        botonesAudio.forEach(boton => {
            boton.addEventListener('click', reproducirSonido);
        });
    }

    const reproducirSonido = (event) => {
        const sonido = event.target.dataset.sonido;
        const audio = document.getElementById('player');
        audio.src = sonido;
        audio.play();
    };
    // const reproducirSonido = (event) => {
    //     const sonido = event.target.dataset.sonido;
    //     const audio = new Audio(sonido);
    //     audio.play();
    // }

    const obtenerImagen = (nombreAnimal) => {
        return new Promise((resolve, reject) => {
            fetch('./animales.json')
                .then(response => response.json())
                .then(data => {
                    const animalData = data.animales.find(animal => animal.name === nombreAnimal);
                    if (!animalData) {
                        console.error('Animal no reconocido');
                        reject('Animal no reconocido');
                    }
                    const imagenPath = `./assets/imgs/${animalData.imagen}`;
                    resolve(imagenPath);
                })
                .catch(error => {
                    console.error('Error fetching animal data:', error);
                    reject('Error fetching animal data');
                });
        });
    };

    const btn = document.getElementById('btnRegistrar');
    btn.addEventListener('click', mostrar);

    // const obtenerAnimales = async () => {
    //     try {
    //         const response = await fetch('./animales.json');
    //         if (response.status === 200) {
    //             const data = await response.json();
    //             mostrar(data);
    //         }
    //     } catch (error) {
    //         console.error('Error al obtener datos', error);
    //     }
    // }

    const obtenerSonido = (nombreAnimal) => {
        return new Promise((resolve, reject) => {
            fetch('./animales.json')
                .then(response => response.json())
                .then(data => {
                    const animalData = data.animales.find(animal => animal.name === nombreAnimal);
                    if (!animalData) {
                        console.error('Animal no reconocido');
                        reject('Animal no reconocido');
                    }
                    const sonidoPath = `./assets/sounds/${animalData.sonido}`;
                    resolve(sonidoPath);
                })
                .catch(error => {
                    console.error('Error fetching animal data:', error);
                    reject('Error fetching animal data');
                });
        });
    };

    const mostrarDetalleModal = (nombreAnimal, edadAnimal, comentariosAnimal) => {
        document.getElementById('modalNombre').innerText = nombreAnimal;
        document.getElementById('modalEdad').innerText = edadAnimal;
        document.getElementById('modalComentarios').innerText = `Comentarios:\n\n${comentariosAnimal}`;

        $('#exampleModal').modal('show');
    };
})();
//**************** F I N   C O D I G O ********************
// *** PENDIENTE ***
// - CORREGIR RUTA IMAGENES Y SONIDOS
// - ORDENAR CÓDIGO, LIMPIAR Y DOCUMENTAR
// - MODULARIZAR

// - DORMIR();