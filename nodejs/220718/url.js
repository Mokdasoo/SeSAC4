const url = require("url");
const { URL } = url;
const string = "https://www.google.com/search?q=%EC%83%88%EC%8B%B9&oq=%EC%83%88%EC%8B%B9&aqs=chrome.0.69i59l2.2281j0j4&sourceid=chrome&ie=UTF-8";
const google = new URL("https://www.google.com/search?q=%EC%83%88%EC%8B%B9&oq=%EC%83%88%EC%8B%B9&aqs=chrome.0.69i59l2.2281j0j4&sourceid=chrome&ie=UTF-8");

console.log(url.format(google));
console.log(url.parse(string));

console.log(google.searchParams);