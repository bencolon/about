var css_browser_selector = function() 
{
	var ua=navigator.userAgent.toLowerCase(),
		is=function(t){ return ua.indexOf(t) != -1; },
		h=document.getElementsByTagName('html')[0],
		b=(!(/opera|webtv/i.test(ua))&&/msie (\d)/.test(ua))?('ie ie'+RegExp.$1):is('gecko/')? 'gecko':is('opera/9')?'opera opera9':/opera (\d)/.test(ua)?'opera opera'+RegExp.$1:is('konqueror')?'konqueror':is('applewebkit/')?'webkit safari':is('mozilla/')?'gecko':'',
		os=(is('x11')||is('linux'))?' linux':is('mac')?' mac':is('win')?' win':'';
	var c=b+os+' js';
	h.className += h.className?' '+c:c;
}();

window.addEvent('domready', function()
{
	var more = [];
	
	$$('.more').each(function(div) {
		more.push(new Fx.Slide(div).hide());
		div.setStyle('display','block');
	});
	
	$('morelink').addEvent('click', function(e) {
		this.set('html', this.get('html').clean() == 'more' ? 'less' : 'more');
		more.each(function(div) { div.toggle(); })
	});
	
});
