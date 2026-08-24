//your JS code here. If required.
let name=document.querySelector("#username");
let checkbox=document.querySelector("#checkbox");
let submitBtn=document.querySelector("#submit");
let existingBtn=document.querySelector("#existing");
let password=document.querySelector("#password"); 

if(localStorage.getItem("user")!==null){
	existingBtn.style.display="block";
}
existingBtn.addEventListener("click",()=>{
	let savedUsername=JSON.parse(localStorage.getItem("user")).username;
	alert(`Logged in as ${savedUsername}`);
})
submitBtn.addEventListener("click",(e)=>{
	e.preventDefault();
	let username=name.value;
	let pass=password.value;  
	
	alert(`Logged in as ${username}`);
	if(checkbox.checked){
		localStorage.setItem("user", JSON.stringify({
	    username: username,
	    password: pass
}));
	}
	else {
		localStorage.removeItem("user");
	    existingBtn.style.display = "none";
	}
})