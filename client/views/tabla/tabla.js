
	$.ajax({
	    type: "GET",
	    datatype: "json",
	    url: "http://201.151.124.53:8082/json/valores/tabla.php?etapa=2994&registros=1000000",
	    success:function(jsonData){
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


$('table').dataTable();

Template.tabla.helpers({
	registros: function(){
		return Capturas.find().limit( 1 );
	}
});