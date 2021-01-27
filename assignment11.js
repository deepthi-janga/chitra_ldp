//crating a random no. between 2 numbers
function getRandomNumberBetweenMinMax(min, max)  {
    return Math.round(Math.random()*(max-min))
}

console.log(getRandomNumberBetweenMinMax(4.5,100)) 