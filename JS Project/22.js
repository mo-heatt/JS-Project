// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let medianage;
console.log(ages);
let minAge = ages[0];
let maxAge = ages[ages.length-1];

if(ages.length%2==0){
    let medianage1 = Math.ceil(ages.length/2)
    let medianage2 = Math.floor(ages.length/2)
    medianage =Math.round((ages[medianage1]+ages[medianage2])/2);
}
else{
    medianage = Math.ceil(ages.length/2);
}
console.log(medianage);

let total = 0;
for(let i = 0; i<ages.length; i++){
    total = total + ages[i];
}
let averageAge = total/ages.length;

let range = maxAge - minAge;

let compare = Math.abs(maxAge-medianage,minAge-medianage);