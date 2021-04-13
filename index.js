// returnFirstTwoDrivers function
//should return first two drivers from passed in array
const returnFirstTwoDrivers = function(arr){
   return arr.slice(0,2);
}

//return last two drivers of given array
const returnLastTwoDrivers = function(arr){
    return arr.slice(-2);
}

//has returnFirstTwoDrivers function as first element
//has returnLastTwoDrivers function as last element
//allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier returns a function that will multiply a fare for a ride
//takes in one argument: integer

function createFareMultiplier(num){
    return function(value){
        return num * value;
    }
}

//fareDoubler is function  that doubles fares
function fareDoubler(fare){
    return fare * 2;
}

//fareDoubler is function  that triples fares
function fareTripler(fare){
    return fare * 3;
}

//selectDifferentDrivers function takes in two arguments: arr of drivers, function
//return either first two drivers or last two drivers depending on which function is passed
function selectDifferentDrivers(arrOfDrivers, driverFunction){
    return driverFunction(arrOfDrivers);
}