function allnumeric()   
    {   
        var name = document.htmlform.fname.value;
        var lname = document.htmlform.lastname.value;
        var d = document.htmlform.mydate;
        var address = document.htmlform.address;
        var city = document.htmlform.city;
        var email = document.htmlform.email;
        var numbers = /^[A-z]+$/;
        var dValidate=document.htmlform.mydate.value;
        var x=document.forms["htmlform"]["email"].value;
        var atpos=x.indexOf("@");
        var dotpos=x.lastIndexOf(".");
        var abcd=document.htmlform.abcd.value;
        if (name=="" || name.length>20)
            {
                alert("Please enter first name with maximum 20 alphabets");
                document.htmlform.fname.focus();
                return false;
  
            }
       if(name.match(numbers))   
            {
                //do nothing
            }
       else
            {
                alert ("Please enter only alphabets");
                document.htmlform.fname.focus();
                return false;
             }
       if (lname=="" || lname.length>20)  
            {
                alert ("Please enter lastname with maximum 20 character");
                document.htmlform.lastname.focus();
                return false;
            }
        if(lname.match(numbers))
           {
               //do nothing
           }
        else   
            {   
                alert('Please input characters only');   
                document.htmlform.lastname.focus();   
                return false;   
            }  
        if (d.value=="")
            {
                alert("Please fill the date field");
                document.htmlform.mydate.focus();
                return false;
                
            }
        if(dValidate!="")
            {
                var arDValidate=dValidate.split("/");
                if(arDValidate.length==3)
                    {
                        if(arDValidate[0].length!=2 || (arDValidate[0]>12))
                            {
                                alert("Wrong Date format");
                                document.htmlform.mydate.focus();
                                return false;
                            }
                        else if(arDValidate[1].length!=2 || (arDValidate[1]>31))
                                {
                                    alert("Wrong Month format");
                                    document.htmlform.mydate.focus();
                                    return false;
                                }
                        else if(arDValidate[2].length!=4 || (arDValidate[2]<1900))
                                   {
                                        alert("Wrong Year format");
                                        document.htmlform.mydate.focus();
                                        return false;
                                    }
                            else
                                   {
                                        var dateDate=new Date(arDValidate[2],arDValidate[1]-1,arDValidate[0]);
                                            if((arDValidate[0]!=dateDate.getDate()))
                                                {
                                                    alert("Wrong Date Enter e.g date month year is not correct 31 feb 2009");
                                                    document.htmlform.mydate.focus();
                                                    return false;
                                                }
                                    }
                     }
                else
                    {
                        alert("Wrong Format");
                        document.htmlform.mydate.focus();
                        return false;
                    }
            }
        else
            {
                alert("Date is blank");
                document.htmlform.mydate.focus();
                return false;
            }
        if (address.value=="" || address.value.length<20)
            {
                alert("Please enter Address field, it should be maximum than 20 characters");
                document.htmlform.address.focus();
                return false;
            }
         if (city.value=="")
             {
                 alert("Please enter City field");
                 document.htmlform.city.focus();
                return false;
             }
         if(city.value.match(numbers))
           {
               //do nothing
           }
        else   
            {   
                alert('Please input only alphabets without spaces in city field');   
                document.htmlform.city.focus();   
                return false;   
            }   
         if (email.value=="")
             {
                 alert("Please Enter Email ");
                 document.htmlform.email.focus();
                return false;
             }
        
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
            {
                alert("Not a valid e-mail address");
                document.htmlform.email.focus();
                return false;
            }     
        
        if(abcd=="")
            {
                alert("please Enter the Contact Number");
                document.htmlform.abcd.focus();
                return false;
                
            }
        if(isNaN(abcd))
            {
                alert("Enter the valid Mobile Number(Like : 9566137117)");
                document.htmlform.abcd.focus();
                return false;
            }
        if(abcd.length !=10) 
            {
                alert("enter only 10 character");
                document.htmlform.abcd.focus();
                return false;
            }
      
      
      
     }  







       




