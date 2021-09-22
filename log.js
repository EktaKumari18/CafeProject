function myFun()
{
	var x=document.getElementById("email").value;
	var y=document.getElementById("password").value;
	if(x=="")
	{
		alert("Email field is empty");
		return false;
	}
	if(y=="")
	{
		alert("Password field is empty");
		return false;
	}
}