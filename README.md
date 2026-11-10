# Clothing Store React App

### Eng/Ru

### About the Project

Clothing Store is a clothing e-commerce project built with React. This is my first React project, and I’m using it to practise TypeScript and learn how to structure a frontend application.

- **Status:** Work in Progress

### Tech Stack:

- **UI library:** React
- **Build tool:** Vite
- **Language:** JavaScript, TypeScript
- **Styles:** CSS/SCSS
- **State Management:** Zustand 

### What I built:

- Four pages with React Router: home, catalog, product details, and cart.

- Product search by name. The query is stored in the URL so the results can be reopened from a link.

- Catalog filters for category, clothing style, price and size.

- A shopping cart where users can add items in a selected size, change quantities, and remove items. Zustand stores the cart state and keeps it after a page reload.

### Run Locally

Make sure Node.js 22.12 or newer is installed, then run:

```bash
git clone https://github.com/yaroslavager/clothing-store.git
cd clothing-store
npm ci
npm run dev
```

Open the local URL shown in the terminal.

---

### О проекте

Clothing Store — проект интернет-магазина одежды на React. Это мой первый проект на React. На нём я практикую TypeScript и учусь организовывать код фронтенд-приложения.

- **Статус:** В разработке

### Технологии:

- **UI library:** React
- **Build tool:** Vite
- **Language:** JavaScript, TypeScript
- **Styles:** CSS/SCSS
- **State Management:** Zustand 

### Реализовано:

- Четыре страницы с навигацией через React Router: главная, каталог, страница товара и корзина.

- Поиск товаров по названию. Запрос сохраняется в URL, поэтому результаты можно повторно открыть по ссылке.

- Фильтрацию каталога по категории, стилю одежды, цене и размеру.

- Корзину, в которую можно добавить товар выбранного размера, изменить количество или удалить позицию. Состояние корзины хранится в Zustand и сохраняется после перезагрузки страницы.

### Как запустить локально

Установи Node.js версии 22.12 или новее, затем выполни команды:

```bash
git clone https://github.com/yaroslavager/clothing-store.git
cd clothing-store
npm ci
npm run dev
```

Открой в браузере локальный адрес, который появится в терминале.