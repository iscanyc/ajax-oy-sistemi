const express = require('express'),
    app = express();
const bodyParser = require("body-parser");
app.listen(8080, () => console.log('Listening on 8080'));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (request, response) => {
    response.sendFile(__dirname + "/views/index.html")
})

app.post('/vote', (request, response) => {
    const {first, second} = request.body;
    const isTrue = (data) => {
        return (data == "true")
    }
    console.log()
    response.send(true)
    if (isTrue(first)) {
        console.log('ilk seçeneğe oy verildi')
    } else if (isTrue(second)) {
        console.log('ikinci seçeneğe oy verildi')
    } else {
        console.log('hata oluştu')
    }
})
