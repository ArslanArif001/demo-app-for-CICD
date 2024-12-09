const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Use the port from .env file
const port = process.env.PORT;

// Serve static files (CSS and images) from the public directory
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Route for the homepage
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Cloud App</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <header>Welcome to the Cloud Deployment App!</header>
        <main>
            <div class="card">
                <h3>Welcome to the Cloud</h3>
                <p>This application demonstrates the basics of cloud computing, continuous integration (CI), and continuous deployment (CD).</p>
            </div>
            <div class="image-container">
                <img src="/images/cloud.jpg" alt="Cloud Image">
            </div>
            <div class="card">
                <h3>Features of Cloud Computing</h3>
                <p>Cloud computing allows flexible, scalable, and cost-effective solutions for deploying applications. It supports innovations like serverless technologies, CI/CD, and more.</p>
                <p><a href="/about">Learn More About Cloud</a></p>
            </div>
        </main>
        <footer>© 2024 Cloud App</footer>
    </body>
    </html>
    `);
});

// Route for About page
app.get('/about', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About Cloud Computing</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <header class="about-header">About Cloud Computing</header>
        <main>
            <div class="about-card">
                <h3>What is Cloud Computing?</h3>
                <p>Cloud computing allows users to access computing resources over the internet instead of through local servers. It helps businesses scale quickly, securely, and cost-effectively.</p>
                <p>Explore more technologies like CI/CD pipelines, automation, and DevOps using cloud services like AWS and Azure.</p>
            </div>
            <p><a href="/">Back to Home</a></p>
        </main>
        <footer>© 2024 Cloud App</footer>
    </body>
    </html>
    `);
});

// Start server on the port from .env
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
