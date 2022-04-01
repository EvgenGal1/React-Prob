# Различные подсказки по React

## Этот проект был создан с помощью:

[Создать приложение React. Док](https://create-react-app.dev/docs/documentation-intro), [Создать приложение React. GitHub](https://github.com/facebook/create-react-app),
[Начало работы. React](https://ru.reactjs.org/docs/getting-started.html), [Крестики-Нолики. React](https://ru.reactjs.org/docs/getting-started.html),

## Типо сборки и учебники

[Изучение React.js разработки. Gurufy](https://gurufy.dev/document/5f7a0dff8fb7091e0cf61ff0/5f79390297e9f566a79b399f),
[Создание приложения React с нуля. Jedai Saboteur](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658),
[Учебник по React. Tania Rascia](https://www.taniarascia.com/getting-started-with-react/),
[Введение в React. Elliot_001](https://habr.com/ru/post/461541/)
[Учить React. codecademy](https://www.codecademy.com/learn/react-101)
[Основы React. James K Nelson](https://frontarm.com/courses/react-fundamentals/)Без модных словечек — ни Redux, ни GraphQL, ни CSS-in-JS
[Глубокое погружение в современную веб-разработку. Creative Commons BY-NC-SA 3.0](https://fullstackopen.com/en/#course-contents)React, Redux, Node.js, MongoDB, GraphQL и TypeScript. Основное внимание уделяется созданию одностраничных приложений с помощью ReactJS, которые используют REST API, созданные с помощью Node.js.

## Создать React-приложение (Node.js и npm)

```js
npx create-react-app имя-проекта
```

### Альтернатива создать React-приложение (CDN - Сеть доставки контента)

1. Добавить в HTML <div id=""></div> (id на ской вкус)
2. Перед </body> добавить 3 <script>. Первые два тега загружают React. Третий тег загружает код вашего собственного компонента.

```html
<!-- Примечание: при деплое на продакшен замените «development.js» на «production.min.js» либо Совет по минификации кода ниже. -->
<script
  src="https://unpkg.com/react@17/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
  crossorigin
></script>
<!-- Загрузим наш React-компонент. -->
<script src="my_cod.js"></script>
```

3. Создаем файл my_cod.js
   [Совет по минификации кода](https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3)

## Добавить JSX в React (Node.js и npm)

```js
npm install babel-cli@6 babel-preset-react-app@3
```

### Запуск препроцессор JSX

```js
npx babel --watch src --out-dir . --presets react-app/prod
```

### Альтернатива добавить JSX в React (CDN)

Cинтаксис JSX доступен внутри каждого <script>-тега, у которого есть атрибут type="text/babel"

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

<h2 align="center">Структура и Иерархия Проекта</h2>

## Структура и Иерархия Проекта

### Структура и Иерархия Проекта

```
my-app
├── README.md               - общее описание
├── node_modules            - установленные модули
├── package.json            - файл настроек
├── .gitignore              - отключённые от заливка на GitHub
├── public                  - публичная папка
│   ├── favicon.ico         - иконка страницы
│   ├── index.html          - шаблон страницы (использ. файлы только из public/)
│   └── manifest.json       - базовые метаданные расширений
└── src                     - папка исходников (обраб. WebPack)
    ├── App.css             -
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js            - точка входа JavaScript
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

## Некоторые коды запуска из упаковки

### `npm start`

Запускает приложение в режиме разработки
Авто перезагрузка приизменениях, ошибки в консоли

### `npm test`

Запускает тестовый бегун в режиме интерактивных часов
Смотрите раздел о [running tests](https://facebook.github.io/create-react-app/docs/running-tests) Чтобы получить больше информации.

### `npm run build`

Сборка для Прод в папку `build`
Связь в режиме Прод, оптимизация для произв-ти.

### `npm install react-scripts@latest`

Обновление инструментов сборки

## Настройки перед работой

[Настройки редактора](https://create-react-app.dev/docs/setting-up-your-editor#syntax-highlightinghttps://create-react-app.dev/docs/setting-up-your-editor#syntax-highlighting)
[Разработка компонентов изолированно](https://create-react-app.dev/docs/developing-components-in-isolationhttps://create-react-app.dev/docs/developing-components-in-isolation)
[Анализ размера пакета](https://create-react-app.dev/docs/analyzing-the-bundle-sizehttps://create-react-app.dev/docs/analyzing-the-bundle-size)
[Использование HTTPS в разработке](https://create-react-app.dev/docs/using-https-in-development)

### Некотторые допы для Добавление стилей и активов

[Добавление таблицы стилей Sass](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
[Использование общей папки](https://create-react-app.dev/docs/using-the-public-folder)
[Разделение кода](https://create-react-app.dev/docs/code-splitting)

### Некотторые допы для Создания приложения

[Импорт компонента](https://create-react-app.dev/docs/importing-a-component)
[Добавление TypeScript](https://create-react-app.dev/docs/adding-typescript)
[Добавление пользовательских переменных среды](https://create-react-app.dev/docs/adding-custom-environment-variables)
[Создание прогрессивного веб-приложения](https://create-react-app.dev/docs/making-a-progressive-web-app)

### Некотторые допы для Внутренней интеграции

[Проксирование запросов API в разработке](https://create-react-app.dev/docs/proxying-api-requests-in-development)
[Получение данных с помощью запросов AJAX](https://create-react-app.dev/docs/fetching-data-with-ajax-requests)
[Интеграция с серверной частью API](https://create-react-app.dev/docs/integrating-with-an-api-backend)
[Заголовок и метатеги](https://create-react-app.dev/docs/title-and-meta-tags)

### Некотторые допы для Развертыввания и Расширеного использования

[Развертывание](https://create-react-app.dev/docs/deployment)
[Пользовательские шаблоны](https://create-react-app.dev/docs/custom-templates)
[Предварительный рендеринг в статические HTML-файлы](https://create-react-app.dev/docs/pre-rendering-into-static-html-files)
[Расширенная конфигурация](https://create-react-app.dev/docs/advanced-configuration)

## Наборы инструментов

[Next.js](https://nextjs.org/learn/foundations/about-nextjs) — это популярный и легкий фреймворк для статических и серверных приложений, созданных с помощью React. Он включает готовые решения для стилей и маршрутизации и предполагает, что вы используете Node.js в качестве серверной среды.
[Gatsby](https://www.gatsbyjs.com/docs/) — лучший способ создавать статические веб-сайты с помощью React. Он позволяет использовать компоненты React, но выводит предварительно обработанные HTML и CSS, чтобы гарантировать максимально быстрое время загрузки.
[npm](https://docs.npmjs.com/about-npm) — это менеджер пакетов,позволяет вам использовать обширную экосистему сторонних пакетов и легко устанавливать или обновлять их.
[webpack](https://v4.webpack.js.org/guides/getting-started/) — это упаковщик, он позволяет вам писать модульный код и объединять его в небольшие пакеты для оптимизации времени загрузки.
[Babel](https://babeljs.io/) — это компилятор, он позволяет писать современный код JavaScript, который по-прежнему работает в старых браузерах.

## ТЕОРИЯ

### Компонентах класса и Функциональные компоненты

Основная цель компонента React — вернуть некоторый JSX для рендеринга. Часто компоненту полезно выполнять некоторый код, который выполняет побочные эффекты в дополнение к рендерингу JSX.
В компонентах класса побочные эффекты управляются с помощью методов жизненного цикла. В функциональных компонентах мы управляем побочными эффектами с помощью хука эффектов.

### Подробнее про props и state

#### Различия props и state

Основная обязанность компонента — перевод необработанных данных в формат HTML. Имея это в виду, свойства и состояние вместе составляют необработанные данные , из которых выводится вывод HTML. props и stat содержит eинформацию о компоненте. вид информации и способы ее обработки различаются. props + state — это входные данные для render()функции компонента. являются простыми объектами JS.И свойства , и изменения состояния вызывают обновление рендеринга. являются детерминированными. Если ваш компонент генерирует разные выходные данные для одной и той же комбинации свойств и состояния , значит, вы делаете что-то не так.Компоненты React могут получать динамическую информацию из реквизита или устанавливать свои собственные динамические данные с состоянием . Свойства передаются родительскими компонентами, тогда как состояние создается и поддерживается самим компонентом.
В React компонент никогда не должен напрямую изменять свои свойства. Родительский компонент должен изменить их.

#### props

props - Пропсы — это способ передачи данных от родителя к потомку, это сокращение от «свойства», для статического приложения, принимают произвольные входные данные, получает данные в одном объекте, Пропсы следует называть так, чтобы они имели смысл в первую очередь с точки зрения самого компонента, а уже во вторую тех компонентов, которые его рендерят. Пропсы можно только читать, Компонент никогда не должен что-то записывать в свои пропсы — вне зависимости от того, функциональный он или классовый. propsпередаются в компонент, свойство передается компоненту подобно тому, как аргумент передается функции, реквизит «приходит сверху», propsне должен меняться, propsсодержит информацию, установленную родительским компонентом (хотя можно установить значения по умолчанию), и ее не следует изменять, props - это способ передачи данных от родителя к дочернему элементу. это конфигурация компонента, его параметры , если хотите. Они получены сверху и неизменны в отношении получающего их Компонента. Компонент не может изменять свои реквизиты, но он отвечает за объединение реквизитов своих дочерних компонентов.

#### state

state - Состояние подразумевает собой данные, которые меняются со временем — интерактивность, состояние контролируется и доступно только конкретному компоненту. Не изменяйте состояние напрямую, Состояние часто называют «локальным», «внутренним» или инкапсулированным. Оно доступно только для самого компонента и скрыто от других, Компонент может передать своё состояние вниз по дереву в виде пропсов дочерних компонентов, Состояние всегда принадлежит определённому компоненту, а любые производные этого состояния могут влиять только на компоненты, находящиеся «ниже» в дереве компонентов. По умолчанию компонент не имеет состояния. Когда компоненту необходимо отслеживать информацию между рендерингами, сам компонент может создавать, обновлять и использовать состояние. stateсоздается в компоненте. stat eизменчив, stateсодержит «частную» информацию для компонента, который можно инициализировать, изменять и использовать самостоятельно, Состояние зарезервировано только для интерактивности, то есть данных, которые меняются со временем. Состояние начинается со значения по умолчанию, когда компонент монтируется, а затем со временем страдает от мутаций (в основном генерируемых пользовательскими событиями). Это сериализуемое\* представление одного момента времени — моментальный снимок. Компонент внутренне управляет своим собственным состоянием , но, кроме установки начального состояния, не имеет права возиться с состоянием своих дочерних элементов. Можно сказать, что государство является частным. является необязательным. Событие — это какое-то действие, произошедшее на странице. Компоненты класса React хранят свое состояние в виде объекта JavaScript. Этот объект инициализируется в файле constructor(). Состояние, с другой стороны, противоположно свойствам: компонент отслеживает свое собственное состояние и может изменить его в любое время.

#### Несколько статей о props и state

[Компоненты и пропсы](https://ru.reactjs.org/docs/components-and-props.html)
[Состояние и жизненный цикл](https://ru.reactjs.org/docs/state-and-lifecycle.html)
[ReactJS: props против state](https://lucybain.com/blog/2016/react-state-vs-pros/)
[props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

#### Хуки

Хуки — это функции, которые позволяют нам «подключаться» к состоянию и функциям жизненного цикла в функциональных компонентах. повторно использовать логику состояния между компонентами. упростите и организуйте наш код, чтобы разделить задачи, вместо того, чтобы позволить несвязанным данным запутаться вместе. избежать путаницы в поведении thisключевого слова. избегайте конструкторов классов, методов привязки и связанных с ними передовых методов JavaScript. два основных правила: 1. Вызывайте хуки только из функций React. 2. Вызывайте хуки только на верхнем уровне, чтобы гарантировать, что хуки вызываются в одном и том же порядке каждый раз, когда компонент рендерится. Распространенные ошибки, которых следует избегать, — вызов хуков внутри циклов, условий или вложенных функций.
const [currentState, stateSetter] = useState(initialState); Хук useState()позволяет добавлять состояние React к функциональным компонентам. Его следует вызывать на верхнем уровне определения функции React для управления его состоянием. initialState — это необязательное значение, которое можно использовать для установки значения currentStateдля первого рендеринга. Функция stateSetterиспользуется для обновления значения currentStateи повторного рендеринга нашего компонента со следующим значением состояния.

<!-- !!! СТАНДАРТННОЕ ВВЕДЕНИЕ. КАК НИТЬ ПОСМОТРЕТЬ ВЫВОД В GITHUB -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
