const bard = {
    bardName: "Zozimus",
    realName: "Michael Moran",
    yearOfBirth: 1756,
}
    cost: {
        baseCost: 10.00
        discount: 0.15
    }
    poem: {
        birthdayMessage: "Happy Birthday"
        subjectAge: 20
        subjectName: "Jake"
    }
const personalBard = (subjectName, subjectAge, subjectMessage) => {
    let promptSubjectName = prompt("Please enter your name: ");
    let promptSubjectAge = prompt ("Please enter your age");
    let promptSubjectMessage = prompt ("Please enter Happy Birthday");
}
const payTheBard = (costMessage) => {
    return("Now pay the bard " + bard.bardName + "$" + bard.baseCost * bard.discount);
}
const times = function (age) {
    if (poem.promptSubjectAge > 25)
        return ("Honourable" + poem.subjectName + "on your year" + poem.subjectAge + "Jake, Jake, Jake");
    else 
        return ("Young" + poem.subjectName + "on your year" + poem.subjetAge + "Jake, Jake, Jake" );
}
let str = personalBard ()
let anotherstr = payTheBard ()
let aanotherstr = times ()
var greetingMessage = document.querySelector (".verse")
greetingMessage.textContent = "Come ye to herald " + promptSubjectName + " well, as we ring the chorus bell";
var timesMessage = document.querySelector (".refrain")
timesMessage.textContent = "Honourable " + promptSubjectName + " on your year " + promptSubjectAge + ", Jake, Jake, Jake";
var greetingMessage = document.querySelector (".greet")
greetingMessage.textContent = "Happy Birthday Jake"
var costMessage = document.querySelector (".cost")

