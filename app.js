var express = require("express");
var multer = require("multer");
var app = express();
app.use(express.static("public"));
app.use(multer({ dest: "./uploads/"}).any());

var fs = require("fs");

app.get("/getsharefiles", function (req, res) {
	fs.readdir("./public/shared", (err, files) => {
		/*files.forEach(file => {
			console.log(file);
		});*/
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(files));
	});
});

app.post('/fileupload', function(req, res) {
	console.log(req.files);
	if(req.files){
		for(var i = 0; i < req.files.length; i++){
			var file = req.files[i];
			/*fs.writeFile("./public/shared/" + file.name, file.data, "binary", function(err) {
				if(err) {
					res.send(err);
					console.log(err);
					return;
				}
				res.send("File uploaded successfully.");
				console.log("File uploaded successfully.");
			}); */
			fs.rename(".\\" + file.path, ".\\public\\shared\\" + file.originalname, function(err){
				if(err)
				{
					res.send(err);
				}
				else
				{
					res.send("File uploaded successfully.");
					console.log("File uploaded successfully. Name = " + file.originalname);
				}
			});
		}
	}
	else{
		res.send("No file was uploaded.");
		console.log("No file was uploaded!");
	}
});

app.listen(3000, function () {
	console.log("App is operational and open to requests on port 3000.");
})