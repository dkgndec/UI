function allnumeric()   
    {   
        var numbers = /^[0-9]+$/;
        var cname= document.htmlform.cname.value;
        var pickup= document.htmlform.davinder.value;
        var dropup= document.htmlform.davinder1.value;
        var StartDate= document.htmlform.start.value;
        var EndDate= document.htmlform.end.value;
        var eDate = new Date(EndDate);
        var sDate = new Date(StartDate);
        var nonnumbers = /^[a-zA-Z0-9]+$/;
        var insurance = document.htmlform.insurance.value;
        var cartype = document.htmlform.cartype.value;
        var kms = document.htmlform.kms.value;
        if (cname=="")
            {
                alert("enter customer name");
                document.htmlform.cname.focus();
                return false;
                
            }
        if(cname.match(nonnumbers)) 
            {
                //do nothing
            }
        else    
            {   
                alert('Only alphanumerics characters are allowed');   
                document.htmlform.cname.focus();   
                return false;   
            }
        if(pickup=="123") 
            {
                alert("please choose pickup location");
                document.htmlform.davinder.focus();
                return false;
                
            }
        if(dropup=="1234") 
            {
                alert("please choose dropoff location");
                document.htmlform.davinder1.focus();
                return false;
                
            }
        if (pickup != dropup) 
            {
                confirm("Are you sure for the locations");
            }    
        if(StartDate=="")
            {   
                alert("enter start date");
                document.htmlform.start.focus();
                return false;
                
            }
        if(StartDate!="")
            {
                var arDValidate=StartDate.split("/");
                if(arDValidate.length==3)
                    {
                        if(arDValidate[0].length!=2 || (arDValidate[0]>12))
                            {
                                alert("Wrong Date format");
                                document.htmlform.start.focus();
                                return false;
                            }
                        else if(arDValidate[1].length!=2 || (arDValidate[1]>31))
                                {
                                    alert("Wrong Month format");
                                    document.htmlform.start.focus();
                                    return false;
                                }
                        else if(arDValidate[2].length!=4 || (arDValidate[2]<1900))
                                   {
                                        alert("Wrong Year format");
                                        document.htmlform.start.focus();
                                        return false;
                                    }
                            else
                                   {
                                        var dateDate=new Date(arDValidate[2],arDValidate[1]-1,arDValidate[0]);
                                            if((arDValidate[0]!=dateDate.getDate()))
                                                {
                                                    alert("Wrong Date Enter e.g date month year is not correct 31 feb 2009");
                                                    document.htmlform.start.focus();
                                                    return false;
                                                }
                                    }
                     }
                else
                    {
                        alert("Wrong Format");
                        document.htmlform.start.focus();
                        return false;
                    }
            }
        else
            {
                alert("Date is blank");
                document.htmlform.start.focus();
                return false;
            }    
        if(EndDate=="")
            {
                alert("enter end date");
                document.htmlform.end.focus();
                return false;
                
            }
        if(EndDate!="")
            {
                var arDValidate=EndDate.split("/");
                if(arDValidate.length==3)
                    {
                        if(arDValidate[0].length!=2 || (arDValidate[0]>12))
                            {
                                alert("Wrong Date format");
                                document.htmlform.end.focus();
                                return false;
                            }
                        else if(arDValidate[1].length!=2 || (arDValidate[1]>31))
                                {
                                    alert("Wrong Month format");
                                    document.htmlform.end.focus();
                                    return false;
                                }
                        else if(arDValidate[2].length!=4 || (arDValidate[2]<1900))
                                   {
                                        alert("Wrong Year format");
                                        document.htmlform.end.focus();
                                        return false;
                                    }
                            else
                                   {
                                        var dateDate=new Date(arDValidate[2],arDValidate[1]-1,arDValidate[0]);
                                            if((arDValidate[0]!=dateDate.getDate()))
                                                {
                                                    alert("Wrong Date Enter e.g date month year is not correct 31 feb 2009");
                                                    document.htmlform.end.focus();
                                                    return false;
                                                }
                                    }
                     }
                else
                    {
                        alert("Wrong Format");
                        document.htmlform.end.focus();
                        return false;
                    }
            }
        else
            {
                alert("Date is blank");
                document.htmlform.end.focus();
                return false;
            } 
        if(StartDate!= '' && StartDate!= '' && sDate> eDate)
            {
                alert("Please ensure that the End Date is greater than or equal to the Start Date.");
                return false;
            }
        if (insurance=="1234")
            {
                alert("Please choose insurance");
                document.htmlform.insurance.focus();
                return false;
            }
         if(cartype=="1234")
             {
                 alert("Please choose car type ");
                 document.htmlform.cartype.focus();
                 return false;
             }
         if(kms=="")
             {
                 alert("Please fill no. of kilometers");
                 document.htmlform.kms.focus();
                 return false;
             }
         if(kms.match(numbers)) 
            {
                //do nothing
            }
        else    
            {   
                alert('Only numerics  are allowed');   
                document.htmlform.kms.focus();   
                return false;   
            }    
    }       
          function snehi() 
          {  
          
        if(document.getElementById('text1').checked) 
            {
                document.htmlform.rahul.style.visibility='visible';       
            }
        if(document.getElementById('text2').checked) 
            {
                document.htmlform.rahul.style.visibility='hidden';       
            }
        
    }
        	


