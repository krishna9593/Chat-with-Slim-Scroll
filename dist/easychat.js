$(document).ready(function() {
    var itemContainer = $("#chat-container");
    itemContainer.slimScroll({
        height: '500px',
        start: 'bottom',
		size: '3px'
    });
    $("#msg").click(function() {
        var newInput= $(".msg-input");
		var dnData = 'Lorem ipsum dolor sit amet.';
		var m = '<li class="in">'+
					'<img class="avatar" alt="" src="img/us.jpg" />'+
					'<div class="message">'+
						'<span class="arrow"> </span>'+
						'<span class="datetime"> Today </span>'+
						'<span class="body"> '+ dnData +' </span>'+
					'</div>'+
				'</li>';
		var h = '<li class="out">'+
					'<img class="avatar" alt="" src="img/us.jpg" />'+
					'<div class="message">'+
						'<span class="arrow"> </span>'+
						'<span class="datetime"> Today</span>'+
						'<span class="body"> '+ newInput.val() +' </span>'+
					'</div>'+
				'</li>';
			
        if( newInput.val() !== "") {
            itemContainer.find('ul').append(h);
            $('.msg-input').val('');
            
            
            var scrollTo_int = itemContainer.prop('scrollHeight') + 'px';
            itemContainer.slimScroll({
                scrollTo : scrollTo_int,
                height: '500px',
                start: 'bottom',
                alwaysVisible: true
            });
        }
		// for dynamic data
		setTimeout(function(){ 
			itemContainer.find('ul').append(m);
            $('.msg-input').val('');
            
            
            var scrollTo_int = itemContainer.prop('scrollHeight') + 'px';
            itemContainer.slimScroll({
                scrollTo : scrollTo_int,
                height: '500px',
                start: 'bottom',
                alwaysVisible: true
            });
			
		}, 3000);
    });
});
