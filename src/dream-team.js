const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if( (!Array.isArray(members) ) && (typeof (members) !=='string') ) return false;
  let a = members.filter( function(item) {
    if (typeof item == 'string') {
      return item;
    }
  })
  .map( function(item) {
    return item.toUpperCase().trim()[0];
  })
  .sort((a, b) => a.localeCompare(b));
    return a.join('');
}

module.exports = {
  createDreamTeam
};
