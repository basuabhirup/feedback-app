import { useState, useEffect } from 'react'

function RatingSelect({ rating, changeRating }) {
	const [selected, setSelected] = useState(rating)
	const handleChange = ({ currentTarget: { value } }) => {
    setSelected(+value)
    changeRating(+value)
  }
  
  useEffect(() => {
		setSelected(rating)
	}, [rating])
  

	return (
		<ul className='rating'>
			{Array.from({ length: 10 }, (_, i) => (
				<li key={`rating-${i + 1}`}>
					<input
						type='radio'
						id={`num${i + 1}`}
						name='rating'
						value={i + 1}
						onChange={handleChange}
						checked={selected === i + 1}
					/>
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>
	)
}

export default RatingSelect
