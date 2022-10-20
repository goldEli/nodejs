"use strict";
const url = "https://api.thecatapi.com/v1/images/search";
// 不写也会给你自动添加
const button = document.querySelector("button");
function renderItem(cat) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td>${cat.id}</td>
          <td><img src="${cat.url}" /></td>
          <td>${cat.width}</td>
          <td>${cat.height}</td>
          <td>❌</td>
  `;
}
function getData(url) {
    return fetch(url).then((response) => response.json());
    // .then((data) => data);
}
/*
height
:
802
id
:
"7Q76qhEAF"
url
:
"https://cdn2.thecatapi.com/images/7Q76qhEAF.jpg"
width
:
1080
*/
getData(url).then((data) => {
    console.log(data);
});
