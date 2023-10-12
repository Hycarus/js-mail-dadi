const mailAddress = [
    'mariorossi@gmail.com',
    'luigibianchi@gmail.com',
    'davideverdi@gmail.com',
    'saraporpora@gmail.com',
    'gigibuffon@gmail.com'
];
const resetBtn = document.querySelector('.btn-danger');
resetBtn.addEventListener('click', function(){
    const myAlert = document.querySelector('.rounded');
    myAlert.parentNode.removeChild(myAlert);
    let insertAddress = document.getElementById('address').value = '';
})
const button = document.querySelector('button');
button.addEventListener('click', function(){
    let found = false;
    let unvalid = false;
    let insertAddress = document.getElementById('address').value;
    let container = document.querySelector('.container');
    console.log(insertAddress);
    if(insertAddress.includes('@') === unvalid){
        let myAlert = document.createElement('div');
        myAlert.className = `bg-danger rounded p-3`;
        myAlert.innerHTML = `Indirizzo email non valido!`;
        container.append(myAlert);
    } else{
        for(let i = 0; i < mailAddress.length; i++){
            let currentAddress = mailAddress[i];  
            if (currentAddress === insertAddress){
                found = true;
            }    
        }
        if(found === true){
            let myAlert = document.createElement('div');
            myAlert.className = `bg-success rounded p-3`;
            myAlert.innerHTML = `Email trovata!`;
            container.append(myAlert);
            console.log(myAlert);
        } else{
            let myAlert = document.createElement('div');
            myAlert.className = `bg-danger rounded p-3`;
            myAlert.innerHTML = `Email non trovata!`;
            container.append(myAlert);
            console.log(myAlert);
        }
    }
})
function randomInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let buttonDice = document.querySelector('.btn-dark');
buttonDice.addEventListener('click', function(){
    let user = randomInteger(1, 6);
    let computer = randomInteger(1, 6);
    if(user > computer){
        console.log(user)
        let tie = document.querySelector('.tie');
        tie.innerHTML = `<h1 class="text-danger">User Win!</h1>`
    } else if(user === computer){
        console.log(computer);
        let tie = document.querySelector('.tie');
        tie.innerHTML = `<h1 class="text-danger">Pareggio!</h1>`
    } else{
        console.log(computer)
        let tie = document.querySelector('.tie');
        tie.innerHTML = `<h1 class="text-danger">Computer Win!</h1>`
    }
    let userContainer = document.querySelector('.user-dice');
    userContainer.innerHTML = user
    let computerContainer = document.querySelector('.computer-dice');
    computerContainer.innerHTML = `${computer}`;
})
