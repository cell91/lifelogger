import React from 'react'
import moment from 'moment'

import { icons } from '../constants/logtypes'

function Input(props) {
	const txt = React.createRef()

	const enterLog = (entry) => {
		//add custom string
		if ( txt.current.value != '' ) {
			entry.text = txt.current.value
			txt.current.value = ''
		}
		//add timestamp
		entry.time = moment().format('MMMM Do YYYY, h:mm:ss a')

		let localData = localStorage.getItem('logs')

		if (localData) {
			let _obj = JSON.parse(localData)
			_obj.push(entry)

			localStorage.setItem('logs',JSON.stringify(_obj))
		} else {
			localStorage.setItem('logs',JSON.stringify([entry,]))
		}
	}

	return (
	<div>	
		<input ref={txt} className='form-control my-4'/>

		<div>
			{icons.map((x,i) => {
				return <Emo {...x} enterLog={() => enterLog(x)} />
			})}
		</div>
	</div>
	)
}


//samsies

function Emo(props) {

	return (
		<button onClick={props.enterLog} className='btn btn-light m-2'>{props.icon}</button>
	)
}


export default Input