import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
/* variables */
const APP_ID = process.env.APP_ID
const SERVICE_NAME = process.env.SERVICE_NAME
const DB_NAME = process.env.DB_NAME
const factory = RemoteMongoClient.factory
const credential = new AnonymousCredential()

export const connectDb = async () => {
	try {
		const mongodb = Stitch.initializeDefaultAppClient(APP_ID).getServiceClient(factory, SERVICE_NAME)
		const sales = await mongodb.db('sample_supplies').collection('sales').find({}, { limit: 100 }).toArray()
		console.log(sales)
		return sales
	} catch (error) {
		console.log(error)
	}
}