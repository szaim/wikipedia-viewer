
$(document).ready(function(){
    $('.fa-search').click(function(e) {
    	e.preventDefault();
    	$(".list-group").empty();
        $.ajax({
            url: 'http://en.wikipedia.org/w/api.php',
            data: { action: 'query', list: 'search', srsearch: $("input[name=search]").val(), format: 'json' },
            dataType: 'jsonp',
            success: processResult
        });
    });
});

  function processResult(apiResult){

  	for(var i = 0; i < apiResult.query.search.length; i++) {
  		$(".list-group").append("<div class='col-md-12 list'><h3>" + apiResult.query.search[i].title + "</h3>"
  								+ "<p>" + apiResult.query.search[i].snippet + "</p></div>");
  	}
  	
  }

