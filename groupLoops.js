let sqlCol = 'yourSqlColumnName'
let groups = [];
let count = 0;
let arr = [45345,63456 ,6436 ,324, 4624 ,667467432 , 653566 ,245245]

function groupLoop(arr){
for(i = 0; i < arr.length -1; i++){
     count++
     let group = {}
     let ray = [arr[i]]

     while(ray.length < 3){ 
       if(i + 1 <= arr.length -1){
         ray.push(arr[i + 1])
         group[count] = ray
         i++
       }
       else{
         break;
       }
     }
      groups.push(group);
  }
  //console.log(groups) ;
  createWhereClause(sqlCol, groups)
}

groupLoop(arr);



function createWhereClause(colName,  groups) {

  let where = ''
  // loop through grouped elements and create string plugging in the array from each group in groups

  for(group of groups){
    for(const[ groupNumber, list ] of Object.entries(group)){
     if(groupNumber < groups.length ){
       where += ` ${colName} IN (${  list }) OR \n` 
     }
     else{
       where +=  ` ${colName} IN (${ list }) `
     }
    }
    
  }
  console.log(where);
}

