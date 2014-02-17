$.ajax({
    type: "GET",
    url: "http://201.151.124.53:8082/json/valores/tabla.php?etapa=2994",
    success:function(jsonData){
    	for (var i = jsonData.length - 1; i >= 0; i--) {
    		console.log(jsonData[i]);
    	};
    },
    error:function(msg) {
        alert('Error en JSON Data');
    },
});

Template.tabla.helpers({
	registros: function(){
		return Capturas.find();
	}
});