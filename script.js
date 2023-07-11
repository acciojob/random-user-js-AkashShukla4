fetch('https://randomuser.me/api/');

.then(resposne => {
	if(!response.ok){
		throw new Error("Something went wrong");
	}
	return response.json();
}).then(data => {
	console.log(data);
})
.catch(err => {
console.log("Error",err);
});