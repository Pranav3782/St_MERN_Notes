function val(){
    var uname=document.myform.username.value;
    var pass=document.myform.password.value;
    if (username==" "|| username=="null"){
    alert("User name cannot be empty")
    return false;

}
if(pass.length<6)
{
    alert("password cannot be less than 6")
    return false;
}
else{
    console.log("Else block")

}}
