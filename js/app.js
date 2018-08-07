// var elements=document.getElementById('about');
// 	console.log(elements);

$(function(){
	$('#rollno').on('blur',function(){
		alert();
		if(!/(\d{2,3}((CO)|(DCO)|(EE)|(DEE)|(EX)|(DEX)|(ME)|(DME)|(CE)|(DCE)|(CES)|(DCES))\d{2,3})/i.test(this.value)){

			alert("Invalid Roll number");
			this.value="";
			e.stopPropagation();
			$(this).focus();
		}
		
			
	});

	$('#sname').on('blur',function(e){
		if(/[^a-zA-Z]/.test(e.key)){
			alert("Invalid Name . Only alphabets are allowed");
			this.value="";
			$(this).focus();
			return false;
		}

	});

});
