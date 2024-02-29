// keys.js

// Функция для загрузки и обработки файла keys.yaml
async function loadKeys() {
  const response = await fetch('keys.yaml');
  const keysData = await response.text();

  // Преобразование YAML в объект JavaScript
  const keysObject = jsyaml.load(keysData);
  const keysList = keysObject.keys;

  // Обработчик события ввода в поле поиска
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function() {
    const searchValue = this.value.trim().toLowerCase();
    const filteredKeys = keysList.filter(key => key.toLowerCase().startsWith(searchValue));
    displayFilteredKeys(filteredKeys);
  });
}

// Функция для отображения отфильтрованного списка ключей
function displayFilteredKeys(filteredKeys) {
  const keyListContainer = document.getElementById('keyList');
  keyListContainer.innerHTML = ''; // Очистка текущего списка

  if (filteredKeys.length === 0) {
    keyListContainer.style.display = 'none'; // Скрыть список ключей, если результаты поиска пусты
  } else {
    keyListContainer.style.display = 'block'; // Показать список ключей, если есть результаты поиска
    filteredKeys.forEach(key => {
      const listItem = document.createElement('li');
      listItem.textContent = key;
      keyListContainer.appendChild(listItem);
    });
  }
}

// Загрузка списка ключей при загрузке страницы
document.addEventListener('DOMContentLoaded', loadKeys);
