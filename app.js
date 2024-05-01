let currenciesList = [];



function filterCurrencies(txt){
    let result = [];
    for( i of currenciesList){
        if(i.txt.toLowerCase().trim().includes(txt.toLowerCase().trim()) || i.cc.toUpperCase().trim().includes(txt.toUpperCase().trim())){
            result.push(i);
            
        }
    }
    console.log(result)
    return result;
}


function renderCurrencies(list){
    resultHtml = ``;

    for(i of list){
        resultHtml += `<tr>
            <td>${i?.txt}</td>
            <td>${i?.cc}</td>
            <td>${i?.rate}</td>
        </tr>`
    }
    document.getElementById("list-currencies").innerHTML = resultHtml;
}

fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20240409&json")
  .then(res => res.json())
  .then(function(currencies) {
    
    renderCurrencies(currencies);
    currenciesList = currencies;
})


document.getElementById("search-currency").onkeyup = function(event){
    const value = event.target.value;
    console.log(value)
    let res = filterCurrencies(value);
    renderCurrencies(res);
}