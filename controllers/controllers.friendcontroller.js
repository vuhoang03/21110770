const {friends} = require('../models/models.friends');

function friendRequest (req, res) {
    const ID = Number(req.params.friendID);
    const friend = friends.find(tmp => tmp.id == ID);

    if (friend) {
        res.status(200).json(friend);
    }
    else {
        res.status(400).json({error:'No friend'});
    }
}

function allData (req, res) {
    res.status(200).json(friends);
}

function message (req, res) {
    const ID = req.params.friendID;
    const friend = friends.find(tmp => tmp.id == ID);

    if(friend){
        res.setHeader("Content-Type", "text/html");
        res.write(`<html><body><ul><li> ${friend.id}: ${ friend.name} </li></ul></body></html>`);
        res.end();
    }
    else{
        
        res.setHeader("Content-Type", "text/html");
        res.write("<h2> Not valid</h2>");

        friends.forEach(friend => {
            res.write(`<li>${friend.id}: ${ friend.name}</li>`);
        });
        res.end();
    }
}


module.exports = {
    friendRequest,
    allData,
    message
}