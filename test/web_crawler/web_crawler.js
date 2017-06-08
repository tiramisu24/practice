const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');

const pageToVisit = "https://www.cnn.com";
console.log("Visiting page " + pageToVisit);

request(pageToVisit, (error, response,body) => {
  if(error){
    console.log("Error: " + error );
  }else{
    console.log("Status code: " + response.statusCode);

    if(response.statusCode === 200){
      const content = cheerio.load(body);
      console.log(searchForWord(content, "exchange"));
      foundLinks(content);
    }
  }
})

const searchForWord = (content, word) => {
  var bodyText = content('body').text();
  if(bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
    return true;
  }
  return false;
}

const foundLinks = (content) => {
  let relativeLinks = [];
  let absoluteLinks = [];

  let links = content("a[href^='/']");
  links.each(function() {
      relativeLinks.push(content(this).attr('href'));

  });

  links =  content("a[href^='http']");
  links.each(function() {
      absoluteLinks.push(content(this).attr('href'));
  });
  console.log(absoluteLinks);
}
