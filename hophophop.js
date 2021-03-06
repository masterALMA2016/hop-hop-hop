(function(){
	var app = angular.module('alarmClock', ['ngAnimate']);
	app.controller('accueilController', function(){
		this.img = [ 
			"img/cafe.png",
			"img/edt.png",
			"img/logoHop.png",
			"img/description.png",
			"img/commencer.png",
			"img/valider.png",
			"img/github.png",
			"img/commencer2.png",
			"img/valider2.png",
			"img/rond.png",
			"img/prenom.png",
			"img/locomotion.png",
			"img/universite.png",
			"img/preparation.png",
			"img/playlist.png",
			"img/prenom_interface.png",
			"img/loco_interface.png",
			"img/edt_interface.png",
			"img/prep_interface.png",
			"img/playlist_interface.png",
			"img/GIF-instructions.gif",
			"img/point.png"
		];
	});
	
	app.controller('selectUniv', ['$window','$scope','$http', function($window, $scope, $http){
		$scope.choixFac = function(){
			$scope.user.facSelected = true;
			$http.get($scope.user.Fac + '.json').success(function(data){
				$scope.user.grps = data;
			});
		};
	}]);
	
	app.controller('selectTan', ['$window','$scope','$http', function($window, $scope, $http){
		$http.get('arrets_tan.json').success(function(data){
			$scope.user.arrets_tan = data;
		});		
	}]);
	
	app.controller('rondController', ['$scope', function($scope){
		$scope.choix='';
	}]);


	app.controller('localstorage', ['$scope', function($scope) {
		$scope.master = {};
		$scope.update = function(user){
			$scope.master = angular.copy(user);
		};
		$scope.reset = function(){
			$scope.user = angular.copy($scope.master);
		};
		$scope.reset();
		
		$scope.valid = function(user){
			if(user.myname == null || (user.departLibre == null && user.departArret == null) || (user.arriveeLibre == null && user.arriveeArret == null) || user.Fac == null || user.Grp == null || user.temps_prep == null || user.music == null){
				user.valid = false;
				alert("Vous n'avez pas complété tous les champs !");
			}else{
				user.valid = true;
				window.location.href = "horloge.html";
			}
		}

	}]);	
})();

var verif = false;

function envoyer(){
	if(!verif){
		alert("Vous n'avez pas complété tous les champs !");
	}else{

	}
}

function mvts(){
	document.getElementById("form").style.cssText="display:inline; !important";
	for(i = 0; i < document.getElementsByClassName('mvt1').length; i++){
		document.getElementsByClassName('mvt1')[i].classList.add('scale');
	}
	setTimeout(mvtsuite,2000);
	document.getElementsByClassName('img_valider')[0].style.cssText="display:inline !important";
	document.getElementsByClassName('img_rond')[0].style.cssText="display:inline !important";
}

function mvtsuite(){
	document.getElementsByClassName('img_hop')[0].classList.add('rescale');
	document.getElementsByClassName('img_valider')[0].classList.add('rescale');
	document.getElementsByClassName('img_valider')[1].classList.add('rescale');
	document.getElementsByClassName('img_rond')[0].classList.add('rescale');
	document.getElementsByClassName('img_cafe')[0].classList.add('scale');
	document.getElementsByClassName('img_edt')[0].classList.add('scale');
	document.getElementsByClassName('img_icone')[0].style.cssText="display:inline !important";
	setTimeout(function(){iconeSetTimeout(0);},2000);
}

var x = 0;

function iconeSetTimeout(i){
	if(i < document.getElementsByClassName('img_icone').length){
		icone_animation(i);
		setTimeout(function(){iconeSetTimeout(i+1);},1000);
	}else{
		animate(x);
	}
}

function icone_animation(i){
	document.getElementsByClassName('img_icone')[i].classList.add('rescale');
	if(i < document.getElementsByClassName('img_icone').length-1){
		document.getElementsByClassName('img_icone')[i+1].style.cssText="display:inline !important";
	}
}

function animate(i){
	document.getElementsByClassName('img_icone')[i].classList.add('animated');
	document.getElementsByClassName('img_icone')[i].onmouseover = function(){
		this.classList.remove('animated');
		this.style.transition = '1s';
		this.style.webkitTransform = 'scale(1.3)';
		this.style.MozTransform = 'scale(1.3)';
		this.style.msTransform = 'scale(1.3)';
		this.style.OTransform = 'scale(1.3)';
		this.style.transform = 'scale(1.3)';
	}

	document.getElementsByClassName('img_icone')[i].onmouseout = function(){
		setTimeout(hovered, 1000);
		this.style.webkitTransform = 'scale(1)';
		this.style.MozTransform = 'scale(1)';
		this.style.msTransform = 'scale(1)';
		this.style.OTransform = 'scale(1)';
		this.style.transform = 'scale(1)';
	}

	function hovered(){
		document.getElementsByClassName('img_icone')[i].classList.add('animated');
	}

	document.getElementsByClassName('img_icone')[i].onclick = function(){
		this.classList.remove('animated');
		this.style.transition = '1s';
		this.style.webkitTransform = 'scale(1)';
		this.style.MozTransform = 'scale(1)';
		this.style.msTransform = 'scale(1)';
		this.style.OTransform = 'scale(1)';
		this.style.transform = 'scale(1)';
		this.onclick = "";
		hover();
		x = x+1;
		if(x < document.getElementsByClassName('img_icone').length){
			animate(x);
		}
	}
}

function hover(){
	for(i = 0; i < document.getElementsByClassName('img_icone').length; i++){
		document.getElementsByClassName('img_icone')[i].onmouseover = function(){
			this.style.transition = '1s';
			this.style.webkitTransform = 'scale(1.2)';
			this.style.MozTransform = 'scale(1.2)';
			this.style.msTransform = 'scale(1.2)';
			this.style.OTransform = 'scale(1.2)';
			this.style.transform = 'scale(1.2)';
		}
		document.getElementsByClassName('img_icone')[i].onmouseout = function(){
			this.style.webkitTransform = 'scale(1)';
			this.style.MozTransform = 'scale(1)';
			this.style.msTransform = 'scale(1)';
			this.style.OTransform = 'scale(1)';
			this.style.transform = 'scale(1)';
		}
		document.getElementsByClassName('img_icone')[i].onclick = function(){
			this.classList.remove('animated');
		}
	}
}

function music(){
	if(document.getElementById("inputMusic").value == ""){
		alert("Vous n'avez pas saisi l'idendifiant !");
	}else{
		document.getElementById("sonnerie").innerHTML = "<object type='application/x-shockwave-flash' data='http://grooveshark.com/songWidget.swf' style='width:18vmin; height:4.5vmin; min-height:40px;'><param name='wmode' value='window'><param name='flashvars' value='hostname=grooveshark.com&songID="+document.getElementById("inputMusic").value+"&style=metal&p=1'></object>";
		//34033035
	}
}

/*****HORLOGE*****/

function date_heure(id){
	date = new Date;
	annee = date.getFullYear();
	moi = date.getMonth();
	mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
	j = date.getDate();
	jour = date.getDay();
	jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
	h = date.getHours();
	if(h<10){
		h = "0"+h;
	}
	m = date.getMinutes();
	if(m<10){
		m = "0"+m;
	}
	s = date.getSeconds();
	if(s<10){
		s = "0"+s;
	}
	resultat = h+':'+m+':'+s+ '</br>' + jours[jour]+' '+j+' '+mois[moi]+' '+annee;
	document.getElementById(id).innerHTML = resultat;
	setTimeout('date_heure("'+id+'");','1000');
	return true;
}
