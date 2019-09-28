const app = new Vue({
el: "#app",

data: {
    facultad:[],
    nuevaFacultad: ''

},
methods:
{
    agregarFacultad: function () {
        this.facultad.push({
            Nombre: this.nuevaFacultad,
                   });
        this.nuevaFacultad = '';
        localStorage.setItem('facultad', JSON.stringify(this.facultad));
    },
    eliminarFacultad: function (index) {
        this.facultad.splice(index, 1);
        localStorage.setItem('facultad', JSON.stringify(this.facultad));
    }
    
},
   
created: function () {
    let datosFacultadDB = JSON.parse(localStorage.getItem('facultad'));
    if (datosFacultadDB === null) {
        this.facultad = [];
    } else {
        this.facultad = datosFacultadDB;
    }
    console.log(datosFacultadDB);
}

})