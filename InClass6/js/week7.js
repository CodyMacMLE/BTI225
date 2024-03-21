var countries = [
  {country: "Canada", capital: "Ottawa", flagUrl: "https://flagcdn.com/w320/ca.png", wikiPage:"https://en.wikipedia.org/wiki/Canada"},
  {country: "United States", capital: "Washington, D.C.", flagUrl: "https://flagcdn.com/w320/us.png", wikiPage:"https://en.wikipedia.org/wiki/United_States"},
  {country: "Mexico", capital: "Mexico City", flagUrl: "https://flagcdn.com/w320/mx.png", wikiPage:"https://en.wikipedia.org/wiki/Mexico"},
  {country: "Brazil", capital: "BrasÃ­lia", flagUrl: "https://flagcdn.com/w320/br.png", wikiPage:"https://en.wikipedia.org/wiki/Brazil"},
  {country: "China", capital: "Beijing", flagUrl: "https://flagcdn.com/w320/cn.png", wikiPage:"https://en.wikipedia.org/wiki/China"},
  {country: "India", capital: "New Delhi", flagUrl: "https://flagcdn.com/w320/in.png", wikiPage:"https://en.wikipedia.org/wiki/India"}
];

window.onload = function(){
  generateTable();
};

function generateTable() {
  var table = document.querySelector("#outputTable");
 
  // Remove Old Table
  var existingBody = querySelector("tbody");
  if (existingBody) table.removeChild(existingBody);

  // New Table
  var tableBody = document.createElement("tbody");

  for (var i = 0; i < countries.length; ++i)
  {
    var row = document.createElement("tr");
    row.appendChild(generateRow(countries[i].country));
    row.appendChild(generateRowFlag(countries[i].flagUrl));
    row.appendChild(generateRow(countries[i].capital));
    //row.appendChild(generateRowLink(countries[i].wikiPage));
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
}

function generateRow(object) {
  var td = document.createElement("td");
  var tdText = document.createTextNode(object);
  td.appendChild(tdText);
  return td;
}

function generateRowFlag(object) {
  var td = document.createElement("td");
  var img = document.createElement("img");
  img.setAttribute("href", object);
  td.appendChild(img);
  return td;
}

function generateRowLink(object) {
  var anchor = document.createElement("a");
  anchor.setAttribute("href", object);
  var anchorText = document.createTextNode(object);
  anchor.appendChild(anchorText);

  var td = document.createElement("td");
  td.appendChild(anchor);

  return td;
}