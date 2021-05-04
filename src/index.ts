import express from "express"
import {insertPost,getAll, updatePost} from './api/post'
import {initDB} from './api'
import {PostType} from './model/post'
import cors from 'cors'

initDB()

class App {

	public application: express.Application;

	constructor(){
		this.application = express();
	}
}

const app = new App().application;
app.use(cors())
app.use(express.json())
app.get("/",(_: express.Request, res: express.Response)=> {
	res.send("HELLO")
})

app.get("/post/get_all",async (_: express.Request, res: express.Response)=> { 
	res.send(await getAll())
})

app.post("/post/write", async (req: express.Request, res: express.Response)=> { 
	const body = await req.body
	console.log(body)
	try{
		const post: PostType = {...body , date: new Date(), _id: 0} 
		await insertPost(post)
		res.send(req.body)
	} catch (err) {
		console.log(err)
	}
})

app.post('/post/update', async(req:express.Request, _: express.Response)=> {
	const body = await req.body
	try{
		console.log(body)
		await updatePost(body)
	} catch (err) {
		console.log(err)
	}
})

app.listen(3333,()=>console.log("server started on port 3333"))
