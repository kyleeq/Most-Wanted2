/*starter code*/

function backToMain(input);
  promptFor("Would you like to find another person?", yesNo);

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

function displayFamily(person){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function nameCheck(){
	let name = people[""]
}

function descendantsFilter(person, people){
  for(let i = 0; i < people.length; i++){
    if (person.id[0] == people[i].parents[0] || person.id == people[i].parents[1]);
      displayPeople(people[i]);
  }
}
// add person.parents[0, 1] as parameter when calling in mainMenu();
// function descendantsFilter(people, possibleDescendantId){
// 	let id = "id";
// 	let foundDescendants = people.filter(function(el){
// 		if(el["id"] == [possibleDescendantId]){
// 			return true
// 		}
// 		else{
// 			return false
// 		}
// 	});
// 	descendantsFilter(people, foundDescendants);
// }

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