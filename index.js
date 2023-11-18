const express = require("express");
const path = require("path");
const uuid = require("uuid").v4;
const app = express();

const staticPath = path.join(__dirname, "public");
app.use("/", express.static(staticPath));

app.get("/user", (req, res) => {
	res.json({
		data: [
			{
				id: uuid(),
				firstName: "Sujan",
				lastName: "Shrestha",
				age: 21,
				sex: "male",
				contact: 9779845428818,
				email: "sujansthadev@gmail.com",
				drugs: false,
			},
			{
				id: uuid(),
				firstName: "Bibesh",
				lastName: "Shrestha",
				age: 20,
				sex: "male",
				contact: 9779813671239,
				email: "bibeshsthadev@gmail.com",
				drugs: true,
			},

			{
				id: uuid(),
				firstName: "Roshan",
				lastName: "Shrestha",
				age: 20,
				sex: "gay",
				contact: 9779845165229,
				email: "roshangaida@gmail.com",
				drugs: true,
			},
			{
				id: uuid(),
				firstName: "Sivaji",
				lastName: "The Boss",
				age: 29,
				sex: "male",
				contact: 9779829173544,
				email: "shivajifoundation@gmail.com",
				drugs: true,
			},
			{
				id: uuid(),
				firstName: "Roshni",
				lastName: "Karki",
				age: 18,
				sex: "female",
				contact: 9779813257751,
				email: "roshnikarki@gmail.com",
				drugs: false,
			},
			{
				id: uuid(),
				firstName: "Sabal",
				lastName: "Shrestha",
				age: 13,
				sex: "male",
				contact: 9779818637839,
				email: "sabalgamer@gmail.com",
				drugs: false,
			},
			{
				id: uuid(),
				firstName: "Buddha",
				lastName: "Lama",
				age: 28,
				sex: "lesbian",
				contact: 9779813518339,
				email: "buddhadev@gmail.com",
				drugs: false,
			},
		],
	});
});

app.listen(8000, () => {
	console.log("Server is running");
});
