function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  //tabs
  const tabHeaderItem = document.querySelectorAll(tabsSelector),
    tabContent = document.querySelectorAll(tabsContentSelector),
    tabHeaderItems = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabHeaderItem.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].classList.add("show", "fade");
    tabContent[i].classList.remove("hide");
    tabHeaderItem[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabHeaderItems.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabHeaderItem.forEach((item, i) => {
        if (item === target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

export default tabs;
