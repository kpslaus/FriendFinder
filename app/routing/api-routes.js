app.get('/api/friends', function(req, res){
	var matches = req.params.friends;

	if(matches){
		console.log(matches);

		for(var i = 0; i < strangerKids.length; i++){
			if(matches === strangerKids[i].name){
				return;
			}
		}

		res.json(false);
	} else{
		res.json(friends);
	}
});

app.post('/api/friends', function (req, res){
	var matches = req.body;

	console.log(matches);

	friends.push(matches);

	res.json(matches);

});

var willResults = [2, 5, 5, 5, 4, 4, 3, 5, 5];
var mikeResults = [4, 5, 5, 3, 3, 5, 3, 4, 2];
var lucasResults = [4, 3, 5, 3, 4, 5, 2, 3, 5, 3];
var dustinResults = [2, 4, 5, 3, 3, 3, 2, 4, 5, 3];
var elevenResults = [5, 5, 3, 2, 5, 3, 5, 5, 3, 2];

var newEntry = [];

var possibleMatches = ["Will", "Mike", "Lucas", "Dustin", "Eleven"];

score