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
            day = "월";
            break;
        case 2:
            day = "화"
            break;
        case 3:
            day = "수"
            break;
        case 4:
            day = "목"
            break;
        case 5:
            day = "금"
            break;
        case 6:
            day = "토"
            break;
        case 7:
            day = "일"
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