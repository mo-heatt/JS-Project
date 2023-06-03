let input = 3;
for(let i = 0; i < input; i++){
    let row = '';
    for(let j = 0; j <= i; j++){
        row = row + "*";
    }
    console.log(row);
}

console.log('\n');

for(let i = 0; i < input; i++){
    let row = '';
    for(let j = 0; j < input; j++){
        row = row + "*";
    }
    console.log(row);
}

console.log('\n');


for(let i=1;i<=input;i++){
    let row = '';
    //loop for spacces
    for(let j=1; j<=input-i;j++){
        row=row+(" ");
    }
    //loop for stars
    for(let k=1;k<=2*i-1;k++){
        row=row+"*";
    }
    console.log(row);
}

