const express = require('express');
const app = express();
const PORT = 5000;

const {friends} = require('./models/models.friends');
const {friendRequest, allData, message} = require('./controllers/controllers.friendcontroller');
const friendReq = require('./routes/routes.friends');

app.use(express.json());


app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.post('/friend',((req,res)=> {
    console.log(`${req.body}`);
    if (!req.body.name) {
        return res.status(400).json({
            error:'must have username'
        });
    }
    const friend = {name: req.body.name,id:friends.length};
    friends.push(friend);
    res.status(200).json(friend);
}))

app.get('/friend/:friendID', friendRequest);

app.get('/', allData);

app.use('/friend', friendReq);

app.get('/message/:friendID', message);



app.listen(PORT);