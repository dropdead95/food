window.addEventListener('DOMContentLoaded', () => {

    const tabHeaderItem = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabHeaderItems = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabContent.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })

        tabHeaderItem.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent (i = 0) {
        tabContent[i].classList.add('show', 'fade')
        tabContent[i].classList.remove('hide')
        tabHeaderItem[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    tabHeaderItems.addEventListener('click', event => {
        const target = event.target

        if (target && target.classList.contains('tabheader__item')) {
            tabHeaderItem.forEach((item, i) => {
                if (item === target) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })




})




