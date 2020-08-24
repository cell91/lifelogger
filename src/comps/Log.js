import React, {useState, useEffect} from 'react'


function Log() {
	const [logs, setLogs] = useState([])

	useEffect(() => {
		let _obj = localStorage.getItem('logs')

		if (_obj) {
			setLogs(JSON.parse(_obj))
		}

	},[])


	let timeLogs = [...logs]
	timeLogs.reverse()

	return (
		<div>
			{
				timeLogs.map(x => <Entry {...x}/>)
			}
		</div>
	)
}

//samsies
function Entry(props) {

	return (
		<div>
			<p>{props.icon} <span>{props.text}</span></p>
			<p className='text-muted'>{props.time}</p>

			<hr />
		</div>
	)
}


export default Log