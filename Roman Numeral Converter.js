function attach(str, n){
  let temp ="";
  for(let i=0; i<Math.floor(n); i++){
    temp+=str;
  }
  return temp;
}
function convertToRoman(num) {
  var res = "";
 const symbols = {
   1: "I", 4 : "IV", 5 : "V", 9 : "IX", 10 : "X", 40 : "XL", 50 : "L", 90 : "XC", 100 : "C", 400 : "CD", 500 : "D", 900 : "CM", 1000 : "M"};
   while(num>0){
     if(num>=1000){
       res+=attach(symbols[1000], num/1000);
       num = num%1000;
     }else if(num>=500){
       if(num<900){
         res+=attach(symbols[500], num/500);
         num = num%500;
       }else{
         res+=symbols[900];
         num = num%100;
       }
     }else if(num>=100){
       if(num<400){
         res+=attach(symbols[100], num/100);
         num = num%100;
       }else{
         res+=symbols[400];
         num = num%100;
       }
     }else if(num>=50){
       if(num<90){
         res+=attach(symbols[50], num/50);
         num = num%50;
       }else{
         res+=symbols[90];
         num = num%10;
       }
     }else if(num>=10){
       if(num<40){
         res+=attach(symbols[10], num/10);
         num = num%10;
       }else{
         res+=symbols[40];
         num = num%10;
       }
     }else if(num>=5){
       if(num<9){
         res+=attach(symbols[5], num/5);
         num = num%5;
       }else{
         res+=symbols[9];
         num = 0;
       }
     }else if(num>=1){
       if(num<4){
         res+=attach(symbols[1], num);
         num = 0;
       }else{
         res+=symbols[4];
         num = 0;
       }
     }
   }
 return res;
}

let abc = "abc";
abc = abc+"abc";
abc+="afdf";
console.log(abc);
console.log(convertToRoman(36));
