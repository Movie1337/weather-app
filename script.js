const search = document.querySelector('#search'); 
const random = document.querySelector('#random');
const menu = document.querySelector('#mainMenu');
const buttonBack = document.querySelector('#buttonBack');
const buttonSearch = document.querySelector('#buttonSearch');
const body = document.querySelector('#body');
//показываем нужный город
const showScreen = function (id) {
    body.innerHTML = `<div id="london" class="london">
    <div class="cityScreen">
        <div class="buttons">
            <button class="button button__back" name="button-back"></button>
            <button class="button button__search" name="button-search"></button>
        </div>
        <div class="weather_card">
            <div class="weather_card__chilly">
                <p class="weather_card__temperature">10</p>
                <div class="weather_card__picture"><img src="icons/smallsun.png" alt=""></div>
            </div>
            <div class="weather_card__city_name">London</div>
            <div class="weather_card__date">11. 06. 2023</div>
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
        </div>
    </div>
</div>`;
}
//нажатие кнопки search
search.addEventListener('click', showScreen);
//показываем главный экран
const hideScreen = function (id) {
    body.innerHTML = `<div id="mainMenu" class="menu">
    <div class="mainScreen">
        <div class="mainScreen__logo"><img src="icons/bigsun.png" alt=""></div>
        <h1 class="mainScreen__title__one">Your forecast app</h1>
        <div>
            <div class="search">
                <form class="form" id="form">
                    <input id="enter" class="enter" type="text" placeholder="enter your city">
                    <button id="search" type="button" class="search__icon" name="search-icon"><img src="icons/search.png" alt=""></button>
                </form>
            </div>
        </div>
        <div id="random" class="mainScreen__title__three"><a href="#">give me a random one</a></div>
    </div>
</div>`;
}
//нажатие кнопок back and search
buttonBack.addEventListener('click', hideScreen);
buttonSearch.addEventListener('click', hideScreen);
/* получаем название города 
const form = document.querySelector('#form');
const enter = document.querySelector('#enter');
*/