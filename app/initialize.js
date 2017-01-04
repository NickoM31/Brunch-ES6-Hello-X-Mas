document.addEventListener('DOMContentLoaded', () => {
	const tab = [];
	const validText = document.getElementById('btnText');
	const searchBtn = document.getElementById('btnSearch');

	validText.addEventListener('click',(event)=>{
		let inputValue = document.getElementById('inputText').value;
		let ul = document.getElementById('listName');
		let li = document.createElement('li');
		ul.appendChild(li);
		li.innerHTML = inputValue;
		tab.push(inputValue);
		console.log(tab);

		function hello(personn =' Père Noel' + '!'){
			if (inputValue === ""){
				li.innerHTML = ('Bonjour' + personn);
			}else{
				li.innerHTML = ('Bonjour ' + inputValue + '!');
			}

		}
		hello();
	});
	searchBtn.addEventListener('click',(event)=>{
		console.log('click');
		let filteredTab = [];
		let filteredValue = document.getElementById('filteredName').value;
		console.log(filteredValue);
		for(var i = 0; i < filteredTab.length; i++){
			let element = filteredTab[i];
			console.log(element);
		}
	});
});
  // console.log('Initialized app');
