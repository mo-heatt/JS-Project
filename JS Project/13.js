var input = prompt("Enter your Age: ");
console.log(input);
if(input >= 18){
    console.log('You are old enough to drive');
}
else{
    console.log('wait for ' +(18-input)+' years to turn 18.')
}