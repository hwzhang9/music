
var company_ol=document.querySelector('.company_ol');
var conolli=company_ol.children;
var comout=document.querySelector('.company_ul_out');
var comin=document.querySelector('.company_ul_in');
var coutul=comin.children;
console.log(coutul[0].offsetWidth);

	// for (var i = 0; i < conolli.length; i++) {
	// 	conolli[i].onclick=function(){
	// 		for (var i = 0; i < conolli.length; i++) {
	// 			conolli[i].className='';
	// 		}
	// 		  this.className='cat';
	// 	}
	// }
	var now=0;//5个图片
	var dot=0;//4个li
    // 轮播图
        //点击切换
        for (var i = 0; i <conolli.length; i++) {
        	conolli[i].index=i;
        	conolli[i].onclick=function(){
        		now=dot=this.index;
        		tab1();
        		tabli1();
        	}
        }

        function tabli1(){
        	for (var i = 0; i < conolli.length; i++) {
        		conolli[i].className='';
        	}
        	conolli[now].className='cat';
        } 

        function next1(){
        	dot++;
        	if (dot>conolli.length) {   
        		dot=1;
        		comin.style.marginLeft=0;
        	} 
        	tab1();
        	now++;
        	if (now>conolli.length-1) {
        		now=0;
        	};        	
        	tabli1();	
        }
        //定时器
        var timer1=setInterval(next1,3500);
        // comin.onmouseover=function(){ 
        // 	clearInterval(timer);
        // }
        // comin.onmouseout=function(){
        // 	timer1=setInterval(next,3000);
        // }
        //左右滑动
        var timer2=0;
        function tab1(){
        	var tent=0;
        	var step=25;
        	var start=comin.offsetLeft;
        	var end=-dot*coutul[0].offsetWidth;
        	clearInterval(timer2)
        	timer2=setInterval(function(){
        		tent++;
        		comin.style.marginLeft=start+(end-start)*tent/step+'px';
        		if (tent==step) {
        			clearInterval(timer2);
        		}
        	},15)         
        }
