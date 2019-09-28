const app = new Vue({

    el: '#app',
    data: {        
        curso: [],
        nuevoCurso: ''

    },
    methods: {
        agregarCurso: function () {
            this.curso.push({
                name: this.nuevoCurso,
                Estado: false
            });
            this.nuevoCurso = '';
            localStorage.setItem('curso', JSON.stringify(this.curso));
        },
        editarCurso: function (index) {
            if(this.curso[index].Estado){
                this.curso[index].Estado = false;
            }else{
                this.curso[index].Estado = true;
            }
            
            localStorage.setItem('curso', JSON.stringify(this.curso));
        },
        eliminarCurso: function (index) {
            this.curso.splice(index, 1);
            localStorage.setItem('curso', JSON.stringify(this.curso));
        }
    },
    created: function () {
        let datoscursoDB = JSON.parse(localStorage.getItem('curso'));
        if (datoscursoDB === null) {
            this.curso = [];
        } else {
            this.curso = datoscursoDB;
        }
        console.log(datoscursoDB);
    }



})

