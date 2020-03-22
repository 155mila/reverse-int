module.exports = function reverse (n) {
    if(n < 0){
        n = n * (-1)
    }
    n += '';
    let newstr = n.split('').reverse().join('');
    return newstr;
}
