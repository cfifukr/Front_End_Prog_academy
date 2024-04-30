console.log(countries);

var selectedCountryName = prompt("Enter Country Name").toLowerCase().trim();

var choosenCountry = getCountryByOfficialName(selectedCountryName)

var choosenCountryHtml = `<h1>${choosenCountry.name.official}(${choosenCountry.region})</h2>
    <img src="${choosenCountry.flags.png}">
    <h3> Population: ${choosenCountry.population}</h3>
    <h3> Area: ${choosenCountry.area}</h3>
    `



var sameRegionCountryHtml = ``;

for(country of getCountriesSameRegion(selectedCountryName)){
    sameRegionCountryHtml += `<tr>
        <td>${country.name.official}</td>
        <td>${country.area}</td>
        <td>${country.population}</td>
        <td><img src="${country.flags.png}"> </td>
    </tr>`
}

document.getElementById("selected-country").innerHTML = choosenCountryHtml;
document.getElementById("same-region-countries").innerHTML = sameRegionCountryHtml;





function getCountryByOfficialName(officialName) {
    var result = {};
    for(var country of countries){
        if(country.name.official.toLowerCase().trim() === officialName ){
            result = country;
            console.log(country)
            return result;
        }
    }
    console.log("No such a country")
    return result;
}

function getCountriesSameRegion(officialName){
    originCountry = getCountryByOfficialName(officialName);
    resultList = [];

    for(country of countries){
        if(country.region === originCountry.region && country.name.official !== originCountry.name.official){
            resultList.push(country);
        }
        
    }
    console.log(resultList);
    return resultList;
}

function countriesIntoTableHtml(countries){
    resultHtml = ``;
    
}



/**
 * сразу по загрузке страницы попросит ввести название страны.
 * далее в selectedCountryName и будет храниться это название
 * при этом, вся таблица (массив Array) стран хранится в переменной countries
 *
 * ДЗ:
 * необходимо:
 * 1. найти данные страны по введенному названию страны (необходимую страну из массива countries по selectedCountryName).
 * полученный объект выдать в консоль
 * 2. также из полученного объекта составить верстку с использованием данных из предыдущей домашки
 * (название страны, population, area, region, flag)
 * верстка может быть в формате таблицы, div, ul или любой другой удобный формат.
 * в html файле я добавил div с id="selected-country-data", можно использовать его для
 * document.getElementById().
 *
 * 2. в index.html есть h2 c id="selected-country-title".
 * там нужно вставить текст: Selected Country <название, которое ввел пользователь через prompt>
 * (например, текст будет "Selected Country: Ukraine")
 *
 * 3. найти из countries информацию по всем странам в этом же регионе
 * (поле region у них будет такое же, как и в уже выбранной стране)
 * сформировать из этих данных массив и отобразить в таблице
 * для этого я создал в index.html таблицу с tbody id="same-region-countries", можно использовать его.
 *
 * 4. схоже с пунктом #2. в элемент id="same-region-title" нужно вставить текст
 * Also in <тут название региона>:
 * (например, Also in Europe:)
 *
 *  5. поиск страны должен быть гибким.
 *  если пользователь введет название страны: Ukraine, UKRAINE, ukraine, uKrAiNe - такая страна должна успешно найтись
 *  если пользователь ввел неправильное или неполное название -
 *  показываем сообщение о том, что такая страна не найдена, в консоль.
 */