// Загрузка JSON с паролем
fetch('password.json')
  .then(response => response.json())
  .then(data => {
    const correctPassword = data.password;

    function checkPassword() {
      const enteredPassword = document.getElementById("passwordInput").value;
      if (enteredPassword === correctPassword) {
        // Показать контент
        document.getElementById("passwordDiv").style.display = "none";
        document.getElementById("content").style.display = "block";
      } else {
        // Скрыть блок ввода пароля
        document.getElementById("passwordDiv").style.display = "none";
        alert("Неправильный пароль");
      }
    }
  })
  .catch(error => console.error('Ошибка при загрузке пароля:', error));
