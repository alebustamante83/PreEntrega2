
class Zapatilla{
    constructor(id, codigo, genero, marca, precio, talle){
        this.id = id;
        this.codigo = codigo;
        this.genero = genero;
        this.marca = marca;
        this.precio = precio;
        this.talle = talle;
    } 
}

//-------------------------------------------------------------------------
const zapatillas = [];
zapatillas.push (new Zapatilla(1, 1, "HOMBRE", "ADIDAS", 1500, 39));
zapatillas.push (new Zapatilla(2, 1, "HOMBRE", "NIKE", 1600, 41));
zapatillas.push (new Zapatilla(3, 1, "HOMBRE", "CONVERSER", 1700, 38));
zapatillas.push (new Zapatilla(4, 1, "HOMBRE", "REEBOK", 1500, 37));
zapatillas.push (new Zapatilla(5, 1, "HOMBRE", "PUMA", 1500, 40));
zapatillas.push (new Zapatilla(6, 2, "MUJER", "ADIDAS", 1500, 35));
zapatillas.push (new Zapatilla(7, 2, "MUJER", "NIKE", 1500, 37));
zapatillas.push (new Zapatilla(8, 2, "MUJER", "CONVERSER", 1500, 36));
zapatillas.push (new Zapatilla(9, 2, "MUJER", "REEBOK",1500, 39));
zapatillas.push (new Zapatilla(10, 2, "MUJER", "PUMA", 1500, 40));
zapatillas.push (new Zapatilla(11, 3, "NIÑO", "ADIDAS", 1500, 15));
zapatillas.push (new Zapatilla(12, 3, "NIÑO", "NIKE", 1500, 17));
zapatillas.push (new Zapatilla(13, 3, "NIÑO", "CONVERSER", 1500, 19));
zapatillas.push (new Zapatilla(14, 3, "NIÑO", "REEBOK", 1500, 18));
zapatillas.push (new Zapatilla(15, 3, "NIÑO", "PUMA", 1500, 20));

//-------------------------------------------------------------------------
function preguntaTipoCompra (){ 
    let tipo
    do {
        tipo = Number(prompt("QUE ZAPATILLA DESEA COMPRAR? \n\
1- HOMBRE \n\
2- MUJER \n\
3- NIÑO" ));
    } while ((tipo != 1) && (tipo != 2) && (tipo != 3));
    return tipo;
}
//-------------------------------------------------------------------------    
function seleccionProducto(tipoDeProducto){
    const resultado = zapatillas.filter((zapa) => zapa.codigo === tipoDeProducto);
    let listadoZapas = Number(prompt("LAS ZAPATILLAS DE " + resultado[0].genero + " SON: \n\
1- " + resultado[0].marca + ": $" + resultado[0].precio + " TALLE: " + resultado[0].talle + "\n\
2- " + resultado[1].marca + ": $" + resultado[1].precio + " TALLE: " + resultado[1].talle + "\n\
3- " + resultado[2].marca + ": $" + resultado[2].precio + " TALLE: " + resultado[2].talle + "\n\
4- " + resultado[3].marca + ": $" + resultado[3].precio + " TALLE: " + resultado[3].talle + "\n\
5- " + resultado[4].marca + ": $" + resultado[4].precio + " TALLE: " + resultado[4].talle + "\n\
SELECCIONE EL MODELO QUE DESEA COMPRAR"));
    return carrito.push (resultado[(listadoZapas-1)].id);
}

//---------------------------------------------------------------------------
function carritoCompras() {
    let totalCompra = 0;
    const calcularIva = precioSinIva =>  precioSinIva + (precioSinIva * 0.21)
    for (let i = 0; i < carrito.length; i++) {
        totalCompra +=  (calcularIva(zapatillas[(carrito[i])].precio));
    }    
    alert("USTED VA A ABONAR: $" + totalCompra + " POR EL TOTAL DE SU COMPRA CON IVA" ) ;
}

//--------------------------------------------------------------------------
const carrito = [];
alert("BIENVENIDO A NUESTRA STORE DE ZAPATILLAS") //INICIO DE LA PAGINA
let tipoDeProducto; //= pregunta() //PREGUNTA CUANTOS PRODUCTOS VA A COMPRAR
let seguir;
do {
    tipoDeProducto = preguntaTipoCompra();
    let cantidadDeZapatillas = seleccionProducto(tipoDeProducto);
    if (confirm("DESEA SEGUIR COMPRANDO ALGUN PRODUCTO MAS?") == false) {
        break;
      }
} while (seguir != 2);
alert("SERA REDIRIGIDO A NUESTRO CARRITO DE COMPRA")
let total= carritoCompras();
alert("GRACIAS POR COMPRAR EN CODERHOUSE")
