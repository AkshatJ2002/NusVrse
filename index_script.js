// document.addEventListener('DOMContentLoaded', async function() {
//     const apiKey = "65e57078a9422ffb75b1db03";

//     // Fetch articles with default query
//     try {
//         const defaultQuery = "india"; // Default search query
//         const indiaArticles = await fetchArticles(apiKey, defaultQuery);
//         fetchAndDisplayArticles(indiaArticles);
//     } catch (error) {
//         console.error('Error fetching articles:', error);
//     }

//     // Add event listener to search button
//     const searchButton = document.getElementById("search-button");
//     searchButton.addEventListener("click", async function() {
//         const searchQuery = document.getElementById("search-text").value.trim();
//         if (searchQuery) {
//             try {
//                 const articles = await fetchArticles(apiKey, searchQuery);
//                 fetchAndDisplayArticles(articles);
//             } catch (error) {
//                 console.error('Error fetching articles:', error);
//             }
//         }
//     });
// });

// async function fetchArticles(apiKey, query) {
//     const apiUrl = `https://api.serpdog.io/news?api_key=${apiKey}&q=${query}&num=8`;
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

//         // Add click event listener to redirect to the article URL in a new tab
//         const card = clone.querySelector('.card');
//         card.addEventListener('click', function() {
//             window.open(article.url, '_blank');
//         });

//         container.appendChild(clone);
//     });
// }


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

var menu=document.querySelector("#nav h3")
var full=document.querySelector("#full-scr")
var navimg=document.querySelector("#nav a img")
var flag =0
menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top=0
        navimg.style.top=0
        flag=1
    }else{
        full.style.top="-100%"
        navimg.style.opacity=1
        flag=0
    }
   
})


setTimeout(function() {
    document.getElementById('#card').classList.remove('loading');
  }, 9000); 
  
