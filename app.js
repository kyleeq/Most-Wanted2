"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/
// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
    case 'no':
      traitsMenu();
      break;
      default:
    app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
    if (!person){
    alert("Could not find that individual.");
    return app(people); // restart
    }
    else

  
  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'".trim());

  switch(displayOption){
    case "info":
      displayPerson(person);
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson[0];
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "ID: " + person.id + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eyecolor: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question);
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function traitInput(input){
  return input.toLowerCase() == "id" || input.toLowerCase() == "gender" || input.toLowerCase() == "height" || input.toLowerCase() == "weight" || input.toLowerCase() == "eyecolor";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

function traitsMenu(){
  let traitPrompt = promptFor("Enter a trait: ID, Gender, Height, Weight, EyeColor", traitInput);
  switch(traitPrompt){
    case "id":
      let idPrompt = prompt("Enter an id. Make sure to check your numbers carefully.").trim();
       let traitResult = traitsFilter(idPrompt, people.id);
       alert(traitResult);
      break;
    case "gender": 
      let genderPrompt = prompt("Enter a gender, 'male' or 'female'.").trim();
      traitsFilter(genderPrompt, people.gender);
      break;
    case "height":
      let heightPrompt = prompt("Enter a height in inches.").trim();
      traitsFilter(heightPrompt, people.height);
      break;
    case "weight":
      let weightPrompt = prompt("Enter a weight in pounds.").trim();
      traitsFilter(weightPrompt, people.weight);
      break;
    case"eyecolor":
      let eyeColorPrompt = prompt("Enter an eyecolor.").trim();
      traitsFilter(eyeColorPrompt, people.eyecolor);
      break;
  }
}
function traitsFilter(traitPrompt, blah){
  let foundInput = blah.filter(function(traitPrompt){
   if(traitPrompt === trait){
     return true;
   }
   else{
     return false;
   }
 });
 return foundInput[0];
}