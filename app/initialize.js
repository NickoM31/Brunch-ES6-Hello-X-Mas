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
		// console.log(tab);
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
		// console.log('click');
		let filteredTab = [];
		let searchValue = document.getElementById('filteredName').value;
		let showFilteredName = document.getElementById('showName');
		// console.log(filteredValue);
		for(let i = 0; i < tab.length; i++){
			let element = tab[i];
			let filteredValue = element.indexOf(searchValue);
			// console.log(filtervalue);
			if(filteredValue === 0){
				filteredTab.push(element);
				console.log(filteredTab);
				showFilteredName.innerHTML = filteredTab;
			}


		}
	});
});
  // console.log('Initialized app');
