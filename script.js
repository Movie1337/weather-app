const apiKey = "0c1c169b53be4fbb82f81148230408";
const mainContainer = document.getElementById("mainContainer");
const cityContainer = document.getElementById("cityContainer");
const cityScreen = document.getElementById("cityScreen");
const search = document.getElementById("search");
const form = document.querySelector("#form");
const input = document.querySelector("#enter");

// Функция для отображения карточки с погодой
function showCard(temp, name, updated, icon) {
  cityScreen.innerHTML = `
    <div class="buttons">
        <button id="buttonBack" class="button button__back" name="button-back"></button>
        <button id="buttonSearch" class="button button__search" name="button-search"></button>
    </div>
    <div class="weather_card">
        <div class="weather_card__chilly">
            <p class="weather_card__temperature">${temp}</p>
            <div class="weather_card__picture"><img src="${icon}" alt="weather icon"></div>
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

// Функция для получения данных о погоде
async function getWeather(city) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Функции для управления видимостью экранов
function hideScreen(id) {
  const element = document.getElementById(id);
  element.classList.add("hidden");
  setTimeout(() => {
    element.classList.add("none");
  }, 1000);
}

function showScreen(id) {
  const element = document.getElementById(id);
  setTimeout(() => {
    element.classList.remove("none");
    setTimeout(() => {
      element.classList.remove("hidden");
    }, 500);
  }, 1000);
}

// Обработчик отправки формы
form.onsubmit = async function (event) {
  event.preventDefault();
  const city = input.value.trim();
  const data = await getWeather(city);
  showCard(
    data.current.temp_c,
    data.location.name,
    data.current.last_updated,
    data.current.condition.icon
  );
  hideScreen("mainContainer");
  showScreen("cityContainer");
  console.log(data);
};

// Делегирование событий для обработки кликов на динамически добавляемые кнопки
document.addEventListener("click", function (event) {
  if (event.target.id === "buttonBack") {
    hideScreen("cityContainer");
    showScreen("mainContainer");
  } else if (
    event.target.id === "buttonSearch" ||
    event.target.closest("#search")
  ) {
    hideScreen("mainContainer");
    showScreen("cityContainer");
  }
});
