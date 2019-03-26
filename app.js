"use strict"




console.log("ass balls")
/*
Build all of your functions for displaying and gathering information below (GUI).
*/
// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  var foundPerson;
  switch(searchType){
    case 'yes':
      foundPerson = searchByName(people);
      break;
    case 'no':
      familyMenu(people, traitsMenu(people));
      break;
      default:
    app(people); // restart app
      break;
  }
  mainMenu(foundPerson, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
    if (!person){
    alert("Could not find that individual.");
    return app(people); // restart
    }
    else

  
  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their personal 'info', 'family' or 'descendants?' Type the option you want or 'restart' or 'quit'".trim());
  switch(displayOption){
    case "info":
      displayPerson(person);
      familyMenu(people, person);
    break;
    case "family":
      familyMenu(people, person);
      
      if(specificFamily == "parents"){
        
        
      }
      else if(specificFamily == "spouse"){
        
      }
      else if(specificFamily == "siblings"){
        
      }
      else if(specificFamily == "children"){

      }
      let foundRelatives = familyFilter(person.id, people);
      displayPeople(foundRelatives);
      return foundRelatives[0];
    break;
    case "descendants":
      return descendantsFilter(person);
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

function displayParent(people, person){
  let id = "id";
  let grass = people.filter(function(el){
    if(el[id] == person){
      return true;
    }
    else{
      return false;
    }
  });
  return grass[0];
  // let pain = "Parent: " + person.firstName + " " + person.lastName + "\n";
  // alert(pain);
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

function traitsMenu(people){
  let traitPrompt = promptFor("Choose a trait one at a time: Gender, Height, Weight, EyeColor or Occupation. Otherwise, you can type in 'restart' or 'quit.'", traitInput);
  let promptResult;
  let result;
  switch(traitPrompt){
    case "gender": 
      promptResult = prompt("Enter a gender, 'male' or 'female'.").trim();
      result = traitsFilter(promptResult, traitPrompt, people);
      break;
    case "height":
      promptResult = prompt("Enter a height in inches.").trim();
      result = traitsFilter(promptResult, traitPrompt, people);
      break;
    case "weight":
      promptResult = prompt("Enter a weight in pounds.").trim();
      result = traitsFilter(promptResult, traitPrompt, people);
      break;
    case "eyeColor":
      promptResult = prompt("Enter an eyecolor.").trim();
      result = traitsFilter(promptResult, traitPrompt, people);
      break;
    case "occupation":
      promptResult = prompt("Enter an occupation.").trim();
      result = traitsFilter(promptResult, traitPrompt, people);
      break;
    case "restart":
      app(people);
      break;
    case "quit":
      return;
  }
  if(result.length > 1){
  displayPeople(result);
  traitsMenu(result);
  }
  else{
  displayPeople(result);
  return result[0];
  
  }
}

function traitsFilter(traitPrompt, question, people){
  let foundTrait = people.filter(function(el){
   if(el[question] == traitPrompt){
     return true;
   }
   else{
     return false;
   }
 });
 return foundTrait;
}
function familyFilter(){

}

function familyInput(input){
  return input.toLowerCase() == "parents" || input.toLowerCase() == "siblings" || input.toLowerCase() == "children" || input.toLowerCase() == "spouse"
}
function parentFilter(people, parentID){
  let id = "id";
  let parent = people.filter(function(el){
    if(el[id] == parentID){
      return true;
    }
    else{
      return false;
    }
  });
  return parent[0];
}
function spouseFilter(people, spouseID){
  let id = "id";
  let spouse = people.filter(function(el){
    if(el[id] == spouseID){
      return true;
    }
    else{
      return false;
    }
  });
  return spouse[0];
}

// add person.parents[0, 1] as parameter when calling in mainMenu();
function descendantsFilter(person, people){
  let id = "id";
  let foundDescendants = people.filter(function(el){
    if(el[id] == people.parents){
      return true
    }
    else{
      return false
    }
  });
  descendantsFilter(foundDescendants, people);
}
function siblingFilter(people, siblingID){
  let result = people.filter(function(el){
    if(el == siblingID){
      return true;
    }
    else{
      return false;
    }
  });
  return result[0];
}
function familyMenu(people, person){
  switch(promptFor("Would you like info on 'Parents', 'Spouse', or 'Siblings'", familyInput).toLowerCase()){
    case "parents":
      displayParent(people, parentFilter(people, person.parents[0]));
      displayParent(people, parentFilter(people, person.parents[1]));
    case "spouse":
      displayPerson(people, spouseFilter(people, person.currentSpouse));
    case "siblings":
      displayPerson(people, siblingFilter(people, person.parents[0]));
  }
}