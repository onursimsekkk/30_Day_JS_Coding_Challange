function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
  p.classList.add("ouch");
  // Test - classList
  console.assert(p.classList.contains("ouch"), "It is not correct!");
}

const dogs = [
  { name: "Hugo", age: 4 },
  { name: "Nohut", age: 2 },
];

//Regular
console.log("hello world!");

// Interpolated  %s
console.log("Hello I am %s string", "X");
// It will print => "Hello I am X string"

// Styled  %c
console.log(
  "%c I am some great text! ",
  "font-size:25px; color:red; background:yellow; text-shadow: 4px 3px 5px gray;"
);

// Warning!
console.warn("OH NOOO");

// Error
console.error("We got a problem here!");

// Info
console.info("Nice info, thanks.");

// Test
const h4 = document.querySelector("h4");

console.assert(h4.classList.contains("new"), "It is not correct!");

// Cleaning
// console.clear();

// Viewing DOM Elements
console.log(h4);
console.dir(h4);

// Grouping together
dogs.forEach((dog) => {
  // console.group(`${dog.name}`); => group is open and groupCollapsed is came closed as default
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old .`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count("Onur");
console.count("Onur");
console.count("Onur");
console.count("Hello");
console.count("Onur");
console.count("Hello");
console.count("Hello");
console.count("World");

// Timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// Table
console.table(dogs);
