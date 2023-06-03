const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
const length = shoppingCart.length;
console.log(`The length of the array is ${length}`);
let sum = 0;
let sub = 0;
 
for(var i = 0; i<length; i++){
    if(shoppingCart[i] != 'Meat'){
        sub = sub + 1;
    }
    if(shoppingCart[i] != 'Sugar'){
        sum = sum + 1;
    }
}

console.log(`The length of sum is ${sum}`);
console.log(`The length of sub is ${sub}`);

if(sum == length){
    shoppingCart.push('Sugar');
}
else{
    console.log('Sugar exists in the array');
}
if(sub == length){
    shoppingCart.unshift('Meat');
}
else{
    console.log('Meat exists in the array');
}
console.log(shoppingCart);

//Delets one element
for(var i = 0; i< length; i++){
    if(i == 'Honey'){
        splice(i,1);
    }
}

//Replaces 1 element at index 4
for(var i = 0; i< length; i++){
    if(i == 'Tea'){
        splice(i,1,'Green Tea');
    }
}

