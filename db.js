const news = require("./news.json");
const categories = require("./categories.json");
const content = require("./content.json");

const filterNonUnique = (array, property) =>
  array.filter(
    (value, index, self) =>
      self.findIndex((item) => item[property] === value[property]) === index
  );

module.exports = () => {
  const data = {
    news: news.news.map((item) => ({
      ...item,
      views: Math.floor(Math.random() * 10000),
      content: content.content,
    })),
    categories: filterNonUnique(
      news.news.reduce((acc, current) => [...acc, ...current.categories], []),
      "contentId"
    ).slice(1),
  };

  return data;
};
