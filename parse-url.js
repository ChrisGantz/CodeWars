'use strict';


function domainName(url) {

  let urlParsed = url.toString().replace('https://', '').replace('http://', '').replace('www.', '');
  console.log('url:', url);
  console.log('urlParsed:', urlParsed);
  return urlParsed.split('.')[0];
}

domainName('http://www.google.com');