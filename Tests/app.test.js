const fct = require("./helpers");

var stringArr = [
    "OlDLfIfUYndSAo1ulwXn", 
    "QnYG151InxCez9V64uoHQnYG151InxCez9V64uoHQnYG151InxCez9V64uoHQnYG151InxCez9V64uoH", 
    "b6FHQ6Xr8Xb6FHQ6Xr8XPQ0hkIXMgxPQ0hkIXMgx", 
    "IhMxrsEEKsNSeeTYEu3QIhMxrsEEKsN",
    "OlDLfI",
    "fUYndSAo1ulwXn",
    "AZZOZEPXNCSBJNSBSDHS"];


//console.log(fct.arrayCount(stringArr).length);

var expected = "QnYG151InxCez9V64uoHQnYG151InxCez9V64uoHQnYG151InxCez9V64uoHQnYG151InxCez9V64uoH";


test('Expecting the type to be array', () => {
    expect(Array.isArray(fct.arrayCount(stringArr))).toBe(true);
});
test('Expecting length to be 1', () => {
    expect(fct.arrayCount(stringArr).length).toBe(1);
});

test('checking the array generated expect an array with 1 values', () => {
    expect(fct.arrayCount(stringArr)).toEqual([expected]);
});