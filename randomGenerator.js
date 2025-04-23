function genRangeRand(start,end){
    return Math.floor(start + Math.random()*end)
}

console.log(genRangeRand(0,1))