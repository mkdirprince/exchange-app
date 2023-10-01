import Notification from "./Notification"

const Form = (props) => {
  
  return (
    <>
      <form onSubmit={props.convertCurrency} className="form-input">

      <p className="field">
        <label htmlFor="amount"> 
          Amount 
        </label>
        <input 
          type="text" 
          name="amount" 
          id="amount" 
          value={props.amount} 
          onChange={props.handleAmountChange}
        />
      </p>
      <Notification amount={props.amount}/>
      

      <p className="field">
        <label htmlFor="from-currency"> 
          From 
        </label>
        <select 
          name="from-currency" id="from-currency" 
          onChange={props.handleFromCurrencyChange}
        >
          {Object.keys(props.rates)
          .map(code => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </p>

      <p className="field">
        <label htmlFor="to-currency"> 
          To 
        </label>
        
        <select 
          name="to-currency" 
          id="to-currency" 
          onChange={props.handleToCurrency}
        >
          <option value={props.toCurrency}>
            {props.toCurrency}
          </option>
          {Object.keys(props.rates)
            .filter(code => code !== 'EUR')
            .map(code => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </p>

      <button 
        type="submit" 
        className={props.currencyRate ? "u-displayNone" : ""} 
        disabled={isNaN(props.amount)}
        style={{cursor: (!isNaN(props.amount)) ? "pointer" : "not-allowed"}}
      > 
        Convert
      </button>
      </form>
    </>
  )
}

export default Form