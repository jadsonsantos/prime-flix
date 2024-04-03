/* eslint-disable indent */
import Genders from 'enums/genders'

const getGenderStrings = (gender: Genders) => {
  switch (gender) {
    case Genders.NotSet:
      return 'Não informado'
    case Genders.Femenino:
      return 'Femenino'
    case Genders.Masculino:
      return 'Masculino'
    case Genders.NonBinary:
      return 'Não binário'
    default:
      return 'Não Informado'
  }
}

export default getGenderStrings
