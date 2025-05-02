//your JS code here. If required.
let existingBtn=document.getElementById("existing");
existingBtn.style.display="none";
// let data=localStorage.getItem("Logindata")
// console.log(data)
function handleSubmit(event){
	event.preventDefault();
    let user=document.getElementById("username").value
    let pass=document.getElementById("password").value;
    let data=localStorage.getItem("Logindata")
    console.log(JSON.parse(data))
    if(JSON.parse(data).user===user && JSON.parse(data).password===pass ){
        existingBtn.style.display="inline";
        // alert("existing user");
    }else{
        alert(`Logged in as ${user}`);
        let checkbtn=document.getElementById("checkbox").checked;
        let obj={user: user, password: pass}
        if(checkbtn){
            localStorage.setItem("Logindata",JSON.stringify(obj))
        }else{
            localStorage.clear()
        }
}
}

function login(){
    let user= document.getElementById("username").value
    alert(`Login as a ${user}`)
}



// let checkbtn=document.getElementById("checkbox");
// console.log(checkbtn.checked);

// let isLogedin="false";
// let obj={};

// document.getElementById("btn").addEventListener("click",()=>{
//     let email=document.getElementById("input").value
//     let pass =document.getElementById("pass").value
//     if(email && pass){
//         isLogedin="true";
//         obj={Email:email, Password: pass};
//         console.log(email, pass);
//         console.log(obj);
//         localStorage.setItem("isLogedin",isLogedin)
//         console.log(typeof(isLogedin))
//         console.log(isLogedin)
//         onload()
//     }
    
// })
// console.log(localStorage.getItem("isLogedin"))
// function onload(){
// if(localStorage.getItem("isLogedin")){
//     console.log(isLogedin)
//     document.getElementById("input").style.display="none";
//     document.getElementById("pass").style.display="none";
//     document.body.innerHTML="Welcome user";
// }}

// // onload();