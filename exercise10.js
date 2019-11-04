
var num1 = prompt("Enter first number ");
var num2 = prompt("Enter second number ");
var num3 = prompt("Enter third number ");

console.log(num1,num2,num3);


arrange(num1,num2,num3);

function arrange(x,y,z){

    if (x>y && x>z){
        if(y>z){
            console.log(x,y,z);
        }else{
            console.log(x,z,y);
        }
    }
    if(y>x && y>z){
        if(x>z){
            console.log(y,x,z);
        }else{
            console.log(y,z,x);
        }
    }
    if(z>x && z>y){
        if(x>y){
            console.log(z,x,y);
        }else{
            console.log(z,y,x);
        }
    }

}

