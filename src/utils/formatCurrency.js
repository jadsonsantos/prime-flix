const formatCurrency = (value, currency = 'USD') => {
  const options = { style: 'currency', currency }

  return new Intl.NumberFormat('en-US', options).format(value)
}

export default formatCurrency
