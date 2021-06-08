

      var a = document.createElement('a');
      var linkText = document.createTextNode("Quote Generator");
      a.appendChild(linkText);
      a.title = "Quote Generator";
      a.href = "index.html";


const jokeText = document.querySelector('.joke-text');
const newJokeBtn = document.querySelector('.new-joke-btn');
const tweetBtn = document.querySelector('.tweet-btn');
newJokeBtn.addEventListener('click', getJoke);
const quotebtn = document.querySelector('.quote-btn');

getJoke();
function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      const joke = data.joke;
      jokeText.innerText = joke;
  
      const tweetLink = `https://twitter.com/share?text=${joke}`;
      tweetBtn.setAttribute('href', tweetLink);
      tweetBtn.setAttribute('href', `tweetLink`);

    }).catch(function(error) {
      jokeText.innerText = 'Oops! Some error happened :(';
      tweetBtn.removeAttribute('href');
      console.log(error);
    });
  }
  