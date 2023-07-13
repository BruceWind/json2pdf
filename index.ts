/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// to parse json to pdf
// import html-pdf, this means I use json to html, and than parse the html to pdf.
let pdf = require("html-pdf");
var path = require("path");

let fs = require("fs");
global.appRoot = path.resolve(__dirname);

const PLACEHOLDER = "{TBBODY}";

let table = "";

table += "<tbody>";

let array = [
  { key_one: "He carefully ______ the onions into small pieces before adding them to the pot of soup.", key_two: "chop" },
  { key_one: "123", key_two: "test" },
];
array.forEach(function (row) {
  table += "<tr>";
  table += "<td>" + row.key_one + "</td>";
  table += "<td>" + row.key_two + "</td>";
  table += "</tr>";
});
table += "</tbody>";

let options = {
  format: "A4",
  orientation: "portrait",
  timeout: "12000",
  base: "",
};

options.base = `file://${global.appRoot}/base/`;

let html = fs.readFileSync("./base/Index.html", "utf8");

html = html.replace(PLACEHOLDER, table);

pdf.create(html, options).toFile("./test.pdf", function (err, result) {
  if (err) return console.log(err);
  console.log("pdf create ");
});
