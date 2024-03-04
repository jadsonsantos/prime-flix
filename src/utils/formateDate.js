const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const formateDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR', options)
}

export default formateDate
