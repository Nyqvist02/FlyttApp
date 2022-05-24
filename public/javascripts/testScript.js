'use-strict';

console.log('Initial commit');

const sendData = () => {

    console.log(document.getElementById('date').value);
    console.log(document.getElementById('street1').value);
    console.log(document.getElementById('street2').value);
    console.log(document.getElementById('hours').value);
    console.log(document.getElementById('notes').value);

    const jobInfo = {
        name: 'Ludvig',
        date: document.getElementById('date').value,
        street1: document.getElementById('street1').value,
        street2: document.getElementById('street2').value,
        hours: parseFloat(document.getElementById('hours').value),
        notes: document.getElementById('notes').value
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

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', sendData);