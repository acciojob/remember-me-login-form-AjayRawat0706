//your JS code here. If required.

const submitBtn = document.getElementById("submit");
const existingUserBtn = document.getElementById("existing");
if(localStorage.getItem("username") && localStorage.getItem("password")){
	existingUserBtn.style.display= "block";
}else{
	existingUserBtn.style.display= "none";
}

existingUserBtn.addEventListener("click", ()=>{
	alert(`Logged in as ${localStorage.getItem("username")}`);
})

submitBtn.addEventListener("click", ()=>{
	const rememberMe = document.getElementById("checkbox");
	console.log("rembermebtn",rememberMe.checked)
	const usernameInput = document.getElementById("username").value;
	const userPassword = document.getElementById("password").value;

	if(rememberMe.checked){
		//save in local storage
		localStorage.setItem("username", usernameInput);
		localStorage.setItem("password", userPassword);
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
	alert(`Logged in as ${usernameInput}`);
	
	
	console.log(usernameInput);
	console.log(userPassword);
	console.log(rememberMe.checked);
})