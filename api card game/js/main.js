//Example fetch using pokemonapi.co
//using postman: get a deck id, put deck id into draw 2 card link. shows results
//in html need a way to show the results and who won
//use local storage to stick deck iD so use same deck

let deckId = ''

//on page load get a deck. ^ deckid is a global variable to use later
fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

//when click button get id from page load to draw 2 cards
document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
      const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
      

      fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image //pull img and put into dom
        document.querySelector('#player2').src = data.cards[1].image
        let player1Val = convertToNum(data.cards[0].value)            //pulls value for each card
        let player2Val = convertToNum(data.cards[1].value)
        if (player1Val > player2Val){                               //compare numbers to see who won
          document.querySelector('h3').innerText = 'Player 1 Wins'
        }else if(player1Val < player2Val){
          document.querySelector('h3').innerText = 'Player 2 Wins'
        }else{
          document.querySelector('h3').innerText = 'Time for War!'
        }

      })
      .catch(err =>{
        console.log(`error ${err}`)
      });
}
//helper function to convert the string values and give AKQJ to a number
function convertToNum(val){
  if(val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }else {
    return Number(val)
  }
}