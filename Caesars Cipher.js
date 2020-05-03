function rot13(str) {
  let res = "";
  let ascii;
  for(let i=0; i<str.length; i++){
    ascii = parseInt(str.charCodeAt(i));
    if(ascii>=65 && ascii<=77){
      res = res+String.fromCharCode(ascii+13);
    }else if(ascii>77 && ascii<=90){
      res = res+String.fromCharCode(ascii-13);
    }else{
      res+=str[i];
    }
  }
  return res;
}

console.log(rot13("SERR PBQR PNZC"));
