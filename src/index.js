module.exports = function getZerosCount(number, base) {

  let DeliverObj = function(deliver) {
    this.deliver = deliver,
    this.quantity = 0,
    this.countInBase = 0
  }

  let arrayOfDeliverObjs = [];
  splitBaseToSimpleDelivers(base);
  cleaningArr();

  arrayOfDeliverObjs.forEach( function(item, i, arr) {

    let deliver = item.deliver;
    let count = findDeliverCountInNumber(number, deliver);
    item.countInBase = Math.floor(count/item.quantity);
  })


  let result;
  arrayOfDeliverObjs.forEach( function(item, i, arr) {

    if(i === 0 || item.countInBase < result) {
      result = item.countInBase;
    }
  })

  function splitBaseToSimpleDelivers(base) {

    let saveBase = base;
    for(let i = 2; saveBase != 1; i++) {
      if(saveBase%i === 0) {
        let SimpleDeliverObj = new DeliverObj(i);
        while(saveBase%i === 0) {
          SimpleDeliverObj.quantity++;
          saveBase /= i;
        }
        arrayOfDeliverObjs.push(SimpleDeliverObj);
      }
    }
  }

  function cleaningArr() {
      let quantity;
      for(let j = arrayOfDeliverObjs.length -1; j>=0; j--) {
      if( j=== arrayOfDeliverObjs.length || arrayOfDeliverObjs[j].quantity <= quantity) {
        arrayOfDeliverObjs.splice(j,1);
        j--;
      } else {
        quantity = arrayOfDeliverObjs[j].quantity;
      }
    }
  }

  function findDeliverCountInNumber(number, deliver) {

    let count = 0;
    for (let i = 2; i <= number; i++) {
      let j = i;
      while (j%deliver === 0) {
        count++;
        j /= deliver;
      }
    }
    return count; 
  }

  return result;
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
  }*/

  
  



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