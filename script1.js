//Task 4.

//1.Playing with JSON object’s Values:

var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}
console.log(cat);

/*
activities: Array(2)
0: "play"
1: "eat cat food"
length: 2
__proto__: Array(0)
catFriends: Array(2)
0: {name: "bar", activities: Array(2), weight: 8, furcolor: "white"}
1: {name: "foo", activities: Array(2), weight: 3}
length: 2
__proto__: Array(0)
name: "Fluffy"

*/

// 1.Add height and weight to Fluffy

cat.height = 2;
cat.weight = 11;

console.log(cat);

/*
activities: (2) ["play", "eat cat food"]
catFriends: (2) [{…}, {…}]
height: 2
name: "Fluffy"
weight: 11
*/

//2.Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy';
console.log(cat);
/*
activities: (2) ["play", "eat cat food"]
catFriends: (2) [{…}, {…}]
height: 2
name: "Fluffyy"
weight: 11
*/

//3.List all the activities of Fluffyy’s catFriends.

for (let i in cat.catFriends) {
    let key = i;
    let value = cat.catFriends[i].activities

    for (let j in value) {
        console.log(value[j]); //be grumpy
        // eat bread omblet
        // sleep
        //  pre-sleep naps
    }
}
// 4. Print the catFriends names.

for (let i in cat.catFriends) {
    console.log(cat.catFriends[i].name); //bar foo
}

// 5.Print the total weight of catFriends
let weight = 0;
for (let i in cat.catFriends) {
    weight += cat.catFriends[i].weight;
}
console.log(weight); //11

// 6.Print the total activities of all cats (op:6)
let totActivities = 0;
for (let i in cat) {
    if (i == "activities") {
        totActivities += cat[i].length;
    }
    else {
        // console.log(typeof (cat[i]));
        if (typeof cat[i] === 'object') {
            for (let j in cat[i]) {
                for (let k in cat[i][j]) {
                    if (k == "activities")
                        totActivities += cat[i][j][k].length;
                }

            }
        }

    }
}

console.log(totActivities); //6
// 7.Add 2 more activities to bar & foo cats

for (let i in cat) {
    if (typeof cat[i] === 'object') {
        for (let j in cat[i]) {
            for (let k in cat[i][j]) {
                if (cat[i][j][k] == "bar" || cat[i][j][k] == "foo") {
                    cat[i][j].activities.push("programming");
                    cat[i][j].activities.push("learning");
                }
            }
        }
    }
}
console.log(cat);
/*
{name: "Fluffyy", activities: Array(2), catFriends: Array(2), height: 2, weight: 11}
activities: (2) ["play", "eat cat food"]
catFriends: Array(2)
0:
activities: (4) ["be grumpy", "eat bread omblet", "programming", "learning"]
furcolor: "white"
name: "bar"
weight: 8
__proto__: Object
1:
activities: (4) ["sleep", "pre-sleep naps", "programming", "learning"]
name: "foo"
weight: 3
__proto__: Object
length: 2
__proto__: Array(0)
height: 2
name: "Fluffyy"
weight: 11
*/


//8. Update the fur color of bar

for (let i in cat) {
    if (typeof cat[i] === 'object') {
        for (let j in cat[i]) {
            for (let k in cat[i][j]) {
                if (cat[i][j][k] == "bar") {
                    cat[i][j].furcolor = 'pink';
                }
            }
        }
    }
}
console.log(cat);

/*
activities: (2) ["play", "eat cat food"]
catFriends: Array(2)
0: {name: "bar", activities: Array(4), weight: 8, furcolor: "pink"}
1: {name: "foo", activities: Array(4), weight: 3}
length: 2
__proto__: Array(0)
height: 2
name: "Fluffyy"
weight: 11
*/
/************************************************************/
// 2.Iterating with JSON object’s Values

var myCar = {
    make: 'Bugatti',
    model: ' Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
        {
            date: '3/15/2019',
            damage_points: 5000,
            atFaultForAccident: true
        },
        {
            date: '7/4/2022',
            damage_points: 2200,
            atFaultForAccident: true
        },
        {
            date: '6/22/2021',
            damage_points: 7900,
            atFaultForAccident: true
        }
    ]
}
// 1. Loop over the accidents array. Change atFaultForAccident from true to false.
for (var i in myCar.accidents) {
    if (myCar.accidents[i].atFaultForAccident == true) {
        myCar.accidents[i].atFaultForAccident = false;
    }
}
console.log(myCar);
/*
accidents: Array(3)
0: {date: "3/15/2019", damage_points: 5000, atFaultForAccident: false}
1: {date: "7/4/2022", damage_points: 2200, atFaultForAccident: false}
2: {date: "6/22/2021", damage_points: 7900, atFaultForAccident: false}
make: "Bugatti"
model: " Bugatti La Voiture Noire"
year: 2019
*/

// 2. Print the dated of my accidents

for (var i in myCar.accidents) {
    console.log(myCar.accidents[i].date); //3/15/2019 7/4/2022 6/22/2021

}
/*************************************************/


// 3.Parsing an JSON object’s Values:
// Write a function called “printAllValues” which returns an newArray of all the input object’s values.

var obj = { name: 'RajiniKanth', age: 33, hasPets: false };
printAllValues(obj);
function printAllValues(obj) {
    let newArr = [];
    for (var i in obj) {
        newArr.push(obj[i]);
    }
    console.log(newArr);  //["RajiniKanth", 33, false]
}
/*************************************************/
// 4.Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

var obj = { name: 'RajiniKanth', age: 25, hasPets: true };
printAllKeys(obj);
function printAllKeys(obj) {
    for (var i in obj) {
        console.log(i); //name age hasPets
    }
}
/*************************************************/
// 5. Parsing an JSON object and convert it to a list
// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
var obj = { name: 'ISRO', age: 35, role: 'Scientist' };
convertListToObject(obj);
function convertListToObject(obj) {
    var newArr = [];
    for (var i in obj) {
        newArr.push([i, obj[i]]);
    }
    console.log(newArr); //) [["name", "ISRO"], ["age", 35], ["role", "Scientist"]]
}
// 6. Parsing a list and transform the first and last elements of it:
// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.
var array = ['GUVI', 'I', 'am', 'Geek'];
transformFirstAndLast(array);
function transformFirstAndLast(arr) {
    var newObject = {};
    for (i = 0; i < array.length; i++) {
        if (i == 0) {
            var key = array[i];
        }
        if (i == arr.length - 1) {
            var value = array[i];
        }
    }
    newObject[key] = value;
    console.log(newObject); // {GUVI: "Geek"}
    return newObject;
}
// 7.Parsing a list of lists and convert into a JSON object:
// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
fromListToObject(array);
function fromListToObject(array) {
    var newObject = {};
    for (let element of array) {
        for (i = 0; i < element.length; i++) {
            if (i == 0) {
                var key = element[i]
            }
            if (i == element.length - 1) {
                var value = element[i];
            }
        }
        newObject[key] = value;
    }

    console.log(newObject); // {make: "Ford", model: "Mustang", year: 1964}
    return newObject;
}
// 8. Parsing a list of lists and convert into a JSON object:
// Write a function called “transformGeekData” that transforms some set of data from one format to another.
var array = [
    [['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']],
    [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]
];
transformEmployeeData(array);

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for (var element of arr) {
        var newObject = {}
        for (var element1 of element) {
            for (i = 0; i < element1.length; i++) {
                if (i == 0) {
                    var key = element1[i]
                }
                if (i == element1.length - 1) {
                    var value = element1[i];
                }
                newObject[key] = value;
            }
        }
        tranformEmployeeList.push(newObject);
        console.log(tranformEmployeeList);    // [ {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"}
        //  {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}]
    }
    return tranformEmployeeList;
}
//9. Write an “assertObjectsEqual” function from scratch.
//   Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
//   It is OK to use JSON.stringify().

var expected = { 'foo': 5, 'bar': 6 };
var actual = { 'foo': 5, 'bar': 6 }
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
function assertObjectsEqual(actual, expected, testName) {

    var actualStr = JSON.stringify(actual);
    var expectedStr = JSON.stringify(expected);
    if (actualStr === expectedStr) {
        console.log('Passed'); //Passed
    }
    else {
        console.log('FAILED' + " " + testName + " " + "testName" + " " + actualStr + " " + "but got" + " " + expectedStr);
        // FAILED detects that two objects are equal testName {"foo":8,"bar":6} but got {"foo":5,"bar":6}
    }

}

// 10. Parsing JSON objects and Compare:

var securityQuestions = [
    {
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
    },
    {
        question: 'What was the model year of your first car?',
        expectedAnswer: 1985
    },
    {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
    }
]
var ques = 'What was the model year of your first car?';
var ans = '1985';
var status = chksecurityQuestions(securityQuestions, ques, ans);
function chksecurityQuestions(securityQuestions, question, answer) {

    for (var value of securityQuestions) {
        for (var i in value) {
            if (value.question == question && value.expectedAnswer == answer) {
                return true;
            }
        }
    }
    return false;
}
console.log(status); //true

//11.Write a function to return the list of characters below 20 age

var students = [
    { name: 'Siddharth Abhimanyu', age: 21 },
    { name: 'Malar', age: 25 },
    { name: 'Maari', age: 18 },
    { name: 'Bhallala Deva', age: 17 },
    { name: 'Baahubali', age: 16 },
    { name: 'AAK chandran', age: 23 },
    { name: 'Gabbar Singh', age: 33 },
    { name: 'Mogambo', age: 53 },
    { name: 'Munnabhai', age: 40 },
    { name: 'Sher Khan', age: 20 },
    { name: 'Chulbul Pandey', age: 19 },
    { name: 'Anthony', age: 28 },
    { name: 'Devdas', age: 56 }
];
returnMinors(students)
function returnMinors(students) {
    var newArr = [];
    for (var obj of students) {
        if (obj.age < 20) {
            newArr.push(obj);
        }
    }
    return newArr;
}
console.log(returnMinors(students));  //  {name: "Maari", age: 18} {name: "Bhallala Deva", age: 17} {name: "Baahubali", age: 16} {name: "Chulbul Pandey", age: 19}