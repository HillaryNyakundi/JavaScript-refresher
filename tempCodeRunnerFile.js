const sortedCountryPop = country_pop.sort(function(cp1, cp2) {
    if(cp1.population > cp2.population){
            return 1;
    }else {
            return -1;
    }
});

console.log(sortedCountryPop);