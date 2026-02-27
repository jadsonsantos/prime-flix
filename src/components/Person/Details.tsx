import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaFilm } from 'react-icons/fa'

import Person from 'interfaces/person'
import formateDate from 'utils/formateDate'
import getGenderStrings from 'utils/getGenderStrings'

interface DetailsProps {
  person: Person
}

const Details = ({ person }: DetailsProps) => {
  const { birthday, place_of_birth, deathday, gender, known_for_department } =
    person
  const formatedBirthday = formateDate(birthday)
  const formatedDeathday = formateDate(deathday)

  return (
    <div className="person__info-cards">
      <div className="person__info-card">
        <div className="person__info-label">
          <FaUser />
          <span>GÊNERO</span>
        </div>
        <div className="person__info-value">{getGenderStrings(gender)}</div>
      </div>

      {birthday && (
        <div className="person__info-card">
          <div className="person__info-label">
            <FaCalendarAlt />
            <span>NASCIMENTO</span>
          </div>
          <div className="person__info-value">{formatedBirthday}</div>
          {deathday && (
            <div className="person__info-death">
              Falecimento: {formatedDeathday}
            </div>
          )}
        </div>
      )}

      {place_of_birth && (
        <div className="person__info-card">
          <div className="person__info-label">
            <FaMapMarkerAlt />
            <span>LOCAL</span>
          </div>
          <div className="person__info-value">{place_of_birth}</div>
        </div>
      )}

      {known_for_department && (
        <div className="person__info-card">
          <div className="person__info-label">
            <FaFilm />
            <span>CONHECIDO POR</span>
          </div>
          <div className="person__info-value">{known_for_department}</div>
        </div>
      )}
    </div>
  )
}

export default Details
