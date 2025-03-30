document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            fetchResults(query);
        } else {
            resultsContainer.innerHTML = '';
        }
    });

    function fetchResults(query) {
        fetch(`http://localhost:3000/search?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                displayResults(data);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    }

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.textContent = result.name;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.textContent = 'No results found';
        }
    }
});
