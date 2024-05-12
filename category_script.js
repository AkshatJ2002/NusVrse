
// document.addEventListener('DOMContentLoaded', async function() {
//     // const apiKey = "a626812f20dd82589c5afa9524c4ede9";
//     const apiKey = "abaa1623fb92be4d9a5d378cf28d3cba";
//     const defaultQuery = "india"; // Default search query
//     const country = "in"; // Set the country to India
//     let currentPage = 1; // Initialize current page

//     try {
//         // Fetch articles for default query and current page
//         const defaultArticles = await fetchArticles(apiKey, defaultQuery, country, currentPage);
//         fetchAndDisplayArticles(defaultArticles);
//     } catch (error) {
//         console.error('Error fetching articles:', error);
//     }

//     // Add event listener to search button
//     const searchButton = document.getElementById("search-button");
//     searchButton.addEventListener("click", async function() {
//         const searchQuery = document.getElementById("search-text").value.trim();
//         if (searchQuery) {
//             try {
//                 // Reset current page to 1 when searching
//                 currentPage = 1;
//                 const articles = await fetchArticles(apiKey, searchQuery, country, currentPage);
//                 fetchAndDisplayArticles(articles);
//             } catch (error) {
//                 console.error('Error fetching articles:', error);
//             }
//         }
//     });

//     // Add event listener to more button
//     const moreButton = document.getElementById("more-button");
//     moreButton.addEventListener("click", async function() {
//         try {
//             // Increment current page for pagination
//             currentPage++;
//             const articles = await fetchArticles(apiKey, defaultQuery, country, currentPage);
//             appendArticles(articles);
//         } catch (error) {
//             console.error('Error fetching more articles:', error);
//         }
//     });
// });

// async function onNavItemClick(query) {
//     try {
//         const apiKey = "abaa1623fb92be4d9a5d378cf28d3cba";
//         const country = "in"; // Set the country to India
//         let currentPage = 1; // Initialize current page
//         const articles = await fetchArticles(apiKey, query, country, currentPage);
//         fetchAndDisplayArticles(articles);
//     } catch (error) {
//         console.error('Error fetching articles:', error);
//     }
// }

// async function fetchArticles(apiKey, query, country, page) {
//     const apiUrl = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=${country}&apikey=${apiKey}&max=50&page=${page}`;
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//         throw new Error('Failed to fetch articles');
//     }
//     const data = await response.json();
//     return data.articles;
// }

// function fetchAndDisplayArticles(articles) {
//     const container = document.getElementById("news-container");
//     if (!container) {
//         console.error('Container not found');
//         return;
//     }
//     container.innerHTML = '';
//     appendArticles(articles);
// }

// function appendArticles(articles) {
//     const template = document.getElementById("template-news-card");
//     const container = document.getElementById("news-container");
//     if (!template || !container) {
//         console.error('Template or container not found');
//         return;
//     }
//     articles.forEach(article => {
//         const clone = document.importNode(template.content, true);
//         const titleElement = clone.getElementById("news-title");
//         const sourceElement = clone.getElementById("news-source");
//         const descElement = clone.getElementById("news-desc");
//         const imgElement = clone.getElementById("news-img");
//         if (titleElement) titleElement.innerText = article.title;
//         if (sourceElement) sourceElement.innerText = `${article.source.name} - ${article.publishedAt}`;
//         if (descElement) descElement.innerText = article.description;
//         if (imgElement) imgElement.src = article.image;
//         container.appendChild(clone);
//     });
// }















document.addEventListener('DOMContentLoaded', async function() {
    // const apiKey = "a626812f20dd82589c5afa9524c4ede9";
    const apiKey = "abaa1623fb92be4d9a5d378cf28d3cba";
    const country = "in"; // Set the country to India
    let currentPage = 1; // Initialize current page
    let currentQuery = "india"; // Initialize current query to default

    try {
        // Fetch articles for default query and current page
        const defaultArticles = await fetchArticles(apiKey, currentQuery, country, currentPage);
        fetchAndDisplayArticles(defaultArticles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }

    // Add event listener to search button
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", async function() {
        const searchQuery = document.getElementById("search-text").value.trim();
        if (searchQuery) {
             // Reset current page to 1 when searching
             currentPage = 1;
             currentQuery=searchQuery;
            try {
                const articles = await fetchArticles(apiKey, currentQuery, country, currentPage);
                fetchAndDisplayArticles(articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }
    });

    // Add event listener to more button
    const moreButton = document.getElementById("more-button");
    moreButton.addEventListener("click", async function() {
        try {
            // Increment current page for pagination
            currentPage++;
            const articles = await fetchArticles(apiKey,currentQuery, country, currentPage);
            appendArticles(articles);
        } catch (error) {
            console.error('Error fetching more articles:', error);
        }
    });
});

async function onNavItemClick(query) {
    try {
        const apiKey = "abaa1623fb92be4d9a5d378cf28d3cba";
        const country = "in"; // Set the country to India
        currentPage = 1; // Initialize current page
        currentQuery=query;
        const articles = await fetchArticles(apiKey, currentQuery, country, currentPage);
        fetchAndDisplayArticles(articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

async function fetchArticles(apiKey, query, country, page) {
    const apiUrl = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=${country}&apikey=${apiKey}&max=50&page=${page}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch articles');
    }
    const data = await response.json();
    return data.articles;
}

function fetchAndDisplayArticles(articles) {
    const container = document.getElementById("news-container");
    if (!container) {
        console.error('Container not found');
        return;
    }
    container.innerHTML = '';
    appendArticles(articles);
}

function appendArticles(articles) {
    const template = document.getElementById("template-news-card");
    const container = document.getElementById("news-container");
    if (!template || !container) {
        console.error('Template or container not found');
        return;
    }
    articles.forEach(article => {
        const clone = document.importNode(template.content, true);
        const titleElement = clone.getElementById("news-title");
        const sourceElement = clone.getElementById("news-source");
        const descElement = clone.getElementById("news-desc");
        const imgElement = clone.getElementById("news-img");
        if (titleElement) titleElement.innerText = article.title;
        if (sourceElement) sourceElement.innerText = `${article.source.name} - ${article.publishedAt}`;
        if (descElement) descElement.innerText = article.description;
        if (imgElement) imgElement.src = article.image;
        container.appendChild(clone);
    });
}











// document.addEventListener('DOMContentLoaded', async function() {
//     const apiKey = "abaa1623fb92be4d9a5d378cf28d3cba";
//     const country = "in"; // Set the country to India
//     let currentPage = 1; // Initialize current page
//     let currentQuery = "india"; // Initialize current query to default

//     try {
//         // Fetch articles for default query and current page
//         const defaultArticles = await fetchArticles(apiKey, currentQuery, country, currentPage);
//         fetchAndDisplayArticles(defaultArticles);
//     } catch (error) {
//         console.error('Error fetching articles:', error);
//     }

//     // Add event listener to search button
//     const searchButton = document.getElementById("search-button");
//     searchButton.addEventListener("click", async function() {
//         const searchQuery = document.getElementById("search-text").value.trim();
//         if (searchQuery) {
//             try {
//                 // Reset current page to 1 when searching
//                 currentPage = 1;
//                 currentQuery = searchQuery; // Update current query
//                 const articles = await fetchArticles(apiKey, currentQuery, country, currentPage);
//                 fetchAndDisplayArticles(articles);
//             } catch (error) {
//                 console.error('Error fetching articles:', error);
//             }
//         }
//     });

//     // Add event listeners to link buttons
//     const linkButtons = document.querySelectorAll(".link-button");
//     linkButtons.forEach(button => {
//         button.addEventListener("click", async function() {
//             const query = button.dataset.query;
//             if (query) {
//                 try {
//                     currentPage = 1;
//                     currentQuery = query; // Update current query
//                     const articles = await fetchArticles(apiKey, currentQuery, country, currentPage);
//                     fetchAndDisplayArticles(articles);
//                 } catch (error) {
//                     console.error('Error fetching articles:', error);
//                 }
//             }
//         });
//     });

//     // Add event listener to more button
//     const moreButton = document.getElementById("more-button");
//     moreButton.addEventListener("click", async function() {
//         try {
//             // Increment current page for pagination
//             currentPage++;
//             const articles = await fetchArticles(apiKey, currentQuery, country, currentPage);
//             appendArticles(articles);
//         } catch (error) {
//             console.error('Error fetching more articles:', error);
//         }
//     });
// });

// async function fetchArticles(apiKey, query, country, page) {
//     const apiUrl = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=${country}&apikey=${apiKey}&max=50&page=${page}`;
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//         throw new Error('Failed to fetch articles');
//     }
//     const data = await response.json();
//     return data.articles;
// }

// function fetchAndDisplayArticles(articles) {
//     const container = document.getElementById("news-container");
//     if (!container) {
//         console.error('Container not found');
//         return;
//     }
//     container.innerHTML = '';
//     appendArticles(articles);
// }

// function appendArticles(articles) {
//     const template = document.getElementById("template-news-card");
//     const container = document.getElementById("news-container");
//     if (!template || !container) {
//         console.error('Template or container not found');
//         return;
//     }
//     articles.forEach(article => {
//         const clone = document.importNode(template.content, true);
//         const titleElement = clone.getElementById("news-title");
//         const sourceElement = clone.getElementById("news-source");
//         const descElement = clone.getElementById("news-desc");
//         const imgElement = clone.getElementById("news-img");
//         if (titleElement) titleElement.innerText = article.title;
//         if (sourceElement) sourceElement.innerText = `${article.source.name} - ${article.publishedAt}`;
//         if (descElement) descElement.innerText = article.description;
//         if (imgElement) imgElement.src = article.image;
//         container.appendChild(clone);
//     });
// }



function clearSearchInput() {
    document.getElementById("search-text").value = ""; // Clear the input field
  }
  





setTimeout(function() {
    document.getElementById('#card').classList.remove('loading');
  }, 9000); 

   





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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

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

var loader=document.querySelector('#loader')

  setTimeout(function(){
    loader.style.top="-100%";
  },3000)