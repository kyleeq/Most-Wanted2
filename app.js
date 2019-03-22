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
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  var noPrompt = promptFor("Would you like to search by info? Enter 'yes' or 'no'.");
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
    if (searchType == "no"){
      traitsMenu();
   }
    else if (!person){
    alert("Could not find that individual.");
    return app(people); // restart
    }
    else

  
  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      giveInfo(person);
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
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function traitInput(input){
  retrun input.toLowerCase() == "id" || input.toLowerCase() == "gender" input.toLowerCase() == "height" || input.toLowerCase() == "weight" || input.toLowerCase() == "eyecolor";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

function traitsMenu(){
  var traitPrompt = prompt("Enter which criteria you would like to search by: ID, gender, height, weight, or eyecolor.", traits).toLowerCase();
  switch(traitPrompt){
    case "id":
      let idPrompt = promptFor("Enter an id. Make sure to check your numbers carefully.");
      traitsFilter(idPrompt, people.id);
      break;
    case "gender": gender promptfor)
      let genderPrompt = promptFor("Enter a gender, 'male' or 'female'.");
      traitsFilter(idPrompt, people.gender);
      break;
    case("height"):
      let heightPrompt = promptFor("Enter a height in inches.");
      traitsFilter(idPrompt, people.height);
      break;
    case("weight"):
      let weightPrompt = promptFor("Enter a weight in pounds.");
      traitsFilter(id)
      break;
    case("eyecolor"):
      let eyeColorPrompt = promptFor("Enter an eyecolor.");
      break;
  }
}
function traitsFilter(input, trait){
  let foundInput = people.filter(function(input){
   if(input == trait){
     return true;
   }
   else{
     return false;
   }
 });
 return foundInput;
}