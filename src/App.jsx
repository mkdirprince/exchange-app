import { useState, useEffect } from "react"
import axios from "axios"
import Form from "./components/Form"
import Result from "./components/Result"


const App = () => {
  const [isValid, setIsValid] = useState(true)
  const [rates, setRates] = useState({})
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [currencyRate, setCurrencyRate] = useState(null)

  

  const api_key = 'b2099f2e587e9cf0dc4ec50a'

  useEffect(() => {
    axios.get(`https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`)
      .then(response => {
        setRates(response.data.conversion_rates)
      })
  }, [])

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value)
  }

  const handleToCurrency = (event) => {
    setToCurrency(event.target.value)
  }

  const convertCurrency = (event) => {
    event.preventDefault()

    if(!Number(amount)) {
      return null
    }
   
    
    axios.get(`https://v6.exchangerate-api.com/v6/${api_key}/pair/${fromCurrency}/${toCurrency}`)
    .then (response => {
      const exchangeRate = response.data.conversion_rate
      setCurrencyRate(exchangeRate)
    })

  }

  return (
    <>
      <h2 className="header">Exchange App</h2>
      <section className="exchange-container">
        <Form
          rates={rates}
          amount={amount}
          toCurrency={toCurrency}
          handleAmountChange={handleAmountChange}
          handleFromCurrencyChange={handleFromCurrencyChange}
          handleToCurrency={handleToCurrency}
          convertCurrency={convertCurrency}
          currencyRate={currencyRate}
        />
        <Result 
          amount={amount} 
          fromCurrency={fromCurrency} toCurrency={toCurrency} 
          currencyRate={currencyRate}
        />
      </section>
    </>
  )
}

export default App