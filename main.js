const companies= [
    {name: "company One", category: "Finance", start: 1981, end: 2003},
    {name: "company Two", category: "Retail", start: 1992, end: 2008},
    {name: "company Three", category: "Auto", start: 1990, end: 2007},
    {name: "company Four", category: "Retail", start: 1989, end: 2010},
    {name: "company Five", category: "Techology", start: 2009, end: 2014},
    {name: "company Six", category: "Finance", start: 1987, end: 2010},
    {name: "company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "company eight", category: "Techology", start: 2011, end: 2016},
    {name: "company nine", category: "Retail", start: 1981, end: 1989}
];

const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

                //    console.log(companies[i]);
                //for(let i = 0; 1 < companies.length; i++){
                //}

                //forEach

                //companies.forEach(function(company){
                //    console.log(company.name);
                //});

//filter

// get 21 and older

                //let canDrink = [];
                //for(let i = 0; i < ages.length; i++){
                //    if(ages[i] >= 21){
                //        canDrink.push(ages[i]);
                //    }
                //}

            //const canDrink = ages.filter(function(age){
            //   if(age >= 21){
            //       return true;
            //   }
            //});

const canDrink = ages.filter(age => age >= 21);

                            // filter retail companies
                            //const retailCompanies = companies.filter(function(company) {
                            //  if(company.category === 'Retail'){
                                //return true;
                                //}
                            //});
    const retailCompanies = companies.filter(company => company.category ===
        'Retail');

    //get 80s companies

    const eightiesCompanies = companies.filter(company => (company.start >=
    1980 && company.start < 1990));
    console.log(eightiesCompanies);
   //  console.log(retailCompanies);

   //get Companies that lasted 10 years or more

    const lastedTenYears = companies.filter(company => (company.end -
    company.start >10));
    // console.log(lastedTenYears);
//map
// create array of company names
//const companyNames = companies.map(function(company){
  //  return company.name;
//});
       // const testMap = companies.map(function(company){
         //   return '${company.name} [${company.start} - ${company.end}]';
        //});
//const testMap = companies.map(company =>'${company.name} [$
//    {company.start} - ${company.end}]');
//});

//console.log(testMap);
//    const ageMap = ages
 //   .map(age => Math.sqrt(age))
 //   .map(age => age * 2 );

    console.log(ageMap);

//sort

// sort companies by start year

//const sortedCompanies = companies.sort(function(c1, c2){
//if(c1.start >c2.start){
//    return 1;
//} else {
//    return -1;
//}
//});

//const sortedCompanies = companies.sort(a, b) => (a.start > b.start ?
 //    1: -1));
// console.log(sortedCompanies);
// sort ages 
//const sortAges = ages.sort((a, b) => a - b);

//console.log(sortAges);

//reduce

let ageSum = 0;
for(let i = 0; i < ages.lenght; i++){
ageSum += ages[1];
}

//const ageSum = ages.reduce((total, age) => total + age, 0);

// Get Total Years for all companies

const totalYears = companies.reduce(function(total,company) {
    return total + (company.end - company.start);
},0);

const totalYears = companies.reduce((total,company) => total +
 (company.end - company.start), 0);

 // Combine Methods

 const combined = ages
    .map(age => age * 2);
    .filter(age => 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);

//console.log(totalYears);