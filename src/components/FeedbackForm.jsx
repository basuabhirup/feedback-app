import { useState, useContext } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
	const { addFeedback } = useContext(FeedbackContext)
	
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [msg, setMsg] = useState('')

	const changeRating = selected => {
		setRating(selected)
	}

	const handleTextChange = ({ target: { value } }) => {
		if (value === '') {
			setBtnDisabled(true)
			setMsg(null)
		} else if (value !== '' && value.trim().length < 10) {
			setBtnDisabled(true)
			setMsg('Text must be at least 10 characters')
    } else {
			setBtnDisabled(false)
			setMsg(null)
		}
		setText(value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (text.trim().length >= 10 && rating > 0 && rating <= 10 ) {
			const newFeedback = { rating, text }
			addFeedback(newFeedback)
			setRating(10)
			setText('')
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate you service with us ?</h2>
				<RatingSelect rating={rating} changeRating={changeRating} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Type a review'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Submit
					</Button>
				</div>
				{msg && <div className='message'>{msg}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
