// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(function(response) {
        articleCreator(response.data.articles);
    })
    .catch(function(error) {
        console.log(error);
    })

function articleCreator(articlesObject) {
    const cards = document.querySelector('.cards-container');

    for (let topic in articlesObject) {

        const topicArray = articlesObject[topic];

        topicArray.forEach((article) => {
            //create elements
            const card = document.createElement('div');
            const headline = document.createElement('div');
            const author = document.createElement('div');
            const imgContainer = document.createElement('div');
            const img = document.createElement('img');
            const authorName = document.createElement('span');

            // style elements
            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgContainer.classList.add('img-container');

            // add content

            headline.textContent = article.headline;
            img.src = article.authorPhoto;
            authorName.textContent = article.authorName;

            // add elements to card

            card.appendChild(headline);
            card.appendChild(author);

            author.appendChild(imgContainer);
            author.appendChild(authorName);

            imgContainer.appendChild(img);

            // add to dom

            cards.appendChild(card);
        })
    }
}
