"use strict";
/*.Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
//Countries to Visit:
let visitCountries = ["Turkey", "Saudia Arabia", "UAE", "USA", "Ireland"];
//In Original Order:
console.log(visitCountries);
//In Alphabetical Order:
console.log([...visitCountries].sort());
//Array still in its Original Order:
console.log(visitCountries);
//Reverse the Order of list:
console.log([...visitCountries].sort().reverse());
//Back to it's Original Order:
console.log(visitCountries);
//Reverse the Order of List:
visitCountries.reverse();
console.log(visitCountries);
//Reverse the Order Again and Bring Back to its Original Order:
visitCountries.reverse();
console.log(visitCountries);
//Sort the Array in an Alphabetical Order:
visitCountries.sort();
console.log(visitCountries);
//Change an Array in Reverse Alphabetical Order:
visitCountries.reverse();
console.log(visitCountries);
