import './modular.js';

//Declaraciones y Variables

//Var
//Let
//Const

{
  let name = 'Juan'
  {
    let lastname = 'Reyes'
     name = 'Sebastián'
    console.log(name)
  }

  console.log(name)
  console.log(lastname)
}

//Tipos de datos primitivos

/*
String
Number
Boolean
Bigint
Undefined
object
Null
Symbol


typeof: verificamos el tipo de dato
*/

//ejemplo practico de Symbol para librerias
const id = Symbol('id')

const user = {
  [id]: '@temporal.2021',
  lastname: 'Reyes'
}

console.log(user[id])

//Strings
let comillaSencilla = 'Hola'
let comillaDoble =  "Hola"
let comillaInvertida =  `Hola`

{
  let name = ' Juan  '
  console.log(name)
  let lastName = 'Reyes'
  // let fullName = name + lastName
  // let fullName = name + ' ' + lastName
  let fullName = `${name} ${lastName} 😎`


  // console.log(name.charAt(name.length -  1))
  // console.log(fullName.replace('Juan', 'Sebastián'))
  console.log(fullName.search('Z'))

  console.log(name.trim())
}

//Valores Truthy & False

/* Truthy

if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
-----False

if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")


*/

//Probando valores Booleanos por defecto

console.log(Boolean(3))

//Numbers

//Constructor de Number
Number('4')

//arimética básica

10 + 5 //Suma
10 - 5 //Resta
10 * 5 //Multiplicación
10 / 5 //división
10 % 2 //residuo
Math.pow(5, 2) //Potencia 25
Math.sqrt(9) //raiz cuadrada

//métodos
{
  const suma = 10 + 23
  console.log(typeof(suma.toFixed(1)))

  //convertir a string
  const sumaC = String(suma)
  console.log(typeof(sumaC))

  //Con el metodo
  let newValue = sumaC.toString()
}
 //prueba de operaciones
 {
  const nan = 'leonidas' - 10

  if(nan === NaN){
    console.log('es igual')
  }
  else{
    console.log('no es igual')
  }
}

//Objects

const user = {
  name: 'Juan',
  lastName: 'Reyes',
  emoji: '😎',
}

//formas de llamar una propiedad
console.log(user.name)

console.log(user['emoji'])

const find = 'lastName'

console.log(user[find])


//agregar una nueva propieda

user.age = 27
user.married = false

//agregando nuevos objetos a mi objeto user

user.course = {
  name: 'Javascript',
  classes: 50,
}

//agregando un arreglo
user.list = [true, '1', null]
console.log(user)

//crear una variable apartir de un dato

{
  // const name = user.name
  //Desestructuración
  const {name} = user
  console.log(name)
}

//metodo de objetos

user.fullName = function(){
  // return `${user.name} ${user.lastName} ${user.emoji}`
  return `${this.name} ${this.lastName} ${this.emoji}`
}

// user.fullName.bind({name: Sebas, lastName: Reyes})()

console.log(user.fullName())

//Functions

//declaración de función

function sum (a,b){
  return a + b
}

sum(23,56)

//expresión de función
const rest = function(a,b){
  return a - b
}
rest(10,89)

//arrow function
const myFunction = (a,b)=>{
  return a * b
}

console.log(myFunction(2,5))

//Arrays

const nameList = ['Yess', 'Maria', 'Juan', 'Elena', 'Yess']
// console.log(nameList)

//ejemplo del concat
let newList = nameList.concat('Yess')
// console.log(newList)

//operador spread para componer un array en base a otros array
 const myNewList = [...nameList, 'Oscar', 'Teresa']
//  console.log(myNewList)

 //agregar elemento al final del array
 myNewList.push('Sara')
//  console.log(myNewList)

 //eliminar elemento del final del array
 myNewList.pop()
//  console.log(myNewList)

//array multidimensional
// nameList.push(['Reyes','Salinas','Romero','Gomez'])

// console.log(nameList[4][0])

const bidimensional = [[1,3,5],[2,6,7],[8,3,1]]

const unos = []
bidimensional.forEach((element, indexE) => {
  // console.log(element, indexE)
  console.log('---')
  element.forEach((elementB, indexB) => {
    if(elementB === 1){
      unos.push(`${indexE} ${indexB}`)
          // console.log(`${elementB}: posición ${indexE} | ${indexB}`)
    }
  })
})

// console.log(unos)

const map = nameList.map(name => `El nombre es: ${name} `)
// console.log(map)

const arrayYess = nameList.filter(name => {
  if (name === "Yess") {
    return  true
  }
  else {
    return false
  }
})

// console.log(arrayYess.length)


//ITERANDO OBJETOS
for (prop in user){
  console.log(`${prop}: ${user[prop]} `)
}

console.log(Object.keys(user).forEach(prop => {
  console.log(`${prop} ${user[prop]}`);
}))

//iterando arrays
const animalList = ['Cebra','Tigre','Venado','Jaguar','Liebre']

//for of
for(value of animalList){
  // console.log(value)
}

//for in (especial para objetos)
for(value in animalList){
  // console.log(animalList[value])
}
//los for podemos detener todo el recorrido de los arrays
for(let i=0; i <= animalList.length -1; i=i+1){
  // console.log(animalList[i])
  if(i === 2){
    break;
  }
}



let n = 0;

//mientras se cumple la condición
while(n <= animalList.length -1){
  console.log(animalList[n])
  n=n+1
}

console.log(n)
let x = 0

do{
  console.log(animalList[x])
  x = x + 1

} while (x <= animalList.length - 1)



for(let i=1; i<=100; i=i+1 ){
  console.log(`${i}. No debo olvidar mi cuaderno en casa`)
}

const myObject={
  name: 'Yess',
  lastName:'Gomez'
}

function fullname(object){
  console.log(`${object.name} ${object.lastName}`)
}

fullname(myObject)


const myNumber = 2

if(5 === 5 && 3 === 4){
  console.log('Si')
}else{
 console.log('No')
}

//ejercicio

function isPrime(number){
  for(let i = 2; i < number; i=i+1){
    if(number % i === 0){
      return false
    }
  }
  return number > 1
}

// isPrime(5)



function listNumberPrimer(max){
  let counter = 0;
  for(let i = 2; i <= max; i=i+1){
      if(isPrime(i)){
        console.log(i)
        counter= counter + 1
      }
  }
  console.log(`Cantiidad de número primos encontrados ${counter} 😎`)
}
listNumberPrimer(1000)

//Switch

const myAge = 12

switch(myAge){
  case 18:
    console.log('eres mayor de edad')
  break
  case 30:
    console.log('Aún eres Joven')
  break
  case 50:
    console.log('Ya estas ruco')
  break
  case 70:
    console.log('valiste verga wey')
  break
  default:
    console.log('no estas en la edad')
  break
}

//TRY CATCH


try{

}catch{

}



//test


const getDate = {
  year: new Date().getFullYear(),
  mes: new Date().getMonth(),

}

// console.log(getDate)

const myBirthday = {
  year: 1994,
  mes:  3,
}

function calcularEdad(){
  const año = (getDate.year - myBirthday.year)
  const mes = (getDate.mes - myBirthday.mes)

  console.log(`${año} años y ${mes} meses`)

}

calcularEdad(getDate, myBirthday)
