const hrbio = () => {
    const hrt = document.querySelector('.hrt');
    const hrb = document.querySelector('.hrb');

    hrt.addEventListener('click', () => {
        hrt.classList.toggle('hrt-active');
        hrb.classList.toggle('hrb-active');
    })
}

hrbio();

const aabio = () => {
    const aat = document.querySelector('.aat');
    const aab = document.querySelector('.aab');

    aat.addEventListener('click', () => {
        aat.classList.toggle('aat-active');
        aab.classList.toggle('aab-active');
    })
}

aabio();

const arbio = () => {
    const art = document.querySelector('.art');
    const arb = document.querySelector('.arb');

    art.addEventListener('click', () => {
        art.classList.toggle('art-active');
        arb.classList.toggle('arb-active');
    })
}

arbio();

const stbio = () => {
    const stt = document.querySelector('.stt');
    const stb = document.querySelector('.stb');

    stt.addEventListener('click', () => {
        stt.classList.toggle('stt-active');
        stb.classList.toggle('stb-active');
    })
}

stbio();