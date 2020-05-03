function palindrome(str) {
  str = str.toLowerCase();
  let regex = /\s+|[^\w]+|_+/g;
  str = str.replace(regex, '');
  var count = 0;
  let len = str.length;
  for(let i=len - 1; i>=0; i--){
    if(str.charAt(i) === str.charAt(len-1-i)){
      count++;
    }else{
      return false;
    }
  }
  return count === len;
}



palindrome("eye");
