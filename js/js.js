/* Se desarollan Funciones 
const suma = (a,b) => a + b ;
const division = (a,b) => a / b;

function sinumero(x) {
    if (isNaN(x)) {
      return 'No es un numero!';
    }
    return x;
  }
 

let sal = 1; //Se declara variable para romper ciclo
while (sal == 1) // Ciclo de menu
{
//Entrada para leer opcion del ingresante
let menu=prompt("Ingrese el numero de desafio para ver el desafio\n 1-Crear un algoritmo JS simple\n 2-Crear un algoritmo con un condicional\n 3-Crear un algoritmo utilizando un ciclo\n 4-Programacion avanzada con funciones\n 5-Salir ");   

    switch(menu)//Lectura de entrada de menu
    {
    case "1"://En caso de uno se muestra el primer Desafio
        alert("1-Crear un algoritmo JS simple");
        for (let i = 1; i <= 3; i++){
            let nombre= prompt ("Ingrese su nombre tutor:");
            if ((nombre == "juan") || (nombre == "Juan") || (nombre == "JUAN"))
            {
                alert("Muchas gracias por ingresar a los desafios");
                alert ("El primero se muestra en la consola");
                console.log("2+5");
                let resultado = prompt("Ingrese su resultado");
                while (resultado != 7) {
                resultado = prompt("El resultado es incoreco vuelva a ingresar el resultado:");
                }
                alert("El resultado es corecto Muchas Gracias!");
                
            } 
            else
            {
                alert("No es su nombre Tutor, intento " + "" + i +  "de 3");
            }
            }
            alert("Por favor recargue la pagina");
            alert("Este fue el desafio 1");
            break;
    case "2"://En caso de dos se muestra el segundo desafio
        alert("2-Crear un algoritmo con un condicional");
        for (let i = 1; i <= 3; i++){
            let nombre= prompt ("Ingrese su nombre tutor:");
            if ((nombre == "juan") || (nombre == "Juan") || (nombre == "JUAN"))
            {
                alert("Muchas gracias por ingresar a los desafios");
                alert ("El primero se muestra en la consola");
                console.log("2+5");
                let resultado = prompt("Ingrese su resultado");
                while (resultado != 7) {
                resultado = prompt("El resultado es incoreco vuelva a ingresar el resultado:");
                }
                alert("El resultado es corecto Muchas Gracias!");
                
            } 
            else
            {
                alert("No es su nombre Tutor, intento " + "" + i +  "de 3");
            }
            }
            alert("Por favor recargue la pagina");
            alert("Este fue el desafio 2");
            break;
    case "3"://En caso de 3 se muestra el tercer desafio
        alert("3-Crear un algoritmo utilizando un ciclo");
        alert("Este es el desafio 3");
        break;
    case "4"://En caso de 3 se muestra el cuarto desafio
        alert("4-Programacion avanzada con funciones");
        alert("Se va a mostrar parte en consola");
        console.log("El proyecto va a constar de unos dispositivos de reaccion que se encargan de tomar el tiempo de reaccion, cantidad de estimulos y saca un promedio de reaccion,etc");
        console.log("En principio se va a simular la base de datos de donde vienen los valores");
        dispositivo= prompt("Ingrese el numero del dispositivo que desea ver las resultados\n Dispositivos disponibles\n 1-Dispositivo1\n 2-Derecha\n 3-Izquierda\n 4-Salir");
        switch (dispositivo)
        {
            case "1":
                
                let estimulos = prompt("Ingrese la cantidad de estimulos a promediar");
                estimulos= sinumero(estimulos);

                console.log("La idea es que estos valores vallan llegando de la base de datos");
                
                for (i = 1; i <= estimulos; i++) 
                {   
                   let vsumar = prompt("Ingrese el tiempo del estimulo simulado ");
                   vsumar = Number(vsumar);
                   console.log(vsumar)
                   let promedio = suma(vsumar,vsumar)/ i;
                   console.log("El promedio es "+ promedio);
 
                
                }
                break;
            case "2":
                let estimulos = prompt("Ingrese la cantidad de estimulos a promediar");
                estimulos= sinumero(estimulos);

                console.log("La idea es que estos valores vallan llegando de la base de datos");
                
                for (i = 1; i <= estimulos; i++) 
                {   
                   let vsumar = prompt("Ingrese el tiempo del estimulo simulado ");
                   vsumar = Number(vsumar);
                   console.log(vsumar)
                   let promedio = suma(vsumar,vsumar)/ i;
                   console.log("El promedio es "+ promedio);
 
                
                }
            break;
            case "3":
                let estimulos = prompt("Ingrese la cantidad de estimulos a promediar");
                estimulos= sinumero(estimulos);

                console.log("La idea es que estos valores vallan llegando de la base de datos");
                
                for (i = 1; i <= estimulos; i++) 
                {   
                   let vsumar = prompt("Ingrese el tiempo del estimulo simulado ");
                   vsumar = Number(vsumar);
                   console.log(vsumar)
                   let promedio = suma(vsumar,vsumar)/ i;
                   console.log("El promedio es "+ promedio);
 
                
                }
            break;
            case "4":
                alert("Gracias por ver la entrega 4 :)");
            break;
            default:
                alert("El numero del dispositivo conectado no es correcto verifique el dispositivo");
            break;
        }
        break;
    case "5"://En caso de 4 saludo y rompe el ciclo
        alert("Gracias por ver mis desfios, Saludos\n No olvide recargar la pagina para ver cada seccion :)");
        sal = 0;//Se cambia el valor de sal para romper el ciclo 
        break;
    default: //Default por si no se ingresa el valor correcto
        alert("Su entrada no es correcta, por favor ingrese un numero correcto, Muchas gracias tutor");
        break;
}
}
*/

//INICIO PROJECTO JUEGO 
//Saludo
alert("Bienvenido al simulador de mazmorras");
alert("Aqui veremos tu valentia como explorador");
//Objetos 
class newplayer {
    constructor (nombre, puntuacion, daño, vida)
    {
    this.nombre = nombre;
    this.puntuacion= puntuacion;
    this.daño = daño;
    this.vida = vida;
    }
    puntuar() {
        this.puntuacion++;   
    }
}
function mobs(nombre, vida, daño)
{
this.nombre = nombre;
this.vida= vida;
this.daño= daño;
}

const zombie = new mobs("Zombie", 100 , 2);
const esqueleto = new mobs("Esqueleto", 100 , 4);
const fantasma = new mobs("Fantasma", 100 , 3);
//Inicio de juego
let player = prompt("Hola Ingrese su nombre de aventurero");
alert("Hola "+ player);

let arma  = prompt("Ingrese que el numero de la clase que desea ser\n 1-Arquero: Life = 90 Ataque = 10\n 2-Guerrero: Life = 120 Ataque = 8");
while (arma < 0 || arma > 3)
{
    arma  = prompt("Ingrese un numero correcto\n 1-Arquero: Life = 90 Ataque = 10\n 2-Guerrero: Life = 120 Ataque = 8") ;
}

const guerrero = new newplayer(player,0,18,100);
        let dañog = guerrero.daño;
        let vidag = guerrero.vida;
const arquero = new newplayer(player,0,28,80);
        let daño = arquero.daño;
        let vida = arquero.vida;

while ((vida > 0) && (vidag > 0))
{
       let bicho = Math.floor(Math.random() * 3) + 1; 
       switch (bicho)
       {
            case 1:
                alert("Aparecio un Zombie");
                let vidaz= zombie.vida;
                while (vidaz > 0)
                {
                    
                    if(arma == 1){
                        alert("La vida de "+ player + " es:"+ vida+ "\nLa vida del zombie es: " + vidaz);
                        vidaz = vidaz - daño;
                        vida = vida - zombie.daño;
                        arquero.puntuar();
                        alert("Su puntuacion es:" + arquero.puntuacion);
                    }
                    else
                    {
                        alert("La vida de "+ player + " es:"+ vidag+ "\nLa vida del zombie es: " + vidaz);
                        vidaz = vidaz - dañog;
                        vidag = vidag - zombie.daño;  
                        guerrero.puntuar();
                        alert("Su puntuacion es:" + guerrero.puntuacion); 
                    }
                }
                break;
            case 2:
                alert("Aparecio un Esqueleto");
                let vidae= esqueleto.vida;
                while (vidae > 0)
                {
                    
                    if(arma == 1){
                        alert("La vida de "+ player + " es:"+ vida+ "\nLa vida del zombie es: " + vidae);
                        vidaz = vidae - daño;
                        vida = vida - esqueleto.daño;
                        arquero.puntuar();
                        alert("Su puntuacion es:" + arquero.puntuacion);
                    }
                    else
                    {
                        alert("La vida de "+ player + " es:"+ vidag+ "\nLa vida del zombie es: " + vidae);
                        vidae = vidae - dañog;
                        vidag = vidag - esqueleto.daño;  
                        guerrero.puntuar();
                        alert("Su puntuacion es:" + guerrero.puntuacion); 
                    }
                }
            break;
            case 3:
                alert("Aparecio un Fantasma");
                let vidaf= fantasma.vida;
                while (vidaf > 0)
                {
                    
                    if(arma == 1){
                        alert("La vida de "+ player + " es:"+ vida+ "\nLa vida del zombie es: " + vidaf);
                        vidaf = vidaf - daño;
                        vida = vida - fantasma.daño;
                        arquero.puntuar();
                        alert("Su puntuacion es:" + arquero.puntuacion);
                    }
                    else
                    {
                        alert("La vida de "+ player + " es:"+ vidag+ "\nLa vida del zombie es: " + vidaf);
                        vidaf = vidaf - dañog;
                        vidag = vidag - fantasma.daño;  
                        guerrero.puntuar(); 
                        alert("Su puntuacion es:" + guerrero.puntuacion);
                    }
                }
                
            break;
       }
    
}
alert("GRACIAS POR PARTICIPAR EN EL JUEGO !!!");







