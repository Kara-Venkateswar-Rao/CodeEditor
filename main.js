function run() {
  let htmlCode = document.querySelector("#html-code").value;
  let cssCode = document.querySelector("#css-code").value;
  let jsCode = document.querySelector("#js-code").value;
  let output = document.querySelector("#output");

  output.contentDocument.body.innerHTML =
    htmlCode + "<style>" + cssCode + "</style>";
  output.contentWindow.eval(jsCode);
}

let collapsHtml = document.querySelector(".html");

let htmlArea = document.querySelector("#html-code");

collapsHtml.addEventListener("click", () => {
  console.log("clicked");
  collapsHtml.classList.toggle("collaps");

  htmlArea.classList.toggle("areaCollaps");
  console.log("area clicked");

  
});

let collapsCSS = document.querySelector(".css");

let cssArea = document.querySelector("#css-code");

collapsCSS.addEventListener("click", () => {
  console.log("clicked");
  collapsCSS.classList.toggle("collaps");

  cssArea.classList.toggle("areaCollaps");
  console.log("area clicked");
});

let collapsJs = document.querySelector(".js");

let jsArea = document.querySelector("#js-code");

collapsJs.addEventListener("click", () => {
  console.log("clicked");
  collapsJs.classList.toggle("collaps");

  jsArea.classList.toggle("areaCollaps");
  console.log("area clicked");
});
