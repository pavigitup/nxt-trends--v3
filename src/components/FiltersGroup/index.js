import './index.css'

const FiltersGroup = props => {
  const {group, rate, filteredList, filteredRating} = props
  const {name, categoryId} = group || {}
  const {ratingId, imageUrl} = rate || {}

  const onClickFilter = () => {
    filteredList(categoryId)
  }

  const onClickFilterRating = () => {
    filteredRating(ratingId)
  }

  return (
    <div className="filters-group-container">
      <div key={name}>
        <button type="button" className="filters" onClick={onClickFilter}>
          <p>{name}</p>
        </button>
      </div>

      {imageUrl && (
        <div key={ratingId}>
          <button
            type="button"
            className="rating-con"
            onClick={onClickFilterRating}
          >
            <img src={imageUrl} alt={`rating ${ratingId}`} className="images" />
            <p>&up</p>
          </button>
        </div>
      )}
    </div>
  )
}

export default FiltersGroup
