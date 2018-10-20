// console.log('execute');

//variables
const sendBtn=document.querySelector('#sendBtn'),
        email=document.getElementById('email'),
        subject=document.getElementById('subject'),
        message=document.getElementById('message'),
        resetBtn=document.getElementById('resetBtn'),
        emailSendForm=document.getElementById('email-form');




//event listeners
eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded',appInit);

    //validate input fields
    email.addEventListener('blur',validateField);
    subject.addEventListener('blur',validateField);
    message.addEventListener('blur',validateField);

    //reset btn initialization
    resetBtn.addEventListener('click',resetForm);
    emailSendForm.addEventListener('submit',sendEmail);
}

    //functions
    function appInit(){
        sendBtn.disabled=true;
    }
    //send email function
    function sendEmail(e){
            e.preventDefault();

            //show spinner
            const spinner=document.getElementById('spinner');
            spinner.style.display='block';
            //create image element
            const emailImgGif=document.createElement('img');
            emailImgGif.src='img/mail.gif';
            emailImgGif.style.display='block';

            //hide spinner than show the confirmation email
            setTimeout(function(){
                spinner.style.display='none';
                    document.querySelector('#loaders').appendChild(emailImgGif);

                    //reset form after 5000ms 
                    setTimeout(function(){
                        emailSendForm.reset();
                        emailImgGif.remove();
                    },5000);
            },3000);
    }

function validateField(){
   
    let errors;

    validateLength(this);

    //validate the email
    if(this.type==='email'){
        validateEmail(this);
    }
        //check if there are inputs with error class
    errors=document.querySelectorAll('.error');
  

    //check if the input field are not empty
    if(email.value!=='' &&subject.value!=='' && message.value!=='' ){
        if(errors.length===0){
            //btn should be enabled
            sendBtn.disabled=false;
        }
    }
}

function validateLength(field){
    if(field.value.length>0){
        field.style.borderBottomColor='green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor='red';
        field.classList.add('error');
    }
}

//validate email
function   validateEmail(email){
    if(email.value.indexOf('@')!==-1){
          email.style.borderBottomColor='green';
          email.classList.remove('error');
    }else{
        email.style.borderBottomColor='red';
        email.classList.add('error');
    }
}

function resetForm(){
    emailSendForm.reset();
}