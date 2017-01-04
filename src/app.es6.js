
(()=>{
	

	let tableauNom = ["muriel"]
	let input = document.getElementById('nom').value

	const app={

		init(){
			app.listener();
		},

		listener(){
			valide.addEventListener('click',()=>{
				app.valeurInput();
			});
			rechercher.addEventListener('click' ,()=>{
				app.filter();
			});

		},
		valeurInput(){
			let input = document.getElementById('nom').value;
			let afficheNom = input;
			document.getElementById('afficheNom').innerHTML = afficheNom

			app.afficherMessage();
		},

		afficherMessage(){
			let input = document.getElementById('nom').value;
			let afficheNom = input;
			if(input === ""){
				document.getElementById('afficheNom').innerHTML = "Bonjour père Noël!"
			}
			else{
				document.getElementById('afficheNom').innerHTML = `Bonjour  ${afficheNom}!`
				let li =document.createElement('li');
				let list = document.getElementById('listeNom');
				list.appendChild(li);
				li.innerHTML= input;
				tableauNom.push(input);
				    
			}
			document.getElementById('nom').value = "" ;

		},


		filter(){
			document.getElementById('resultat').innerHTML = "" 
			
			let element = document.getElementById('recherche').value ;
			for (var i = 0; i < tableauNom.length; i++) {

				let idx = tableauNom[i].indexOf(element);

				if (idx === 0 ) {
					console.log(tableauNom[i])
					let li1 = document.createElement('li');
					let list1 =document.getElementById('resultat')
					list1.appendChild(li1);
					li1.innerHTML=(tableauNom[i]);

				}

			}
			document.getElementById('recherche').value = ""
		}

	}


	app.init();
})();