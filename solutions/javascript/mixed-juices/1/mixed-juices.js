// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
      return 1.5;
      break;
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {  
  let usedLimes = 0;

  // substract wedges per used lime until no more are needed or we run out of limes
  
  while (wedgesNeeded > 0 && limes.length > 0){
    // take the first lime in the list and see what it is
    switch (limes[0]){
      case 'small':
        wedgesNeeded = wedgesNeeded - 6;
        break;
      case 'medium':
        wedgesNeeded = wedgesNeeded - 8;
        break;
      case 'large':
        wedgesNeeded = wedgesNeeded - 10;
        break;
  }
  // this lime is used, remove it from list and add it to usedLimes counter
  limes.shift();
  usedLimes++;
  }
  
  return usedLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while(timeLeft > 0){
    // look at first order and subtract its mixing time from timeLeft
    timeLeft = timeLeft - timeToMixJuice(orders[0]);
    // remove order from front of list
    orders.shift();
  }
  // when time runs out, return remaining orders
  return orders;
}
