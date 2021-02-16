//step1. set a connection
var request = new XMLHttpRequest();

//step2. open connection
request.open("GET", "https://restcountries.eu/rest/v2/all", true); //true if any error it will not stop execution

//step3.send request

request.send();

//step4.process and load retrive response

//Dont use arrow fn here

//this will refer the window obj rather than response obj
//so we shouldn't use anonymous fn
/*request.onload = () => {
    var data = JSON.parse(this.response);  
    console.log(data);
}*/

request.onload = function () {
    var data = JSON.parse(this.response); //why json parse bcoz response will come as string
    // console.log(data);

    //  Task 1. Print all countries name from rest countries API
    for (var i in data) {
        console.log("country name", data[i].name);
    }

    //Task 5.  Extract and print the total population of all the countries in the console
    let totalPopulation = 0;
    for (var i in data) {
        /*  console.log(
              "country name and population",
              data[i].name,
              data[i].population
          );*/
        totalPopulation = totalPopulation + data[i].population++;
        console.log("Total population of all countries", totalPopulation);
    }
};

//Task2. write up on Difference between copy by value and copy by reference.
//Will attach this in doc file



//Task3. How to copy by value a composite data type (array+objects).
//Below are three important ways to copy by value a composite data type

// 1.Use the spread (...) syntax

//Using arrays

var arr = [23, 45, 56, 78];

var spreadArr = [...arr];
arr[0] = 5; //It will not reflect in spread array.Hence it's internally using copy by value
console.log(spreadArr); //[23, 45, 56, 78]
console.log(arr); //[5, 45, 56, 78]


//Using objects
var obj = { a: 1, b: 2 };
var spreadObj = { ...obj };
obj.c = 8;  //It will not reflect in spread object.Hence it's internally using copy by value
console.log(spreadObj); // {a: 1, b: 2}
console.log(obj); //{a: 1, b: 2, c: 8}

/*************************************/
//2.Use the Object.assign() method

//Using objects
var spdObj = Object.assign({}, obj);
obj.name = "sowmya";
console.log(spdObj); // {a: 1, b: 2, c: 8}
console.log(obj);    //{a: 1, b: 2, c: 8, name: "sowmya"}

/******************************** */
//3.Use JSON.stringify() and JSON.parse() methods

//Using objects

var copiedObj = JSON.parse(JSON.stringify(obj));
obj.password = "asdada"; //It will not affect the copiedObj

console.log(copiedObj); //{a: 1, b: 2, c: 8, name: "sowmya"}
console.log(obj);// {a: 1, b: 2, c: 8, name: "sowmya", password: "asdada"}


