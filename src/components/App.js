import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Friend from './Friend'
import FriendForm from './FriendForm'

// 👉 the shape of the actual friend object from API
const initialFriendsList = [
  {
    id: uuid(),
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
  },
]

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

export default function App() {
  const [friends, setFriends] = useState(initialFriendsList)
  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues) // fix this using the state hook

  const onInputChange = evt => {

    // 🔥 STEP 8 - IMPLEMENT A CHANGE HANDLER (works for inputs and dropdowns)
    // which can change the state of inputs of type text

    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    const { name, value } = evt.target
    // c) set a new state for the whole form
    setFormValues({
      //copy here all the current values of the form
      //change the target name property to be the value
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    console.log('submitting!!!!')
    // 🔥 STEP 9 - IMPLEMENT A SUBMIT HANDLER

    // a) don't allow the browser to reload!
    evt.preventDefault()
    // b) don't allow the submission, if any of the formValues is empty!
      //used 'require'
    // c) make a new friend object
    //    set up the new friend with the correct attributes
    //    using the information inside the state of the form
    const newFriend = { 
      id: uuid(), 
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    // d) update the list of friends in state with the new friend
    setFriends(friends => [newFriend, ...friends])
    // e) optionally clear the form
    setFormValues(initialFormValues)
  }

  return (
    <div className='container'>
      <header><h1>Friends App</h1></header>

      <FriendForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        // 🔥 STEP 2 - The form component needs its props.
        //    Check implementation of FriendForm
        //    to see what props it expects.
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}
