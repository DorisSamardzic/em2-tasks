var movingElements = document.querySelector("#gridContainer");
var rectangles = document.querySelectorAll(".rectangle");
var pinkRectangle = document.querySelector("#pinkRectangle");
var blueRectangle = document.querySelector("#blueRectangle");
var paragraph = document.querySelector("#paragraph");
var colors = ["#527BB9", "#FF704B", "#17D101", "#F2E300"];
var indexColors = [0, 1, 3, 2];
var clicks = 0;
var clicked = false;
var listObj = [];
var evenArray = [];
var oddArray = [];
var newEvenArray = [];
var newOddArray = [];
var newObjList = [];
var newEvenList = [];
var newOddList = [];
var lastEvenList = [];
var lastOddList = [];
var lastObjList = [];

rectangles[0].style.backgroundColor = colors[0];
rectangles[1].style.backgroundColor = colors[1];
rectangles[2].style.backgroundColor = colors[2];
rectangles[3].style.backgroundColor = colors[3];
pinkRectangle.style.right = "0px";

movingElements.addEventListener("click", function () {
    changingColors();
    movingPinkRectangle();
})

blueRectangle.addEventListener("click", function () {
    blueRectangleChange();
})

generateListOfObj();
splitArray(listObj, evenArray, oddArray);
changeId(evenArray, newEvenArray);
changeName(oddArray, newOddArray);
createNewList(newObjList, newEvenArray, newOddArray);

for (var i = 0; i < newObjList.length; i++) {
    console.log(newObjList[i].name + " " + newObjList.indexOf(newObjList[i]));
}

splitArray(newObjList, newEvenList, newOddList);
changeId(newEvenList, lastEvenList);
changeName(newOddList, lastOddList);
createNewList(lastObjList, lastEvenList, lastOddList);
removeOddDates();
console.log(lastObjList);



function changingColors() {
    for (var i = 0; i < colors.length; i++) {
        rectangles[i].style.backgroundColor = colors[(indexColors[i] + 3) % 4];
        indexColors[i] = (indexColors[i] + 3) % 4;
    }
}

function movingPinkRectangle() {
    if (clicks === 0) {
        pinkRectangle.removeAttribute("style", "right");
        clicks++;
    }
    else if (clicks === 1) {
        pinkRectangle.style.bottom = "0px";
        clicks++;
    }
    else if (clicks === 2) {
        pinkRectangle.style.right = "0";
        clicks++;
    }
    else if (clicks === 3) {
        pinkRectangle.removeAttribute("style", "bottom");
        pinkRectangle.style.right = "0px";
        clicks = 0;
    }
}

function blueRectangleChange() {
    if (!clicked) {
        blueRectangle.style.backgroundColor = "red";
        paragraph.style.color = "white";

    }
    else {
        blueRectangle.style.backgroundColor = "#00B1F4";
        paragraph.style.color = "black";
    }
    clicked = !clicked;
}

function generateListOfObj() {
    var obj0 = { id: 245, name: "Object-245", description: "Object-228 1" };
    listObj.push(obj0);

    for (var i = 1; i < 10; i++) {
        var id = listObj[i - 1].id + 17;
        var obj = { id: id, name: "Object-" + id, description: listObj[i - 1].name + " " + (i + 1) };
        listObj.push(obj);
    }
    console.log(listObj);
}

function splitArray(list, evenList, oddList) {
    for (var i = 0; i < list.length; i++) {
        var obj = { id: list[i].id, name: list[i].name, description: list[i].description };
        if (list[i].id % 2 === 0) {
            evenList.push(obj);
        }
        else {
            oddList.push(obj);
        }
    }
    console.log(evenList);
    console.log(oddList);
}

function changeId(evenList, changedEvenList) {
    for (var i = 0; i < evenList.length; i++) {
        var obj = { id: Math.floor(Math.random() * 1000), name: evenList[i].name, description: evenList[i].description };
        changedEvenList.push(obj);
    }
    console.log(changedEvenList);
}

function changeName(oddList, changedOddList) {
    for (var i = 0; i < oddList.length; i++) {
        var num = String(oddList[i].id).charAt(0);
        var date = new Date("2016-03-0" + num);
        var obj = { id: oddList[i].id, name: date, description: oddList[i].description };
        changedOddList.push(obj);
    }
    console.log(changedOddList);
}

function createNewList(newList, even, odd) {
    var min;
    var biggerArray = [];
    if (even.length >= odd.length) {
        min = odd.length;
        biggerArray = even;
    }
    else {
        min = even.length;
        biggerArray = odd;
    }
    for (var i = 0; i < min; i++) {
        newList.push(even[i]);
        newList.push(odd[i]);
    }
    for (var i = min; i < biggerArray.length; i++) {
        newList.push(biggerArray[i]);
    }
}

function removeOddDates() {
    var temp = [];
    for (var i = 0; i < lastObjList.length; i++) {
        if (lastObjList[i].name instanceof Date) {
            var date = new Date();
            date = lastObjList[i].name;
            if (date.getDate() % 2 === 0) {
                temp.push(lastObjList[i]);
            }
        }
        else {
            temp.push(lastObjList[i]);
        }
    }
    lastObjList = temp;
}

