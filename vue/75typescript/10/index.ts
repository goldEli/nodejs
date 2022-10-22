const url: string = "https://api.thecatapi.com/v1/images/search";
// 不写也会给你自动添加
const button: HTMLButtonElement | null = document.querySelector("button");
const tbody = document.querySelector("table > tbody");

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
          <td class="delBtn">❌</td>
  `;
  tbody?.appendChild(tr);
}

function getData<T>(url: string): Promise<T> {
  return fetch(url).then((response) => response.json());
}

button?.addEventListener("click", function (event: MouseEvent) {
  getData<ICat[]>(url).then((data) => {
    renderItem(data[0]);
  });
});

tbody?.addEventListener("click", function (event: Event) {
  const target = event.target as HTMLButtonElement;
  const className = target?.className;
  if (className === "delBtn") {
    target.parentElement?.remove()
  }
});
