var express = require('express');
var router = express.Router();
const fs = require('fs');

//GET request for the server, reads data.json file and sends it
router.get('/', function(req, res, next) {
    fs.readFile('.\\data.json', (err, data) => {
        if(err){
            console.log(err);
            res.send();
            return;
        }else{
            console.log(data);
            res.send(data);
        }
    })
});

//Post request, posts the user info from jobTime to the server.
router.post('/post', (req, res) => {
    const jobTime = req.body;
    console.log(jobTime);

    let dataWrite;

    fs.readFile('.\\data.json', (err, data) => {
        if(err){
            console.log(err);
            res.send('Error in POST request');
        } else{
            const existingData = JSON.parse(data);
            console.log(existingData.timesWorked[0]);
            existingData.timesWorked.push(jobTime);

            dataWrite = JSON.stringify(existingData);
            writeTimesWorked(dataWrite);
        }
    })


    const writeTimesWorked = (dataWrite) => {
        fs.writeFile('.\\data.json', dataWrite, err => {
            if(err){
                console.log(err);
                return;
            }else{
                console.log('File has been written!');
                res.send('File written!');
            }
        })
    }




})

module.exports = router;
