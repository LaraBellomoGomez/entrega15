import { propiedades_alquiler, propiedades_ventas } from "./propiedades.js";

export const mostrarPropiedades = (arraysPropiedades, contenedorHTML) => {
    const container = document.querySelector(contenedorHTML)

    let contador = 0;

    let contenidoHTLM = '';

    for (const propiedad of arraysPropiedades) {
        if (contador < 3) {
            contenidoHTLM +=
                `
                    <div class="card" >
            <h4> ${propiedad.nombre}</h4>
            <img src="${propiedad.src}" alt="Apartamento">
            <p>Descripcion: ${propiedad.descripcion}</p>
            <p>Habitaciones: ${propiedad.habitaciones}</p>
            <p style="font-weight: bold;">Costo: $  ${propiedad.costo}</p>

            <p style="color: ${propiedad.smoke ? 'green' : 'red'}">
                ${propiedad.smoke
                    ? '<i class="fas fa-smoking"></i> Permitido fumar'
                    : '<i class="fas fa-smoking-ban"></i> No se permite fumar'
                }
            </p>

             <p style="color: ${propiedad.pets ? 'green' : 'red'}">
                ${propiedad.smoke
                    ? '<i class="fas fa-paw"></i> Mascotas permitidas'
                    : '<i class="fas fa-ban"></i> No se permiten mascotas'
                }
            </p>
        </div>
        `
            contador++;

        }
    }

    container.innerHTML = contenidoHTLM
}

mostrarPropiedades(propiedades_ventas, ".propiedadesVenta");
mostrarPropiedades(propiedades_alquiler, ".propiedadesAlquiler");