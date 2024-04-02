/* eslint-disable indent */
import Genders from 'enums/genders'

const getGenderStrings = (gender: Genders) => {
  switch (gender) {
    case Genders.NotSet:
      return 'Not set'
    case Genders.Femenino:
      return 'Femenino'
    case Genders.Masculino:
      return 'Masculino'
    case Genders.NonBinary:
      return 'Non-binary'
    default:
      return 'Unknown'
  }
}

export default getGenderStrings
