"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment =
    creditBody *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));
  let totalPayment = monthlyPayment * countMonths;
  totalPayment = totalPayment.toFixed(2);
  return Number(totalPayment);
}
