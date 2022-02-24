function notNullString(string) {
    if (string === null || string === null) {
        return ('');
    } else {
        return String(string);
    }

}
function notNullNumber(number) {
    if (number === null || number === null) {
        return ('');
    } else {
        return number;
    }
}
exports.notNullString = notNullString;
exports.notNullNumber = notNullNumber;