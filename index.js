const cats = ['Milo','Otis','Garfield']
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
   const copyOfCats = [...cats, name]
   return copyOfCats
}
function prependCat(name){
    const newCats = [name, ...cats]
    return newCats
}
function removeLastCat(name){
    const sliceCats = cats.slice(0,2)
    return sliceCats
}
function removeFirstCat(name){
    const sliceCats2 = cats.slice(1)
    return sliceCats2
}
