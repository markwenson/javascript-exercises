const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
];
const getTheTitles = function(arg) {
      let newArr = arg.map(function(item) {
        return item.title;
      });
      return newArr;
};
getTheTitles(books);


// Do not edit below this line
module.exports = getTheTitles;
