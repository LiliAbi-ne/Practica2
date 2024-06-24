document.getElementById("combinacionesRst").addEventListener('click', generarNombre());



function generarNombre() {
    const apellido = ["Sanchez", "Avíla", "Rosado", "Chay", "Guerrero", "Tamayo", "Celis", "Martinez"];
    const nombre = ["Peludo", "Nieves", "Hiro", "Max", "Cosa", "Coco", "Luna", "Zoe", "Pancho", "Twinky"];
    console.log(" ola ")
    var Nombre1 = nombre[Math.floor(Math.random() * nombre.length)];
    var Nombre2 = apellido[Math.floor(Math.random() * apellido.length)];
    var NombreCompl = `${Nombre1} ${Nombre2}`;
    document.getElementById("combinacionesRst").innerText = NombreCompl;
};