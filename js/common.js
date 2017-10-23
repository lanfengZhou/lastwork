function $(id){
			return typeof id==='string'?document.getElementById(id):id;
		}
		/**
		 * get,post类型通信封装，发送数据的序列化
		 * @param  {[type]} data [description]
		 * @return {[type]}      [description]
		 */
		function serialize(data){
		    if(!data) return '';
		    var pairs=[];
		    for(var name in data){
				if(!data.hasOwnProperty(name)) continue;//排除嵌套对象
				    if(typeof data[name]==='function') continue;//排除操作数是函数
				    var value=data[name].toString();
				    //encodeURIComponent对同一资源表示符（URI）编码,
				    name=encodeURIComponent(name);
				    valeu=encodeURIComponent(value);
				    pairs.push(name+'='+value);
				    }
				    return pairs.join('&');
		}
		function $ajax(type,url,param,callback){
			if(window.XMLHttpRequest){
				var xhr=new XMLHttpRequest()
			}else if(window.ActiveXobject){
				var xhr=new ActiveXobject()
			}
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status>=200&&xhr.status<=300||xhr.status==304){
						callback(xhr.responseText);
					}else{
						console.log("连接失败"+xhr.status);
					}
				}
			}
			if(type==='get'){
				url=url+'?'+serialize(param);
				xhr.open('get',url,true);
				xhr.send(null);
			}else if(type==='post'){
				xhr.open('post',url,true);
				xhr.setRequestHeader('content-Type','application/json');
				xhr.send(JSON.stringify(param));
			}
			
		}
		EventUtil.addEvent($('text'),'click',function(){
			console.log("22222");
			$ajax('get','localhost',{name:"zhou",age:"25"},function(data){

			});
			$ajax('post','local',{name:"zhou",age:"25"},function(data){

			});
		});

// ele.addEvnetListener('clic')