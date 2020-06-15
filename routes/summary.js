$(document).ready(function() {
    let user = "";
    let currencies = "";
    let baseCurrencies = "";
    let selectedBase = "";
    $.get("/api/summary/051f966f-736d-4219-88f3-376d1aee8bf6").then(({account, currencies})=>{
        user = account;
        currencies = currencies;
        baseCurrencies = currencies.filter(a=> a.ExchangeRates.length);
        selectedBase = baseCurrencies[4];
        console.log(user, currencies,baseCurrencies);
        updatePage(user, currencies)
    })
    //position container holding all positions
    var positions = $(".userPositions")
    
    function updatePage(user,currencies){
        $("#accountBalance").text(user.initialAmount);
        currencies.map(a=>{
            $(".dropdown-menu").append(`<div class="dropdown-item">${a.code}</div>`)
        })
    }
    
    $(".dropdown-menu").on("click", '.dropdown-item', function(){
        const selected = $(this).text();
        const rate = selectedBase.ExchangeRates.filter(a=>a.targetCurrencyCode === selected)[0];
        console.log(rate)
        $("#exRate").text((+(rate.rate)).toFixed(2));
        $("#targetCurr").text(rate.targetCurrencyCode)
    })
    })
    