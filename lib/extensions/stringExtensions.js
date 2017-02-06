String.isNullOrEmpty = function (str) {
    return (!str || 0 === str.length);
};
String.isNullOrBlank = (str) => (!str || /^\s*$/.test(str));
