function obtenirVariables()
   {
	   var uniqueURL = "reqEtatVariables";
	   var request = new XMLHttpRequest(); // http://www.toutjavascript.com/reference/ref-xmlhttprequest.php
  		// la fonction à appeler lors d'un changement d'avancement de la requête AJAX
	   request.onreadystatechange = function()
      {
         if (this.readyState == 4) {
            // Indicateur de l'avancement de l'appel AJAX == 4 => Données complètement accessibles 
            if (this.status == 200) {
               // Code retour du serveur après l'appel AJAX == 200 => OK, tout s'est bien passé
               if (this.responseXML != null) 
			   	{
				   document.getElementById("TimeHID").innerHTML =  this.responseXML.getElementsByTagName('TimeH')[0].childNodes[0].nodeValue;
				   document.getElementById("TimeMID").innerHTML =  this.responseXML.getElementsByTagName('TimeM')[0].childNodes[0].nodeValue;
				   document.getElementById("TimeSID").innerHTML =  this.responseXML.getElementsByTagName('TimeS')[0].childNodes[0].nodeValue;
				   document.getElementById("TbacID").innerHTML =   this.responseXML.getElementsByTagName('Tbac')[0].childNodes[0].nodeValue;
				   document.getElementById("TrampeID").innerHTML = this.responseXML.getElementsByTagName('Trampe')[0].childNodes[0].nodeValue;
				   document.getElementById("PbleuID").innerHTML = this.responseXML.getElementsByTagName('Pbleu')[0].childNodes[0].nodeValue;
				   document.getElementById("PblancID").innerHTML =this.responseXML.getElementsByTagName('Pblanc')[0].childNodes[0].nodeValue;
				   document.getElementById("Pbrass1ID").innerHTML =this.responseXML.getElementsByTagName('Pbrass1')[0].childNodes[0].nodeValue;
				   document.getElementById("Pbrass2ID").innerHTML =this.responseXML.getElementsByTagName('Pbrass2')[0].childNodes[0].nodeValue;
				   document.getElementById("Pbrass3ID").innerHTML =this.responseXML.getElementsByTagName('Pbrass3')[0].childNodes[0].nodeValue;
				   document.getElementById("PhbacID").innerHTML =  this.responseXML.getElementsByTagName('Phbac')[0].childNodes[0].nodeValue;
				   document.getElementById("RedoxID").innerHTML =  this.responseXML.getElementsByTagName('Redox')[0].childNodes[0].nodeValue;
				   document.getElementById("ECID").innerHTML =     this.responseXML.getElementsByTagName('EC')[0].childNodes[0].nodeValue;
               }
            }
         }
      }
      request.open("GET", uniqueURL , true); // ici on envoie la requête GET sur l'URL /reqEtatVariables
      request.send(null);
      setTimeout("obtenirVariables()", 10000); // on rappelle obtenirVariables() dans 5s
   }