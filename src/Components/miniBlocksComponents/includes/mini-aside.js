// !!! СВОЁ и не только

// общий переменные
const header = document.querySelector("header");
const helloys = document.querySelector(".helloys");
const centrCont = document.querySelector(".centr-cont-");
const probB = document.querySelector(".probB");
const footer = document.querySelector("footer");

// добавл к текущему положению Y
function setScrollBy() {
  window.scrollBy(0, 50);
}

// scrollTo для header и holloys(у них изменяемые размеры в звисимости от скрола)
function setScroll(block) {
  if (block == header) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  if (block == helloys) {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }
}

// переход к переданому block с вычеслением header
function setScrollTo(block) {
  // ??? не раб - всё раб. надо разобратся в логике
  // когда header сохращённый
  const heightHeader = document.querySelector("header").offsetHeight + 10; //~ 60
  // когда header полный
  const heightHeader2 = document.querySelector("header").offsetHeight - 80; //~ 70
  if (heightHeader < 100) {
    goToBlockValue(block, heightHeader);
    console.log("heightHeader : " + heightHeader); //~ 60
    console.log("heightHeader2- : " + heightHeader2); //~ -30
  } else {
    goToBlockValue(block, heightHeader2);
    console.log("heightHeader2 : " + heightHeader2); //~ 70
    console.log("heightHeader- : " + heightHeader); //~ 160
  }
  function goToBlockValue(block, heightHeader) {
    const goToBlockValuePar =
      // getBoundingClientRect() - `получить огранич. прямоуг. кл.` - получ. коорд относит окна просмотра и размеры
      // pageYOffset(scrollY) - кол-во прокруч пикселей
      block.getBoundingClientRect().top + window.pageYOffset - heightHeader;
    window.scrollTo({ top: goToBlockValuePar, behavior: "smooth" });
  }
}

// переключает выкл scrollbar(полоса прокрутки)
function setEnableDesableScroll() {
  document.body.classList.toggle("scroll-lock");
}

// ! нажатие на кнопки .mini-aside(мини меню с боку на скролах) - переход к разделу
function clickMinAside() {
  let jsScroll = document.querySelectorAll(".ma-bl__js-scroll");
  jsScroll.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const jScr1 = document.querySelector("#jScr1"); // шаг50
      const jScr2 = document.querySelector("#jScr2"); // header
      const jScr3 = document.querySelector("#jScr3"); // helloys
      const jScr4 = document.querySelector("#jScr4"); // centr-
      const jScr5 = document.querySelector("#jScr5"); // probB
      const jScr6 = document.querySelector("#jScr6"); // footer
      const jScr7 = document.querySelector("#jScr7"); // откл

      if (btn == jScr1) setScrollBy();
      if (btn == jScr2) setScroll(header);
      if (btn == jScr3) setScroll(helloys);
      if (btn == jScr4) setScrollTo(centrCont);
      if (btn == jScr5) setScrollTo(probB);
      if (btn == jScr6) setScrollTo(footer);
      if (btn == jScr7) setEnableDesableScroll();
    });
  });
}
clickMinAside();

// ! <scrolHeader(сокращ МЕНЮ при скроле вниз)>======================================================================
function scrolHeader() {
  // !1
  var headerMenu = document.querySelector(".header-menu");
  var headerLogo = document.querySelector(".header-logo");
  var headerLogoSmail = document.querySelector(".header-logo-smail");
  var logoImg = document.querySelector(".logo-img");
  var logoUp = document.querySelector(".logo-up");
  var logoDown = document.querySelector(".logo-down");
  var headerLang = document.querySelector(".header-menu__icon");
  var headerBurger = document.querySelector(".header-burger");
  var headerMenuTop = document.querySelector(".menu__top");
  var headerMenuBottom = document.querySelector(".menu__bottom");
  // !0
  // let itemsLinks = document.querySelectorAll(".items__link");
  // let itemsLinks = document.querySelector(".items__link");
  // const menulistitems = Array.from(document.querySelectorAll(".menu-list__items"));
  // const itemsLinks = Array.from(document.querySelectorAll(".items__link"));
  // const itemsLinks = document.querySelectorAll(".items__link");
  // const itemsLink = itemsLinks.map((i) => i.querySelector(".items__link"));
  // const itemsLink = itemsLinks.map((it)=> it.querySelector(".items__link"));

  // const itemsLinks = document.querySelectorAll('.items__link');
  // itemsLinks.forEach((itemsLink) => itemsLinks.addEventListener('click', (e) => e.preventDefault()));
  // for (let itemsLink of itemsLinks) {
  // itemsLink.addEventListener('click', (e) => e.preventDefault());
  // }

  var itemsLinks = document.querySelectorAll(".items__link");
  // ,
  //   index
  // ,
  // itemsLink;
  // for (index = 0; index < itemsLinks.length; index++) {
  //   // itemsLink = itemsLinks[index];
  //   itemsLink = itemsLinks[index];
  //   // itemsLink.addEventListener('click', clickHandler);
  //   // itemsLink.addEventListener('dblclick', doubleClickHandler);
  // }

  for (let itemsLink of itemsLinks) {
    // alert(elem.innerHTML); // "тест", "пройден"
  }
  // !0
  // !1
  var header = document.querySelector("header");
  var helloys = document.querySelector(".helloys");
  document.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 100) {
      console.log(0);
      header.classList.add("fixed_menu");
      header.style.cssText = "height : 50px; padding : 0px 3%;";
      header.style.boxShadow =
        "#000000 3px 3px 15px 0.5px inset, #000000 -3px -3px 15px 0.5px inset";
      headerLogoSmail.style.cssText = "width : 50px; height : 50px";
      logoUp.style.display = "none";
      logoDown.style.display = "none";
      // logoImg.style.top = "0%";
      // logoImg.style.width = "42px";
      // logoImg.style.left = "0%";
      logoImg.style.cssText = "left: 0%; top: 0%; width: 42px";
      helloys.style.paddingTop = "140px";
      // !0
      for (let itemsLink of itemsLinks) {
        // itemsLink[index].style.fontSize = "0px";
        itemsLink.style.cssText = "font-size : 0px; height : 10px;";
      }
      // !2
      // headerMenuTop.classList.add("done").appendChild(headerBurger)
      // let hedDon = headerMenuTop.classList.add("done");
      // hedDon.append(headerBurger);
      // headerMenuTop.classList.add("done").insertAdjacentHTML(headerBurger)
      // !2
    } else {
      header.classList.remove("fixed_menu");
      header.style.cssText = "";
      // header.style.height = "150px";
      // header.style.height = "";
      // header.style.padding = "25px 3%";
      // header.style.padding = "";
      // header.style.boxShadow = "#000000 5px 5px 30px 1.5px inset, #000000 -5px -5px 30px 1.5px inset";
      // header.style.boxShadow = "";
      // headerLogoSmail.style.width = "100px";
      headerLogoSmail.style.cssText = "";
      // width = "";
      // headerLogoSmail.style.height = "100px";
      // headerLogoSmail.style.height = "";
      logoUp.style.display = "";
      logoDown.style.display = "";
      // logoImg.style.left = "";
      // logoImg.style.top = "";
      // logoImg.style.width = "";
      // logoImg.style.cssText = "left: ; top: ; width: ";
      logoImg.style.cssText = "";
      helloys.style.paddingTop = "";
      // !0
      for (let itemsLink of itemsLinks) {
        // itemsLink[index].style.fontSize = "0px";
        // itemsLink.style.fontSize = "";
        itemsLink.style.cssText = "";
      }
      // itemsLink[index].style.fontSize = "";
      // itemsLinks[1].style.fontSize = "";
      // itemsLinks[it].style.fontSize = "";
      // itemsLinks.style.fontSize = "inherit";
      // itemsLinks.style.fontSize = "";
      // ??? не раб - передача объектом не действует
      // logoImg.style = { left: "22%", top: "22%", width: "48px" };
      // helloys.style = { paddingTop: "0px" };
    }
  });
}
scrolHeader();
