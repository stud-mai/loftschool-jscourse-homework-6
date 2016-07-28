let urlCities = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
let input = document.getElementsByTagName('input')[0],
    container = document.querySelector('.container');

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

let showResults = (result) => {
    let resDiv = document.createElement('div');
    resDiv.innerText = result;
    resDiv.className = 'results';
    container.appendChild(resDiv);
};

let removeResults = () => {
    let resDivs = document.querySelectorAll('.results');
    container.style.display = 'none';
    if (resDivs.length) {
        for (let div of resDivs) {
            div.remove();
        }
    }
};

window.addEventListener('load', () => {
    getCities(urlCities).then((response) => {
        input.addEventListener('input', () => {
            let counter = 0;
            removeResults();
            for (let {name} of response){
                if (name.toLowerCase().startsWith(input.value.toLowerCase())){
                    if (input.value) {
                        container.style.display = 'block';
                        showResults(name);
                        counter++;
                    }
                }
            }
            if (!counter && input.value){
                container.style.display = 'block';
                showResults('No matches!');
            }
        });
    });
});
