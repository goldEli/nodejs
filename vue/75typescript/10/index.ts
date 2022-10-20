const url: string = "https://api.thecatapi.com/v1/images/search";
// 不写也会给你自动添加
const button: HTMLButtonElement | null = document.querySelector("button");

interface ICat {
  id: number;
  url: string;
  height: number;
  width: number;
}

function renderItem(cat: ICat) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
          <td>${cat.id}</td>
          <td><img src="${cat.url}" /></td>
          <td>${cat.width}</td>
          <td>${cat.height}</td>
          <td>❌</td>
  `;
}

function getData<T>(url: string): Promise<T> {
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

getData<ICat[]>(url).then((data) => {
  console.log(data);
});
