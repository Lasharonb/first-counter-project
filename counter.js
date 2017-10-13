var unit = 0;
var decimal = 0;
var cen = 0;

setInterval(function(){
    
    unit++; 
    
      if(unit==10){
       unit = 0;
       decimal ++;}
       
       if(decimal==7){
           decimal=0;
       }
       
       if(cen==6){
           cen=0;
       }
   
    
   document.getElementById("6").innerHTML = unit;
   document.getElementById("5").innerHTML = decimal;
   document.getElementById("4").innerHTML = cen;


}, 1000);