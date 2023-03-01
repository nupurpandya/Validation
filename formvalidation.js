
let btn=document.getElementById("btnAdd");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let fname=document.getElementById("fname").value;
    let fnameregEx = /^[a-zA-Z]*$/;
    let inputfname=document.getElementById("fname");
    if(fname ==""){
  document.getElementById("fnametext").innerHTML="Please enter first name";

  inputfname.style.border="1px solid red"}
    else if(!fname.trim().match(fnameregEx)){
        document.getElementById("fnametext").innerHTML="please enter valid first name";
        inputfname.style.border="1px solid red";
    }
    else
    {
        document.getElementById("fnametext").innerHTML=" ";
        inputfname.style="none";
    }
    let lname=document.getElementById("lname").value;
    let lnameregEx = /^[a-zA-Z]*$/;

    let inputlname=document.getElementById("lname");
    if(lname ==""){
    document.getElementById("lnametext").innerHTML="Please enter last name";
    inputlname.style.border="1px solid red";}
    else if(!lname.trim().match(lnameregEx)){
        document.getElementById("lnametext").innerHTML="please enter valid last name";
        inputlname.style.border="1px solid red";
    }
    else
    {
        inputlname.style="none";
        document.getElementById("lnametext").innerHTML=" ";
    }
    let phoneno=document.getElementById("phoneno").value;
    let phonenoregEx = /^[7-9][0-9]{9}$/;
    let inputphoneno=document.getElementById("phoneno");
    if(phoneno ==""){
  document.getElementById("phonenotext").innerHTML="Please enter Phone Number";
  inputphoneno.style.border="1px solid red";}
    else if(!phoneno.trim().match(phonenoregEx)){
        document.getElementById("phonenotext").innerHTML="please enter valid Phone Number";
        inputphoneno.style.border="1px solid red";
    }
    else
    {
        inputphoneno.style="none";
        document.getElementById("phonenotext").innerHTML=" ";
    }
    let email=document.getElementById("email").value;
    let emailregEx = /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com|in)/;
    let inputemail=document.getElementById("email");
    if(email ==""){
        inputemail.style.border="1px solid red";
  document.getElementById("emailtext").innerHTML="Please enter Email";}
    else if(!email.trim().match(emailregEx)){
        document.getElementById("emailtext").innerHTML="please enter valid Email";
        inputemail.style.border="1px solid red";
    }
    else
    {
        inputemail.style="none";
        document.getElementById("emailtext").innerHTML=" ";
    }
    let cemail=document.getElementById("cemail").value;
    let cemailregEx = /^([a-zA-Z\_.\0-9]+)@1Rivet\.(com)$/;
    let inputcemail=document.getElementById("cemail");
    if(cemail ==""){
  document.getElementById("cemailtext").innerHTML="Please enter your corporate email";
  inputcemail.style.border="1px solid red";
}
    else if(!cemail.trim().match(cemailregEx)){
        document.getElementById("cemailtext").innerHTML="please enter valid Corporate Email";
        inputcemail.style.border="1px solid red";
    }
    else
    {
        inputcemail.style="none";
        document.getElementById("cemailtext").innerHTML=" ";
    }
    let salary=document.getElementById("salary").value;
    let inputsalary=document.getElementById("salary");
    let salaryregEx=/^[0-9]*$/;
  
    if(salary ==""){
  document.getElementById("salarytext").innerHTML="Please enter your salary";
  inputsalary.style.border="1px solid red";
}
    else if(salary<5000 || !salary.match(salaryregEx)){
        document.getElementById("salarytext").innerHTML="please enter valid salary";
        inputsalary.style.border="1px solid red";
    }
    else
    {
        inputsalary.style="none";
        document.getElementById("salarytext").innerHTML=" ";
    }
    let password=document.getElementById("password").value;
    let passwordregEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
    let inputpassword=document.getElementById("password");
  
    if(password ==""){
  document.getElementById("passwordtext").innerHTML="Please enter your password";
  inputpassword.style.border="1px solid red";
}
    else if(!password.trim().match(passwordregEx)){
        document.getElementById("passwordtext").innerHTML="please enter valid password";
        inputpassword.style.border="1px solid red";
    }
    else
    {
        inputpassword.style="none";
        document.getElementById("passwordtext").innerHTML=" ";
    }
})


