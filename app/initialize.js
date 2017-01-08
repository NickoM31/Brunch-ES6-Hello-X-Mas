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
		let filteredTab = [];
		let searchValue = document.getElementById('filteredName').value;
		let showFilteredName = document.getElementById('showFilteredName');
		for(let i = 0; i < tab.length; i++){
			let element = tab[i];
			let filteredValue = element.indexOf(searchValue);
			if(filteredValue === 0){
				filteredTab.push(element);
				showFilteredName.innerHTML = filteredTab;
			}
		}
	});
});

