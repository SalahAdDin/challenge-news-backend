const news = require("./news.json");

const filterNonUnique = (array, property) =>
  array.filter(
    (value, index, self) =>
      self.findIndex((item) => item[property] === value[property]) === index
  );

module.exports = () => {
  console.log(news.news);
  const data = {
    categories: filterNonUnique(
      news.news.reduce((acc, current) => [...acc, ...current.categories], []),
      "contentId"
    ),
  };

  return data;
};
