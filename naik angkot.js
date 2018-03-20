function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result =[]  
  for(let i=0;i<arrPenumpang.length;i++){
    var data = {}
    data.penumpang = arrPenumpang[i][0]
    data.naikDari = arrPenumpang[i][1]
    data.tujuan = arrPenumpang[i][2]
    data.bayar = 2000*(rute.indexOf(data.tujuan)-rute.indexOf(data.naikDari))
    result.push(data)
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]