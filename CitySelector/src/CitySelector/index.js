require('./style.less');

//Пыталась следовать MVC

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(listener => listener(arg));
        }
    }
}

//Model

class CitySelector {
    constructor(config) {
        this.elementId = config.elementId || 'citySelector';
        this.regionsUrl = config.regionsUrl || 'http://localhost:3000/regions';
        this.localitiesUrl = config.localitiesUrl || 'http://localhost:3000/localities';
        this.saveUrl = config.saveUrl || 'http://localhost:3000/selectedRegions';
    }

    getRegions() {
        const items = {};
        getAjax(this.regionsUrl, function(data) {
            data.map(function(item) {
               items[item.id] = item.title;
            }); 
        });
        return items;
    }

    getLocalities() {
        const items = {};
        getAjax(this.localitiesUrl, function(data) {
            data.map(function(item) {
                items[item.id] = item.list;
            });
        });
        return items;
    }
}

class Model extends EventEmitter {
    constructor() {
        super();

        this.saveUrl = '';
    } 
    

    // Что-то с запросами вышло совсем криво у меня...
    // поэтому для хранения выбора использовала localStorage
    // в итоге оставила два варианта

    setSelected(data) {
        /* data - obj вида     
            {
                id : '26',
                region: 'Ставропольский край',
                city: 'Пятигорск'
            }
        */

        const str = JSON.stringify(data);
        localStorage.setItem('selected', str);
    }



    getSelected() {
        const str = localStorage.getItem('selected');
        const data = JSON.parse(str);

        return data;
    }



}

function getAjax(url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log('responseText:' + xmlhttp.responseText);

            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + '  in  ' + xmlhttp.responseText);
                return;
            }

            callback(data);
        }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function postAjax(url, data) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', url, true); //Для синхронного надо false, но браузер ругается 
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(JSON.stringify(data));

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                console.log(xmlhttp.responseText); 
            }
        }
    };
}

//View
class View extends EventEmitter {
    constructor() {
        super();
        this.place = "";
        this.regions = {};
        this.localities = {};

        this.triggerInit = document.getElementById("createCitySelector");
        this.triggerInit.addEventListener("click", this.handleInit.bind(this));

        this.triggerDestroy = document.getElementById("destroyCitySelector");
        this.triggerDestroy.addEventListener("click", this.handleDestroy.bind(this));

    }

    handleInit() {
        if (this.place == "") {
            this.emit("init");
        }
    }

    handleDestroy(){
        document.getElementById(this.place).innerHTML = '';
        this.showInfo(false);
        this.emit('destroy');
    }

    handleChooseRegion({ target }) {
        const id = target.id;
        const region = target.innerHTML;

        const regions = document.querySelectorAll(".regionItem");

        regions.forEach.call(regions, function(elem) {
            elem.className = "regionItem";
        });
        target.classList.add("active");

        this.showInfoText(id, "regionText");
        this.showInfoText("", "localityText");
        this.showLocations(id);
        if (document.querySelector(".saveButton")) {
            document.querySelector(".saveButton").setAttribute('disabled', true);
        }

    }

    handleChooseCity({ target }) {
        const city = target.innerHTML;
        const cities = document.querySelectorAll(".cityItem");

        cities.forEach.call(cities, function(elem) {
            elem.className = "cityItem";
        });
        target.classList.add("active");

        this.showInfoText(city, "localityText");
        if (!document.querySelector(".saveButton")) {
            this.showSaveButton();
        }
        document.querySelector(".saveButton").removeAttribute('disabled');

        //this.emit('select', { 'id': id, 'region': region, 'city': city });
        //return { 'id': id, 'region': region, 'city': city };
    }

    handleSave(place) {
        const id = place.querySelector(".regionItem.active").id;
        const region = place.querySelector(".regionItem.active").innerHTML;
        const city = place.querySelector(".cityItem.active").innerHTML;
        const data = { 'id': id, 'region': region, 'city': city };

        this.emit('select', data);
        return data;
    }

    showInfo(show, id = "info") {
        const infoBlock = document.querySelector("#" + id);

        if (show) {
            infoBlock.setAttribute("style", "display: block;");
        } else {
            infoBlock.setAttribute("style", "display: none;");
        }
    }

    showChooseButton(show) {
        const place = document.querySelector("#" + this.place);
        const chooseButton = createElement(
            "button",
            { className: "chooseButton", value: "Выбрать регион" },
            "Выбрать регион"
        );

        if (show) {
            place.appendChild(chooseButton);
            chooseButton.addEventListener("click", this.showRegions.bind(this));
        } else {
            const target = place.querySelector(".chooseButton");
            place.removeChild(target);
        }
    }

    showRegions() {
        const place = document.querySelector("#" + this.place);
        const regions = {
            //this.regions; ????????????????????? this.regions - нужный объект, свойства в него добавлять можно, а вот доставать - никак...
            "23": "Краснодарский край",
            "26": "Ставропольский край",
            "61": "Ростовская область"
        };
        const regionsItems = [];

        for (let key in regions) {
            if (regions.hasOwnProperty(key)) {
                const regionItem = createElement(
                    "li",
                    { className: "regionItem", id: key },
                    regions[key]
                );
                regionsItems.push(regionItem);
            }
        }
        const regionsList = createElement(
            "ul",
            { className: "regionsList" },
            ...regionsItems
        );
        this.showChooseButton();
        place.appendChild(regionsList);
        regionsList.addEventListener(
            "click",
            this.handleChooseRegion.bind(this)
        );
    }

    showLocations(id) {
        const place = document.querySelector("#" + this.place);
        const localities = {
            // this.localities; ????????????????
            "23": [
                "Краснодар",
                "Кропоткин",
                "Староминская",
                "Тимашевск",
                "Горячий ключ",
                "Адлер",
                "Сочи"
            ],
            "26": ["Кисловодск", "Железноводск", "Пятигорск"],
            "61": ["Таганрог", "Ростов-на-Дону", "Шахты", "Чалтырь"]
        };
        const cityItems = [];

        localities[id].map(function(item) {
            const cityItem = createElement(
                "li",
                { className: "cityItem" },
                item
            );
            cityItems.push(cityItem);
        });

        const cityList = createElement(
            "ul",
            { className: "cityList" },
            ...cityItems
        );

        if (!document.querySelector(".cityList")) {
            place.appendChild(cityList);
        } else {
            place.removeChild(document.querySelector(".cityList"));
            place.insertBefore(cityList, document.querySelector(".saveButton"));
        }
        cityList.addEventListener("click", this.handleChooseCity.bind(this));
    }

    showSaveButton() {
        const place = document.querySelector("#" + this.place);

        const saveButton = createElement(
            "button",
            { className: "saveButton", value: "Сохранить" },
            "Сохранить"
        );

        place.appendChild(saveButton);
        saveButton.addEventListener("click", this.handleSave.bind(this, place));
    }

    showInfoText(info, place = "regionText") {
        const infoBlock = document.querySelector("#" + place);
        infoBlock.textContent = info;
    }
}

function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => (element[key] = props[key]));

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}

//Controller
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('init', this.initCreate.bind(this));
        view.on('select', this.toggleSelect.bind(this));
        view.on('destroy', this.destroy.bind(this));
    }

    initCreate(obj) {
        const component = new CitySelector((obj = {}));
        view.place = component.elementId;
        view.regions = component.getRegions();
        view.localities = component.getLocalities();
        view.showChooseButton(true);
        view.showInfo(true);
        return component;
    }

    toggleSelect(data) {
        model.setSelected(data);
    }
    
    destroy() {
        delete localStorage.selected;
    }
}

//----------------------//

const view = new View();
const model = new Model();
const controller = new Controller(model, view);