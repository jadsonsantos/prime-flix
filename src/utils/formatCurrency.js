const formatCurrency = (value, currency = 'USD') => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency,
  })
}

export default formatCurrency
