import React from 'react'


function Head(props) {
	

	return (
		<div className='text-center'>	
			<h2>
				<a href="#" onClick={()=>props.setView(!props.view)} >
					{props.view ? 'Index' : 'Logs' }
				</a>
			</h2>
		</div>
	)
}

export default Head