const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;
    const userId = "john_doe_17091999";  // Example user ID format

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercase = alphabets.filter(ch => ch === ch.toLowerCase()).sort().pop();

    res.json({
        is_success: true,
        user_id: userId,
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
        file_valid: !!file_b64,
        file_mime_type: file_b64 ? "image/png" : null,  // Example MIME type handling
        file_size_kb: file_b64 ? Math.floor(file_b64.length * 0.75 / 1024) : 0
    });
});

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
