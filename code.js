function runFunction(){
	var button=document.querySelector(".ytp-ad-skip-button.ytp-button");
	var button2=document.querySelector(".ytp-ad-overlay-close-button");
	var button3=document.querySelector("#player-ads");
	var button4=document.querySelector("#masthead-ad");
	var button5=document.querySelector(".annotation.annotation-type-custom.iv-promo.iv-promo-collapsed");
	var button6=document.querySelector(".ytp-button.ytp-cards-button");
	var no_youtube_channel=document.querySelectorAll("[title='圧倒的不審者の極み!']")[0];
	var googlead=document.querySelector(".C4eCVc.c");
	var button7=document.querySelector("#player-advertising");
	var button8=document.querySelector("#divExoLayerWrapper");
	var button9=document.querySelector("#close_button_player-fluid");
	var button10=document.querySelector(".content-group");


	console.log();
	if(button){button.click();console.log("button");}
	if(button2){button2.click();console.log("button2");}
	if(button3){button3.remove();console.log("button3");}
	if(button4){button4.remove();console.log("button4");}
	if(button5){button5.remove();console.log("button5");}
	if(button6){button6.remove();console.log("button6");}
	if(button)button.click();
	if(button2)button2.click();
	if(googlead)googlead.remove();
	if(button7)button7.remove();
	if(button8)button8.remove();
	if(button9)button9.click();
	if(button10)button10.remove();
	if(no_youtube_channel){no_youtube_channel.parentElement.remove();}
};
setInterval(runFunction,100);
