import dotenv from 'dotenv'
import mongoose,{ConnectOptions} from 'mongoose'

dotenv.config({path: '/home/ubuntu/server/.env'}) 

export const initDB = () => {
	const MONGO_PASSWORD = process.env.MONGO_PASSWORD
	const connectOption: ConnectOptions = { 
		useNewUrlParser: true,
		useUnifiedTopology: true
}
	mongoose.connect(`mongodb+srv://potatojoayo:${MONGO_PASSWORD}@potatojoayo.frlqf.mongodb.net/Blog?retryWrites=true&w=majority`, connectOption)
}
