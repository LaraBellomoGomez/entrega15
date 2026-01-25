
export const rutaInmuebles = (ruta) => {
    location.href = ruta;
};

document.querySelector("#botonVentas").addEventListener("click", () => {
    rutaInmuebles("./assets/paginas/propiedades_venta.html");
});

document.querySelector("#botonAlquiler").addEventListener("click", () => {
    rutaInmuebles("./assets/paginas/propiedades_alquiler.html");
});

