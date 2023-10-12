const mailAddress = [
    'mariorossi@gmail.com',
    'luigibianchi@gmail.com',
    'davideverdi@gmail.com',
    'saraporpora@gmail.com',
    'gigibuffon@gmail.com'
];
const button = document.querySelector('button');
button.addEventListener('click', function(){
    let found = false;
    let insertAddress = document.getElementById('address').value;
    console.log(insertAddress);
    for(let i = 0; i < mailAddress.length; i++){
    let currentAddress = mailAddress[i];
        if(currentAddress === insertAddress){
            found = true;
        }
    }    
    let container = document.querySelector('.container');
    if(found === true){
        let myAlert = document.createElement('div');
        myAlert.className = `bg-success`;
        myAlert.innerHTML = `Email trovata!`;
        container.append(myAlert);
        console.log(myAlert);
    } else{
        let myAlert = document.createElement('div');
        myAlert.className = `bg-danger`;
        myAlert.innerHTML = `Email non trovata!`;
        container.append(myAlert);
        console.log(myAlert);
    }
})
