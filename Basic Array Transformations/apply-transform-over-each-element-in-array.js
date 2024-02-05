
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map=function(arr,fn){
    const arrays=[];
    arr.forEach((element,index)=>{
        arrays[index]=fn(element,index);
    });return arrays;
};
