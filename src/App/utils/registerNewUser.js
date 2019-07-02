import { Stitch, UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk'

export const registerNewUser = async () => {
	try {
		const client = Stitch.defaultAppClient.auth.getProviderClient(UserPasswordAuthProviderClient.factory)
		await client.registerWithEmail('xxx@gmail.com', 'qw1234')
	} catch (error) {
		console.log(error)
	}
}