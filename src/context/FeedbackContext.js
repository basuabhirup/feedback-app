import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {  
	const [feedbackArray, setFeedbackArray] = useState(FeedbackData)

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedbackArray([newFeedback, ...feedbackArray])
	}

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedbackArray(feedbackArray.filter((feedback) => feedback.id !== id))
		}
	}

  return (
    <FeedbackContext.Provider value={{
      feedbackArray,
      addFeedback,
      deleteFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
	)
}

export default FeedbackContext
