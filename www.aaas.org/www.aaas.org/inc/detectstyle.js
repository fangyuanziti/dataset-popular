var browser     = '';
var version     = '';
/* var entrance    = '';
   var cond        = ''; */

if (browser == '') {
	if (navigator.appName.indexOf('Microsoft') != -1)
	browser = 'IE'
	else if (navigator.appName.indexOf('Netscape') != -1)
	browser = 'Netscape'
	else browser = 'IE';
}

if (version == '') {
	version= navigator.appVersion;
	paren = version.indexOf('(');
	whole_version = navigator.appVersion.substring(0,paren-1);
	version = parseInt(whole_version);
}
