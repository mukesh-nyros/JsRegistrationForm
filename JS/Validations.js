	// form validate function call 

function formvalidate()
{

 if(document.getElementById("myprogress").value ===99)
{
datasubmitted();
return true;
} 
else
{
alert("Check all the fields");
return false;
}
}


/* username validation onblur event*/

function uservalid()
{
  var a = document.getElementById("usrname");
    a.innerHTML = "";
  var u = document.getElementById("usrimg");
  var p=document.forms["myForm"]["uname"].value;
  var uname= /^[a-zA-Z][a-zA-Z0-9]{4,8}$/;
  if(p.match(uname))
  {
    var a = document.getElementById("usrname");
    a.innerHTML = "";
 datauname(p);
  
  
     return true;

  }  
  else if(p == null || p == "")
  {   

    var a = document.getElementById("usrname");
    a.innerHTML = "user name must not be empty";
     document.myForm.uname.focus();
     
	     return false;
  }
  else (p.length<5 || p.length>8)
  {
    
  var a = document.getElementById("usrname");
    a.innerHTML = "user name must be alphanumeric with 5 to 8 characters";
document.myForm.uname.focus();
	return false;
  
  }


}



/* password validation onblur event*/
function passvalid()
{
var a = document.getElementById("pswd");
    a.innerHTML = "";
   var p=document.forms["myForm"]["pwd"].value;
   var pwd= /^[a-zA-Z0-9]{6}$/;
   if(p.match(pwd))
   {
  var a = document.getElementById("pswd");
    a.innerHTML = "";
datapwd(p);
     return true;
   }  
  else  if(p == null || p == "")
  {   
     
var a = document.getElementById("pswd");
    a.innerHTML = "password must not be empty";
     document.myForm.pwd.focus();
     return false;  
  }  
  else  
  {   
    
    document.myForm.pwd.focus();
    var a = document.getElementById("pswd");
    a.innerHTML = "please enter password as alphanumeric of length 6 characters";
    return false;  
  }  

}



/*firstname validation onblur event*/

function firstvalid()
{
var a = document.getElementById("firstname");
    a.innerHTML = "";

    var p=document.forms["myForm"]["fname"].value;
    var fname= /^[a-zA-Z]{3,6}$/;
    if(p.match(fname))
   {
   var a = document.getElementById("firstname");
    a.innerHTML = "";
    datafname(p);
   return true;
   }  
   else  if( p == "" )
   {  

    
var a = document.getElementById("firstname");
    a.innerHTML = "First name must not be empty";

     document.myForm.fname.focus();
      return false;  
   }  
  else (p.length<3||p.length>7) 
   {   
     
var a = document.getElementById("firstname");
    a.innerHTML = "Enter Firstname of length 3 to 6 characters";

     document.myForm.fname.focus();
      return false;  
   }  


}




/* lastname validation onblur event*/

function lastvalid()
{
  var a = document.getElementById("lastname");
    a.innerHTML = "";
   var p=document.forms["myForm"]["lname"].value;
   var lname= /^[a-zA-Z]{3,15}$/;
   if(p.match(lname))
  {
  var a = document.getElementById("lname");
    a.innerHTML = "";
    //datalname(p);
    return true;
  }  
  else  if(p == null )
  { 
    
  var a = document.getElementById("lastname");
    a.innerHTML = "Lastname must not be empty";
    document.myForm.lname.focus();
    return false;  
   }  
  else  (p.length<3||p.length>16)
  {  

   var a = document.getElementById("lastname");
    a.innerHTML = "Enter Lastname of length 3 to 15  characters";
   document.myForm.lname.focus();
   return false;  
  }  


}




/*profilepic validation onblur event*/

function profilevalid()
{
    var a = document.getElementById("ppict");
    a.innerHTML = "";
    var p=document.forms["myForm"]["pic"].value;
    var pic1=/.gif/;
    var pic2=/.jpg/;
    var pic3=/.jpeg/;
    var pic4=/.png/;


    if(p == null || p == "")
   {
      
    var a = document.getElementById("ppict");
    a.innerHTML = "Upload your profile picture";
      document.myForm.pic.focus();
      return false;
   } 

   else if(p.match(pic1)||p.match(pic2) || p.match(pic3)|| p.match(pic4))
   {
      datappic(p);
     return true;
    var a = document.getElementById("ppict");
    a.innerHTML = "";
   }
   else
   {

    
    var a = document.getElementById("ppict");
    a.innerHTML = "upload only jpeg or jpg or png or gif format";
    document.myForm.pic.focus();
    return false;
   }

}





/*date validation onblur event */

function dayvalid()
{
var a = document.getElementById("dobyear");
    a.innerHTML = "";
     var p=document.forms["myForm"]["day"].value;

     if(p == null || p == "")
    {
     
var a = document.getElementById("dobyear");
    a.innerHTML = "please select date of birth";
     document.myForm.day.focus();
     return false;
   }  
   else
   {
  var a = document.getElementById("dobyear");
    a.innerHTML = "";
dataday(p);
     return true;
    
   }

}



/*month validation onblur event*/

function monthvalid()
{
var a = document.getElementById("dobyear");
    a.innerHTML = "";

     var p=document.forms["myForm"]["month"].value;

      if(p == null || p == "")
    {
         
var a = document.getElementById("dobyear");
    a.innerHTML = "please select the date of birth";
         document.myForm.month.focus();
         return false;
    }  
    else
    {
var a = document.getElementById("dobyear");
    a.innerHTML = ""; 
datamonth(p);
         return true;
    }

}





/*Year validation onblur event*/

function yearvalid()
{
var a = document.getElementById("dobyear");
    a.innerHTML = "";

       var p=document.forms["myForm"]["year"].value;

       if(p == null || p == "")
     {
        
var a = document.getElementById("dobyear");
    a.innerHTML = "please select date of birth";
         document.myForm.year.focus();
          return false;
     }  
     else
     {
var a = document.getElementById("dobyear");
    a.innerHTML = "";
 datayear(p);
          return true;
      }

}



/*Hobbie validation onblur event*/

function hobbvalid()
{
var a = document.getElementById("hobby");
    a.innerHTML = "";
      var p=document.forms["myForm"]["hobbies"].value;

     if(p == null || p == "")
   {
      
var a = document.getElementById("hobby");
    a.innerHTML = "select  atleast one hobby";
document.myForm.hobby.focus();
      return false;
   }  
   else
   {
var a = document.getElementById("hobby");
    a.innerHTML = "";
 //datahobby(p);
        return true;
    
   }
}

/* NEW Hobbies start  */
/*function hobbvalid()
{
var i=0;
var a =document.getElementById("hobby");
    a.innerHTML = "";
var h1=document.getElementById("h1");

var h2=document.getElementById("h2");

var h3=document.getElementById("h3");

var h4=document.getElementById("h4");

var h5=document.getElementById("h5");

var h6=document.getElementById("h6");

var hobbieslist = [];
if((h1.checked==false)&&(h2.checked==false)&&(h3.checked==false)&&(h4.checked==false)&&(h5.checked==false)&&(h6.checked==false))

{
//alert("select  atleast one of the Hobbies given below");
var a = document.getElementById("hobby");
    a.innerHTML = "select  atleast one of the Hobbies";
h1.focus();
return false;
}
else
{
if(h1.checked==true)
{
hobbieslist.push("Painting");
i=1;
}

if(h2.checked==true)
{ 
hobbieslist.push("Singing");
i=1;
}

if(h3.checked==true)
{ 
hobbieslist.push("Travelling");
i=1;
}

if(h4.checked==true)
{
hobbieslist.push("Dancing");
i=1;
}


if(h5.checked==true)
{ 
hobbieslist.push("Gardening");
i=1;
}

if(h6.checked==true)
{ 
hobbieslist.push("Others");
i=1;
}

if(i==1)
{
datahobby(hobbieslist);
return true;
}
else
 return false;
}

}

*/
 /*NEW Hobbies end*/

/*Country validation onblur event*/

function counvalid()
{
var a = document.getElementById("cont");
var countries=document.getElementById("countries");
    a.innerHTML = "";

      var p=document.forms["myForm"]["countries"].selectedIndex;
    
  if(p == 0)
  {
      
var a = document.getElementById("cont");
    a.innerHTML = "select the country ";
       document.myForm.countries.focus();
       return false;
  }  
 else

{ 

 var sdValues = [];
   for(var i = 1; i < countries.options.length; i++)
   {
      if(countries.options[i].selected == true)
      {
      sdValues.push(countries.options[i].value);
      }
   }
   datacountry(sdValues);
   return true;
}


}





/* Phone validation onblur event*/
function phnovalid()
{
var a = document.getElementById("mobileno");
    a.innerHTML = "";
    var p=document.forms["myForm"]["pno"].value;
    var phno= /^[+](\s)[0-9]{2}(\s)[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{4}$/;
   if(p.match(phno))
   {
var a = document.getElementById("mobileno");
    a.innerHTML = "";
dataphone(p);
       return true;
   }  
   else  if(p == null || p == "")
   {   
       
var a = document.getElementById("mobileno");
    a.innerHTML = "phone number must not be empty";
       document.myForm.pno.focus();
       return false;  
   }  
  else  
   {   
       
var a = document.getElementById("mobileno");
    a.innerHTML = "please enter phone number in the format + 91 (000)-885-9894";
       document.myForm.pno.focus();
       return false;  
   }  

}






























































