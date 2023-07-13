/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// to parse json to pdf
// import html-pdf, this means I use json to html, and than parse the html to pdf.
let pdf = require('html-pdf');

let table='';

table += "<table border='1' style='width:100%;word-break:break-word;'>";
table += "<tr>";
table += "<th >Column_Name</th>";
table += "<th >Column_Name";
table += "</tr>";

let array = [];
array.forEach(function(row){
    table += "<tr>";
    table += "<td>"+row.key_one+"</td>";
    table += "<td>"+row.key_tow+"</td>";
    table += "</tr>";
});
table += "</table>";
let  options = {
  "format": "A4",
  "orientation": "landscape",
  "border": {
    "top": "0.1in",
},
"timeout": "12000"
};

pdf.create(table, options).toFile('./test.pdf', function(err, result) {
  if (err) return console.log(err);
  console.log("pdf create");
});

