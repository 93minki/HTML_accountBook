const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth();
    const date = fullDate.getDate();
    let day = fullDate.getDay();

    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    const seconds = fullDate.getSeconds();

    switch (day) {
        case 1:
            day = "��";
            break;
        case 2:
            day = "ȭ"
            break;
        case 3:
            day = "��"
            break;
        case 4:
            day = "��"
            break;
        case 5:
            day = "��"
            break;
        case 6:
            day = "��"
            break;
        case 7:
            day = "��"
            break;
        default:
            break;
    }
    clockTitle.innerText = `${year}. ${month}. ${date}. ${day} ${hours < 10 ? `0${hours}`:hours}:${minutes <10 ? `0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    console.log("init");
}

init();