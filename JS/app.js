function games(a, b, c) {
    return (a+b) * c;
} 

function myFunction(stringMyFunction) {
    if(stringMyFunction.length >10) {
        return true;
    } else if(stringMyFunction.length <= 10) {
        return false;
    }else { 
        console.log("Erro");
    }
}

function arrayFunction(arrayMyFunction) {
    for(var i =0; i < arrayMyFunction.length; i++) {
       if(arrayMyFunction[i].startsWith("ph")) {
           return arrayMyFunction[i];
       }
    }
    return "No string starts with ph";
}

console.log(games(3, 4, 5))

console.log(myFunction("felipebellinazzi"));
console.log(myFunction("reemhaddad"));
console.log(myFunction("BrazilJordan"));

console.log(arrayFunction(["phone", "email"]));
console.log(arrayFunction(["fax", "number"]));
console.log(arrayFunction(["emai", "fax", "phone"]));

