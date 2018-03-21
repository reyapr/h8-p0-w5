function meleeRangedGrouping (str) {
  if(str.length==0){
    return []
  }
  var list = str.split(',')
  var result = []
  var range = []
  var melee = []
  for(let i=0;i<list.length;i++){
    if(list[i].split('-Ranged').length==2){
      range.push(list[i].split('-Ranged')[0])
    }
    else{
      melee.push(list[i].split('-Melee')[0])
    }
  }
  result.push(range,melee)
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []