let arr = [45345,63456 ,6436 ,324, 4624 ,667467432 , 653566 ,245245]
let groups = [];
let count = 0;

function groupLoop(){
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
  console.log(groups) ;
}
console.log('well fuck');

groupLoop();
