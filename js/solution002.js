/*
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/

function litersPerHour(hours) {
  return Math.floor(0.5 * Number(hours))
}


alert(litersPerHour(12.3));

/*

--- Tests  ---
1.4), 'should return 0 litres');
12.3), 'should return 6 litres');
0.82), 'should return 0 litres');
11.8), 'should return 5 litres');
1787), 'should return 893 litres');
(0), 'should return 0 litres');

*/