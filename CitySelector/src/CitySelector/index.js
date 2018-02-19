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



module.exports = CitySelector;
