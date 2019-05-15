function updatePageWithXMLData(){
	$.ajax({
		type: "GET",
		url: "data.xml",
		dataType: "xml",
		success: function(xml){
			var count = 0;
			$(xml).find('person').each(function(){
			
				var name = $(this).find('name').text();
				var department = $(this).find('department').text();
				var address = $(this).find('address').text();
				var state = $(this).find('state').text();
		
				count++;
				var data = "\
						<tr>\
							<td>"+count +"</td>\
							<td>"+name+"</td>\
							<td>"+department+"</td>\
							<td>"+address+"</td>\
							<td>"+state+"</td>\
						</tr>\
						";

				$("#result").append(data);
			})
		}
	})

}