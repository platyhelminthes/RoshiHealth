// CardSection.js
import React from 'react';


function CardSection(props){
    return (
      
        
        <div style={{display: 'flex', flexDirection:'column'}}>
          <label htmlFor='Line1'>Address Line 1</label>
          <input onChange={props.handleChange} name='line1' value={props.state.line1} id='Line1' placeholder='Address Line 1'/>
          <label htmlFor='city'>City</label>
          <input onChange={props.handleChange} name='city' value={props.state.city} id='city'placeholder='City'/>
          <label htmlFor='state'>State</label>
          <input onChange={props.handleChange} name='state' value={props.state.state} id='state' placeholder='state'/>
          <label htmlFor='zip'>Postal Code</label>
          <input onChange={props.handleChange} name='zip' value={props.state.zip} id='zip' placeholder='Postal Code'/>
          <label htmlFor='name'>Name</label>
          <input onChange={props.handleChange} name='name' value={props.state.name} id='name' placeholder='Name'/>
          <label htmlFor='email'>Email</label>
          <input onChange={props.handleChange} name='email' value={props.state.email} id='email' placeholder='email'/>
        </div>
      
    );
}

export default CardSection;