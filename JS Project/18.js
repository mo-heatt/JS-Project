function checkLeapYear(year) {
        switch(year){
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
                if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                    console.log(year + ' is a leap year');
                    alert("Month has 29 days!");
                    break;
                }
                else{
                    console.log(year + ' is not a leap year');
                    alert("Month has 28 days!");
                    break;
                }
        }
    } 
const year = prompt('Enter a year: ');
checkLeapYear(year);