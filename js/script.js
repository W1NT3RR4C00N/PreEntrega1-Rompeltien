let nombre = prompt("¿Cuál es tu nombre?");
    if (nombre === "" || nombre === " "){
        while (nombre === "" || nombre === " "){
            nombre = prompt("Emm ... perdón, ¿Como te llamas?");
        }
    }


console.log("Hola " + nombre + "! Hey, por qué no vamos a comer algo?");


let comida = prompt("¿Te gustan las pizzas o las hamburguesas?");
    if (comida === "pizzas" || comida === "pizza" || comida === "hamburguesas" || comida === "hamburguesa") {
    } else if (comida !== "pizzas" || comida !== "hamburguesas" || comida !== "pizza" || comida !== "hamburguesa");
        while (comida === "" || comida === " ") {
         comida = prompt("Perdón, tal vez hablé muy bajo. Te gustaría comer pizzas o hamburguesas?");
        }

    console.log("Perfecto " + nombre + "!, tengo mucha hambre, vamos por una " + comida + ", pero ...");



let actual = 2024;
let nacimiento = prompt("Espera ... ¿Qué año naciste?");
let resultado = actual - nacimiento;

 while (resultado === 0 && nacimiento === 2024) {
    nacimiento = prompt("Disculpa, ¿en qué año naciste?");
    resultado = actual - nacimiento;
}

if (resultado > 17) {
    console.log("Perfecto! Eres mayor de edad, vamos a un bar!");
} else if (resultado < 17) {
    console.log("Ah! Ok, no hay problema, podríamos ir por un cafecito.");
} else if (resultado === 18) {
    console.log("¡Genial! ¡Tienes exactamente 18 años! Vamos a celebrar.");
}

const invitado = nombre => console.log("Ahora que se que te gusta comer " + comida + " y que tienes " + resultado + " años, tengo una idea ...");

invitado(nombre);


let cierre = alert("Muy bien, esto es lo que haremos, te lo detallo en la consola ...");
    if (resultado < 18) {
        console.log("Vamos a ir a comer una " + comida + ", y como tienes " +  resultado + " años, vamos a ir por un jugo.");
    } else if (resultado > 17) {
        console.log("Vamos a ir a comer una " + comida + ", y como tienes " +  resultado + " años, vamos a ir a un bar.");
    }
