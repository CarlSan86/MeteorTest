$.ajax({
    type: "GET",
    datatype: "json",
    url: "http://201.151.124.53:8082/json/valores/tabla.php?etapa=2994",
    success:function(jsonData){
    	Capturas.remove({});
        str = jQuery.parseJSON(jsonData);
		  $.each(str, function(k, v)
		  {
		    Capturas.insert(v);
		  });
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