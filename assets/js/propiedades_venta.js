import { propiedades_ventas } from "./propiedades.js";

const container = document.querySelector(".ventas")

export const enVenta = (propiedades_ventas) => {

    let contenidoHTML = '';
    for (let propiedad of propiedades_ventas) {
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

enVenta(propiedades_ventas)