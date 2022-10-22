"use strict";
const url = "https://api.thecatapi.com/v1/images/search";
// 不写也会给你自动添加
const button = document.querySelector("button");
const tbody = document.querySelector("table > tbody");
function renderItem(cat) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td>${cat.id}</td>
          <td><img src="${cat.url}" /></td>
          <td>${cat.width}</td>
          <td>${cat.height}</td>
          <td class="delBtn">❌</td>
  `;
    tbody === null || tbody === void 0 ? void 0 : tbody.appendChild(tr);
}
function getData(url) {
    return fetch(url).then((response) => response.json());
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (event) {
    getData(url).then((data) => {
        renderItem(data[0]);
    });
});
tbody === null || tbody === void 0 ? void 0 : tbody.addEventListener("click", function (event) {
    var _a;
    const target = event.target;
    const className = target === null || target === void 0 ? void 0 : target.className;
    if (className === "delBtn") {
        (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    }
});
