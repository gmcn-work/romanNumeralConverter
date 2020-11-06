function convertToRoman(num) {
  const roman =
  {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  var rem = 0;
  var arr = [];
  
  for(const elem in roman)
  {
    //console.log(elem)
    var ct = 0;
    if(num < roman[elem])
    {
      continue;
    }
    ct = Math.floor(num/roman[elem]);
    num = num%roman[elem];
    for(var i=0; i < ct; i++)
    {
      arr.push(elem)
    }
  }
  return arr.join("");
}

convertToRoman(36);
