/* For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1- Write a command that prints out all of the people in the list.
2- Write the command to remove "Dani" from the array.
3- Write the command to remove "Juan" from the array.
4- Write the command to move "Luis" to the front of the array.
5- Write the command to add your name to the end of the array.
6- Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7- Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/



let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1- Comando que imprima a todas las personas en una lista
console.log(people);

// 2- Quitar a Dani
people.splice(people.indexOf("Dani"), 1);
console.log (people);

// 3- Quitar a Juan
people.splice(people.indexOf("Juan"), 1);
console.log(people)

// 4- Mover a luis al inicio
people.splice(people.indexOf("Luis"), 1);
people.unshift("Luis");
console.log(people)

// 5- Agrega tu nombre al final
people.push("Eli y tibio");
console.log(people)

// 6- Salir del array cuando llegue a Maria
for (let person of people) {
    console.log(person);
    if (person === "Maria") {
        break; 
    }
}

// 7- Obtener el número de "María" dentro de la lista
let indexOfMaria = people.indexOf("Maria");
console.log("Index of Maria:", indexOfMaria);

// Al final deben quedar 4 personas en la lista (y Tibio)
console.log("Últimas personas en la lista:", people);
