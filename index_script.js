// const API_KEY="0877292ed3ce49d4bb4d050509252b42";
// const url="https://newsapi.org/v2/everything?q=";

// window.addEventListener('load', () => fetchNews("India"));
// async function fetchNews(query) {
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     const sortedArticles = data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
//     const firstEightArticles = sortedArticles.slice(0, 8); // Retrieve only the first 8 articles
//     bindData(firstEightArticles);
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

// const searchButton=document.getElementById("search-button");
// const searchText= document.getElementById("search-text");
// searchButton.addEventListener("click", ()=>{
//     const query=searchText.value;
//     if(!query) return;
//     fetchNews(query);
// });


// const API_KEY = "65e57078a9422ffb75b1db03";
// const url = "https://api.serpdog.io/news?&api_key=65e57078a9422ffb75b1db03&q=";

// window.addEventListener('load', () => fetchNews("India"));

// async function fetchNews(query) {
//     const res = await fetch(`${url}${query}`);
//     const data = await res.json();
//     const allArticles = [];

//     // Add articles from main "news_results"
//     allArticles.push(...data.news_results);

//     // Add articles from "subArticles" sections
//     if (data.subArticles) {
//         data.subArticles.forEach(subArticle => {
//             allArticles.push(...subArticle.news_results);
//         });
//     }

//     const sortedArticles = allArticles.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
//     const firstEightArticles = sortedArticles.slice(0, 8); // Retrieve only the first 8 articles
//     bindData(firstEightArticles);

//     try {
//         const res = await fetch(`${url}${query}`);
//         if (!res.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await res.json();
//         const articles = data.subArticles.reduce((acc, subArticle) => {
//             return acc.concat(subArticle.news_results);
//         }, []);
//         bindData(articles);
//     } catch (error) {
//         console.error(error);
//     }
// }

// function bindData(articles) {
//     const cardsContainer = document.getElementById('cards-container');
//     const newsCardTemplate = document.getElementById('template-news-card');

//     cardsContainer.innerHTML = '';

//     articles.forEach(article => {
//         const cardClone = newsCardTemplate.content.cloneNode(true);
//         fillDataInCard(cardClone, article);
//         cardsContainer.appendChild(cardClone);
//     });
// }

// function fillDataInCard(cardClone, article) {
//     const newsImg = cardClone.querySelector('#news-image');
//     const newsTitle = cardClone.querySelector('#news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#news-desc');

//     newsImg.src = article.imgSrc;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.snippet;

//     const date = article.lastUpdated;
//     newsSource.innerHTML = `${article.source} • ${date}`;

//     cardClone.firstElementChild.addEventListener("click", () => {
//         window.open(article.url, "_blank");
//     });
// }
document.addEventListener('DOMContentLoaded', async function() {
    const apiKey = "65e57078a9422ffb75b1db03";

    // Fetch articles with default query
    try {
        const defaultQuery = "india"; // Default search query
        const indiaArticles = await fetchArticles(apiKey, defaultQuery);
        fetchAndDisplayArticles(indiaArticles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }

    // Add event listener to search button
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", async function() {
        const searchQuery = document.getElementById("search-text").value.trim();
        if (searchQuery) {
            try {
                const articles = await fetchArticles(apiKey, searchQuery);
                fetchAndDisplayArticles(articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }
    });
});

async function fetchArticles(apiKey, query) {
    const apiUrl = `https://api.serpdog.io/news?api_key=${apiKey}&q=${query}&num=10`;
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
        container.appendChild(clone);
    });
}


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        
      });
}



  swiperAnimation()


  window.onscroll = function() {scrollFunction()};

