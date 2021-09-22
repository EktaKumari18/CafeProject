function passCheck(data){
	var h=document.getElementById("l1");
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
		h.style.color="yellow";
			
	}
	if(uppercase.test(data))
	{
		e.style.color="yellow";
	}
	if(digit.test(data))
	{
		k.style.color="yellow";
	}
	if(special.test(data))
	{
		t.style.color="yellow";
	}
	if(eightch.test(data))
	{
		a.style.color="yellow";
	}
}
function myFun()
{
	var x=document.getElementById("pass1").value;
	var y=document.getElementById("pass2").value;
	if(x=="")
	{
		alert("Password field is empty");
		return false;
	}
	if(y=="")
	{
		alert("Confirm password field is empty");
		return false;
	}
	if(x!=y)
	{
		alert("Your Password did not match");
		return false;
	}
}