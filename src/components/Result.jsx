const Result = ({amount, fromCurrency, toCurrency, currencyRate}) => {

  if (currencyRate) {
    return (
        <section className="result">
          <p className="result-conversion_amount">
            {parseFloat(amount).toFixed(2)} {fromCurrency} =
          </p>
          <p className="result-conversion_result">{(amount * currencyRate).toFixed(7)} {toCurrency}</p>
          <p className="result-conversion_amount"> 1 {fromCurrency} = {currencyRate} {fromCurrency}</p>
    
          <p className="result-conversion_amount">1 {toCurrency} = {(1 / currencyRate).toFixed(4)} {fromCurrency}</p>
        </section>
    )
  }
}

export default Result