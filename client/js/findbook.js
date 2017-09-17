var isbn = require('node-isbn');
 
isbn.resolve('1118771338', function (err, book) {
    if (err) {
        console.log('Book not found', err);
    } else {
        console.log('Book found %j', book);
    }
});