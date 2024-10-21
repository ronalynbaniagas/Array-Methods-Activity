const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

const combinedArray = arr1.concat(arr2);
console.log(combinedArray);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
const removedElement = fruits2.pop();
console.log(fruits2);
console.log(removedElement);

const array2 = [1, 2, 3];
const removedElement2 = array2.shift();
console.log(array2); // Output: [2, 3]
console.log(removedElement2);

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.sort();
console.log(fruits3);

const fruits4 = ["Apple", "Banana", "Mango", "Orange"];
const slicedArray = fruits4.slice(1, 3);
console.log(slicedArray);

const months = ["Jan", "Mar", "May", "Jul"];
months.splice(1, 0, "Feb");
months.splice(3, 1);
console.log(months);