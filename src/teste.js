function fibonacciSeriesPrinter(number) {
  var fibonacciSeries = function* (number) {
    if (number === 0) {
      return [0]
    } else if (number === 1) {
      return [0, 1]
    } else {
      let result = [0, 1]
      for (let i = 2; i <= number; i++) {
        result[i] = result[i - 2] + result[i - 1]
      }
      yield result
    }
  }

  return fibonacciSeries(number).next().value
}

console.log(fibonacciSeriesPrinter(55))
