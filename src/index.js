module.exports = function getZerosCount(number, base) {
  // your implementation
  function findDividersbase(base) {
    var simpleDividers = []; 
    for (var i =2; i <= base; i++) {
      while(base%i === 0) {
        base = base/i;
        var isFindIndex = simpleDividers.findIndex(elem => elem[0] === i);
        if(isFindIndex != -1) {
          simpleDividers[isFindIndex][1]++;
        } else {
          simpleDividers.push([i, 1]);
        }
      }
    }
    return simpleDividers;
  }


  function QuantityVsBiggesty(resBase) {

    if(resBase.length == 1 ) {
      return resBase;
    }
    var lastelem = resBase[resBase.length -1];
    var filteredBase = resBase.filter(elem=> elem[1] > lastelem[1]);
    filteredBase.push(lastelem); // [[делитель, количество],[],[]]
    if(filteredBase.length == 1 ) {
      return filteredBase;
    }
    for (var i = 0; i < filteredBase.length -1; i++) {
      var count = 0;
      for (var k = 0; k <= lastelem[0]; k = k + filteredBase[i][0]) {
        for (var j = k; j%filteredBase[i][0] == 0 && j != 0; j = j/filteredBase[i][0]) {
          count++;
        }
      }
      var check = filteredBase[i][1]/count;
      if(check <= 1) {
        filteredBase[i][1] = 0;
      }
    }
    var lastfilter = filteredBase.filter(elem=> elem[1] >= lastelem[1]);
    //return lastfilter[0];
    return lastfilter;
  }
  var resBase = findDividersbase(base);
  var filterBase = QuantityVsBiggesty(resBase);
  
  var resArr = [];
  for(var k = 0; k<filterBase.length; k++) {
   var Divider = filterBase[k][0];
    var count = 0;
    for (var i =0; i <= number; i = i +Divider) {
      for (var j = i; j%Divider == 0 && j != 0; j = j/Divider) {
        count++;
      }
    }
    var res = Math.floor(count/filterBase[k][1]);
    resArr.push(res);
  }
  if(resArr.length === 1 ) {
    return resArr[0];
  } else {
    var sortedResArr = resArr.sort((a,b) => a-b);
    return sortedResArr[0];
  }

  
  



  /*  var Divider = filterBase[0];
    var count = 0;
    for (var i =0; i <= number; i = i +Divider) {
      for (var j = i; j%Divider == 0 && j != 0; j = j/Divider) {
        count++;
      }
    }
    var res = Math.floor(count/filterBase[1]);
  return res;*/





  
  /*function findDividersbase(base) {
    var simpleDividers = []; 
    for (var i =2; i <= base; i++) {
      while(base%i === 0) {
        base = base/i;
        var isFindIndex = simpleDividers.findIndex(elem => elem[0] === i);
        if(isFindIndex != -1) {
          simpleDividers[isFindIndex][1]++;
        } else {
          simpleDividers.push([i, 1]);
        }
      }
    }
    return simpleDividers;
  }
  var resBase = findDividersbase(base);
  var biggestsimpleDivider = resBase[resBase.length -1][0];
  var count = 0;
  for (var i =0; i <= number; i = i +biggestsimpleDivider) {
    for (var j = i; j%biggestsimpleDivider == 0 && j != 0; j = j/biggestsimpleDivider) {
      count++;
    }
  }

  return Math.floor(count/resBase[resBase.length -1][1]);*/
}