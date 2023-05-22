var allInput=document.querySelectorAll("input")
var allselectTag=document.querySelectorAll("select")
function storeTheValue()
{
    var firstName=allInput[0].value
    var surName=allInput[1].value
    var emailOrMoblie=allInput[2].value
    var pass=allInput[3].value
    var date=allselectTag[0].value
    var month=allselectTag[1].value
    var year=allselectTag[2].value
    sessionStorage.setItem("Email",emailOrMoblie)
    sessionStorage.setItem("password",pass)
    localStorage.setItem("Fname",firstName)
    localStorage.setItem("Sname",surName)
    localStorage.setItem("E&M",emailOrMoblie)
    localStorage.setItem("pass",pass)
    localStorage.setItem("dd",date)
    localStorage.setItem("mm",month)
    localStorage.setItem("yy",year)
    localStorage.setItem("Gen",userGen)
}
function gender(gen)
{
    userGen=gen
}