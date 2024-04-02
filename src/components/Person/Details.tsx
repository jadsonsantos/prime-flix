import formateDate from 'utils/formateDate'
import getGenderStrings from 'utils/getGenderStrings'

import Person from 'interfaces/person'

interface DetailsProps {
  person: Person
}

const Details = ({ person }: DetailsProps) => {
  const { birthday, place_of_birth, deathday, gender } = person
  const formatedBirthday = formateDate(birthday)
  const formatedDeathday = formateDate(deathday)

  return (
    <div>
      <h2>Informações pessoais</h2>
      <p>
        <b>Gênero: </b>
        {getGenderStrings(gender)}
      </p>
      <p>
        <b>Nascimento: </b>
        {formatedBirthday}
      </p>
      {deathday && (
        <p>
          <b>Falecimento: </b>
          {formatedDeathday}
        </p>
      )}
      <p>
        <b>Local de nascimento: </b>
        {place_of_birth}
      </p>
    </div>
  )
}

export default Details
