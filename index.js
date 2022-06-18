const convertion=function (collection) {
   let check=Array.isArray(collection)
   if (check==true) {
    return collection;
   } else {
    let objectConverted=Object.values(collection)
    return objectConverted;
   }
   
}

//myEach([1,2,3,4],function
const myEach= function (collection,callback) {
    const result=convertion(collection)
 for (const eachin of result) {
    callback(eachin);
 }
    return collection;
}
const myMap= function (collection,callback) {
    const result1=convertion(collection);
    const newarray=[];
    for (const eachin1 of result1) {
        newarray.push(callback(eachin1));
     }
    return newarray;
}
const myReduce=function (collection, callback, acc) {
    let result2=convertion(collection);
     
    if (!acc) {
        acc = result2[0];
        result2 = result2.slice(1);
  }
    for (let i = 0; i< result2.length; i++) {
        
        acc=callback(acc,result2[i],result2);
    }
    return acc;
}
const myFind= function (collection, predicate) {
    const result3 = convertion(collection);
    for (let i = 0; i< result3.length; i++) {
        if (predicate(result3[i])) return result3[i];
      }
  return undefined;
}
const myFilter= function (collection, predicate) {
    const result4 = convertion(collection);
    const ans=[]
    for (let i = 0; i < result4.length; i+=1) {
        if (predicate(result4[i])) {
            ans.push(result4[i]);
        }
        
    } return ans;
}
const mySize=function (collection) {
    const result5= convertion(collection);
    return result5.length
}
const myFirst= function (array, n=false) {
    return (n) ? array.slice(0, n) : array[0];

} 
const myLast= function (array,n=false) {
    return (n) ? array.slice(array.length-n, array.length) : array[array.length-1];
}
const myKeys= function (object) {
    return Object.keys(object);
}
const myValues= function (object) {
    return Object.values(object)
}