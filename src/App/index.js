import React, { useState, useEffect } from 'react'

export const App = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.github.com/users')
			const data = await response.json()
			console.log(data)
			setUsers(data)
		}
		fetchData()
	}, [])
	if (users.length)
		return <div>{users[0].login}</div>
	return <div>No users</div>
}
