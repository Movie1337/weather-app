const apiKey = '0c1c169b53be4fbb82f81148230408'
const mainMenu = document.getElementById("mainMenu");
const search = document.getElementById("search"); 
const randomScreen = document.getElementById("random");
const screenLondon = document.getElementById("screenLondon");
const cityScreen = document.getElementById("cityScreen");
const buttonBack = document.getElementById("buttonBack");
const buttonSearch = document.getElementById("buttonSearch");
const form = document.querySelector('#form');
const input = document.querySelector('#enter');

//показываем карточку
function showCard (temp, name, updated, icon) {
    // разметка для карточки
        cityScreen.innerHTML = `<div id="buttons" class="buttons">
        <button id="buttonBack" class="button button__back" name="button-back"></button>
        <button id="buttonSearch" class="button button__search" name="button-search"></button>
        </div>
        <div class="weather_card">
            <div class="weather_card__chilly">
                <p class="weather_card__temperature">${temp}</p>
                <div class="weather_card__picture">${icon}</div>
            </div>
            <div class="weather_card__city_name">${name}</div>
            <div class="weather_card__date">${updated}</div>
            <div class="weather_card__week">
                <div class="weather_card__day">
                    <div class="weather_card__calendar">
                        <img src="icons/calendar.png" alt="">
                        <div class="weather_card__calendar__number">12</div>
                    </div>
                    <div class="weather_card__weather">
                        <div class="weather_card__weather__icon"><img src="icons/rain.png" alt=""></div>
                    </div>
                    <span class="weather_card__number">8</span>
                </div>
                <div class="weather_card__day">
                    <div class="weather_card__calendar">
                        <img src="icons/calendar.png" alt="">
                        <div class="weather_card__calendar__number">13</div>
                    </div>
                    <div class="weather_card__weather">
                        <div class="weather_card__weather__icon"><img src="icons/rain.png" alt=""></div>
                    </div>
                    <span class="weather_card__number">7</span>
                </div>
                <div class="weather_card__day">
                    <div class="weather_card__calendar">
                        <img src="icons/calendar.png" alt="">
                        <div class="weather_card__calendar__number">14</div>
                    </div>
                    <div class="weather_card__weather">
                        <div class="weather_card__weather__icon"><img src="icons/rain.png" alt=""></div>
                    </div>
                    <span class="weather_card__number">9</span>
                </div>
                <div class="weather_card__day">
                    <div class="weather_card__calendar">
                        <img src="icons/calendar.png" alt="">
                        <div class="weather_card__calendar__number">15</div>
                    </div>
                    <div class="weather_card__weather">
                        <div class="weather_card__weather__icon"><img src="icons/rain.png" alt=""></div>
                    </div>
                    <span class="weather_card__number">11</span>
                </div>
                <div class="weather_card__day">
                    <div class="weather_card__calendar">
                        <img src="icons/calendar.png" alt="">
                        <div class="weather_card__calendar__number">16</div>
                    </div>
                    <div class="weather_card__weather">
                        <div class="weather_card__weather__icon"><img src="icons/rain.png" alt=""></div>
                    </div>
                    <span class="weather_card__number">13</span>
                </div>
            </div>
        </div>`;
}

//получаем данные с сервера
async function getWeather(city) {
    // адрес запроса
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

//скрывает основной экран 
function hideScreen(id) {
    const element = document.querySelector(`#${id}`);
    element.classList.add("hidden");
    setTimeout(() => {
        element.classList.add("none");
    }, 2000);
}

//показываем экран города
function showScreen(id) {
    const element = document.querySelector(`#${id}`);
    setTimeout(() => {
        element.classList.remove("none");
    }, 2000);
    setTimeout(() => {
        element.classList.remove("hidden");
    }, 2500);
}

//делаем отправку формы
form.onsubmit = async function (e) {
    // отменяем отправку формы
    e.preventDefault();

    // берём значение из инпута, обрезаем пробелы
    let city = input.value.trim();
    
    // получаем данные с сервера
    const data = await getWeather(city);

    showCard(
        data.current.temp_c,
        data.location.name,
        data.current.last_updated,
        data.current.condition.icon,
    );
    
    const handleClickSearch = (event) => {
        event.preventDefault();
        hideScreen("mainMenu");
        showScreen("screenLondon");
    }
    
    const handleClickBack = (event) => {
        event.preventDefault();
        hideScreen("screenLondon");
        showScreen("mainMenu");
    }
    
    search.addEventListener("click", handleClickSearch);
    randomScreen.addEventListener("click", handleClickSearch);
    buttonBack.addEventListener("click", handleClickBack);
    buttonSearch.addEventListener("click", handleClickBack);
    
}
