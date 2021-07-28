"use strict";

function upo(array) {
    for (let i in array)
        if (array[i].length > 0)
            array[i] = array[i].substr(0, 2) + array[i].substr(-2, 2);
        else
            array[i] = "";
}

let arr_1 = [1, "Lorem", "ipsum", "dolor", "sit", "amet", 13];
upo(arr_1);
console.log(arr_1);