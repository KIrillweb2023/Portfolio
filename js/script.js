new WOW().init();

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      link = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeElem.addEventListener('click', (e) => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
    
    console.log(e.target);
  
});
link.forEach(a =>{
    a.addEventListener('click', () =>{
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

function scrollTop(){
    const scroll = document.querySelector('.topScroll');

    window.addEventListener('scroll', () =>{
        if(window.scrollY >= 1000){
            scroll.addEventListener('click', () =>{
                setTimeout(() =>{
                    scroll.style.transform = "scale(80%)";
                }, 100)
                setInterval(() =>{
                    scroll.style.transform = "";
                }, 300)
            });
            scroll.classList.add('active');
           
        } else {
            scroll.classList.remove('active');
        }
    });
}
scrollTop();
class Technologi{
    constructor(src, alt, title, descr, parentElement){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.parentTwo = document.querySelector(parentElement);
    }
    render(){
        const element = document.createElement('div');
        element.classList.add('technologi__item');
        element.innerHTML = `
            <div class="technologi__icon">
                <img src="${this.src}" alt="${this.alt}">
            </div>
            <div class="title title_fz14 technologi__item-title">${this.title}</div>
            <div class="technologi__item-descr">${this.descr}</div>
        `;
        this.parentTwo.append(element);
    }
}
new Technologi(
    'icons/skills/html5.svg',
    'html5',
    'HTML5',
    'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта',
    '.technologi .technologi__wrapper'
).render();

new Technologi(
    'icons/skills/css3.svg',
    'css3',
    'CSS3',
    'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!',
    '.technologi .technologi__wrapper'
).render();

new Technologi(
    'icons/skills/js.svg',
    'javascript',
    'Java Script',
    'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое',
    '.technologi .technologi__wrapper'
).render();

new Technologi(
    'icons/skills/bootstrap.png',
    'bootstrap',
    'BOOTSTRAP',
    'Библиотека bootstrap позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует',
    '.technologi .technologi__wrapper'
).render();

new Technologi(
    'icons/skills/php2.png',
    'PHP7',
    'PHP7',
    'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит',
    '.technologi .technologi__wrapper'
).render();
new Technologi(
    'icons/skills/gulp.png',
    'Gulp',
    'GULP',
    'Это планировщик задач который компилирует и собирает ваш проект в единое целое',
    '.technologi .technologi__wrapper'
).render();
new Technologi(
    'icons/skills/git.png',
    'Git',
    'GIT',
    'C помощью этой технологии ваш проект будет разбит по коммитам, что в дальнейшей ошибке в коде или в неправильной верстке мы смогли откатить версию продукта',
    '.technologi .technologi__wrapper'
).render();
new Technologi(
    'icons/skills/figma.png',
    'Figma',
    'FIGMA',
    'Это графический онлайн-редактор из которого будет воспроизводится верстка вашего продукта',
    '.technologi .technologi__wrapper'
).render();
new Technologi(
    'icons/skills/webpack.png',
    'webpack',
    'WEBPACK',
    'Это сборщик модулей для JavaScript. Он позволяет разделять код на модули, которые затем могут быть импортированы и использованы в других частях приложения',
    '.technologi .technologi__wrapper'
).render();

class Prices{
    constructor(title, sale, descr, parentElement){
        this.title = title;
        this.sale = sale;
        this.descr = descr;
        this.parent = document.querySelector(parentElement);
    }
    render(){
        const element = document.createElement('div');
        element.classList.add('prizes__item');
        element.innerHTML = `
        <div class="prizes__text">
            <div class="title title_fz14 prizes__item-title">${this.title}</div>
            <div class="prizes__sale">${this.sale}</div>
        </div>
        <div class="prizes__descr">${this.descr}</div>
        `;
        this.parent.append(element);
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
new Prices(
    'Сайт-визитка',
    'от 5000 руб.',
    'Небольшой сайт, как правило, состоящий из одной веб-страниц...',
    '.prizes .prizes__wrapper'
).render();
new Prices(
    'Многостраничник',
    'от 15000 руб.',
    'Интернет продукт состоящий неменее трех страниц',
    '.prizes .prizes__wrapper'
).render();
new Prices(
    'Дизайн',
    'по договоренности',
    'Создание дизайна для вашего продукта',
    '.prizes .prizes__wrapper'
).render();

  //form
const form = document.querySelector('.contacts__form');

const messange = {
    loading: './icons/spinner.svg',
    completed: 'Спасибо! Я вам перезвоню в ближайшее время',
    failed: 'Ошибка!'
};
dataPost(form);

function dataPost(form){
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let statusBrowser = document.createElement('img');    // создал элемент
        statusBrowser.classList.add('status');      // добавил класс к елементу
        statusBrowser.src = messange.loading;      // загруска при начале отправки на сервер
        form.append(statusBrowser);      // Добавил в форму текст

        const request = new XMLHttpRequest();
        request.open('POST', './mailer/smart.php'); 

        
        const servDat = new FormData(form); 
        request.send(servDat);  

        request.addEventListener('load', (e) => {
            if(request.status === 200){
                console.log(request.status);
                statusBrowser.textContent = messange.completed;
                form.reset();
                  // успешно
            } else {
                statusBrowser.textContent = messange.failed;     //ошибка
            }  
        }); 
    })  
}

function hidePrev(){
    const prev = document.querySelector('.previos');

    setTimeout(() =>{
        prev.classList.add('active');
    }, 4000);
}
hidePrev();


