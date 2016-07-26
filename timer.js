let timer = (milisec) => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve()},milisec);
    })
}

//timer(3000).then(() => console.log('я вывелась через 3 секунды'))
module.exports = timer;