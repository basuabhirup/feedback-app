import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [msg, setMsg] = useState('')
  
  const handleTextChange = ({target: {value}}) => {
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

	return (
		<Card>
			<form>
				<h2>How would you rate you service with us ?</h2>
				{/* RatingSelect component */}
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
