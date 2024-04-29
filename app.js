fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(function(countries) {
    var countriesHtml = '';
    var areaCtr = 0;
    var populationCtr = 0;
    for(var i in countries) {
      var country = countries[i];
      areaCtr += +countries[i].area;
      populationCtr += +countries[i].population;
      countriesHtml += `<tr>
      <td><p>${ +i + 1 }</p></td>
      <td>${ country.name.official }</td>
      <td>${ country.area }</td>
      <td>${ country.region }</td>
      <td>${ country.population }</td>
      <td><img src="${ country.flags.png }"> </td>
    </tr>`;
    }
     
    countriesHtml += `<tr>
      <td colspan="2"><b>Total</b></td>
      <td><b>${ areaCtr.toFixed()}</b></td>
      <td></td>
      <td><b>${ populationCtr }</b></td>
      <td></td>
    </tr>`;
    
    document.querySelector('#countries-table tbody').innerHTML = countriesHtml;
  })


