const input = document.querySelector('#input');
const button = document.querySelector("#button");
const result = document.querySelector('#result');

function getNumbersArray() {
    const inputValue = input.value;

    const numbers = inputValue.split(",");

    const numbersArray = numbers.map((number) => parseInt(number));

    return numbersArray;
}

function getSum(numbersArray) {
    const max = Math.max(...numbersArray);
    const min = Math.min(...numbersArray);

    const maxIndex = numbersArray.indexOf(max);
    const minIndex = numbersArray.indexOf(min);

    const startIndex = Math.min(maxIndex, minIndex) + 1;
    const endIndex = Math.max(maxIndex, minIndex);

    let sum = 0;

    for (let i = startIndex; i < endIndex; i++) {
        sum += numbersArray[i];
    }

    return sum;
}


function quickSort(numbersArray) {
    if (numbersArray.length <= 1) {
      return numbersArray;
    }
  
    const pivotIndex = Math.floor(Math.random() * numbersArray.length);
    const pivot = numbersArray.splice(pivotIndex, 1);
  
    const smallerArray = numbersArray.filter((number) => number < pivot);
    const largerArray = numbersArray.filter((number) => number >= pivot);
  
    return quickSort(smallerArray).concat([pivot], quickSort(largerArray));
  }

function printHtml(text) {

    const html = result.innerHTML + `<p>${text}</p>`;

    result.innerHTML = html;
}

function clearHtml() {
    result.innerHTML = "";
}

function main() {
    clearHtml();

    const numbersArray = getNumbersArray();
    printHtml(`Input array: ${numbersArray}`);

    const sum = getSum(numbersArray);
    printHtml([`Sum = ${sum}`]);

    const sortedArray = quickSort(numbersArray);
    printHtml(`Sorted array: ${sortedArray}`);
}


button.addEventListener("click", main);
