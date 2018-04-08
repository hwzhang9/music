window.onload=function(){
	var banner_imgs=document.getElementById('banner_imgs');
	var oimg=banner_imgs.getElementsByTagName('li');
	var banner_spans=document.getElementById('banner_spans');
	var ospan=banner_spans.getElementsByTagName('span');
	var header=document.querySelector('.header');
	var header_cont=document.querySelector('.header_cont');
	var logo=header.getElementsByTagName('img')[0];
	var header_a=header_cont.getElementsByTagName('a');
	var logo_span=document.querySelector('.logo_right_span1');
	var cont_ul=document.querySelector('.cont_ul');
	var customer_text=document.querySelector('.customer_cont_text');
	var conulli=cont_ul.children;
	var customer_ul=document.querySelector('#customer_ul');
	var customerli=customer_ul.getElementsByTagName('li');
	var design_text=document.querySelector('#design_text');
	var design_img1=document.querySelector('.design_img1');
	var design_box4=document.querySelector('.design_box4');
	var design_box3=document.querySelector('.design_box3');
	var design_box2=document.querySelector('.design_box2');
	var design_box1=document.querySelector('.design_box1');
	var design_box5=document.querySelector('.design_box5');
	var design_ul=document.querySelector('.design_ul');
	var work_cont=document.querySelector('.work_cont');
	var top=document.querySelector('.top');
	var deschild=design_ul.children;
	var workchild=work_cont.children;
	var footer_p1=document.querySelector('.footer_cont_p1');
	var er=document.querySelector('.footer_right_img');
	var footer_dt=document.querySelector('.footer_cont_dt');
	var footer_dd1=document.querySelector('.footer_cont_dd1');
	var footer_dd2=document.querySelector('.footer_cont_dd2');
	console.log(work_cont);
    var num=0;//5个图片
	var key=0;//4个li
    // 轮播图
        //点击切换
        for (var i = 0; i <ospan.length; i++) {
        	ospan[i].index=i;
        	ospan[i].onclick=function(){
        		num=key=this.index;
        		tab();
        		tabli();
        	}
        }

        function tabli(){
        	for (var i = 0; i < ospan.length; i++) {
        		ospan[i].className='';
        	}
        	ospan[num].className='active';
        } 

        function next(){
        	key++;
        	if (key>ospan.length) {   
        		key=1;
        		banner_imgs.style.marginLeft=0;
        	} 
        	tab();
        	num++;
        	if (num>ospan.length-1) {
        		num=0;
        	};        	
        	tabli();	
        }
        //定时器
        var timer=setInterval(next,3500);
        banner_imgs.onmouseover=function(){ 
        	clearInterval(timer);
        }
        banner_imgs.onmouseout=function(){
        	timer=setInterval(next,3000);
        }
        //左右滑动
        var timer1=0;
        function tab(){
        	var tent=0;
        	var step=25;
        	var start=banner_imgs.offsetLeft;
        	var end=-key*oimg[0].offsetWidth;
        	clearInterval(timer1)
        	timer1=setInterval(function(){
        		tent++;
        		banner_imgs.style.marginLeft=start+(end-start)*tent/step+'px';
        		if (tent==step) {
        			clearInterval(timer1);
        		}
        	},10)           
        }
        var winheight=document.documentElement.clientHeight;
        var bodyheight=document.body.clientHeight;

        console.log(oimg[0].offsetTop);
        console.log(bodyheight);
        window.onscroll=function(){
        	var bodysrtop=document.body.scrollTop||document.documentElement.scrollTop;
        	console.log(bodysrtop);
        	//回到顶部
        	var bSys=true;
        	var timer=null;
			if(!bSys) //人工滚动
			{
				clearInterval(timer);
			}
			bSys=false; 
			if(bodysrtop>1){
				header2();
			}
			else{
				header1();
			}
			if (bodysrtop==0){
				header.style.animation='fadeInDown 1s';
			}
			for (var i = 0; i < conulli.length; i++) {
				if (bodysrtop>=300){
					conulli[0].style.animation='fadeInUp 1s';
					conulli[1].style.animation='fadeInUp 1s 0.75';
				}
				if (bodysrtop>=740){
					conulli[2].style.animation='fadeInUp 1s 0.75';
					conulli[3].style.animation='fadeInUp 1s 0.75';
				}
				if (bodysrtop>=1340){
					conulli[4].style.animation='fadeInUp 1s 0.75';
					conulli[5].style.animation='fadeInUp 1s 0.75';
				}
				if (bodysrtop>=1960){
					conulli[6].style.animation='fadeInUp 1s 0.75';
					conulli[7].style.animation='fadeInUp 1s 0.75';
				}
			}

			for (var i = 0; i < customerli.length; i++) {
				customerli[i]
				if (bodysrtop>=3400) {
					customer_text.style.animation='fadeInLeft 1s'; 
					customerli[0].style.animation='fadeInRight 1s';               
					customerli[1].style.animation='fadeInRight 1s';               
				}
				if (bodysrtop>=3600) {
					customerli[2].style.animation='fadeInRight 1s';               
					customerli[3].style.animation='fadeInRight 1.3s';
					customerli[4].style.animation='fadeInRight 1.6s';               
					customerli[5].style.animation='fadeInRight 1.9s ';
					customerli[6].style.animation='fadeInRight 2.2s ';               
					customerli[7].style.animation='fadeInRight 2.5s ';                   
				}
				if (bodysrtop>=3800) {
					customerli[9].style.animation='fadeInRight 1s';               
					customerli[10].style.animation='fadeInRight 1.2s';
					customerli[12].style.animation='fadeInRight 1.4s';               
					customerli[13].style.animation='fadeInRight 1.6s ';                  
				}
			}
			if (bodysrtop>=4500) {
				design_text.style.animation='fadeInDown 1s';
				design_img1.style.animation='zoomIn 1s';
				design_box4.children[0].style.animation='fadeInLeft 1s'; 
				design_box4.children[1].style.animation='fadeIn 1s 0.75s both'; 
        		// design_box4.children[1].style.animationFillMode='both';
        	}
        	if (bodysrtop>=4750) {
        		design_box1.children[0].style.animation='fadeInRight 0.75s 3s both';
        		// design_box1.children[0].style.animationFillMode='both';                
        		design_box1.children[1].style.animation='fadeIn 0.75s 3.5s both'; 
        		// design_box1.children[1].style.animationFillMode='both';
        		design_box2.children[0].style.animation='fadeInRight 0.75s 2s both';
        		// design_box2.children[0].style.animationFillMode='both';                
        		design_box2.children[1].style.animation='fadeIn 1s 2.5s both'; 
        		// design_box2.children[1].style.animationFillMode='both';
        		design_box3.children[0].style.animation='fadeInRight 1s 1s both'; 
        		// design_box3.children[0].style.animationFillMode='both';
        		design_box3.children[1].style.animation='fadeInRight 1s 1.5s both'; 
        		// design_box3.children[1].style.animationFillMode='both';
        		design_box3.children[2].style.animation='fadeIn 1s 1.5s both'; 
        		// design_box3.children[2].style.animationFillMode='both';
        	}
        	if (bodysrtop>=4915) {
        		design_box5.children[0].style.animation='fadeInUp 0.75s 4s both';
        		// design_box5.children[0].style.animationFillMode='both';  
        	}
        	if (bodysrtop>=5100) {
        		for (var i = 0; i < deschild.length; i++) {
        			deschild[0].style.animation='bounceInRight 0.5s';
        			deschild[1].style.animation='bounceInRight 1s';
        			deschild[2].style.animation='bounceInRight 1.5s';
        			deschild[3].style.animation='bounceInRight 2s';
        		}
        	}
        	if (bodysrtop>=5560) {
        		workchild[0].style.animation='fadeInLeft 1s';
        		workchild[1].style.animation='fadeInRight 1s';
        	}
        	if (bodysrtop>=6400) {
        		footer_p1.style.animation='fadeInDown 1s';
        		er.style.animation='fadeInDown 1s';
        		footer_dt.style.animation='fadeInUp 0.5s';
        		footer_dd1.style.animation='fadeInUp 0.75s';
        		footer_dd2.style.animation='fadeInUp 1s';
        	}
        }
        function header2(){
        	header.style.background='#fff';
        	logo.src='img/huudon_logo_gray .png';
        	for (var i = 0; i < header_a.length; i++) {
        		header_a[i].style.color='#525252';
        	}
        	logo_span.style.backgroundImage='url(img/huudon_kf_gray.png)';
        	logo_span.style.color='#525252';
        	header.style.top='0';
        }
        function header1(){
        	header.style.background='';
        	logo.src='img/huudon_logo.png';
        	for (var i = 0; i < header_a.length; i++) {
        		header_a[i].style.color='#fff';
        	}
        	logo_span.style.backgroundImage='url(img/huudon_kf.png)';
        	logo_span.style.color='#fff';
        }
        
        top.onclick=function ()
        {   
			clearInterval(timer); //每次点击之前先清除防止不断点击
			timer=setInterval(function (){
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				var iSpeed=Math.floor(-scrollTop/8);
				
				if(scrollTop==0)
				{
					clearInterval(timer);
				}
				
				bSys=true; //系统滚动
				document.documentElement.scrollTop=document.body.scrollTop=scrollTop+iSpeed;
			}, 30);
		}
		// var need_text=document.querySelector('.need_cont_text');
		// var otext=need_text.getElementsByTagName('input');
		// var osubmit=document.querySelector('.submit');
		// osubmit.onclick=function(){
		// 	for (var i = 0; i < otext.length; i++) {
		// 		if (otext[i].value=='') {
  //                    otext[0].style.border='1px solid';
		// 		};
		// 	}
		// 	return false;
		// }

	}

