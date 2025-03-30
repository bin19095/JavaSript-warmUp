function parseQueryString(query) {
    return Object.fromEntries(new URLSearchParams(query));
}

console.log(parseQueryString("?name=John&age=30"));
