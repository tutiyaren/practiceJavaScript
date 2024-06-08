fetch("../js/test2.json")

.then(response => {
	return response.json();
})


.then(data => {
	console.log(data);
})

.catch(_=> {
	return response.json();
})
