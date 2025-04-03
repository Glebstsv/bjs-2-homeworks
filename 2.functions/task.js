function getArrayParams(...arr) {
  if (arr.length === 0) return { min: 0, max: 0, avg: 0 };

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }

  let avg = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: parseFloat(avg) };
}

function summElementsWorker(...elements) {
  if (elements.length === 0) return 0;
  return elements.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...elements) {
  if (elements.length === 0) return 0;
  const maxElement = Math.max(...elements);
  const minElement = Math.min(...elements);
  return maxElement - minElement;
}

function differenceEvenOddWorker(...elements) {
  if (elements.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let element of elements) {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...elements) {
  if (elements.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let element of elements) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
