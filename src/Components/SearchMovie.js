import React from 'react'
import { Rating } from 'react-simple-star-rating'
const SearchMovie = ({handleName,handleRating,handleReset,rating}) => {
  return (
    <div>
<input type="text" onChange={(e)=>handleName(e.target.value)} />
<Rating onClick={handleRating} initialValue={rating} />
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default SearchMovie