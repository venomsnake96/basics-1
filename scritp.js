/*let country = "México";
let continent = "North America"
let population = 100000000;
let isIsland = false;

console.log(typeof country)
console.log(typeof  continent)
console.log(typeof population)
console.log(typeof  isIsland)

const massMark = 78;
const massJohn = 92;
const heigthMark = 1.69;
const heigthJohn =1.95;

let BMIMark = massMark/ (heigthMark * heigthMark);
let BMIJohn = massJohn/ (heigthJohn * heigthJohn);
console.log(BMIMark)
console.log(BMIJohn)

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)

if (BMIMark > BMIJohn) {
    console.log(`Mark BMI ${BMIMark} is higher than John ${BMIJohn}`)
}else{
   console.log(`John BMI ${BMIJohn} is higher than Mark ${BMIMark}`) 
}


const age = 15;


if (age >= 18) {
    console.log('Gabriel can start driving lincense');
} else {
    const yearsLeft = 18 - age;
    console.log(`Gabriel is too young. Wait another ${yearsLeft} years : )`);
}


const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);*/

const age = '18';
if (age === 18) console.log('old man'); 

if (age == 18) console.log('old man2'); 

/*const answer = Number(prompt("type a numbre between 1 to 21"));
console.log(answer)

if (answer === 15) {
    console.log('Almost there')
}else if(answer === 21) {
    console.log('BLACKJACK!!');
} else{
    console.log('LOSER!');
}

if(answer !== 21) console.log('ATENTION!')*/

    /*const hasDriverLicense = true; //A
    const hasGoodVison = true; //B
    const isTired = true //C

    console.log(hasDriverLicense && hasGoodVison);
    console.log(hasDriverLicense || hasGoodVison);
    
    if(hasDriverLicense && hasGoodVison && !isTired) {
        console.log('DRIFT NOW')
    }else {
        console.log('YOU DRIVE LIKE SHIT')
    }

    if(hasDriverLicense || hasGoodVison) {
        console.log('DRIFT NOW')
    }else {
        console.log('YOU DRIVE LIKE SHIT')
    }*/


    const scoreDolphins = (97 + 112 + 81) / 3;
    const scoreKoalas = (109 + 95 + 86) / 3;
    console.log(scoreDolphins, scoreKoalas)

   /*if (scoreDolphins > scoreKoalas){
    console.log('Dolphins Wins!')
   }else if(scoreKoalas > scoreDolphins){
    console.log('Koalas Wins!')
   }else if (scoreDolphins === scoreKoalas){
    console.log('DRAW!')
   }*/ 


   // Bonus 1

   if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins Wins!');
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas Wins!');
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log('DRAW!');
}else{
    console.log('No one wins the trophy')
}




const day = 'sunday'

switch  (day) {
    case 'Monday':
    case 'tuesday':
    case 'wednesday':        
        console.log('Defv kata and practice');
        console.log('Pinterest model');
    break;
    case 'thursday':
    case 'friday':
        console.log('js practice 6hr');
    break;
    case 'saturday':
     console.log('All practice, all day');
    break;
    case 'sunday':
        console.log('The witcher day');
    break;            
       
}
