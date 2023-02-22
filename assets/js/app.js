function sayHello(...name) {
    if(arguments.length === 1) {
      console.log(`Hello ${name}`)
    } else {
      console.log(`Hello guys ${name}`)
    }
  }
  
  sayHello('Vitya', 'Petya')
  