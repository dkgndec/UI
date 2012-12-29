function test() 
    {
        var h=document.htmlform.davinder.value;
        var i=document.htmlform.davinder1.value;
        var j=document.htmlform.davinder2.value;
        var k=document.htmlform.davinder3.value;
        var dValidate=document.htmlform.mydate.value;
        var rent = document.htmlform.rent.value;
        var numbers = /^[a-zA-Z0-9]+$/;
        var vin = document.htmlform.vin.value;
        var spec = document.htmlform.spec.value;
        var mile = document.htmlform.hello.value;
        var snehi = /^[0-9]+$/;
        var dummiy  = document.htmlform.extra123.value;
        if (h=="123") 
            {
                alert("Select Fleet");
                document.htmlform.davinder.focus;
                return false;
            }
        if (i=="123") 
            {
                alert("select car make");
                document.htmlform.davinder1.focus;
                return false;
            }
        if (j=="123") 
            {
                alert("select car model");
                document.htmlform.davinder2.focus;
                return false;
            }
        if (k=="123") 
            {
                alert("select car year");
                document.htmlform.davinder3.focus;
                return false;
            }
        
        if(dValidate!="")
            {
                var arDValidate=dValidate.split("/");
                if(arDValidate.length==3)
                    {
                        if(arDValidate[0].length!=2 || (arDValidate[0]>32))
                            {
                                alert("Wrong Date format");
                                document.htmlform.mydate.focus();
                                return false;
                            }
                        else if(arDValidate[1].length!=2 || (arDValidate[1]>13))
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
                    return false;
                }
            }
  else
  {
   alert("Date is blank");
   document.htmlform.mydate.focus();
   return false;
  }
  
      

      if(vin=="")
          {
              alert("Please insert vin number");
              document.htmlform.vin.focus();
              return false;
          }
         
      if(vin.match(numbers))   
        {
            
        }
      else
      {   
      alert('Please input alphanumeric only');   
      document.htmlform.vin.focus();   
      return false;   
      }
      if(spec=="")
          {
              alert("Please enter specifications");
              return false;
          }
      if(mile=="")
         {
             alert("Please insert mileage field");
             document.htmlform.hello.focus();
             return false;
         }
     if(mile.match(snehi))   
        {
            
        }
else
      {   
      alert('Please input numbers only in mileage');   
      document.htmlform.hello.focus();   
      return false;   
      }
      if(rent=="")
          {
              alert("Please insert rent field");
              document.htmlform.rent.focus();
              return false;
          }
     if(rent>20000) {
          alert("Select value of rent less than 20000");
          document.htmlform.rent.focus();
              return false;
            }
            
     if(dummiy=="")
         {
             alert("Please insert extra value");
             document.htmlform.extra123.focus();
             return false;
         }
}



