const removeFromArray = function (array, ...args) {
    let new_array = []

    for (let i = 0; i < array.length; i++){ 
        if(!args.includes(array[i])){
            new_array.push(array[i]);
        }
    }
    return new_array;
};


// Do not edit below this line
module.exports = removeFromArray;
