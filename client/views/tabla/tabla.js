$.ajax({
    type: "GET",
    dataType: "json",
    url: "http://201.151.124.53:8082/json/valores/tabla.php?etapa=2994",
    success:function(jsonData){
    	$.each(jsonData, function()
    	{
		  $.each(this, function(k, v)
		  {
		    console.log(k+" "+v);
		  });
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