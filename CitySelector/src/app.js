const CitySelector = require('./CitySelector');

const citySelector = new CitySelector({
    elementId: 'citySelector',
    regionsUrl: 'http://localhost:3000/regions',
    localitiesUrl: 'http://localhost:3000/localities',
    saveUrl: 'http://localhost:3000/selectedRegions'
});
console.log(citySelector);
console.log(citySelector.saveUrl);
