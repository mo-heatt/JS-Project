//21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list
const countries = ['India', 'Bangladesh', 'Nepal', 'Ethiopia'];
let exists;
for(var i = 0; i< countries.length; i++){
    if(countries[i]==='Ethiopia'){
        countries[i]= 'ETHIOPIA';
        exists = true;
        break;
    }
}
if(!exists){
    countries.push('Ethiopia');
}
console.log(countries);

