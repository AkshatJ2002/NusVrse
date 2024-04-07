document.addEventListener('DOMContentLoaded', async function() {
    const apiKey = "65e57078a9422ffb75b1db03";
    const defaultQuery = "india"; // Default search query

    try {
        // Fetch articles for default query
        const defaultArticles = await fetchArticles(apiKey, defaultQuery);
        fetchAndDisplayArticles(defaultArticles);
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

async function onNavItemClick(tag) {
    // Fetch articles based on the clicked tag
    await fetchAndDisplayArticlesByTag(tag);
}

async function fetchAndDisplayArticlesByTag(tag) {
    const apiKey = "65e57078a9422ffb75b1db03";
    try {
        const articles = await fetchArticles(apiKey, tag);
        fetchAndDisplayArticles(articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

async function fetchArticles(apiKey, query) {
    const apiUrl = `https://api.serpdog.io/news?api_key=${apiKey}&q=${query}&num=50`;
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

        // // Add click event listener to redirect to the article URL in a new tab
        // const card = clone.querySelector('.card');
        // card.addEventListener('click', function() {
        //     window.open(article.url, '_blank');
        // });

        container.appendChild(clone);
    });
}

setTimeout(function() {
    document.getElementById('#card').classList.remove('loading');
  }, 9000); 









//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
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
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}







const articlesContainer = document.getElementById('news-container');
const articleModal = document.getElementById('article-modal');
const modalContent = articleModal.querySelector('.modal-content');


articlesContainer.addEventListener('click', (event) => {
    const article = event.target.closest('.card');
    if (!article) return; // If the clicked element is not an article, do nothing
    
    // Check if the click was on the close button
    const closeButton = event.target.closest('.close-btn');
    if (closeButton) {
        // Collapse the expanded article
        closeModal();
    } else {
        const title = article.querySelector('#news-title').textContent;
        const source = article.querySelector('.news-source').textContent;
        const desc = article.querySelector('.news-desc').textContent;
        const imageSrc = article.querySelector('#news-img').getAttribute('src');
        modalContent.innerHTML = `
        <img src="${imageSrc}" alt="Article Image">
        <h2>${title}</h2>
        <h6>${source}</h6>
        <p>${desc}</p>
        <span class="close-btn" id="close-btn">&times;</span>
    `;
        
        
        // Display the modal
        articleModal.style.display = 'block';
        const closeIcon = document.getElementById('close-icon');

closeIcon.addEventListener('click', () => {
    closeModal();
});
    }
});
articleModal.addEventListener('click', (event) => {
    const closeIcon = event.target.closest('.close-btn');
    if (closeIcon) {
        closeModal();
    }
});
// Function to close the modal
function closeModal() {
    articleModal.style.display = 'none';
}

