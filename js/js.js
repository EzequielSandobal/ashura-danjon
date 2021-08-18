
//INICIO PROJECTO JUEGO 
//Saludo
alert("Bienvenido al simulador de mazmorras");
alert("Aqui veremos tu valentia como explorador");
//Objetos 
//Se crea objeto de nuevo jugador
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
// Fin de new player
//Inicio de mobs
function mobs(nombre, vida, daño)
{
this.nombre = nombre;
this.vida= vida;
this.daño= daño;
}
let daño =0;
let vida =0;

const zombie = new mobs("Zombie", 100 , 2);
const esqueleto = new mobs("Esqueleto", 100 , 4);
const fantasma = new mobs("Fantasma", 100 , 3);
//Fin de mobs

//Inicio de juego
let player = prompt("Hola Ingrese su nombre de aventurero");
alert("Hola "+ player);
//Se elije al personaje
let pj  = prompt("Ingrese que el numero de la clase que desea ser\n 1-Arquero: Life = 90 Ataque = 10\n 2-Guerrero: Life = 120 Ataque = 8");
while (pj < 0 || pj > 3)
{
    pj  = prompt("Ingrese un numero correcto\n 1-Arquero: Life = 90 Ataque = 10\n 2-Guerrero: Life = 120 Ataque = 8") ;
}
let atributo  = prompt("Ingrese que atributo para su arma\n 1-Fuego\n2-Agua\n3-Hoja");
while (atributo < 0 || atributo > 3)
{
     atributo  = prompt("Ingrese un atributo correcto\n 1-Fuego\n2-Agua\n3-Hoja");
}
//Se declaran atributos iniciales de los pj a elejir
const guerrero = new newplayer(player,0,18,100);
const arquero = new newplayer(player,0,20,80);
switch(pj)
{
    case "1":
        daño = guerrero.daño;
        vida = guerrero.vida;
    break;
    case "2":
        daño = arquero.daño;
        vida = arquero.vida;
    break;
}
let dañoz = daño;
//Se inicia ciclo de daño
while (vida > 0)//Si la vida llega 0 se finaliza el ciclo 
{
       let bicho = Math.floor(Math.random() * 3) + 1;//Numero random de mobs
       let ranatrib =Math.floor(Math.random() * 3) + 1;// 1 DE FUEGO 2 DE agua 3 de hoja
        let atri
       daño = dañoz;
                if (ranatrib == 3 && atributo == "1"){daño = daño * 2; atri ="Hoja"; }
                if (ranatrib == 2 && atributo == "1"){daño = daño / 2; atri ="Agua"; }
                
                if (ranatrib == 1 && atributo == "2"){daño = daño *2; atri = "Fuego";}
                if (ranatrib == 3 && atributo == "2"){daño = daño /2; atri ="Hoja";}
                
                if (ranatrib == 2 && atributo == "3"){daño = daño *2; atri ="Agua";}
                if (ranatrib == 1 && atributo == "3"){daño = daño /2; atri = "Fuego";}
       
       switch (bicho)//Se elije el mobs que va a atacar 
       {
            case 1:
                
                alert("Aparecio un Zombie de " + atri);
                let vidaz= zombie.vida;
                console.log("El daño es"+ daño);
                while (vidaz > 0 && vida > 0)
                {
                    alert("La vida de "+ player + " es:"+ vida+ "\nLa vida del zombie es: " + vidaz);
                    vidaz = vidaz - daño;
                    vida = vida - zombie.daño;
                                      
                }
                break;
            case 2:
                alert("Aparecio un Esqueleto de " + atri);
                let vidae= esqueleto.vida;
                console.log("El daño es"+ daño);
                while (vidae > 0 && vida > 0)
                {
                        alert("La vida de "+ player + " es:"+ vida+ "\nLa vida del zombie es: " + vidae);
                        vidae = vidae - daño;
                        vida = vida - esqueleto.daño;
                }
            break;
            case 3:
                alert("Aparecio un Fantasma de " + atri);
                let vidaf= fantasma.vida;
                console.log("El daño es"+ daño);
                while (vidaf > 0 )
                {
                        alert("La vida de "+ player + " es:"+ vida+ "\nLa vida del zombie es: " + vidaf);
                        vidaf = vidaf - daño;
                        vida = vida - fantasma.daño;
                }
                
            break;
       }
    
}
alert("GRACIAS POR PARTICIPAR EN EL JUEGO !!!");
//FIN






