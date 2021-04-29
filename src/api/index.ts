import mongoose,{ConnectOptions} from 'mongoose'

const MONGO_PASSWORD = process.env.MONGO_PASSWORD

export const initDB = () => { 
	const connectOption: ConnectOptions = { 
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	mongoose.connect(`mongodb+srv://potatojoayo:${MONGO_PASSWORD}@potatojoayo.frlqf.mongodb.net/potatojoayo?retryWrites=true&w=majority`, connectOption)
}


