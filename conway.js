function helper(arr){
  //create new board

  let newBrd = [];
 
  for(let n=0;n<arr.length;n++){
    newBrd.push([]);
    //added iteration over row
    for(var j=0;j<arr[n].length;j++)
           newBrd[n].push("fill in");
 
}
  return newBrd;
}



function stepBoard(arr)
{
  let newBrd = helper(arr);
  let  side = 0;
  let len  = arr.length;

  for(let n=0;n<len;n++)
  {
    for(let m=0;m<arr[n].length;m++)
    {
      side = 0;
  
  
      if(((n-1) >= 0))
      {
        if(((m-1) >= 0) && arr[n-1][m-1])
        side++;
        if(arr[n-1][m]) 
        side++;
        if((m+1) < arr[n].length && arr[n-1][m+1])
        side++;
      }

    //changed from else if
      if((n+1) < len)
      {
        if(((m-1) >= 0) && arr[n+1][m-1])
        side++;
        if(arr[n+1][m])
        side++;
        if((m+1) < arr[n].length && arr[n+1][m+1])
        side++;
      }

      //is it alive or dead

      if(((m-1) >= 0) && arr[n][m-1]){
        side++;
      }
      if((m+1) < arr[n].length && arr[n][m+1]){
        side++;
      }
      
      if(arr[n][m] && (side == 2 || side == 3)){
        newBrd[n][m] = true;
      }
    
      else if(!arr[n][m] && side == 3){
        newBrd[n][m] = true;
      }
      else {
       newBrd[n][m] = false;
     
      }

    }
  }
  return newBrd;
}

