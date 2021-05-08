//testing setting query params
const queryButton = document.getElementById("queryButton");
queryButton.addEventListener("click", () => {
  const url = new Url(location.href);
  const queryParam = document.getElementById("queryParam");
  const queryValue = document.getElementById("queryValue");
  url.query[queryParam.value] = queryValue.value;

  const queryResult = document.getElementById("resultText");
  queryResult.value = url.query[queryParam.value];
});

//testing adding params to path
const okButton = document.getElementById("okButton");
okButton.addEventListener("click", () => {
  const url = new Url(location.href);
  const queryInput = document.getElementById("queryPar");
  url.query.newparam = ["csao", "hola"];
  if (url.query.newparam instanceof Array) {
    url.query.newparam.push(queryInput.value);
  }

  location.href = url;
});

//tetsing clearing all query params
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  const url = new Url(location.href);
  url.clearQuery();
  location.href = url;
});

//testing getting the url parts correct
const showButton = document.getElementById("showButton");
showButton.addEventListener("click", () => {
  const url = new Url(location.href);
  const partsTextArea = document.getElementById("partsTextArea");
  partsTextArea.value =
    "Protocol: " +
    url.protocol +
    "\n" +
    "Host: " +
    url.host +
    "\n" +
    "Port: " +
    url.port +
    "\n" +
    "Path: " +
    url.path +
    "\n" +
    "Query: " +
    url.query;
});
