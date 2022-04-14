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
      const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      

      fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image //pull img and put into dom
        
        let player1Val = data.cards[0].value           //pulls value for each card
        
        switch (player1Val){                               //compare numbers to see who won
          case "2":
            document.querySelector('h3').innerText = 'YOU - pick somone to drink'
            break;
          case "3":
            document.querySelector('h3').innerText = 'Me - player who drew drinks'
            break;
          case "4":
            document.querySelector('h3').innerText = 'All females drink'
            break;
          case "5":
            document.querySelector('h3').innerText = 'ThumbMaster - player who drew can put thumb down on table at any time before next 5 is drawn. Last person to put thumb on table drinks'
            break;
          case "6":
            document.querySelector('h3').innerText = 'All males drink'
            break;
          case "7":
            document.querySelector('h3').innerText = 'Heaven - player who drew can point to the sky at any time before next 7 is drawn. Last person to point to the sky drinks.'
            break;
          case "8":
            document.querySelector('h3').innerText = 'Mate - pick a drinking mate who must drink every time they drink until next 8 is drawn'
            break;
          case "9":
            document.querySelector('h3').innerText = 'Rhyme - player who drew says a word and you go around in a circle until someone messes up and has to drink'
            break;
          case "10":
            document.querySelector('h3').innerText = 'Categories - player who drew names a category and you go around in a circle naming words in that category until someone messes up and drinks'
            break;
          case "JACK":
            document.querySelector('h3').innerText = 'Rule Master - player gets to make rule until next Jack drawn.'
            break;
          case "QUEEN":
            document.querySelector('h3').innerText = 'Question Master - you may ask anyone a question at any time and if they answer, they drink. Good until next Queen is drawn'
            break;
          case "KING":
            document.querySelector('h3').innerText = 'Player who drew has to pur some of their drink into the middle cup. Person who draws the last King has to drink everything in the cup'
            break;
          case "ACE":
            document.querySelector('h3').innerText = 'Waterfall - starting with the player who drew the card, every player has to continually drink until the person to their right has stopped drinking'
            break;
          default:
            console.log('no more cards')

        }
      })
}
//helper function to convert the string values and give AKQJ to a number
// function convertToNum(val){
//   if(val === 'ACE'){
//     return 14
//   }else if(val === 'KING'){
//     return 13
//   }else if(val === 'QUEEN'){
//     return 12
//   }else if(val === 'JACK'){
//     return 11
//   }else {
//     return Number(val)
//   }
// }