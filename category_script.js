// const API_KEY="0877292ed3ce49d4bb4d050509252b42";
// const url="https://newsapi.org/v2/everything?q=";

// window.addEventListener('load', () => fetchNews("India"));
// async function fetchNews(query) {
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     const sortedArticles = data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
//     bindData(sortedArticles);
// }

// function bindData(articles){
//     const cardsContainer=document.getElementById('cards-container');
//     const newsCardTemplate=document.getElementById('template-news-card');

//     cardsContainer.innerHTML='';

//     articles.forEach(article => {
//         if(!article.urlToImage) return ;
//         const cardClone=newsCardTemplate.content.cloneNode(true);
//         fillDataInCard(cardClone,article);
//         cardsContainer.appendChild(cardClone);

//     })

// }
// function fillDataInCard(cardClone,article){
//     const newsImg = cardClone.querySelector('#news-img');
//     const newsTitle = cardClone.querySelector('#news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#news-desc');

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.description;

//     const date = new Date(article.publishedAt).toLocaleString("en-US",{
//         timeZone:"Asia/Jakarta"
//     });
//     newsSource.innerHTML = `${article.source.name} • ${date}`;


//     cardClone.firstElementChild.addEventListener("click", () => {
//         window.open(article.url, "_blank");
//     });

// }

// function onNavItemClick(id){
//     fetchNews(id);
// }

// const searchButton=document.getElementById("search-button");
// const searchText= document.getElementById("search-text");
// searchButton.addEventListener("click", ()=>{
//     const query=searchText.value;
//     if(!query) return;
//     fetchNews(query);
// });


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     var scrollToTopBtn = document.getElementById("scrollToTopBtn");
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollToTopBtn.classList.add("show");
//     } else {
//         scrollToTopBtn.classList.remove("show");
//     }
// }

// function scrollToTop() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// }





// document.addEventListener('DOMContentLoaded', async function() {
//     const apiKey = "65e57078a9422ffb75b1db03";
//     const defaultQuery = "india"; // Set the default search query to India

//     try {
//         // Fetch articles for India
//         const indiaArticles = await fetchArticles(apiKey, defaultQuery);

//         // Display the India articles
//         fetchAndDisplayArticles(indiaArticles);
//     } catch (error) {
//         console.error('Error fetching articles:', error);
//     }
// });

// async function fetchArticles(apiKey, query) {
//     const apiUrl = `https://api.serpdog.io/news?api_key=${apiKey}&q=${query}&num=100`; // Include num=20 parameter
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//         throw new Error('Failed to fetch articles');
//     }
//     const data = await response.json();
//     return data.news_results;
// }

// function fetchAndDisplayArticles(articles) {
//     const template = document.getElementById("template-news-card");
//     const container = document.getElementById("news-container");

//     if (!template || !container) {
//         console.error('Template or container not found');
//         return;
//     }

//     container.innerHTML = '';

//     articles.forEach(article => {
//         const clone = document.importNode(template.content, true);

//         const titleElement = clone.getElementById("news-title");
//         const sourceElement = clone.getElementById("news-source");
//         const descElement = clone.getElementById("news-desc");
//         const imgElement = clone.getElementById("news-img");

//         if (titleElement) titleElement.innerText = article.title;
//         if (sourceElement) sourceElement.innerText = `${article.source} - ${article.lastUpdated}`;
//         if (descElement) descElement.innerText = article.snippet;
//         if (imgElement) imgElement.src = article.imgSrc;

//         container.appendChild(clone);
//     });
// }

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     var scrollToTopBtn = document.getElementById("scrollToTopBtn");
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollToTopBtn.classList.add("show");
//     } else {
//         scrollToTopBtn.classList.remove("show");
//     }
// }

// function scrollToTop() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// }





document.addEventListener('DOMContentLoaded', async function() {
    const apiKey = "65e57078a9422ffb75b1db03";
    const defaultQuery = "india"; // Set the default search query to India

    try {
        // Fetch articles for India
        const indiaArticles = await fetchArticles(apiKey, defaultQuery);

        // Display the India articles
        fetchAndDisplayArticles(indiaArticles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
});

async function fetchArticles(apiKey, query) {
    const apiUrl = `https://api.serpdog.io/news?api_key=${apiKey}&q=${query}&num=100`; // Include num=20 parameter
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch articles');
    }
    const data = await response.json();
    return data.news_results;
}

function fetchAndDisplayArticles(articles) {
    const template = document.getElementById("template-news-card");
    const container = document.getElementById("news-container");

    if (!template || !container) {
        console.error('Template or container not found');
        return;
    }

    container.innerHTML = '';

    articles.forEach(article => {
        const clone = document.importNode(template.content, true);

        const titleElement = clone.getElementById("news-title");
        const sourceElement = clone.getElementById("news-source");
        const descElement = clone.getElementById("news-desc");
        const imgElement = clone.getElementById("news-img");

        if (titleElement) titleElement.innerText = article.title;
        if (sourceElement) sourceElement.innerText = `${article.source} - ${article.lastUpdated}`;
        if (descElement) descElement.innerText = article.snippet;
        if (imgElement) imgElement.src = article.imgSrc;

        const card = clone.querySelector('.card');
        if (card) {
            card.addEventListener('click', (event) => {
                expandCard(event.currentTarget);
            });

            // Prevent card from triggering mouse events
            card.addEventListener('mouseover', (event) => {
                event.stopPropagation();
            });
            card.addEventListener('mouseout', (event) => {
                event.stopPropagation();
            });
        }

        container.appendChild(clone);
    });
}

function expandCard(card) {
    // Toggle the 'expanded-card' class on the clicked card
    card.classList.toggle('expanded-card');
    // Toggle the 'expanded-card-blur' class on the body to apply blur effect
    document.body.classList.toggle('expanded-card-blur');
}


