import { Fragment, useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
	const [feedbackArray, setFeedbackArray] = useState(FeedbackData)

	return (
		<Fragment>
			<Header />
			<div className='container'>
				<FeedbackList feedbackArray={feedbackArray} />
			</div>
		</Fragment>
	)
}

export default App
