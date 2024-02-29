// keys.js

// Функция для загрузки и обработки файла keys.toml
async function loadKeys() {
  const response = await fetch('keys.toml');
  const keysData = await response.text();

  // Преобразование TOML в объект JavaScript (реализация вручную)
  const keysObject = parseTOML(keysData);
  const keysList = keysObject.keys;

  // Вывод списка ключей на веб-странице
  const keyListContainer = document.getElementById('keyList');
  keysList.forEach(key => {
    const listItem = document.createElement('li');
    listItem.textContent = key;
    keyListContainer.appendChild(listItem);
  });
}

// Функция для разбора TOML в объект JavaScript (реализация вручную)
function parseTOML(tomlString) {
  const result = {};
  const lines = tomlString.split('\n');
  let currentObject = result;
  let currentKey = null;

  lines.forEach(line => {
    const matchSection = line.match(/^\[([^\]]+)\]$/);
    if (matchSection) {
      currentObject = result[matchSection[1]] = {};
    } else {
      const matchKeyAndValue = line.match(/^([^=]+)\s*=\s*(.+)$/);
      if (matchKeyAndValue) {
        currentObject[matchKeyAndValue[1].trim()] = matchKeyAndValue[2].trim();
      }
    }
  });

  return result;
}

// Загрузка списка ключей при загрузке страницы
document.addEventListener('DOMContentLoaded', loadKeys);
