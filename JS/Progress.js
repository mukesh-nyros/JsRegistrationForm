
/*username validation for progressbar*/

function uservalid1()
{

   var p=document.forms["myForm"]["uname"].value;
   var uname= /^[a-zA-Z][a-zA-Z0-9]{4,8}$/;
   if(p.match(uname))
   {
  
      return true;
   }  
  else if(p == null || p == "" || p.length==0)
   {   

     
     return false;
   }
   else
   {
   
  
	  return false;
   }


}



/*Password validation for progressbar*/

function passvalid1()
{
  var p=document.forms["myForm"]["pwd"].value;
  var pwd= /^[a-zA-Z0-9]{6}$/;
  if(p.match(pwd))
  {
   
   return true;
  }  
  else  if(p == null || p == "")
  {   
   
   return false;  
  }  
  else  
  {   

  
   return false;  
  }  


}



/*First validation for progressbar*/

function firstvalid1()
{


  var p=document.forms["myForm"]["fname"].value;
  var fname= /^[a-zA-Z]{3,6}$/;
  if(p.match(fname))
   {
   
     return true;
   }  

  else  if(p == null || p == "")
   {   

    return false;  
   }  
  else  
  {   

  return false;  
  }  


}



/*Lastname validation for progressbar*/

function lastvalid1()
{
     var p=document.forms["myForm"]["lname"].value;
     var lname= /^[a-zA-Z]{3,15}$/;
     if(p.match(lname))
     {
        return true;
     }  
     else  if(p == null || p == "")
     {   

       return false;  
    }  
    else  
    {   

      
      return false;  
    }  
 

}




/*Profile pic validation for progressbar*/
function profilevalid1()
{
   var p=document.forms["myForm"]["pic"].value;
   var pic1=/.gif/;
   var pic2=/.jpg/;
   var pic3=/.jpeg/;
   var pic4=/.png/;


    if(p == null || p == "")
    {
    
       return false;
    } 

    else if(p.match(pic1) ||p.match(pic2) || p.match(pic3)|| p.match(pic4))
   {

     return true;
   }
	 else
   {

		return false;
	 }

}






/*Date validation for progressbar*/
function dayvalid1()
{
        var p=document.forms["myForm"]["day"].value;

      if(p == null || p == "")
     {
 

       return false;
     }  
    else
    {
  
       return true;
    
    }

}






/*Month validation for progressbar*/

function monthvalid1()
{

   var p=document.forms["myForm"]["month"].value;

    if(p == null || p == "")
   {
  
   
      return false;
   }  
   else
   {
 
      return true;
   }

}




/*Year validation for progressbar*/

function yearvalid1()
{

   var p=document.forms["myForm"]["year"].value;
  if(p == null || p == "")
  {

    return false;
  }  
  else
  {

    return true;
  }


}


/*Hobbies validation for progressbar*/


function hobbvalid1()
{
     var p=document.forms["myForm"]["hobbies"].value;

     if(p == null || p == "")
    {

      return false;
    }  
   else
    {

      return true;
    
    }
}







/*country validation for progressbar*/
function counvalid1()
{

   var p=document.forms["myForm"]["countries"].value;

  if(p == 0)
  {

  
    return false;
  }  
  else
  {
  
    return true;
  }


}





/*Phone number validation for progressbar*/
function phnovalid1()
{

  var p=document.forms["myForm"]["pno"].value;
  var phno= /^[+](\s)[0-9]{2}(\s)[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{4}$/;
   if(p.match(phno))
   {

        return true;
   }  

  else  if(p == null || p == "")
  {   

    
       return false;  
  }  
  else  
  {   
    
      return false;  
  }  


}






      /*Count check for progressbar*/

function progress()
{

  var count=0;
 

  if(uservalid1()==false)         /*Start Count check of user valid for progressbar*/
  {
      count=count+0;
    if(count!=90)
	document.getElementById("success").style.display = "none"; 

     
  }
  else
  {
       count=count+9;
        if(count==90)
       document.getElementById("success").style.display = "block";
     
             
  }                               /*End Count check of user valid for progressbar*/
  



  if(passvalid1()==false)           /*Start Count check of password valid for progressbar*/
  {
     count=count+0;
     if(count!=90)
	document.getElementById("success").style.display = "none"; 
  }
  else
  {
     count=count+9;
   if(count==90)
document.getElementById("success").style.display = "block"; 
  }                               /*End Count check of password valid for progressbar*/




 if(firstvalid1()==false)           /*Start Count check of firstname valid for progressbar*/
  {
     count=count+0;
     if(count!=90)
document.getElementById("success").style.display = "none"; 
   }
   else{
     count=count+9;
if(count==90)
document.getElementById("success").style.display = "block"; 
         }                        /*End Count check of firstname valid for progressbar*/




if(lastvalid1()==false){             /*Start Count check of lastname valid for progressbar*/
     count=count+0;
     if(count!=90)
document.getElementById("success").style.display = "none"; 
   }
   else{
     count=count+9;
if(count==90)
document.getElementById("success").style.display = "block"; 
         }                           /*End Count check of lastname valid for progressbar*/




if(profilevalid1()==false){           /*Start Count check of profilepicture valid for progressbar*/
     count=count+0;
     if(count!=90)
      document.getElementById("success").style.display = "none"; 
   }
   else{
     count=count+9;
         
if(count==90)
document.getElementById("success").style.display = "block"; 
}                                     /*End Count check of profilepicture valid for progressbar*/





         if(dayvalid1()==false)       /*Start Count check of day valid for progressbar*/
         {
    	 count=count+0;
  	if(count!=90)
	document.getElementById("success").style.display = "none";   
  	 }
  	 else{
 	    count=count+9;
		if(count==90)
		document.getElementById("success").style.display = "block"; 
  	       }                               /*End Count check of day valid for progressbar*/

         


         if(monthvalid1()==false)           /*Start Count check of month valid for progressbar*/
         {
   	  count=count+0;
  	   if(count!=90)
	document.getElementById("success").style.display = "none"; 
  		 }
  	 else{
 	    count=count+9;
	if(count==90)
	document.getElementById("success").style.display = "block"; 
         }                                  /*End Count check of month valid for progressbar*/

         


         if(yearvalid1()==false)              /*Start Count check of year valid for progressbar*/
         {
     count=count+0;
     if(count!=90)
	document.getElementById("success").style.display = "none"; 
  	 }
 	  else{
     count=count+9;
	if(count==90)
	document.getElementById("success").style.display = "block"; 
         }                                  /*End Count check of year valid for progressbar*/

         


if(hobbvalid1()==false)                   /*Start Count check of hobbies valid for progressbar*/
{
     count=count+0;
if(count!=90)
document.getElementById("success").style.display = "none"; 
     
   }
   else{
     count=count+9;
if(count==90)
document.getElementById("success").style.display = "block"; 
         }                                /*End Count check of hobbies valid for progressbar*/
         
         



         if(counvalid1()==false)                /*Start Count check of country valid for progressbar*/
         {
	if(count!=90)
	document.getElementById("success").style.display = "none";      
	count=count+0;
     
 	  }
  	 else{

     count=count+9;
	if(count==90)
	document.getElementById("success").style.display = "block"; 
         }                                        /*End Count check of country valid for progressbar*/

     


  if(phnovalid1()==false)                 /*Start Count check of phone valid for progressbar*/
  {
if(count!=90)
document.getElementById("success").style.display = "none"; 
     count=count+0;
     
   }
   else{
     count=count+9;
if(count==90)
document.getElementById("success").style.display = "block"; 
         }                                      /*End Count check of phone valid for progressbar*/
   


  document.getElementById("myprogress").value=count; 

if(document.getElementById("myprogress").value==99)
{
  document.getElementById("success").style.display="block";
}
else{
  document.getElementById("success").style.display="none";
}

}
           /*End of Count check for progressbar*/