
let range = (a, b = null) => {
    let n = b == null ? a : b;
    let ret = [...Array(n).keys()]

    if (b) ret = ret.splice(a)
    return ret
}
let isValid = x => {
    return (x && x.toString().trim() !== "") || x == false;
}
let isDefined = el => {
    if (typeof el == "undefined" || el == null) return false;
    else return true;
}
let escapeHtml = text => {
    if (!isDefined(text))
        return ""
    var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}
let isObjectEmpty = obj => {
    if (isDefined(obj))
        return Object.entries(obj).length == 0
}
let isArrayEmpty = arr => {
    if (isDefined(arr) && typeof arr == "Object")
        return arr.length == 0
}
let isTextEmpty = x => {
    return (x.toString().trim().length == 0);
}








options = {

    save: function () {
        document.querySelector('.options').remove()
    },

}
