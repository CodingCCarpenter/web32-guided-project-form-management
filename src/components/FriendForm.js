import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  // 🔥 STEP 3 - MAKE SURE THE PARENT IS INJECTING ALL NECESSARY PROPS
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    // 🔥 STEP 4 - Give the form an `onSubmit` event handler
    <form className='form-container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>
        <button>submit</button>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username:&nbsp;
          {/* 🔥 STEP 5 - Make an input of type `text` for username.
              Controlled inputs also need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler should fire to change app state. */}
        <input
          type='text'
          name='username' 
          value={values.username}
          onChange={onInputChange}
          maxLength='100'
          required  
        />    
        
        </label>

        <label>Email:&nbsp;
          {/* 🔥 STEP 6 - Make an input of type `text` for email. */}
          <input
            type='email'
            name='email' 
            value={values.email}
            onChange={onInputChange}
            required  
          />  
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role:&nbsp;
          {/* 🔥 STEP 7 - Make dropdown for role. */}
          <select
            name='role'
            onChange={onInputChange}
            value={values.role}
            required  
          >
          <option value =''>--Select a Role!--</option>
            <option value ='Instructor'>Instructor</option>
            <option value ='Student'>Student</option>
            <option value ='Team Lead'>Team Lead</option>
            <option value ='Section Lead'>Section Lead</option>
            <option value ='Coordinator'>Coordinator</option>
          </select> 
        </label>
      </div>
    </form>
  )
}
