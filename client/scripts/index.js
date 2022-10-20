
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

    let header = createHeader();
    header.id = 'heading';

    app.appendChild(header);

    //create table
    let table = createTable();

    //add table to the app
    app.appendChild(table);

    //create the form
    let form = CreateNewDriverForm();

    
    let AddDriver = createAddDriver();
    
    app.appendChild(AddDriver);

    //add form to the app
    app.appendChild(form);
    
    let updateDriverRating = createUpdateDriverRating();
    app.appendChild(updateDriverRating);
    let addUpdateRatingForm = createAddUpdateRatingForm();
    updateDriverRating.appendChild(addUpdateRatingForm);
})
}

function createUpdateDriverRating(){
    let updateRating = document.createElement('div');
    updateRating.id = 'update-rating';
    updateRating.innerHTML = '<h1>Update Driver Rating:</h1>'

    return updateRating;
}

function createAddDriver(){
    let addDriver = document.createElement('div');
    addDriver.id ='menu';
    addDriver.innerHTML = '<h1>Hire A Driver: </h1>'
    
    return addDriver;
}


function createHeader(){
    let header = document.createElement('HEADER');
    let h4 = document.createElement('H4');
    h4.textContent = 'Welcome To Capstone Taxi Service!';

    header.appendChild(h4);
    return header;
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
        td.appendChild(document.createTextNode(`${driver.id}`));
        tr.appendChild(td);

        let td2 = document.createElement('TD');
        td2.width = 300;
        td2.appendChild(document.createTextNode(`${driver.name}`));
        tr.appendChild(td2);

        let td3 = document.createElement('TD');
        td3.width = 300;
        td3.appendChild(document.createTextNode(`${driver.rating}`));
        tr.appendChild(td3)

        let td4 = document.createElement('TD');
        td4.width = 300;
        td4.appendChild(document.createTextNode(`${driver.dateHired}`));
        tr.appendChild(td4)

        let td5 = document.createElement('TD');
        td5.width = 300;
        td5.appendChild(document.createTextNode(`${driver.deleted}`));
        tr.appendChild(td5)
    })

    return table;
}

function createAddUpdateRatingForm(){
    let form = document.createElement('FORM');
    let textInputDriverID = document.createElement('input');
    textInputDriverID.type = 'text';
    textInputDriverID.id = 'textInputDriverID';
    textInputDriverID.autocomplete = "off";
    textInputDriverID.placeholder = "Enter Driver ID";
    form.appendChild(textInputDriverID);

    let textInputDriverRating = document.createElement('input');
    textInputDriverRating.type = 'text';
    textInputDriverRating.autocomplete = "off";
    textInputDriverRating.placeholder = "Enter a Rating";
    textInputDriverRating.id = 'updateDriverRating';
    form.appendChild(textInputDriverRating);

    let submitButton = document.createElement('button');
    submitButton.textContent = 'UPDATE';
    submitButton.id = 'updateRatingBtn';
    form.appendChild(submitButton);

    form.addEventListener('submit', function(e){ //e is a parameter
        e.preventDefault(); // prevents reload
        console.log('Updated');

        let driverToBeUpdated = {
            id: document.getElementById('textInputDriverID').value,
            name: '',
            rating: document.getElementById('updateDriverRating').value,
            datedHired: '',
            deleted: false
        }
        
        fireDriver(driverToBeUpdated)
        document.getElementById('newDriverName').value = '';
    })
    return form;
}

function CreateNewDriverForm(){
    let form = document.createElement('form');
    let textInputDriverName = document.createElement('input');
    textInputDriverName.type = 'text';
    textInputDriverName.autocomplete = "off";
    textInputDriverName.placeholder = "Enter a Driver";
    textInputDriverName.id = 'newDriverName';
    form.appendChild(textInputDriverName);

    
    
    let submitButton = document.createElement('button');
    submitButton.textContent = 'ADD';
    submitButton.id = 'addDriver';
    form.appendChild(submitButton);
    
    let textInputDriverRating = document.createElement('input');
    textInputDriverRating.type = 'text';
    textInputDriverRating.autocomplete = "off";
    textInputDriverRating.placeholder = "Enter a Rating";
    textInputDriverRating.id = 'newDriverRating';
    form.appendChild(textInputDriverRating);
    

    form.addEventListener('submit', function(e){ //e is a parameter
        e.preventDefault(); // prevents reload
        console.log('submitted');

        //now need to add the drivers array
        let currentDate = new Date().toJSON().slice(0, 10);
        currentDate.toString();
        let driver = {
            name: document.getElementById('newDriverName').value,
            rating: document.getElementById('newDriverRating').value,
            datedHired: currentDate,
            deleted: false
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
        td.appendChild(document.createTextNode(`${driver.id}`));
        tr.appendChild(td);

        let td2 = document.createElement('TD');
        td2.width = 500;
        td2.appendChild(document.createTextNode(`${driver.name}`));
        tr.appendChild(td2);

        let td3 = document.createElement('TD');
        td3.width = 300;
        td3.appendChild(document.createTextNode(`${driver.rating}`));
        tr.appendChild(td3)

        let td4 = document.createElement('TD');
        td4.width = 300;
        td4.appendChild(document.createTextNode(`${driver.dateHired}`));
        tr.appendChild(td4)

        let td5 = document.createElement('TD');
        td5.width = 300;
        td5.appendChild(document.createTextNode(`${driver.deleted}`));
        tr.appendChild(td5)

        drivers.push(driver);

}

function createDriver(driver){
    const postURL = baseURL + 'PA3';
    console.log(driver);
    console.log(driver.DateHired);

    const sendDriver = {
        //"ID": driver.id,
        "Name": driver.name,
        "Rating": driver.rating,
        "DateHired": driver.dateHired,
        "Deleted": driver.deleted
    }

    fetch(postURL, {
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

function fireDriver(driverToBeUpdated){
    const putURL = baseURL + 'PA3/' + document.getElementById('textInputDriverID').value;
    console.log(driverToBeUpdated);
    //driverID = document.getElementById('textInputDriverID').value;
    const sendDriverToBeUpdated = {
        "ID": driverToBeUpdated.id,
        "Name": driverToBeUpdated.name,
        "Rating": driverToBeUpdated.rating,
        "DateHired": driverToBeUpdated.dateHired,
        "Deleted": driverToBeUpdated.deleted
    }
    
    fetch(putURL, {
        method: 'PUT',
        headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
        },
        body: JSON.stringify(sendDriverToBeUpdated)
    }).then((response)=> {
        if(response.status === 200){
            window.alert(`Rating has been updated successfully`);
        }
        console.log('response from the save', response);
    })

}