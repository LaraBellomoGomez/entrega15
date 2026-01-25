import { propiedades_alquiler } from "./propiedades.js";

const container = document.querySelector(".alquiler")

export const enAlquiler = (propiedades_alquiler) => {

    let contenidoHTML = '';
    for (let propiedad of propiedades_alquiler) {
        contenidoHTML += `
        <div>
            <h3>Titulo: ${propiedad.nombre}</h3>
            <img src="${propiedad.src}" alt="Apartamento">
            <p>Descripcion: ${propiedad.descripcion}</p>
            <p>Habitaciones: ${propiedad.habitaciones}</p>
            <h4>Costo: ${propiedad.costo}</h4>


        </div>
        
    
        `
    }

    container.innerHTML = contenidoHTML;
}

enAlquiler(propiedades_alquiler)