// keys.js

// Функция для загрузки и обработки файла keys.yaml
async function loadKeys() {
  const response = await fetch('keys.yaml');
  const keysData = await response.text();

  // Преобразование YAML в объект JavaScript
  const keysObject = jsyaml.load(keysData);
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
