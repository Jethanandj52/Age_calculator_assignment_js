var date = new Date()

var month = date.getMonth() + 1

var day = date.getDate();

var year = date.getFullYear();

var newdate = prompt("enter your birth date");
if (newdate == 1 || newdate <= 31) {
    if (newdate <= day) {
        newdate = day - newdate;

        document.write("you are " + newdate + " days, ")
    }
    else if (newdate > day) {
        newdate = day + 31 - newdate;
        document.write("you are " + newdate + " days, ")

        month--


    }
}
else {
    alert("your date is invaild")
}

var newMonth = prompt("Enter your birth month")
if (newMonth == 1 || newMonth <= 12) {
    if (newMonth <= month) {
        newMonth = month - newMonth;
        document.write(newMonth + " months, ")
    }
    else if (newMonth > month) {
        newMonth = month + 12 - newMonth;
        document.write(+newMonth + " month, ")
        year--
    }

}
else {
    alert("your date is invaild")
}



var newYear = prompt("Enter your birth year")
if (newYear > year) {
    alert("You are not born yet")
}
else {
    newYear = year - newYear
}
document.write(" and " + newYear + " years old")