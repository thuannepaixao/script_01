// console.log('Bem vindos ao Starter') 

// 1. Declare uma variável de nome weight
// let weight

// 2. Que tipo de dado é a variável acima ?
// console.log(typeof weight)

/*
  3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
    
*/

// let name = "Furkan"
// let age = 23
// let stars = 4.8
// let isSubscribed = true

/*
  4. A variável student abaixo é de que tipo de dados?

  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

  4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
  name: "Furkan",
  age: 23,
  weight: 74.8,
  isSubscribed: true,
}

// console.log(typeof student)
// console.log(student)
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

// let students = []

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

// students = [
//   student
// ]

// console.log(students)

/*
  7. Coloque no console o valor da posição zero do Array acima
*/

// console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array students
*/

// const Emir = {
//   name: "Emir",
//   age: 23,
//   weight: 74.8,
//   isSubscribed: true,
// }

// students = [
//   student,
//   Emir
// ]

// students[1] = Emir

// console.log(students)

/*
  9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se voçê acertou. 

  console.log(a)
  var a = 1
*/

// console.log(a)
// var a = 1

/*
  Expressões e Operadores

  - Espressions
  - Operators
    Binary
    Unary
    Ternary

  New

    * left-hand-side expression
    * criar um novo objeto

  Operadores Unários

    typeof
    delete

  const person = {
    name: 'Furkan',
    age: '25',
  }

  delete person.age

  console.log(person)
*/

/**
 * Operadores Aritiméticos
 * 
 * Multiplicação
 console.log(3.2 * 5.5)

 * Divisão
 console.log(12 / 2)

 * Soma
 console.log(34 + 67)

 * Subtração
 console.log(34 - 23)
 * 
 * Resto da Divisão
 let reminder
 reminder = 11 % 9
 console.log(reminder)

 * Incremento
 let increment = 0
 increment++
 console.log(increment)

 * Decremento
 let decrement = 0
 decrement--
 console.log(decrement)
 console.log(--decrement)

 * Exponencial
 console.log(3 ** 2)

 */

 /**
  * Grouping Operator
  * 
  // let total =  (2 + 3) * 5 
 let total = ("Alo alo" + "você")
 console.log(total)

  */

 /**
  * Operadores de Comparação
  * 
  * Irá comparar valores e retornar um Boolean como
  * resposta à comparação
  * 
  *  == igual a

 let one = 1
 let two = 2

 console.log( two == 1)
 console.log( one == "1")

 console.log(one != two)
 console.log(one != 1)
 console.log(one != "1")

  * > Maior que
  * console.log(one > two)
  * 
  * < Menor que
  * console.log(one < two)
  * 
  * <= Menor igual a
  * console.log( one <= two)
  * console.log( one <= 1)
  * console.log( one <= 0)

  */

 /**
  * Operadores de Atribuição (Assignment)
  * let x
  * 
  * console.log(x)
  * 
  * assignment
  * x = 1
  * 
  * addition assignment
  * x += 2
  * 
  * subtraction assignment
  * x -= 1
  * 
  * multiplication assignment
  * x *= 2
  * 
  * division assignment
  * x /= 2
  * 
  * remainder, exponetiation
  * x %= 2
  */

 /**
  * Operadores lógicos (logical operators)
  * 
  * - 2 Valores booleanos, quando verificados, resultará em verdadeiro
  *  ou falso
  * 
  * let pao = true
  * let queijo = true
  * 
  * AND &&
  * console.log(pao && queijo)
  * 
  * OR ||
  * console.log(pao || queijo)
  * 
  * NOT !
  * console.log(!pao)
  */

 
 /**
  * Operador Condicional (Ternário)
  * 
  * Dependendo da condição, nós receberemos valores diferentes
  * 
  * Condição então valor 1 se não valor 2
  * condition ? value1 : value2
  * 
  * Exemplos
  * 
  * Cafe da manhã top
  * let pao = true
  * let queijo = true
  * 
  * const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
  * 
  * console.log(niceBreakfast)
  * 
  * Maior que 18
  * let age = 32
  * const canDrive = age >= 18 ? 'can drive' : "can't drive"
  * 
  * console.log(canDrive)
  * 
  */

 /**
  * Operador de String (String operator)
  * 
  * Comparison (comparação)
  * console.log('a' == 'a')
  * 
  * Concatenation (concatenação)
  * Retorna a união de duas Strings
  * let alpha = 'alpha'
  * console.log( alpha + 'bet' + 's')
  * 
  * console.log(alpha += 'bet')
  */

 /**
  * FALSY
  * Quando um valor é considerado false em contextos onde um
  *  booleano é obrigatório ( condicionais e loops )
  * 
  * false
  * 0
  * -0
  * ""
  * null
  * undefined
  * NaN
  * 
  * console.log("" ? 'verdadeiro' : 'falso')
  * 
  * TRUTHY
  * Quando um valor é considerado true em contextos onde um
  * booleano é obrigatório ( condicionais e loops )
  * 
  * true
  * {}
  * []
  * 1
  * 3.23
  * "0"
  * "false"
  * -1
  * Infinity
  * -Infinity
  * 
  * console.log( {} ? 'verdadeiro' : 'falso' )
  */

/**
 * Operator precedence
 *  Precedência de operadores
 * 
 * grouping                         ()
 * negação e incremento            ! ++ --
 * multiplicação e divisão         * /
 * adição e subtração              + -
 * relacional                      < <= > >=c
 * igualdade                       == != === !==
 * AND                             &&
 * OR                              ||
 * condicional                     ?:
 * assignment (atribuição)         = += -= *= %=
 */