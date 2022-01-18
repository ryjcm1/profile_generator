const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) :`, (answer1) => {
  rl.question(`What's an activity you like doing? `, (answer2) =>{
    rl.question(`What do you like to listening to while you are doing that? `, (answer3) =>{
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer4) =>{
        rl.question(`Which sport is your absolute favourite? `, (answer5) =>{
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer6) =>{
            console.log(`\n Hi, my name is ${answer1}. It's nice to meet you! \n
            I'm really into ${answer2} and listening to ${answer3}. \n
            My favourite meal would have to be ${answer4}. \n
            My favourite sport is ${answer5}. \n
            My superpower is ${answer6}.`)

            rl.close();
          })
        })
      })
    })
  })
});