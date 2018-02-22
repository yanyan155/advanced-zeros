module.exports = function getZerosCount(number, base) {
  // your implementation
  function findDividersbase(base) {
    var simpleDividers = []; // [[делитель, количество],[],[]]
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
	var countbiggests = 0;
	for (var i =0; i <= number; i = i +biggestsimpleDivider) {
		for (var j = i; j%biggestsimpleDivider == 0 && j != 0; j = j/biggestsimpleDivider) {
	  		countbiggests++;
		}
	}
	var resBiggest = Math.floor(countbiggests/resBase[resBase.length -1][1]);

	var higestsorting = resBase.sort((a,b) => b[1] - a[1]);
	var higestQuantityDivider = higestsorting[0][0];
	var countHigestQuantity = 0;
	var resHigest = 0;
	if(higestQuantityDivider != biggestsimpleDivider) {
	  for (var i =0; i <= number; i = i + higestQuantityDivider) {
	    for (var j = i; j%higestQuantityDivider == 0 && j != 0; j = j/higestQuantityDivider) {
	      countHigestQuantity++;
	    }
	  }
	  resHigest = Math.floor(countHigestQuantity/higestsorting[0][1]);
	}

	if(resHigest === 0) {
    	return resBiggest;
    }
	if(resHigest >= resBiggest) {
		return resBiggest;
	} else {
		return resHigest;
	}
}