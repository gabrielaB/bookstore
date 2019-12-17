const express = require('express');
const path =  require('path');
const PORT = 7000;

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Sample server running on port ${PORT}`);
});