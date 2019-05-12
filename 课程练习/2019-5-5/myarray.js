Array.prototype.filterSpace = function() {
    var arr1 = this;
    var result = arr1.map(function(value) {
        return value.trim();//去除数组元素前后的空格
    });
    return result;
}