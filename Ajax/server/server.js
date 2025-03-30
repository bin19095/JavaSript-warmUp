// server.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

const testData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sally' },
    { id: 3, name: 'Mike' },
    { id: 4, name: 'Trustee' }
];

app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = testData.filter(item => item.name.toLowerCase().includes(query));
    res.json(results);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
