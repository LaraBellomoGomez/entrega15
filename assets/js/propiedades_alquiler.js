import { propiedades_alquiler } from "./propiedades.js";

const container = document.querySelector(".alquiler");

export const enAlquiler = (propiedades_alquiler) => {

    let contenidoHTML = '';

    for (let propiedad of propiedades_alquiler) {
        contenidoHTML += `

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
        `;
    }

    container.innerHTML = contenidoHTML;
};

enAlquiler(propiedades_alquiler);
