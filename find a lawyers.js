function emailSend(){
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
   var messageBody = "Name" + userName +
   "</br> Email" + email +
   "</br> Message" + message ;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "florinna661@gmail.com",
        Password : "5D3053D0BFAB34045FF7EB9840008FB971D4",
        To : 'aldinahmeti321@gmail.com',
        From : "aldinahmeti321@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => {
        debugger
        if (message == 'OK'){
            swal("Succesful", "Your Email has been Sent!", "success");
        }
        else{
            swal("Error", "You clicked the button!", "error");
        }
      }
    );
}