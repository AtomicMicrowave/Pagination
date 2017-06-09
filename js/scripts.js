const students = document.getElementsByClassName("student-item cf");
const numberOfStudents = students.length;
const studentsPerPage = 10;
const pageCount = Math.ceil(students.length / studentsPerPage);
const $sitePage = $(".page");

function showPage(page) {
    $(students).hide();
    let studentsToDisplay = [];
    for (let i = 0; i < numberOfStudents; i += 1) {
        if (i >= page * studentsPerPage && i <= page * studentsPerPage + studentsPerPage - 1) {
            studentsToDisplay.push(students[i]);
            $(students[i]).show();
        }
    }
    return studentsToDisplay;
}
showPage(0);

function createLinks() {
    let createUl = document.createElement("ul");
    createUl.className = "pagination";
    for (let i = 1; i <= pageCount; i += 1) {
        let createLi = document.createElement("li");
        let createLink = document.createElement("a");
        createLink.href = "#";
        createLink.textContent = i;
        createLi.append(createLink);
        createUl.append(createLi);
        $sitePage.append(createUl);
    }
    const $pageTabs = $(".pagination ul li");
    $($pageTabs).click(() => {
        return $(showPage(i));
    });
}
createLinks();

console.log(numberOfStudents + " students");






