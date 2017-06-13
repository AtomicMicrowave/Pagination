//Yay variables
const students = document.getElementsByClassName("student-item cf");
const numberOfStudents = students.length;
const studentsPerPage = 10;
const pageCount = Math.ceil(students.length / studentsPerPage);
const $sitePage = $(".page");
const pageHeader = document.getElementsByClassName("page-header")[0];
const $studentEmail = $(".email").map(function () {
    return $(this).text();
});
const h3 = document.getElementsByTagName("H3");
const $studentName = $("h3").map(function () {
    return $(this).text();
});

//Find out how many of the students should be on the page
function showPage(page) {
    $(students).hide(); //Hide all of the students first
    let studentsToDisplay = []; //Empty array for students that will show up
    for (let i = 0; i < numberOfStudents; i += 1) {
        if (i >= page * studentsPerPage && i <= page * studentsPerPage + studentsPerPage - 1) {
            studentsToDisplay.push(students[i]); //Push the student list items to the empty array
            $(students[i]).show(); //Only show the array
        }
    }
    return studentsToDisplay; //Return the array
}
showPage(0); //Run the function and start it on page 1(0 technically)

//Append page numbers at the bottom and figure out which page to show
function createLinks(students) {
    let createUl = document.createElement("ul"); //Create "ul" to append to page
    createUl.className = "pagination";
    for (let i = 1; i <= pageCount; i += 1) {
        let createLi = document.createElement("li"); //Create list item for each page needed
        let createLink = document.createElement("a"); //Create a link for each list item
        createLink.href = "#" + i; //Set the link item's href
        createLink.textContent = i; //Show which page it is inside the link item element
        createLi.append(createLink); //Append link anchor to list item
        createUl.append(createLi); //Append list item to unordered list
        $sitePage.append(createUl); //Append the list after the student's list
        const $pageTabs = $(".pagination ul li"); 
        createLink.addEventListener("click", () => { //Listen for a link to be clicked
            showPage(i - 1, students); //If a link is clicked, show the students of the corresponding page (minus one because you start counting at 0 instead, and 'i' starts at 1)
        });
    }
}
createLinks(); //Run the function

//Append search function
function createSearch() {
    let createInput = document.createElement("input");
    let createButton = document.createElement("button");
    createInput.type = "search";
    createInput.className = "student-search";
    createInput.placeholder = "Search for students...";
    createButton.textContent = "Search";
    createButton.className = "student-search";
    createButton.id = "search";
    pageHeader.appendChild(createInput);
    createInput.after(createButton);
}
createSearch();

/*
//Search function
function searchEngine() {
    const search = document.getElementById("search").value;
    const searchButton = document.getElementsByClassName("student-search")[1];
    const matchedStudent = [];
    const $page = parseInt($(".pagination .active"));
    searchButton.addEventListener("click", function () {
        $(students).hide();
        console.log(search);
        for (let i = 0; i < numberOfStudents; i += 1) {
            if ($studentName[i].includes(search) || $studentEmail[i].includes(search)) {
                matchedStudent.push(students[i]);
            }
        }
        if (matchedStudent.length > 10) {
            for (let i = 0; i < matchedStudent.length; i += 1) {
                if (i >= $page * studentsPerPage && i <= $page * studentsPerPage + studentsPerPage - 1) {
                    studentsToDisplay.push(students[i]); 
                    $(students[i]).show(); 
                }
            }
        }
        if (matchedStudent.length === 0) {
            alert("Sorry, no students matched your search.");
            $(students).show();
            showPage(0);
        }
        showPage($page, matchedStudent);
        return matchedStudent;
    });
}
searchEngine();
*/
console.log(numberOfStudents + " students");


