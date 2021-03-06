const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const MAX_PAGES_TO_VISIT = 10;
let numPagesVisited = 0
const searchWord = "statement";


let pagesVisited = new Set();

const startURL = "https://www.cnn.com";
const pagesToVisit = [startURL];

const url = new URL(startURL);
const baseUrl = url.protocol + "//" + url.hostname;

const crawl = () => {
  if(numPagesVisited > MAX_PAGES_TO_VISIT){
    return;
  }
  const page = pagesToVisit.pop();
  console.log("Visiting page " + page);

  if(pagesVisited.has(page)){
    crawl();
  }else{
    visitPage(page, crawl);
  }
}


const visitPage = (url, cb) => {
  numPagesVisited++;
  pagesVisited.add(url);
  request(startURL, (error, response,body) => {
    if(error){
      console.log("Error: " + error );
      cb();
    }else{
      console.log("Status code: " + response.statusCode);

      if(response.statusCode === 200){
        const content = cheerio.load(body);
        if(searchForWord(content, searchWord)){
          console.log("Word found in " + url);
          return;
        }else{
          foundLinks(content);
          cb();
        }
      }
    }
  })
}
const searchForWord = (content, word) => {
  var bodyText = content('body').text();
  if(bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
    return true;
  }
  return false;
}

const foundLinks = (content) => {

  let links = content("a[href^='/']");
  links.each(function() {
      pagesToVisit.push(baseUrl + content(this).attr('href'));

  });

  links =  content("a[href^='http']");
  links.each(function() {
      pagesToVisit.push(content(this).attr('href'));
  });
}

crawl();
