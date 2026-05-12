/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const visitor = {
    name: name,
    age: age,
    ticketId: ticketId,
  }

  return visitor
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  console.log(visitor);
  // visitor['ticketId'] = null;
  visitor.ticketId = null;

  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  //loop over all keys
  for (let key in tickets) {
    // check values for null or undefined. 
    switch(tickets[ticketId]){     
      case undefined:
        return 'unknown ticket id';
        break;
      case null:
        return 'not sold';
        break;
      // neither null or undefined: it is sold and valid. Return the value
      default:
        return 'sold to ' + tickets[ticketId];
    }
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  // loop over all keys  
  for (let key in tickets) {
    //same output when null or undefined, so we can use nullish coalescing
    return tickets[ticketId] ?? 'invalid ticket !!!'
  }
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  // retrieve value with optional chaining in case parent [gtc] doesn't exist
  return visitor.gtc?.version;
}
