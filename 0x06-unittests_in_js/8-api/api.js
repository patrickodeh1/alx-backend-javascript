const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Welcome to the payment system');
});

const PORT =7865;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`API available on localhost port ${PORT}`);
    });
}

module.exports = app;