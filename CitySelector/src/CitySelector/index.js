require('./style.less');
const $ = require('jQuery');


class Statefull {
    constructor(saveUrl) {
        this.saveUrl = saveUrl;
        this.state = {
            id: '',
            region: '',
            city: ''
        };
    }

    loadState() {
        this.state = this.getAjax(this.saveUrl);
        return this.state;
    }

    saveState() {}

    clearState() {
        this.state = {};
        this.postAjax(this.state);
    }

    getAjax(url = this.saveUrl) {
        $.getJSON(url, function(data) {
            return data;
        });
    }

    // Что-то с запросами вышло совсем криво у меня...
    // поэтому для хранения выбора использовала localStorage

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

class CitySelector extends Statefull {
    constructor(config) {
        super();

        this.elementId = config.elementId;
        this.regionsUrl = config.regionsUrl;
        this.localitiesUrl = config.localitiesUrl;
        this.saveUrl = config.saveUrl;

        console.log(this.state);
        console.log(this.saveUrl);
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
        alert(JSON.stringify(data));
    }

    destroy() {
        delete localStorage.selected;
    }
}

module.exports = CitySelector;
=======
const view = new View();
const model = new Model();
const controller = new Controller(model, view);
