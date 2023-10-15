const express = require('express');
const app = express();



//creating home route
app.get('/', (req, res) => {
    return res.json({message: 'Welcome to Soccer Node App'})
});



//set up a PORT number and listen for server 
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT);
})