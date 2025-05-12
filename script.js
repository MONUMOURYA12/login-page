let password=document.getElementById("password");
let image=document.getElementById("image");
// console.log(password);

// 

// access the btn
image.addEventListener("click",(e)=>{
     if (password.type=="password") {
            password.type="text";
            image.src="open eye.png";
        
     } 
     else {
        password.type="password";
        image.src="close eye.png"
     }
});


