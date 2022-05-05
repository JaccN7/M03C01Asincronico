//JavaScript Avanzado - Ejercicio asincrónico 01
//Crear clase Libro
class Libro {
    constructor(nombreLibro, autor, editorial, genero) {
        this.nombreLibro = nombreLibro;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
    }
    //Crear método para mostrarLibro
    mostrarLibro() {
        //return para mostrar el libro filtrado por autor
        return "Libro: " + this.nombreLibro + "<br/>Autor: " + this.autor + "<br/>Editorial: " + this.editorial + "<br/>Género: " + this.genero + "<hr/>";
    }
}

//Instanciar objetos de la clase Libro
var libroEnder = new Libro("Ender's Game", "Orson Scott Card", "Ediciones B", "Ciencia ficción");
var libroRevelation = new Libro("Mass Effect: Revelation", "Drew Karpyshyn", "Timun Mas", "Ciencia ficción");
var libroTaro = new Libro("Ciencia ficción", "Nicolas Turcev", "Héroes de Papel", "Ensayo");
var libroOrson = new Libro("La Tierra En Llamas", "Orson Scott Card", "Ediciones B", "Ciencia ficción");

/*libroEnder.mostrarLibro();
libroRevelation.mostrarLibro();
libroTaro.mostrarLibro();*/

var libros = [];
libros[0] = libroEnder;
libros[1] = libroRevelation;
libros[2] = libroTaro;
libros[3] = libroOrson;

//Crear función para filtrar libros por autor
function filtrarPorAutor(){
    var seleccion = document.querySelector('#autor');
    var opcion = seleccion.options[seleccion.selectedIndex];
    var value = opcion.value;
    var respuesta = " ";
    for(var i=0; i<libros.length; i++){
        //console.log(libros[i]);
       if(libros[i].autor == value){
           respuesta += libros[i].mostrarLibro() + " ";
       }
    }
    document.getElementById('parrafo').innerHTML = "<h4>Libros del autor: " + value + "</h4><p>" + respuesta + "</p>";
}
