const removeFromArray = function(array, ...extras) {
    for (let i = 0; i < extras.length; i++) {
        let elementsToRemove = array.indexOf(extras[i]);
        if (elementsToRemove > -1){
            array.splice(elementsToRemove,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
