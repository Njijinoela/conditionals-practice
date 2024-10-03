function eligibility(age, yearsExperience, knowsJavaScript){
    if (age >25 && age <50 && yearsExperience>5 || age <30 && yearsExperience >=3 && knowsJavaScript === true){
        console .log("Eligible for the job")
    }else{
        console.log("Not eligible")
    }
};
eligibility(26,6,true);
eligibility(27,4,true);
eligibility(21,3,false);
eligibility(26, 2,true)
