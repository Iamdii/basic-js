module.exports = function createDreamTeam(arr) {
  console.log(arr);
  if(!Array.isArray(arr) || arr.length == 0){
    return false;
  }
  
  arr = arr.filter(x => typeof x == "string");

  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim().substring(0,1).toUpperCase();
  }

  return result = arr.sort().join("");

};