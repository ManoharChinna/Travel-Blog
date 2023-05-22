var emailOrPhone=sessionStorage.getItem("Email");
var pass=sessionStorage.getItem("password");
var inputTag=document.getElementsByClassName("inputTag");
function loginFun()
{
    var userGivenID=inputTag[0].value
    var userGivenpass=inputTag[1].value
    var formTag=document.forms
    if(userGivenID==emailOrPhone && userGivenpass==pass)
    {
        document.getElementById("loginButton").type="submit"
        formTag[0].action="./html/Travel.html"
    }
    else if(userGivenID!=emailOrPhone && userGivenpass==pass)
    {
        document.getElementById("status").innerHTML="Wrong UserID"
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passDiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,red,#FBB03B)"
    }
    else if(userGivenID==emailOrPhone && userGivenpass!=pass)
    {
        document.getElementById("status").innerHTML="Wrong password"
        document.getElementById("passDiv").style.borderColor="red"
        document.getElementById("emailDiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,#D4145A,red)"
    }
    else
    {
        document.getElementById("status").innerHTML="Wrong UserID and Password"
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passDiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
    }
}
    function visiblepassword()
    {
        inputTag[1].type="text"
        document.getElementById("visibleLogo").src="./Asset/logos/Monkey1.jpg"
        document.getElementById("visibleLogo").style.transform="rotateY(360deg)"
        document.getElementById("visibleLogo").style.transition="transform 0.2s"
    }
    function invisiblepassword()
    {
        inputTag[1].type="password"
        document.getElementById("visibleLogo").src="./Asset/logos/Monkey2.png"
        document.getElementById("visibleLogo").style.transform="rotateY(0deg)"
        document.getElementById("visibleLogo").style.transition="transform 0.2s"
    }