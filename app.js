const express = require('express')
const app = express();

const path = require('path')

app.use(express.static('public'));

//app.get( '/', (req, res) => res.send('hola mundo') );

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname , 'views/home.html')); {
    
});

app.listen(3000, () => {
    console.log('App listening on port http://localhost:3000/ !');
});