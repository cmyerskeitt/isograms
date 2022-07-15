function isIsogram(str){
    let letters = {}
    let newStr = str.toLowerCase()
    console.log(letters)
    for (let i = 0; i < newStr.length; i++){
      if (letters[newStr[i]]) {
         return false;
       }
       letters[newStr[i]] = true;
     }
     return true; 
  }