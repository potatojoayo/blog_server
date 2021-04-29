import express from "express"

class App {

	public application: express.Application;

	constructor(){
		this.application = express();
	}
}

const app = new App().application;

app.get("/",(_: express.Request, res: express.Response)=> {
	res.send("start");
})

app.listen(3333,()=>console.log("server started on port 3333"))
