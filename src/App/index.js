import React, { useState, useEffect } from 'react'
import { connectDb } from './utils/connectDb'

export const App = () => {
	const [user, setUser] = useState('')
	useEffect(() => {
		const fetchUser = async () => setUser(await connectDb())
		fetchUser()
	}, [])
	if (user)
		return <div>{user}</div>
	return <div>No user</div>
}