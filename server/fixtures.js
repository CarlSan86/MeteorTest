if(Capturas.find().count() === 0){
	
	// $.ajax({
 //        type: "GET",
 //        url: "201.151.124.53:8082/json/valores/tabla.php?etapa=2994",
 //        success:function(jsonData){
 //            console.log(jsonData);
 //        },
 //        error:function(msg) {
 //            alert('Error en JSON Data');
 //        },
 //    });

    var result = HTTP.call("GET", "201.151.124.53:8082/json/valores/tabla.php",
  		{params: {etapa: 2994}});

	// Capturas.insert({
	// 	id: "1",
	// 	usuario: "Carlos Sandoval",
	// 	valor: "Precio",
	// 	registro: "4.5"
	// });
}