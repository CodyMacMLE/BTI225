/******************************************************************************
*  BTI225 – Assignment 1 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Cody MacDonald Student ID: 159702232 Date: January 19th, 2024
*
******************************************************************************/ 


/************************************************************
 * showMyInfo(void)
 * 
 * Purpose: Displays my student information to the console.
 ***********************************************************/
function showMyInfo()
{
  var school = 'Seneca Polytechnic';
  var program = 'Software Development';
  var fullName = 'Cody MacDonald';
  var GPA = '4.0';
  var isFullTime = true;
  var status = (isFullTime) ? 'full-time' : 'part-time';

  console.log(`My name is ${fullName} and I’m taking the ${program} program in the school ${school}.\nI’m a ${status} with a current GPA of ${GPA}\n`);
}

/*********************************************************** 
 * convTemp(temp, control)
 * 
 * Purpose: Recieves temperature in first param and conversion in second (F->C or C->F) 
 *          Returns converted temp (rounded to the nearest 10th)
 **********************************************************/
function convTemp(temp, control)
{
  temp = Number(temp);
  if (typeof(temp) == 'number' && typeof(control) == 'string')
  {
    var converted = 0;
    switch (control)
    {
      case 'C2F':
        converted = ((temp * 9) / 5) + 32;
        converted = converted.toFixed(1); // rounds to first decimal
        break;
      case 'F2C':
        converted = ((temp - 32) * 5) / 9;
        converted = converted.toFixed(1); // rounds to first decimal
        break;
      default:
        converted = NaN;
    }
  }
  return converted;
}

/*********************************************************** 
 * getAlpha2Code(canadaProvOrTerrName)
 * 
 * Purpose: Recieves standard province or territory name, converts and returns its abbreviation
 **********************************************************/

var getAlpha2Code = function(canadaProvOrTerrName)
{
  var abbreviation = null;
  switch(canadaProvOrTerrName)
  {
    case 'Alberta':
      abbreviation = 'AB';
    break;
    case 'British Columbia':
      abbreviation = 'BC';
    break;
    case 'Manitoba':
      abbreviation = 'MB';
    break;
    case 'New Brunswick':
      abbreviation = 'NB';
    break;
    case 'Newfoundland and Labrador':
      abbreviation = 'NL';
    break;
    case 'Nova Scotia':
      abbreviation = 'NS';
    break;
    case 'Ontario':
      abbreviation = 'ON';
    break;
    case 'Prince Edward Island':
      abbreviation = 'PE';
    break;
    case 'Quebec':
      abbreviation = 'QC';
    break;
    case 'Saskatchewan':
      abbreviation = 'SK';
    break;
    case 'Northwest Territories':
      abbreviation = 'NT';
    break;
    case 'Nunavut':
      abbreviation = 'NU';
    break;
    case 'Yukon':
      abbreviation = 'YT';
    break;
    default:
      abbreviation = 'Not a Canadian Province or Territory';

  }
  return abbreviation;
};

/*********************************************************** 
 * largestNumber()
 * 
 * Purpose: Recieves an unlimited number or params(numbers) into an array and returns largest number
 **********************************************************/
var largestNumber = function() 
{
  let largest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arguments.length; i++)
  {
    if (arguments[i] > largest)
    {
      largest = arguments[i];
    }
  }
  return largest;
};

/*********************************************************** 
 * getFormatedTime24()
 * 
 * Purpose: Recieves Hour, minute and seconds and converts to a 24 hour format
 **********************************************************/

var getFormatedTime24 = function(hour, minute, second)
{
  let formatedTime = "--:--:--";

  // Checking if input time exceeds max number
  if (0 < hour <= 24 && 0 < minute <= 60 && 0 < second <= 60)
  {
    // If hour is less than 10 convert to '0 + hour'
    if (hour < 10)
    {
      hour = '0' + hour;
    }
    // If minute is less than 10 convert to '0 + minute'
    if (minute < 10)
    {
      minute = '0' + minute;
    }
    // If second is less than 10 convert to '0 + second'
    if (second < 10)
    {
      second = '0' + second;
    }
    formatedTime = `${hour}:${minute}:${second}`
  }
  return formatedTime;
};

/*********************************************************** 
 * counter()
 * 
 * Purpose: Everytime counter is called: ++ to count
 **********************************************************/

function counter()
{
  if (count == null)
  {
    count = 1;
  }
  else
  {
    count+= 1;
  }
  return count;
}


/********************************
 *          TEST DATA           *
 *  write all of your functions *
 *      ABOVE this comment      *
 *                              *
 *  NOTE: the code below simply *
 *  invokes each function to    *
 *  show the result - it does   *
 *  not state whether the       *
 *  output is correct or not    *
 ********************************/

// Function 1 (showMyInfo)   

console.log('showMyInfo() returns: ', showMyInfo());

console.log("\n");


// Function 2 (convTemp)

console.log('convTemp(100,"F2C") returns: ', convTemp(100,"F2C"));
console.log('convTemp(18,"C2F") returns: ', convTemp(18,"C2F"));
console.log('convTemp(0,"C2F") returns: ', convTemp(0,"C2F"));
console.log('convTemp(20,"F2C") returns: ', convTemp(20,"F2C"));

console.log("\n");


// Function 3 (getAlpha2Code)

console.log('getAlpha2Code("Alberta") returns: ', getAlpha2Code("Alberta") );
console.log('getAlpha2Code("Newfoundland and Labrador") returns: ', getAlpha2Code("Newfoundland and Labrador") );
console.log('getAlpha2Code("Ontario") returns: ', getAlpha2Code("Ontario") );
console.log('getAlpha2Code("Quebec") returns: ', getAlpha2Code("Quebec") );
console.log('getAlpha2Code("Northwest Territories") returns: ', getAlpha2Code("Northwest Territories") );

console.log("\n");


// Function 4 (largestNumber)

console.log('largestNumber(225) returns: ', largestNumber(225));
console.log('largestNumber(225, 222) returns: ', largestNumber(225, 222) );
console.log('largestNumber(225, 222, 2024) returns: ', largestNumber(225, 222, 2024) );


console.log("\n");


// Function 5 (getFormatedTime24)

console.log('getFormatedTime24(9,50,48) returns: ', getFormatedTime24(9,50,48));
console.log('getFormatedTime24(11,40,8) returns: ', getFormatedTime24(11,40,8));
console.log('getFormatedTime24(16,15,49) returns: ', getFormatedTime24(16,15,49));
console.log('getFormatedTime24(23,5,55) returns: ', getFormatedTime24(23,5,55));

console.log("\n");


// Functinon 6 (counter)

var count = counter();

console.log('counter() returns: ', count);
console.log('invoking the function returns: ', counter());
console.log('invoking the function returns: ', counter());
console.log('invoking the function returns: ', counter());