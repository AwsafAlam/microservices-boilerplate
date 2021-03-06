const app = require("express")();
const appid = process.env.APPID;

app.get("/user", (req,res) => 
res.send(`appid: ${appid} user app: says hello!`))

app.get("/user/app1", (req,res) => 
res.send(`appid: ${appid} app1 page: says hello!`))
 
app.get("/user/app2", (req,res) => 
res.send(`appid: ${appid} app2 page: says hello!`))
 
app.get("/user/admin", (req,res) => 
res.send(`appid: ${appid} ADMIN page: very few people should see this`))


app.all('*', (req, res) => {
	res.send('Unauthorized route - user-service');
	// res.send('Unauthorized route');
});

app.listen(appid, ()=>console.log(`${appid} is listening on ${appid}`))