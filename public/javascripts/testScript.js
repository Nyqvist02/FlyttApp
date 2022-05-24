'use-strict';

console.log('Initial commit');

const sendData = (jobInfo) => {
    const jobTime = {
        hours: 99,
        streetName: 'Vasagatan 2 fjutti fjutt',
        notes: 'Shitty day'
    }
    
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobInfo),
    }
    
    fetch('/data/post', postOptions).then(data => {
        if(!data.ok){
            throw Error(data.status);
        }
        return data.json();
    });
}





const getData = () => {
    //Hämtar sparade datan från "databasen"
    fetch('/data').then(res => res.json()).then(data => {
    printData(data);
    })

    //Skriver ut datan som hämtas i databasen
    const printData = (data) =>{
    console.log(data);
    }
}
