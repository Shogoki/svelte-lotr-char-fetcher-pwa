<script>
	export let name;
	let character = {}
	fetchChar().then(char => character = char)

	async function fetchChar() {
		//const url = "https://the-one-api.herokuapp.com/v1/book" //character"
		const url = "https://the-one-api.herokuapp.com/v1/character"
		const header ="Authorization: Bearer yrayQN-nPvr69xjie5bX"
		const response = await fetch(url, {
			//mode: 'same-origin', // no-cors, *cors, same-origin,
			headers: {'Authorization': 'Bearer yrayQN-nPvr69xjie5bX'}
			})
		const characters = await response.json()
		//console.log(JSON.stringify(characters))
		return characters.docs[Math.floor(Math.random() * characters.docs.length)]
		// 
		
	}
	function clickButton() {
		fetchChar().then(char => character = char)
	}
</script>

<style>
	
	h1 {
		color: goldenrod;
		text-align: center
	}
	.container {
		display:flex;
		align-items: center;
		justify-content: center;
	
	}
	.character {
		flex: 1 1;
		text-align: center;
		background: cornflowerblue;
	}
</style>

<h1>LOTR Character Fetcher</h1>
<div class="container">
	<div class="character" >		
		<h2>{character.name}</h2>
		<p>Realm: {character.realm}</p>
		<p>Race: {character.race}</p>
		<p>gender: {character.gender}</p>
		<button on:click={clickButton}>Fetch new Character</button>
	</div>
	
</div>
