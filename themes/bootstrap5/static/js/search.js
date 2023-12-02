// search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const searchTerm = searchInput.value.toLowerCase();
        const posts = Array.from(document.querySelectorAll('.post'));
        const matchingPosts = posts.filter(post => {
            const postContent = post.textContent.toLowerCase();
            return postContent.includes(searchTerm);
        });

        displayResults(matchingPosts);
    });

    function displayResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<p>No se encontraron resultados.</p>';
        } else {
            results.forEach(result => {
                const resultLink = document.createElement('a');
                resultLink.href = result.querySelector('a').href;
                resultLink.textContent = result.querySelector('h2').textContent;

                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.appendChild(resultLink);

                searchResults.appendChild(resultItem);
            });
        }
    }
});
