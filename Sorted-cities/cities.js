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

getCities(urlCities).then((response) => {
    let container = document.getElementById('container'),
        cities = [],
        i = 0,
        inclusion;
    for (let city of response){
        cities[i++] = city.name;
    }
    inclusion = document.createElement('p');
    for (let i = 0, len = cities.sort().length; i < len - 1; i++){
        inclusion.innerText += cities[i] + ', ';
    };
    inclusion.innerText += cities[cities.length-1];
    container.appendChild(inclusion);
});
