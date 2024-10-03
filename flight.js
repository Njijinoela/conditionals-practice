function flight (age, hasPassport, isFlightAvailable){
    if (age >=18 && age <= 70){
        if(hasPassport === true){
            if(isFlightAvailable === true){
            
                return "Booking Successful"
            }
        }
    }else {
        return "Booking Failed"
    }
}
let x=flight(18,true,true);

console.log(x)
 console.log (flight(16,true,false));
