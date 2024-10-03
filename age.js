function acess(age) {
    if (age >= 18 && age <65) {
        console.log ("Acess Granted")
      return
    } if (age>0 && age < 18){
        console.log ("Access denied. You are too young")
        return
    
    } if (age >65){
        console.log ("Access denied. You are too old")
        return

    }
    return "Invalid age"
};
 console.log (acess());
 console.log (acess(18));
 console.log (acess(63));
 console.log (acess(70));
 console.log (acess(17));