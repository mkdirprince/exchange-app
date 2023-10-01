const Notification = ({amount}) => {

  const isValid = Number(amount)

  if (!isValid) {
    return <p className="error"><small>Please enter valid input</small></p>
  }

  return null
}

export default Notification