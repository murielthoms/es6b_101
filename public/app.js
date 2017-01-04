'use strict';

(function () {

	var tableauNom = ["muriel"];
	var input = document.getElementById('nom').value;

	var app = {
		init: function init() {
			app.listener();
		},
		listener: function listener() {
			valide.addEventListener('click', function () {
				app.valeurInput();
			});
			rechercher.addEventListener('click', function () {
				app.filter();
			});
		},
		valeurInput: function valeurInput() {
			var input = document.getElementById('nom').value;
			var afficheNom = input;
			document.getElementById('afficheNom').innerHTML = afficheNom;

			app.afficherMessage();
		},
		afficherMessage: function afficherMessage() {
			var input = document.getElementById('nom').value;
			var afficheNom = input;
			if (input === "") {
				document.getElementById('afficheNom').innerHTML = "Bonjour père Noël!";
			} else {
				document.getElementById('afficheNom').innerHTML = 'Bonjour  ' + afficheNom + '!';
				var li = document.createElement('li');
				var list = document.getElementById('listeNom');
				list.appendChild(li);
				li.innerHTML = input;
				tableauNom.push(input);
			}
			document.getElementById('nom').value = "";
		},
		filter: function filter() {
			document.getElementById('resultat').innerHTML = "";

			var element = document.getElementById('recherche').value;
			for (var i = 0; i < tableauNom.length; i++) {

				var idx = tableauNom[i].indexOf(element);

				if (idx === 0) {
					console.log(tableauNom[i]);
					var li1 = document.createElement('li');
					var list1 = document.getElementById('resultat');
					list1.appendChild(li1);
					li1.innerHTML = tableauNom[i];
				}
			}
			document.getElementById('recherche').value = "";
		}
	};

	app.init();
})();
