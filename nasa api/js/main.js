//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  //this is a query parameter with two pulls: key & we add parameter DATE from nasa site. so date is in proper format.
  //choice means use the data from the parameter DATE
  const url = `https://api.nasa.gov/planetary/apod?api_key=UUvlP1bIldOuwhwbtOMQotnLkzoylLcMao7acZc5&date=${choice}`
//const url = `https://pokeapi.co/api/v2/pokemon/${choice}`  same as above
  
fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        //document.querySelector('img').src = data.hdurl  //changing img source

          //cant just use media type because it is DATA. media type is just a type of data. need to switch tween img/vid
        if( data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
  }
        document.querySelector('h3').innerText = data.explanation  //inputting nasa text into h3
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

