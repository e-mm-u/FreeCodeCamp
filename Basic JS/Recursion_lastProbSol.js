function rangeOfNumbers(startNum, endNum) {
    if(startNum == endNum){
        return [startNum];//when returning in square bracket, it is being defined as an array.
    }
    else if(startNum +1 == endNum){
        return [startNum,endNum];
    }

    else{
        var range = rangeOfNumbers(startNum+1, endNum-1);
        range.unshift(startNum);
        range.push(endNum);
        return range;
    }
}

//  console.log(rangeOfNumbers(6, 9) )
//  console.log(rangeOfNumbers(1, 5) )
//  console.log(rangeOfNumbers(6, 6) )
