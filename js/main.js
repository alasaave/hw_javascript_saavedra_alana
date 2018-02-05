var iceCream = ['mint', 'caramel', 'coffee',
    'peanut butter'];

var presidents = [
    {firstName: 'Donald', lastName: 'Trump', termLength: '4 years', party: 'Republican', yearsOfPresidency: 1},
    {firstName: 'Barack', lastName: 'Obama', termLength: '4 years', party: 'Democrat', yearsOfPresidency: 8},
    {firstName: 'George W.', lastName: 'Bush', termLength: '4 years', party: 'Republican', yearsOfPresidency: 8},
    {firstName: 'Bill', lastName: 'Clinton', termLength: '4 years', party: 'Democrat', yearsOfPresidency: 8},
    {firstName: 'George', lastName: 'Bush', termLength: '4 years', party: 'Republican', yearsOfPresidency: 4},
];
console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

function howdy() {
    console.log('Alana Saavedra says hi!');
}
howdy();

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length === 7) {
        console.log('7, what a perfect choice!');
    } else {
        console.log("I'm sorry, but that's too many to count.");
    }
};
numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
    display(favMovie);
}
inception(console.log("'Kingsman' is a fantastic movie."));
