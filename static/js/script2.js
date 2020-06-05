const MAXIMOS_INTENTOS = 10, 
    COLUMNAS = 4, 
    SEGUNDOS_ESPERA_VOLTEAR_IMAGEN = 1,
    NOMBRE_IMAGEN_OCULTA = "/static/img/question.jpg"; 
new Vue({
    el: "#app",
    data: () => ({
        // La ruta de las imágenes
        imagenes: [
            "/static/img/cabra.jpg",
            "/static/img/conejo.jpg",
            "/static/img/leon.jpg",
            "/static/img/oveja.jpg",
            "/static/img/perro.jpg",
            "/static/img/gato.jpg",
        ],
        memorama: [],
        ultimasCoordenadas: {
            indiceFila: null,
            indiceImagen: null,
        },
        NOMBRE_IMAGEN_OCULTA: NOMBRE_IMAGEN_OCULTA,
        MAXIMOS_INTENTOS: MAXIMOS_INTENTOS,
        intentos: 0,
        aciertos: 0,
        esperandoTimeout: false,
    }),
    methods: {
        mostrarCreditos() {
            Swal.fire({
                title: "Acerca de",
                html: `asdasd
                `,
                confirmButtonText: "Cerrar",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        },
        // Métodos
        indicarFracaso() {
            Swal.fire({
                    title: "Perdiste",
                    html: `
                <img class="img-fluid" src="/static/img/perdiste.jpg" alt="Perdiste">
                <p class="h4">Agotaste tus intentos</p>`,
                    confirmButtonText: "Jugar de nuevo",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                })
                .then(this.reiniciarJuego)
        },
        
        
        indicarVictoria() {
            Swal.fire({
                    title: "¡Ganaste!",
                    html: `
                <img class="img-fluid" src="/static/img/ganaste.jpg" alt="Ganaste">
                <p class="h4">Muy bien hecho</p>`,
                    confirmButtonText: "Avanzar",
                    allowOutsideClick: true,
                    allowEscapeKey: false,
                })
                .then(location.href = '/mesGato/')

        },
        
        haGanado() {
            return this.memorama.every(arreglo => arreglo.every(imagen => imagen.acertada));
        },
        
        mezclarArreglo(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        },
        
        aumentarIntento() {
            this.intentos++;
            if (this.intentos >= MAXIMOS_INTENTOS) {
                this.indicarFracaso();
            }
        },
        // Se desencadena cuando se hace click en la imagen
        voltear(indiceFila, indiceImagen) {
            // Si se está regresando una imagen a su estado original, detener flujo
            if (this.esperandoTimeout) {
                return;
            }
            // Si es una imagen acertada, no nos importa que la intenten voltear
            if (this.memorama[indiceFila][indiceImagen].acertada) {
                return;
            }
            // Si es la primera vez que la selecciona
            if (this.ultimasCoordenadas.indiceFila === null && this.ultimasCoordenadas.indiceImagen === null) {
                this.memorama[indiceFila][indiceImagen].mostrar = true;
                this.ultimasCoordenadas.indiceFila = indiceFila;
                this.ultimasCoordenadas.indiceImagen = indiceImagen;
                return;
            }
            // Si es el que estaba mostrada, lo ocultamos de nuevo
            let imagenSeleccionada = this.memorama[indiceFila][indiceImagen];
            let ultimaImagenSeleccionada = this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen];
            if (indiceFila === this.ultimasCoordenadas.indiceFila &&
                indiceImagen === this.ultimasCoordenadas.indiceImagen) {
                this.memorama[indiceFila][indiceImagen].mostrar = false;
                this.ultimasCoordenadas.indiceFila = null;
                this.ultimasCoordenadas.indiceImagen = null;
                this.aumentarIntento();
                return;
            }

            // En caso de que la haya encontrado, ¡acierta!
            // Se basta en ultimaImagenSeleccionada
            this.memorama[indiceFila][indiceImagen].mostrar = true;
            if (imagenSeleccionada.ruta === ultimaImagenSeleccionada.ruta) {
                this.aciertos++;
                this.memorama[indiceFila][indiceImagen].acertada = true;
                this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].acertada = true;
                this.ultimasCoordenadas.indiceFila = null;
                this.ultimasCoordenadas.indiceImagen = null;
                // Cada que acierta comprobamos si ha ganado
                if (this.haGanado()) {
                    this.indicarVictoria();
                }
            } else {
                // Si no acierta, entonces giramos ambas imágenes
                this.esperandoTimeout = true;
                setTimeout(() => {
                    this.memorama[indiceFila][indiceImagen].mostrar = false;
                    this.memorama[indiceFila][indiceImagen].animacion = false;
                    this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].mostrar = false;
                    this.ultimasCoordenadas.indiceFila = null;
                    this.ultimasCoordenadas.indiceImagen = null;
                    this.esperandoTimeout = false;
                }, SEGUNDOS_ESPERA_VOLTEAR_IMAGEN * 1000);
                this.aumentarIntento();
            }
        },
        reiniciarJuego() {
            let memorama = [];
            this.imagenes.forEach((imagen, indice) => {
                let imagenDeMemorama = {
                    ruta: imagen,
                    mostrar: false, 
                    acertada: false,
                };
                
                memorama.push(imagenDeMemorama, Object.assign({}, imagenDeMemorama));
            });

            
            this.mezclarArreglo(memorama);

            
            let memoramaDividido = [];
            for (let i = 0; i < memorama.length; i += COLUMNAS) {
                memoramaDividido.push(memorama.slice(i, i + COLUMNAS));
            }
            
            this.intentos = 0;
            this.aciertos = 0;
            
            this.memorama = memoramaDividido;
        },
       
        precargarImagenes() {
            
            Swal.fire({
                    title: "Cargando",
                    html: `Cargando imágenes...`,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                })
                .then(this.reiniciarJuego)
                
            Swal.showLoading();


            let total = this.imagenes.length,
                contador = 0;
            let imagenesPrecarga = Array.from(this.imagenes);
            // También vamos a precargar la "espalda" de la tarjeta
            imagenesPrecarga.push(NOMBRE_IMAGEN_OCULTA);
            // Cargamos cada imagen y en el evento load aumentamos el contador
            imagenesPrecarga.forEach(ruta => {
                const imagen = document.createElement("img");
                imagen.src = ruta;
                imagen.addEventListener("load", () => {
                    contador++;
                    if (contador >= total) {
                        // Si el contador >= total entonces se ha terminado la carga de todas
                        this.reiniciarJuego();
                        Swal.close();
                    }
                });
                
                document.body.appendChild(imagen);
                document.body.removeChild(imagen);
            });
        },
    },
    mounted() {
        this.precargarImagenes();
    },
});