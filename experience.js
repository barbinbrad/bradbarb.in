/* This script calculates the number of years of experience */

var start = new Date("1/1/2010"); // approximate start of first 'real' software project
var now = new Date();
var yearsExperience = new Date(now - start).getFullYear() - 1970;

document.getElementById("experience").innerHTML = yearsExperience;
