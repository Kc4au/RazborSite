// Простая эмуляция хранения данных пользователя (в localStorage)
function register() {
    const name = document.getElementById("regName").value.trim();
    const phone = document.getElementById("regPhone").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const login = document.getElementById("regLogin").value.trim();
    const password = document.getElementById("regPassword").value;
  
    if (!name || !phone || !email || !login || !password) {
      showMessage("Пожалуйста, заполните все поля", true);
      return;
    }
  
    localStorage.setItem("userName", name);
    localStorage.setItem("userLogin", login);
    localStorage.setItem("userPassword", password);
  
    showMessage(`Регистрация прошла успешно. Добро пожаловать, ${name}!`);
  
    // Очищаем поля после успешной регистрации
    document.getElementById("regName").value = "";
    document.getElementById("regPhone").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regLogin").value = "";
    document.getElementById("regPassword").value = "";
  }
  
  
  function login() {
    const loginInput = document.getElementById("loginLogin").value.trim();
    const passwordInput = document.getElementById("loginPassword").value;
  
    const savedLogin = localStorage.getItem("userLogin");
    const savedPassword = localStorage.getItem("userPassword");
    const savedName = localStorage.getItem("userName");
  
    if (loginInput === savedLogin && passwordInput === savedPassword) {
      showMessage(`Добро пожаловать, ${savedName}!`);
  
      // Очистка полей после успешного входа
      document.getElementById("loginLogin").value = "";
      document.getElementById("loginPassword").value = "";
    } else {
      showMessage("Неверный логин или пароль", true);
    }
  }
  
  
  
  function showMessage(text, isError = false) {
    const messageDiv = document.getElementById("authMessage");
    messageDiv.style.color = isError ? "red" : "green";
    messageDiv.textContent = text;
  }
  

  // Данные о запчастях
const parts = [
    {
      name: "Двигатель  Volkswagen 2.0 TDI",
      article: "ENG-2001",
      description: "Контрактный двигатель от VW Passat B7, пробег 80 000 км.",
      image: "images/engine.jpg"
    },
    {
      name: "КПП механическая Audi A6 C6 2.0 TDI",
      article: "TRN-1012",
      description: "6-ступенчатая коробка передач для Audi A6 C6.",
      image: "images/gearbox.jpg"
    },
    {
      name: "Фара левая Audi A6 C6",
      article: "LGT-456",
      description: "Оригинальная фара левая для Audi A6 C6, ксенон.",
      image: "images/headlight.jpg"
    }
  ];
  
  // Отображение карточек
  function loadCatalog() {
    const catalog = document.getElementById("catalog");
    if (!catalog) return;
  
    catalog.innerHTML = "";
    parts.forEach((part, index) => {
      const item = document.createElement("div");
      item.className = "catalog-item";
      item.innerHTML = `
        <img src="${part.image}" alt="${part.name}" />
        <h4>${part.name}</h4>
      `;
      item.onclick = () => showModal(index);
      catalog.appendChild(item);
    });
  }
  
  // Поиск
  function searchParts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".catalog-item");
    parts.forEach((part, i) => {
      const isMatch = part.name.toLowerCase().includes(input);
      items[i].style.display = isMatch ? "block" : "none";
    });
  }
  
  // Модальное окно
  function showModal(index) {
    const modal = document.getElementById("modal");
    document.getElementById("modalName").textContent = parts[index].name;
    document.getElementById("modalArticle").textContent = parts[index].article;
    document.getElementById("modalDescription").textContent = parts[index].description;
    modal.classList.remove("hidden");
  }
  
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }
  
  // Загружаем каталог при открытии страницы
  document.addEventListener("DOMContentLoaded", loadCatalog);
  