let arr = [1,2,3,4,5,6];
function checkArray(array) {
    // Tu código aquí 👈
  
    return array.some(n => n % 2 == 0);
  
  
  }

  console.log(checkArray(arr));