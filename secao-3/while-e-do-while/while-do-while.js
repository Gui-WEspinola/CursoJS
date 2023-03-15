function whileDoWhile() {
    function random(min, max) {
        const r = Math.random() * (max - min) + min;
        return Math.floor(r);
    }
    const min = 1;
    const max = 50;

    let rand = random(min, max);
    console.log(rand)

    while (rand !== 10) {
        rand = random(min, max);
        console.log(rand);
    }

    console.log(`Saiu do loop.`);
    console.log(`O valor de rand é: ${rand}`);
    console.log(`------------------`)

    do {
        console.log(rand)
        rand = random(min, max);
    } while (rand !== 10);
}
whileDoWhile();