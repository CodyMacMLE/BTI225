var firstNames = ["david", "john", "michael", "paul", "andrew", "peter", "james", "robert", "mark", "richard"];
var lastNames = ["smith", "jones", "williams", "brown", "taylor", "davies", "roberts", "wang", "kim", "petel"];
var programs = ["BSD", "IFS", "CCP", "CPA"];
var students = [];
for(var i=0; i<20; i++) 
{
  var student = {}
    student.firstName = firstNames[generateRandomNumber(0,9)],
    student.lastName = lastNames[generateRandomNumber(0,9)],
    student.dob = generateRandomDate(1990, 2005),
    student.program = programs[generateRandomNumber(0,3)]
  students.push(student);
};

function generateRandomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomDate(minYear, maxYear)
{
  let date = new Date(generateRandomNumber(minYear, maxYear), generateRandomNumber(0, 11), generateRandomNumber(0, 27));
  date.toLocaleDateString();
  return date;
}

console.table(students);