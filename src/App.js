import { Fragment, useState } from 'react'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'

function App() {
	const [feedbackArray, setFeedbackArray] = useState(FeedbackData)
	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedbackArray(feedbackArray.filter((feedback) => feedback.id !== id))
		}
	}

	return (
		<Fragment>
			<Header />
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats feedbackArray={feedbackArray} />
				<FeedbackList
					feedbackArray={feedbackArray}
					handleDelete={deleteFeedback}
				/>
			</div>
		</Fragment>
	)
}

export default App
