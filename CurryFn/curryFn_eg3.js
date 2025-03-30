
async function fetchData(url, method, headers) {
    return fetch(url, {
        method: method,
        headers: headers
    }).then(response => response.json());
}


async function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c);
            }
        }
    }
}

const curriedFetchData = curry(fetchData);

const fetchGetJSON =  curriedFetchData('https://jsonplaceholder.typicode.com/posts')('GET')({
    'Content-Type': 'application/json'
});

await fetchGetJSON.then(data => console.log(data));
