<script>
        {/* let admin;     //declaring variables
        let name;
        name = 'john';
        admin = name;
        alert(admin);

        let PlanetName = 'earth';    //the variable name should match the values being stored
        let CurrentVisitor = 'visitor';

       console.log(23 + 10);
       console.log(3+6+9+12+15+18);
       console.log((4+6+9)/77);

       let aa = 10;          //declaring numbers and arithmetic operations
       console.log(aa);
       console.log(9*aa);
       let bb = 9*aa;
       console.log(bb);

       const max = 57;
       let actual = max-13;
       let percentage = actual/max;
       console.log(percentage);

       let names = 'Esther Namaganda';   // declaring a string
       console.log(names);

       const district = 'Jinja';  //concatenation part one, when one string is not declared
       const region = 'Eastern';
       const tribe = `i am from, ${region}`;
       console.log(tribe);

       const firstName = 'Esther';
       const lastName = 'Namaganda';
       const fullName = `${firstName} ${lastName}`;
       console.log(fullName); */}

    //    <button>Press me</button>
    //    const button = document.querySelector('button');
    /    function greet() {
    //        const name = prompt('What is your name?');
    //        alert(`Hello ${name}, nice to see you!`);
    //    }
    //     button.addEventListener('click', greet);

       let strr = "Apple, Banana, Kiwi";
       let parts = strr.slice(7, 13);
       console.log(parts);

       let str = "Apple, Banana, Kiwi";
       let part = str.substring(7, 13);
       console.log(part);

       let text = "Please visit Microsoft!";
       let newText = text.replace("Microsoft", "W3Schools");
       console.log(newText);

       let a = 20;
       let b = 10;
       if (a < b) { // true
         console.log(a + ' is less than ' + b)
       } else if (a > b) {
         console.log(a + ' is greater than ' + b)
       } else {
       console.log(a + ' and ' + b + ' are equal.')
       }

       console.log( 2 > 1 );  // true (correct)
       console.log( 2 == 1 ); // false (wrong)
       console.log( 2 != 1 ); // true (correct)

       let result = 5 >4; // assign the result of the comparison
       console.log( result );   

       console.log('Esther' > 'prudence');
       console.log('pragate' < 'praget');
       let m = 'jinja';
       let n = 'kampala';
       console.log(n < m);


    //    conditional statements

    // if condition
    let age = 35;
    if (age >= 30) {
        console.log('get Married');
    }

    // else Condition
    let  color = 2;
    if (color > 5){
      console.log('color is greater than 5');
    }
    else{
      console.log('color is less than 5');
    }

    // else if condition
    // example one
    let date = 15;
    if (date < 10){
      console.log('the date is less than 10');
    }
    else if (date < 20){
      console.log('the date is above 10 and less than 20 ');
    }
    else{
      console.log('the date is above 20');
    }
    
    // example 2
   let salary = 550000; 
   if (salary < 500000){
     console.log('new employee');
   }
   else if (salary < 700000){
     console.log('old employee');
   }
   else{
     console.log('manager role');
   }

  //  The ???OR??? operator is represented with two vertical line symbols:
  // In classical programming, the logical OR is meant to manipulate boolean values only. 
  // If any of its arguments are true, it returns true, otherwise it returns false
  
  let hour = 15;
  if (hour < 10 || hour > 18) {
   console.log( 'The office is closed.' );
  }
  else{
    console.log('The office is open');
  }

  // The AND operator is represented with two ampersands &&:
  // In classical programming, AND returns true if both operands are truthy and false otherwise:

  let mummy = 'Namukose Rose', 
      daddy = 'Bwaita Godfrey';
  
  if (mummy == 'Namukose Rose' && daddy == 'Bwaita Godfrey'){
     console.log('this has worked');
  }

//Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc ??? show ???Canceled???, if it???s another string ??? then show ???I don???t know you???.
// The password is checked as follows:
// If it equals ???TheMaster???, then show ???Welcome!???,
// Another string ??? show ???Wrong password???,
// For an empty string or cancelled input, show ???Canceled???
let input = prompt("Who is there", '');
if (input =='Admin'){
 let pass = prompt('Password', '');
    if (pass == 'TheMaster'){
      alert('welcome');
    }
    else if(pass ==='' || pass === 'null'){
      alert('cancelled');
    }
    else {
       alert('Wrong Password');
    }
}
else if ( input === '' || input === null){
  alert('Cancelled');
}
else{
  alert('I dont know you');
}

// excirse two
number = Number(prompt("enter a number"));
function numberChecker() {
	if(number === 6){
		alert('true');
	} else {
		alert('false');
	}
}

// write code
const birthYear = 1948;
const thisYear = 1965;
const firstName = 'Carlos';
const lastName = 'Stevenson';
const fullName = `${firstName} ${lastName}`;
const age = thisYear-birthYear;


const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";
 
  </script>