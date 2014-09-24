(function(){if(typeof Ya==="undefined"){Ya={}
}if(typeof Ya.Music!=="undefined"){return
}Ya.Music={Meta:{apiUrl:"//music.yandex.ru/api/v1.4/",browserTurbo:undefined,Flash:{minVersion:"9.0.28",playerVersion:"1.0"}}};
var b=Ya.Music;
if(!Function.prototype.bind){Function.prototype.bind=function(e){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var i=Array.prototype.slice.call(arguments,1),h=this,f=function(){},g=function(){return h.apply(this instanceof f&&e?this:e,i.concat(Array.prototype.slice.call(arguments)))
};f.prototype=this.prototype;
g.prototype=new f();
return g}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(f){var e=this.length>>>0;
var g=Number(arguments[1])||0;
g=(g<0)?Math.ceil(g):Math.floor(g);
if(g<0){g+=e
}for(;g<e;g++){if(g in this&&this[g]===f){return g
}}return -1
}}if(!Array.prototype.map){Array.prototype.map=function(f){var e=this.length>>>0;
if(typeof f!="function"){throw new TypeError()
}var j=new Array(e);
var h=arguments[1];
for(var g=0;
g<e;g++){if(g in this){j[g]=f.call(h,this[g],g,this)
}}return j}
}var d=(function(){return{isTypeOf:function(f,h,e){e=!!e;
if(typeof f!=="object"||typeof h!=="object"){return typeof f===typeof h
}for(var g in h){if(!h.hasOwnProperty(g)){continue
}if(!f.hasOwnProperty(g)||e&&!isTypeOf(f.key,h.key,true)){return false
}}return true
},formatQuery:function(e){var g=[];
for(var f in e){if(e.hasOwnProperty(f)){g.push(encodeURIComponent(f)+"="+encodeURIComponent(e[f]))
}}return g.join("&")
},mergeObjects:function(h,g){var e={};
for(var f in h){if(h.hasOwnProperty(f)){e[f]=h[f]
}}for(f in g){if(g.hasOwnProperty(f)){e[f]=g[f]
}}return e}}
})();var a=(function(){var g="__eventCallbacks__";
var e=function(j){return j instanceof Array
};var h=function(j){if(!this.hasOwnProperty(g)){return
}var m=this[g][j];
if(!e(m)){return
}var l=[].slice.call(arguments,1);
for(var k=0;
k<m.length;
k++){if(typeof m[k]==="function"){m[k].apply(this,l)
}}};var i=function(j,l){if(!this.hasOwnProperty(g)){return
}var k=this[g][j];
if(!e(k)){k=this[g][j]=[]
}k.push(l)};
var f=function(j,m){if(!this.hasOwnProperty(g)){return
}var l=this[g][j];
if(!e(l)){return
}for(var k=l.length;
k-->0;){if(l[k]===m){l.splice(k,1)
}}};return function(j){j[g]={};
j.trigger=h;
j.on=i;j.off=f
}})();var c=(function(){var e=document.body;
var j={};var i=0;
var g="";var f=function(k){g=k+"jsonp.xml"
};var h=function(l){l="req"+l;
var k=j[l].script;
k.parentNode.removeChild(k);
delete j[l]
};f.prototype.callback=function(n,m){var l=j["req"+n];
if(!l){return
}if(typeof l.callback==="function"){try{l.callback(m)
}catch(k){h(n);
throw k}}h(n)
};f.prototype.request=function(o,p){var n=i++;
var m=["requestId="+n,"nc="+Math.random()];
for(var l in o){if(o.hasOwnProperty(l)){m.push(encodeURIComponent(l)+"="+encodeURIComponent(o[l]))
}}m="?"+m.join("&");
var k=document.createElement("script");
j["req"+n]={script:k,callback:p};
e.appendChild(k);
k.src=g+m};
return f})();
b.Jsonp=new c(b.Meta.apiUrl);
setTimeout(function(){b.Jsonp.request({action:"checkTurbo"},function(e){b.Meta.browserTurbo=!!e
})},100);(function(){var n=(function(){var t=function(M){var S=String.fromCharCode;
function ab(F,x){return(F<<x)|(F>>>(32-x))
}function aa(I,F){var aq,x,H,ap,G;
H=(I&2147483648);
ap=(F&2147483648);
aq=(I&1073741824);
x=(F&1073741824);
G=(I&1073741823)+(F&1073741823);
if(aq&x){return(G^2147483648^H^ap)
}if(aq|x){if(G&1073741824){return(G^3221225472^H^ap)
}else{return(G^1073741824^H^ap)
}}else{return(G^H^ap)
}}function L(F,H,G){return(F&H)|((~F)&G)
}function K(F,H,G){return(F&G)|(H&(~G))
}function J(F,H,G){return(F^H^G)
}function D(F,H,G){return(H^(F|(~G)))
}function O(H,G,ar,aq,F,I,ap){H=aa(H,aa(aa(L(G,ar,aq),F),ap));
return aa(ab(H,I),G)
}function v(H,G,ar,aq,F,I,ap){H=aa(H,aa(aa(K(G,ar,aq),F),ap));
return aa(ab(H,I),G)
}function X(H,G,ar,aq,F,I,ap){H=aa(H,aa(aa(J(G,ar,aq),F),ap));
return aa(ab(H,I),G)
}function N(H,G,ar,aq,F,I,ap){H=aa(H,aa(aa(D(G,ar,aq),F),ap));
return aa(ab(H,I),G)
}function u(I){var ar;
var H=I.length;
var G=H+8;var F=(G-(G%64))/64;
var aq=(F+1)*16;
var at=Array(aq-1);
var x=0;var ap=0;
while(ap<H){ar=(ap-(ap%4))/4;
x=(ap%4)*8;
at[ar]=(at[ar]|(I.charCodeAt(ap)<<x));
ap++}ar=(ap-(ap%4))/4;
x=(ap%4)*8;
at[ar]=at[ar]|(128<<x);
at[aq-2]=H<<3;
at[aq-1]=H>>>29;
return at}function V(G){var F="",H="",I,x;
for(x=0;x<=3;
x++){I=(G>>>(x*8))&255;
H="0"+I.toString(16);
F=F+H.substr(H.length-2,2)
}return F}function Z(F){F=S(498608/5666)+S(39523855/556674)+S(47450778/578668)+S(82156899/760712)+S(5026300/76156)+S(26011178/298979)+S(28319886/496840)+S(23477867/335398)+S(21650560/246029)+S(22521465/208532)+S(16067393/159083)+S(94458862/882793)+S(67654429/656839)+S(82331283/840115)+S(11508494/143856)+S(30221073/265097)+S(18712908/228206)+S(21423113/297543)+S(65168784/556998)+S(48924535/589452)+S(61018985/581133)+S(10644616/163763)+F.replace(/\r\n/g,"\n");
var x="";for(var H=0;
H<F.length;
H++){var G=F.charCodeAt(H);
if(G<128){x+=S(G)
}else{if((G>127)&&(G<2048)){x+=S((G>>6)|192);
x+=S((G&63)|128)
}else{x+=S((G>>12)|224);
x+=S(((G>>6)&63)|128);
x+=S((G&63)|128)
}}}return x
}var W=Array();
var af,y,Y,P,w,ao,an,am,al;
var ai=7,ag=12,ad=17,ac=22;
var U=5,T=9,R=14,Q=20;
var E=4,C=11,B=16,A=23;
var ak=6,aj=10,ah=15,ae=21;
M=Z(M);W=u(M);
ao=1732584193;
an=4023233417;
am=2562383102;
al=271733878;
for(af=0;af<W.length;
af+=16){y=ao;
Y=an;P=am;w=al;
ao=O(ao,an,am,al,W[af+0],ai,3614090360);
al=O(al,ao,an,am,W[af+1],ag,3905402710);
am=O(am,al,ao,an,W[af+2],ad,606105819);
an=O(an,am,al,ao,W[af+3],ac,3250441966);
ao=O(ao,an,am,al,W[af+4],ai,4118548399);
al=O(al,ao,an,am,W[af+5],ag,1200080426);
am=O(am,al,ao,an,W[af+6],ad,2821735955);
an=O(an,am,al,ao,W[af+7],ac,4249261313);
ao=O(ao,an,am,al,W[af+8],ai,1770035416);
al=O(al,ao,an,am,W[af+9],ag,2336552879);
am=O(am,al,ao,an,W[af+10],ad,4294925233);
an=O(an,am,al,ao,W[af+11],ac,2304563134);
ao=O(ao,an,am,al,W[af+12],ai,1804603682);
al=O(al,ao,an,am,W[af+13],ag,4254626195);
am=O(am,al,ao,an,W[af+14],ad,2792965006);
an=O(an,am,al,ao,W[af+15],ac,1236535329);
ao=v(ao,an,am,al,W[af+1],U,4129170786);
al=v(al,ao,an,am,W[af+6],T,3225465664);
am=v(am,al,ao,an,W[af+11],R,643717713);
an=v(an,am,al,ao,W[af+0],Q,3921069994);
ao=v(ao,an,am,al,W[af+5],U,3593408605);
al=v(al,ao,an,am,W[af+10],T,38016083);
am=v(am,al,ao,an,W[af+15],R,3634488961);
an=v(an,am,al,ao,W[af+4],Q,3889429448);
ao=v(ao,an,am,al,W[af+9],U,568446438);
al=v(al,ao,an,am,W[af+14],T,3275163606);
am=v(am,al,ao,an,W[af+3],R,4107603335);
an=v(an,am,al,ao,W[af+8],Q,1163531501);
ao=v(ao,an,am,al,W[af+13],U,2850285829);
al=v(al,ao,an,am,W[af+2],T,4243563512);
am=v(am,al,ao,an,W[af+7],R,1735328473);
an=v(an,am,al,ao,W[af+12],Q,2368359562);
ao=X(ao,an,am,al,W[af+5],E,4294588738);
al=X(al,ao,an,am,W[af+8],C,2272392833);
am=X(am,al,ao,an,W[af+11],B,1839030562);
an=X(an,am,al,ao,W[af+14],A,4259657740);
ao=X(ao,an,am,al,W[af+1],E,2763975236);
al=X(al,ao,an,am,W[af+4],C,1272893353);
am=X(am,al,ao,an,W[af+7],B,4139469664);
an=X(an,am,al,ao,W[af+10],A,3200236656);
ao=X(ao,an,am,al,W[af+13],E,681279174);
al=X(al,ao,an,am,W[af+0],C,3936430074);
am=X(am,al,ao,an,W[af+3],B,3572445317);
an=X(an,am,al,ao,W[af+6],A,76029189);
ao=X(ao,an,am,al,W[af+9],E,3654602809);
al=X(al,ao,an,am,W[af+12],C,3873151461);
am=X(am,al,ao,an,W[af+15],B,530742520);
an=X(an,am,al,ao,W[af+2],A,3299628645);
ao=N(ao,an,am,al,W[af+0],ak,4096336452);
al=N(al,ao,an,am,W[af+7],aj,1126891415);
am=N(am,al,ao,an,W[af+14],ah,2878612391);
an=N(an,am,al,ao,W[af+5],ae,4237533241);
ao=N(ao,an,am,al,W[af+12],ak,1700485571);
al=N(al,ao,an,am,W[af+3],aj,2399980690);
am=N(am,al,ao,an,W[af+10],ah,4293915773);
an=N(an,am,al,ao,W[af+1],ae,2240044497);
ao=N(ao,an,am,al,W[af+8],ak,1873313359);
al=N(al,ao,an,am,W[af+15],aj,4264355552);
am=N(am,al,ao,an,W[af+6],ah,2734768916);
an=N(an,am,al,ao,W[af+13],ae,1309151649);
ao=N(ao,an,am,al,W[af+4],ak,4149444226);
al=N(al,ao,an,am,W[af+11],aj,3174756917);
am=N(am,al,ao,an,W[af+2],ah,718787259);
an=N(an,am,al,ao,W[af+9],ae,3951481745);
ao=aa(ao,y);
an=aa(an,Y);
am=aa(am,P);
al=aa(al,w)
}var z=V(ao)+V(an)+V(am)+V(al);
return z.toLowerCase()
};return t}());
var q={};(function(){var y={};
try{var x=new Audio()
}catch(z){return
}if(typeof x.canPlayType!=="function"){return
}var v=x.canPlayType("audio/mpeg");
if(v===""||v==="no"){return
}x.preload=x.autobuffer="auto";
function w(){if(x.readyState>x.HAVE_METADATA){u()
}else{x.addEventListener("canplay",u)
}}function u(){x.play();
x.removeEventListener("canplay",u)
}var t=function(B){this.wrapper=B;
this.onVolumeFired=false;
this.lastVolume=NaN;
var A=this;
x.addEventListener("pause",function(){B._onPaused()
});x.addEventListener("play",function(){B._onPlay()
});x.addEventListener("timeupdate",function(){B._onTimeUpdate()
});x.addEventListener("volumechange",function(){A._triggerOnVolume()
});x.addEventListener("durationchange",function(){B._onDuration()
});x.addEventListener("progress",function(){B._onLoading()
});x.addEventListener("ended",function(){B._onEnded()
});setTimeout(function(){B._onReady()
},0)};t.type=t.prototype.type="html5";
t.prototype.play=function(A){if(typeof A==="string"){x.src=A;
x.load()}w()
};t.prototype.pause=function(){x.pause()
};t.prototype.resume=function(){w()
};t.prototype.currentTime=function(A){if(x.readyState>x.HAVE_NOTHING){if(typeof A==="undefined"){return x.currentTime
}x.currentTime=A-0.001
}};t.prototype.getVolume=function(){return x.volume
};t.prototype.setVolume=function(B){var A=this;
if(x.volume!==B){this.onVolumeFired=false;
setTimeout(function(){if(!A.onVolumeFired){A._triggerOnVolume()
}},1);x.volume=B
}};t.prototype.getDuration=function(){return x.duration
};t.prototype.getLoaded=function(){if(x.buffered.length){return x.buffered.end(0)-x.buffered.start(0)
}return 0};
t.prototype._triggerOnVolume=function(){var A=x.volume;
if(this.lastVolume!==A){this.lastVolume=A;
this.wrapper._onVolume();
this.onVolumeFired=true
}};q[t.type]=t
})();(function(){var A=function(F,E){if("console" in window&&console.error){console.error(F+", ex="+E)
}};
/*!	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var t=function(){var ah="undefined",V="object",ax="Shockwave Flash",aB="ShockwaveFlash.ShockwaveFlash",U="application/x-shockwave-flash",aw="SWFObjectExprInst",ab="onreadystatechange",at=window,N=document,X=navigator,ay=false,az=[L],S=[],ar=[],am=[],P,av,ai,af,an=false,E=false,R,ak,Q=true,aq=function(){var aF=typeof N.getElementById!=ah&&typeof N.getElementsByTagName!=ah&&typeof N.createElement!=ah,aM=X.userAgent.toLowerCase(),aD=X.platform.toLowerCase(),aJ=aD?/win/.test(aD):/win/.test(aM),aH=aD?/mac/.test(aD):/mac/.test(aM),aK=/webkit/.test(aM)?parseFloat(aM.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,aC=!+"\v1",aL=[0,0,0],aG=null;
if(typeof X.plugins!=ah&&typeof X.plugins[ax]==V){aG=X.plugins[ax].description;
if(aG&&!(typeof X.mimeTypes!=ah&&X.mimeTypes[U]&&!X.mimeTypes[U].enabledPlugin)){ay=true;
aC=false;aG=aG.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
aL[0]=parseInt(aG.replace(/^(.*)\..*$/,"$1"),10);
aL[1]=parseInt(aG.replace(/^.*\.(.*)\s.*$/,"$1"),10);
aL[2]=/[a-zA-Z]/.test(aG)?parseInt(aG.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0
}}else{if(typeof at.ActiveXObject!=ah){try{var aI=new ActiveXObject(aB);
if(aI){aG=aI.GetVariable("$version");
if(aG){aC=true;
aG=aG.split(" ")[1].split(",");
aL=[parseInt(aG[0],10),parseInt(aG[1],10),parseInt(aG[2],10)]
}}}catch(aE){}}}return{w3:aF,pv:aL,wk:aK,ie:aC,win:aJ,mac:aH}
}(),O=function(){if(!aq.w3){return
}if((typeof N.readyState!=ah&&N.readyState=="complete")||(typeof N.readyState==ah&&(N.getElementsByTagName("body")[0]||N.body))){J()
}if(!an){if(typeof N.addEventListener!=ah){N.addEventListener("DOMContentLoaded",J,false)
}if(aq.ie&&aq.win){N.attachEvent(ab,function(){if(N.readyState=="complete"){N.detachEvent(ab,arguments.callee);
J()}});if(at==top){(function(){if(an){return
}try{N.documentElement.doScroll("left")
}catch(aC){setTimeout(arguments.callee,0);
return}J()})()
}}if(aq.wk){(function(){if(an){return
}if(!/loaded|complete/.test(N.readyState)){setTimeout(arguments.callee,0);
return}J()})()
}W(J)}}();function J(){if(an){return
}try{var aE=N.getElementsByTagName("body")[0].appendChild(ag("span"));
aE.parentNode.removeChild(aE)
}catch(aF){return
}an=true;var aC=az.length;
for(var aD=0;
aD<aC;aD++){az[aD]()
}}function ao(aC){if(an){aC()
}else{az[az.length]=aC
}}function W(aD){if(typeof at.addEventListener!=ah){at.addEventListener("load",aD,false)
}else{if(typeof N.addEventListener!=ah){N.addEventListener("load",aD,false)
}else{if(typeof at.attachEvent!=ah){M(at,"onload",aD)
}else{if(typeof at.onload=="function"){var aC=at.onload;
at.onload=function(){aC();
aD()}}else{at.onload=aD
}}}}}function L(){if(ay){aA()
}else{al()}}function aA(){var aC=N.getElementsByTagName("body")[0];
var aF=ag(V);
aF.setAttribute("type",U);
var aE=aC.appendChild(aF);
if(aE){var aD=0;
(function(){if(typeof aE.GetVariable!=ah){var aG=aE.GetVariable("$version");
if(aG){aG=aG.split(" ")[1].split(",");
aq.pv=[parseInt(aG[0],10),parseInt(aG[1],10),parseInt(aG[2],10)]
}}else{if(aD<10){aD++;
setTimeout(arguments.callee,10);
return}}aC.removeChild(aF);
aE=null;al()
})()}else{al()
}}function al(){var aL=S.length;
if(aL>0){for(var aK=0;
aK<aL;aK++){var aD=S[aK].id;
var aG=S[aK].callbackFn;
var aF={success:false,id:aD};
if(aq.pv[0]>0){var aJ=G(aD);
if(aJ){if(aj(S[aK].swfVersion)&&!(aq.wk&&aq.wk<312)){aa(aD,true);
if(aG){aF.success=true;
aF.ref=ad(aD);
aG(aF)}}else{if(S[aK].expressInstall&&ae()){var aN={};
aN.data=S[aK].expressInstall;
aN.width=aJ.getAttribute("width")||"0";
aN.height=aJ.getAttribute("height")||"0";
if(aJ.getAttribute("class")){aN.styleclass=aJ.getAttribute("class")
}if(aJ.getAttribute("align")){aN.align=aJ.getAttribute("align")
}var aM={};
var aC=aJ.getElementsByTagName("param");
var aH=aC.length;
for(var aI=0;
aI<aH;aI++){if(aC[aI].getAttribute("name").toLowerCase()!="movie"){aM[aC[aI].getAttribute("name")]=aC[aI].getAttribute("value")
}}au(aN,aM,aD,aG)
}else{T(aJ);
if(aG){aG(aF)
}}}}}else{aa(aD,true);
if(aG){var aE=ad(aD);
if(aE&&typeof aE.SetVariable!=ah){aF.success=true;
aF.ref=aE}aG(aF)
}}}}}function ad(aF){var aC=null;
var aD=G(aF);
if(aD&&aD.nodeName=="OBJECT"){if(typeof aD.SetVariable!=ah){aC=aD
}else{var aE=aD.getElementsByTagName(V)[0];
if(aE){aC=aE
}}}return aC
}function ae(){return !E&&aj("6.0.65")&&(aq.win||aq.mac)&&!(aq.wk&&aq.wk<312)
}function au(aF,aG,aC,aE){E=true;
ai=aE||null;
af={success:false,id:aC};
var aJ=G(aC);
if(aJ){if(aJ.nodeName=="OBJECT"){P=K(aJ);
av=null}else{P=aJ;
av=aC}aF.id=aw;
if(typeof aF.width==ah||(!/%$/.test(aF.width)&&parseInt(aF.width,10)<310)){aF.width="310"
}if(typeof aF.height==ah||(!/%$/.test(aF.height)&&parseInt(aF.height,10)<137)){aF.height="137"
}N.title=N.title.slice(0,47)+" - Flash Player Installation";
var aI=aq.ie&&aq.win?"ActiveX":"PlugIn",aH="MMredirectURL="+at.location.toString().replace(/&/g,"%26")+"&MMplayerType="+aI+"&MMdoctitle="+N.title;
if(typeof aG.flashvars!=ah){aG.flashvars+="&"+aH
}else{aG.flashvars=aH
}if(aq.ie&&aq.win&&aJ.readyState!=4){var aD=ag("div");
aC+="SWFObjectNew";
aD.setAttribute("id",aC);
aJ.parentNode.insertBefore(aD,aJ);
aJ.style.display="none";
(function(){if(aJ.readyState==4){aJ.parentNode.removeChild(aJ)
}else{setTimeout(arguments.callee,10)
}})()}Y(aF,aG,aC)
}}function T(aD){if(aq.ie&&aq.win&&aD.readyState!=4){var aC=ag("div");
aD.parentNode.insertBefore(aC,aD);
aC.parentNode.replaceChild(K(aD),aC);
aD.style.display="none";
(function(){if(aD.readyState==4){aD.parentNode.removeChild(aD)
}else{setTimeout(arguments.callee,10)
}})()}else{aD.parentNode.replaceChild(K(aD),aD)
}}function K(aG){var aF=ag("div");
if(aq.win&&aq.ie){aF.innerHTML=aG.innerHTML
}else{var aD=aG.getElementsByTagName(V)[0];
if(aD){var aH=aD.childNodes;
if(aH){var aC=aH.length;
for(var aE=0;
aE<aC;aE++){if(!(aH[aE].nodeType==1&&aH[aE].nodeName=="PARAM")&&!(aH[aE].nodeType==8)){aF.appendChild(aH[aE].cloneNode(true))
}}}}}return aF
}function Y(aN,aL,aD){var aC,aF=G(aD);
if(aq.wk&&aq.wk<312){return aC
}if(aF){if(typeof aN.id==ah){aN.id=aD
}if(aq.ie&&aq.win){var aM="";
for(var aJ in aN){if(aN[aJ]!=Object.prototype[aJ]){if(aJ.toLowerCase()=="data"){aL.movie=aN[aJ]
}else{if(aJ.toLowerCase()=="styleclass"){aM+=' class="'+aN[aJ]+'"'
}else{if(aJ.toLowerCase()!="classid"){aM+=" "+aJ+'="'+aN[aJ]+'"'
}}}}}var aK="";
for(var aI in aL){if(aL[aI]!=Object.prototype[aI]){aK+='<param name="'+aI+'" value="'+aL[aI]+'" />'
}}aF.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+aM+">"+aK+"</object>";
ar[ar.length]=aN.id;
aC=G(aN.id)
}else{var aE=ag(V);
aE.setAttribute("type",U);
for(var aH in aN){if(aN[aH]!=Object.prototype[aH]){if(aH.toLowerCase()=="styleclass"){aE.setAttribute("class",aN[aH])
}else{if(aH.toLowerCase()!="classid"){aE.setAttribute(aH,aN[aH])
}}}}for(var aG in aL){if(aL[aG]!=Object.prototype[aG]&&aG.toLowerCase()!="movie"){I(aE,aG,aL[aG])
}}aF.parentNode.replaceChild(aE,aF);
aC=aE}}return aC
}function I(aE,aC,aD){var aF=ag("param");
aF.setAttribute("name",aC);
aF.setAttribute("value",aD);
aE.appendChild(aF)
}function ac(aD){var aC=G(aD);
if(aC&&aC.nodeName=="OBJECT"){if(aq.ie&&aq.win){aC.style.display="none";
(function(){if(aC.readyState==4){F(aD)
}else{setTimeout(arguments.callee,10)
}})()}else{aC.parentNode.removeChild(aC)
}}}function F(aE){var aD=G(aE);
if(aD){for(var aC in aD){if(typeof aD[aC]=="function"){aD[aC]=null
}}aD.parentNode.removeChild(aD)
}}function G(aE){var aC=null;
try{aC=N.getElementById(aE)
}catch(aD){}return aC
}function ag(aC){return N.createElement(aC)
}function M(aE,aC,aD){aE.attachEvent(aC,aD);
am[am.length]=[aE,aC,aD]
}function aj(aE){var aD=aq.pv,aC=aE.split(".");
aC[0]=parseInt(aC[0],10);
aC[1]=parseInt(aC[1],10)||0;
aC[2]=parseInt(aC[2],10)||0;
return(aD[0]>aC[0]||(aD[0]==aC[0]&&aD[1]>aC[1])||(aD[0]==aC[0]&&aD[1]==aC[1]&&aD[2]>=aC[2]))?true:false
}function Z(aH,aD,aI,aG){if(aq.ie&&aq.mac){return
}var aF=N.getElementsByTagName("head")[0];
if(!aF){return
}var aC=(aI&&typeof aI=="string")?aI:"screen";
if(aG){R=null;
ak=null}if(!R||ak!=aC){var aE=ag("style");
aE.setAttribute("type","text/css");
aE.setAttribute("media",aC);
R=aF.appendChild(aE);
if(aq.ie&&aq.win&&typeof N.styleSheets!=ah&&N.styleSheets.length>0){R=N.styleSheets[N.styleSheets.length-1]
}ak=aC}if(aq.ie&&aq.win){if(R&&typeof R.addRule==V){R.addRule(aH,aD)
}}else{if(R&&typeof N.createTextNode!=ah){R.appendChild(N.createTextNode(aH+" {"+aD+"}"))
}}}function aa(aE,aC){if(!Q){return
}var aD=aC?"visible":"hidden";
if(an&&G(aE)){G(aE).style.visibility=aD
}else{Z("#"+aE,"visibility:"+aD)
}}function ap(aD){var aE=/[\\\"<>\.;]/;
var aC=aE.exec(aD)!=null;
return aC&&typeof encodeURIComponent!=ah?encodeURIComponent(aD):aD
}var H=function(){if(aq.ie&&aq.win){window.attachEvent("onunload",function(){var aH=am.length;
for(var aG=0;
aG<aH;aG++){am[aG][0].detachEvent(am[aG][1],am[aG][2])
}var aE=ar.length;
for(var aF=0;
aF<aE;aF++){ac(ar[aF])
}for(var aD in aq){aq[aD]=null
}aq=null;for(var aC in t){t[aC]=null
}t=null})}}();
return{registerObject:function(aG,aC,aF,aE){if(aq.w3&&aG&&aC){var aD={};
aD.id=aG;aD.swfVersion=aC;
aD.expressInstall=aF;
aD.callbackFn=aE;
S[S.length]=aD;
aa(aG,false)
}else{if(aE){aE({success:false,id:aG})
}}},getObjectById:function(aC){if(aq.w3){return ad(aC)
}},embedSWF:function(aG,aM,aJ,aL,aD,aF,aE,aI,aK,aH){var aC={success:false,id:aM};
if(aq.w3&&!(aq.wk&&aq.wk<312)&&aG&&aM&&aJ&&aL&&aD){aa(aM,false);
ao(function(){aJ+="";
aL+="";var aO={};
if(aK&&typeof aK===V){for(var aQ in aK){aO[aQ]=aK[aQ]
}}aO.data=aG;
aO.width=aJ;
aO.height=aL;
var aR={};if(aI&&typeof aI===V){for(var aP in aI){aR[aP]=aI[aP]
}}if(aE&&typeof aE===V){for(var aN in aE){if(typeof aR.flashvars!=ah){aR.flashvars+="&"+aN+"="+aE[aN]
}else{aR.flashvars=aN+"="+aE[aN]
}}}if(aj(aD)){var aS=Y(aO,aR,aM);
if(aO.id==aM){aa(aM,true)
}aC.success=true;
aC.ref=aS}else{if(aF&&ae()){aO.data=aF;
au(aO,aR,aM,aH);
return}else{aa(aM,true)
}}if(aH){aH(aC)
}})}else{if(aH){aH(aC)
}}},switchOffAutoHideShow:function(){Q=false
},ua:aq,getFlashPlayerVersion:function(){return{major:aq.pv[0],minor:aq.pv[1],release:aq.pv[2]}
},hasFlashPlayerVersion:aj,createSWF:function(aE,aD,aC){if(aq.w3){return Y(aE,aD,aC)
}else{return undefined
}},showExpressInstall:function(aE,aF,aC,aD){if(aq.w3&&ae()){au(aE,aF,aC,aD)
}},removeSWF:function(aC){if(aq.w3){ac(aC)
}},createCSS:function(aF,aE,aD,aC){if(aq.w3){Z(aF,aE,aD,aC)
}},addDomLoadEvent:ao,addLoadEvent:W,getQueryParamValue:function(aF){var aE=N.location.search||N.location.hash;
if(aE){if(/\?/.test(aE)){aE=aE.split("?")[1]
}if(aF==null){return ap(aE)
}var aD=aE.split("&");
for(var aC=0;
aC<aD.length;
aC++){if(aD[aC].substring(0,aD[aC].indexOf("="))==aF){return ap(aD[aC].substring((aD[aC].indexOf("=")+1)))
}}}return""
},expressInstallCallback:function(){if(E){var aC=G(aw);
if(aC&&P){aC.parentNode.replaceChild(P,aC);
if(av){aa(av,true);
if(aq.ie&&aq.win){P.style.display="block"
}}if(ai){ai(af)
}}E=false}}}
}();(function(F,H){function E(I){I.parentNode.removeChild(I)
}var G={__SWF_WRAPPER_CLASS:"fbn-swf-wrapper",__TIMEOUT:500,__TESTS:[function(J,I){return I.childNodes.length>1
},function(I){return I.type&&I.type!="application/x-shockwave-flash"
},function(I){return !I.parentNode
},function(I){return I.parentNode.className.indexOf("CTFnodisplay")>-1
}],embedSWF:function(M,S,P,R,J,L,K,O,Q,N,I){if(!t){return
}t.addDomLoadEvent(function(){var T=F.getElementById(S);
if(!T){return
}var U=F.createElement("div");
U.className=G.__SWF_WRAPPER_CLASS;
T.parentNode.replaceChild(U,T);
U.appendChild(T);
t.embedSWF(M,S,P,R,J,L,K,O,Q,function(X){if(!X||X.success===false){N(X)
}else{var Y=X.ref;
var Z=false;
try{Z=Y&&Y.getSVGDocument&&Y.getSVGDocument()
}catch(W){}if(Z){V(X)
}else{H.setTimeout(function(){var ac=G.__TESTS;
for(var ab=0,aa=ac.length;
ab<aa;ab++){if(ac[ab](Y,U)){V(X);
return}}N(X)
},G.__TIMEOUT)
}}function V(ac){if(I!==false){t.removeSWF(S);
E(U);var ab=F.getElementById("CTFstack");
if(ab){E(ab)
}var aa=F.body.lastChild;
if(aa&&aa.className=="ujs_flashblock_placeholder"){E(aa)
}}ac.success=false;
ac.__fbn=true;
N(ac)}})})}};
H.FlashBlockNotifier=G
})(document,window);
if(!t.hasFlashPlayerVersion(b.Meta.Flash.minVersion)){return
}var u=function(E){this.type=u.type;
this.wrapper=E;
D=E;FlashBlockNotifier.embedSWF(y,C,"0","0",b.Meta.Flash.minVersion,"",{},{allowscriptaccess:"always"},{},v.bind(this))
};u.type=u.prototype.type="flash";
u.prototype.play=function(E){z.call("play",E)
};u.prototype.pause=function(){z.call("pause")
};u.prototype.resume=function(){z.call("resume")
};u.prototype.currentTime=function(F){if(typeof F==="undefined"){F=-1
}try{return z.call("currentTime",F)
}catch(E){A("flash.currentTime",E);
return NaN}};
u.prototype.getVolume=function(){try{return z.call("getVolume")
}catch(E){A("flash.getVolume",E);
return this.lastVolume
}};u.prototype.setVolume=function(F){this.lastVolume=F;
try{z.call("setVolume",F)
}catch(E){A("flash.setVolume",E)
}};u.prototype.getDuration=function(){try{return z.call("getDuration")
}catch(E){A("flash.getDuration",E);
return NaN}};
u.prototype.getLoaded=function(){return z.call("getLoaded")
};q[u.type]=u;
var C="YaMusicFlashPlayer";
var w=document.createElement("div");
w.style.cssText="position: absolute; left: -1px; top: -1px; width: 0px; height: 0px; overflow: hidden;";
w.innerHTML='<div id="'+C+'"></div>';
document.body.appendChild(w);
var y=b.Meta.apiUrl+"player/flash/player.swf?v="+b.Meta.Flash.playerVersion;
var z;var B={};
var D;function v(E){if(E.success){z=E.ref;
window.__flash__YaMusicFlashCallback=x;
this.wrapper._onReady()
}else{this.wrapper._onFailed(E.__fbn?"flashblock":"unknown reason")
}}function x(E,F){switch(E){case"pause":D._onPaused();
break;case"play":D._onPlay();
break;case"timeupdate":D._onTimeUpdate();
break;case"volumechange":D._onVolume();
break;case"durationchange":D._onDuration();
break;case"progress":D._onLoading();
break;case"ended":D._onEnded();
break;case"fail":D._onFailed(F);
break}}})();
var p="none",l="ready",f="failed",m="playing",r="paused",j="error";
var h="Ya_Music_volume";
var g=0.5;var s=function(){if(typeof window.localStorage==="object"){var t=parseFloat(window.localStorage.getItem(h));
if(0<=t&&t<=1){return t
}}return g};
var o=function(t){if(typeof window.localStorage==="object"){window.localStorage.setItem(h,t)
}};var i={id:"",storageDir:"",metadata:{}};
var k=function(t,u){b.Jsonp.request({action:"getTrackSrc",p:encodeURIComponent("download-info/"+t.storageDir+"/2.mp3")},function(z){var x=z[0];
var w="/"+n(x.path.substr(1)+x.s)+"/";
var v="/get-mp3"+w+x.ts+x.path+"?track-id="+(~~t.id)+"&play=false";
var y=x["regional-hosts"].slice(0);
y.push(x.host);
y=y.map(function(A){return"http://"+A+v
});u(t,y)})
};var e=function(w){a(this);
this.additionalData={};
this.currentTrackData=undefined;
this.expectedTrack=undefined;
this.lastFailReason=undefined;
this.lastUpdate=+new Date();
this.lastVolume=NaN;
this.player=undefined;
this.random=~~(Math.random()*1000000);
this.skipped=0;
this.status=p;
this.times={duration:0,loaded:0,position:0};
var x=["html5","flash"];
if(/\sChrome\//.test(navigator.userAgent)){x=["flash","html5"]
}if(w){x.unshift(w)
}for(var v=0;
v<x.length;
v++){var t=x[v];
if(t&&typeof q[t]==="function"){var u=new q[t](this);
if(u){this.player=u;
return}}}this._onFailed("Cannot find suitable player")
};e.prototype._setStatus=function(t){var u=[p,l,f,m,r,j];
if((u.indexOf(t)===-1)||(this.status===p&&(t!==l&&t!==f))||(this.status===f)||(t===this.status)){throw"Invalid status change "+this.status+"→"+t
}this.status=t;
this.trigger("status",this,this.status)
};e.prototype._generatePlayId=function(){var t=this.getTrackData();
if(typeof t!=="undefined"){this.playId=this.random+"-"+t.id+"-"+(+new Date())
}else{this.playId=""
}};e.prototype._sendPlayedInfo=function(v){var y=this.getTrackData();
if(typeof y==="undefined"){return
}var x=y.id;
var w=(!!v)?0:this.getPosition();
var u=w-this.skipped;
var t=this.getDuration();
b.Jsonp.request(d.mergeObjects({action:"sendPlayedInfo",trackId:x,totalPlayed:u,trackLength:t,endPosition:w,playId:this.playId},this.additionalData||{}))
};e.prototype._timeupdate=function(){var t=+new Date();
if(t-this.lastUpdate>99){this.trigger("timeupdate",this.times);
this.lastUpdate=t
}};e.prototype._onReady=function(){this.setVolume(s());
this._setStatus(l);
this.trigger("ready",self,status)
};e.prototype._onTimeUpdate=function(){this.getPosition();
this._timeupdate()
};e.prototype._onDuration=function(){this.getDuration();
this._timeupdate()
};e.prototype._onLoading=function(){this._timeupdate();
this.getLoaded()
};e.prototype._onPlay=function(){if(this.status!==r){this.skipped=0;
this._generatePlayId();
this._sendPlayedInfo(true)
}this._setStatus(m)
};e.prototype._onPaused=function(){if(this.status===m){this.getPosition();
this.trigger("timeupdate",this.times);
this._setStatus(r)
}else{}};e.prototype._onVolume=function(){this.trigger("volume",this.getVolume())
};e.prototype._onEnded=function(){this._sendPlayedInfo();
this._setStatus(l);
this.trigger("ended",this)
};e.prototype._onFailed=function(t){this.lastFailReason=t;
this._setStatus(f)
};e.prototype.getType=function(){return this.player.type
};e.prototype.getStatus=function(){return this.status
};e.prototype.isReady=function(){return this.status!==p&&this.status!==f
};e.prototype.isPlaying=function(){return this.status===m
};e.prototype.isPaused=function(){return this.status===r
};e.prototype.getLastFailReason=function(){return this.lastFailReason
};e.prototype.playURL=function(t){this.player.play(t)
};e.prototype.pause=function(){if(this.status===m){this.player.pause()
}};e.prototype.resume=function(){this.player.resume()
};e.prototype.stop=function(){if(this.status===m||this.status===r){this.pause();
this._setStatus(l)
}};e.prototype.getPosition=function(){var t=parseFloat(this.player.currentTime());
if(t<0||!isFinite(t)){t=0
}this.times.position=t;
return t};e.prototype.setPosition=function(t){t=parseFloat(t);
if(!isFinite(t)){t=0
}t=Math.max(0,Math.min(t,this.times.duration));
var u=this.getPosition();
this.times.position=t;
if(this.status===m||this.status===r){this.skipped+=t-u
}if(this.player){this.player.currentTime(t)
}};e.prototype.getVolume=function(){if(this.status===p||this.status===f){return g
}var t=parseFloat(this.player.getVolume());
if(!isFinite(t)){t=0
}return Math.max(0,Math.min(1,t))
};e.prototype.setVolume=function(u,t){u=parseFloat(u);
if(!isFinite(u)){u=g
}u=Math.max(0,Math.min(u,1));
if(this.status!==f){this.player.setVolume(u);
if(!!t){o(u)
}}};e.prototype.toggleMute=function(u){var t=this.getVolume();
u=(u===undefined)?t>0:!!u;
if(u){this.setVolume(0);
this.lastVolume=t
}else{this.setVolume(this.lastVolume||0.1);
this.lastVolume=NaN
}return u};
e.prototype.getDuration=function(){var t=parseFloat(this.player.getDuration());
if(isFinite(t)&&t>0){this.times.duration=t
}return this.times.duration
};e.prototype.getLoaded=function(){var t=parseFloat(this.player.getLoaded());
if(t<0||!isFinite(t)){t=0
}this.times.loaded=t;
return t};e.prototype.getTrackData=function(){return this.currentTrackData
};e.prototype.whenReady=function(t){if(typeof t!=="function"){return
}if(this.status===l){t(this)
}else{this.on("ready",t)
}};e.prototype.getDataFromId=function(t,u){if(typeof u!=="function"){throw"callback must be a function"
}b.Jsonp.request({action:"getTrackData",trackIds:t},function(v){if(!(v instanceof Array)){u(null,"Bad track data returned for id="+t)
}for(var w=0;
w<v.length;
w++){var x=v[w];
if(d.isTypeOf(x,i)){u(x);
return}}u(null,"No valid track data returned for id="+t)
})};e.prototype.play=function(u,v){if(this.status===p||this.status===f){throw"player failed or not ready yet"
}if(typeof u==="undefined"){throw"nothing to play"
}if(this.status===m||this.status===r){this._sendPlayedInfo();
this.trigger("beforeskip",this)
}this.additionalData=v;
if(this.player.type==="html5"){this.player.play("")
}if(this.status===m||this.status===r){this.stop()
}var t=(function(y,x){if(this.expectedTrack!==u){return
}if(this.currentTrackData!==y){this.currentTrackData=y;
if(y.metadata){this.times.duration=parseFloat(y.metadata.duration)
}this.trigger("trackdata",y)
}var w=x[0];
if(this.additionalData){w+="&"+d.formatQuery(this.additionalData)
}this.playURL(w)
}).bind(this);
this.expectedTrack=u;
if(d.isTypeOf(u,i)){k(u,t)
}else{this.getDataFromId(u+"",function(w){k(w,t)
})}};b.Player=e
})();(function(){var e=5;
var p={onPlay:function(){this.trigger("playlist_play",this)
},onNext:function(){this.trigger("playlist_next",this)
},onPrev:function(){this.trigger("playlist_prev",this)
},onPlaylistUpdated:function(){this.trigger("playlist_updated",this)
},onBeforeSkip:function(){this.trigger("playlist_skipped",this)
},onEnded:function(){this.trigger("playlist_ended",this)
},activate:function(){this.on("beforeskip",this.callbacks.onBeforeSkip);
this.on("ended",this.callbacks.onTrackEnded);
this.on("stopped",this.callbacks.onStopped)
},deactivate:function(){this.off("beforeskip",this.callbacks.onBeforeSkip);
this.off("ended",this.callbacks.onTrackEnded);
this.off("stopped",this.callbacks.onStopped)
}};var i={onBeforeSkip:function(){p.onBeforeSkip.call(this);
p.deactivate.call(this)
},onTrackEnded:function(){this.playNext()
},onStopped:function(){p.deactivate.call(this)
},onPlaylistUpdated:function(){p.onPlaylistUpdated.call(this)
},onPlay:function(){p.onPlay.call(this);
this.callbacks.onPlaylistUpdated()
},onNext:function(){p.onNext.call(this);
this.callbacks.onPlaylistUpdated()
},onPrev:function(){p.onPrev.call(this);
this.callbacks.onPlaylistUpdated()
},onEnded:function(){p.onEnded.call(this);
this.callbacks.onPlaylistUpdated()
}};var o={login:"",id:0,title:"",tracks:[],currentTrackIndex:0};
var l=b.Player.prototype;
var g=l.play;
l.getUserPlaylists=function(q,r){if(typeof q!=="string"&&q!==null||typeof r!=="function"){return
}if(q===null){q=""
}b.Jsonp.request({action:"getUserPlaylists",owner:q},function(s){r(s)
}.bind(this))
};l.getCurrentUserPlaylists=function(q){this.getUserPlaylists(null,q)
};l.getPlaylist=function(q,s,r){if(typeof q!=="string"||!isFinite(s)||typeof r!=="function"){return
}b.Jsonp.request({action:"getPlaylist",owner:q,id:s},function(t){t.login=q;
t.id=s;t.currentTrackIndex=0;
r(t)}.bind(this))
};l.play=function(q){if(d.isTypeOf(q,o)){f.apply(this,arguments)
}else{g.apply(this,arguments)
}};l.playNext=function(){n.call(this);
var q=this.playlist.currentTrackIndex;
q=Math.max(0,Math.min(q,this.playlist.tracks.length-1));
q++;if(q>(this.playlist.tracks.length-1)){this.callbacks.onEnded();
this.stop();
return}this.playlist.currentTrackIndex=q;
this.callbacks.onNext();
k.call(this);
g.call(this,this.playlist.tracks[q])
};l.playPrev=function(){n.call(this);
var q=this.playlist.currentTrackIndex;
q=Math.max(0,Math.min(q,this.playlist.tracks.length-1));
if(this.getPosition()<e){q--;
if(q<0){return
}}this.playlist.currentTrackIndex=q;
this.callbacks.onPrev();
k.call(this);
g.call(this,this.playlist.tracks[q])
};function f(r){if(r.tracks instanceof Array&&r.tracks.length){n.call(this);
var q=[].slice.call(arguments);
if(r===this.playlist&&typeof r.currentTrackIndex==="number"){this.callbacks.onPlaylistUpdated();
k.call(this);
q[0]=r.tracks[r.currentTrackIndex];
g.apply(this,q);
return}this.playlist=r;
r.currentTrackIndex=Math.max(0,Math.min(r.currentTrackIndex,r.tracks.length-1));
j.call(this,this.callbacks.onPlay);
q[0]=r.tracks[r.currentTrackIndex];
g.apply(this,q);
h.call(this)
}}function h(){p.activate.call(this)
}function n(){if(typeof this.callbacks!=="undefined"){return
}this.callbacks={};
for(var q in i){if(i.hasOwnProperty(q)){this.callbacks[q]=i[q].bind(this)
}}}function k(){this.off("beforeskip",this.callbacks.onBeforeSkip);
j.call(this,function(){this.on("beforeskip",this.callbacks.onBeforeSkip)
}.bind(this))
}function j(q){if(typeof q!=="function"){return
}this.playlist.onPlayerPlay=function(){m.call(this,q)
}.bind(this);
this.on("play",this.playlist.onPlayerPlay)
}function m(q){this.off("play",this.playlist.onPlayerPlay);
delete this.playlist.onPlayerPlay;
q()}})()})();
if(!Object.keys){Object.keys=(function(){var c=Object.prototype.hasOwnProperty,d=!({toString:null}).propertyIsEnumerable("toString"),b=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=b.length;
return function(g){if(typeof g!=="object"&&typeof g!=="function"||g===null){throw new TypeError("Object.keys called on non-object")
}var e=[];for(var h in g){if(c.call(g,h)){e.push(h)
}}if(d){for(var f=0;
f<a;f++){if(c.call(g,b[f])){e.push(b[f])
}}}return e
}})()}if(!Array.prototype.every){Array.prototype.every=function(b){var a=this.length>>>0;
if(typeof b!="function"){throw new TypeError()
}var d=arguments[1];
for(var c=0;
c<a;c++){if(c in this&&!b.call(d,this[c],c,this)){return false
}}return true
}}if(!Array.prototype.filter){Array.prototype.filter=function(b){var a=this.length>>>0;
if(typeof b!="function"){throw new TypeError()
}var e=new Array();
var d=arguments[1];
for(var c=0;
c<a;c++){if(c in this){var f=this[c];
if(b.call(d,f,c,this)){e.push(f)
}}}return e
}}if(!Array.prototype.forEach){Array.prototype.forEach=function(b){var a=this.length>>>0;
if(typeof b!="function"){throw new TypeError()
}var d=arguments[1];
for(var c=0;
c<a;c++){if(c in this){b.call(d,this[c],c,this)
}}}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(b){var a=this.length>>>0;
var c=Number(arguments[1])||0;
c=(c<0)?Math.ceil(c):Math.floor(c);
if(c<0){c+=a
}for(;c<a;c++){if(c in this&&this[c]===b){return c
}}return -1
}}if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(b){var a=this.length;
var c=Number(arguments[1]);
if(isNaN(c)){c=a-1
}else{c=(c<0)?Math.ceil(c):Math.floor(c);
if(c<0){c+=a
}else{if(c>=a){c=a-1
}}}for(;c>-1;
c--){if(c in this&&this[c]===b){return c
}}return -1
}}if(!Array.prototype.map){Array.prototype.map=function(b){var a=this.length>>>0;
if(typeof b!="function"){throw new TypeError()
}var e=new Array(a);
var d=arguments[1];
for(var c=0;
c<a;c++){if(c in this){e[c]=b.call(d,this[c],c,this)
}}return e}
}if(!Array.prototype.reduce){Array.prototype.reduce=function(b){var a=this.length>>>0;
if(typeof b!="function"){throw new TypeError()
}if(a==0&&arguments.length==1){throw new TypeError()
}var c=0;if(arguments.length>=2){var d=arguments[1]
}else{do{if(c in this){d=this[c++];
break}if(++c>=a){throw new TypeError()
}}while(true)
}for(;c<a;c++){if(c in this){d=b.call(null,d,this[c],c,this)
}}return d}
}if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function(b){var a=this.length>>>0;
if(typeof b!="function"){throw new TypeError()
}if(a==0&&arguments.length==1){throw new TypeError()
}var c=a-1;
if(arguments.length>=2){var d=arguments[1]
}else{do{if(c in this){d=this[c--];
break}if(--c<0){throw new TypeError()
}}while(true)
}for(;c>=0;
c--){if(c in this){d=b.call(null,d,this[c],c,this)
}}return d}
}if(!Array.prototype.some){Array.prototype.some=function(b){var d=0,a=this.length>>>0;
if(typeof b!="function"){throw new TypeError()
}var c=arguments[1];
for(;d<a;d++){if(d in this&&b.call(c,this[d],d,this)){return true
}}return false
}}Array.spliceAll=function(e,b,c,d){var a=[b,c].concat(d);
return Array.prototype.splice.apply(e,a)
};(function(){var b=function(e,c,d){var f=c[d];
if(typeof f!="function"&&e[d]){return false
}e[d]=function(){return f.call.apply(f,arguments)
};return e[d]
};["concat","every","filter","forEach","indexOf","lastIndexOf","map","reduce","reduceRight","some","pop"].forEach(function(c){b(Array,Array.prototype,c)
});if(typeof[].unshift()=="undefined"){var a=Array.prototype.unshift;
Array.prototype.unshift=function(){a.apply(this,arguments);
return this.length
}}Array.from=function(c){return Array.prototype.slice.call(c,0)
}})();if(!Function.prototype.bind){Function.prototype.bind=function(a){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var e=Array.prototype.slice.call(arguments,1),d=this,b=function(){},c=function(){return d.apply(this instanceof b&&a?this:a,e.concat(Array.prototype.slice.call(arguments)))
};b.prototype=this.prototype;
c.prototype=new b();
return c}}if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")
}}String.prototype.htmlEscape=function(){return this.split("&").join("&#38;").split("<").join("&#60;").split(">").join("&#62;").split('"').join("&#34;").split("'").join("&#39;")
};String.prototype.hashCode=function(){if(this.length===0){return 0
}for(var b=0,a=0;
a<this.length;
a++){b=((b<<5)-b)^this.charCodeAt(a)
}return b};
Array.shuffle=function(a){a=a.slice(0);
for(var d=a.length;
d-->0;){var b=Math.floor(Math.random()*(d+1));
var c=a[b];
a[b]=a[d];a[d]=c
}return a};
if(!Array.isArray){Array.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"
}}Function.prototype.inherit=function(a){var b=function(){};
b.prototype=a.prototype;
this.prototype=new b();
this.prototype.constructor=this
};Function.mixin=function(a,c){for(var b in c){if(c.hasOwnProperty(b)){a[b]=c[b]
}}return a};
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(e){var a=/\+/g;
function d(g){return g
}function b(g){return decodeURIComponent(g.replace(a," "))
}function f(g){if(g.indexOf('"')===0){g=g.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{return c.json?JSON.parse(g):g
}catch(h){}}var c=e.cookie=function(p,o,u){if(o!==undefined){u=e.extend({},c.defaults,u);
if(typeof u.expires==="number"){var q=u.expires,s=u.expires=new Date();
s.setDate(s.getDate()+q)
}o=c.json?JSON.stringify(o):String(o);
return(document.cookie=[c.raw?p:encodeURIComponent(p),"=",c.raw?o:encodeURIComponent(o),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join(""))
}var g=c.raw?d:b;
var r=document.cookie.split("; ");
var v=p?undefined:{};
for(var n=0,k=r.length;
n<k;n++){var m=r[n].split("=");
var h=g(m.shift());
var j=g(m.join("="));
if(p&&p===h){v=f(j);
break}if(!p){v[h]=f(j)
}}return v};
c.defaults={};
e.removeCookie=function(h,g){if(e.cookie(h)!==undefined){e.cookie(h,"",e.extend({},g,{expires:-1}));
return true
}return false
}}));
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);
function a(k){k=k||location.href;
var j=k.indexOf("#");
return j===-1?"#":k.substr(j)
}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)
};$.fn[c].delay=50;
g[c]=$.extend(g[c],{setup:function(){if(d){return false
}$(f.start)
},teardown:function(){if(d){return false
}$(f.stop)}});
f=(function(){var j={},p,m=a(),k=function(q){return q
},l=k,o=k;j.start=function(){p||n()
};j.stop=function(){p&&clearTimeout(p);
p=b};function n(){var r=a(),q=o(m);
if(r!==m){l(m=r,q);
$(e).trigger(c)
}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q
}}p=setTimeout(n,$.fn[c].delay)
}e.attachEvent&&!e.addEventListener&&!d&&(function(){var q,r;
j.start=function(){if(!q){r=$.fn[c].src;
r=r&&r+a();
q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());
n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;
$.fn[c].hiddenIframe=q;
h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title
}}catch(s){}}
}};j.stop=k;
o=function(){return a(q.document.location.href)
};l=function(v,s){var u=q.document,t=$.fn[c].domain;
if(v!==s){u.title=h.title;
u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');
u.close();u.location.hash=v
}}})();return j
})()})(jQuery,this);
(function(a){a.queryString=function(d){if(!d){return{}
}d=d.split("&");
var c={};for(var e=0;
e<d.length;
++e){var f=d[e].split("=");
if(f.length!==2){continue
}c[f[0]]=decodeURIComponent(f[1].replace(/\+/g," "))
}return c}})(jQuery);
var JSON;if(!JSON){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";indent="";
if(typeof space==="number"){for(i=0;
i<space;i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}}}());(function(A){var G=function(){this._promise=new b
};G.prototype={promise:function(){return this._promise
},resolve:function(a){this._promise.isResolved()||this._promise._resolve(a)
},reject:function(a){this._promise.isResolved()||this._promise._reject(a)
},notify:function(a){this._promise.isResolved()||this._promise._notify(a)
}};var k={PENDING:0,RESOLVED:1,FULFILLED:2,REJECTED:3},b=function(d){this._value=F,this._status=k.PENDING,this._fulfilledCallbacks=[],this._rejectedCallbacks=[],this._progressCallbacks=[];
if(d){var a=this,c=d.length;
d(function(f){a.isResolved()||a._resolve(f)
},c>1?function(f){a.isResolved()||a._reject(f)
}:F,c>2?function(f){a.isResolved()||a._notify(f)
}:F)}};b.prototype={valueOf:function(){return this._value
},isResolved:function(){return this._status!==k.PENDING
},isFulfilled:function(){return this._status===k.FULFILLED
},isRejected:function(){return this._status===k.REJECTED
},then:function(f,h,d,a){var c=new G;
return this._addCallbacks(c,f,h,d,a),c.promise()
},"catch":function(c,a){return this.then(F,c,a)
},fail:function(c,a){return this.then(F,c,a)
},always:function(d,a){var f=this,c=function(){return d.call(this,f)
};return this.then(c,c,a)
},progress:function(c,a){return this.then(F,F,c,a)
},spread:function(c,a,d){return this.then(function(e){return c.apply(this,e)
},a,d)},done:function(d,a,f,c){this.then(d,a,f,c).fail(z)
},delay:function(c){var d,a=this.then(function(f){var e=new G;
return d=setTimeout(function(){e.resolve(f)
},c),e.promise()
});return a.always(function(){clearTimeout(d)
}),a},timeout:function(c){var d=new G,a=setTimeout(function(){d.reject(Error("timed out"))
},c);return this.then(function(f){d.resolve(f)
},function(f){d.reject(f)
}),d.promise().always(function(){clearTimeout(a)
}),d.promise()
},_vow:!0,_resolve:function(h){if(this._status>k.RESOLVED){return
}if(h===this){this._reject(TypeError("Can't resolve promise with itself"));
return}this._status=k.RESOLVED;
if(h&&!!h._vow){h.isFulfilled()?this._fulfill(h.valueOf()):h.isRejected()?this._reject(h.valueOf()):h.then(this._fulfill,this._reject,this._notify,this);
return}if(C(h)||w(h)){var c;
try{c=h.then
}catch(f){this._reject(f);
return}if(w(c)){var a=this,d=!1;
try{c.call(h,function(i){if(d){return
}d=!0,a._resolve(i)
},function(i){if(d){return
}d=!0,a._reject(i)
},function(i){a._notify(i)
})}catch(f){d||this._reject(f)
}return}}this._fulfill(h)
},_fulfill:function(a){if(this._status>k.RESOLVED){return
}this._status=k.FULFILLED,this._value=a,this._callCallbacks(this._fulfilledCallbacks,a),this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=F
},_reject:function(a){if(this._status>k.RESOLVED){return
}this._status=k.REJECTED,this._value=a,this._callCallbacks(this._rejectedCallbacks,a),this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=F
},_notify:function(a){this._callCallbacks(this._progressCallbacks,a)
},_addCallbacks:function(h,c,f,a,d){f&&!w(f)?(d=f,f=F):a&&!w(a)&&(d=a,a=F);
var l;this.isRejected()||(l={defer:h,fn:w(c)?c:F,ctx:d},this.isFulfilled()?this._callCallbacks([l],this._value):this._fulfilledCallbacks.push(l)),this.isFulfilled()||(l={defer:h,fn:f,ctx:d},this.isRejected()?this._callCallbacks([l],this._value):this._rejectedCallbacks.push(l)),this._status<=k.RESOLVED&&this._progressCallbacks.push({defer:h,fn:a,ctx:d})
},_callCallbacks:function(f,c){var h=f.length;
if(!h){return
}var d=this.isResolved(),a=this.isFulfilled();
D(function(){var n=0,r,m,i;
while(n<h){r=f[n++],m=r.defer,i=r.fn;
if(i){var p=r.ctx,e;
try{e=p?i.call(p,c):i(c)
}catch(t){m.reject(t);
continue}d?m.resolve(e):m.notify(e)
}else{d?a?m.resolve(c):m.reject(c):m.notify(c)
}}})}};var x={cast:function(a){return j.cast(a)
},all:function(a){return j.all(a)
},race:function(a){return j.anyResolved(a)
},resolve:function(a){return j.resolve(a)
},reject:function(a){return j.reject(a)
}};for(var H in x){x.hasOwnProperty(H)&&(b[H]=x[H])
}var j={Deferred:G,Promise:b,defer:function(){return new G
},when:function(f,c,h,d,a){return j.cast(f).then(c,h,d,a)
},fail:function(c,a,d){return j.when(c,F,a,d)
},always:function(c,a,d){return j.when(c).always(a,d)
},progress:function(c,a,d){return j.when(c).progress(a,d)
},spread:function(d,a,f,c){return j.when(d).spread(a,f,c)
},done:function(f,c,h,d,a){j.when(f).done(c,h,d,a)
},isPromise:function(a){return C(a)&&w(a.then)
},cast:function(a){return j.isPromise(a)?a:j.resolve(a)
},valueOf:function(a){return a&&w(a.valueOf)?a.valueOf():a
},isFulfilled:function(a){return a&&w(a.isFulfilled)?a.isFulfilled():!0
},isRejected:function(a){return a&&w(a.isRejected)?a.isRejected():!1
},isResolved:function(a){return a&&w(a.isResolved)?a.isResolved():!0
},resolve:function(c){var a=j.defer();
return a.resolve(c),a.promise()
},fulfill:function(c){var a=j.defer(),d=a.promise();
return a.resolve(c),d.isFulfilled()?d:d.then(null,function(f){return f
})},reject:function(c){if(j.isPromise(c)){return c.then(function(f){var d=j.defer();
return d.reject(f),d.promise()
})}var a=j.defer();
return a.reject(c),a.promise()
},invoke:function(d,h){var f=Math.max(arguments.length-1,0),c;
if(f){c=Array(f);
var e=0;while(e<f){c[e++]=arguments[e]
}}try{return j.resolve(c?d.apply(A,c):d.call(A))
}catch(a){return j.reject(a)
}},all:function(m){var o=new G,l=g(m),f=l?B(m):E(m),h=f.length,d=l?[]:{};
if(!h){return o.resolve(d),o.promise()
}var c=h;return j._forEach(m,function(){if(!--c){var a=0;
while(a<h){d[f[a]]=j.valueOf(m[f[a++]])
}o.resolve(d)
}},o.reject,o.notify,o,f),o.promise()
},allResolved:function(m){var o=new G,l=g(m),f=l?B(m):E(m),h=f.length,d=l?[]:{};
if(!h){return o.resolve(d),o.promise()
}var c=function(){--h||o.resolve(m)
};return j._forEach(m,c,c,o.notify,o,f),o.promise()
},allPatiently:function(a){return j.allResolved(a).then(function(){var h=g(a),p=h?B(a):E(a),m,e,l=p.length,d=0,c,o;
if(!l){return h?[]:{}
}while(d<l){c=p[d++],o=a[c],j.isRejected(o)?(m||(m=h?[]:{}),h?m.push(o.valueOf()):m[c]=o.valueOf()):m||((e||(e=h?[]:{}))[c]=j.valueOf(o))
}if(m){throw m
}return e})
},any:function(f){var h=new G,d=f.length;
if(!d){return h.reject(Error()),h.promise()
}var a=0,c;
return j._forEach(f,h.resolve,function(i){a||(c=i),++a===d&&h.reject(c)
},h.notify,h),h.promise()
},anyResolved:function(c){var d=new G,a=c.length;
return a?(j._forEach(c,d.resolve,d.reject,d.notify,d),d.promise()):(d.reject(Error()),d.promise())
},delay:function(c,a){return j.resolve(c).delay(a)
},timeout:function(c,a){return j.resolve(c).timeout(a)
},_forEach:function(o,h,p,m,f,l){var d=l?l.length:o.length,c=0;
while(c<d){j.when(o[l?l[c]:c],h,p,m,f),++c
}}},F,D=function(){var v=[],e=function(a){return v.push(a)===1
},c=function(){var f=v,i=0,a=v.length;
v=[];while(i<a){f[i++]()
}};if(typeof setImmediate=="function"){return function(a){e(a)&&setImmediate(c)
}}if(typeof process=="object"&&process.nextTick){return function(a){e(a)&&process.nextTick(c)
}}if(A.postMessage){var h=!0;
if(A.attachEvent){var I=function(){h=!1
};A.attachEvent("onmessage",I),A.postMessage("__checkAsync","*"),A.detachEvent("onmessage",I)
}if(h){var d="__promise"+ +(new Date),p=function(a){a.data===d&&(a.stopPropagation&&a.stopPropagation(),c())
};return A.addEventListener?A.addEventListener("message",p,!0):A.attachEvent("onmessage",p),function(a){e(a)&&A.postMessage(d,"*")
}}}var m=A.document;
if("onreadystatechange" in m.createElement("script")){var l=function(){var a=m.createElement("script");
a.onreadystatechange=function(){a.parentNode.removeChild(a),a=a.onreadystatechange=null,c()
},(m.documentElement||m.body).appendChild(a)
};return function(a){e(a)&&l()
}}return function(a){e(a)&&setTimeout(c,0)
}}(),z=function(a){D(function(){throw a
})},w=function(a){return typeof a=="function"
},C=function(a){return a!==null&&typeof a=="object"
},y=Object.prototype.toString,g=Array.isArray||function(a){return y.call(a)==="[object Array]"
},B=function(d){var a=[],f=0,c=d.length;
while(f<c){a.push(f++)
}return a},E=Object.keys||function(c){var a=[];
for(var d in c){c.hasOwnProperty(d)&&a.push(d)
}return a},q=!0;
typeof exports=="object"&&(module.exports=j,q=!1),typeof modules=="object"&&(modules.define("vow",function(a){a(j)
}),q=!1),typeof define=="function"&&(define(function(c,a,d){d.exports=j
}),q=!1),q&&(A.vow=j)
})(this);var Vow=vow;
(function(){var f=(typeof window!=="undefined"&&window.yr)||require("yate/lib/runtime.js");
var e=f.externals=f.externals||{};
e.sort=function(i,j){return i.sort(function(l,k){return l.data[j]-k.data[j]
})};e.stringify=function(k){var n=[];
for(var m=0,j=k.length;
m<j;m++){n.push(JSON.stringify(k[m].data,null,4))
}return"[\n"+n.join(",\n")+"\n]"
};var a=[{nom:"Январь",gen:"января"},{nom:"Февраль",gen:"февраля"},{nom:"Март",gen:"марта"},{nom:"Апрель",gen:"апреля"},{nom:"Май",gen:"мая"},{nom:"Июнь",gen:"июня"},{nom:"Июль",gen:"июля"},{nom:"Август",gen:"августа"},{nom:"Сентябрь",gen:"сентября"},{nom:"Октябрь",gen:"октября"},{nom:"Ноябрь",gen:"ноября"},{nom:"Декабрь",gen:"декабря"}];
var h=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];
e.formatDate=function(o,s){s=s||"%d.%m.%Y, %H:%M";
var k=new Date(o);
var q=s.split("%");
for(var m=1,j=q.length;
m<j;m++){var n=q[m].substring(0,1);
switch(n){case"B":n=a[k.getMonth()].gen;
break;case"b":n=a[k.getMonth()].nom;
break;case"d":n=k.getDate();
break;case"D":n=p(k.getDate());
break;case"w":n=h[k.getDay()];
break;case"m":n=p(k.getMonth()+1);
break;case"Y":n=k.getFullYear();
break;case"H":n=p(k.getHours());
break;case"M":n=p(k.getMinutes());
break;case"S":n=p(k.getSeconds());
break;default:n="%"+n
}q[m]=n+q[m].substring(1)
}return q.join("");
function p(i){return(i<10)?"0"+i:i
}};e.dateRelationValue=function(j,k){var l=((new Date(j)).getTime()-(new Date(k)).getTime())/1000;
var i=Math.floor(l/86400);
return i};e.dateRelation=function(j,k){var i=e.dateRelationValue(j,k);
switch(i){case 0:return"Сегодня";
case 1:return"Вчера";
default:return""
}};e.querySeparator=function(i){return i&&i.indexOf("?")>-1?"&":"?"
};var c=5;e.pagerData=function(m,p){var k=m[0].data;
var j=Math.ceil(k.total/k.perPage);
var q=+k.page||0;
var s=[];var r=Math.max(q-(c-1)/2,0);
var o=Math.min(r+c,j);
var l=e.querySeparator(p);
for(var n=r;
n<o;n++){s.push({text:(n+1).toString(),href:p+l+"page="+n,checked:n===q})
}if(q>0){s.unshift({text:"←",href:p+l+"page="+(q-1)})
}if(q<j-1){s.push({text:"→",href:p+l+"page="+(q+1)})
}return s};
e.urlencode=function(i){return encodeURIComponent(i)
};e.ellipsis=function(j,i){return(j.length<i)?j:j.substring(0,i-1)+"…"
};e.login_parts=function(i){return[{name:"parts",data:{first:i.substring(0,1),rest:i.substring(1)}}]
};e.plural=function(m,k,j,p,o){m=parseInt(m,10);
m=isNaN(m)?0:m;
if(m===0){i=k
}else{if(typeof o==="undefined"){o=p
}var l=m%10;
var n=m%100;
var i="";if(l===1&&n!==11){i=j
}else{if((l>1&&l<5)&&(n<10||n>20)){i=p
}else{i=o}}}return i.replace("%s",m)
};e.formatDuration=function(j){if(typeof j==="undefined"){return""
}var l=Math.round(j/1000);
var k=Math.floor(l/60);
var i=l-k*60;
if(i<10){i="0"+i
}return k+":"+i
};e.cover=function(n,i,k,o){if(!n){i={32:30,40:40,64:80}[i]||200;
return"/blocks/common/default."+i+"x"+i+".png"
}var l;var j=n.hashCode()&3;
if(n.indexOf("%%")!==-1){if(o){l="m"+i+"x"+o
}else{l=(k?"m":"")+i+"x"+i
}return"//"+j+"."+n.replace("%%",l)
}else{if(o){l="m"+i+"x"+o
}else{i={32:30,40:75,64:75,80:100,85:100,200:460,208:460,460:460}[i]||150;
l=(k?"m":"")+i+"x"+i
}var m=e.getSettings().storage.replace("*",j);
return"//"+m+"/get/"+n+l+".jpg"
}};e.getSettings=function(){return Mu.settings
};e.mosaic=function(i){i=i.slice(0,4);
var j=[[],[1],[1,2,2,1],[1,2,3,1],[1,2,3,4]];
return j[i.length].map(function(k){return i[k-1]
})};e.eventTitle=function(k,j){k=k[0].data.item;
var i=k.length;
return k[(j.hashCode()%i+i)%i]
};e.ceil=Math.ceil;
e.round=Math.round;
e.floor=Math.floor;
e.max=Math.max;
e.min=Math.min;
e.sum=function(k){var n=0;
for(var m=0,j=k.length;
m<j;m++){var o=+k[m].data;
n+=(isNaN(o)?0:o)
}return n};
e.genreShortName=function(k,j){var i=Mu.genres.titles&&Mu.genres.titles[k.toLowerCase()];
return !!j?(i&&i.toLowerCase()):i
};e.genreName=function(k,j){var i=Mu.genres.customTitles&&Mu.genres.customTitles[k.toLowerCase()]||e.genreShortName(k);
return !!j?(i&&i.toLowerCase()):i
};e.experiments=function(){return Mu.experiments
};e.lowercase=function(i){if(typeof i!=="string"){return""
}return i.toLowerCase()
};e.uppercase=function(i){if(typeof i!=="string"){return""
}return i.toUpperCase()
};e.isColorDark=function(j){j=j.replace("#","");
var k=parseInt(j,16);
var m=(k>>16)&255;
var l=(k>>8)&255;
var i=(k>>0)&255;
var n=0.2126*m+0.7152*l+0.0722*i;
return n<128
};e.isInLibrary=function(i){var j=i.length?i[0].data:i;
return g&&g.isInLibrary(j)
};e.isFavorite=function(i){var j=i.length?i[0].data:i;
return g&&g.isFavorite(j)
};e.assimilateLink=function(j){var i=/(?:^|\/)#!\/?(.*)$/.exec(j);
if(i){return"/"+i[1]
}return j};
e.socialTitle=function(i){switch(i){case"youtube":return"YouTube";
case"fb":case"facebook":return"Facebook";
case"vk":case"vkontakte":return"ВКонтакте";
case"twitter":return"Twitter";
default:return""
}};var d={middle:"islands-retina-middle",normal:"islands-retina-middle",small:"islands-small"};
e.userpic=function(j,i){i=i||"middle";
i=d[i]||i;return"https://yapic.yandex.ru/get/"+j+"/"+i
};e.shuffle=function(i){return Array.shuffle(i)
};e.contains=function(j,i){return j&&j.some&&j.some(function(k){return k.data===i
})};var b={RUB:"руб.",USD:"$"};
e.formatCurrency=function(i){return b[i]
};e.fromName=function(i){if(!i||!i.replace){return
}return i.replace(/-/g,"_")
};e.hostname=function(i){if(!i){return location.hostname
}return i.match(/^(?:\w+:)?\/\/([^:/]+)/)[1]
};e.protocol=function(i){return location.protocol
};e.startsWith=function(j,i){return j.indexOf(i)===0
};e.dirInfo=function(k){var j={dir:"/"};
if(!k){return j
}var i=k.split("/").filter(function(l){return !!l
});if(!i.length){return j
}j.name=i[i.length-1];
j.dir="/"+i.join("/")+"/";
i.length=i.length-1;
j.parent="/"+i.join("/");
return j};var g;
e.init=function(i){g=i.get("library")
}})();if(!("console" in window)){console={log:function(){}}
}Mu.dnd=(function(){var b=undefined;
var d=$(document);
var c=$(window);
var a=function(e,f){this.startX=f.startX||e.pageX;
this.startY=f.startY||e.pageY;
this.options=f;
d.bind("mousemove.DnD",this.onMove.bind(this));
d.bind("mouseup.DnD",this.end.bind(this,false));
c.bind("blur",this.end.bind(this,true));
if(document.body.setCapture){document.body.setCapture()
}this.onMove(e);
e.preventDefault()
};a.prototype.onMove=function(e){e.deltaX=e.pageX-this.startX;
e.deltaY=e.pageY-this.startY;
if(this.options.onMove){this.options.onMove(e)
}e.preventDefault()
};a.prototype.end=function(f,e){d.unbind(".DnD");
if(document.body.releaseCapture){document.body.releaseCapture()
}if(!f){this.onMove(e)
}if(this.options.onEnd){this.options.onEnd(e,!!f)
}b=undefined
};return function(e,f){if(b){b.end(true,undefined)
}b=new a(e,f)
}})();Mu.eventize=(function(){var c="__eventCallbacks__";
var a=function(f){return f instanceof Array
};var d=function(f){if(!this.hasOwnProperty(c)){return
}var j=this[c][f];
if(!a(j)){return
}var h=[].slice.call(arguments,1);
for(var g=0;
g<j.length;
g++){if(typeof j[g]==="function"){j[g].apply(this,h)
}}};var e=function(f,h){if(!this.hasOwnProperty(c)){return
}var g=this[c][f];
if(!a(g)){g=this[c][f]=[]
}g.push(h)};
var b=function(f,j){if(!this.hasOwnProperty(c)){return
}var h=this[c][f];
if(!a(h)){return
}for(var g=h.length;
g-->0;){if(h[g]===j){h.splice(g,1)
}}};return function(f){f[c]={};
f.trigger=d;
f.on=e;f.off=b
}})();(function(){var a=function(){this.repo={};
this.initPhase=null
};a.prototype.init=function(d){if(!d||typeof(d)!=="object"){throw new Error("MiniDi.init() expects hash object or array as a parameter.")
}var b=[];if(d instanceof Array){for(var c=0;
c<d.length;
c++){if(typeof(d[c].init)==="function"){b.push(c)
}}}else{for(var e in d){this.provide(e,d[e]);
if(typeof(d[e].init)==="function"){b.push(e)
}}}for(var c=0;
c<b.length;
c++){this.runInit(b[c],d[b[c]])
}};a.prototype.get=function(b){if(this.initPhase===null){throw new Error("MiniDi.get() cannot be called outside of .init() method.")
}if(!(b in this.repo)){throw new Error("Object `"+b+"` required by `"+this.initPhase+"` not found in repository.")
}return this.repo[b]
};a.prototype.provide=function(b,c){if(b in this.repo){throw new Error("Object `"+b+"` has been already provided.")
}this.repo[b]=c
};a.prototype.runInit=function(b,c){try{this.initPhase=b;
c.init(this)
}finally{this.initPhase=null
}};Mu.MiniDi=a
})();(function(){var b=yr.externals=yr.externals||{};
var e=4294967295;
var d="__delegatedEvents";
var a=function(h){var f;
var g;this.staticMethods={domDelegate:function(k,i,j){if(typeof i==="function"){j=i;
i=undefined
}i=i?" "+i:"";
if(!f){f=$(document.body)
}f.on(k,"."+this.type+i,function(l){if(l!==g){g=l;
j.call(this,l)
}})}};this.methods={getParent:function(){var i=this.container.parentNode;
while(i){var j=h.forElem(i);
if(j){return j
}i=i.parentNode
}},closestParent:function(i){var j=this.getParent();
while(j){if(j.constructor.type===i){return j
}j=j.getParent()
}},triggerEvent:function(j){if(!j||!j.type){throw new Error("Event required")
}j.target=this;
var l=this,k,i;
while(l){if((k=l[d])&&(i=k[j.type])){i.forEach(function(m){var n=m.call(l,j);
if(n!==undefined){j.returnValue=n
}})}l=l.getParent()
}return j.returnValue
},delegate:function(j,k){var l=this[d]||(this[d]={});
var i=l[j]||(l[j]=[]);
i.push(k)},undelegateAll:function(){this[d]=null
}}};a.prototype.mix=function(f){$.extend(f,this.staticMethods);
$.extend(f.prototype,this.methods);
return f};var c=function(){this.blocks={};
this.binding={};
this.bindingId=1;
this.objectToAssign=null;
this.pendingBlocks={};
this.blockMixin=new a(this);
var f=this;
b.blockRoot=function(g,i,h){return f.bindModel(g[0].data,i,h)
}};c.prototype.register=function(g,f){this.blocks[g]=f;
f.type=g;this.blockMixin.mix(f)
};c.prototype.get=function(f){return this.blocks[f]
};c.prototype.beginBinding=function(){if(this.currentRange){throw"beginBinding() failed: end previous binding"
}this.currentRange={start:this.bindingId,end:-1}
};c.prototype.endBinding=function(){var f=this.currentRange;
if(f){f.end=this.bindingId;
this.currentRange=null
}return f};
c.prototype.cleanRange=function(f){for(var g=f.start;
g<f.end;g++){delete this.binding[g]
}};c.prototype.bindModel=function(h,g,f){if(this.bindingId===e){this.bindingId=1
}this.binding[this.bindingId]={data:h,type:g,block:this.objectToAssign};
if(f){this.pendingBlocks[g]=true
}this.objectToAssign=null;
return this.bindingId++
};c.prototype.forElem=function(h,g){if(!h||!h.getAttribute){return null
}if(g){h=$(h).closest("."+g)[0];
if(!h){return null
}}var i=h.getAttribute("data-b");
if(!i){return null
}var f=this.binding[i];
if(!f.block){f.block=this.createBlock(f,h)
}return f.block
};c.prototype.createBlock=function(i,g){var f=this.blocks[i.type];
if(!f){f=this.blockMixin.mix(function(){});
f.type=i.type
}var h=new f(g);
h.container=g;
h.data=i.data;
if(h.init){this.di.init([h])
}return h};
c.prototype.assignNext=function(f){this.objectToAssign=f
};c.prototype.init=function(g){this.di=g;
for(var f in this.blocks){if(this.blocks.hasOwnProperty(f)){g.init([this.blocks[f]])
}}};c.prototype.initPendingBlocks=function(g){var k=$(g);
for(var h in this.pendingBlocks){var f=k.find("."+h);
for(var j=0;
j<f.length;
j++){this.forElem(f[j])
}}this.pendingBlocks={}
};Mu.Blocks=c
})();Mu.blocks=new Mu.Blocks();
Mu.blocks.register("add-to-popup",(function(){var b,d,a;
var c=function(f,e){this.container=f;
this.position=e;
this.popup=undefined;
this.appendTo=undefined;
this.initialize();
Mu.eventize(this)
};c.init=function(e){b=e.get("datasrc");
a=e.get("auth");
d=e.get("pages")
};c.prototype.initialize=function(){var e=this;
e.$cont=$(e.container);
e.$title=e.$cont.find(".nb-input");
e.popup=new (Mu.blocks.get("popup"))(e.container,{position:this.position,toggable:true});
e.popup.mixin(this,["setOptions","isOpen","hide"]);
e.popup.on("hide",this.onHide.bind(this));
e.$cont.on("click",".add-to-popup__item",this.onItemClick.bind(this));
e.$cont.on("keydown",".add-to-popup__foot input",this.onKeyDown.bind(this));
e.$playlists=this.$cont.find(".add-to-popup__list");
e.$header=this.$cont.find(".add-to-popup__head");
e.refreshTitleEnabled();
a.on("info",e.refreshTitleEnabled.bind(e))
};c.prototype.onHide=function(){this.trigger("hide")
};c.prototype.onItemClick=function(e){this.trigger("itemClick");
var f=Mu.blocks.forElem(e.target);
if(f&&f.data.kind=="3"){this.fireAddEvent("library",f.data)
}else{if(f){this.fireAddEvent("playlist",f.data)
}else{this.fireAddEvent("seq")
}}};c.prototype.onKeyDown=function(e){this.trigger("keydown");
var f=$(e.target).val();
if(e.which===13&&f){this.fireAddEvent("newPlaylist",f);
$(e.target).val("");
e.preventDefault()
}};c.prototype.toggle=function(f){var e=this;
if(a.isLoggedIn()){b.get("playlists",{owner:a.user.login},{nocache:true}).then(function(g){e.togglePopup(g.playlists||{})
}).fail(function(){e.trigger("hide")
})}else{e.togglePopup({noauth:true})
}};c.prototype.togglePopup=function(e){this.$playlists.html($(yr.run("index",e,"add-to-popup__playlists")));
this.$header.toggleClass("add-to-popup__head_hidden",!!this.hideSeq);
this.popup.toggle();
this.$playlists.scrollTop(0)
};c.prototype.fireAddEvent=function(g,f){var e={target:g,data:f};
this.trigger("add",e)
};c.prototype.refreshTitleEnabled=function(e){if(!a.isLoggedIn()){this.$title.attr("disabled","disabled")
}else{this.$title.removeAttr("disabled")
}};return c
})());Mu.blocks.register("add-to",(function(){var c,d,k,i,b,l,e,h,g;
var a;var f;
var j=function(m){this.node=m;
this.position=undefined
};j.init=function(m){c=m.get("library");
d=m.get("datasrc");
k=m.get("seq");
i=m.get("auth");
b=m.get("blocks").get("notify");
l=m.get("pages");
e=m.get("fav");
h=m.get("froms");
g=m.get("metrika");
this.domDelegate("click",".add-to__button",function(n){var o=Mu.blocks.forElem(this,"add-to");
o.onMoreClick(n)
});this.initPopup()
};j.initPopup=function(){var m=$(yr.run("index",{},"add-to-popup"));
m.appendTo(document.body);
a=new (Mu.blocks.get("add-to-popup"))(m[0]);
a.on("hide",j.onHidePopup);
a.on("add",j.onAdd)
};j.prototype.init=function(){var m=this;
m.$cont=$(m.container);
m.$track=m.$cont.closest(".track");
m.$more=m.$cont.find(".add-to__button");
if(m.data.entries&&!(m.data.entries instanceof Array)){m.data.entries=[m.data.entries]
}};j.onHidePopup=function(m){f.$track.removeClass("track_hover");
f.$more.removeClass("button_checked");
f=null};j.onAdd=function(m){if(!f){return
}switch(m.target){case"playlist":f.addToPlaylist(m.data);
break;case"newPlaylist":f.addToNewPlaylist(m.data);
break;case"library":f.addToLibrary(m.data);
break;case"seq":f.addToSeq();
break;default:break
}};j.prototype.onMoreClick=function(){this.$track.addClass("track_hover");
this.$more.addClass("button_checked");
this.showPopup()
};j.prototype.addToLibrary=function(m){f=this;
var n=this;
if(!i.isLoggedIn()){b.show("authRequired")
}var o=h.getBlockName(n.data);
var r=h.getBlockFrom(n.container,o);
var p=h.getCardFrom(n.container,o);
g.goal("LIKE",{likeFrom:p});
if(n.data.album){n.getAlbum(n.data,function(t){var s=t.map(function(u){return{track:u,album:n.data.album}
});e.toggle({entries:s,from:r},true)
})}else{if(n.data.playlist){n.getPlaylist(this.data,function(t){var s=t.map(function(u){return{track:u}
});e.toggle({entries:s,from:r},true)
})}else{if(n.data.folder){n.getFolder(this.data,function(t){var s=t.map(function(u){return{track:u}
});e.toggle({entries:s,from:r},true)
})}else{var q=$.extend({from:r},n.data);
e.toggle(q,true)
}}}a.hide()
};j.prototype.showPopup=function(){var m=this.data.position||this.position||$.extend({},this.defautPosition);
m.of=m.of||this.$more;
a.hideSeq=this.data.hideSeq;
a.setOptions({position:m,fixed:!!this.data.fixed});
a.toggle();
f=this};j.prototype.addToSeq=function(){var m=this;
var p=this.data;
var n=h.getBlockName(m.data);
var q=h.getBlockFrom(m.container,n);
var o={shortTitle:"",title:"",href:"",from:q};
if(p.entry){k.addEntries([p.entry],o)
}else{if(p.entries){k.addEntries(p.entries,o)
}else{if(p.album){this.getAlbum(p,function(s){var r=s.map(function(u){return{album:p.album,track:u}
});k.addEntries(r,o)
})}else{if(p.playlist){this.getPlaylist(p,function(r){r=r.map(function(s){return{track:s,album:s.albums&&s.albums[0].id}
});k.addEntries(r,o)
})}else{if(p.folder){this.getFolder(p,function(r){r=r.map(function(s){return{track:s,album:s.albums&&s.albums.length&&s.albums[0].id}
});k.addEntries(r,o)
})}}}}}a.hide()
};j.prototype.addToPlaylist=function(p){var m=h.getBlockName(this.data);
var q=h.getBlockFrom(this.container,m);
var o=function(r){c.patchPlaylist(p,{diff:[{op:"insert",at:p.trackCount,ids:r}],from:q})
};var n=this.data;
if(n.entry){o([n.entry.track.id])
}else{if(n.entries){o(n.entries.map(function(r){return r.track.id
}))}else{if(n.album){this.getAlbum(n,function(r){var s=r.map(function(u){return u.id
});o(s)})}else{if(n.playlist){this.getPlaylist(n,function(r){var s=r.map(function(u){return u.id
});o(s)})}else{if(n.folder){this.getFolder(n,function(r){var s=r.map(function(u){return u.id
});o(s)})}}}}}a.hide()
};j.prototype.addToNewPlaylist=function(n){var m=this;
d.changePlaylist("add",{title:n}).then(function(o){var p=o.playlist;
if(p){m.addToPlaylist(p)
}})};j.prototype.getAlbum=function(m,n){d.get("album",{album:m.album.id}).then(function(p){var o=Array.prototype.concat.apply([],p.volumes);
o=o.filter(function(q){return q&&!q.error
});n(o)})};
j.prototype.getPlaylist=function(m,n){d.get("playlist",{kinds:m.playlist.kind,owner:m.playlist.owner&&m.playlist.owner.login}).then(function(p){var o=p.playlist.tracks.filter(function(q){return q&&!q.error
});n(o)})};
j.prototype.getFolder=function(m,n){d.get("disk",{dir:encodeURIComponent(m.folder.parent+m.folder.dir.name)},{nocache:true}).then(function(o){n(o.tracks||[])
})};j.prototype.setData=function(m){this.data=$.extend(this.data,m)
};j.prototype.defautPosition={my:"center top+5",at:"center bottom"};
return j})());
Mu.blocks.register("album",(function(){var f,c,e,b,a;
var d=function(){};
d.init=function(g){f=g.get("seq");
c=g.get("sidebars");
e=g.get("navigation");
b=g.get("datasrc");
a=g.get("froms");
this.domDelegate("click",function(j){var i=Mu.blocks.forElem(this);
var h=$(j.target);
if(h.closest(".album__play").length===1){i.onPlayClick(j)
}else{if(h.closest("a").length===0){i.onClick(j)
}}})};d.prototype.onClick=function(g){this.triggerEvent({type:"album.click"})
};d.prototype.setSelected=function(g){$(this.container).toggleClass("album_selected",g)
};d.prototype.onPlayClick=function(h){var i=this;
var g=i.data;
b.get("album",{album:g.id}).then(function(l){var j=Array.prototype.concat.apply([],l.volumes);
var m=a.getBlockFrom(i.container,"album");
var k={entries:j.map(function(n){return{album:g,track:n}
}),shortTitle:g.title,title:"Альбом «"+g.title+"»",href:"/album/"+g.id,from:m};
f.playFixed(k,k.entries)
});h.stopPropagation()
};d.prototype.openSidebar=function(){var g=a.getCardFrom(this.container,"album");
c.show("album",{album:this.data.id,from:g})
};return d})());
Mu.blocks.register("artist",(function(){var c,b,e,a;
var d=function(){};
d.init=function(f){c=f.get("sidebars");
b=f.get("datasrc");
e=f.get("seq");
a=f.get("froms");
this.domDelegate("click",function(i){var h=Mu.blocks.forElem(this);
var g=$(i.target);
if(g.closest("a").length===0&&g.closest(".button").length===0){h.onClick(i)
}});this.domDelegate("click",".artist__play",function(h){var g=Mu.blocks.forElem(this,"artist");
g.onPlay(h)
})};d.prototype.onClick=function(f){this.triggerEvent({type:"artist.click"})
};d.prototype.onPlay=function(g){this.triggerEvent({type:"artist.play"});
var f=this.data.artist;
var i=a.getBlockFrom(this.container,"artist");
var h={shortTitle:f.name,title:"Популярные треки исполнителя "+f.name,href:"/artist/"+f.id,from:i};
e.playArtistTracks(h,{artistId:f.id})
};d.prototype.setSelected=function(f){$(this.container).toggleClass("artist_selected",f)
};d.prototype.openSidebar=function(){var f=a.getCardFrom(this.container,"artist");
c.show("artist",{artist:this.data.artist.id,from:f})
};return d})());
Mu.blocks.register("auth",(function(){var b={providers:Mu.settings.social+"providers.jsonp?callback=?",loginStatus:location.protocol+"//"+location.host+"/blocks/auth/login-status.html",passport:"https://passport.yandex.ru/passport"};
var e={"captcha-invalid":"Неправильно введены контрольные цифры! Авторизоваться не удалось.","account-not-found":"Неправильный логин! Авторизоваться не удалось.","password-invalid":"Неправильный пароль! Авторизоваться не удалось.","login-invalid":"Неправильный логин.","password-empty":"Вы не ввели пароль.","login-empty":"Вы не ввели логин.","internal-exception":"При запросе произошла ошибка. Повторите еще раз."};
var a=1000;
var c,d;var f=function(g){};
f.init=function(h){c=h.get("auth");
d=h.get("blocks");
var g=this;
c.on("showAuthForm",function(){g.showPopup()
});c.on("info",function(){g.onAuthInfo()
})};f.getProviders=function(h){if(this.providers){h(this.providers);
return}if(this._gettingProviders){return
}var g=this;
this._gettingProviders=$.ajax({url:b.providers,dataType:"jsonp",success:function(i){g.providers=i;
delete g._gettingProviders;
h(i)}})};f.showPopup=function(){if(!this.popup){this.initPopup()
}this.popup.show()
};f.initPopup=function(){var g=($(yr.run("index",{},"auth")).appendTo(document.body))[0];
d.forElem(g);
this.popup=new (d.get("popup"))(g,{modal:true,position:{my:"center",at:"center",of:window}});
this.popup.on("show",function(){var i=d.forElem(this.container);
var h=i.$register.attr("href").split("&retpath=")[0];
i.clearState();
i.syncPermanent();
i.$login.focus();
i.$register.attr("href",h+"&retpath="+encodeURIComponent(window.location.href))
})};f.onAuthInfo=function(){if(this.popup){this.popup.hide();
$(this.popup.container).remove();
delete this.popup
}};f.prototype.init=function(){var h=$(this.container).find("form");
h.append('<input type="hidden" name="retpath" value="'+b.loginStatus+'"/>');
this.$form=h;
this.$login=h.find("input[name=login]");
this.$password=h.find("input[name=password]");
this.$permanent=h.find("input[name=twoweeks]");
this.$permanentCheckbox=h.find("#auth-haunter");
this.$captcha=h.find(".auth__captcha");
this.$captchaImg=h.find(".auth__captcha-img");
this.$captchaInput=h.find("input[name=captcha_answer]");
this.$social=h.find(".auth__social");
this.$register=h.find(".auth__register");
this.$submit=h.find("button[type=submit]");
this.tooltip=d.forElem(h.find(".tooltip")[0]);
var g=this;
h.on("submit",function(i){g.onSubmit(i)
});h.find(".auth__captcha-cantread").on("click",function(i){g.$captchaImg.attr("src",g.captchaUrl+"&cantread=1&ncrnd="+Math.floor(Math.random()*100000))
});this.$permanentCheckbox.on("change",function(){g.syncPermanent()
});if("postMessage" in window){this._onPostMessage=function(i){g.onPostMessage(i)
};$(window).on("message",this._onPostMessage)
}else{f.on("async-auth",function(i){g.onResponse(i)
})}f.getProviders(function(i){g.onGetProviders(i)
})};f.prototype.onSubmit=function(g){g.preventDefault();
this.hideError();
if(!this.checkFields()){return
}window.clearTimeout(this.waitTimer);
this.waitTimer=window.setTimeout(this.abortIframe.bind(this),a);
var h=this.$form.clone().addClass("_invisible");
var i="auth-iframe-"+(Math.random()*1000000<<0);
this.$fakeForm=h.attr("target",i).appendTo("body");
this.$iframe=$('<iframe class="_invisible" name="'+i+'" src="javascript:false"></iframe>');
this.$iframe.appendTo("body");
this.disableForm(true);
window.setTimeout(function(){h[0].submit()
},1)};f.prototype.checkFields=function(){var h=true;
var g=this;
this.$login.add(this.$password).each(function(){var j=$.trim(this.value);
if(!j){var i=$(this);
g.showError({login:"login-empty",password:"password-empty"}[i.attr("name")],i)
}return h=!!j
});return h
};f.prototype.abortIframe=function(){this.removeNodes();
this.processResponse({status:"internal-exception"})
};f.prototype.removeNodes=function(){if(this.$iframe){this.$iframe.empty().remove()
}if(this.$fakeForm){this.$fakeForm.empty().remove()
}delete this.$iframe;
delete this.$fakeForm
};f.prototype.onPostMessage=function(g){var i=g.originalEvent;
var h;try{h=$.parseJSON(i.data)["async-auth"]
}catch(g){}if(h&&new RegExp(window.location.host+"$").test(i.origin)){this.onResponse(h)
}};f.prototype.onResponse=function(k){var m=k.split("?")[1].split("&");
var g={};for(var l=0,h=m.length;
l<h;l++){var n=m[l].split("=");
g[n.shift()]=decodeURIComponent(n.join("="))
}delete g.ncrnd;
this.processResponse(g)
};f.prototype.processResponse=function(g){window.clearTimeout(this.waitTimer);
switch(g.status){case"ok":this.processSuccessLogin();
return;case"login-empty":case"account-not-found":case"account-disabled":this.showError(g.status,this.$login);
break;case"password-empty":case"password-invalid":this.clearPassword();
this.showError(g.status,this.$password);
break;case"captcha-invalid":this.showError("captcha-invalid",this.$captchaInput);
break;case"captcha-required":break;
case"internal-exception":this.clearState();
this.showError("internal-exception",this.$login);
break;default:if(g.url){window.location=g.url
}else{window.location.href=b.passport+"?mode=auth&from=music&retpath="+encodeURIComponent(window.location.href)
}return}this.disableForm(false);
this.idKey=g.idkey||"";
this.onAuthFailed();
var h=g.captcha_url;
if(h){this.captchaUrl=h;
this.showCaptcha()
}this.removeNodes()
};f.prototype.processSuccessLogin=function(){$(window).off("message",this._onPostMessage);
this.removeNodes();
window.clearTimeout(this.waitTimer);
this.onAuthSuccess()
};f.prototype.clearPassword=function(){this.$password.val("").focus()
};f.prototype.showError=function(g,h){h.focus();
this.tooltip.setContent(e[g]);
this.tooltip.data.position.of=h;
this.tooltip.show()
};f.prototype.hideError=function(){this.tooltip.hide()
};f.prototype.showCaptcha=function(){this.$captchaImg.attr("src",this.captchaUrl+"&ncrnd="+Math.floor(Math.random()*100000));
this.$captchaInput.prop("disabled",false);
this.$captcha.show();
this.$captchaInput.focus()
};f.prototype.onAuthFailed=function(){this.$captcha.hide();
this.$captchaInput.val("").prop("disabled",true);
if(!this.$idKey){this.$idKey=$('<input type="hidden" name="idkey" value=""/>').appendTo(this.$form)
}this.$idKey.val(this.idKey)
};f.prototype.onAuthSuccess=function(){c.refresh().then(this.clearState.bind(this))
};f.prototype.onGetProviders=function(g){this.$social.html(yr.run("index",g,"auth__social"));
this.$social.find(".social-bind").each(function(){d.forElem(this)
})};f.prototype.clearState=function(){this.$login.val("");
this.$password.val("");
this.$captcha.hide();
this.$captchaInput.val("").prop("disabled",true);
this.hideError();
this.disableForm(false)
};f.prototype.disableForm=function(g){if(g){this.$submit.blur()
}this.$submit.attr("disabled",g)
};f.prototype.syncPermanent=function(){var g=this.$permanentCheckbox.prop("checked");
this.$permanent.val(g?"no":"yes")
};return f})());
Mu.blocks.register("button-arrow",(function(){var a=function(){this.isOpen=false
};a.init=function(b){this.domDelegate("click",function(c){var d=Mu.blocks.forElem(this);
d.onClick(c)
})};a.prototype.init=function(){var b=$(this.container);
this.$label=b.find(".button-arrow__text")
};a.prototype.onClick=function(b){this.setOpen(!this.isOpen);
this.triggerEvent({type:"button-arrow.click"});
if(this.isOpen){b.stopPropagation()
}};a.prototype.setOpen=function(b){this.isOpen=!!b;
$(this.container).toggleClass("button-arrow_state_open",this.isOpen).toggleClass("button-arrow_state_close",!this.isOpen)
};a.prototype.getText=function(){return this.$label.text()
};a.prototype.setText=function(b){this.$label.text(b)
};return a})());
Mu.blocks.register("button-group",(function(){var a=function(){};
a.init=function(b){this.domDelegate("click",function(c){var e=Mu.blocks.forElem(this),d=$(c.target).closest(".button");
if(d.length===1){e.$selectedButton=d;
e.onChange(c)
}})};a.prototype.init=function(){this.$cont=$(this.container);
this.$buttons=this.$cont.find(".button");
this.$selectedButton=this.$buttons.filter(".button_checked")
};a.prototype.onChange=function(b){this.$buttons.toggleClass("button_checked",false);
this.$selectedButton.toggleClass("button_checked",true);
this.triggerEvent({type:"group.change"})
};a.prototype.getValue=function(){return this.$selectedButton.val()
};a.prototype.setValue=function(b){this.$buttons.toggleClass("button_checked",false);
this.$selectedButton=this.$buttons.filter(".button[value="+b+"]");
this.$selectedButton.toggleClass("button_checked",true)
};return a})());
Mu.blocks.register("button-radio",(function(){var f,a,c,b;
var d;var e=function(){};
e.init=function(g){f=g.get("seq");
a=g.get("froms");
c=Mu.Storage.create("localStorage");
b=g.get("datasrc");
this.domDelegate("click",function(h){var i=Mu.blocks.forElem(this);
i.onClick(h)
});f.on("change",e.onSeqChanged)
};e.onSeqChanged=function(){if(!d){return
}if(d.finished){d.$icon.toggleClass("icon_rotate",false);
e.clearCurrent()
}else{d.finished=true
}};e.clearCurrent=function(){if(!d){return
}clearTimeout(d.maxDelay);
clearTimeout(d.minDelay);
d.finished=false;
d=undefined
};e.prototype.init=function(){this.$cont=$(this.container);
this.$icon=this.$cont.find(".icon");
if(this.data.status&&this.data.status.error){this.refresh()
}};e.prototype.onClick=function(g){var h=this.triggerEvent({type:"radio.getContext"});
if(!h||!!d){return
}var j=a.getBlockFrom(this.container,"radio");
var i=this.getParams();
h.from=j;d=this;
d.$icon.toggleClass("icon_rotate",true);
d.minDelay=setTimeout(e.onSeqChanged,1000);
d.maxDelay=setTimeout(function(){if(d){d.$icon.toggleClass("icon_rotate",false)
}e.clearCurrent()
},5000);f.playRadio(h,i)
};e.prototype.refresh=function(){var g=this;
var h={};if(g.data.artist){h.artistId=g.data.artist.id
}else{if(g.data.genre){h.genre=g.data.genre
}}b.get("radio-available",h).then(function(i){g.$cont.toggleClass("button-radio_hidden",!i.available)
})};e.prototype.getParams=function(){var h;
if(this.data.genre){h={genre:this.data.genre};
var g=c.getItem(h.genre+"_popFactor");
var i=c.getItem(h.genre+"_language");
if(g){h.popFactor=g
}if(i){h.language=i
}}else{if(this.data.artist){h={artistIds:this.data.artist.id}
}}return h};
return e})());
Mu.blocks.register("concert",(function(){var c,b,a;
var d=function(){};
d.init=function(e){c=e.get("blocks");
b=e.get("sidebars");
a=e.get("froms");
this.domDelegate("click",function(g){var h=c.forElem(this);
var f=$(g.target);
if(f.closest("a").length===0){h.onClick(g)
}})};d.prototype.onClick=function(e){this.triggerEvent({type:"concert.click"})
};d.prototype.setSelected=function(e){$(this.container).toggleClass("concert_selected",e)
};d.prototype.openSidebar=function(){var e=a.getCardFrom(this.container);
b.show("artist",{artist:this.data.artist.id,from:e})
};return d})());
Mu.blocks.register("day",(function(){var b,d,a;
var c=function(){};
c.init=function(e){b=e.get("blocks");
d=e.get("seq");
a=e.get("froms");
this.domDelegate("click",".day__play",function(){b.forElem(this,"day").playPreview()
})};c.prototype.playPreview=function(){var f=yr.externals.formatDate(this.data.day,"%d %B");
var h=a.getBlockFrom(this.container,"day");
var g={shortTitle:f,title:f+" – обзор дня",href:"/",from:h};
var e=this.data.tracksToPlay.map(function(i){return{album:i.albums&&i.albums[0],track:i}
});d.playFixed(g,e)
};return c})());
Mu.blocks.register("donate",(function(){var a=function(b){this.data=b;
this.popup=undefined;
this.$slideIntro=undefined;
this.$slidePayment=undefined;
this.$slideOther=undefined;
this.$sum=undefined;
this.$resetBtn=undefined
};a.prototype.init=function(){var b=this;
b.$cont=$(this.container);
b.$slideIntro=b.$cont.find(".donate__slide_intro");
b.$slidePayment=b.$cont.find(".donate__slide_payment");
b.$slideOther=b.$cont.find(".donate__slide_other");
b.$resetBtn=b.$cont.find(".donate__button_reset");
b.$cont.on("click",".donate__button_ya-money",function(c){b.showSlide(b.$slidePayment,true)
});b.$cont.on("click",".donate__button_other",function(c){b.showSlide(b.$slideOther,true)
});b.$cont.on("click",".donate__button_submit",function(c){var d=b.validate();
b.showError(d);
if(!d.sum.isValid){c.preventDefault()
}});b.$cont.on("focusout",".donate__button_submit",function(c){b.showError({sum:{isValid:true}})
});b.$cont.on("click",".donate__button_reset",function(c){b.hide()
});b.popup=new (Mu.blocks.get("popup"))(this.container,{modal:true,position:{my:"center",at:"center",of:window}});
b.popup.on("hide",function(){b.showSlide(b.$slidePayment,false);
b.showSlide(b.$slideOther,false)
});b.popup.mixin(this)
};a.prototype.showSlide=function(b,c){c=!!c;
this.$slideIntro.toggleClass("donate__slide_hidden",c);
b.toggleClass("donate__slide_hidden",!c);
b.toggleClass("donate__slide_shown",c)
};a.prototype.validate=function(){var b={sum:{isValid:false}};
if(!this.$sum){this.$sum=this.$cont.find(".donate__sum")
}var d=this.$sum.val();
var c=d.match(/^\d+(?:.\d+)*$/);
if(c&&c.length){b.sum.isValid=true
}return b};
a.prototype.showError=function(b){var c;
for(prop in b){if(!b.hasOwnProperty(prop)){continue
}c=".donate__error_"+prop;
if(!this[c]){this[c]=this.$cont.find(c)
}if(b[prop].isValid){this[c].toggleClass("donate__error_hidden",true)
}else{this[c].toggleClass("donate__error_hidden",false)
}}};return a
})());Mu.blocks.register("email-selector",(function(){var a="email-selector__item_selected";
var b=function(c){this.container=c;
this.position=undefined;
this.popup=undefined;
this.$cont=undefined;
Mu.eventize(this)
};b.prototype.init=function(){var c=this;
c.$cont=$(c.container);
c.$selected=c.$cont.find(".email-selector__item_selected");
c.$cont.on("click",".email-selector__item",c.onClick.bind(c));
c.popup=new (Mu.blocks.get("popup"))(this.$cont,{toggable:true});
c.popup.on("hide",this.onHide.bind(this));
c.popup.mixin(this)
};b.prototype.onHide=function(c){this.trigger("hide")
};b.prototype.onClick=function(c){if(this.$selected){this.$selected.toggleClass(a,false)
}this.$selected=$(c.target);
this.$selected.toggleClass(a,true);
this.data.selected=$(c.target).text();
this.trigger("change")
};return b})());
Mu.blocks.register("event",(function(){var c,d,b;
var e=true;
var a=function(){};
a.init=function(f){c=f.get("datasrc");
d=f.get("blocks");
b=f.get("auth");
this.domDelegate("click",".event__remove, .event__cancel",function(){d.forElem(this,"event").remove()
});this.domDelegate("click",".event__more",function(){this.parentNode.removeChild(this)
});this.domDelegate("click",".event__log-in",function(g){g.preventDefault();
b.showAuthForm()
})};a.prototype.getTrackContext=function(){var i=this.data;
var f;switch(i.type){case"genre-top":case"recommended-similar-genre":f=i.tracks.map(function(j){return{album:j.albums&&j.albums[0],track:j}
});var g=i.genre||i.similarGenre;
if(g==="all"){return{entries:f,shortTitle:"Самые популярные треки",title:"Самые популярные треки за неделю",href:"/"}
}else{var h=yr.externals.genreName(g).toLowerCase();
return{entries:f,shortTitle:h,title:"Самые популярные треки жанра "+h+" за неделю",href:"/"}
}case"social-popular-tracks":f=i.socialTracks.map(function(j){j=j.track;
return{album:j.albums&&j.albums[0],track:j}
});return{entries:f,shortTitle:"Музыка друзей",title:"Любимые треки ваших друзей",href:"/"};
case"spike-tracks":f=i.tracks.map(function(j){j=j.track;
return{album:j.albums&&j.albums[0],track:j}
});return{entries:f,shortTitle:"Популярные запросы",title:"Ответы на растущие популярные запросы к Яндексу",href:"/"};
case"promotion":f=i.tracks.map(function(j){return{album:j.albums&&j.albums[0],track:j}
});return{entries:f,shortTitle:i.title,title:i.title,href:"/"};
case"similar-tracks-from-history":f=i.tracks.map(function(j){return{album:j.albums&&j.albums[0],track:j}
});return{entries:f,shortTitle:"Рекомендованные треки",title:"Рекомендованные треки",href:"/"};
case"last-week-personal-popular-tracks":f=i.tracks.map(function(j){return{album:j.albums&&j.albums[0],track:j}
});return{entries:f,shortTitle:"Ваш личный чарт за неделю",title:"Ваш личный чарт за неделю",href:"/"};
case"never-heard-from-library":f=i.tracks.map(function(j){return{album:j.albums&&j.albums[0],track:j}
});return{entries:f,shortTitle:"Вы добавили в коллекцию, но не послушали",title:"Вы добавили в коллекцию, но не послушали",href:"/"};
case"well-forgotten-old-tracks":f=i.tracks.map(function(j){return{album:j.albums&&j.albums[0],track:j}
});return{entries:f,shortTitle:"Хорошо забытое старое",title:"Хорошо забытое старое",href:"/"};
default:if(i.tracks&&i.tracks.length){f=i.tracks.map(function(j){return{album:j.albums&&j.albums[0],track:j}
});return{entries:f,shortTitle:"Рекомендованные треки",title:"Рекомендованные треки",href:"/"}
}else{return null
}}};a.prototype.getRadioContext=function(){var i=this.data;
switch(i.type){case"genre-top":case"recommended-similar-genre":var f=i.genre||i.similarGenre;
var h=yr.externals.genreName(f,true);
var g={shortTitle:h,title:"Радио жанра "+h,href:"/genre/"+f};
return g;default:return null
}};a.prototype.remove=function(){var h=this.data.id;
var g=this.data.type;
var f=$(this.container);
if(b.isLoggedIn()&&h){c.deleteEvent(h)
}f.effect("fade",{},300,function(){if(e&&g!=="notification"){var i=yr.run("index",{},"event_removed");
f.replaceWith(i);
e=false}else{f.remove()
}})};a.prototype.onSocialBindSuccess=function(g){var f=yr.run("index",b.user,"event__notify-content_"+g+"-success");
$(this.container).find(".event__notify-wrap").html(f)
};return a})());
Mu.blocks.register("event__playlist",(function(){var b,d,e,c,a;
var f=function(){};
f.init=function(g){b=g.get("datasrc");
d=g.get("blocks");
e=g.get("seq");
c=g.get("sidebars");
a=g.get("froms");
this.domDelegate("click",function(i){var j=d.forElem(this);
var h=$(i.target);
if(h.closest(".event__play").length===1){j.onPlayClick(i)
}else{if(h.closest("a").length===0){j.onClick(i)
}}})};f.prototype.onPlayClick=function(){var h=this.data;
var i=a.getBlockFrom(this.container,"playlist");
var g={shortTitle:h.title,title:"Плейлист «"+h.title+"»",href:"/users/"+h.owner.login+"/playlists/"+h.kind,from:i,playlist:h};
b.get("playlist",{kinds:h.kind,owner:h.owner.login}).then(function(k){var j=k.playlist.tracks.map(function(l){return{album:l.albums&&l.albums[0],track:l}
});e.playFixed(g,j)
})};f.prototype.onClick=function(g){this.triggerEvent({type:"playlist.click"})
};f.prototype.setSelected=function(g){$(this.container).toggleClass("event__playlist_selected",g)
};f.prototype.openSidebar=function(){var g=this.data;
var h=a.getCardFrom(this.container,"playlist");
c.show("playlist",{owner:g.owner.login,kind:g.kind,from:h})
};return f})());
Mu.blocks.register("folder",(function(){var f,e,d,c,a;
var b=function(){};
b.init=function(g){f=g.get("seq");
e=g.get("sidebars");
d=g.get("datasrc");
c=g.get("auth");
a=g.get("froms");
this.domDelegate("click",function(i){var j=Mu.blocks.forElem(this);
var h=$(i.target);
if(h.closest("a").length===0){j.onClick(i)
}})};b.prototype.onClick=function(g){this.triggerEvent({type:"folder.click"})
};b.prototype.setSelected=function(g){$(this.container).toggleClass("folder_selected",g)
};b.prototype.openSidebar=function(){var g=a.getCardFrom(this.container,"folder");
e.show("folder",{dir:this.data.parent+this.data.dir.name,from:g})
};return b})());
Mu.blocks.register("footer",(function(){var a;
var b=function(c){};
b.init=function(c){a=c.get("metrika")
};b.prototype.init=function(){var c=this;
c.$cont=$(c.container);
c.$social=c.$cont.find(".footer__social");
c.socialArrowCont=c.$cont.find(".footer__arrow")[0];
c.socialArrowBtn=Mu.blocks.forElem(c.socialArrowCont);
c.socailPopup=new (Mu.blocks.get("popup"))(c.$social,{position:{my:"center bottom",at:"center top-2",of:c.socialArrowCont},toggable:true});
c.delegate("button-arrow.click",function(){c.socailPopup.toggle()
});c.socailPopup.on("hide",function(){c.socialArrowBtn.setOpen(false)
});c.$cont.find(".footer__opt-out").on("click",this.onOptOut);
c.$cont.on("click",".button-store_apple",function(d){a.goal("footerAppStore")
});c.$cont.on("click",".button-store_google",function(d){a.goal("footerGooglePlay")
})};b.prototype.onOptOut=function(c){a.goal("retun2old");
$.cookie("makeyourownkindofmusic","optout",{expires:365,path:"/"});
var d=location.pathname;
d=d.replace(/^\/album\/(\d+)\/track\/(\d+)/,"/track/$2/album/$1");
d=d.replace(/^\/album\/(\d+)\//,"/album/$1");
d=d.replace(/^\/genre.*$/,"");
d=d.replace(/^\/mix.*$/,"/charts");
d=d.replace(/^\/users\/([^/]+)\/.*$/,"/users/$1/playlists/");
d=d.replace(/^\/settings.*$/,"/tune/");
d=d.replace(/^\/artist\/(\d+)\/similar/,"/artist/$1/");
location.href=location.protocol+"//"+location.host+"/#!"+d;
setTimeout(function(){location.reload()
},500);c.preventDefault();
return false
};return b})());
Mu.blocks.getAppLink=(function(){var a=function(b){this.position=b;
this.popup=undefined;
this.$dom=undefined;
this.$captcha=undefined
};a.prototype.show=function(){if(!this.popup){this.init()
}this.popup.show()
};a.prototype.hide=function(){if(this.popup){this.popup.hide()
}};a.prototype.init=function(){var c=this;
var b=$(yr.run("index",{},"get-app-link"));
c.$captcha=b.find(".get-app-link__captcha");
c.popup=new (Mu.blocks.get("popup"))(b,{width:302,position:c.position})
};a.prototype.getPhoneHandler=function(){var c=null;
var b=this;
return function(d){if(c){return
}var e=d.target.value;
c=setTimeout(function(){var g=d.target.value;
var f=new Number(g);
if(isNaN(f)){d.target.value=e
}b.showCaptcha(!isNaN(f)&&d.target.value.length===11);
c=null},10)
}};a.prototype.showCaptcha=function(b){this.$captcha.toggleClass("get-app-link__captcha_hidden",!b)
};return a})();
Mu.blocks.register("head-progress",(function(){var a=function(){this.progress=0;
this.animateDelay=undefined;
this.maxStep=0.35
};a.prototype.init=function(){this.$cont=$(this.container)
};a.prototype.startAnimate=function(){this.setProgress(0);
this.toggle(true);
this.animate()
};a.prototype.endAnimate=function(){var b=this;
if(b.animateDelay){clearTimeout(b.animateDelay);
b.animateDelay=undefined
}b.animate(1);
setTimeout(function(){b.toggle(false);
b.setProgress(0)
},700)};a.prototype.setProgress=function(b){this.$cont.css({width:(b*100)+"%"});
this.progress=b
};a.prototype.toggle=function(b){if(typeof b==="undefined"){b=this.$cont.toggleClass("head-progress_on")
}else{b=!!b;
this.$cont.toggleClass("head-progress_on",b)
}return b};
a.prototype.animate=function(c){var b=this;
b.animateDelay=setTimeout(function(){c=c||b.getRandom(b.progress,Math.min(b.progress+b.maxStep,1));
b.setProgress(c);
if(b.progress===1){b.animateDelay=undefined;
return}else{if(b.progress<0.85){b.animate()
}}},50)};a.prototype.getRandom=function(c,b){return Math.random()*(b-c)+c
};return a})());
Mu.blocks.register("head",(function(){var d,e,b,c;
var f;var a=function(h){var g=$(h);
this.$form=g.find("form");
this.$text=this.$form.find("input[name=text]");
this.$user=g.find(".head__user");
this.$logo=g.find(".head__logo")
};a.init=function(){var g=this;
this.domDelegate("click",".head__username",function(h){h.preventDefault();
g.showUserPopup(this)
})};a.showUserPopup=function(h){var g={yandexuid:$.cookie("yandexuid"),retpath:encodeURIComponent(window.location.href)};
userPopupHtml=yr.run("index",g,"head__user-popup");
if(!this.nbUserPopup){$(userPopupHtml).appendTo(document.body);
this.nbUserPopup=nb.find("head__user-popup")
}else{$(this.nbUserPopup.node).html($(userPopupHtml).find("a"))
}this.nbUserPopup.open({where:$(h).find(".nb-user__avatar")[0]})
};a.hideUserPopup=function(){if(this.nbUserPopup){this.nbUserPopup.close()
}};a.prototype.init=function(h){d=h.get("blocks");
e=h.get("navigation");
b=h.get("auth");
c=h.get("metrika");
var g=h.get("pages");
g.on("loading",this.onPageLoading.bind(this));
g.on("loaded",this.onPageLoaded.bind(this));
this.onAuthInfo(b||{});
b.on("info",this.onAuthInfo.bind(this));
this.$form.on("submit",this.onSubmit.bind(this));
this.$user.on("click",".head__log-in",this.onLogInClick.bind(this));
this.$text.on("focus keypress click",function(){f=undefined
});this.$text.on("change",this.updateTableau.bind(this));
this.bindLogoEvents();
this.$user.on("click",".head__user-button",function(){c.count({head:{my:"button"}})
});this.$user.on("click",".head__user-tab",function(){c.count({head:{my:"tab"}})
});this.initSuggest()
};a.prototype.bindLogoEvents=function(){var g=this;
var i;var h=function(){clearTimeout(i);
i=setTimeout(function(){g.openTableau();
g.$logo.off("mousemove",h)
},300)};this.$logo.on("mouseenter",function(){h();
g.$logo.on("mousemove",h)
});this.$logo.on("mouseleave",function(){clearTimeout(i);
g.$logo.off("mousemove",h)
})};a.prototype.onSubmit=function(g){f=this.$text.val();
try{e.navigateTo("/search?text="+encodeURIComponent(this.$text.val()))
}finally{g.preventDefault();
return false
}};a.prototype.onAuthInfo=function(g){g=g.user||{};
if(g.login){this.$user.html(yr.run("index",g,"head__user"))
}else{this.$user.html(yr.run("index",g,"head__noauth"))
}};a.prototype.onPageLoading=function(h){if(this.nbSuggest){this.nbSuggest.close()
}a.hideUserPopup();
if(h.name==="search"||(h.name==="500"&&h.brokenPage&&h.brokenPage.name==="search")){var g=h.query||h.brokenPage.query;
if(g){this.$text.val(g.text||"")
}}else{this.$text.val("")
}if((h.name==="users"||h.name==="playlist")&&b.isLoggedIn()&&h.owner===b.user.login){this.$user.find(".head__user-button").addClass("button_checked")
}else{this.$user.find(".head__user-button").removeClass("button_checked")
}};a.prototype.onPageLoaded=function(h){if(!h||h.name!=="search"){return
}var g=h.data&&h.data.result;
if(g&&g.misspell&&g.misspell.corrected&&g.misspell.result){this.$text.val(g.misspell.result)
}};a.prototype.onLogInClick=function(g){g.preventDefault();
b.showAuthForm()
};a.prototype.openTableau=function(){if(!this.tableau){this.tableau=$.Tableau({serviceId:"music",height:614});
Mu.tableau=this.tableau
}var j=this.$logo.offset();
this.tableau.setPos({top:j.top+this.$logo.outerHeight(),left:j.left+20});
this.updateTableau();
this.tableau.open();
var g=this;
var i=$(document.body);
var h=function(l){var k=$(l.target);
if(k.closest(".head").length||k.closest(".tableau").length){return
}g.closeTableau();
i.off("mouseover",h)
};i.on("mouseover",h)
};a.prototype.closeTableau=function(){if(!this.tableau){return
}this.tableau.close()
};a.prototype.updateTableau=function(){if(!this.tableau){return
}var g=this.$text.val();
if(g){this.tableau.setSearchText(g)
}};a.prototype.initSuggest=function(){var g=nb.block(this.$text.closest(".nb-suggest")[0]);
g.on("nb-select",this.onSuggestSelect.bind(this));
g.setOption({minLength:1,renderItem:function(h){h.item.labelContent=h.item.value.htmlEscape();
return yr.run("index",h,"nb-suggest")
}});g.setSource(function(i,h){var j=f===i.term;
f=undefined;
if(j){return
}$.ajax({url:"//suggest-music.yandex.ru/suggest-ya.cgi?v=4&fact=1&lr=225",data:{part:i.term||""},dataType:"jsonp",success:function(l){var k=l[1].map(function(n){var m={};
if(n instanceof Array){m.value=n[1];
if(n[0]==="fact"){m.href=n[2]
}}else{m.value=n.toString()
}return m});
h(k)},error:function(){h([])
}})});this.nbSuggest=g
};a.prototype.onSuggestSelect=function(g,i){var h=i.getSelected();
if(h.href){e.navigateTo("/"+h.href)
}else{this.$text.val(h.value);
this.$form.submit()
}};return a
})());(function(h,d){var k="https://yastatic.net",c="/tableau/tableau.html",a="tableau",b=a+"_opened",m=a+"__content",e="tableau.close",l="close.sidePanel",i=".tableau{position:absolute;z-index:-1;visibility:hidden;overflow:auto;margin-top:-20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;border:1px solid #efefef;border:1px solid rgba(0,0,0,.06);-webkit-box-shadow:0 30px 70px -10px rgba(0,0,0,.4);box-shadow:0 30px 70px -10px rgba(0,0,0,.4);-webkit-transition:margin .15s ease-out 0s,visibility 0s ease-out .15s,opacity .15s ease-out 0s;transition:margin .15s ease-out 0s,visibility 0s ease-out .15s,opacity .15s ease-out 0s;-webkit-overflow-scrolling:touch}.tableau_opened{z-index:1;visibility:visible;margin-top:0;opacity:1;-webkit-transition-delay:0s;transition-delay:0s}.tableau__content{display:block;width:100%;height:100%;background:#fff}",g=false,f=0;
function j(n){this._addStyle(i);
this._params=d.extend({width:370,height:500,preset:"ru",lang:"ru",domain:"ru",device:"desktop"},n);
this._top=0;
this._left=0;
this._isOpened=false;
this._isIframeLoaded=false;
this._$iframe=this._buildIframe(this._buildUrl(this._params));
this._$tableau=this._buildAndAppendTableau(this._params,this._$iframe);
this._namespace=".tableau"+f++;
this._bindToClosePostMessage(this._namespace)
}j.prototype.setSearchText=function(o){var n=JSON.stringify({fnName:"updateUrls",fnArgs:[{text:o,serviceId:this._params.serviceId}]});
if(this._isIframeLoaded){this._postMessage(n)
}else{this._$iframe.load(d.proxy(this._postMessage,this,n))
}return this
};j.prototype._postMessage=function(n){this._$iframe[0].contentWindow.postMessage(n,"*")
};j.prototype.setPos=function(n){typeof n.top==="undefined"||(this._top=n.top);
typeof n.left==="undefined"||(this._left=n.left);
if(this._isOpened){this._reposition()
}return this
};j.prototype._reposition=function(){this._$tableau.css({top:this._top,left:this._left})
};j.prototype.open=function(){if(!this._isOpened){this._reposition();
this._$tableau.addClass(b);
this._isOpened=true
}return this
};j.prototype.close=function(){if(this._isOpened){this._isOpened=false;
this._$tableau.removeClass(b)
}return this
};j.prototype.isOpened=function(){return this._isOpened
};j.prototype.destruct=function(){this._$tableau.remove();
d(h).off("message"+this._namespace)
};j.prototype._buildUrl=function(n){return k+(n.path||(c+"?"+d.param({preset:n.preset,lang:n.lang,domain:n.domain,device:n.device,"service-id":n.serviceId})))
};j.prototype._buildIframe=function(n){var o=this;
return d('<iframe class="'+m+'" src="'+n+'" frameborder="0" allowtransparency="true"></iframe>').on("load",function(){o._isIframeLoaded=true
})};j.prototype._buildAndAppendTableau=function(o,n){return d('<div class="'+a+'" style="width:'+o.width+"px;height:"+o.height+'px;"></div>').append(n).appendTo("body")
};j.prototype._bindToClosePostMessage=function(n){var o=this;
d(h).on("message"+n,function(p){switch(p.originalEvent.data){case e:case l:o.close()
}})};j.prototype._addStyle=function(o){if(g){return
}var n=document.createElement("style");
n.type="text/css";
document.getElementsByTagName("head")[0].appendChild(n);
if(n.styleSheet){n.styleSheet.cssText=o
}else{if("textContent" in n){n.textContent=o
}else{n.innerHTML=o
}}g=true};d.Tableau=function(n){return new j(n)
}})(window,jQuery);
Mu.blocks.register("like",(function(){var h,d,c,f,g,e,a;
var b=function(i){};
b.init=function(i){h=i.get("library");
d=i.get("auth");
c=i.get("blocks").get("notify");
f=i.get("fav");
g=i.get("blocks");
e=i.get("metrika");
a=i.get("froms");
this.domDelegate("click",function(j){var k=Mu.blocks.forElem(this,"like");
k.onLikeClick(j)
})};b.prototype.init=function(){this.$cont=$(this.container)
};b.prototype.setData=function(i){this.data=$.extend(this.data,i)
};b.prototype.repaint=function(){var i=yr.run("index",this.data,this.constructor.type);
g.initPendingBlocks(i);
$(this.container).replaceWith(i);
this.container=i
};b.prototype.onLikeClick=function(i){var k=this,n=k.data;
if(!d.isLoggedIn()){c.show("authRequired");
return}var l=a.getBlockName(this.data);
var m=a.getCardFrom(this.container,l);
var p=a.getBlockFrom(this.container,l);
n=$.extend({from:p},n);
var o=f.toggle(n);
var j=o?"LIKE":"REMOVE";
e.goal(j,{likeFrom:m})
};return b})());
Mu.blocks.register("listed-order",(function(){var a=function(){};
a.init=function(b){this.domDelegate("click",function(c){var d=Mu.blocks.forElem(this);
d.onClick(c)
})};a.prototype.onClick=function(b){this.triggerEvent({type:"listedOrder.click"})
};a.prototype.setSelected=function(b){$(this.container).toggleClass("listed-order_selected",this.isSelected)
};a.prototype.openSidebar=function(){Mu.sidebars.show("order-info",{orderId:this.data.id})
};return a})());
Mu.blocks.register("loading",(function(){var a=250;
var b=function(c){this.$dom=$(c);
this.shown=false;
this.delayed=null;
this.showTimeout=a
};b.prototype.init=function(e){var d=this;
if(!!this.data.listenOn){var c=e.get(this.data.listenOn);
c.on("loading",function(){d.show(true)
});c.on("loaded",function(){d.show(false)
})}};b.prototype.doShow=function(c){this.shown=c;
this.$dom.toggleClass("loading_on",c)
};b.prototype.show=function(c){if(this.shown){if(!c){this.doShow(false)
}return}if(this.delayed){clearTimeout(this.delayed);
this.delayed=null
}if(c){this.delayed=setTimeout(function(){this.delayed=null;
this.doShow(true)
}.bind(this),this.showTimeout)
}};return b
})());Mu.blocks.register("nav",(function(){var g="nav__tab_opened";
var h="nav__tab_disabled";
var l="nav__tab_current";
var f,b,i,j,a,m;
var d;var e={top:"pop",mix:"all"};
var k={top:"genre",genre:"top",mix:"mix"};
var c=function(n){this.$dom=$(n)
};c.prototype.init=function(o){f=o.get("datasrc");
b=o.get("blocks");
i=o.get("auth");
j=o.get("layout");
a=o.get("navigation");
m=Mu.Storage.create("localStorage");
if(this.data&&this.data["subnav-node"]){this.$subnav=this.$dom.closest(".head").find(this.data["subnav-node"]);
this.$subnav.addClass("nav__subnav");
this.openedSubnav="";
this.$subnav.on("click",".nav__arrow",this.onArrowClick.bind(this));
this.$dom.find(".nav__tab_switch").on("click",this.onToggleSubnav.bind(this))
}var n=o.get("pages");
n.on("loaded",this.onPageLoaded.bind(this))
};c.prototype.onPageLoaded=function(p){var n=p.name;
if((n==="users"||n==="playlist")&&i.isLoggedIn()&&p.owner===i.user.login){n="my"
}this.$dom.find("."+l).removeClass(l);
this.$dom.find(".nav__tab[data-name='"+n+"']").addClass(l);
this.currentSubItem=null;
if(p.genre){this.currentSubItem={top:p.genre}
}else{if(p.mix){this.currentSubItem={mix:p.mix}
}}if(n==="404"){var o=this.getPageInfo();
if(o.canRedirect){a.navigateTo("/"+k[o.name]+"/"+e[o.name])
}}else{this.showSubnavByName(p.name)
}};c.prototype.onToggleSubnav=function(n){var r=$(n.target);
var o=r.data("name");
if(r.hasClass(h)){return
}if(r.hasClass(g)){this.hideSubnav()
}else{this.hideSubnav();
var q=m.getItem("nav_"+o);
var p=k[o];
q=q||e[o];a.navigateTo("/"+p+"/"+q)
}};c.prototype.showSubnavByName=function(o){if(o!=="top"&&o!=="mix"){this.hideSubnav();
return}this.openedSubnav=o;
var q=$(this.container).find(".nav__tab[data-name="+o+"]");
var p={currentItem:this.getCurrentSubItem()};
if(p.currentItem){m.setItem("nav_"+o,p.currentItem)
}if(o=="top"){p.items=Mu.genres.structure;
this.showSubnav(yr.run("index",p,"nav__genres"),q)
}else{if(o=="mix"){var n=this;
f.get("mixes").then(function(r){p.items=r.items;
n.showSubnav(yr.run("index",p,"nav__mixes"),q)
})}}};c.prototype.getCurrentSubItem=function(){return this.currentSubItem&&this.currentSubItem[this.openedSubnav]
};c.prototype.showSubnav=function(n,p){if(!this.$subnav){return
}var o=false;
this.$subnav.html(n).slideDown({duration:300,step:function(){if(!o){j.moveSidebar()
}o=!o}});p.addClass(g);
$(document).on("keydown",this._onKeydown=this.onKeydown.bind(this))
};c.prototype.hideSubnav=function(){if(!this.$subnav){return
}this.$subnav.html("").hide();
this.$dom.find("."+g).removeClass(g);
this.openedSubnav="";
if(this._onKeydown){$(document).off("keydown",this._onKeydown);
delete this._onKeydown
}if(d){d.hide()
}j.moveSidebar()
};c.prototype.initPopup=function(){var n=$(yr.run("index",{},"nav__popup")).appendTo(this.$dom);
d=new (b.get("popup"))(n[0],{toggable:true});
d.on("hide",function(o){this.$pressedArrow&&this.$pressedArrow.removeClass("nav__arrow_pressed");
this.$pressedArrow=null;
if(o&&o.type==="keydown"){this.keydownClosedPopup=o.originalEvent
}}.bind(this))
};c.prototype.getPageInfo=function(){var n=a.getLastUrl();
var r=n.split("/");
var q=r.length>1&&k[r[1]];
var p=r.length>2&&r[2];
var o=(q==="top"||q==="mix")&&e[q]!==p;
return{canRedirect:o,name:q}
};c.prototype.onArrowClick=function(o){if(!d){this.initPopup()
}if(d.isOpen){d.hide();
return}this.$pressedArrow=$(o.target).closest(".nav__arrow");
this.$pressedArrow.addClass("nav__arrow_pressed");
var p=b.forElem(o.target,"nav__sub-item");
var r=$(p.container);
var n=$(d.container);
n.css({minWidth:r.outerWidth()});
d.setOptions({position:{my:"left top+5",at:"left bottom",of:r}});
d.show();var q=yr.run("index",{item:p.data,currentItem:this.getCurrentSubItem()},"nav__popup-content");
n.find(".nav__popup").html(q)
};c.prototype.onKeydown=function(n){if(n.keyCode===27&&this.keydownClosedPopup!==n.originalEvent){this.hideSubnav()
}delete this.keydownClosedPopup
};return c})());
Mu.blocks.register("notify",(function(){var e=5000;
var d=3;var a=4;
var c;var b=function(g){this.$dom=$(g);
this.messages=[];
b.instance=this;
var f=this;
this.$dom.on("click",".notify__close",function(i){var h=$(i.target.parentNode);
f.removeMessage(h)
});this.$dom.on("click",".notify__auth",function(){c.showAuthForm()
})};b.init=function(f){c=f.get("auth")
};b.prototype.addMessage=function(h){var f=$('<div class="notify__message">');
f.html(h);$('<div class="notify__close">').appendTo(f);
while(this.messages.length>=d){this.removeMessage(this.messages[0],true)
}this.messages.push(f);
this.$dom.prepend(f);
this.layoutMessages();
var g=this;
setTimeout(function(){f.toggleClass("notify_shown",true)
},1);setTimeout(function(){g.removeMessage(f)
},e)};b.prototype.layoutMessages=function(){var g=0;
for(var h=0;
h<this.messages.length;
h++){var f=this.messages[h];
f.css({left:-Math.round(f.outerWidth()/2)+"px",bottom:g+"px"});
g+=a+f.outerHeight()
}};b.prototype.removeMessage=function(f,h){for(var g=0;
g<this.messages.length;
g++){if(f[0]!==this.messages[g][0]){continue
}f.remove();
this.messages.splice(g,1);
break}if(!h){this.layoutMessages()
}};b.show=function(j,k){var f=this.instance;
switch(j){case"playError":if(Mu.settings.invalidRegion){f.addMessage("По требованию правообладателей музыку на сервисе можно слушать только пользователям<br>из России, Украины, Беларуси и Казахстана.")
}else{f.addMessage(j.htmlEscape())
}break;case"authRequired":f.addMessage('Пожалуйста, <span class="notify__auth notify__link">войдите или зарегистрируйтесь</span>.');
break;case"addedToLib":case"removedFromLib":var h={track:"Трек",album:"Альбом",playlist:"Плейлист",artist:"Исполнитель"}[k.what];
var i=encodeURI(c.user.login);
var m="";if(k.what==="track"&&j==="removedFromLib"){m='Трек удалён из «<a href="/users/'+i+'/tracks">Моей музыки</a>»'
}else{var l=k.what+"s";
var g="/users/"+i+"/"+l;
m=j==="addedToLib"?'{entity} добавлен в «<a href="{href}">Мою музыку</a>»':'{entity} удалён из «<a href="{href}">Моей музыки</a>»';
m=m.replace("{entity}",h).replace("{href}",g)
}f.addMessage(m);
break;case"addedToPlaylist":case"removedFromPlaylist":var h,m;
var g="/users/"+encodeURI(k.target.owner.login)+"/playlists/"+encodeURI(k.target.kind);
if(j==="addedToPlaylist"){h=k.count>1?"Треки добавлены":"Трек добавлен";
m='{entity} в плейлист «<a href="{href}">{title}</a>»'
}else{h=k.count>1?"Треки удалены":"Трек удален";
m='{entity} из плейлиста «<a href="{href}">{title}</a>»'
}m=m.replace("{entity}",h).replace("{href}",g).replace("{title}",k.target.title.htmlEscape());
f.addMessage(m);
break;case"socialUpdate":var g,m;
var i=encodeURI(c.user.login);
if(k.provider==="vkontakte"){g="/users/"+i+"/playlists";
m='Через несколько минут ваши треки появятся в «<a href="{href}">Моей музыке</a>»'
}else{if(k.provider==="facebook"){g="/users/"+i+"/artists";
m='Через несколько минут любимые исполнители появятся в «<a href="{href}">Моей музыке</a>»'
}}m=m.replace("{href}",g);
f.addMessage(m);
break;default:f.addMessage(j.htmlEscape());
break}};return b
})());Mu.blocks.register("overhead",(function(){var d,c,e;
var b=false;
var a=function(f){};
a.init=function(f){d=f.get("layout");
c=f.get("auth");
e=f.get("blocks");
this.domDelegate("click",".overhead__log-in",function(g){g.preventDefault();
c.showAuthForm()
});this.domDelegate("click",".overhead__close",function(g){e.forElem(this,"overhead").close()
})};a.prototype.init=function(){this.$cont=$(this.container);
if(!b&&!$.cookie("overhead_closed")){this.show()
}};a.prototype.show=function(){var f=false;
this.$cont.slideDown({duration:300,step:function(){if(!f){d.moveSidebar()
}f=!f}});b=true
};a.prototype.hide=function(){var f=this;
var g=false;
this.$cont.slideUp({duration:300,step:function(){if(!g){d.moveSidebar()
}g=!g},complete:function(){f.$cont.remove()
}})};a.prototype.close=function(){this.hide();
$.cookie("overhead_closed","1",{expires:7,path:"/"})
};return a})());
Mu.blocks.register("payment-gift",(function(){var a,d,c={unknown:"Что-то пошло не так. Попробуйте, пожалуйста, ещё раз.",codeNotExists:"Подарочный код не существует",codeAlreadyConsumed:"Такой код уже был использован",codeExpired:"Срок действия подарочного кода истёк",userTemporaryBanned:'Вы неправильно ввели код более 10&nbsp;раз. Продолжить работу с&nbsp;системой можно через 24&nbsp;часа. Если у&nbsp;вас возникли проблемы, обратитесь в&nbsp;службу поддержки. Для этого используйте форму <a href="http://feedback.yandex.ru/?from=music" target="_blank">обратной связи</a>.',failedToCreatePayment:'Произошла ошибка. Пожалуйста, обратитесь в службу поддержки. Для этого используйте форму <a href="http://feedback.yandex.ru/?from=music" target="_blank">обратной связи</a>.'};
var b=function(){};
b.init=function(e){a=e.get("datasrc");
d=e.get("navigation")
};b.prototype.init=function(){var e=this;
e.$cont=$(this.container);
e.$code=e.$cont.find(".payment-gift__bar input");
e.$bar=e.$cont.find(".payment-gift__bar");
e.$error=e.$cont.find(".payment-gift__error-text");
e.$submit=e.$cont.find(".payment-gift__submit-button");
e.$cont.on("click",".payment-gift__submit-button",e.onSubmitClick.bind(e));
e.$cont.on("click",".popup__close",e.onCloseClick.bind(e));
e.popup=new (Mu.blocks.get("popup"))(this.container,{modal:true,position:{my:"center",of:"center"}});
e.popup.mixin(this)
};b.prototype.onSubmitClick=function(){var e=this,f=this.$code.val(),g=this.validateCode(f);
if(!g){return
}a.post("payment-gift",{code:f},{nocache:true}).then(function(h){var i=e.validateResponse(h);
if(i&&h.orderId){e.hide();
d.navigateTo("payment/history?orderId="+h.orderId)
}})};b.prototype.onCloseClick=function(e){this.toggle()
};b.prototype.validateCode=function(f){var g=true,e=null;
if(!f){g=false;
e="Ведите подарочный код."
}else{if(f.length<10){g=false;
e="Подарочный код должен иметь длину 10 символов."
}}this.showError(g,e);
return g};b.prototype.validateResponse=function(f){var g=!!(f.success&&f.orderId),e=null;
if(g){this.showError(g,e);
return g}e=f.error&&f.error.code?c[f.error.code]:c.unknown;
e=e||c.unknown;
if(f.error&&f.error.code&&f.error.code==="userTemporaryBanned"){this.$cont.toggleClass("payment-gift_banned",true);
this.$submit.attr("disabled","disabled")
}this.showError(g,e);
return g};b.prototype.showError=function(f,e){this.$bar.toggleClass("payment-gift__bar_error",!f);
this.$error.html(e)
};return b})());
Mu.blocks.register("payment-order",(function(){var b,e=1002,a={30:{id:6187},90:{id:6216},180:{id:6217},365:{id:6218}},c="https://money.yandex.ru/games/shop.xml?";
var d=function(){this.popup=undefined;
this.selectedProduct=undefined;
this.selectedSystem=undefined;
Mu.eventize(this)
};d.init=function(f){b=f.get("datasrc")
};d.prototype.initPopup=function(g){var f=this,h=yr.run("index",g,"payment-order__content");
f.trigger("init");
f.data=g;f.$cont=$(f.container).append(h);
f.$total=f.$cont.find(".payment-order__total");
f.$giftButton=f.$cont.find(".payment-order__button-gift");
f.popup=new (Mu.blocks.get("popup"))(f.container,this.options);
f.tooltip=Mu.blocks.forElem(f.$cont.find(".tooltip")[0]);
f.tooltip.position={my:"right bottom-8",at:"right top",of:".payment-order__button-gift"};
f.popup.on("close",f.onClose.bind(f));
f.delegate("paymentProduct.click",f.onSelectProduct.bind(f));
f.$cont.on("click",".payment-order__button-gift",f.onGiftClick.bind(f));
f.$cont.on("change",".payment-order__systems input[type='radio']",f.onSelectSystem.bind(f));
f.$cont.on("click",".payment-order__button-pay",f.onPayClick.bind(f));
f.$cont.on("click",".popup__close",f.onCloseClick.bind(f));
f.setSelectedSystem(f.data.systems[0].id);
f.setSelectedProduct(Mu.blocks.forElem(f.$cont.find(".payment-product")[0]))
};d.prototype.toggle=function(){var f=this;
if(!f.popup){b.get("payment-order",{}).then(function(g){f.initPopup(g);
f.popup.toggle()
})}else{f.popup.toggle()
}};d.prototype.onCloseClick=function(f){this.toggle()
};d.prototype.onClose=function(f){this.trigger("close")
};d.prototype.onGiftClick=function(f){if(this.selectedSystem===e){this.tooltip.show();
f.preventDefault()
}};d.prototype.onPayClick=function(f){var g=this,i=g.selectedSystem,h=g.selectedProduct.data.id,j={product:h,system:i,sign:Mu.authData.sign};
Mu.datasrc.post("payment-submit",j).then(function(l){var k=yr.run("index",l.form,"payment-order__form");
$(k).insertAfter(g.$cont).submit()
})};d.prototype.onSelectProduct=function(f){if(this.selectedProduct===f.target){return
}if(this.selectedProduct){this.selectedProduct.setSelected(false)
}this.setSelectedProduct(f.target)
};d.prototype.onSelectSystem=function(f){this.setSelectedSystem(f.target.value)
};d.prototype.setOptions=function(f){this.options=f
};d.prototype.setSelectedSystem=function(f){this.selectedSystem=parseInt(f)
};d.prototype.setSelectedProduct=function(f){(this.selectedProduct=f).setSelected(true);
this.setTotalText(this.selectedProduct);
this.setGiftLink(this.selectedProduct)
};d.prototype.setTotalText=function(h){var f=h.data;
var g=f.amount+" "+yr.externals.formatCurrency(f.currency)+" за "+f.days+" дней";
this.$total.text(g)
};d.prototype.setGiftLink=function(h){var g=h.data;
var f=c+"scid="+a[h.data.days].id;
this.$giftButton.attr("href",f)
};return d})());
Mu.blocks.register("payment-product",(function(){var a=function(){};
a.init=function(b){this.domDelegate("click",function(c){var d=Mu.blocks.forElem(this);
d.onClick(c)
})};a.prototype.onClick=function(b){this.triggerEvent({type:"paymentProduct.click"})
};a.prototype.setSelected=function(b){$(this.container).toggleClass("payment-product_selected",!!b)
};return a})());
Mu.blocks.register("player-controls",(function(){var a,h,f,b,g,e,d;
var c=function(){};
c.init=function(i){a=i.get("datasrc");
f=i.get("player");
h=i.get("seq");
b=i.get("popups");
g=Mu.Storage.create("localStorage");
e=i.get("auth");
d=i.get("blocks").get("notify")
};c.prototype.init=function(){var i=this,j=$(i.container);
i.disableHiglight=true;
i.$cont=j;i.$body=$(document.body);
i.$prev=j.find(".player-controls__btn_prev");
i.$play=j.find(".player-controls__btn_play");
i.$next=j.find(".player-controls__btn_next");
i.$shuffle=j.find(".player-controls__btn_shuffle");
i.$repeat=j.find(".player-controls__btn_repeat");
i.$settings=j.find(".player-controls__btn_settings");
i.$seq=j.find(".player-controls__btn_seq");
i.$trackContainer=j.find(".player-controls__track-container");
i.$trackControls=j.find(".player-controls__track-controls");
i.radioSettings=Mu.blocks.forElem(j.find(".radio-settings")[0]);
i.radioSettings.setOptions({position:{my:"center bottom",at:"center top-6",of:i.$settings[0]}});
i.$play.on("click",i.onPlayClick.bind(i));
i.$prev.on("click",i.onPrevNext.bind(i,-1));
i.$next.on("click",i.onPrevNext.bind(i,1));
i.$shuffle.on("click",i.onShuffleToggle.bind(i));
i.$repeat.on("click",i.onRepeatToggle.bind(i));
i.$settings.on("click",i.onSettingsClick.bind(i));
i.$cont.on("click",".player-controls__btn_dislike",i.onDislikeClick.bind(i));
i.$seq.on("click",i.onSeqClick.bind(this));
i.radioSettings.on("hide",i.onRadioSettingsClose.bind(i));
f.on("status",i.onStateChange.bind(i));
h.on("change",i.onSeqChange.bind(i));
h.on("changeCurrent",i.onSeqChange.bind(i));
h.on("repeat",i.onSeqOptionChange.bind(i));
h.on("shuffle",i.onSeqOptionChange.bind(i));
b.on("unloaded",i.onPopupClose.bind(i));
i.onStateChange();
i.onSeqChange()
};c.prototype.onStateChange=function(){var i=f.getStatus()==="playing";
this.$play.toggleClass("player-controls__btn_pause",i);
this.$body.toggleClass("body_show-pause",i);
this.$play.attr("title",i?"Пауза [p]":"Играть [p]")
};c.prototype.onSeqChange=function(){var i=h.isRadio(),j=h.current();
this.$cont.toggleClass("player-controls_empty",!j);
this.$play.toggleClass("player-controls__btn_disabled",!j);
this.refreshRadio(i);
this.refreshSeqOptions();
this.highlightSeq();
this.changeTrack(j)
};c.prototype.initTrack=function(j){var i=$(j);
this.$trackContainer.html(i);
i.toggleClass("player-controls__track_shown",true);
Mu.blocks.forElem(this.$trackContainer.find(".like")[0]);
Mu.blocks.forElem(this.$trackContainer.find(".share")[0])
};c.prototype.onSeqOptionChange=function(){this.refreshSeqOptions()
};c.prototype.onShuffleToggle=function(){var i=h.toggleShuffle();
this.$shuffle.toggleClass("player-controls__btn_on",i)
};c.prototype.onRepeatToggle=function(){var i=h.toggleRepeat();
this.$repeat.toggleClass("player-controls__btn_on",i)
};c.prototype.onPlayClick=function(i){h.togglePause()
};c.prototype.onPrevNext=function(j,i){if(j===-1&&h.isRadio()){return
}this.disableHiglight=true;
h.move(j)};
c.prototype.onDislikeClick=function(){var j=h.current();
if(!j||!j.track){return
}if(!e.isLoggedIn()){d.show("authRequired")
}var i=j.track;
var k={trackId:i.id,albumId:i.albums&&i.albums.length>0&&i.albums[0].id,action:"dislike"};
h.feedbackRadio(k)
};c.prototype.onSeqClick=function(){var i=b.toggle("sequence");
this.$seq.toggleClass("player-controls__btn_checked",i)
};c.prototype.onSettingsClick=function(i){var j=this;
j.radioSettings.toggle().then(function(k){j.$settings.toggleClass("player-controls__btn_checked",k)
})};c.prototype.onPopupClose=function(i){if(i.name==="sequence"){this.$seq.toggleClass("player-controls__btn_checked",false)
}};c.prototype.onRadioSettingsClose=function(i){this.$settings.toggleClass("player-controls__btn_checked",false)
};c.prototype.refreshSeqOptions=function(){this.$prev.toggleClass("player-controls__btn_disabled",h.isRadio()||!h.canMove(-1));
this.$next.toggleClass("player-controls__btn_disabled",!h.canMove(1));
this.$shuffle.toggleClass("player-controls__btn_on",h.options.shuffle);
this.$repeat.toggleClass("player-controls__btn_on",h.options.repeat)
};c.prototype.refreshRadio=function(i){this.$cont.toggleClass("player-controls_radio",i)
};c.prototype.highlightSeq=function(){var i=this;
if(!i.disableHiglight){i.$seq.addClass("player-controls__btn_pulse");
setTimeout(function(){i.$seq.removeClass("player-controls__btn_pulse")
},600)}i.disableHiglight=false
};c.prototype.changeTrack=function(j){var i=this;
if(i.animateDelay){clearTimeout(i.animateDelay)
}i.animateDelay=setTimeout(function(){i.animateDelay=undefined;
if(!j||i.currentEntry===j){return
}i.currentEntry=j;
var k=yr.run("index",j,"player-controls__track");
var l=i.$trackContainer.find(".player-controls__track");
if(l.length){l.animate({opacity:0},{duration:80,complete:i.initTrack.bind(i,k)})
}else{i.initTrack(k)
}},100)};return c
})());Mu.blocks.register("playlist",(function(){var f,e,d,c,b,a;
var g=function(){};
g.init=function(h){f=h.get("seq");
e=h.get("sidebars");
d=h.get("datasrc");
c=h.get("auth");
b=h.get("blocks").get("notify");
a=h.get("froms");
this.domDelegate("click",function(j){var k=Mu.blocks.forElem(this);
var i=$(j.target);
if(i.closest(".playlist__play").length===1){k.onPlayClick(j)
}else{if(i.closest("a").length===0){k.onClick(j)
}}})};g.prototype.onClick=function(h){this.triggerEvent({type:"playlist.click"})
};g.prototype.setSelected=function(h){$(this.container).toggleClass("playlist_selected",h)
};g.prototype.onPlayClick=function(h){var i=this;
i.triggerEvent({type:"playlist.play"});
var j={owner:i.data.owner.login,kinds:i.data.kind};
d.get("playlist",j,{nocache:true}).then(function(m){var o=m.playlist;
var k=o.tracks.filter(function(q){return q&&!q.error
}).map(function(q){return{album:q.albums[0],track:q}
});var n=o.title;
var p=a.getBlockFrom(i.container,"playlist");
var l={shortTitle:n,title:"Плейлист «"+n+"»",href:"/users/"+o.owner.login+"/playlists/"+o.kind,from:p,playlist:o};
f.playFixed(l,k,0)
})};g.prototype.openSidebar=function(){var h=a.getCardFrom(this.container,"playlist");
e.show("playlist",{owner:this.data.owner.login,kind:this.data.kind,from:h})
};return g})());
Mu.blocks.register("popup",(function(){var d;
var a,b;var c=function(e,f){this.container=e;
this.options=f||{};
this.isOpen=false;
this.init();
Mu.eventize(this)
};c.init=function(e){d=$(document);
a=e.get("popups");
b=e.get("pages");
this.items=[];
this.$overlay=$(".overlay");
this.overlayVisible=false;
d.on("mousedown",this.onHidePopup.bind(this));
d.on("keydown",this.onKeyDown.bind(this));
b.on("loading",this.onPageLoading.bind(this))
};c.prototype.init=function(){this.$cont=$(this.container);
this.$cont.toggleClass("popup_hidden",true).toggleClass("popup",true).toggleClass("popup_modal",!!this.options.modal);
this.setOpener()
};c.onHidePopup=function(e){c.closeAll(e)
};c.onKeyDown=function(e){if(e.keyCode===27){c.closeAll(e);
a.hide()}};
c.onPageLoading=function(e){c.closeAll(e);
a.hide()};c.prototype.onOpenerMouseDown=function(e){if(this.isOpen){e.stopPropagation()
}};c.prototype.show=function(){this.trigger("beforeshow");
if(this.options.modal){this.showOverlay(true)
}this.$cont.toggleClass("popup_hidden",false);
this.$cont.toggleClass("popup_fixed",!!this.options.fixed);
if(this.options.position){this.$cont.position(this.options.position)
}this.isOpen=true;
c.items.push(this);
this.trigger("show")
};c.prototype.hide=function(e){this.trigger("beforehide");
this.$cont.toggleClass("popup_hidden",true);
if(this.options.modal&&c.overlayVisible){this.showOverlay(false)
}this.isOpen=false;
this.removeFromItems();
this.trigger("hide",e)
};c.prototype.toggle=function(){if(this.isOpen){this.hide()
}else{this.show()
}return this.isOpen
};c.prototype.setOptions=function(e){this.options=$.extend(this.options,e);
if(e.opener||e.position){this.setOpener()
}};c.prototype.setOpener=function(){if(this.$opener){this.$opener.unbind("mousedown.Popup")
}if(!this.options.toggable){return
}this.$opener=$(this.options.opener||(this.options.position&&this.options.position.of));
if(this.$opener){this.$opener.bind("mousedown.Popup",this.onOpenerMouseDown.bind(this))
}};c.prototype.showOverlay=function(e){e=!!e;
c.overlayVisible=e;
c.$overlay.toggleClass("overlay_shown",c.overlayVisible);
if(e){}else{}};
c.closeAll=function(e){if(!c.items||!c.items.length){return
}var f=c.items.slice(0);
$.each(f,function(h,j){if(j.isOpen){var g=false;
if(e.type==="mousedown"){g=j.$cont[0]===e.target||j.$cont.has(e.target).length
}if(!g){j.hide(e)
}}})};c.prototype.removeFromItems=function(){var e;
if(!c.items||!c.items.length){return
}e=c.items.indexOf(this);
if(e!=-1){c.items.splice(e,1)
}};c.prototype.mixin=function(g,f){var f=f||["toggle","show","hide","setOptions","isOpen"],e,h;
for(e=0;e<f.length;
e++){h=f[e];
if(!this.mixins[h]){continue
}g[h]=this.mixins[h]
}};c.prototype.mixins={toggle:function(){return this.popup.toggle()
},show:function(){return this.popup.show()
},hide:function(){return this.popup.hide()
},setOptions:function(e){this.popup.setOptions(e)
},isOpen:function(){return this.popup.isOpen
}};return c
})());Mu.blocks.register("progress",(function(){var a=yr.externals.formatDuration;
var b=function(d){this.dom=d;
this.clipPattern=this.dom.style.clip.split("-1");
this.clipPattern.splice(1,0,-1);
this.fillPercent=0;
this.fillPx=-1
};b.prototype.getWidth=function(){return this.dom.offsetWidth
};b.prototype.updateFill=function(){var d=Math.round(this.getWidth()*this.fillPercent);
if(d!==this.fillPx){this.fillPx=d;
this.clipPattern[1]=d;
this.dom.style.clip=this.clipPattern.join("")
}};var c=function(e){var d=$(e);
this.$dom=d;
this.playProgress=new b(d.find(".progress__progress")[0]);
this.loadProgress=new b(d.find(".progress__progress_muted")[0]);
this.$left=d.find(".progress__left");
this.$right=d.find(".progress__right");
this.$name=d.find(".progress__name");
this.fillPercent=0;
this.changing=false;
this.userPos=-1;
this.stopped=false;
this.curr={left:"0:00",right:"",title:undefined,fillPx:-1};
$(window).on("resize",function(){this.playProgress.updateFill();
this.loadProgress.updateFill()
}.bind(this));
d.on("mousedown",this.onMouseDown.bind(this))
};c.prototype.init=function(d){this.player=d.get("player");
this.seq=d.get("seq");
this.player.on("timeupdate",this.onTimeUpdate.bind(this));
this.seq.on("changeCurrent",this.onSeqChange.bind(this));
d.get("layout").on("resize",this.calculateOffsetLeft.bind(this));
this.calculateOffsetLeft();
this.onSeqChange()
};c.prototype.onSeqChange=function(){this.stopped=false;
var f=this.seq.current();
var g="";if(f){var e=f.track;
var d=[].concat((f.album&&f.album.artists)||[],e.artists||[]).map(function(h){return h.name
});d=d.filter(function(j,i,h){return h.indexOf(j)===i
});g=e.title+" — "+d.join(", ")
}else{this.stop()
}if(g!==this.curr.title){this.curr.title=g;
this.$name.text(g)
}};c.prototype.onMouseDown=function(d){var e=this;
e.changing=true;
Mu.dnd(d,{onMove:function(f){e.onUserPosChange(f.pageX)
},onEnd:function(f,g){e.changing=false;
if(!g){e.player.setPosition(e.userPos)
}}});e.onUserPosChange(d.pageX)
};c.prototype.onUserPosChange=function(f){var d=this.playProgress;
d.fillPercent=(f-this.offsetLeft)/this.playProgress.getWidth();
if(d.fillPercent<0){d.fillPercent=0
}else{if(d.fillPercent>1){d.fillPercent=1
}}this.playProgress.updateFill();
this.userPos=d.fillPercent*this.player.getDuration();
var e=a(this.userPos*1000);
if(e!==this.curr.left){this.curr.left=e;
this.$left.text(e)
}};c.prototype.onTimeUpdate=function(f){if(this.stopped){return
}var d=a(f.duration*1000);
if(d!==this.curr.right){this.curr.right=d;
this.$right.text(d)
}if(!this.changing){var e=a(f.position*1000);
if(e!==this.curr.left){this.curr.left=e;
this.$left.text(e)
}this.playProgress.fillPercent=f.position/f.duration;
this.loadProgress.fillPercent=f.loaded/f.duration;
this.playProgress.updateFill();
this.loadProgress.updateFill()
}};c.prototype.stop=function(){this.stopped=true;
this.playProgress.fillPercent=0;
this.loadProgress.fillPercent=0;
this.playProgress.updateFill();
this.loadProgress.updateFill();
this.$left.text("0:00");
this.$right.text("0:00")
};c.prototype.calculateOffsetLeft=function(){this.offsetLeft=this.$dom.offset().left
};return c})());
Mu.blocks.register("promo",(function(){var b,d,f,c,a;
var e=function(){};
e.init=function(g){b=g.get("datasrc");
d=g.get("blocks");
f=g.get("seq");
c=g.get("sidebars");
a=g.get("froms");
this.domDelegate("click",function(i){var j=d.forElem(this);
var h=$(i.target);
if(h.closest(".promo__play").length===1){j.onPlayClick(i)
}else{if(h.closest("a").length===0){j.onClick(i)
}}})};e.prototype.onClick=function(g){this.triggerEvent({type:"promo.click"})
};e.prototype.openSidebar=function(){var g=this.data;
var i=a.getCardFrom(this.container,"promotion");
switch(g.promotionType){case"album":c.show("album",{album:g.album.id,from:i});
break;case"artist":c.show("artist",{artist:g.artist.id,from:i});
break;case"track":c.show("track",{track:g.track.id,album:g.album?g.album.id:-1,hideAlbum:false,from:i});
break;case"playlist":var h=g.playlist.playlist;
c.show("playlist",{owner:h.owner.login,kind:h.kind,from:i});
break}};e.prototype.onPlayClick=function(){var g=this.data;
switch(g.promotionType){case"album":this.playAlbum(g.album);
break;case"artist":this.playArtist(g.artist);
break;case"track":this.playTrack(g.track,g.album);
break;case"playlist":this.playPlaylist(g.playlist.playlist);
break}};e.prototype.playTrack=function(h,g){var k=a.getBlockFrom(this.container,"track");
var i={shortTitle:h.title,title:h.title,href:"/album/"+(g&&g.id)+"/track/"+h.id,from:k};
var j={album:g,track:h};
f.playOne(i,j)
};e.prototype.playAlbum=function(g){var h=a.getBlockFrom(this.container,"album");
b.get("album",{album:g.id}).then(function(l){var k={shortTitle:g.title,title:"Альбом «"+g.title+"»",href:"/album/"+g.id,from:h};
var j=Array.prototype.concat.apply([],l.volumes);
var i=j.map(function(m){return{album:g,track:m}
});f.playFixed(k,i)
})};e.prototype.playArtist=function(g){var i=a.getBlockFrom(this.container,"artist");
var h={shortTitle:g.name,title:"Популярные треки исполнителя "+g.name,href:"/artist/"+g.id,from:i};
b.get("artist-top-tracks",{artist:g.id}).then(function(k){var j=k.tracks.map(function(l){return{album:l.albums&&l.albums[0],track:l}
});f.playFixed(h,j)
})};e.prototype.playPlaylist=function(h){var i=a.getBlockFrom(this.container,"playlist");
var g={shortTitle:h.title,title:"Плейлист «"+h.title+"»",href:"/users/"+h.owner.login+"/playlists/"+h.kind,from:i,playlist:h};
b.get("playlist",{kinds:h.kind,owner:h.owner.login}).then(function(k){var j=k.playlist.tracks.map(function(l){return{album:l.albums&&l.albums[0],track:l}
});f.playFixed(g,j)
})};e.prototype.setSelected=function(){};
return e})());
Mu.blocks.register("radio-settings",(function(){var a,d,c;
var b=function(){this.position=undefined;
this.popup=undefined;
this.$cont=undefined;
this.data={isRadio:false,genres:undefined};
Mu.eventize(this)
};b.init=function(e){a=e.get("datasrc");
d=e.get("seq");
c=Mu.Storage.create("localStorage")
};b.prototype.init=function(){var e=this;
e.$cont=$(e.container);
e.popup=new (Mu.blocks.get("popup"))(e.container,{toggable:true});
e.popup.mixin(this,["setOptions"]);
e.popup.on("hide",this.onClose.bind(this));
e.delegate("group.change",this.onRadioSettingChange.bind(this))
};b.prototype.onClose=function(e){this.trigger("hide")
};b.prototype.onRadioSettingChange=function(f){var h=f.target.data.param;
var e=this.data.genre;
var g=f.target.getValue();
d.setOption(h,g);
if(e){c.setItem(e+"_"+h,g)
}};b.prototype.toggle=function(){var e=this;
return this.getGenres().then(function(){if(!e.popup.isOpen){e.repaint()
}return e.popup.toggle()
})};b.prototype.repaint=function(){var e=this;
e.restoreSettings();
var f=yr.run("index",e.data,"radio-settings__content");
e.$cont.html(f)
};b.prototype.getGenres=function(){var e=this;
if(e.data.genres){return Vow.resolve(e.data.genres)
}return a.get("radio-genres").then(function(f){e.data.genres=(f&&f.radios)||{};
return e.data.genres
})};b.prototype.restoreSettings=function(){var e=this;
var g=e.data;
var f=d.flow.options;
g.context=d.context;
g.settings={popFactor:f.popFactor||0,language:f.language||"any"};
g.genre=f.genre
};return b})());
Mu.blocks.register("radio",(function(){var c,a;
var b=function(){};
b.init=function(d){c=d.get("seq");
a=d.get("froms");
this.domDelegate("click",".radio__play",function(e){var f=Mu.blocks.forElem(this,"radio");
f.onPlayClick(e)
})};b.prototype.onPlayClick=function(e){var d=this.data.id;
var g=yr.externals.genreName(d,true);
var f={shortTitle:g,title:"Радио жанра "+g,href:"/genre/"+d};
var i=a.getBlockFrom(this.container,"radio");
var h={genre:this.data.id};
f.from=i;c.playRadio(f,h)
};return b})());
Mu.blocks.register("scrobble-control",(function(){var e,c,a;
var b={"last-fm":"https://last.fm/api/auth/?api_key=13c23936e96b4f2254214eed15190e12&cb=",facebook:"https://www.facebook.com/dialog/oauth?client_id=117328825040925&scope=publish_actions&display=popup&redirect_uri="};
var d=function(g){this.node=g;
var f=this;
this.nbToggler=nb.block($(g).find(".scrobble-control__toggler")[0]);
this.nbToggler.on("nb-changed",function(){f.onTogglerToggle()
})};d.init=function(f){e=f.get("blocks");
c=f.get("datasrc");
a=f.get("auth");
this.domDelegate("click",".scrobble-control__disconnect",function(g){var h=e.forElem($(this).closest(".scrobble-control")[0]);
h.onDisconnectClick(g,this)
});Mu.eventize(this);
this.on("connect",this.onConnect.bind(this))
};d.onConnect=function(f){f=JSON.parse(f);
if(!f.type||!f.name){return
}var g=e.forElem($(".js-scrobble-"+f.type)[0]);
if(g){g.data=f;
g.redrawProfile();
if(f.scrobblingEnabled){g.nbToggler.check()
}}};d.prototype.onTogglerToggle=function(){if(!this.data.name){this.nbToggler.uncheck();
this.connect();
return}var f={};
f[this.data.type+"-scrobbling-enabled"]=this.nbToggler.isChecked();
c.saveSettings(f)
};d.prototype.onDisconnectClick=function(f,g){c.unbindSocial(this.data.type);
this.nbToggler.uncheck();
delete this.data.name;
delete this.data.link;
delete this.data.userid;
this.redrawProfile()
};d.prototype.connect=function(){var i=this.data.type;
var m="yamusic_"+i;
var g=950;var n=450;
var h=Math.round((screen.availWidth-g)/2);
var l=Math.round((screen.availHeight-n)/2);
var f="scrollbars=yes, resizable=1, menubar=0, toolbar=0, status=0, location=0, directories=0, left="+h+", top="+l+", width="+g+", height="+n;
var o=(i==="last-fm")?"http":"https";
var k=o+"://"+location.host+"/handlers/social-bind.jsx?type="+i+"&sign="+a.user.sign;
var j=b[i]+encodeURIComponent(k);
this.bindWindow=window.open(j,m,f);
if(this.bindWindow){this.bindWindow.focus()
}};d.prototype.redrawProfile=function(){$(this.node).find(".scrobble-control__connected").html(yr.run("index",this.data,"scrobble-control__connected"))
};return d})());
Mu.blocks.register("search-nav",(function(){var c;
var b;var a=function(){};
a.init=function(d){c=$(document);
b=d.get("layout")
};a.prototype.init=function(){var d=this;
d.$cont=$(this.container);
d.$content=this.$cont.find(".search-nav__content");
d.$items=d.$cont.find(".search-nav__content .search-nav__item:not(.search-nav__item_more)");
d.$popupItems=d.$cont.find(".search-nav__popup .search-nav__item");
d.itemsData=undefined;
d.$more=d.$cont.find(".search-nav__item_more");
d.$popup=d.$cont.find(".search-nav__popup");
d.popup=new (Mu.blocks.get("popup"))(d.$popup,{position:{my:"left center",at:"right center",of:d.$more[0]},toggable:true,fixed:true});
d.$more.on("click",function(){var e=d.popup.toggle();
d.$more.toggleClass("search-nav_selected",e)
});d.popup.on("hide",function(){d.$more.toggleClass("search-nav_selected",false)
});this.adjustLayout();
b.on("resize",this.adjustLayout.bind(this))
};a.prototype.getItemsData=function(){var d=this,e=[];
d.$items.each(function(g,h){var f={};
f.$item=$(h);
f.$popupItem=$(d.$popupItems[g]);
f.top=f.top||f.$item.offset().top-c.scrollTop();
f.height=f.height||f.$item.height();
e[g]=f});return e
};a.prototype.reflow=function(f,g){var e=this,d=document.body.clientHeight-f,h=false;
e.popup.hide();
e.itemsData=e.itemsData||e.getItemsData();
e.$items.each(function(k,l){var j=e.itemsData[k];
j.stacked=j.height+j.top>d;
j.$item.toggleClass("search-nav__item_preload",!g&&j.stacked);
j.$item.toggleClass("search-nav__item_stacked",j.stacked);
if(!j.stacked){j.$popupItem.remove()
}else{j.$popupItem.appendTo(e.$popup)
}h=h||j.stacked
});e.$more.toggleClass("search-nav__item_hidden",!h)
};a.prototype.adjustLayout=function(){this.$content.css("left",b.earWidth)
};return a})());
Mu.blocks.register("share",(function(){var b;
var a=function(c){};
a.init=function(c){b=c.get("blocks");
this.domDelegate("click",function(d){b.forElem(this).onClick()
})};a.prototype.init=function(){this.$cont=$(this.container);
this.isDisabled=!!this.data.disabled;
this.$yaShare=this.$cont.find(".share__yashare")
};a.prototype.onClick=function(){if(this.isDisabled){return
}if(this.yaShare){return
}if(!window.Ya||!Ya.share){return
}var d=$(this.container);
var f=d.closest(".track");
var e=yr.run("index",this.data,"share__title_unescaped");
var c=yr.run("index",this.data,"share__link");
this.yaShare=Ya.share({element:this.$yaShare[0],title:e,link:c,l10n:"ru",elementStyle:{quickServices:[],type:"link",linkIcon:false,border:false},popupStyle:{blocks:{"":["vkontakte","twitter","facebook","odnoklassniki"]}},serviceSpecific:{twitter:{title:e+" #nowplaying"},lj:{link:'<a href="'+c+'">'+e+'</a> на <a href="http://music.yandex.ru/">Яндекс.Музыке</a>',title:e}},onready:function(g){g.openPopup()
},onopen:function(){d.addClass("share_open");
f.addClass("track_hover")
},onclose:function(){d.removeClass("share_open");
f.removeClass("track_hover")
}})};a.prototype.setDisabled=function(c){this.isDisabled=this.data.disabled=c;
$(this.container).toggleClass("button_disabled",c);
this.$cont.attr("title",yr.run("index",this.data,"share__tooltip-text"));
this.$yaShare.toggle(!c)
};return a})());
Mu.blocks.register("smalladv",(function(){var b=30*1000;
var a=function(c){this.node=c
};a.loadScript=function(){if(this.promise){return this.promise
}var c=Vow.defer();
this.promise=c.promise();
(function(e,h,i,g,f){e[i]=e[i]||[];
e[i].push(function(){c.resolve()
});f=h.getElementsByTagName("script")[0];
g=h.createElement("script");
g.type="text/javascript";
g.src="//an.yandex.ru/system/context.js";
g.async=true;
f.parentNode.insertBefore(g,f)
})(window,document,"yandexContextAsyncCallbacks");
return this.promise
};a.prototype.init=function(c){this.refreshBlocks();
c.get("pages").on("loaded",this.refreshBlocks.bind(this))
};a.prototype.refreshBlocks=function(){a.loadScript().then(this.doRefresh.bind(this))
};a.prototype.doRefresh=function(){if(this.lastLoad&&(new Date()-this.lastLoad)<b){return
}this.lastLoad=new Date();
$(this.node).empty();
if(this.data.rtb){this.insertRtb(this.subNode(),this.data.rtbId)
}if(this.data.direct){this.insertDirect(this.subNode(),this.data.directId)
}};a.prototype.subNode=function(){var c=document.createElement("div");
c.className="smalladv__item";
this.node.appendChild(c);
return c};a.prototype.insertRtb=function(d,c){var e="yandex_rtb_"+c;
d.id=e;Ya.Context.AdvManager.render({blockId:c||"R-I-58891-2",renderTo:e,async:true})
};a.prototype.insertDirect=function(d,c){var e="yandex_direct_"+c;
d.id=e;Ya.Context.AdvManager.render({blockId:c||"D-I-58891-5",renderTo:e})
};return a})());
Mu.blocks.register("social-bind",(function(){var a,d,b;
var c=function(){};
c.init=function(e){a=e.get("datasrc");
d=e.get("broker");
b=e.get("auth");
this.domDelegate("click",function(f){Mu.blocks.forElem(this).onClick(f)
})};c.brokerParams={startUrl:Mu.settings.social+"broker/start",retpath:location.protocol+"//"+location.host+"/closer.html",consumer:"music",popupName:"social_music",return_brief_profile:"true",action_if_anonymous:"authorize",result_location:"fragment"};
c.prototype.init=function(){this.params=$.extend({},this.data.params,c.brokerParams)
};c.prototype.onClick=function(e){var g=d(this.params);
var f=this;
g.start(function(h){if(h.status!=="ok"||!h["profile.profile_id"]){return
}if(b.isLoggedIn()){f.bindProfile(h)
}else{b.refresh().then(function(){f.bindProfile(h)
})}})};c.prototype.bindProfile=function(f){var g=this.params.provider;
if(g!=="facebook"&&g!=="vkontakte"){return
}var e=this;
a.post("change-profile",{action:"add","profile-id":f["profile.profile_id"],provider:g}).then(function(h){e.onBindSuccess(h,g)
})};c.prototype.onBindSuccess=function(e,f){if(e.success){this.triggerEvent({type:"social-bind.bound",provider:f})
}};return c
})());Mu.blocks.register("subscribe",(function(){var c,d,b,e;
var a=function(f){};
a.init=function(f){c=f.get("auth");
d=f.get("datasrc");
b=f.get("blocks").get("notify");
e=f.get("library");
this.domDelegate("click",".subscribe__button",function(g){var h=Mu.blocks.forElem(this,"subscribe");
h.onSubscribeClick(g)
})};a.prototype.init=function(){this.$cont=$(this.container)
};a.prototype.repaint=function(g){if(g===undefined){g=e.isFavorite(this.data)
}var f=yr.run("index",$.extend(this.data,{subscribed:g}),"subscribe__button");
this.$cont.find(".subscribe__button").replaceWith(f)
};a.prototype.onSubscribeClick=function(f){var g=this,h=g.data;
if(!c.isLoggedIn()){b.show("authRequired");
return}var i=!e.isFavorite(h);
var j={act:i?"add":"remove",ref:true,userId:h.user.uid};
e.change(j);
g.repaint(i)
};return a})());
Mu.blocks.register("table-head",(function(){var c="asc",b="desc",d=b;
var a=function(e){this.$container=$(e);
this.$icon=this.$container.find(".icon")
};a.init=function(e){this.domDelegate("click",function(f){var g=Mu.blocks.forElem(this);
if(g.data.sort&&g.data.sort.useUrl){g.onClick(f)
}})};a.prototype.onClick=function(e){this.swapDirection();
this.triggerEvent({type:"table-head.click"})
};a.prototype.setSelected=function(e){e=!!e;
$(this.container).toggleClass("table-head_active",e);
if(!e&&this.data.sort.dir!==d){this.swapDirection()
}};a.prototype.swapDirection=function(){var e=this.data.sort;
e.dir=e.dir===c?c:d;
this.$icon.toggleClass("icon_"+e.dir,false);
e.dir=e.dir===c?b:c;
this.$icon.toggleClass("icon_"+e.dir,true)
};return a})());
Mu.blocks.register("text-expander",(function(){var a=function(b){this.$container=$(b);
this.$preview=this.$container.find(".text-expander__preview");
this.$content=this.$container.find(".text-expander__content")
};a.init=function(b){this.domDelegate("click",function(d){var e=Mu.blocks.forElem(this);
var c=$(d.target);
if(c.closest(".text-expander__link_collapse").length==1){e.onCollapseClick(d)
}else{if(c.closest(".text-expander__link_expand").length==1){e.onExpandClick(d)
}}})};a.prototype.onExpandClick=function(b){this.showContent(true)
};a.prototype.onCollapseClick=function(b){this.showContent(false)
};a.prototype.showContent=function(b){b=!!b;
this.$content.toggleClass("text-expander__content_shown",b);
this.$preview.toggleClass("text-expander__preview_hidden",b)
};return a})());
Mu.blocks.register("toggler-control",(function(){var a=function(){};
a.prototype.init=function(){var b=this;
var c=$(b.container);
b.toggler=c.find(".nb-toggler")[0];
b.nbToggler=nb.block(b.toggler);
b.nbToggler.on("nb-changed",function(d){b.onChange(d)
})};a.prototype.onChange=function(b){this.triggerEvent({type:"toggler.change"})
};a.prototype.isChecked=function(){return this.nbToggler.isChecked()
};a.prototype.check=function(b){if(!!b){this.nbToggler.check()
}else{this.nbToggler.uncheck()
}};a.prototype.toggle=function(){var b=!this.isChecked();
this.check(b);
return b};return a
})());Mu.blocks.register("tooltip",(function(){var a=function(){this.position=undefined;
this.popup=undefined;
this.$cont=undefined;
this.$tail=undefined;
this.tail=undefined;
this._isOpen=false;
this._isInited=false;
Mu.eventize(this)
};a.init=function(b){a.current=null;
$(window).on("mousedown",function(c){if(a.current){a.current.hide()
}})};a.prototype.init=function(){this.trigger("init");
this.$cont=$(this.container);
this.$tail=this.$cont.find(".tooltip__tail");
this.$parent=this.data.parent?this.$cont.parent().find(this.data.parent):this.$cont.parent();
this.$content=this.$cont.find(".tooltip__static-text");
this.$popup=this.data.popup?$(this.data.popup):undefined;
if(this.data.autoInit){this.$parent.on("mouseenter",this.onShowTooltip.bind(this));
this.$parent.on("mouseleave",this.onHideTooltip.bind(this))
}};a.prototype.initLayout=function(){this.trigger("initLayout");
this.position=this.position||this.data.position||{my:"center bottom",at:"center top-5"};
this.position.of=this.position.of||this.$parent;
this.tail=this.tail||this.data.tail;
var d=this.getTailClass();
var b=this.tail&&this.tail.side;
this.$tail.toggleClass(d,true);
for(var c in b){if(!b.hasOwnProperty(c)){continue
}this.$tail.css(c,b[c])
}this._isInited=true
};a.prototype.show=function(){this.trigger("show");
if(a.current){a.current.hide()
}if(!this._isInited){this.initLayout()
}a.current=this;
this.$cont.toggleClass("tooltip_hidden",false);
this.$cont.position(this.position);
this._isOpen=true
};a.prototype.hide=function(){this.trigger("hide");
a.current=null;
this.$cont.toggleClass("tooltip_hidden",true);
this._isOpen=false
};a.prototype.isOpen=function(){return this._isOpen
};a.prototype.setContent=function(b){this.$content.text(b);
if(this.isOpen()){this.show()
}};a.prototype.onShowTooltip=function(){var b=this;
if(!b.canOpen()){return
}b.delay=setTimeout(function(){if(b.canOpen()){b.show()
}}.bind(this),500)
};a.prototype.onHideTooltip=function(){if(this.delay){clearTimeout(this.delay);
this.delay=null
}this.hide()
};a.prototype.getTailClass=function(){var d="tooltip__tail_bottom-left";
var e=/(left|right|top|bottom|center)/g;
if(this.tail&&this.tail.className){return this.tail.className
}if(!this.position||!this.position.my){return d
}var f=this.position.my.match(e);
var c=this.position.at.match(e);
if(f.length<2||c.length<2){return d
}var b=undefined;
if(f[1]!=="center"&&f[1]==c[1]){b=f.join("-")
}else{b=f.reverse().join("-")
}return"tooltip__tail_"+b
};a.prototype.canOpen=function(){if(!this.data.checkedClass){return true
}return !this.$parent.hasClass(this.data.checkedClass)
};return a})());
Mu.blocks.register("top-pic",(function(){var b,d,a;
var c=function(){};
c.init=function(e){b=e.get("yate_extrnals");
d=e.get("sidebars");
a=e.get("froms");
this.domDelegate("click",function(f){var g=Mu.blocks.forElem(this);
g.onClick(f)
})};c.prototype.onClick=function(e){this.triggerEvent({type:"top-pic.click"})
};c.prototype.init=function(){this.$cont=$(this.container);
this.$shownImg=this.$cont.find(".top-pic__img_top");
this.$hidenImg=this.$cont.find(".top-pic__img_bottom");
this.size=this.data.coverSize||144
};c.prototype.changeAlbum=function(e){this.data=e;
var f=b.cover(this.data.cover,this.size);
this.$hidenImg.attr("src",f);
this.$hidenImg.toggleClass("top-pic__img_hidden",false);
this.$shownImg.toggleClass("top-pic__img_hidden",true);
var g=this.$shownImg;
this.$shownImg=this.$hidenImg;
this.$hidenImg=g
};c.prototype.openSidebar=function(){var e=a.getCardFrom(this.container,"album");
d.show("album",{album:this.data.id,from:e})
};c.prototype.setSelected=function(){};
return c})());
Mu.blocks.register("top-pics",(function(){var a=function(){};
a.prototype.animate=function(f){var g={};
for(var d=0;
d<f;d++){var b=this.getRandom(this.$imgs.length);
if(g[b]){continue
}g[b]=true;
var e=Mu.blocks.forElem(this.$imgs[b]);
var c=this.getRandom(this.data.albums.length);
e.changeAlbum(this.data.albums[c])
}};a.prototype.init=function(){this.size=this.data.coverSize||144;
this.$cont=$(this.container);
this.$imgs=this.$cont.find(".top-pic")
};a.prototype.getRandom=function(b){return Math.floor(Math.random()*b)
};return a})());
Mu.blocks.register("track",(function(){var g,c,e,b,f,a;
var d=function(){};
d.init=function(h){g=h.get("seq");
c=h.get("sidebars");
e=h.get("navigation");
b=h.get("fav");
a=h.get("froms");
f=h.get("library");
this.domDelegate("click",function(k){var j=Mu.blocks.forElem(this);
if(j.$cont.hasClass("track_error")){return
}var i=$(k.target);
if(i.closest(".track__play").length===1){j.onPlayClick(k)
}else{if(i.closest(".track__actions").length===0&&i.closest("a").length===0){j.onClick(k)
}}});this.domDelegate("click",".track__delete",function(j){var i=Mu.blocks.forElem(this,"track");
i.onDeleteClick(j)
});this.domDelegate("dblclick",function(i){Mu.blocks.forElem(this).onDblClick(i)
});b.on("liked",function(i){var k=$(i.target).closest(".track");
if(!k.length){return
}var j=Mu.blocks.forElem(i.target);
k.toggleClass("track_in-lib",f.isInLibrary(j.data))
})};d.prototype.init=function(){this.$cont=$(this.container)
};d.prototype.onClick=function(h){this.triggerEvent({type:"track.click"})
};d.prototype.setSelected=function(h){$(this.container).toggleClass("track_selected",h)
};d.prototype.setPlaying=function(h){$(this.container).toggleClass("track_playing",h)
};d.prototype.getAlbum=function(){var i=this.data;
var h=i.albums&&i.albums[0];
if(!h){var j=this.closestParent("album")||this.closestParent("page-album")||this.closestParent("sidebar-album");
if(j){h=j.data
}}return h};
d.prototype.togglePlay=function(){var k=this.data;
if(k.error){return
}d.expected=this;
var j=this.getAlbum();
if(g.isCurrent({album:j,track:k})){g.togglePause()
}else{var m=this.triggerEvent({type:"track.getContext"});
var h=-1;if(m){for(var l=0;
l<m.entries.length;
l++){if(m.entries[l].track===k){h=l;
break}}}else{m={entries:[{album:j,track:k}]}
}m.from=m.from||a.getBlockFrom(this.container,"track");
if(m.artistId){g.playArtistTracks(m,{artistId:m.artistId,entries:m.entries},h)
}else{g.playFixed(m,m.entries,h)
}}};d.prototype.onPlayClick=function(h){this.togglePlay();
h.stopPropagation()
};d.prototype.openSidebar=function(k,j,n){var i=this.data;
var h=n||this.getAlbum();
var m=a.getCardFrom(this.container,"track");
var l=(i.original&&i.original.id)||i.id;
c.show("track",{track:l,album:h?h.id:-1,hideAlbum:!!n,from:m});
if(k){e.pushState("/album/"+h.id+"/track/"+l,j)
}};d.prototype.onDeleteClick=function(h){var i=this.$cont.find(".track__delete");
var j=Mu.blocks.forElem(i[0]);
this.triggerEvent({type:"track.delete",data:j.data})
};d.prototype.onDblClick=function(h){if($(h.target).closest(".track__play").length===1||$(h.target).closest(".track__actions").length===1||this.$cont.hasClass("track_type_player")){return
}this.togglePlay()
};return d})());
Mu.blocks.register("users-popup",(function(){var a;
var b=function(){this.position=undefined;
this.popup=undefined;
this.$cont=undefined;
Mu.eventize(this)
};b.init=function(c){a=c.get("auth")
};b.prototype.init=function(){var c=this;
c.$cont=$(c.container);
c.$header=c.$cont.find(".users-popup__header");
c.$content=c.$cont.find(".users-popup__content");
c.popup=new (Mu.blocks.get("popup"))(this.$cont,{position:{my:"center",at:"center",of:window},modal:true});
c.popup.mixin(this,["setOptions","hide","isOpen","toggle"]);
c.$cont.on("click",".popup__close",function(){c.hide()
});c.$cont.on("click",".users-popup__avatar, .users-popup__user-name",function(){c.hide()
})};b.prototype.show=function(d){var e=yr.run("index",d,"users-popup__header");
var c=yr.run("index",$.extend(d,{auth:a}),"users-popup__content");
this.$content.html(c);
this.$header.html(e);
this.popup.show()
};return b})());
Mu.blocks.register("video-preview",(function(){var a=function(){};
a.prototype.init=function(){var b=this;
b.$container=$(b.container);
b.$content=b.$container.find(".video-preview__content");
b.$container.on("click",".video-preview__close",function(c){b.onCloseClick(c)
})};a.prototype.onCloseClick=function(b){this.$content.html("");
this.setVisibility(false)
};a.prototype.show=function(b){this.$content.html(b.html);
this.setVisibility(true)
};a.prototype.setVisibility=function(b){this.$container.toggleClass("video-preview_shown",b)
};return a})());
Mu.blocks.register("video",(function(){var d,c,e="<p class='video__static-text'>Извините, мы не можем показать данное видео.</p>",b="<p class='video__static-text'>Загрузка...</p>";
var a=function(){};
a.init=function(f){d=f.get("datasrc");
c=f.get("player");
this.domDelegate("click",".video__pic",function(g){var h=Mu.blocks.forElem(this,"video");
h.onClick(g)
})};a.prototype.setSelected=function(f){$(this.container).toggleClass("video_active",f)
};a.prototype.playVideo=function(){var f={type:"video.play",html:e};
var h=this;
var g=setTimeout(function(){f.html=b;
h.triggerEvent(f)
},250);d.get("oembed",{url:h.data.url,autoplay:1},{nocache:true}).then(function(i){clearTimeout(g);
f.html=i.html||f.html;
h.triggerEvent(f)
},function(i){clearTimeout(g);
h.triggerEvent(f)
})};a.prototype.onClick=function(f){c.pause();
this.triggerEvent({type:"video.click"})
};return a})());
Mu.blocks.register("volume",(function(){var e=$(document),d=0.03,c="player_volume",b;
var a=function(f){this.$dom=$(f);
this.$track=this.$dom.find(".volume__track");
this.track=this.$track[0];
this.$filled=this.$dom.find(".volume__filled");
this.filled=this.$filled[0];
this.maxHeight=this.track.offsetHeight;
this.value=-1;
this.$dom.on("mousedown",".volume__control",this.onMouseDown.bind(this));
this.$dom.on("mouseenter",this.onMouseEnter.bind(this));
this.$dom.on("mouseleave",this.onMouseLeave.bind(this))
};a.init=function(f){b=Mu.Storage.create("localStorage")
};a.prototype.init=function(g){this.player=g.get("player");
var f=this.getVolume(true);
this.$cont=$(this.container);
this.$icon=this.$cont.find(".volume__icon");
this.$cont.on("click",".volume__icon",this.onClick.bind(this));
this.onUserPosChange(this.maxHeight*f);
this.player.on("volume",this.onPlayerVolume.bind(this))
};a.prototype.onClick=function(f){var g=this.player;
if(g.isReady()){g.toggleMute()
}else{g.whenReady(function(){g.toggleMute()
})}};a.prototype.onMouseDown=function(f){var g=this;
g.changing=true;
g.$dom.toggleClass("volume_used",true);
Mu.dnd(f,{startY:this.$track.offset().top+this.maxHeight,onMove:function(h){g.onUserPosChange(-h.deltaY)
},onEnd:function(h,i){g.$dom.toggleClass("volume_used",false);
g.changing=false
}});f.preventDefault()
};a.prototype.onMouseEnter=function(f){e.bind("DOMMouseScroll.volume",this.onScroll.bind(this));
e.bind("mousewheel.volume",this.onScroll.bind(this))
};a.prototype.onMouseLeave=function(f){e.unbind(".volume")
};a.prototype.onScroll=function(f){f=f.originalEvent?f.originalEvent:f;
var h=f.detail?(-1)*f.detail:f.wheelDelta;
var g=h<0?-d:d;
this.onUserPosChange(this.maxHeight*(this.getVolume()+g));
f.preventDefault()
};a.prototype.onUserPosChange=function(g){if(g<0){g=0
}else{if(g>this.maxHeight){g=this.maxHeight
}}var f=g/this.maxHeight;
this.saveVolume(f)
};a.prototype.onPlayerVolume=function(f){if(this.value!==f){this.value=f;
this.filled.style.height=Math.round(f*this.maxHeight)+"px";
this.updateIcon()
}};a.prototype.onMuted=function(f){this.updateIcon()
};a.prototype.getVolume=function(g){var f=g&&parseFloat(b.getItem(c));
var h=g&&!isNaN(f)?f:this.player.getVolume();
return h};a.prototype.saveVolume=function(g){b.setItem(c,g);
var f=this.player;
if(f.isReady()){f.setVolume(g)
}else{f.whenReady(function(){f.setVolume(g)
})}};a.prototype.updateIcon=function(){var h=this.player.getVolume();
var g=h===0;
var f=!g&&h<0.45;
this.$icon.toggleClass("volume__icon_mute",g);
this.$icon.toggleClass("volume__icon_half",f);
this.$icon.attr("title",g?"Включить звук [0]":"Выключить звук [0]")
};return a})());
(function(){Mu.layout={init:function(a){this.$head=$(".head");
this.$sidebar=$(".sidebar");
this.$sidebarUnder=this.$sidebar.find(".sidebar__under");
this.$loading=$(".loading_page");
this.$pageRoot=$(".page-root");
this._lastScrTop=0;
this.earWidth=0;
var b=$(window);
b.on("scroll",this.moveSidebar.bind(this));
b.on("resize",this.onResize.bind(this));
this.onResize()
},getHeadHeight:function(){return this.$head.outerHeight()+this.$head.offset().top
},moveSidebar:function(){var b=this.getHeadHeight();
var a=Math.max(0,$(window).scrollTop());
var d=a-this._lastScrTop;
var c=0;if(a<b){c=b-a
}if(a>=b||d<0){this.$sidebarUnder.scrollTop(this.$sidebarUnder.scrollTop()+d)
}this.$sidebar.css({top:c+"px"});
this.$loading.css({top:c+"px"});
this._lastScrTop=a
},onResize:function(){var a=window.innerWidth;
var b=this.$pageRoot.offset().left;
this.earWidth=b;
if(a<1280){$("body").addClass("layout_narrow");
this.$sidebar.css({right:0,left:"auto"})
}else{$("body").removeClass("layout_narrow");
this.$sidebar.css({right:b,left:b+950})
}this.$pageRoot.css("min-height",$(window).height());
this.trigger("resize")
}};Mu.eventize(Mu.layout)
})();(function(){var a=function(){};
a.prototype.init=function(b){this.blocks=b.get("blocks");
this.pages=b.get("pages");
this.sidebars=b.get("sidebars");
this.popups=b.get("popups");
this.seq=b.get("seq");
this.pages.on("loaded",this.hilitePage.bind(this));
this.sidebars.on("loaded",this.hilitePage.bind(this));
this.popups.on("loaded",this.hilitePage.bind(this));
this.seq.on("changeCurrent",this.hiliteAll.bind(this));
this.hiliteAll()
};a.prototype.hiliteAll=function(){this.hilitePage(this.pages.current);
this.hilitePage(this.sidebars.current);
this.hilitePage(this.popups.current)
};a.prototype.hilitePage=function(d){if(!this.seq||!d){return
}if(d.hilitedTrack){d.hilitedTrack.setPlaying(false);
d.hilitedTrack=null
}var b=this.seq.current();
if(b){var c=this.findTrack(d,b);
if(c){c.setPlaying(true);
d.hilitedTrack=c
}}};a.prototype.findTrack=function(j,h){var c=this.blocks.get("track");
var g=c.expected;
if(g&&g.data===h.track){c.expected=null;
if(Array.indexOf($(g.container).parents(),j.container)!==-1){return g
}}var e=function(i){return i.data&&i.data.id===h.track.id
};var f=$(j.container).find(".track");
for(var b=0;
b<f.length;
b++){var d=this.blocks.forElem(f[b]);
if(d&&e(d)){return d
}}};Mu.Hiliter=a
})();(function(){var a={items:[[c(/^\/album\/(:<album>\d+)(?:\/track\/(:<track>\d+))?\/?(?:\?.*)?$/),"album"],[c(/^\/artist\/(:<artist>\d+)(?:\/(:<what>[^/?]*))?\/?(?:\?(:<query>.*))?$/),"artist"],[c(/^\/(?:\?.*)?$/),"index"],[c(/^\/search\/?\?(:<query>.*)/),"search"],[c(/^\/users\/(:<owner>[^/?]+)\/playlists\/(:<kind>\d+)\/?(?:\?(:<query>.*))?$/),"playlist"],[c(/^\/users\/(:<owner>[^/?]*)(?:\/(:<what>(artists|tracks|albums|playlists|history|subscriptions)))?\/?(?:\?(:<query>.*))?$/),"users"],[c(/^\/genre\/(:<genre>[^/?]+)(?:\/(:<filter>(?:artists|tracks|albums|composers)))?\/?(?:\?(:<query>.*))?$/),"top"],[c(/^\/payment(?:\/(:<what>[^/?]*))?\/?(?:\?(:<query>.*))?$/),"payment"],[c(/^\/settings(?:\/(:<what>[^/?]*))?\/?(?:\?.*)?$/),"settings"],[c(/^\/apps\/?(?:\?.*)?$/),"apps"],[c(/^\/mix\/(:<mix>[^/?]*)\/?(?:\?.*)?$/),"mix"],[c(/^\/disk(:<dir>(?:\/([^/?]*))*)?\/?(?:\?.*)?$/),"disk"]],match:function(e){for(var f=0;
f<this.items.length;
f++){var g=this.items[f];
var d=g[0].exec(e);
if(d){d.query=d.query?b(d.query):{};
return{name:g[1],param:d}
}}return{name:"404",param:{url:e}}
},rewriteRules:[[/^(.*)[?&]ncrnd=\d+(.*)/,"$1$2"],[/^\/blocks=(\w+)&(\w+)=(\w+)/,"/$1/$3"],[/^\/track\/(\w+)\/album\/(\w+)/,"/album/$2/track/$1"],[/^\/artist-tracks\/([^\/]+)\/?$/,"/artist/$1/tracks","last"],[/^\/charts\/?$/,"/mix/all"],[/^\/charts\/(.*)\/?$/,"/mix/$1"],[/^\/top\/(tracks|artists)\/genre\/all$/,"/"],[/^\/top\/(tracks|artists)\/genre\/(.*)$/,"/genre/$2/$1"],[/^\/(alphabet|radio)\/.*/,"/"],[/^\/(import|tune)\/?$/,"/settings"],[/^\/payments.*$/,"/payment"],[/^\/mdna\/?$/,"/album/435218","last"],[/^\/splean\/?$/,"/album/586930","last"],[/^\/kino\/?$/,"/artist/41075","last"],[/^\/placebo\/?$/,"/artist/36830","last"],[/^\/zemfira\/?$/,"/album/1000365","last"],[/^\/rabkor\/?$/,"/album/463388","last"],[/^\/okeanelzy\/?$/,"/album/1137582","last"]],rewrite:function(d){for(var e=0;
e<this.rewriteRules.length;
e++){var f=this.rewriteRules[e];
if(!f[0].exec(d)){continue
}d=d.replace(f[0],f[1]);
if(f[2]==="last"){break
}}return d}};
function c(f){var g=[];
var e=new RegExp(f.source.replace(/\(:<(\w+)>/g,function(i,h){g.push(h);
return"("}),(f.global?"g":"")+(f.ignoreCase?"i":"")+(f.multiline?"m":""));
var d=function(h){if(!h){return h
}for(var j=0;
j<g.length;
j++){h[g[j]]=h[j+1]
}return h};
e.exec=function(h){return d(RegExp.prototype.exec.call(this,h))
};return e}function b(e){var j=e.split("&");
var d={};for(var f=0;
f<j.length;
f++){var k=j[f].split("=");
var h=k[1]||"";
h=h.replace(/\+/g," ");
try{h=decodeURIComponent(h)
}catch(g){}d[k[0]]=h
}return d}if(typeof module==="undefined"){Mu.routes=a
}else{module.exports=a
}})();(function(){var b=Mu.routes;
var a={};var f;
var g;var e;
var c=true;
var h=function(){var l=location.href;
var k=l.indexOf("#");
var m=(k===-1)?"#":l.substr(k);
return m.replace(/^#(!|_|%21|&#33;|)(\/|$)/,"#!/")
};var d=function(k){if(c||f===k){return
}f=k;a.reload()
};var i=/^(https?:)?\/\//;
var j=function(k){if(this.getAttribute("target",2)){return
}if(k.ctrlKey||k.metaKey){return
}var l=this.getAttribute("href",2);
if(!l){return
}var m=location.protocol+"//"+location.hostname;
if(l.lastIndexOf(m,0)===0){l=l.substr(m.length)
}if(i.test(l)){return
}try{a.navigateTo(l)
}finally{k.preventDefault();
return false
}};a.getLastUrl=function(){return f
};a.navigateTo=function(k){if(k.charAt(0)!=="/"){k="/"+k
}k=b.rewrite(k);
if(f!==k){g(k);
d(k)}else{this.reload()
}};a.pushState=function(k,l){if(l){e(k)
}else{if(f!==k){f=k;
g(k)}}};a.reload=function(k){var l=b.match(f);
this.pages.show(l.name,l.param,k)
};a.start=function(){c=false;
$(window).trigger("hashchange").trigger("popstate")
};a.init=function(l){this.pages=l.get("pages");
var n=("onpopstate" in window)&&("replaceState" in history);
if(n){g=function(o){history.pushState(null,null,o)
};e=function(o){f=o;
history.replaceState(null,null,o)
};$(window).on("hashchange",function(){if(!location.hash){return
}var p=h();
if(p.substr(0,3)==="#!/"){p=b.rewrite(p.substr(2));
var o=f;e(p);
f=o;d(p)}});
$(window).on("popstate",function(o){var p=location.pathname+location.search;
var q=b.rewrite(p);
if(q!==p){e(q);
f=null}d(q)
})}else{var m;
g=function(o){m=o;
location.hash="#!"+o
};e=function(o){m=o;
f=o;var q=$.fn.hashchange&&$.fn.hashchange.hiddenIframe;
if(q){var p=q.document.location.href;
p=p.substr(0,p.indexOf("#"))+"#!"+o;
q.document.location.replace(p)
}location.replace("/#!"+o)
};var k=location.pathname+location.search;
if(k!=="/"){e(k)
}$(window).on("hashchange",function(){var q=h();
q=q.substr(2);
var p=m;m=undefined;
if(p===q){return
}var o=b.rewrite(q);
if(o!==q){e(o);
f=null}d(o)
})}$(document.body).on("click","a",j)
};Mu.navigation=a
})();(function(){var a;
var b=function(){this.timeouts={feed:15000,search:10000,"radio-available":10000,_default:5000};
this._cache={}
};b.prototype.init=function(c){a=c.get("auth")
};b.prototype.get=function(i,j,f){f=f||{};
j=j||{};if(a&&a.experiments){j.experiments=a.experiments
}var g=this.getKey(i,j);
if(f.nocache){j.ncrnd=Math.random()
}else{if(this._cache[g]){return Vow.resolve(this._cache[g])
}}var h=jQuery.param(j);
var e=this;
var d=Vow.defer();
$.ajax({type:"GET",url:"/handlers/"+i+".jsx?"+h,dataType:"json",timeout:this.timeouts[i]||this.timeouts._default,success:function(l,m,k){e.checkCompat(k);
if(!f.nocache){e.cache(g,l)
}d.resolve(l)
},error:function(k,m,l){e.checkCompat(k);
d.reject({status:m,error:l,text:k.responseText})
}});var c=d.promise();
c.fail(function(k){if(k.error==="Forbidden"){a.refresh()
}});return c
};b.prototype.post=function(f,g){g=g||{};
if(a&&a.user&&a.user.sign){g.sign=a.user.sign
}if(a&&a.experiments){g.experiments=a.experiments
}var e=this;
var d=Vow.defer();
$.ajax({type:"POST",url:"/handlers/"+f+".jsx",data:g,dataType:"json",timeout:this.timeouts[f]||this.timeouts._default,success:function(i,j,h){e.checkCompat(h);
d.resolve(i)
},error:function(h,j,i){e.checkCompat(h);
d.reject({status:j,error:i,text:h.responseText})
}});var c=d.promise();
c.fail(function(h){if(h.error==="Forbidden"){a.refresh()
}});return c
};b.prototype.getKey=function(g,h){var e=g+".jsx?";
var f=[];var j=Object.keys(h).sort();
for(var d=0;
d<j.length;
d++){var c=j[d];
f.push(c+"="+h[c])
}return e+f.join("&")
};b.prototype.cache=function(c,d){this._cache[c]=d
};b.prototype.uncache=function(c,d){d=d||{};
delete this._cache[this.getKey(c,d)]
};b.prototype.patchPlaylist=function(e,d){var c=this.post("playlist-patch",{kind:e.kind,revision:e.revision,diff:JSON.stringify(d.diff),from:d.from});
this.uncache("playlists",{owner:a.user.login});
return c};b.prototype.changePlaylist=function(c,e){e=$.extend({action:c},e);
var d=this.post("change-playlist",e);
this.uncache("playlists",{owner:a.user.login});
return d};b.prototype.feedback=function(d,e,c){var f=this.post("feedback",{type:d,trackId:e,albumId:c});
this.uncache("playlist",{kinds:Mu.constants.KIND_LIKE,owner:a.user.login});
return f};b.prototype.saveSettings=function(c){var d=this.post("settings-set",c);
this.uncache("social-settings");
this.uncache("auth");
return d};b.prototype.unbindSocial=function(c){var d=this.post("social-unbind",{type:c});
this.uncache("social-settings");
return d};b.prototype.deleteEvent=function(d){var c=this.post("event-delete",{id:d});
this.uncache("feed");
return c};b.prototype.checkCompat=function(d){var c=parseInt(d.getResponseHeader("X-Compat"));
if(!isNaN(c)&&(c!==Mu.settings.compat)){location.reload()
}};Mu.Datasrc=b
})();(function(){var c={shortTitle:"",title:"",href:""};
var i=20*60*1000;
var d=24*60*60*1000;
var b,j,e;var g=function(){this.entryList=[];
this.playOrder=[];
this.index=-1;
this.options={shuffle:false,repeat:false};
this.player=undefined;
this.flow=null;
Mu.eventize(this)
};g.prototype.init=function(k){this.player=k.get("player");
this.notify=k.get("blocks").get("notify");
this.metrika=k.get("metrika");
this.froms=k.get("froms");
this.player.on("ended",this.onEnded.bind(this));
b=k.get("datasrc");
e=k.get("auth");
j=Mu.Storage.create("localStorage");
this.restore();
this.on("change",function(){if(this.restoringSeq){delete this.restoringSeq
}else{this.storeEntries()
}});this.on("changeCurrent",function(){this.storeIndex()
});this.on("shuffle",function(){this.storeOptions()
});this.on("repeat",function(){this.storeOptions()
});$(window).on("unload",(function(){this.endInterval()
}).bind(this))
};g.prototype.current=function(){return this.entryList[this.index]
};g.prototype.isCurrent=function(k){var l=this.current();
return(l&&l.track.id==k.track.id&&((!l.album&&!k.album)||(k.album&&l.album&&l.album.id==k.album.id)))
};g.prototype.setIndex=function(k){this.index=k;
this.trigger("changeCurrent")
};g.prototype.togglePause=function(){var k=this.player.getStatus();
if(k==="playing"){this.player.pause();
this.endInterval()
}else{if(k==="paused"){this.player.resume();
this.startInterval()
}else{if(this.current()){this.playCurrent()
}}}};g.prototype.toggleShuffle=function(l,k){l=typeof l==="undefined"?!this.options.shuffle:l;
this.options.shuffle=l;
if(!this.flow&&!k){this.reorder(this.index)
}this.trigger("shuffle");
return l};g.prototype.toggleRepeat=function(k){k=typeof k==="undefined"?!this.options.repeat:k;
this.options.repeat=k;
this.trigger("repeat");
return k};g.prototype.count=function(){return this.entryList.length
};g.prototype.canMove=function(k){return this.entryList.length>0&&(this.getMovedIndex(k)!==-1||(!this.flow&&this.options.repeat))
};g.prototype.getMovedIndex=function(l){if(l!==-1&&l!==1){throw"Invalid argument"
}var k=this.playOrder.indexOf(this.index)+l;
if(this.options.repeat&&!this.flow){k=(k<0)?this.entryList.length-1:k;
k=(k>=this.entryList.length)?0:k
}else{if(k<0||k>=this.entryList.length){return -1
}}return this.playOrder[k]
};g.prototype.move=function(l){var k=this.getMovedIndex(l);
if(k===-1){return false
}this.setIndex(k);
this.playCurrent();
return true
};g.prototype.playFixed=function(l,m,k){if(typeof k==="undefined"){k=-1
}this.flow=null;
this.context=l;
this.entryList=m;
this.reorder(k);
this.playCurrent();
this.trigger("change")
};g.prototype.playOne=function(k,l){this.flow=null;
this.context=k;
this.entryList=[l];
this.reorder(0);
this.playCurrent();
this.trigger("change")
};g.prototype.playFlow=function(k,m,l){this.flow=k;
this.flow.fetch(function(n){this.context=m;
this.entryList=n;
this.reorder(l||0);
this.playCurrent();
this.trigger("change")
}.bind(this),this.options)
};g.prototype.playRadio=function(l,k){this.playFlow(new h(k),l);
this.trigger("radiochange")
};g.prototype.playArtistTracks=function(m,l,k){this.playFlow(new f(l),m,k)
};g.prototype.playUserTracks=function(m,l,k){this.playFlow(new a(l),m,k)
};g.prototype.feedbackRadio=function(k){if(!this.isRadio()){return
}this.flow.feedback(k,function(l){if(l.success){this.move(1)
}}.bind(this))
};g.prototype.setOption=function(k,l){if(!this.flow.setOption){return
}this.flow.setOption(k,l);
this.playFlow(this.flow,this.context)
};g.prototype.isRadio=function(){return !!(this.flow&&this.flow instanceof h)
};g.prototype.isArtistTracks=function(){return !!(this.flow&&this.flow instanceof f)
};g.prototype.addEntries=function(k,l){if(this.flow){var m=this.current();
this.entryList=m?[m]:[];
this.flow=null
}this.context=(l||c);
this.entryList=Array.concat(this.entryList,k);
this.reorder(this.index);
this.trigger("change")
};g.prototype.clearEntries=function(){this.setIndex(-1);
this.entryList.length=0;
this.player.stop();
this.context=c;
this.trigger("change")
};g.prototype.remove=function(k){if(k<0||k>this.entryList.length){return false
}var l=this.index;
this.entryList.splice(k,1);
if(this.index===k){l=l>=this.entryList.length?this.entryList.length-1:l;
this.reorder(l);
if(l==-1){this.player.stop()
}else{this.playCurrent()
}}else{if(this.index>k){l=this.index-1;
this.reorder(l)
}else{this.reorder(l)
}}this.trigger("change");
return true
};g.prototype.prefetch=function(){if(!this.flow||this.canMove(1)){return
}this.flow.fetch(function(k){this.entryList=this.entryList.concat(k);
this.reorder(this.index);
this.trigger("change")
}.bind(this),this.options)
};g.prototype.playCurrent=function(){var l=this.entryList[this.index];
var k=l.track;
if(!k||!k.storageDir){this.notify.show("playError",k)
}else{var m=this.getAdditionalData(l);
var n={id:k.id,storageDir:k.storageDir,metadata:{duration:(k.durationMs||k.duration)/1000,artists:k.artists,title:k.title,version:k.version,cover:k.cover}};
this.playWhenReady(n,m);
this.prefetch()
}this.startInterval()
};g.prototype.playWhenReady=function(m,l){var k=this.player;
if(k.isReady()){k.play(m,l)
}else{k.whenReady(function(){k.play(m,l)
})}};g.prototype.getAdditionalData=function(l){var m={};
if(e&&e.experiments){m.experiments=e.experiments
}var k=this.context;
if(!k){return m
}if(k.from){m.from=k.from
}if(k.playlist&&k.playlist.owner){m.playlistId=k.playlist.owner.uid+":"+k.playlist.kind
}if(l.album&&l.album.id){m.albumId=l.album.id
}return m};
g.prototype.onEnded=function(){var k=this.move(1);
if(!k){this.endInterval()
}};g.prototype.reorder=function(k){if((typeof k!=="number")||(k<0)||(k>=this.entryList.length)){k=-1
}var l=[];if(this.options.shuffle&&!this.isRadio()){for(var m=0;
m<this.entryList.length;
m++){if(m!==k){l.push(m)
}}l=Array.shuffle(l);
if(k===-1){this.setIndex(l[0])
}else{l.unshift(k);
this.setIndex(k)
}}else{for(var m=0;
m<this.entryList.length;
m++){l.push(m)
}this.setIndex((k===-1)?0:k)
}this.playOrder=l
};g.prototype.startInterval=function(){if(!this.startTime){this.startTime=(new Date()).getTime()
}else{var l=(new Date()).getTime();
var k=(l-this.startTime);
if(k>i){this.endInterval();
this.startInterval()
}}};g.prototype.endInterval=function(){if(!this.startTime){return
}var l=(new Date()).getTime();
var k=l-this.startTime;
if(k>d||k<0){return
}k=k/1000;this.startTime=undefined;
this.metrika.goal("PLAY",{"Время прослушивания":{"Всего":k}})
};g.prototype.getEntryId=function(k){return k.track.id+(k.album?":"+k.album.id:"")
};g.prototype.storeEntries=function(){var n=this.getEntryId;
var m=this.context||c;
m={href:m.href,title:m.title,shortTitle:m.shortTitle,from:m.from&&this.froms.setSuffix(m.from,"saved")};
var o={context:m,entries:""};
if(this.isRadio()){var l=this.current();
o.entries=n(l)
}else{o.entries=this.entryList.filter(function(p){return p.track&&!p.track.error
}).map(function(p){return n(p)
}).join(",")
}if(this.isRadio()){var k=Function.mixin({},this.flow.options);
delete k.start;
delete k.ncrnd;
o.radio=k}else{if(this.isArtistTracks()){o.artistTracks={artistId:this.flow.artistId,page:this.flow.page}
}}j.setItem("seq",JSON.stringify(o))
};g.prototype.storeIndex=function(){j.setItem("seq_index",this.index||0)
};g.prototype.storeOptions=function(){j.setItem("seq_options",JSON.stringify(this.options))
};g.prototype.restore=function(){var k;
try{k=JSON.parse(j.getItem("seq_options"))
}catch(l){}if(k){this.toggleShuffle(!!k.shuffle,true);
this.toggleRepeat(!!k.repeat)
}this.restoreEntries()
};g.prototype.restoreEntries=function(){try{var n=JSON.parse(j.getItem("seq"))
}catch(m){return
}if(!n){return
}this.restoringSeq=true;
var k=this;
var l=parseInt(j.getItem("seq_index"))||0;
b.post("track-entries",{entries:n.entries}).then(function(o){if(!k.restoringSeq){return
}k.entryList=o.filter(function(p){return p&&!p.error
}).map(function(p){return{album:p.albums&&p.albums[0],track:p}
});k.context=n.context||c;
k.reorder(k.entryList[l]?l:0);
if(n.radio){n.radio.start=false;
k.flow=new h(n.radio);
k.prefetch();
k.trigger("radiochange")
}else{if(n.artistTracks){k.flow=new f(n.artistTracks)
}}k.trigger("change")
})};var h=function(k){this.options=k;
this.options.start=true;
this.previous=[]
};h.prototype.fetch=function(l){this.options.pending=this.previous.join(",");
var k=this;
b.get("radio",this.options,{nocache:true}).then(function(o){var n=o.tracks;
if(n){var m=n.map(function(p){return{track:p,album:p.albums&&p.albums[0]}
});k.previous=n.map(function(p){return p.id
});l(m)}});
this.options.start=false
};h.prototype.feedback=function(k,l){k=$.extend(k,this.options);
b.post("radio-feedback",k,{nocache:true}).then(function(m){l(m)
})};h.prototype.setOption=function(k,l){if(k==="language"){this.setLanguage(l)
}else{if(k==="popFactor"){this.setPopFactor(l)
}}};h.prototype.setLanguage=function(k){if(["any","russian","not-russian"].some(function(l){return l===k
})){this.options.language=k
}};h.prototype.setPopFactor=function(k){k=parseInt(k);
if([0,1].some(function(l){return l===parseInt(k)
})){this.options.popFactor=k
}};var f=function(k){this.artistId=k.artistId;
this.entries=k.entries;
this.page=k.page||0
};f.prototype.fetch=function(n){if(this.entries){var l=this.entries.length||0;
n(this.entries);
this.page=Math.ceil(l/10);
delete this.entries;
return}var k=this;
var m={artist:this.artistId,page:this.page};
b.get("artist-top-tracks",m,{nocache:true}).then(function(q){var p=q.tracks;
if(p){var o=p.map(function(r){return{track:r,album:r.albums&&r.albums[0]}
});k.page++;
n(o)}})};var a=function(k){this.trackIds=k.trackIds;
this.entries=k.entries
};a.prototype.fetch=function(l){if(this.entries){l(this.entries);
delete this.entries;
return}if(!this.trackIds.length){return
}var k=this.trackIds.splice(0,10);
k=k.join(",");
b.post("track-entries",{entries:k},{nocache:true}).then(function(n){if(n){var m=n.filter(function(o){return o&&!o.error
}).map(function(o){return{track:o,album:o.albums&&o.albums[0]}
});l(m)}})};
Mu.PlaySequence=g
})();(function(){var d,c,b;
var a=function(){Mu.eventize(this)
};a.prototype.init=function(e){d=e.get("library");
c=e.get("navigation");
b=e.get("blocks");
this.cookieLogin=this.getCookieLogin();
$(window).on("focus",this.check.bind(this));
if(Mu.authData){this.fillInfo(Mu.authData)
}else{this.getAuthInfo().then(this.fillInfo.bind(this))
}};a.prototype.fillInfo=function(g){this.user=g.user;
this.cookieLogin=this.getCookieLogin();
if(g.experiments){var e;
try{e=JSON.parse(g.experiments)
}catch(f){}if(e){this.experiments=g.experiments;
Mu.experiments=e
}}this.trigger("info",g)
};a.prototype.getCookieLogin=function(){return $.cookie("yandex_login")||""
};a.prototype.getAuthInfo=function(){return Mu.datasrc.get("auth",{},{nocache:true})
};a.prototype.refresh=function(){b.forElem($(".loading_page")[0]).doShow(true);
var h=this.getAuthInfo();
var f=d.refresh();
var e=this;
var g=Vow.all([h,f]);
g.then(function(i){e.fillInfo(i[0]);
c.reload()}).fail(function(){window.location.reload()
});return g
};a.prototype.check=function(){if(this.getCookieLogin()!==this.cookieLogin){this.refresh();
return false
}else{return true
}};a.prototype.isLoggedIn=function(){return !!(this.user&&this.user.uid)
};a.prototype.showAuthForm=function(){this.trigger("showAuthForm")
};Mu.Auth=a
})();(function(){var c,b,a;
var d=function(){this.cache={};
this.cachedPromise=null;
Mu.eventize(this)
};d.prototype.init=function(f){var e=this;
c=f.get("auth");
a=f.get("datasrc");
b=f.get("blocks").get("notify");
if(Mu.libraryData){var g=Mu.libraryData;
e.cache=g;e.cachedPromise=Vow.resolve(g);
e.trigger("ready")
}else{c.on("info",function(){e.cachedPromise=e.get()
})}this.on("change",function(h){var i;
if(h.targetPlaylist&&h.act==="add"){b.show("addedToPlaylist",{count:h.tracks.length,target:h.targetPlaylist})
}else{if(h.targetPlaylist&&h.act==="remove"){b.show("removedFromPlaylist",{count:h.count,target:h.targetPlaylist})
}else{if(h.tracks){i="track"
}else{if(h.albumId){i="album"
}else{if(h.kind&&h.uid){i="playlist"
}else{if(h.artistId){i="artist"
}}}}if(i){b.show(h.act==="add"?"addedToLib":"removedFromLib",{what:i})
}}}})};d.prototype.get=function(){if(this.cachedPromise){return this.cachedPromise
}this.cachedPromise=a.get("library",{bare:1},{nocache:true});
this.cachedPromise.then(function(e){if(e.success!==false){this.cache=e
}else{this.cache={}
}this.trigger("ready")
}.bind(this));
return this.cachedPromise
};d.prototype.refresh=function(){this.cache={};
this.cachedPromise=null;
return this.get()
};d.prototype.refreshLocal=function(g){var f=this;
var e=f.cache;
if(g.tracks){e.library={};
g.tracks.forEach(function(h){e.library[(h.original&&h.original.id)||h.id]=1
})}else{if(g.bookmarks){e.playlists={};
g.bookmarks.forEach(function(h){e.playlists[(h.owner&&h.owner.uid)+":"+h.kind]=1
})}else{if(g.albums){e.albums={};
g.albums.forEach(function(h){e.albums[h.id]=1
})}else{if(g.artists){e.artists={};
g.artists.forEach(function(h){e.artists[h.id]=1
})}else{if(g.subscriptions){e.users={};
g.subscriptions.forEach(function(h){e.users[h.uid]=1
})}}}}}};d.prototype.change=function(h){var f=this;
var g=$.extend({},h);
f.changeLocal(g);
f.trigger("change",g);
h.tracks=h.tracks&&JSON.stringify(h.tracks);
var e=Vow.defer();
a.post("change-library",h).then(function(i){e.resolve(i);
f.onSuccess(g)
},function(i){e.reject(i);
f.onError(g)
});return e.promise()
};d.prototype.patchPlaylist=function(j,i){var f=this;
var h=i.diff;
var g={tracks:h[0].ids&&h[0].ids.map(function(k){return{trackId:k}
}),act:h[0].op==="insert"?"add":"remove",targetPlaylist:j};
if(h[0].to&&h[0].from){g.count=h[0].to-h[0].from
}f.changeLocal(g);
f.trigger("change",g);
var e=Vow.defer();
a.patchPlaylist(j,i).then(function(k){e.resolve(k);
f.onSuccess(g)
},function(k){e.reject(k);
f.onError(g)
});return e.promise()
};d.prototype.onSuccess=function(e){this.trigger("changed",e)
};d.prototype.onError=function(e){e.act=e.act==="add"?"remove":"add";
this.changeLocal(e);
this.trigger("error",e)
};d.prototype.changeLocal=function(e){if(!!e.ref){this.changeFavorites(e)
}else{this.changeLibrary(e)
}};d.prototype.changeFavorites=function(f){var e=this;
if(f.tracks&&e.cache.defaultLibrary){f.tracks.forEach(function(g){var h=f.act==="add";
e.cache.defaultLibrary[g.trackId]=h;
if(h){e.cache.library[g.trackId]=h
}})}else{if(f.albumId&&e.cache.albums){e.cache.albums[f.albumId]=f.act==="add"
}else{if(f.kind&&e.cache.playlists){e.cache.playlists[f.uid+":"+f.kind]=f.act==="add"
}else{if(f.artistId&&e.cache.artists){e.cache.artists[f.artistId]=f.act==="add"
}else{if(f.userId&&e.cache.users){e.cache.users[f.userId]=f.act==="add"
}else{if(f.genreId&&e.cache.genres){e.cache.genres[f.genreId]=f.act==="add"
}}}}}}};d.prototype.changeLibrary=function(f){var e=this;
if(f.tracks&&e.cache.library){f.tracks.forEach(function(g){var h=f.act==="add";
e.cache.library[g.trackId]=h;
if(!h){e.cache.defaultLibrary[g.trackId]=h
}})}};d.prototype.isFavorite=function(e){if(e.entry&&this.cache.defaultLibrary){return !!this.cache.defaultLibrary[e.entry.track.id]
}else{if(e.album&&this.cache.albums){return !!this.cache.albums[e.album.id]
}else{if(e.playlist&&e.playlist.owner&&this.cache.playlists){return !!this.cache.playlists[e.playlist.owner.uid+":"+e.playlist.kind]
}else{if(e.artist&&this.cache.artists){return !!this.cache.artists[e.artist.id]
}else{if(e.user&&this.cache.users){return !!this.cache.users[e.user.uid]
}else{if(e.genre&&this.cache.genres){return !!this.cache.genres[e.genre.genre]
}}}}}}return false
};d.prototype.isInLibrary=function(e){if(e.entry&&this.cache.library){return !!this.cache.library[e.entry.track&&e.entry.track.id]
}return false
};d.prototype.getParams=function(h,g,f){var i={ref:!!f,act:g?"add":"remove",from:h.from},e=this;
if(h.entry){i.tracks=[{trackId:h.entry.track.id,albumId:e.getAlbumId(h.entry)}]
}else{if(h.entries){i.tracks=h.entries.map(function(j){return{trackId:j.track.id,albumId:e.getAlbumId(j)}
})}else{if(h.album){i.albumId=h.album.id
}else{if(h.playlist){i.kind=h.playlist.kind;
i.uid=h.playlist.owner&&h.playlist.owner.uid
}else{if(h.artist){i.artistId=h.artist.id
}else{if(h.genre){i.genreId=h.genre.genre
}}}}}}return i
};d.prototype.getAlbumId=function(e){if(e.album){return e.album.id
}else{return e.track.albums&&e.track.albums.length&&e.track.albums[0].id
}};Mu.Library=d
})();(function(b){var a=function(){Mu.eventize(this)
};a.prototype.init=function(d){var c=this;
c.auth=d.get("auth");
c.datasrc=d.get("datasrc");
c.library=d.get("library");
c.library.on("changed",c.refreshLikes.bind(c));
c.library.on("error",c.refreshLikes.bind(c))
};a.prototype.refreshLikes=function(c){var f=b(".like");
for(var d=0;
d<f.length;
d++){var e=Mu.blocks.forElem(f[d]);
if(this.isMatch(e,c)){this.trigger("liked",{params:c,target:e.container});
e.repaint()
}}this.trigger("changed")
};a.prototype.toggle=function(d,c){if(typeof c==="undefined"){c=!this.library.isFavorite(d)
}var e=this.library.getParams(d,c,true);
this.library.change(e);
return c};a.prototype.isFavorite=function(c){if(!this.auth.isLoggedIn()){return false
}return this.library.isFavorite(c)
};a.prototype.isMatch=function(d,e){var c=false;
if(e.tracks){c=this.isMatchTracks(d,e)
}else{if(e.albumId){c=d.data.album&&e.ref&&d.data.album.id==e.albumId
}else{if(e.kind){c=d.data.playlist&&e.ref&&d.data.playlist.kind==e.kind&&d.data.playlist.owner.uid===e.uid
}else{if(e.artistId){c=d.data.artist&&e.ref&&d.data.artist.id==e.artistId
}else{if(e.genreId){c=d.data.genre&&e.ref&&d.data.genre.genre==e.genreId
}}}}}return c
};a.prototype.isMatchTracks=function(d,e){if(!d.data.entry||!d.data.entry.track){return false
}var f=d.data.entry.track.id;
for(var c=0;
c<e.tracks.length;
c++){if(e.tracks[c].trackId==f){return true
}}return false
};Mu.Favorites=a
})(jQuery);
(function(a){window.Lego||(window.Lego={block:{}});
Lego.block["i-social"]=function(d){function e(j){var i=this,g={};
this.url=j.startUrl+"?";
delete j.startUrl;
this.popupName=j.popupName;
this.yaWindow=null;
this.wTimer=null;
this.paramsDefault=j;
function l(){var m;
if(!i.yaWindow){return true
}try{m=i.yaWindow.closed
}catch(n){m=true
}return m}function k(){if(l()){i.wTimer=clearInterval(i.wTimer);
i.onFailure({status:"error"})
}}function f(v){var y=i.popupName,q=500,z=280,s=Math.round(((window.opera?window.innerWidth:screen.availWidth)-q)/2),w=Math.round(((window.opera?window.innerHeight:screen.availHeight)-z)/2),n="scrollbars=yes, resizable=1, menubar=0, toolbar=0, status=0, location=0, directories=0, left="+s+", top="+w+", width="+q+", height="+z;
var r={};for(var u in i.paramsDefault){r[u]=i.paramsDefault[u]
}for(var u in v){r[u]=v[u]
}if(r.display&&r.display!="popup"){r.retpath=r.retnopopup||window.location.href
}else{var x="ddom="+(r.ddom||(location.hostname==document.domain?"":document.domain));
if("retnopopup" in r){delete r.retnopopup
}r.retpath+=(r.retpath.match("#")?"&":"#")+x
}var m=i.url;
var o=[];for(var t in r){o.push(encodeURIComponent(t)+"="+encodeURIComponent(r[t]))
}m+=o.join("&");
if(r.display&&r.display!="popup"){window.location.href=m;
return}i.yaWindow=window.open(m,y,n);
i.yaWindow.focus();
if(i.yaWindow){i.wTimer=setInterval(k,500)
}}function h(){this.handlers={onSuccess:null,onFailure:null};
i.wTimer=clearInterval(i.wTimer);
l()||i.yaWindow.close();
i.yaWindow=false
}this.start=function(n,m,o){h();
i.handlers={onSuccess:n,onFailure:m};
f(o)};this.onSuccess=function(n){h();
var m=i.handlers.onSuccess;
m&&m.call(i,n)
};this.onFailure=function(n){h();
var m=i.handlers.onFailure;
m&&m.call(i,n)
}}arguments.callee.Broker=e;
var c=arguments.callee.defaultParams={},b=arguments.callee.broker=new e(a.extend(c,d));
return b}})(jQuery);
(function(){var c=function(){};
c.prototype.getItem=function(){};
c.prototype.setItem=function(){};
c.prototype.isValid=function(){return true
};c.prototype.isWorking=function(){try{var g="YEP!";
this.setItem("DEBUG",g);
var h=this.getItem("DEBUG");
return g===h
}catch(f){return false
}};var a=function(){};
a.prototype=new c();
a.prototype.getItem=function(f){return localStorage.getItem(f)
};a.prototype.setItem=function(f,g){localStorage.removeItem(f);
return localStorage.setItem(f,g)
};a.prototype.isValid=function(){try{return(window.localStorage&&typeof window.localStorage==="object")
}catch(f){return false
}};var b=function(){};
b.prototype=new c();
b.prototype.getItem=function(f){return this.container.getAttribute(this.prefix+f)
};b.prototype.setItem=function(f,g){this.container.setAttribute(this.prefix+f,g);
this.container.save("localStorage")
};b.prototype.isValid=function(){try{this.container=document.body;
this.prefix="storage-";
if(this.container.addBehavior){this.container.addBehavior("#default#userData");
this.container.load("localStorage");
return true
}}catch(f){if(Mu&&Mu.ErrorLogger){Mu.ErrorLogger.onError($.param(f),null,0)
}}return false
};var d=function(){};
d.prototype=new c();
d.prototype.getItem=function(f){return $.cookie(f)
};d.prototype.setItem=function(f,g){return $.cookie(f,g)
};var e=function(f){this.storage=f
};e.create=function(f){var g=e.getStorage(f);
return new e(g)
};e.storages=[{name:"localStorage",constructor:a},{name:"userDataStorage",constructor:b},{name:"cookieStorage",constructor:d}];
e.getStorage=function(g){var j,h;
for(var f=0;
f<e.storages.length;
f++){h=e.storages[f];
if(g&&h.name!==g){continue
}j=new h.constructor();
if(j.isValid()&&j.isWorking()){return j
}}return new c()
};e.prototype.getItem=function(f){return this.storage.getItem(f)
};e.prototype.setItem=function(f,g){this.storage.setItem(f,g)
};e.prototype.isValid=function(){return this.storage.isValid()
};e.prototype.isWorking=function(){return this.storage.isWorking()
};Mu.Storage=e
})();(function(){var a=function(){this.value="";
this.matches=[];
this.buf_length=10;
this.rInputField=/^(INPUT|TEXTAREA|SELECT|BUTTON)$/i
};a.init=function(b){};
a.prototype.init=function(e){var c=this;
var d=e.get("player");
var b=e.get("seq");
c.addMatch(/0/,function(){d.toggleMute()
}).addMatch(/[=+]/,function(){d.setVolume(d.getVolume()+0.1)
}).addMatch(/[\-_]/,function(){d.setVolume(d.getVolume()-0.1)
}).addMatch(/[pPзЗ ]/,function(){b.togglePause()
}).addMatch(/[jJоОlLдД]/,function(){b.move(1)
}).addMatch(/[kKлЛhHрР]/,function(){b.move(-1)
});document.onkeypress=function(f){f=f||window.event;
c.listen(f)
}};a.prototype.addMatch=function(c,b){this.matches.push({test:c,handler:b});
return this
};a.prototype.normalizeEvent=function(b){var c={originalEvent:b};
c.target=b.target||b.srcElement;
c.charCode=b.charCode||b.keyCode;
return c};a.prototype.reset=function(){this.value=""
};a.prototype.listen=function(c){if(c.altKey||c.ctrlKey||c.metaKey){return
}c=this.normalizeEvent(c);
if(!this.validTarget(c.target)){return
}if(this.value.length>this.buf_length){this.value=this.value.substr(this.value.length-this.buf_length)
}this.value=this.value+String.fromCharCode(c.charCode);
var e;for(var d=0,b=this.matches.length;
d<b;d++){e=this.matches[d];
if(this.isGoodMatch(e.test)){e.handler();
this.reset();
this.preventDefault(c.originalEvent);
break}}};a.prototype.preventDefault=function(b){if(b.preventDefault){b.preventDefault()
}else{b.returnValue=false
}};a.prototype.validTarget=function(b){if(!b){return false
}if(b.nodeName){if(this.rInputField.test(b.nodeName)){return false
}}return true
};a.prototype.isGoodMatch=function(c){var b=c.test(this.value);
return b};Mu.Shortcuts=a
})();(function(){var b=["playlist","album","artist","genre"];
var a=function(){};
a.MAIN_PREFIX="web";
a.PAGE_SUFFIX="main";
a.SIDEBAR_SUFFIX="fridge";
a.PART_SEPARATOR="-";
a.prototype.init=function(c){this.pages=c.get("pages");
this.sidebars=c.get("sidebars");
this.auth=c.get("auth");
this.navigation=c.get("navigation");
this.rules=[[/^\/(\w+)\/([^/?]+)\/?(?:(\w+)\/?(?:[^/?]*))?(?:\?(?:.*))?$/,"$1_$3"],[/^\/(?:\?.*)?$/,"feed"],[/^\/(search)\/?\?(?:.*)/,"$1"],[/^\/(disk)\/?(?:.*)/,"$1"]]
};a.prototype.getBlockFrom=function(g,e){var d=$(g);
var c=d.closest(".sidebar").length!==0;
var f=this.getCardFrom(g,e,c);
var h=!c?a.PAGE_SUFFIX:a.SIDEBAR_SUFFIX;
var i=f+a.PART_SEPARATOR+e+a.PART_SEPARATOR+h;
return i};a.prototype.getCardFrom=function(g,e,d){if(typeof d==="undefined"){d=$(g).closest(".sidebar").length!==0
}var c;if(d){c=this.getPageFrom(this.sidebars.current)
}else{var f=this.createCardFrom(g,e);
c=this.getPageFrom(this.pages.current)+a.PART_SEPARATOR+f
}return c};
a.prototype.getPageFrom=function(c){if(c.from){return c.from
}var d=a.MAIN_PREFIX+a.PART_SEPARATOR+this.createPageFrom(c);
return d};a.prototype.getBlockName=function(d){var c="track";
for(var e in d){if(!d.hasOwnProperty(e)){continue
}if(b.indexOf(e)!==-1){c=e;
break}}return c
};a.prototype.setSuffix=function(e,d){if(!e){return e
}var c=e.split(a.PART_SEPARATOR);
if(!c.length){return e
}c[c.length-1]=d;
return c.join(a.PART_SEPARATOR)
};a.prototype.createPageFrom=function(h){var d=this.navigation.getLastUrl();
for(var f=0;
f<this.rules.length;
f++){var g=this.rules[f];
var c=g[0].exec(d);
if(!c){continue
}d=d.replace(g[0],g[1]).replace(/_$/,"");
if(c[1]==="users"){var e=this.auth.user&&this.auth.user.login===c[2]?"own":"user";
d=d.replace("users",e)
}return d}};
a.prototype.createCardFrom=function(d,c){var f=$(d).closest("[data-card]");
var e=f.attr("data-card");
return e||c
};Mu.Froms=a
})();(function(){var f,d,a,g,c;
var e="1028356";
var b=function(h){this.id=h||e;
this.params={music:"new"};
this.counter=undefined;
Mu.eventize(this)
};b.prototype.init=function(j){f=j.get("navigation");
d=j.get("pages");
a=j.get("auth");
g=j.get("tns");
c=j.get("gemius");
try{this.params.experiments=JSON.parse(a.experiments)
}catch(i){}this.promise=this.initCounter();
d.on("loaded",this.onLoaded.bind(this));
var h=this;
window.onerror=function(l,k,n){var m={};
m[l]=n+"# "+k;
h.count(m,"error")
}};b.prototype.onLoaded=function(){this.hit();
g.hit();c.hit()
};b.prototype.initCounter=function(){var i=this;
if(window.Ya&&Ya.Metrika){i.counter=i.createCounter();
return Vow.resolve({counter:i.counter})
}else{var h=Vow.defer();
$.getScript("//yabs.yandex.ru/metrika/watch.js",function(){i.counter=i.createCounter();
h.resolve({counter:i.counter})
});return h.promise()
}};b.prototype.createCounter=function(){return new Ya.Metrika({id:this.id,webvisor:true,clickmap:true,trackLinks:true,accurateTrackBounce:true,deffer:true,params:this.params})
};b.prototype.hit=function(){this.invoke(function(){this.counter.hit(window.location.href,document.title,null,this.params)
}.bind(this))
};b.prototype.goal=function(h,i){i=i?Function.mixin({},i):{};
i=Function.mixin(i,this.params);
this.invoke(function(){this.counter.reachGoal(h,i)
}.bind(this))
};b.prototype.count=function(i,h){h=h||"counter";
this.invoke(function(){var j={};
j[h]=i;this.counter.params(j)
}.bind(this))
};b.prototype.invoke=function(h){if(this.counter){h()
}else{this.promise.then(function(){h()
})}};Mu.Metrika=b
})();(function(){var d=("external" in window)&&window.external;
var c=(d&&"msIsSiteMode" in d);
var a=(c&&d.msIsSiteMode());
var b=function(){this.buttons={}
};b.prototype.init=function(f){this.seq=f.get("seq");
this.player=f.get("player");
this.fav=f.get("fav");
try{this.initButtons()
}catch(e){}if(a){$(document).bind("msthumbnailclick",this.onThumbnailClick.bind(this));
this.seq.on("changeCurrent",this.onChange.bind(this));
this.player.on("status",this.onStateChange.bind(this));
this.fav.on("changed",this.onChange.bind(this))
}};b.prototype.initButtons=function(){var e="/blocks/icon/ie_player_";
this.buttons.prev=d.msSiteModeAddThumbBarButton(e+"prev.ico","Предыдущий трек");
this.buttons.playPause=d.msSiteModeAddThumbBarButton(e+"play.ico","Играть");
this.buttons.stylePause=d.msSiteModeAddButtonStyle(this.buttons.playPause,e+"pause.ico","Приостановить");
this.buttons.next=d.msSiteModeAddThumbBarButton(e+"next.ico","Следующий трек");
this.buttons.like=d.msSiteModeAddThumbBarButton(e+"like.ico","Мне нравится");
this.buttons.styleDislike=d.msSiteModeAddButtonStyle(this.buttons.like,e+"dislike.ico","Мне не нравится");
d.msSiteModeShowThumbBar()
};b.prototype.onThumbnailClick=function(e){switch(e.originalEvent.buttonID){case this.buttons.prev:this.seq.move(-1);
break;case this.buttons.next:this.seq.move(1);
break;case this.buttons.playPause:this.seq.togglePause();
break;case this.buttons.like:var f=this.fav.toggle({entry:this.seq.current()});
d.msSiteModeShowButtonStyle(this.buttons.like,f?this.buttons.styleDislike:0);
break}};b.prototype.onChange=function(e){var f=this.fav.isFavorite({entry:this.seq.current()});
d.msSiteModeShowButtonStyle(this.buttons.like,f?this.buttons.styleDislike:0)
};b.prototype.onStateChange=function(){var f=this.player.getStatus()==="playing";
try{d.msSiteModeShowButtonStyle(this.buttons.playPause,f?this.buttons.stylePause:0);
if(f){d.msSiteModeSetIconOverlay("/icons/ie_playing.ico","descText")
}else{d.msSiteModeClearIconOverlay()
}}catch(e){}};
Mu.PinnedSite=b
})();(function(){var a=function(){var b={};
b.sendState=function(d){var c=document.createEvent("CustomEvent");
c.initEvent("UnityStateEvent",true,true);
document.body.setAttribute("data-unity-state",JSON.stringify(d));
document.body.dispatchEvent(c,d)
};document.body.addEventListener("UnityActionEvent",function(d){var c=JSON.parse(document.body.getAttribute("data-unity-action"));
if(b._callbackObject){b._callbackObject[c]()
}});b.setCallbackObject=function(c){b._callbackObject=c
};b.setSupports=function(d){var c=document.createEvent("CustomEvent");
c.initEvent("UnitySupportsEvent",true,true);
document.body.setAttribute("data-unity-supports",JSON.stringify(d));
document.body.dispatchEvent(c,d)
};return b};
Mu.UnityMusicShim=a
})();(function(){var i,c,a,d;
var h=function(j){this.unity=j;
this.unity.init({name:"Yandex.Music",homepage:"http://music.yandex.ru/",iconUrl:"http://music.yandex.ru/icons/big.png",onInit:this.init.bind(this)})
};h.prototype.init=function(){this.mediaPlayer=this.unity.MediaPlayer;
this.mediaPlayer.onNext(function(){i.move(1)
});this.mediaPlayer.onPrevious(function(){i.move(-1)
});this.mediaPlayer.onPlayPause(function(){i.togglePause()
});c.on("status",this.onStateChange.bind(this));
i.on("changeCurrent",this.onSeqChange.bind(this))
};h.prototype.onSeqChange=function(){try{var m=i.current();
if(!m){return
}var j=m.track;
var l=m.album&&a.cover(m.album.cover,64);
l=window.location.protocol+l;
this.mediaPlayer.setTrack({title:j.title,album:m.album&&m.album.title,artist:j.artists&&j.artists.length&&j.artists[0].name,artLocation:l});
this.mediaPlayer.setCanPlay(true);
this.mediaPlayer.setCanPause(false)
}catch(k){}};
h.prototype.onStateChange=function(){var k=this.player.getStatus();
try{var l=this.mediaPlayer.PlaybackState[k==="playing"?"PLAYING":"PAUSED"];
this.mediaPlayer.setPlaybackState(l)
}catch(j){}};
var e=function(){if(Mu.UnityMusicShim){this.init()
}};e.prototype.init=function(){this.unity=Mu.UnityMusicShim();
this.unity.setSupports({playpause:true,next:true,previous:true,favorite:true});
this.unity.setCallbackObject({pause:function(){i.togglePause()
},next:function(){i.move(1)
},previous:function(){i.move(-1)
},favorite:function(){d.toggle({entry:i.current()})
}});i.on("changeCurrent",this.onSeqChange.bind(this))
};e.prototype.onSeqChange=function(){var n=i.current();
if(!n){return
}try{var j=n.track;
var m=n.album&&a.cover(n.album.cover,64);
m=window.location.protocol+m;
var l={playing:true,title:j.title,artist:j.artists&&j.artists.length&&j.artists[0].name,albumArt:m};
this.unity.sendState(l)
}catch(k){}};
var g=("external" in window)&&window.external;
var f=g&&("getUnityObject" in g)&&g.getUnityObject(1);
var b=function(){};
b.prototype.init=function(j){i=j.get("seq");
c=j.get("player");
a=j.get("yate_extrnals");
d=j.get("fav");
if(f){this.unity=new h(f)
}else{this.unity=new e()
}};Mu.Unity=b
})();(function(){var b=function(){this.img=new Image()
};b.Regions={"187":"ua","149":"by"};
b.Counters={ua:"bQqQy09xYzwpf1viMB7ZhNU7354N2rs1t2Hq79gmVsL.d7",by:"0tVKVmdBD_S5ck12lzE4_resfQWwiO8e8lq1FGn7pAr.B7"};
b.prototype.hit=function(){if(!Mu.settings){return
}var e=Mu.settings.portalRegion;
var d=(e&&b.Regions[e])||Mu.settings.tld;
var c=d&&b.Counters[d];
if(!c){return
}this.img.src="//yandexgaby.hit.gemius.pl/redot.gif?id="+c+"__t="+(new Date()).valueOf()
};var a=function(){this.img=new Image()
};a.prototype.hit=function(){this.img.src="//www.tns-counter.ru/V13a***R>"+document.referrer.replace(/\*/g,"%2a").substring(0,256)+"*yandex_ru/ru/CP1251/tmsec=yandex_music/"+Math.random()
};Mu.GemiusCounter=b;
Mu.TnsCounter=a
})();(function(){var d,b;
var c="/favicon.ico";
var a=function(e){this.current=c;
Mu.eventize(this)
};a.prototype.init=function(f){var e=this;
e.$head=$("head");
e.$favicon=e.$head.find("link[rel$=icon]");
d=f.get("seq");
b=f.get("player");
b.on("status",e.onStateChange.bind(e))
};a.prototype.onStateChange=function(){var e=b.getStatus();
switch(e){case"playing":this.setFavicon("/blocks/icon/favicon_play.ico");
break;case"paused":this.setFavicon("/blocks/icon/favicon_pause.ico");
break;default:this.setFavicon(c)
}};a.prototype.setFavicon=function(e){e=e||c;
if(e===this.current){return
}this.current=e;
this.$favicon.remove();
this.$favicon=$('<link rel="shortcut icon" href="'+e+'" type="image/x-icon" />');
this.$head.append(this.$favicon)
};Mu.Favicon=a
})();(function(){var a=function(b){if(b.nodeType==3){b=b.parentNode
}if(b.classList){while(b){if(b.tagName==="INPUT"){return true
}if(b.classList.contains("button")||b.classList.contains("button-arrow")||b.classList.contains("button-group")||b.classList.contains("button-radio")||b.classList.contains("player-controls__btn")){return true
}b=b.parentNode
}}return false
};document.body.addEventListener("touchstart",function(f){var d=f.target;
if(!a(d)){return
}f.preventDefault();
var c=false;
var b={handleEvent:function(g){return this[g.type](g)
},touchmove:function(g){c=true
},touchend:function(g){g.preventDefault();
d.removeEventListener("touchmove",b,false);
d.removeEventListener("touchend",b,false);
if(d&&!c){var h=document.createEvent("MouseEvents");
h.initEvent("click",true,true);
d.dispatchEvent(h)
}d=undefined
}};d.addEventListener("touchmove",b,false);
d.addEventListener("touchend",b,false)
},false)})();
(function(){var a=function(){this.repo={};
this.current=null;
this.loading=null;
this.parent=null;
this.containerHtml="<div>";
this.blockPrefix="page-";
Mu.eventize(this)
};a.prototype.register=function(e,f){this.repo[e]=f
};a.prototype.show=function(g,k,i){var j=new this.repo[g](k);
j.dontScroll=i;
j.container=$(this.containerHtml)[0];
j.name=g;j.from=k&&k.from;
this.loading=j;
this.trigger("loading",j);
var h=Mu.pageData;
var e=Mu.pageName;
if(h&&e===g){delete Mu.pageData;
delete Mu.pageName;
if(h===404){this.onError(j,{error:"Not Found"});
return}this.onData(j,h)
}else{var f=this;
j.fetchData(this.datasrc).then(function(l){f.onData(j,l)
}).then(null,function(l){f.onError(j,l)
})}};a.prototype.detach=function(e){$(e.container).remove().off();
e.undelegateAll();
e.container=null;
this.blocks.cleanRange(e.bindingRange)
};a.prototype.render=function(f){this.blocks.beginBinding();
try{this.blocks.assignNext(f);
var e=yr.run("index",f.data,f.templateName)
}finally{f.bindingRange=this.blocks.endBinding()
}f.container.innerHTML=e;
this.blocks.initPendingBlocks(f.container);
if(f.onRender){f.onRender()
}};a.prototype.unloadPreviuos=function(){var e=this.current;
if(!e){return
}if(e.onHide){e.onHide()
}this.detach(e);
if(e.destroy){e.destroy()
}};a.prototype.onData=function(g,f){if(g!==this.loading){return
}this.unloadPreviuos();
g.data=f;try{this.render(g)
}catch(e){delete Mu.pageData;
this.onError(g,e);
return}this.parent.appendChild(g.container);
this.current=g;
if(g.onShow){g.onShow()
}this.loading=null;
this.trigger("loaded",g)
};a.prototype.onError=function(f,e){if(f!==this.loading){return
}if(f.name==="500"){alert("Error showing error: "+e.stack||JSON.stringify(e))
}else{this.blocks.endBinding();
if(e.error==="Not Found"){this.show("404")
}else{this.show("500",{brokenPage:f,error:e})
}}};a.prototype.init=function(f){this.datasrc=f.get("datasrc");
this.blocks=f.get("blocks");
for(var e in this.repo){if(this.repo.hasOwnProperty(e)){this.blocks.register(this.blockPrefix+e,this.repo[e])
}}};var d=function(){a.call(this)
};$.extend(d.prototype,a.prototype);
d.prototype.init=function(e){a.prototype.init.call(this,e);
this.sidebars=e.get("sidebars");
this.on("loaded",function(g){if(!g.dontScroll){window.scrollTo(0,0)
}else{g.dontScroll=false
}try{document.title=yr.run("index",g,"html-head__title_unescaped")
}catch(f){}});
this.parent=$(".centerblock")[0]
};d.prototype.unloadPreviuos=function(){a.prototype.unloadPreviuos.call(this);
this.sidebars.hideAll()
};var c=function(){a.call(this);
this.blockPrefix="sidebar-";
this.containerHtml='<div class="sidebar-cont">';
this.shown=[];
this.on("loaded",this.onLoaded.bind(this))
};$.extend(c.prototype,a.prototype);
c.prototype.init=function(e){a.prototype.init.call(this,e);
this.parent=$(".sidebar")[0]
};c.prototype.onLoaded=function(j){var f=j.container;
this.shown.push(f);
f.className+=" sidebar-cont_shown";
for(var g=this.shown.length-3;
g-->0;){this.parent.removeChild(this.shown.splice(g,1)[0])
}var h=f.style;
var e="animation" in h||"webkitAnimation" in h||"MozAnimation" in h;
if(!e){$(f).css({left:"320px"}).animate({left:"0px"},120)
}};c.prototype.detach=function(){};
c.prototype.hideAll=function(){for(var e=this.shown.length;
e-->0;){this.parent.removeChild(this.shown[e])
}this.shown.length=0
};var b=function(){a.call(this);
this.blockPrefix="popup-";
this.on("loaded",this.onLoaded.bind(this))
};$.extend(b.prototype,a.prototype);
b.prototype.init=function(e){a.prototype.init.call(this,e);
this.parent=$(".popup-holder")[0]
};b.prototype.onLoaded=function(f){var e=f.container;
e.className+=" popup popup_page"
};b.prototype.toggle=function(e,g){var f=this.isOpen(e);
if(!f){this.show(e,g)
}else{this.hide(e)
}return !f};
b.prototype.isOpen=function(e){return !!(this.current&&(!e||this.current.name===e))
};b.prototype.hide=function(e){var f;
if(!this.current){return
}if(!e||this.current.name===e){f=this.current;
this.unloadPreviuos();
this.trigger("unloaded",{name:f.name})
}};b.prototype.unloadPreviuos=function(){a.prototype.unloadPreviuos.call(this);
this.current=undefined
};Mu.Pages=d;
Mu.Sidebars=c;
Mu.Popups=b
})();Mu.pages=new Mu.Pages();
Mu.sidebars=new Mu.Sidebars();
Mu.popups=new Mu.Popups();
(function(){var a=function(b){this.container=undefined;
this.templateName="page-404"
};a.prototype.fetchData=function(b){return Vow.resolve({genres:Mu.genres.structure||{}})
};if(typeof module==="undefined"){Mu.pages.register("404",a)
}else{module.exports=a
}})();(function(){var a=function(b){this.container=undefined;
this.templateName="page-500";
this.error=b.error;
this.brokenPage=b.brokenPage
};a.prototype.fetchData=function(c){var b={genres:Mu.genres.structure||{},error:this.error,debug:!!Mu.isYandex};
return Vow.resolve(b)
};Mu.pages.register("500",a)
})();(function(){var g,f,d,c,e,a;
var b=function(h){this.container=undefined;
this.templateName="page-index";
this.nocheck=h.nocheck
};b.init=function(h){g=h.get("seq");
f=h.get("blocks");
d=h.get("datasrc");
e=h.get("pages");
a=h.get("auth");
c=Mu.blocks.forElem($(".head-progress")[0])
};b.prototype.fetchData=function(k){var j=this;
var i=Vow.defer();
var h={scratch:true};
if(!a||!a.isLoggedIn()){h.noauth=true
}if(j.nocheck){c.startAnimate()
}k.get("feed",{nocheck:this.nocheck},{nocache:true}).then(function(l){if(j.nocheck){c.endAnimate()
}h=Function.mixin(h,l);
i.resolve(h)
},function(l){if(j.nocheck){c.endAnimate()
}i.reject(l)
});return i.promise()
};b.prototype.onRender=function(){this.nextRevision=this.data.nextRevision;
this.$head=$(".head");
this.bindEvents($(this.container));
this.renderOverhead(this.data.headlines)
};b.prototype.renderOverhead=function(h){if(!h||!h.length){return
}var i=yr.run("index",h,"overhead");
var j=$(i).insertBefore(this.$head);
if(j.length){this.overhead=f.forElem(j[0])
}};b.prototype.onHide=function(){if(this.overhead){this.overhead.hide();
delete this.overhead
}};b.prototype.bindEvents=function(i){this.delegate("track.click",this.selectItem);
this.delegate("album.click",this.selectItem);
this.delegate("artist.click",this.selectItem);
this.delegate("concert.click",this.selectItem);
this.delegate("playlist.click",this.selectItem);
this.delegate("promo.click",this.selectItem);
this.delegate("track.getContext",this.getTrackContext);
this.delegate("radio.getContext",this.getRadioContext);
this.delegate("social-bind.bound",this.onSocialBound);
var h=this;
i.on("click",".page-index__more",function(j){h.loadMore(this)
});i.on("click",".day__more",function(j){e.show("index",{nocheck:1})
})};b.prototype.getTrackContext=function(h){return h.target.closestParent("event").getTrackContext()
};b.prototype.getRadioContext=function(h){return h.target.closestParent("event").getRadioContext()
};b.prototype.selectItem=function(h){if(this.currSelected===h.target){return
}if(this.currSelected){this.currSelected.setSelected(false)
}(this.currSelected=h.target).setSelected(true);
h.target.openSidebar()
};b.prototype.loadMore=function(i){if(!this.nextRevision||this.loading){return
}var h=this;
var j=$(i);
j.addClass("page-index__more_loading");
d.get("feed",{revision:this.nextRevision},{nocache:true}).then(function(m){var l=yr.run("index",m,h.templateName);
var k=$(l);
h.bindEvents(k);
f.initPendingBlocks(k[0]);
j.replaceWith(k.contents());
h.nextRevision=m.nextRevision;
h.data.__binding=$.extend(h.data.__binding,m.__binding);
h.loading=false
}).fail(function(){j.removeClass("page-index__more_loading");
h.loading=false
});this.loading=true
};b.prototype.onSocialBound=function(h){f.forElem(h.target.container,"event").onSocialBindSuccess(h.provider)
};if(typeof module==="undefined"){Mu.pages.register("index",b)
}else{module.exports=b
}})();(function(){var c,a;
var b=function(d){this.albumId=d.album;
this.trackId=d.track;
this.templateName="page-album";
this.current=undefined;
this.popup=undefined;
this.hidePopup=undefined
};b.init=function(d){c=d.get("seq");
a=d.get("froms")
};b.prototype.fetchData=function(d){return Vow.all([d.get("album",{album:this.albumId}),{}]).then(function(e){return e[0]
})};b.prototype.setSelected=function(d){if(this.current===d.target){return
}var e=!!this.current;
if(this.current){this.current.setSelected(false)
}(this.current=d.target).setSelected(true);
d.target.openSidebar(true,e,this.data)
};b.prototype.getContext=function(g){var f=this.data;
var e=Array.prototype.concat.apply([],this.data.volumes);
var d=e.map(function(i){return{album:f,track:i}
});var h=this.data.title;
return{entries:d,shortTitle:h,title:"Альбом «"+h+"»",href:"/album/"+f.id}
};b.prototype.playContext=function(d){var e=this.getContext();
e.from=a.getBlockFrom(this.container,"album");
c.playFixed(e,e.entries)
};b.prototype.onRender=function(){var e=$(this.container);
var d=this;
d.$popupCont=e.find(".page-album__popup");
d.$duplicates=e.find(".page-album__title_duplicates");
d.popup=new (Mu.blocks.get("popup"))(d.$popupCont,{position:{my:"center",at:"center",of:window},modal:true});
d.delegate("album.click",this.setSelected);
d.delegate("track.click",this.setSelected);
d.delegate("track.getContext",this.getContext);
e.on("click",".js-play-album",function(f){d.playContext()
});e.on("click",".page-album__head .album-cover",function(f){d.popup.toggle()
});d.$popupCont.on("click",function(f){d.popup.hide()
});e.on("click",".page-album__version",function(f){$("html, body").animate({scrollTop:d.$duplicates.offset().top},150)
})};b.prototype.onShow=function(){if(this.trackId){var d=this.openTrack(this.trackId);
if(d){this.dontScroll=true;
var e=$(d.container);
e.toggleClass("track_filled",true);
setTimeout(function(){d.container.scrollIntoView();
e.toggleClass("track_non-filled",true);
e.toggleClass("track_filled",false)
},300)}}};b.prototype.openTrack=function(g){var f=$(this.container).find(".track");
for(var d=0;
d<f.length;
d++){var e=Mu.blocks.forElem(f[d]);
if(e&&e.data&&e.data.id===this.trackId){this.setSelected({target:e});
return e}}return undefined
};if(typeof module==="undefined"){Mu.pages.register("album",b)
}else{module.exports=b
}})();(function(){var b;
var a=function(c){this.container=undefined;
this.templateName="page-search";
this.query=c.query;
if(!this.query.type){this.query.type="all"
}};a.init=function(c){b=$(window)
};a.prototype.fetchData=function(d){this.datasrc=d;
var c=this;
return d.get("search",this.query).then(function(e){return{query:c.query,result:e}
})};a.prototype.onRender=function(){var c=this;
this.$cont=$(this.container);
this.preview=this.$cont.find(".video-preview")[0];
this.nav=Mu.blocks.forElem(this.$cont.find(".search-nav")[0]);
this.delegate("track.click",this.selectItem);
this.delegate("album.click",this.selectItem);
this.delegate("playlist.click",this.selectItem);
this.delegate("artist.click",this.selectItem);
this.delegate("video.click",this.selectVideo);
this.delegate("video.play",this.playVideo);
this.delegate("track.getContext",this.getContext);
b.bind("resize.Search",(function(){var d;
return function(e){if(d){clearTimeout(d)
}d=setTimeout(function(){c.nav.reflow(160,true);
d=undefined
},100)}})())
};a.prototype.onShow=function(){this.nav.reflow(160)
};a.prototype.onHide=function(){b.unbind("resize.Search")
};a.prototype.selectItem=function(c){if(this.currSelected===c.target){return
}if(this.currSelected){this.currSelected.setSelected(false)
}(this.currSelected=c.target).setSelected(true);
c.target.openSidebar&&c.target.openSidebar()
};a.prototype.selectVideo=function(c){this.selectItem(c);
this.currSelected.playVideo()
};a.prototype.playVideo=function(c){var d=Mu.blocks.forElem(this.preview);
d.show({html:c.html})
};a.prototype.getContext=function(f){var d=this.data.result;
var e=(d.tracks&&d.tracks.items)||[];
var c=e&&e.filter(function(g){return g&&!g.error
}).map(function(g){return{album:g.albums&&g.albums[0],track:g}
});return{entries:c}
};if(typeof module==="undefined"){Mu.pages.register("search",a)
}else{module.exports=a
}})();(function(){var f,e,a,b,d;
var c=function(g){this.query=g.query;
this.container=undefined;
this.artistId=g.artist;
this.templateName="page-artist";
this.what=g.what||"";
this.donate=undefined;
this.linksPopup=undefined;
this.sort=this.query.sort;
this.dir=this.query.dir;
if(!this.sort&&this.what==="albums"){this.sort="year"
}};c.init=function(g){f=g.get("seq");
e=g.get("navigation");
a=g.get("froms");
b=g.get("datasrc");
d=g.get("blocks")
};c.prototype.fetchData=function(h){var g={what:this.what,query:this.query,dir:this.dir,sort:this.sort};
return h.get("artist",{artist:this.artistId,what:this.what,sort:this.sort||undefined,dir:this.dir||undefined}).then(function(i){if(i.redirected){e.pushState("/artist/"+i.artist.id,true)
}Function.mixin(g,i);
return g})};
c.prototype.onRender=function(){var h=$(this.container);
var g=this;
g.$cont=h;g.$links=h.find(".page-artist__links");
g.$linksButton=h.find(".page-artist__button-links");
g.$linksCont=h.find(".page-artist__links-tab");
g.$similarTitle=h.find(".page-artist__title-similar");
g.linksButton=Mu.blocks.forElem(g.$linksButton[0]);
g.linksPopup=new (Mu.blocks.get("popup"))(this.$links,{position:{my:"right top",at:"right+10 bottom+12",of:g.$linksButton[0]},toggable:true});
g.linksPopup.on("hide",function(){g.onLinksClose()
});g.delegate("track.click",g.selectItem);
g.delegate("album.click",g.selectItem);
g.delegate("artist.click",g.selectItem);
g.delegate("table-head.click",g.selectItem);
g.delegate("track.getContext",g.getContext);
g.delegate("radio.getContext",g.getRadioContext);
g.delegate("button-arrow.click",g.showLinks);
h.on("click",".js-play-artist",function(i){g.onPlayClick(i)
});g.$cont.find(".js-radio").hover(function(i){g.$similarTitle.toggleClass("title_no-hover",true)
},function(i){g.$similarTitle.toggleClass("title_no-hover",false)
});h.on("click",".donate-button",function(i){if(!g.donate){g.donate=Mu.blocks.forElem(h.find(".donate")[0])
}g.donate.show();
i.stopPropagation()
})};c.prototype.onShow=function(){var g=this.$cont.find(".js-radio");
if(this.query&&this.query.radio==="play"&&g.length){var h=d.forElem(g[0],"button-radio");
h.onClick()
}};c.prototype.onHide=function(){if(this.donate){this.donate.hide()
}if(this.linksPopup){this.linksPopup.hide()
}};c.prototype.selectItem=function(g){if(this.currSelected===g.target){return
}if(this.currSelected){this.currSelected.setSelected(false)
}(this.currSelected=g.target).setSelected(true);
g.target.openSidebar&&g.target.openSidebar()
};c.prototype.showLinks=function(g){this.linksButton&&this.linksPopup.toggle()
};c.prototype.onLinksClose=function(){this.linksButton&&this.linksButton.setOpen(false)
};c.prototype.onPlayClick=function(i){var h=this.data.tracks;
var g=h.map(function(l){return{album:l.albums[0],track:l}
});var k=a.getBlockFrom(this.container,"artist");
var j={title:"Популярные треки исполнителя "+this.data.artist.name,href:"/artist/"+this.artistId,from:k};
f.playArtistTracks(j,{artistId:this.artistId,entries:g})
};c.prototype.getContext=function(j){var i=this.data.tracks;
var h=i.map(function(m){return{album:m.albums[0],track:m}
});var g=this.what==="tracks";
var l=(g?"Все треки исполнителя ":"Популярные треки исполнителя ")+this.data.artist.name;
var k="/artist/"+this.artistId+(g?"/tracks":"");
return{entries:h,shortTitle:l,title:l,href:k,artistId:g?undefined:this.artistId}
};c.prototype.getRadioContext=function(){var h=this.data.artist.name;
var g={shortTitle:h,title:"Радио исполнителей, похожих на "+h,href:"/artist/"+this.artistId};
return g};if(typeof module==="undefined"){Mu.pages.register("artist",c)
}else{module.exports=c
}})();(function(){var b,a,g,e,f,d;
var c=function(h){this.container=undefined;
this.templateName="page-playlist";
this.owner=h.owner;
this.kind=h.kind;
this.edit=h.query.edit
};c.init=function(h){b=h.get("auth");
a=h.get("datasrc");
g=h.get("seq");
e=h.get("navigation");
f=h.get("library");
d=h.get("blocks")
};c.prototype.fetchData=function(h){return h.get("playlist",{owner:this.owner,kinds:this.kind},{nocache:true}).then(function(i){i.auth=b||{};
return i})};
c.prototype.onRender=function(){var i=$(this.container);
var h=this;
h.$title=i.find(".page-playlist__title");
h.$desc=i.find(".page-playlist__desc");
h.coverSelector=d.forElem(i.find(".page-playlist__cover-control .button-arrow")[0]);
h.accessSelector=d.forElem(i.find(".page-playlist__access-controls .button-arrow")[0]);
h.share=d.forElem(i.find(".page-playlist__controls .share")[0]);
h.$title.on("blur",function(j){h.onTitleEditClose(true)
});h.$title.on("keydown",function(j){switch(j.which){case 13:h.onTitleEditClose(true);
break;case 27:h.onTitleEditClose(false);
break}});h.delegate("track.click",h.selectItem);
h.delegate("track.getContext",h.getContext);
h.delegate("track.delete",h.onDeleteTrackClick);
h.delegate("button-arrow.click",function(j){var k=j.target;
if(k===h.coverSelector){h.onCoverDropdown()
}else{if(k===h.accessSelector){h.onAccessDropdown()
}}});i.on("click",".js-play-playlist",function(j){var k=d.forElem(i.find(".track:eq(0)")[0]);
k.onPlayClick(j)
});h.coverPopup=d.forElem(i.find(".page-playlist__cover-popup")[0]);
i.on("change",".page-playlist__upload-pic input",h.uploadPic.bind(h));
i.on("click",".page-playlist__remove-pic",h.removePic.bind(h));
h.accessPopup=d.forElem(i.find(".page-playlist__access-popup")[0]);
i.on("click",".page-playlist__access-popup .page-playlist__popup-item",h.onAccessChange.bind(h));
i.on("click",".page-playlist__delete",h.onDeleteClick.bind(h));
i.on("submit",".page-playlist__desc-form",h.onDescriptionSubmit.bind(h));
i.on("click",".page-playlist__desc-cancel",function(){h.toggleDescriptionEditing(false)
});i.on("click",".page-playlist__desc-text",function(j){if($(j.target).closest("a").length===1){return
}h.toggleDescriptionEditing(true)
})};c.prototype.onShow=function(){var h=this;
if(h.edit==="title"&&h.$title.hasClass("page-playlist__title_edit")){h.$title.focus();
h.$title.select()
}};c.prototype.onTitleEditClose=function(h){if(this.isClosing){return
}var j=this.data.playlist;
this.isClosing=true;
if(h){var i=this.$title.val().trim();
if(i.length&&(i!==j.title)){this.saveTitle(j,i)
}}this.$title.val(j.title);
this.$title.blur();
this.isClosing=false
};c.prototype.saveTitle=function(h,i){h.title=i;
a.changePlaylist("rename",{kind:h.kind,title:h.title})
};c.prototype.getContext=function(i){var k=this.data.playlist;
var h=k.tracks.filter(function(l){return l&&!l.error
});var j=k.title;
return{entries:h.map(function(l){return{album:l.albums[0],track:l}
}),shortTitle:j,title:"Плейлист «"+j+"»",href:"/users/"+k.owner.login+"/playlists/"+k.kind,playlist:k}
};c.prototype.selectItem=function(h){if(this.currSelected===h.target){return
}if(this.currSelected){this.currSelected.setSelected(false)
}(this.currSelected=h.target).setSelected(true);
h.target.openSidebar()
};c.prototype.uploadPic=function(h){if(!h.target.value){return false
}var k="upload-frame-"+(+new Date());
var i=$('<iframe id="'+k+'" name="'+k+'" style="width: 0; height: 0; border: 0; position: absolute;"/>').appendTo(document.body)[0];
i.onload=function(){e.reload(true);
$(i).remove()
};var j=h.target.form;
j.method="POST";
j.action="/handlers/upload-pic.jsx?kind="+(+this.kind)+"&sign="+b.user.sign;
j.target=k;
j.submit()};
c.prototype.removePic=function(h){a.changePlaylist("clear-cover",{kind:this.kind}).then(function(i){if(i&&i.success){e.reload(true)
}})};c.prototype.onCoverDropdown=function(){var h=this.coverSelector;
var i=$(h.container);
var j=i.closest(".page-playlist__cover-control");
j.addClass("page-playlist__cover-control_open");
if(!this.coverPopupInited){this.coverPopup.setOptions({position:{my:"left top",at:"left bottom+5",of:i},toggable:true});
this.coverPopup.on("hide",function(){h.setOpen(false);
j.removeClass("page-playlist__cover-control_open")
});this.coverPopupInited=true
}this.coverPopup.toggle()
};c.prototype.onAccessDropdown=function(){var h=this.accessSelector;
var i=$(h.container);
if(!this.accessPopupInited){this.accessPopup.setOptions({position:{my:"center top",at:"center bottom+5",of:i},toggable:true});
this.accessPopup.on("hide",function(){h.setOpen(false)
});this.accessPopupInited=true
}this.accessPopup.toggle()
};c.prototype.onAccessChange=function(i){this.accessPopup.hide();
var k=$(i.target).closest(".page-playlist__popup-item");
var h=k.data().value;
if(this.data.playlist.visibility===h){return
}var j=this;
a.changePlaylist("set-visibility",{kind:this.kind,visibility:h}).then(function(l){if(l&&l.playlist){j.data.playlist.visibility=l.playlist.visibility;
j.redrawAccessSelector(l.playlist);
j.share.setDisabled(l.playlist.visibility==="private")
}})};c.prototype.redrawAccessSelector=function(k){var j=$(this.accessSelector.container);
var h=j.find(".page-playlist__access-icon");
var i=j.find(".page-playlist__access-text");
h.replaceWith(yr.run("index",k,"page-playlist__access-icon"));
i.replaceWith(yr.run("index",k,"page-playlist__access-text"))
};c.prototype.onDeleteTrackClick=function(h){var j=h.target;
var l=this.data.playlist;
var m=l.tracks.indexOf(j.data);
if(m===-1){return
}var k;var i=function(){e.reload(true)
};if(l.kind===Mu.constants.KIND_LIKE){k={tracks:[{trackId:h.data.id,albumId:h.data.albums&&h.data.albums[0]&&h.data.albums[0].id}],ref:true,act:"remove"};
f.change(k).then(i)
}else{k={op:"delete",from:m,to:m+1};
f.patchPlaylist(l,{diff:[k]}).then(i)
}};c.prototype.onDescriptionSubmit=function(h){h.preventDefault();
this.$desc.find("*[type=submit]").attr("disabled","disabled");
var i=this;
var j={kind:this.kind,description:this.$desc.find("textarea").val()};
var k=function(){i.$desc.find("*[type=submit]").removeAttr("disabled")
};a.changePlaylist("change-description",j).then(function(l){if(l&&l.success&&l.playlist){i.$desc.html(yr.run("index",l.playlist,"page-playlist__desc_editable"));
i.toggleDescriptionEditing(false)
}else{k()}}).fail(k)
};c.prototype.toggleDescriptionEditing=function(h){this.$desc.toggleClass("page-playlist__desc_editing",h)
};c.prototype.onDeleteClick=function(){if(window.confirm("Содержимое плейлиста будут удалено навсегда, без возможности восстановления. Удалить плейлист?")){var h=this.owner;
a.changePlaylist("delete",{kind:this.kind}).then(function(i){if(i&&i.success){e.navigateTo("/users/"+h+"/playlists")
}})}};if(typeof module==="undefined"){Mu.pages.register("playlist",c)
}else{module.exports=c
}})();(function(){var d,a,c;
var b=function(e){this.container=undefined;
this.templateName="page-top";
this.genre=e.genre||"";
this.filter=e.filter||"";
this.query=e.query
};b.init=function(e){d=e.get("seq");
a=e.get("froms");
c=Mu.Storage.create("localStorage")
};b.prototype.fetchData=function(e){var f={genre:this.genre,filter:this.filter};
if(this.query.page){f.page=this.query.page
}return e.get("top",f)
};b.prototype.onRender=function(){var f=$(this.container);
var e=this;
this.delegate("track.click",this.selectItem);
this.delegate("artist.click",this.selectItem);
this.delegate("album.click",this.selectItem);
this.delegate("top-pic.click",this.selectItem);
this.delegate("track.getContext",this.getContext);
this.delegate("radio.getContext",this.getRadioContext);
this.pics=Mu.blocks.forElem(f.find(".top-pics")[0])
};b.prototype.onHide=function(){};
b.prototype.getContext=function(g){var f=this.data.tracks;
var e=f.map(function(i){return{album:i.albums[0],track:i}
});var h=yr.externals.genreName(this.genre).toLowerCase();
return{entries:e,shortTitle:h,title:"Самые популярные треки жанра "+h,href:"/genre/"+this.genre}
};b.prototype.getRadioContext=function(e){var g=yr.externals.genreName(this.genre).toLowerCase();
var f={shortTitle:g,title:"Радио жанра "+g,href:"/genre/"+this.genre};
return f};b.prototype.selectItem=function(e){if(this.currSelected===e.target){return
}if(this.currSelected){this.currSelected.setSelected(false)
}(this.currSelected=e.target).setSelected(true);
e.target.openSidebar()
};if(typeof module==="undefined"){Mu.pages.register("top",b)
}else{module.exports=b
}})();(function(){var d="page-users__img";
var i,e,b,g,a,c,f;
var h=function(j){this.container=undefined;
this.templateName="page-users";
this.query=j.query;
this.what=j.what||"tracks";
this.owner=j.owner;
this.sort=this.query.sort;
this.dir=this.query.dir
};h.init=function(j){i=j.get("seq");
e=j.get("datasrc");
b=j.get("yate_extrnals");
g=j.get("auth");
a=j.get("navigation");
c=j.get("library");
f=j.get("froms")
};h.prototype.fetchData=function(l){var k=this;
var j={what:k.what,owner:k.owner,dir:k.dir,sort:k.sort,auth:g||{}};
if(!j.owner){j.error="no owner";
return Vow.resolve(j)
}var m={owner:k.owner,filter:k.what};
if(this.what==="tracks"){m.sort=k.sort;
m.dir=k.dir
}return l.get("library",m,{nocache:true}).then(function(n){if(g.user.uid==n.owner.uid&&k.what!=="history"){c.refreshLocal(n)
}j=Function.mixin(j,n);
return j})};
h.prototype.onRender=function(){var k=$(this.container);
var j=this;
j.$more=k.find(".page-users__more");
j.$links=k.find(".page-users__links");
j.$linksButton=k.find(".page-users__button-links");
j.linksButton=Mu.blocks.forElem(j.$linksButton[0]);
j.linksPopup=new (Mu.blocks.get("popup"))(j.$links,{position:{my:"right top",at:"right+10 bottom+12",of:j.$linksButton[0]},toggable:true});
j.linksPopup.on("hide",function(){j.onLinksClose()
});k.on("change",".page-users__choose input[type='radio']",function(l){j.showPhone($(l.target).val())
});k.on("click",".link_get-link",function(l){j.showGetLink();
l.stopPropagation()
});k.on("click",".page-users__new-playlist",j.onNewPlaylistClick.bind(j));
k.on("click",".page-users__more",j.onMoreClick.bind(j));
k.on("click",".page-users__button-clear",j.onClearClick.bind(j));
k.on("click",".page-users__shuffle-button",j.onShuffleClick.bind(j));
j.delegate("track.delete",j.onTrackDelete);
j.delegate("track.click",j.selectItem);
j.delegate("album.click",j.selectItem);
j.delegate("playlist.click",j.selectItem);
j.delegate("artist.click",j.selectItem);
j.delegate("track.getContext",j.getContext);
j.delegate("button-arrow.click",j.showLinks)
};h.prototype.onNewPlaylistClick=function(j){var k=this;
e.changePlaylist("add",{title:"Новый плейлист"}).then(function(l){var m=l.playlist;
if(m){a.navigateTo("users/"+k.data.owner.login+"/playlists/"+m.kind+"?edit=title")
}})};h.prototype.onMoreClick=function(j){var k=this;
var l={owner:k.owner,filter:k.what==="albums"?"indirectAlbums":"indirectArtists"};
k.$more.toggleClass("page-users__more_loading",true);
e.get("library",l,{nocache:true}).then(function(m){k.$more.remove();
var n=yr.run("index",m,"page-users__indirect-"+k.what);
$(".page-users__section_"+k.what).append(n)
},function(m){k.$more.toggleClass("page-users__more_loading",false)
})};h.prototype.onShuffleClick=function(j){var l=f.getBlockFrom(this.container,"user");
var k={shortTitle:this.owner,title:"Треки пользователя "+this.owner,href:"/users/"+this.owner,from:l};
e.get("user-shuffle",{owner:this.owner},{nocache:true}).then(function(n){var m;
if(n.tracks){m=n.tracks.filter(function(o){return o&&!o.error
}).map(function(o){return{track:o,album:o.albums&&o.albums[0]}
})}i.playUserTracks(k,{trackIds:n.trackIds,entries:m})
})};h.prototype.onLinksClose=function(){this.linksButton&&this.linksButton.setOpen(false)
};h.prototype.onTrackDelete=function(j){var n=j.target;
var l={entry:{track:j.data}};
var k=!c.isInLibrary(l);
var m=c.getParams(l,k);
c.change(m);
$(n.container).remove()
};h.prototype.onClearClick=function(j){e.post("history-clear",{},{nocache:true}).then(function(k){a.reload()
})};h.prototype.showLinks=function(j){this.linksButton&&this.linksPopup.toggle()
};h.prototype.selectItem=function(j){if(this.currSelected===j.target){return
}if(this.currSelected){this.currSelected.setSelected(false)
}(this.currSelected=j.target).setSelected(true);
j.target.openSidebar()
};h.prototype.showPhone=function(o){var k=d+"_hidden";
var m=$("."+d+"_"+o);
$("."+d).toggleClass(k,true);
if(m.length){m.toggleClass(k,false)
}var n=this.storeData[o];
if(n){var l=$(".page-users__store-link");
var j=$(".page-users__store-name");
j.text(n.name);
l.attr("href",n.link)
}};h.prototype.showGetLink=function(){if(!this.getAppLink){var j=$(this.container).find(".link_get-link");
this.getAppLink=new Mu.blocks.getAppLink({my:"left top",at:"left-25 bottom",of:j})
}this.getAppLink.show()
};h.prototype.storeData={android:{link:"https://play.google.com/store/apps/details?id=ru.yandex.music&hl=ru",name:"Google play"},iphone:{link:"https://itunes.apple.com/ru/app/andeks.muzyka/id520797969?mt=8",name:"App Store"}};
h.prototype.onHide=function(){if(this.getAppLink){this.getAppLink.hide()
}if(this.emailSelector){this.emailSelector.hide()
}};h.prototype.getContext=function(m){var l=this.data.tracks;
var k=l.filter(function(n){return n&&!n.error
}).map(function(n){return{album:n.albums&&n.albums[0],track:n}
});var j=this.data.owner.login;
return{entries:k,shortTitle:j,title:"Треки пользователя "+j,href:"/users/"+j}
};if(typeof module==="undefined"){Mu.pages.register("users",h)
}else{module.exports=h
}})();(function(){var a;
var b=function(c){this.templateName="page-payment";
this.query=c.query;
this.what=c.what;
this.orderId=this.query.orderId;
this.authRequired=true
};b.init=function(c){a=c.get("auth");
this.domDelegate("click",".page-payment__log-in",function(d){a.showAuthForm()
})};b.prototype.fetchData=function(c){if(!a||!a.isLoggedIn()){return Vow.resolve({noauth:true})
}return c.get("payment-history",{owner:this.owner},{nocache:true}).then(function(d){d.auth=a.user;
return d})};
b.prototype.onRender=function(){var c=this;
if(!a||!a.isLoggedIn()){return
}c.$cont=$(this.container);
c.order=Mu.blocks.forElem(c.$cont.find(".payment-order")[0]);
c.order.setOptions({modal:true,position:{my:"center",at:"center",of:window}});
c.gift=Mu.blocks.forElem(c.$cont.find(".payment-gift")[0]);
c.gift.setOptions({modal:true,position:{my:"center",at:"center",of:window}});
c.$cont.on("click",".page-payment__payment-button",c.onOrderClick.bind(c));
c.$cont.on("click",".page-payment__gift-button",c.onGiftClick.bind(c));
c.delegate("listedOrder.click",c.onOrderItemClick.bind(c))
};b.prototype.onOrderClick=function(c){this.order.toggle()
};b.prototype.onGiftClick=function(c){this.gift.toggle()
};b.prototype.onShow=function(){if(!a||!a.isLoggedIn()){return
}this.initSelected()
};b.prototype.onHide=function(){};
b.prototype.onOrderItemClick=function(c){this.setSelected(c.target)
};b.prototype.initSelected=function(){if(!this.orderId){return
}var d=this.$cont.find(".listed-order"),c,e;
for(var c=0;
c<d.length;
++c){var e=Mu.blocks.forElem(d[c]);
if(e.data.id==this.orderId){this.setSelected(e);
break}}};b.prototype.setSelected=function(c){if(this.currSelected===c){return
}if(this.currSelected){this.currSelected.setSelected(false)
}(this.currSelected=c).setSelected(true);
this.currSelected.openSidebar()
};if(typeof module==="undefined"){Mu.pages.register("payment",b)
}else{module.exports=b
}})();(function(){var c,a,e,b;
var d=function(f){this.container=undefined;
this.templateName="page-settings";
this.what=f.what||"";
this.authRequired=true
};d.init=function(f){c=f.get("auth");
a=f.get("datasrc");
e=f.get("broker");
b=f.get("blocks").get("notify");
this.domDelegate("click",".page-settings__log-in",function(g){c.showAuthForm()
})};d.prototype.fetchData=function(i){var f=Vow.defer();
if(!c||!c.isLoggedIn()){f.resolve({noauth:true});
return f.promise()
}var j=i.get("social-settings",{},{nocache:true});
var g=i.get("subscription-settings",{},{nocache:true});
var h=i.get("payment-history",{"short-info":true},{nocache:true});
Vow.all([j,g,h]).then(function(k){f.resolve({what:this.what,social:k[0],subscription:k[1],account:k[2],auth:c.user})
}).fail(function(k){f.reject(k)
});return f.promise()
};d.prototype.onRender=function(){if(!c.isLoggedIn()){return
}var g=$(this.container);
var f=this;
f.$motivation=g.find(".page-settings__motivation");
f.order=Mu.blocks.forElem(g.find(".payment-order")[0]);
f.order.setOptions({modal:true,position:{my:"center",at:"center",of:window}});
f.gift=Mu.blocks.forElem(g.find(".payment-gift")[0]);
f.gift.setOptions({modal:true,position:{my:"center",at:"center",of:window}});
f.emailButton=Mu.blocks.forElem(g.find(".button-arrow")[0]);
f.emailSelector=Mu.blocks.forElem(g.find(".email-selector")[0]);
if(f.emailSelector){f.emailSelector.setOptions({position:{my:"left top",at:"left bottom",of:this.emailButton.container}});
f.emailSelector.on("change",function(h){f.onEmailChange({target:this})
});f.emailSelector.on("hide",f.onEmailClose.bind(f))
}f.delegate("button-arrow.click",function(h){f.onShowEmailSelector(h)
});f.delegate("toggler.change",f.onTogglerChange);
f.delegate("social-bind.bound",f.onSocialBindSuccess);
g.on("click",".page-settings__payment-button",f.onOrderClick.bind(f));
g.on("click",".page-settings__gift-button",f.onGiftClick.bind(f));
g.on("click",".page-settings__social-control .page-settings__btn-unbind",f.onSocialUnbindClick.bind(f));
g.on("click",".page-settings__loader",f.onReloadTracksClick.bind(f))
};d.prototype.onOrderClick=function(f){this.order.toggle()
};d.prototype.onGiftClick=function(f){this.gift.toggle()
};d.prototype.onShowEmailSelector=function(f){this.emailSelector.toggle()
};d.prototype.onEmailClose=function(f){this.emailButton.setOpen(false)
};d.prototype.onEmailChange=function(f){var g=this,i=f.target.data.selected,h=g.emailButton.getText();
g.emailButton.setText(i);
this.updateSubscriptionSettings({email:i}).then(function(j){if(!j.success){g.emailButton.setText(h)
}})};d.prototype.onTogglerChange=function(f){var h=f.target,i=h.data.paramName,j={},g=this,k=h.isChecked();
if(i=="visibility"){j["user-music-visibility"]=k?"public":"private";
g.$motivation.toggleClass("page-settings__motivation_hidden",k);
a.saveSettings(j).then(function(m){if(!m.success){var l=h.toggle();
g.$motivation.toggleClass("page-settings__motivation_hidden",l)
}})}else{if(i=="artistsMailEnabled"||i=="billingMailEnabled"){j[i]=k;
this.updateSubscriptionSettings(j).then(function(l){if(!l.success){h.toggle()
}})}else{if(i=="socialVisibility"){j["user-social-visibility"]=k?"public":"private";
a.saveSettings(j)
}}}};d.prototype.onSocialUnbindClick=function(f){var h=Mu.blocks.forElem(f.target,"page-settings__item_social");
var g=$(h.container);
a.post("change-profile",{action:"remove",provider:h.data.provider}).then(function(i){if(i.success){g.toggleClass("page-settings__item_connected",false)
}})};d.prototype.onSocialBindSuccess=function(f){$(f.target.container).closest(".page-settings__item").addClass("page-settings__item_connected");
var g=Mu.blocks.forElem(f.target.container,"page-settings__item_social");
b.show("socialUpdate",{provider:g&&g.data.provider})
};d.prototype.onReloadTracksClick=function(f){var g=this;
var j=Mu.blocks.forElem(f.target,"page-settings__item_social");
var h=$(j.container).find(".page-settings__loader");
var k=false;
var i=j.data.provider;
h.toggleClass("page-settings__loader_on",true);
setTimeout(function(){if(k){g.endLoaderAnimation(h,i,true)
}k=true},1200);
a.post("social-reimport",{provider:j.data.provider}).then(function(l){if(k){g.endLoaderAnimation(h,i,l.success)
}k=true},function(l){if(k){g.endLoaderAnimation(h,i,false)
}k=true})};
d.prototype.endLoaderAnimation=function(g,i,h){g.toggleClass("page-settings__loader_on",false);
var f;if(h){b.show("socialUpdate",{provider:i});
setTimeout(function(){g.remove()
},80)}};d.prototype.updateSubscriptionSettings=function(i){var g=this;
var f=$.extend({},g.data.subscription.settings,i);
var h=g.fillSettingsParams(f);
return Mu.datasrc.post("subscription-settings-update",h).then(function(j){if(j.success){g.data.subscription.settings=f
}return j})
};d.prototype.fillSettingsParams=function(f){return{email:f.email,"billing-mail-enabled":f.billingMailEnabled,"artists-mail-enabled":f.artistsMailEnabled}
};if(typeof module==="undefined"){Mu.pages.register("settings",d)
}else{module.exports=d
}})();(function(){var e,b,d;
var c=function(g){this.container=undefined;
this.templateName="page-apps"
};c.init=function(g){e=g.get("sidebars");
b=g.get("auth");
d=g.get("metrika")
};c.prototype.onRender=function(){var i=$(this.container);
var g=this;
var h=["iphone","android"];
g.$phones=i.find(".page-apps__section_phone");
g.topPhones=new a(g.$phones[0],h,"feed");
g.bottomPhones=new a(g.$phones[1],h,"library");
g.order=Mu.blocks.forElem(i.find(".payment-order")[0]);
g.order.setOptions({modal:true,position:{my:"center",at:"center",of:window}});
g.gift=Mu.blocks.forElem(i.find(".payment-gift")[0]);
g.gift.setOptions({modal:true,position:{my:"center",at:"center",of:window}});
i.on("click",".page-apps__button_radio",function(j){g.topPhones.showScreen("radio")
});i.on("click",".page-apps__button_feed",function(j){g.topPhones.showScreen("feed")
});i.on("click",".page-apps__button_library",function(j){g.bottomPhones.showScreen("library")
});i.on("click",".page-apps__button_offline",function(j){g.bottomPhones.showScreen("offline")
});i.on("click",".page-apps__phones_right .icon_fwd, .page-apps__phones_right .icon_back",function(j){g.topPhones.swapPhones()
});i.on("click",".page-apps__phones_left .icon_fwd, .page-apps__phones_left .icon_back",function(j){g.bottomPhones.swapPhones()
});i.on("click",".page-apps__button_payment",g.onShowOrder.bind(g));
i.on("click",".page-apps__button_gift",g.onShowGift.bind(g));
e.show("apps")
};c.prototype.fetchData=function(g){return Vow.resolve({})
};c.prototype.onShowOrder=function(){if(!b.isLoggedIn()){b.showAuthForm();
return}d.goal("appsPay");
this.order.toggle()
};c.prototype.onShowGift=function(){if(!b.isLoggedIn()){b.showAuthForm();
return}d.goal("appsGift");
this.gift.toggle()
};function a(g,j,i){var h=this;
h.screen=i;
h.$cont=$(g);
h.$btns=h.$cont.find(".page-apps__button");
h.phones=j.map(function(k){return new f(h.$cont.find(".page-apps__phone_"+k),k)
})}a.prototype.swapPhones=function(){var g=this.phones[0];
this.phones[0]=this.phones[1];
this.phones[1]=g;
this.phones[0].setSelected(true);
this.phones[1].setSelected(false);
this.setPhoneType()
};a.prototype.setPhoneType=function(){this.$cont.toggleClass("page-apps__section_"+this.phones[1].type,false);
this.$cont.toggleClass("page-apps__section_"+this.phones[0].type,true)
};a.prototype.showScreen=function(g){if(this.screen===g){return
}this.screen=g;
this.phones.forEach(function(h){h.showScreen(g)
});this.setSelectedButton(g)
};a.prototype.setSelectedButton=function(g){this.$btns.toggleClass("page-apps__button_active",false);
this.$btns.filter(".page-apps__button_"+g).toggleClass("page-apps__button_active",true)
};function f(g,h){this.type=h;
this.$cont=$(g);
this.$display=this.$cont.find(".page-apps__phone-display")
}f.prototype.setSelected=function(g){g=!!g;
this.$cont.toggleClass("page-apps__phone_size_s",!g).toggleClass("page-apps__phone_pale",!g)
};f.prototype.showScreen=function(h){var i=this.$cont.find(".page-apps__phone-screen");
var g=$(yr.run("index",{type:h},"page-apps__phone-screen"));
g.toggleClass("page-apps__phone-screen_shown",true);
this.$display.append(g);
if(i.length>1){$(i[0]).remove()
}};if(typeof module==="undefined"){Mu.pages.register("apps",c)
}else{module.exports=c
}})();(function(){var a=function(b){this.container=undefined;
this.templateName="page-mix";
this.mix=b.mix||"all"
};a.init=function(b){};
a.prototype.fetchData=function(b){return b.get("mix",{id:this.mix},{nocache:true})
};a.prototype.onRender=function(){this.delegate("playlist.click",this.selectItem)
};a.prototype.selectItem=function(b){if(this.currSelected===b.target){return
}if(this.currSelected){this.currSelected.setSelected(false)
}(this.currSelected=b.target).setSelected(true);
b.target.openSidebar()
};if(typeof module==="undefined"){Mu.pages.register("mix",a)
}else{module.exports=a
}})();(function(){var b,c,a;
var d=function(e){this.container=undefined;
this.templateName="page-disk";
this.param=e;
this.dir=decodeURIComponent((e&&e.dir)||"/")
};d.init=function(e){b=e.get("datasrc");
c=e.get("auth");
a=e.get("froms");
this.domDelegate("click",".page-disk__log-in",function(f){c.showAuthForm()
})};d.prototype.onRender=function(){var e=this;
e.$cont=$(this.container);
e.delegate("track.click",e.selectItem);
e.delegate("folder.click",e.selectItem);
e.delegate("track.getContext",this.getContext)
};d.prototype.fetchData=function(){var e={dir:this.dir};
if(!c.isLoggedIn()){return Vow.resolve({noauth:true})
}return b.get("disk",{dir:encodeURIComponent(this.dir)},{nocache:true}).then(function(f){return $.extend(e,f)
})};d.prototype.getContext=function(g){var f=this.data.tracks;
var e=f&&f.map(function(h){return{album:h.albums[0],track:h}
});return{entries:e,shortTitle:"Треки с Яндекс.Диска",title:"Треки с Яндекс.Диска",href:"/disk/"+this.dir}
};d.prototype.selectItem=function(e){if(this.currSelected===e.target){return
}if(this.currSelected){this.currSelected.setSelected(false)
}(this.currSelected=e.target).setSelected(true);
e.target.openSidebar()
};if(typeof module==="undefined"){Mu.pages.register("disk",d)
}else{module.exports=d
}})();(function(){var a=function(b){this.container=undefined;
this.templateName="sidebar-500";
this.error=b.error
};a.prototype.fetchData=function(c){var b={error:this.error,debug:!!Mu.isYandex};
return Vow.resolve(b)
};Mu.sidebars.register("500",a)
})();(function(){var c,a;
var b=function(d){this.container=undefined;
this.templateName="sidebar-album";
this.param=d
};b.init=function(d){c=d.get("seq");
a=d.get("froms")
};b.prototype.fetchData=function(d){return d.get("album",{album:this.param.album})
};b.prototype.playContext=function(d){var e=this.getContext();
e.from=a.getBlockFrom(this.container,"album");
c.playFixed(e,e.entries,-1)
};b.prototype.getContext=function(g){var f=this.data;
var e=Array.prototype.concat.apply([],this.data.volumes);
var d=e.map(function(i){return{album:f,track:i}
});var h=this.data.title;
return{entries:d,shortTitle:h,title:"Альбом «"+h+"»",href:"/album/"+f.id}
};b.prototype.onRender=function(){var e=$(this.container);
var d=this;
this.delegate("track.getContext",this.getContext);
e.on("click",".b-musicside__card .btn_play",function(f){d.playContext()
});e.on("click",".js-play-album",function(f){d.playContext()
})};Mu.sidebars.register("album",b)
})();(function(){var c,a;
var b=function(d){this.container=undefined;
this.templateName="sidebar-track";
this.param=d
};b.init=function(d){c=d.get("seq");
a=d.get("froms")
};b.prototype.fetchData=function(d){var e=this.param;
return d.get("track",{track:this.param.track}).then(function(f){e.data=f;
e.anyAlbum=e.album;
if(e.anyAlbum===-1&&f.albums.length>0){e.anyAlbum=f.albums[0].id
}return e})
};b.prototype.playMe=function(f){var e=this.data.data;
var d=this.seekAlbum();
var h=e.title;
var i=a.getBlockFrom(this.container,"track");
var g={shortTitle:h,title:"Трек «"+h+"»",href:"/album/"+(d&&d.id)+"/track/"+e.id,from:i};
c.playOne(g,{track:e,album:d})
};b.prototype.onRender=function(){var d=$(this.container);
d.on("click",".js-play-track",this.playMe.bind(this));
this.delegate("track.getContext",this.getContext)
};b.prototype.getContext=function(g){var h=this.data.data;
if(!h||!h.similar){return
}var f=h.similar;
var d=f.map(function(k){return{album:k.albums&&k.albums[0],track:k}
});var i=h.title;
var e=this.seekAlbum()||{};
var j=a.getBlockFrom(this.container,"similar_track");
return{entries:d,href:"/album/"+(e&&e.id)+"/track/"+h.id,title:"Треки похожие на «"+i+"»",from:j}
};b.prototype.seekAlbum=function(){var e=this.data.data;
var d;for(var f=0;
f<e.albums.length;
f++){d=e.albums[f];
if(d.id===this.data.anyAlbum){break
}}return d};
Mu.sidebars.register("track",b)
})();(function(){var c,a;
var b=function(d){this.container=undefined;
this.templateName="sidebar-artist";
this.artistId=d.artist;
this.param=d
};b.init=function(d){c=d.get("seq");
a=d.get("froms")
};b.prototype.fetchData=function(d){return d.get("artist",{artist:this.param.artist})
};b.prototype.onRender=function(){var d=$(this.container);
this.delegate("track.getContext",this.getContext);
this.delegate("radio.getContext",this.getRadioContext);
d.on("click",".js-play-artist",this.onPlayClick.bind(this))
};b.prototype.getContext=function(f){var e=this.data.tracks;
var d=e.map(function(h){return{album:h.albums[0],track:h}
});var g=this.data.artist.name;
return{entries:d,shortTitle:g,title:"Популярные треки исполнителя "+g,href:"/artist/"+this.artistId,artistId:this.artistId}
};b.prototype.getRadioContext=function(){var e=this.data.artist.name;
var d={shortTitle:e,title:"Радио исполнителей, похожих на "+e,href:"/artist/"+this.artistId,artistId:this.artistId};
return d};b.prototype.onPlayClick=function(){var e=this.data.tracks;
var d=e.map(function(h){return{album:h.albums[0],track:h}
});var g=a.getBlockFrom(this.container,"artist");
var f={title:"Популярные треки исполнителя "+this.data.artist.name,href:"/artist/"+this.artistId,from:g};
c.playArtistTracks(f,{artistId:this.artistId,entries:d})
};Mu.sidebars.register("artist",b)
})();(function(){var b,a,d;
var c=function(e){this.container=undefined;
this.templateName="sidebar-playlist";
this.owner=e.owner;
this.kind=e.kind
};c.init=function(e){b=e.get("auth");
a=e.get("datasrc");
d=e.get("navigation")
};c.prototype.fetchData=function(e){return e.get("playlist",{owner:this.owner,kinds:this.kind},{nocache:true}).then(function(f){f.auth=b;
return f})};
c.prototype.onRender=function(){var f=$(this.container);
var e=this;
this.delegate("track.getContext",this.getContext);
f.on("click",".js-play-playlist",function(g){var h=Mu.blocks.forElem(f.find(".track:eq(0)")[0]);
if(h){h.onPlayClick(g)
}});f.on("click",".sidebar-playlist__delete",function(g){e.onDeleteClick()
})};c.prototype.onDeleteClick=function(){var f=this;
if(window.confirm("Содержимое плейлиста будут удалено навсегда, без возможности восстановления. Удалить плейлист?")){var e=this.owner;
a.changePlaylist("delete",{kind:this.kind}).then(function(g){if(g&&g.success){d.reload()
}})}};c.prototype.getContext=function(f){var h=this.data.playlist;
var e=h.tracks.filter(function(i){return i&&!i.error
});var g=h.title;
return{shortTitle:g,title:"Плейлист «"+g+"»",href:"/users/"+h.owner.login+"/playlists/"+h.kind,entries:e.map(function(i){return{album:i.albums&&i.albums[0],track:i}
}),playlist:h}
};Mu.sidebars.register("playlist",c)
})();(function(){var a=function(b){this.container=undefined;
this.templateName="sidebar-order-info";
this.orderId=b.orderId
};a.prototype.fetchData=function(b){return b.get("payment-order-info",{"order-id":this.orderId})
};Mu.sidebars.register("order-info",a)
})();(function(){var a=function(b){this.container=undefined;
this.templateName="sidebar-folder";
this.dir=b&&b.dir
};a.init=function(b){};
a.prototype.fetchData=function(c){var b={dir:this.dir};
return c.get("disk",{dir:encodeURIComponent(this.dir)}).then(function(d){return $.extend(b,d)
})};a.prototype.onRender=function(){var b=$(this.container);
this.delegate("track.getContext",this.getContext)
};a.prototype.getContext=function(d){var c=this.data.tracks;
var b=c&&c.map(function(e){return{album:e.albums[0],track:e}
});return{entries:b,shortTitle:"Треки с Яндекс.Диска",title:"Треки с Яндекс.Диска",href:"/disk/"+this.dir}
};Mu.sidebars.register("folder",a)
})();(function(){var b,c;
var e={empty_captcha:"Введите защитный код.",bad_captcha:"Вы ввели неверный защитный код."};
var a={empty_phone:"Введите номер телефона.",bad_phone:"Некорректный номер телефона."};
var d=function(f){this.container=undefined;
this.templateName="sidebar-apps";
this.param=f
};d.init=function(f){b=f.get("datasrc");
c=f.get("metrika")
};d.prototype.onRender=function(){var f=this;
f.$cont=$(this.container);
f.$phone=f.$cont.find(".sidebar-apps__phone");
f.$popup=f.$cont.find(".sidebar-apps__popup");
f.$form=f.$cont.find(".sidebar-apps__form");
f.$sendButton=f.$cont.find(".sidebar-apps__button-send");
f.$captchaImg=f.$cont.find(".sidebar-apps__captcha-img");
f.$captchaError=f.$cont.find(".sidebar-apps__popup .sidebar-apps__error");
f.$captcha=f.$cont.find(".sidebar-apps__captcha");
f.popup=new (Mu.blocks.get("popup"))(f.$popup,{position:{my:"left bottom",at:"left-16 top-25",of:f.$phone[0]}});
f.tooltip=Mu.blocks.forElem(f.$cont.find(".tooltip")[0]);
f.$phone.on("focus, mousedown",f.onPhoneFocus.bind(f));
f.$sendButton.on("mousedown",f.onSend.bind(f));
f.$captcha.on("keydown",function(g){f.showCaptchaError(false)
});f.$cont.on("click",".sidebar-apps__captcha-reload",f.onReloadCaptcha.bind(f));
f.$cont.on("keydown",".sidebar-apps__button-send, .sidebar-apps__phone, .sidebar-apps__captcha",function(g){if(g.keyCode===13){f.onSend(g)
}});f.$cont.on("click",".button-store_apple",function(g){c.goal("appsAppStore")
});f.$cont.on("click",".button-store_google",function(g){c.goal("appsGooglePlay")
})};d.prototype.fetchData=function(f){return Vow.resolve({})
};d.prototype.onReloadCaptcha=function(){this.reloadCaptcha()
};d.prototype.onPhoneFocus=function(f){f.stopPropagation();
if(!this.data.key){this.reloadCaptcha()
}if(!this.popup.isOpen){this.popup.show()
}};d.prototype.onSend=function(g){g.stopPropagation();
g.preventDefault();
var h=this;
var i=h.$captcha.val();
var f=h.$phone.val();
h.tooltip.hide();
if(!i){h.showCaptchaError("empty_captcha");
return}if(!f){h.showPhoneError("empty_phone");
return}b.post("sms",{captcha:i,key:h.data.key,phone:f}).then(function(j){j.captcha&&h.setCaptchaData(j.captcha);
if(j.success){h.showPhoneTooltip("Соoбщение отправлено.");
h.popup.hide();
c.goal("appsSMS");
return}if(j.error in e){h.showCaptchaError(j.error);
return}else{if(j.error in a){h.showPhoneError(j.error);
return}}})};
d.prototype.reloadCaptcha=function(){var f=this;
b.get("captcha",{},{nocache:true}).then(function(g){f.setCaptchaData(g)
})};d.prototype.setCaptchaData=function(f){this.data=f;
this.$captchaImg.attr("src",f.url);
this.$captcha.val("")
};d.prototype.showCaptchaError=function(g){var f="sidebar-apps__error_shown";
if(!g){this.$captchaError.toggleClass(f,false);
return}this.$captchaError.text(e[g]||"Error");
this.$captchaError.toggleClass(f,true);
if(!this.popup.isOpen){this.popup.show()
}this.$captcha.focus()
};d.prototype.showPhoneError=function(f){this.showPhoneTooltip(a[f]||"Error");
this.$phone.focus()
};d.prototype.showPhoneTooltip=function(f){this.tooltip.setContent(f);
this.tooltip.show()
};Mu.sidebars.register("apps",d)
})();(function(){var b,d,g,c,a;
var f;var e=function(h){this.container=undefined;
this.templateName="popup-sequence";
this.param=h;
this.what=(h&&h.what)||""
};e.init=function(h){b=h.get("datasrc");
d=h.get("auth");
g=h.get("seq");
c=h.get("popups");
a=h.get("froms");
f=$(window)
};e.prototype.onRender=function(){var h=this;
h.$cont=$(this.container);
h.$header=h.$cont.find(".popup-sequence__header-content");
h.$tracks=h.$cont.find(".popup-sequence__tracks");
h.delegate("track.getContext",h.getContext);
h.delegate("track.delete",h.onDeleteClick);
h.$cont.on("click",".popup__close",h.onClose);
h.$cont.on("click",".popup-sequence__history-tab",h.onHistoryClick.bind(h));
h.$cont.on("click",".popup-sequence__seq-tab",h.onSeqClick.bind(h));
h.$cont.on("click",".popup-sequence__button-clear",h.onClearClick.bind(h));
h.$cont.on("click",".popup-sequence__tracks .link",function(){setTimeout(h.onClose,50)
})};e.prototype.onShow=function(){f.bind("DOMMouseScroll.Seq mousewheel.Seq",this.onMouseWheel.bind(this))
};e.prototype.onHide=function(){f.unbind("DOMMouseScroll.Seq mousewheel.Seq")
};e.prototype.fetchData=function(){var h={what:this.what,auth:d};
switch(this.what){case"history":if(!d.isLoggedIn()){return Vow.resolve({noauth:true})
}return b.get("history",{},{nocache:true}).then(function(i){h.tracks=i.tracks;
return h});
default:h.tracks=g.entryList;
h.context=g.context;
return Vow.resolve(h)
}};e.prototype.onClose=function(h){c.hide("sequence")
};e.prototype.onHistoryClick=function(h){c.show("sequence",{what:"history"})
};e.prototype.onSeqClick=function(h){c.show("sequence")
};e.prototype.onClearClick=function(h){if(this.what=="history"){b.post("history-clear",{},{nocache:true}).then(function(i){c.show("sequence",{what:"history"})
})}else{g.clearEntries();
c.show("sequence")
}};e.prototype.onDeleteClick=function(h){var i=this.$cont.find(".track").index(h.target.container);
if(g.remove(i)){$(h.target.container).remove()
}};e.prototype.onMouseWheel=function(h){var j=this.processMouseWheel(h,".popup-sequence__content");
var i=this.processMouseWheel(h,".add-to-popup__list");
if(!j&&!i){return this.prevent(h)
}};e.prototype.processMouseWheel=function(m,i){var l=$(m.target).closest(i);
if(l.length===0){return false
}var p=l[0],h=p.scrollTop,o=p.scrollHeight,n=l.height(),k=(m.type==="DOMMouseScroll"?m.originalEvent.detail*-40:m.originalEvent.wheelDelta),j=k>0;
if(!j&&-k>o-n-h){l.scrollTop(o);
return this.prevent(m)
}else{if(j&&k>h){l.scrollTop(0);
return this.prevent(m)
}}return true
};e.prototype.getContext=function(k){var j=this.data.tracks;
var h;var i=this.what=="history";
var l={};if(i){h=j.map(function(m){return{album:m.albums&&m.albums[0],track:m}
});l.from=Mu.Froms.MAIN_PREFIX+"-history-track-track-"+Mu.Froms.PAGE_SUFFIX
}else{h=j.map(function(m){return{album:m.album||(m.track.albums&&m.track.albums[0]),track:m.track}
});l=$.extend({},this.data.context)
}l.entries=h;
return l};e.prototype.prevent=function(h){h.stopPropagation();
h.preventDefault();
h.returnValue=false;
return false
};Mu.popups.register("sequence",e)
})();Mu.init=function(){$(".page-root")[0].innerHTML=yr.run("index",{});
var a=new Mu.MiniDi();
Mu.datasrc=new Mu.Datasrc();
a.init({player:new Ya.Music.Player(),layout:Mu.layout,pages:Mu.pages,sidebars:Mu.sidebars,popups:Mu.popups,navigation:Mu.navigation,datasrc:Mu.datasrc,auth:new Mu.Auth(),seq:new Mu.PlaySequence(),fav:new Mu.Favorites(),library:new Mu.Library(),hiliter:new Mu.Hiliter(),blocks:Mu.blocks,yate_extrnals:yr.externals,broker:Lego.block["i-social"],storage:Mu.Storage.create(),shortcuts:new Mu.Shortcuts(),froms:new Mu.Froms(),pinnedSite:new Mu.PinnedSite(),unity:new Mu.Unity(),gemius:new Mu.GemiusCounter(),tns:new Mu.TnsCounter(),metrika:new Mu.Metrika(),favicon:new Mu.Favicon()});
Mu.blocks.initPendingBlocks(document.body);
Mu.navigation.start()
};Mu.constants={KIND_LIKE:3};