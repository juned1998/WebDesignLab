function checkEmail(e){
	var element=e.target;
	if(/[^a-zA-Z0-9@._]/.test(element.value)){
		alert("Email is invalid !Only characters are a-z A-Z 0-9 @ . _ allowed");
		element.value="";
		return false;
	}

	if(!/[a-zA-Z]/.test(element.value)){
		alert("Email is invalid! A-Z OR  a-Z characters is not present !");
		element.value="";
		return false;
	}

	if(!/[@]/.test(element.value)){
		alert("Email is invalid! You are missing @ ");
		element.value="";
		return false;
	}

	if(!/[.]/.test(element.value)){
		alert("Email is invalid! .domain name is ");
		return false;
	}

}

function checkSubject(e){
	var element=e.target;
	if(/[^a-zA-Z]/.test(element.value)){
		alert("invalid subject. use Only A-Z or a-z");
		element.value="";
		return false;
	}
	return true;
	
}

function submitForm(e){
	var contact = document.getElementById()
}


var email = document.getElementsById('user-email');
email.addEventListener('blur',checkEmail,false);

var subject = document.getElementsById('subject');
subject.addEventListener('blur',checksubject,false);

var submit = document.getElementById('submit-btn');