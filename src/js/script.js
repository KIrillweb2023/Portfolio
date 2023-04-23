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
const getStatus = async (url) =>{
    const result = await fetch(url);

    if(!result.ok){
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    return await result.json();
}

getStatus('http://localhost:3000/card')
.then(data =>{
    data.forEach(({img, alt, title, descr})=>{
        new Technologi(img, alt, title, descr, '.technologi .container .technologi__wrapper').render();
    });
});
getStatus(' http://localhost:3000/Prices')
.then(data =>{
    data.forEach(({title, sale, descr})=>{
        new Prices(title, sale, descr, '.prizes .prizes__wrapper').render();
    });
});
getStatus(' http://localhost:3000/skills')
.then(data =>{
    data.forEach(({circle, src, alt, title, descr})=>{
        new WorkSkills(circle, src, alt, title, descr, '.name .name__skills').render();
    });
});
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