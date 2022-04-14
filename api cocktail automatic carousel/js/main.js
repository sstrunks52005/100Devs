//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
function getDrink(){
    let drink = document.querySelector('input').value
}

fetch(`"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) 
    .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink  //margarita show up in h2 spot. strDrink comes from the property 
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    //cycle through all the drinks for hw
    //try without tmplate literal to see how it affects space

    //nasa api picture of the day 