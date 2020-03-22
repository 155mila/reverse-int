module.exports = function reverse (n) {
    n += '';
    let newstr = n.split('').reverse().join('');
    return Number(newstr);
}
