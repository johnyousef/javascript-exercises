function join_array(a) {
    let str = '';
    for (let i = 0; i < a.length; i++) {
        str += a[i];
    }
    return str;
}

const reverseString = function(str) {  
    let str_list = str.split('');
    let new_str_list = [];
    for (let i = 0; i < str_list.length; i++){
       new_str_list[i] = str_list[str_list.length - (i + 1)];  
    }
    return join_array(new_str_list);
};

// Do not edit below this line
module.exports = reverseString;
