function bSearch(n,k,arr){
    let low =0;
    let high=n-1;
    
    
    while(low<=high){
      let mid = Math.floor((low+high)/2); 
       if(arr[mid]==k){
        return 1;
      }if(k<arr[mid]){
          high=mid-1;
      }else{
          low = mid+1
      }
        
        
    }
    
    return -1;
   
}




console.log(bSearch(5,0,[-2,0,2,3,4]));