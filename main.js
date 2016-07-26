let urlCities = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

let getCities = (url) => {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                resolve(xhr.response);
            } else {
                reject('Ошибка!');
            }
        });
    })
};

window.addEventListener('load', () => {
    getCities(urlCities).then((response) => {
        let cityList = [], i = 0;
        for (let {name} of response){
            cityList[i++] = name;
        }
        console.log(cityList);
    })
});
