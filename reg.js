
function passCheck(data){
	var x=document.getElementById("l1");
	var e=document.getElementById("l2");
	var k=document.getElementById("l3");
	var t=document.getElementById("l4");
	var a=document.getElementById("l5");
	const lowercase=new RegExp('(?=.*[a-z])');
	const uppercase=new RegExp('(?=.*[A-Z])');
	const digit=new RegExp('(?=.*[0-9])');
	const special=new RegExp('(?=.*[!@#\$%\^&\*])');
	const eightch=new RegExp('(?=.{8,})');
	if(lowercase.test(data))
	{
		x.style.color="Green";
			
	}
	if(uppercase.test(data))
	{
		e.style.color="Green";
	}
	if(digit.test(data))
	{
		k.style.color="Green";
	}
	if(special.test(data))
	{
		t.style.color="Green";
	}
	if(eightch.test(data))
	{
		a.style.color="Green";
	}
}
function myFun(){
	var a=document.getElementById("fname").value;
	if(a=="")
	{
		alert("Your First Name field is empty ");
		return false;
	}
	var b=document.getElementById("lname").value;
	if(b=="")
	{
		alert("Your Last Name field is empty ");
		return false;
	}
	var c=document.getElementById("mobile").value;
	if(c=="")
	{
		alert("Your Mobile Number field is empty ");
		return false;
	}
	var d=document.getElementById("age").value;
	if(d=="")
	{
		alert("Your Age field is empty ");
		return false;
	}
	var e=document.getElementById("email").value;
	if(e=="")
	{
		alert("Your Email field is empty ");
		return false;
	}
	var f=document.getElementById("password").value;
	if(f=="")
	{
		alert("Your Password field is empty ");
		return false;
	}
	
}