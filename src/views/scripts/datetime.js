let timeEl = document.getElementById("time");
let dateEl = document.getElementById("date");

function setDateTimeEls()
{
    let date = new Date();
    dateEl.innerText = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    let meridian;
    let hours = date.getHours();
    if (hours > 12)
    {
        hours -= 12;
        meridian = "pm"
    } else if (hours == 0)
    {
        hours = 12;
        meridian = "am";
    } else
    {
        return;
    }

    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    timeEl.innerText = `${hours = hours < 10 ? "0" + hours : hours}:${minutes = minutes < 10 ? "0" + minutes : minutes}:${seconds = seconds < 10 ? "0" + seconds : seconds} ${meridian}`;
}

setDateTimeEls();
setInterval(setDateTimeEls, 500);
