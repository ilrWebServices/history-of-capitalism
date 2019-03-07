(function ($) {
  Drupal.behaviors.cu_search = {
    attach: function (context, settings) {
      var cx = Drupal.settings.cu_search.cu_search_google_key;
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//www.google.com/cse/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    }
  };
}(jQuery));;
/**
 * @file
 * jpanelmenu.js
 * jpanelmenu JS enabler.
 */

(function($){
	$(document).ready(function(){
		var jPM = $.jPanelMenu({
    		menu: Drupal.settings.jpanelmenu.target,
    		trigger: Drupal.settings.jpanelmenu.trigger,
    		direction: Drupal.settings.jpanelmenu.direction,
    		openPosition: Drupal.settings.jpanelmenu.openPosition,
		});
		//Jurn on the jPanelMenu
		jPM.on();
	});
})(jQuery);;
