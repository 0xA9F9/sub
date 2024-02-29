// keys.js

// Функция для загрузки и обработки файла keys.toml
async function loadKeys() {
  const response = await fetch('keys.toml');
  const keysData = await response.text();

  // Преобразование TOML в объект JavaScript
  const keysObject = TOML.parse(keysData);
  const keysList = keysObject.keys;

  // Вывод списка ключей на веб-странице
  const keyListContainer = document.getElementById('keyList');
  keysList.forEach(key => {
    const listItem = document.createElement('li');
    listItem.textContent = key;
    keyListContainer.appendChild(listItem);
  });
}

// Загрузка списка ключей при загрузке страницы
document.addEventListener('DOMContentLoaded', loadKeys);
