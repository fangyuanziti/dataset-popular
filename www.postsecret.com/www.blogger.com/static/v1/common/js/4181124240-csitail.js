var b=!1,g=window,k=document,m="jstiming",n="start",p="addEventListener";if(g[m]){g[m].a={};g[m].b=1;var r=function(c,d,a){var j=c.t[d],i=c.t[n];if(j&&(i||a))return j=c.t[d][0],i=void 0!=a?a:i[0],j-i},s=function(c,d,a){var j=a;a="";g[m].pt&&(a+="&srt="+g[m].pt,delete g[m].pt);try{g.external&&g.external.tran?a+="&tran="+g.external.tran:g.gtbExternal&&g.gtbExternal.tran?a+="&tran="+g.gtbExternal.tran():g.chrome&&g.chrome.csi&&(a+="&tran="+g.chrome.csi().tran)}catch(i){}var e=g.chrome;if(e&&(e=e.loadTimes)){e().wasFetchedViaSpdy&&(a+="&p=s");if(e().wasNpnNegotiated){a+="&npn=1";
var f=e().npnNegotiatedProtocol;f&&(a+="&npnv="+(encodeURIComponent||escape)(f))}e().wasAlternateProtocolAvailable&&(a+="&apa=1")}var l=c.t,y=l[n],e=[],f=[],h;for(h in l)if("start"!=h&&0!=h.indexOf("_")){var q=l[h][1];q?l[q]&&f.push(h+"."+r(c,h,l[q][0])):y&&e.push(h+"."+r(c,h))}delete l[n];if(d)for(var t in d)a+="&"+t+"="+d[t];(h=j)||(h="https://csi.gstatic.com/csi");c=[h,"?v=3","&s="+(g[m].sn||"blogger")+"&action=",c.name,f.length?"&it="+f.join(","):"","",a,"&rt=",e.join(",")].join("");if(!c)return"";
h=new Image;var u=g[m].b++;g[m].a[u]=h;h.onload=h.onerror=function(){g[m]&&delete g[m].a[u]};h.src=c;h=null;return c};g[m].report=function(c,d,a){if("prerender"==k.webkitVisibilityState){var j="webkitvisibilitychange",i=b,e=function(){if(!i){d?d.prerender="1":d={prerender:"1"};var f;"prerender"==k.webkitVisibilityState?f=b:(s(c,d,a),f=!0);f&&(i=!0,k.removeEventListener(j,e,b))}};k[p](j,e,b);return""}return s(c,d,a)}};var v;var x=function(c){g[m]&&(g[m].load.tick(c),"ol"==c&&w())};x("bundleJsStart");var z=function(c,d){g[m].load.name=c;v=d;var a,j=x,i="ol";a=function(){return j.call("",i)};var e=g,f="load";e[p]?e[p](f,a,b):e.attachEvent("on"+f,a);e=g;f="beforeunload";a=w;e[p]?e[p](f,a,b):e.attachEvent("on"+f,a);x("prt")};g.BLOG_initCsi=z;
var w=function(){var c=g[m].load,d;if(d=c.t[n]){var a;d=0;for(a in c.t)d++;a=d;d=1<a}if(d){a={};d=["blogger_csi_e","blogger_web_fonts_inconsolata_exp_enabled","blogger_web_fonts_droid_exp_enabled","blogger_web_fonts_exp_disabled"];for(var j=d.length,i=0;i<j;i++){var e=d[i];if(e in g){a.e=g[e];break}}g[m].report(c,a,v);for(var f in c.t)"start"!=f&&delete c.t[f]}};
