let drivers = JSON.parse(localStorage.getItem('savedDrivers'));
let baseURL = 'https://localhost:7077/api/';

function handleOnLoad(){
    createApp();
}

function createApp(){
    const allDriversUrl = baseURL + 'PA3';

    fetch(allDriversUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        console.log(json);
        drivers = json;


    //get access to app
    const app = document.getElementById('app');

    //create table
    let table = createTable();

    //add table to the app
    app.appendChild(table);

    //create the form
    let form = CreateForm();

    //add form to the app
    app.appendChild(form);
    })
}

function createTable(){
    let table = document.createElement('TABLE');
    table.id = 'driversTable';
    table.border = '1';
    let tableBody = document.createElement('TBODY');
    tableBody.id = 'driversTableBody';
    table.appendChild(tableBody);

    //create the header row
    let tr = document.createElement('TR');
    tableBody.appendChild(tr);

    //header 1
    let th1 = document.createElement('TH');
    th1.width = 300
    th1.appendChild(document.createTextNode('ID'));
    tr.appendChild(th1);

    //header 2
    let th2 = document.createElement('TH');
    th2.width = 300
    th2.appendChild(document.createTextNode('Name'));
    tr.appendChild(th2);

    //header 3
    let th3 = document.createElement('TH');
    th3.width = 300
    th3.appendChild(document.createTextNode('Rating'));
    tr.appendChild(th3);

    //header 4
    let th4 = document.createElement('TH');
    th4.width = 300
    th4.appendChild(document.createTextNode('Date Hired'));
    tr.appendChild(th4);

    //header 5
    let th5 = document.createElement('TH');
    th5.width = 300
    th5.appendChild(document.createTextNode('Fired'));
    tr.appendChild(th5);

    drivers.forEach((driver) => {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        let td = document.createElement('TD');
        td.width = 300;
        td.appendChild(document.createTextNode(`${driver.ID}`));
        tr.appendChild(td);

        let td2 = document.createElement('TD');
        td2.width = 300;
        td2.appendChild(document.createTextNode(`${driver.Name}`));
        tr.appendChild(td2);

        let td3 = document.createElement('TD');
        td3.width = 300;
        td3.appendChild(document.createTextNode(`${driver.Rating}`));
        tr.appendChild(td3)

        let td4 = document.createElement('TD');
        td4.width = 300;
        td4.appendChild(document.createTextNode(`${driver.DateHired}`));
        tr.appendChild(td4)

        let td5 = document.createElement('TD');
        td5.width = 300;
        td5.appendChild(document.createTextNode(`${driver.Fired}`));
        tr.appendChild(td5)
    })

    return table;
}

function CreateForm(){
    let form = document.createElement('form');
    let textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.autocomplete = "off";
    textInput.placeholder = "Enter a Driver";
    textInput.id = 'newDriverName';
    form.appendChild(textInput);

    let submitButton = document.createElement('button');
    submitButton.textContent = 'add driver';
    form.appendChild(submitButton);

    form.addEventListener('submit', function(e){ //e is a parameter
        e.preventDefault(); // prevents reload
        console.log('submitted');

        //now need to add the todos array
        let currentDate = new Date().toJSON().slice(0, 10); // gets first 10 characters
        let driver = {
            ID: 5,
            Name: document.getElementById('newDriverName').value,
            Rating: 5,
            DatedHired: currentDate,
            Fired: false
        }
        addRow(driver);
        createDriver(driver);
        document.getElementById('newDriverName').value = '';
    })
    return form;
}

function addRow(driver) {
    let tableBody = document.getElementById('driversTableBody');

    let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        let td = document.createElement('TD');
        td.width = 300;
        td.appendChild(document.createTextNode(`${driver.ID}`));
        tr.appendChild(td);

        let td2 = document.createElement('TD');
        td2.width = 500;
        td2.appendChild(document.createTextNode(`${driver.Name}`));
        tr.appendChild(td2);

        let td3 = document.createElement('TD');
        td3.width = 300;
        td3.appendChild(document.createTextNode(`${driver.Rating}`));
        tr.appendChild(td3)

        let td4 = document.createElement('TD');
        td4.width = 300;
        td4.appendChild(document.createTextNode(`${driver.DateHired}`));
        tr.appendChild(td4)

        let td5 = document.createElement('TD');
        td5.width = 300;
        td5.appendChild(document.createTextNode(`${driver.Fired}`));
        tr.appendChild(td5)

        drivers.push(driver);

        localStorage.setItem('savedDrivers', JSON.stringify(driver));
}

function createDriver(driver){
    const postUrl = baseURL + 'PA3';
    console.log(driver);

    const sendDriver = {
        "ID": driver.ID,
        "Name": driver.Name,
        "Rating": driver.Rating,
        "DateHired": driver.DateHired,
        "Fired": driver.Fired
    }

    fetch(postUrl, {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(sendDriver)
    }).then((response)=> {
        if(response.status === 200){
            window.alert(`Driver has been saved successfully`);
        }
        console.log('response from the save', response);
    })
}