var total = 0, count = 1;
while (count <= 10) {
	total += count;
	count += 1;
}

document.write(total);
document.write("<br/>");

var twoLines = "This is the first line \n And this is the second";
document.write(twoLines); 
document.write("<br/>");

var caught = 5 * 5;
document.write(caught);
document.write("<br/>");

//alert ("Good day, sir!");

//confirm('Can we then?');

// var theNumber = Number(prompt("Pick a number", ""));

// alert("Your number is the square root of " + (theNumber * theNumber));

var currentNumber = 0;

while (currentNumber <= 100) {
	document.write(currentNumber + ", ");
	currentNumber = currentNumber +2;
}