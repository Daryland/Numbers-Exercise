
var one = 16.08
var two = 10.08
var three = 14.08
var four = 12.08
var five = 11.09
var six = 15.09

var total = one + two + three + four + five + six;

console.log('Groceries Total', total);

var discount = 25;

var twentyfiveoff = (discount / 100) * total;

console.log('Dollar savings of', twentyfiveoff)

var savingstotal = total - twentyfiveoff;

console.log('Groceries with 25% off', savingstotal);

var tax = 7.75;

var withtax = (tax / 100) * savingstotal;

console.log('Total tax amount', withtax);

var finalamount = withtax + savingstotal;

console.log('Final Amount', finalamount)