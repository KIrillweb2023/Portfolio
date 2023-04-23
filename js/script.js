const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
});

const counters = document.querySelectorAll('.interest__scale'),
      lines = document.querySelectorAll('.interest__inside');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

class WorkSkills{
    constructor(circle, src, alt, title, descr, parentList){
        this.circle = circle;
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.desrc = descr;
        this.parent = document.querySelector(parentList);
    }
    render(){
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="name__skills-item">
            <div class=${this.circle}>
                <img src=${this.src} alt=${this.alt} class="name__imges">
            </div>
                <div>
                    <div class="title title_fz14">${this.title}</div>
                    <div class="name__skills-text">${this.desrc}</div>
            </div>
        </div>
        `;
        this.parent.append(element);
    }
}
new WorkSkills(
    '"name__skills-circle"',
    '"icons/about_me/web_development.svg"',
    '"webdeb"',
    'Web-разработка',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua',
    '.name .name__skills'
).render();
new WorkSkills(
    '"name__skills-circle"',
    '"icons/about_me/mobile_dev.svg"',
    '"webdeb1"',
    'Разработка приложений',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua',
    '.name .name__skills'
).render();
new WorkSkills(
    '"name__skills-circle"',
    '"icons/about_me/design.svg"',
    '"webdeb2"',
    ' UI/UX Design',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua',
    '.name .name__skills'
).render();

class Technologi{
    constructor(src, alt, title, descr, parentElement){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.parentTwo = document.querySelector(parentElement);
    }
    render(){
        const emet = document.createElement('div');
        emet.innerHTML = `
        <div class="technologi__item">
            <div class="technologi__icon">
            <img src=${this.src} alt=${this.alt}>
            </div>
            <div class="title title_fz14 technologi__item-title">${this.title}</div>
            <div class="technologi__item-descr">${this.descr}</div>
        </div>
        `;
        this.parentTwo.append(emet);
    }
}
new Technologi(
    '"icons/skills/html5.svg"',
    '"html5"',
    'HTML5',
    'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта',
    '.technologi .container .technologi__wrapper'
).render();

new Technologi(
    '"icons/skills/css3.svg"',
    '"css3"',
    'CSS3',
    'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!',
    '.technologi .container .technologi__wrapper'
).render();

new Technologi(
    '"icons/skills/js.svg"',
    '"javascript"',
    'Java Script',
    'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое',
    '.technologi .container .technologi__wrapper'
).render();

new Technologi(
    '"icons/skills/jquery.svg"',
    '"jquery"',
    'Jquery',
    'Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует',
    '.technologi .container .technologi__wrapper'
).render();

new Technologi(
    '"icons/skills/node.js.svg"',
    '"Node.js"',
    'Node.js',
    'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит',
    '.technologi .container .technologi__wrapper'
).render();

//const getStatus = async (url) =>{
   // const result = await fetch(url);

    //if(!result.ok){
       // throw new Error(`Could not fetch ${url}, status: ${result.status}`);
   // }
  //  return await result.json();
//}

//getStatus('http://localhost:3000/card')
//.then(data =>{
//    data.forEach(({img, alt, title, descr})=>{
//        new Technologi(img, alt, title, descr, '.technologi .container .technologi__wrapper').render();
 //   });
//});
//getStatus(' http://localhost:3000/Prices')
//.then(data =>{
//    data.forEach(({title, sale, descr})=>{
 //       new Prices(title, sale, descr, '.prizes .prizes__wrapper').render();
 //   });
//});
//getStatus(' http://localhost:3000/skills')
//.then(data =>{
//    data.forEach(({circle, src, alt, title, descr})=>{
//        new WorkSkills(circle, src, alt, title, descr, '.name .name__skills').render();
//    });
//});
// за 5мин написал
class Prices{
    constructor(title, sale, descr, parentElement){
        this.title = title;
        this.sale = sale;
        this.descr = descr;
        this.parent = document.querySelector(parentElement);
    }
    render(){
        const newElement = document.createElement('div');
        newElement.innerHTML = `
        <div class="prizes__item">
            <div class="prizes__text">
                <div class="title title_fz14 prizes__item-title">${this.title}</div>
                <div class="prizes__sale">${this.sale}</div>
            </div>
            <div class="prizes__descr">${this.descr}</div>
        </div>
        `;
        this.parent.append(newElement);
    }
}

new Prices(
    'Корпоративный сайт',
    'от 20000 руб.',
    'Сайт для вашего бизнеса или компании',
    '.prizes .prizes__wrapper'
).render();
new Prices(
    'Landing-page',
    'от 8000 руб.',
    'Одностраничный сайт для презентации услуг/товаров/...',
    '.prizes .prizes__wrapper'
).render();
new Prices(
    'Интернет-магазин',
    'от 30000 руб.',
    'Инструмент для ваших продаж в сети',
    '.prizes .prizes__wrapper'
).render();
//modal 
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.menu__btn');
const closeModal = document.querySelector('.modal__close');

function modalOpen(){
    openModal.addEventListener('click', () =>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });
}
modalOpen();

function modalClose(){
    closeModal.addEventListener('click', () =>{
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    });
}
modalClose();

modal.addEventListener('click', (e) =>{
        if(e.target === modal){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
document.addEventListener('keydown', (e) =>{
    if(e.code === 'Escape'){
        modal.classList.add('hide');
        modal.classList.remove('show');
    }
});
  //form
const forms = document.querySelectorAll('form');

const serverResponse = {
    loading: '../src/icons/spinner.svg',
    completed: 'Спасибо! Я вам перезвоню в ближайшее время',
    failed: 'Ошибка!'
};
forms.forEach(item =>{
    dataPost(item);
});

const postingData = async (url, data) =>{
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await result.json();
}
function dataPost(form){
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        let postMassenge = document.createElement('img');
        postMassenge.src = serverResponse.loading;
        //form.append(postMassenge);
        form.insertAdjacentElement('afterend', postMassenge);

        const text = document.createElement('div');
        form.append(text);

        const formRequest = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formRequest.entries()));
        postingData('http://localhost:3000/request', json)
        .then(data => {
            console.log(data);
            setInterval(() =>{text.textContent = serverResponse.completed;
            }, 2200);
            setTimeout(() =>{text.remove();}, 5000);
            setTimeout(() =>{postMassenge.remove();
            }, 2000);
        }).catch(() =>{
            setInterval(() =>{text.textContent = serverResponse.failed;
            }, 2200);
            setTimeout(() =>{text.remove();
            }, 5000);
            setTimeout(() =>{ postMassenge.remove();
            }, 2000);
        }).finally(() =>{
            form.reset();
        });    
    });
}