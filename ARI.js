document.querySelector('.search-btn').addEventListener('click', () => {
  alert('この内容で検索してよろしいですか？');
});

function performSearch() {
  const input = document.getElementById("searchInput").value;
  const resultMessage = document.getElementById("resultMessage");

  if (input.trim() === "") {
    resultMessage.textContent = "検索ワードを入力してください";
  } else {
    resultMessage.textContent = `"${input}"の検索が見つかりませんでした`;
  }
}