let input = prompt("Enter month: ");
switch(input){
    case "January":
    case "April":
    case "July":
    case "August":
    case "October":
    case "December":
        alert("Month has 31 days!");
        break;
    case "March":
    case "June":
    case "September":
    case "November":
    case "May":
        alert("Month has 30 days!");
        break;
    case "February":
        alert("Month has 28 days!");
        break;
}