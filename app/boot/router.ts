import $ = require("jQuery");

export function Router(viewLoader, viewData) {
  var currentUrl = urlParser($(location).attr('href'));
  var $main = $("body").addClass('bg-success'),
  
      init = function() {
        // Do this when a page loads.
      },
      
      ajaxLoad = function(html) {
        document.title = html
          .match(/<title>(.*?)<\/title>/)[1]
          .trim();

        init();
      };
  
    //init();
    
    history.pushState({}, '', currentUrl);
    console.log(viewData);
    var pageHtml = viewLoader(currentUrl, {title: currentUrl});
    $main.html(pageHtml);
    // bindController(currentUrl);
    return false;
}

function urlParser(url) {

  var urlSegments = url.split("/");
  var urlValidSegments = [];
  for(var i=0; i < urlSegments.length; i++) {
    if(urlSegments[i] != "" && urlSegments[i] != "http:" && urlSegments[i] != "localhost:3000") {
      urlValidSegments.push(urlSegments[i]);
    }
  }
  console.log(urlValidSegments);
  var urlVal = "signin";
  if(urlValidSegments.length > 0) {
    urlValidSegments.join("");
    switch (urlVal) {
      case "signup":
        urlVal = "home";
        break;
      default:
        urlVal = "signup";
        break;
    }
  }
  return urlVal;

}

