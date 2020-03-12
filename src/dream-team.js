module.exports = function createDreamTeam(arr) {
  console.log(arr);
  if(!Array.isArray(arr) || arr.length == 0){
    return false;
  }
  
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] == "string" ) {
      arr[i] = arr[i].trim().substring(0,1).toUpperCase();
    } else {
        return false;
    }
  }

  return result = arr.sort().join("");

};