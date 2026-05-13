/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

// Task 1. Timer
export function cookingStatus(timeRemaining) {
  if (timeRemaining === 0) {
    return 'Lasagna is done.';
  }
  if (timeRemaining > 0) {
    return 'Not done, please wait.';
  }

  return 'You forgot to set the timer.';
}

// Task 2. Preparation time
export function preparationTime(layers, layerTime = 2) {
  return layers.length * layerTime;
}

// Task 3. Amounts of noodles and sauce
export function quantities(layers) {
  console.log(layers);
  
  let neededNoodles = 0;
  let neededSauce = 0;

  while(layers.length > 0){
    switch(layers.shift()){
      case 'noodles':
        neededNoodles = neededNoodles + 50;
        break;
      case 'sauce':
        neededSauce = neededSauce + 0.2;
        break;
    }
  };

  return {
    noodles: neededNoodles,
    sauce: neededSauce,
  };
}

// Task 4. Secret ingredient
export function addSecretIngredient(friendsList,myList) {
  myList.push(friendsList[friendsList.length - 1]);
  console.log(myList);
}

// Task 5. Scale
export function scaleRecipe(recipe, portions = 1) {
  // create new object 
  const scaledRecipe = {};

  // get key-value pairs from original recipe
  for(let key in recipe){
    // convert values
    scaledRecipe[key] = recipe[key] * portions / 2;
  };
  
  return scaledRecipe;
}