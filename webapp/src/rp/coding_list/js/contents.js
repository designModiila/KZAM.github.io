
var googleMap = {
  init : function(id, pos) {
    var map = new google.maps.Map(document.getElementById(id), {
      center: { lat: pos[0], lng: pos[1] },
      zoom: 15,
    });
    
    var image = '/assets/images/icons/icon_pin.png'; //마커 이미지 설정
    
    var marker = new google.maps.Marker({ //마커 설정
        map : map,
        position : map.getCenter(), //마커 위치
        icon : image //마커 이미지
    });
    
    google.maps.event.addDomListener(window, "resize", function() { //리사이즈에 따른 마커 위치
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
    });
  }
}


var googleMap = {
  init : function(id, pos) {
    var map = new google.maps.Map(document.getElementById(id), {
      center: { lat: pos[0], lng: pos[1] },
      zoom: 15,
    });
    
    var image = '/assets/images/icons/icon_pin.png'; //마커 이미지 설정
    
    var marker = new google.maps.Marker({ //마커 설정
        map : map,
        position : map.getCenter(), //마커 위치
        icon : image //마커 이미지
    });
    
    google.maps.event.addDomListener(window, "resize", function() { //리사이즈에 따른 마커 위치
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
    });
  }
}
var ui = {

	progress:{ // 결제 진행중 
		show: function(msg) {
			var _html = 
			'<div class="loading-progress">'+
			'	<div class="prog">'+
			'		<i class="c"></i>'+
			'		<i class="c"></i>'+
			'		<i class="c"></i>'+
			'		<i class="c"></i>'+
			'		<i class="c"></i>'+
			'		<i class="c"></i>'+
			'		<i class="c"></i>'+
			'	</div>'+
			'	<div class="msg"></div>'+
			'</div>';
			
			if( !$(".loading-progress").length ) {
				$("body").prepend(_html);
			} else {
				$(".loading-progress").show();
			}
			if( msg != undefined ) {		
				$('.loading-progress .msg').html(msg);
			}
			$("body").addClass("is-loading-progress");
		},
		hide: function() {
			$(".loading-progress").remove();
			$("body").removeClass("is-loading-progress");
		}
	},
};

