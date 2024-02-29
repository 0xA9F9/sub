fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('title').innerText = data.title;
    document.getElementById('description').innerText = data.description;
  })
  .catch(error => console.error('Ошибка загрузки данных:', error));
