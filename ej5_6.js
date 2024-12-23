//5.6 Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

document.addEventListener("DOMContentLoaded", () => {
	const inputFilter = document.getElementById("filter");
	const buttonSubmit = document.getElementById("submit");

	buttonSubmit.addEventListener("click", () => {
		const inputValue = inputFilter.value;
		// console.log(inputValue);

		const streamers2 = [
			{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
			{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
			{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
			{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
		];
		
		const filteredStreamer = streamers2.filter(streamer => streamer.name.toLowerCase().includes(inputValue));
		console.log(filteredStreamer);
	
	});

	

});
