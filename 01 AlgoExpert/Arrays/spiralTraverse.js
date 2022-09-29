function spiralTraverse(array) {
  // Write your code here.
  const result = [];
  let top = 0;
  let bottom = array.length-1;
  let left = 0;
  let right = array[0].length-1;

  while(top  <= bottom && left <= right){
    for(let i = left; i <= right;i++){
      result.push(array[top][i]);
    }
    top++;
    for(let i = top; i <= bottom;i++){
      result.push(array[i][right]);
    }
    right--;
    for(let i = right; i>=left;i--){

      result.push(array[bottom][i]);

    }
    bottom--;
      for(let i = bottom; i>=top;i--){
        if(left === right){
          break;
        }
        result.push(array[i][left])
      }
      left++
      
    }
    return result;
    
  }
  
  console.log(spiralTraverse([
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
  ]))