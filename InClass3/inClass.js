function checkArrayElement1(arr, str){
  let exitFlag = false;
  let patt = new RegExp(str, "i");
  for (let i = 0; i < arr.length; i++)
  {
    if(arr[i].match(patt))
    {
      exitFlag = true;
    }
  }
  return exitFlag;
}

function checkArrayElement2(arr, str){
  let patt = /str/i;
  let exitFlag = patt.test(patt);
  return exitFlag;
}

var colors = ['White','Red','Yellow','Green','Blue','Black']

console.log("1.Check 'red':",checkArrayElement1(colors, "red"));
console.log("1.Check 'Gray':",checkArrayElement1(colors, "gray"));

console.log("2.Check 'red':",checkArrayElement2(colors, "red"));
console.log("2.Check 'Gray':",checkArrayElement2(colors, "gray"));
/*
console.log("3.Check 'red':",checkArrayElement3(colors, "red"));
console.log("3.Check 'Gray':",checkArrayElement3(colors, "gray"));

console.log("4.Check 'red':",checkArrayElement4(colors, "red"));
console.log("4.Check 'Gray':",checkArrayElement4(colors, "gray"));
*/