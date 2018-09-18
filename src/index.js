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
      if( j=== arrayOfDeliverObjs.length || arrayOfDeliverObjs[j].quantity <= quantity
          || arrayOfDeliverObjs[j+1]*arrayOfDeliverObjs[j].quantity > arrayOfDeliverObjs[j]*arrayOfDeliverObjs[j].quantity) {
        arrayOfDeliverObjs.splice(j,1);
      } else {
        quantity = arrayOfDeliverObjs[j].quantity;
      }
    }
  }

  function findDeliverCountInNumber(number, deliver) {

    let count = 0;
    for (let i = deliver; i <= number; i += deliver) {
      let j = i;
      while (j%deliver === 0) {
        count++;
        j /= deliver;
      }
    }
    return count; 
  }

  return result;
}