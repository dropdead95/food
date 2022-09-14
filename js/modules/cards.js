import {getResource} from '../services/services'

function cards() {
  // classes for cards

  class MenuCard {
    constructor(src, alt, subtitle, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 1;
      this.changeToBYN();
    }

    changeToBYN() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      if (this.classes.length === false) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      this.classes.forEach((className) => element.classList.add(className));
      element.innerHTML = `
             <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.subtitle}</h3>
            <div class="menu__item-descr">
              ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
          
      `;
      this.parent.append(element);
    }
  }

  getResource("http://localhost:3000/menu").then((data) => {
  data.forEach(({ img, altimg, title, descr, price }) => {
    new MenuCard(
      img,
      altimg,
      title,
      descr,
      price,
      ".menu .container",
      "menu__item"
    ).render();
  });
  });

  // axios.get("http://localhost:3000/menu").then((data) =>
  //   data.data.forEach(({ img, altimg, title, descr, price }) => {
  //     new MenuCard(
  //       img,
  //       altimg,
  //       title,
  //       descr,
  //       price,
  //       ".menu .container",
  //       "menu__item"
  //     ).render();
  //   })
  // );
}

export default cards;
