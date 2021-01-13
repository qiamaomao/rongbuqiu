function fn_conid(a) {
	var conid = a;
	
	$("#post_"+conid+"").after("<div class='postpj'><div class='loading-5'><i></i><i></i></div></div>");
   
	if (conid) {
		if (!isNaN(conid)) {
			$.ajax({				
                url: globals.ajax_url,
				type: "POST",  
				data: {
					id: conid,                    
				},
                async: true,                          
				dataType: "json",
				success: function(data) {
					
					$("#post_"+data.cid+"").focus();
					if (data == null) {						
					} else {
					    
					$("#if_play").remove();   
					$(".ifr_sl").remove();    
					$(".postpj").remove();
					    
			        	
					//自平台视频
                    var s = data.name.indexOf("iframe"); 
                    if(s ==-1){
			         $("#post_"+data.cid+"").after("<iframe id='if_play' border='0' src='"+globals.web_url+"/usr/themes/spimes/ext/danmu/player/?url="+data.name+"' class='dmplay_sl' width='100%' height='100%' marginWidth='0' frameSpacing='0' marginHeight='0' frameBorder='0' scrolling='no' vspale='0' noResize></iframe>"); 
			         $( '#if_play' ).animate( {scrollTop: 0 }, 500 ); //点击播放后跳回
                    }
                    //第三方视频
                    else{
                    $("#post_"+data.cid+"").after(data.name);  
                    $('iframe').addClass("ifr_sl");
                    $("#if_play").remove(); 
                    $( '.ifr_sl' ).animate( {scrollTop: 0 }, 500 ); //点击播放后跳回
                    }
                    
                    
			               	
					}
					
				
					
					
					
					
				},
				error: function(err) {
					alert('加载失败');
				}
			});    
          
		} else {
		alert('加载失败');
		}
	} else {
	alert('加载失败');
		
	}
}
