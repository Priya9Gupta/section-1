// array can contain any type of data 
const myarray = [ 'name', 7565, 65.8, true , 76];

console.log (myarray);
console.log(typeof array);


const movies = ['KGF', 'pushpa', 'DDLJ', 'RRR'];
 
console.log(movies.length);  
// aloso work with strings

// adding new elements
movies.push('Iron man');  //add new element to the end
movies.unshift('batman'); //add new element to the beggining
console.log(movies);

// indexing element
console.log(movies[4]);
console.log([-4])   //not works
// negative indexing
console.log(movies.at(-4));

// replacing element

movies[2] = 'Flash'; //replace
console.log(movies);

//removing element

movies.pop();
movies.shift(); //removing last element
console.log(movies); //removing first element

// removing element  between sentences

movies.splice(2, 2);
console.log(movies);