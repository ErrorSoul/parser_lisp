var yr={};(function(){yr.log=function(){};
var G={};var d=/&/g;
var s=/</g;
var E=/>/g;
var c=/"/g;
var B=/&amp;/g;
var a=/&lt;/g;
var n=/&gt;/g;
yr.text2xml=function(I){if(I==null){return""
}return(""+I).replace(d,"&amp;").replace(s,"&lt;").replace(E,"&gt;")
};yr.xml2text=function(I){if(I==null){return""
}return(""+I).replace(a,"<").replace(n,">").replace(B,"&")
};yr.text2attr=function(I){if(I==null){return""
}return(""+I).replace(d,"&amp;").replace(c,"&quot;").replace(s,"&lt;").replace(E,"&gt;")
};yr.xml2attr=function(I){if(I==null){return""
}return(""+I).replace(c,"&quot;").replace(s,"&lt;").replace(E,"&gt;")
};yr.register=function(O,M){if(G[O]){throw Error('Module "'+O+'" already exists')
}var N=M.imports||[];
var K=[M];for(var L=0,J=N.length;
L<J;L++){var I=G[N[L]];
if(!I){throw Error('Module "'+N[L]+"\" doesn't exist")
}else{K=K.concat(I.imports)
}}M.imports=K;
G[O]=M};yr.run=function(N,K,M){M=M||"";
var I=G[N];
if(!I){throw'Module "'+N+'" is undefined'
}var L=new l(K);
var J=I.a(I,[L.root],M,{a:{}});
return J};yr.join=function x(J,I){return J.concat(I)
};yr.nodeValue=function g(I){var J=I.data;
return(typeof J==="object")?"":J
};yr.nodeName=function b(I){var J=I[0];
return(J)?J.name:""
};yr.simpleScalar=function y(I,K){var M=K.data;
if(!M){return""
}if(I==="*"){for(var J in M){return yr.simpleScalar(J,K)
}return""}var L=M[I];
if(typeof L==="object"){return""
}return L};
yr.simpleBoolean=function t(I,K){var M=K.data;
if(!M){return false
}if(I==="*"){for(var J in M){var L=yr.simpleBoolean(J,K);
if(L){return true
}}return false
}var L=M[I];
if(!L){return false
}if(L instanceof Array){return L.length
}return true
};yr.nodeset2scalar=function o(I){if(!I.length){return""
}var J=I[0].data;
return(typeof J=="object")?"":J
};yr.nodeset2boolean=function A(I){if(!(I&&I.length>0)){return false
}return !!I[0].data
};yr.nodeset2xml=function j(I){return yr.scalar2xml(yr.nodeset2scalar(I))
};yr.nodeset2attrvalue=function v(I){return yr.scalar2attrvalue(yr.nodeset2scalar(I))
};yr.scalar2xml=yr.text2xml;
yr.xml2scalar=yr.xml2text;
yr.xml2attrvalue=yr.xml2attr;
yr.scalar2attrvalue=yr.text2attr;
yr.object2nodeset=function D(I){return[(new l(I)).root]
};yr.array2nodeset=function k(J){var I={item:J};
return[(new l(I)).root]
};yr.cmpSN=function F(L,K){for(var J=0,I=K.length;
J<I;J++){if(L==yr.nodeValue(K[J])){return true
}}return false
};yr.cmpNN=function h(J,P){var K=P.length;
if(K===0){return false
}if(K===1){return yr.cmpSN(yr.nodeValue(P[0]),J)
}var Q=[];var I=yr.nodeValue(P[0]);
for(var O=0,M=J.length;
O<M;O++){var L=yr.nodeValue(J[O]);
if(L==I){return true
}Q[O]=L}for(var N=1;
N<K;N++){I=yr.nodeValue(P[N]);
for(var O=0,M=J.length;
O<M;O++){if(Q[O]==I){return true
}}}return false
};yr.shortTags={br:true,col:true,embed:true,hr:true,img:true,input:true,link:true,meta:true,param:true,wbr:true};
yr.closeAttrs=function i(J){var L=J.s;
if(L){var M="";
var K=J.a;for(var I in K){M+=" "+I+'="'+K[I].quote()+'"'
}M+=(yr.shortTags[L])?"/>":">";
J.s=null;return M
}return""};
yr.copyAttrs=function f(K,J){for(var I in J){K[I]=J[I]
}};yr.scalarAttr=function(I){this.s=(I==null)?"":(""+I)
};yr.scalarAttr.prototype.quote=function(){return yr.text2attr(this.s)
};function m(I){return I.replace(/&/g,"&amp;")
}yr.scalarAttr.prototype.addxml=function(I){return new yr.xmlAttr(m(this.s)+I)
};yr.scalarAttr.prototype.addscalar=function(I){return new yr.scalarAttr(this.s+I)
};yr.xmlAttr=function(I){this.s=(I==null)?"":(""+I)
};yr.xmlAttr.prototype.quote=function(){return yr.xml2attr(this.s)
};yr.xmlAttr.prototype.addscalar=function(I){return new yr.xmlAttr(this.s+m(I))
};yr.slice=function(I,K,J){I=""+I;
return(J)?I.slice(K,J):I.slice(K)
};yr.exists=function(I){return I.length>0
};yr.grep=function(J,I){var N=[];
for(var K=0,M=J.length;
K<M;K++){var L=J[K];
if(I(L,K,M)){N.push(L)
}}return N};
yr.byIndex=function(I,J){return I.slice(J,J+1)
};yr.sort=function(J,P,N){var S=[];
for(var M=0,L=J.length;
M<L;M++){var K=J[M];
var R=P(K,M,L);
S.push({node:K,value:R})
}var T=(N)?-1:+1;
var Q=(N)?+1:-1;
var O=S.sort(function(V,U){var X=V.value;
var W=U.value;
if(X<W){return Q
}if(X>W){return T
}return 0});
var I=[];for(var M=0,L=O.length;
M<L;M++){I.push(O[M].node)
}return I};
yr.nodeset2data=function(J){var I=J.length;
if(I===0){return""
}if(I===1){return J[0].data
}var L=[];for(var K=0;
K<I;K++){L.push(J[K].data)
}return L};
yr.externals={};
var H=function(){};
H.prototype.a=function C(O,N,Q,ah){var T="";
var J;if(arguments.length>4){J=Array.prototype.slice.call(arguments,4)
}var af=O.imports;
for(var ab=0,ad=N.length;
ab<ad;ab++){var Y=N[ab];
var P=false;
var I;var Z=0;
var aa=af.length;
var ag;while(!P&&Z<aa){I=af[Z++];
var R=I.matcher[Q];
if(R){var K=R[Y.name]||R["*"];
if(K){var W=0;
var X=K.length;
while(!P&&W<X){var ae=K[W++];
ag=I[ae];var ac=ag.j;
if(ac){if(I.matched(ac,ag.a,Y,ab,ad)){P=ae
}}else{var L=ag.s;
var S=ag.a;
for(var U=0,V=L.length;
U<V;U++){if(I.matched(L[U],S[U],Y,ab,ad)){P=ae;
break}}}}}}}if(P){if(J){T+=ag.apply(O,[O,Y,ab,ad,ah].concat(J))
}else{T+=ag(O,Y,ab,ad,ah)
}}}return T
};H.prototype.matched=function p(P,R,O,M,L){if(P===1){return !O.parent
}var K=P.length;
var N=K-2;while(N>=0){if(!O){return false
}var J=P[N];
switch(J){case 0:var I=P[N+1];
if(I!=="*"&&I!==O.name){return false
}O=O.parent;
break;case 2:case 4:var Q=P[N+1];
if(!Q(this,O,M,L)){return false
}break}N-=2
}if(R&&O.parent){return false
}return true
};H.prototype.s=function z(J,I){return this.n(J,[I])
};H.prototype.n=function r(S,O){var Q=O;
var L=Q.length;
var T;for(var P=0,J=S.length;
P<J;P+=2){T=[];
var R=S[P];
var I=S[P+1];
switch(R){case 0:for(var N=0;
N<L;N++){yr.selectNametest(I,Q[N],T)
}break;case 1:for(var N=0;
N<L;N++){var M=0;
var K=Q[N];
while(M<I&&K){K=K.parent;
M++}if(K){T.push(K)
}}break;case 2:for(var N=0;
N<L;N++){var K=Q[N];
if(I(this,K,N,L)){T.push(K)
}}break;case 3:var K=Q[I];
T=(K)?[K]:[];
break;case 4:if(L>0){var K=Q[0];
if(I(this,K.doc.root,0,1)){T=T.concat(Q)
}}}Q=T;L=Q.length;
if(!L){return[]
}}return T};
yr.selectNametest=function e(M,L,I){var N=L.data;
if(!N||typeof N!=="object"){return I
}if(M==="*"){if(N instanceof Array){for(var K=0,J=N.length;
K<J;K++){yr.selectNametest(K,L,I)
}}else{for(M in N){yr.selectNametest(M,L,I)
}}return I}N=N[M];
if(N===undefined){return I
}var O=L.doc;
if(N instanceof Array){for(var K=0,J=N.length;
K<J;K++){I.push({data:N[K],parent:L,name:M,doc:O})
}}else{I.push({data:N,parent:L,name:M,doc:O})
}return I};
yr.document=function(I){var J;
if(!I.length){J=new l({})
}else{J=new l(I[0].data)
}return[J.root]
};yr.subnode=function(K,N,M){var O=M.doc;
if(N instanceof Array){var J=[];
for(var L=0,I=N.length;
L<I;L++){J.push({data:N[L],name:K,parent:M,doc:O})
}return J}return[{data:N,name:K,parent:M,doc:O}]
};H.prototype.v=function w(M,J){var L=J.doc._vars;
var K=L[M];
if(K===undefined){var I=this.findSymbol(M);
K=(typeof I==="function")?I(this,J,0,1):I;
L[M]=K}return K
};H.prototype.f=function q(O,M,N,J,I){var L=this.findSymbol(O);
if(arguments.length>5){var K=Array.prototype.slice.call(arguments);
K[0]=this;return L.apply(this,K)
}if(I!==undefined){return L(this,M,N,J,I)
}return L(this,M,N,J)
};H.prototype.k=function u(M,K,Q,W){var V=Q.doc._keys;
var T=this.findSymbol(M);
var J=V[M];
if(!J){J=this._initKey(T,M,K,Q)
}var U=J.values;
var L=J.nodes;
var R=this;
if(W){var I;
if(J.xml){I="";
for(var P=0,N=K.length;
P<N;P++){var Q=K[P];
I+=O(yr.nodeValue(Q))
}}else{I=[];
for(var P=0,N=K.length;
P<N;P++){var Q=K[P];
I=I.concat(O(yr.nodeValue(Q)))
}}return I}else{var S=U[K];
if(S===undefined){S=O(K)
}return S}function O(Y){var ac=L[Y];
var ab;if(J.xml){ab="";
if(ac){for(var Z=0,X=ac.length;
Z<X;Z++){var aa=ac[Z];
ab+=T.b(R,aa.c,aa.i,aa.l,{})
}}}else{ab=[];
if(ac){for(var Z=0,X=ac.length;
Z<X;Z++){var aa=ac[Z];
ab=ab.concat(T.b(R,aa.c,aa.i,aa.l))
}}}U[Y]=ab;
return ab}};
H.prototype._initKey=function(V,L,J,T){var W=T.doc._keys;
var I=W[L]={};
I.xml=(V.bt==="xml");
var M=V.n(this,T);
var K=I.nodes={};
if(V.ut==="nodeset"){for(var R=0,P=M.length;
R<P;R++){var S=M[R];
var N=V.u(this,S,R,P);
for(var Q=0,O=N.length;
Q<O;Q++){U(yr.nodeValue(N[Q]),{c:S,i:R,l:P})
}}}else{for(var R=0,P=M.length;
R<P;R++){var S=M[R];
var N=V.u(this,S,R,P);
U(N,{c:S,i:R,l:P})
}}I.values={};
return I;function U(Y,Z){var X=K[Y];
if(!X){X=K[Y]=[]
}X.push(Z)}};
H.prototype.findSymbol=function(N){var J=this.imports;
for(var L=0,I=J.length;
L<I;L++){var K=J[L];
var M=K[N];
if(M!==undefined){return M
}}};function l(I){if(I instanceof Array){I={item:I}
}this.root={data:I,parent:null,name:"",doc:this};
this._vars={};
this._keys={}
}yr.Module=H
})();if(typeof window==="undefined"&&typeof module!=="undefined"){module.exports=yr
}(function(){var b=(typeof window!=="undefined"&&window.yr)||require("yate/lib/runtime.js");
function d(e){var h=Array.prototype.slice.call(arguments,1);
var f={};for(var g=0,k=h.length;
g<k;g++){var j=h[g];
c(e,f,j)}return f
}function c(f,e,h){for(var j in h){var g=h[j];
var i=e[j];
if(f&&e==g){continue
}if(f&&typeof g=="object"&&i){c(f,i,g)
}else{if(g!=undefined){e[j]=h[j]
}}}return e
}function a(k,j){var e=[];
for(var f=0,l=k.length;
f<l;f++){var g=k[f];
var h=g&&g[j];
if(h){e.push(h)
}}return e}b.externals["nb-extend"]=function(f,g){if(g&&g[0]){if(typeof g=="string"){f[0].data.content=g
}else{var h=f[0].data;
var e=g[0].data;
var i=d(false,h,e);
f[0].data=i
}}return f};
b.externals["nb-deep-extend"]=function(f,g){if(g&&g[0]){if(typeof g=="string"){f[0].data.content=g
}else{var h=f[0].data;
var e=g[0].data;
var i=d(true,h,e);
f[0].data=i
}}return f};
b.externals["nb-wrap"]=function(f,e){var g={};
if(e&&e.length){g[f]=e.length==1?e[0].data:a(e,"data")
}return[{data:g,name:"",parent:null,doc:e[0].doc}]
};b.externals["nb-uniq"]=(function(){var e=0;
return function(){return e++
}})();b.externals["nb-warn"]=function(e){console.log("%c"+e,"color:#ffcc00")
}})();(function(a){if(typeof define=="function"){define(a)
}else{if(typeof YUI=="function"){YUI.add("es5",a)
}else{a()}}})(function(){function O(){}if(!Function.prototype.bind){Function.prototype.bind=function g(Z){var aa=this;
if(typeof aa!="function"){throw new TypeError("Function.prototype.bind called on incompatible "+aa)
}var e=C.call(arguments,1);
var Y=function(){if(this instanceof Y){var ab=aa.apply(this,e.concat(C.call(arguments)));
if(Object(ab)===ab){return ab
}return this
}else{return aa.apply(Z,e.concat(C.call(arguments)))
}};if(aa.prototype){O.prototype=aa.prototype;
Y.prototype=new O();
O.prototype=null
}return Y}}var b=Function.prototype.call;
var B=Array.prototype;
var u=Object.prototype;
var C=B.slice;
var D=b.bind(u.toString);
var J=b.bind(u.hasOwnProperty);
var P;var X;
var N;var U;
var l;if((l=J(u,"__defineGetter__"))){P=b.bind(u.__defineGetter__);
X=b.bind(u.__defineSetter__);
N=b.bind(u.__lookupGetter__);
U=b.bind(u.__lookupSetter__)
}if([1,2].splice(0).length!=2){var k=Array.prototype.splice;
if(function(){function Y(ab){var aa=[];
while(ab--){aa.unshift(ab)
}return aa}var Z=[],e;
Z.splice.bind(Z,0,0).apply(null,Y(20));
Z.splice.bind(Z,0,0).apply(null,Y(26));
e=Z.length;
Z.splice(5,0,"XXX");
if(e+1==Z.length){return true
}}()){Array.prototype.splice=function(Y,e){if(!arguments.length){return[]
}else{return k.apply(this,[Y===void 0?0:Y,e===void 0?(this.length-Y):e].concat(C.call(arguments,2)))
}}}else{Array.prototype.splice=function(ab,Z){var e,Y=C.call(arguments,2),aa=Y.length;
if(!arguments.length){return[]
}if(ab===void 0){ab=0
}if(Z===void 0){Z=this.length-ab
}if(aa>0){if(Z<=0){if(ab==this.length){this.push.apply(this,Y);
return[]}if(ab==0){this.unshift.apply(this,Y);
return[]}}e=C.call(this,ab,ab+Z);
Y.push.apply(Y,C.call(this,ab+Z,this.length));
Y.unshift.apply(Y,C.call(this,0,ab));
Y.unshift(0,this.length);
k.apply(this,Y);
return e}return k.call(this,ab,Z)
}}}if([].unshift(0)!=1){var V=Array.prototype.unshift;
Array.prototype.unshift=function(){V.apply(this,arguments);
return this.length
}}if(!Array.isArray){Array.isArray=function x(e){return D(e)=="[object Array]"
}}var S=Object("a"),M=S[0]!="a"||!(0 in S);
if(!Array.prototype.forEach){Array.prototype.forEach=function c(e){var Z=E(this),Y=M&&D(this)=="[object String]"?this.split(""):Z,ab=arguments[1],aa=-1,ac=Y.length>>>0;
if(D(e)!="[object Function]"){throw new TypeError()
}while(++aa<ac){if(aa in Y){e.call(ab,Y[aa],aa,Z)
}}}}if(!Array.prototype.map){Array.prototype.map=function A(Y){var aa=E(this),Z=M&&D(this)=="[object String]"?this.split(""):aa,ad=Z.length>>>0,e=Array(ad),ac=arguments[1];
if(D(Y)!="[object Function]"){throw new TypeError(Y+" is not a function")
}for(var ab=0;
ab<ad;ab++){if(ab in Z){e[ab]=Y.call(ac,Z[ab],ab,aa)
}}return e}
}if(!Array.prototype.filter){Array.prototype.filter=function H(Y){var aa=E(this),Z=M&&D(this)=="[object String]"?this.split(""):aa,ad=Z.length>>>0,e=[],ae,ac=arguments[1];
if(D(Y)!="[object Function]"){throw new TypeError(Y+" is not a function")
}for(var ab=0;
ab<ad;ab++){if(ab in Z){ae=Z[ab];
if(Y.call(ac,ae,ab,aa)){e.push(ae)
}}}return e
}}if(!Array.prototype.every){Array.prototype.every=function F(e){var Z=E(this),Y=M&&D(this)=="[object String]"?this.split(""):Z,ac=Y.length>>>0,ab=arguments[1];
if(D(e)!="[object Function]"){throw new TypeError(e+" is not a function")
}for(var aa=0;
aa<ac;aa++){if(aa in Y&&!e.call(ab,Y[aa],aa,Z)){return false
}}return true
}}if(!Array.prototype.some){Array.prototype.some=function L(e){var Z=E(this),Y=M&&D(this)=="[object String]"?this.split(""):Z,ac=Y.length>>>0,ab=arguments[1];
if(D(e)!="[object Function]"){throw new TypeError(e+" is not a function")
}for(var aa=0;
aa<ac;aa++){if(aa in Y&&e.call(ab,Y[aa],aa,Z)){return true
}}return false
}}if(!Array.prototype.reduce){Array.prototype.reduce=function m(Y){var aa=E(this),Z=M&&D(this)=="[object String]"?this.split(""):aa,ac=Z.length>>>0;
if(D(Y)!="[object Function]"){throw new TypeError(Y+" is not a function")
}if(!ac&&arguments.length==1){throw new TypeError("reduce of empty array with no initial value")
}var ab=0;var e;
if(arguments.length>=2){e=arguments[1]
}else{do{if(ab in Z){e=Z[ab++];
break}if(++ab>=ac){throw new TypeError("reduce of empty array with no initial value")
}}while(true)
}for(;ab<ac;
ab++){if(ab in Z){e=Y.call(void 0,e,Z[ab],ab,aa)
}}return e}
}if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function w(Y){var aa=E(this),Z=M&&D(this)=="[object String]"?this.split(""):aa,ac=Z.length>>>0;
if(D(Y)!="[object Function]"){throw new TypeError(Y+" is not a function")
}if(!ac&&arguments.length==1){throw new TypeError("reduceRight of empty array with no initial value")
}var e,ab=ac-1;
if(arguments.length>=2){e=arguments[1]
}else{do{if(ab in Z){e=Z[ab--];
break}if(--ab<0){throw new TypeError("reduceRight of empty array with no initial value")
}}while(true)
}if(ab<0){return e
}do{if(ab in this){e=Y.call(void 0,e,Z[ab],ab,aa)
}}while(ab--);
return e}}if(!Array.prototype.indexOf||([0,1].indexOf(1,2)!=-1)){Array.prototype.indexOf=function n(Y){var e=M&&D(this)=="[object String]"?this.split(""):E(this),aa=e.length>>>0;
if(!aa){return -1
}var Z=0;if(arguments.length>1){Z=K(arguments[1])
}Z=Z>=0?Z:Math.max(0,aa+Z);
for(;Z<aa;Z++){if(Z in e&&e[Z]===Y){return Z
}}return -1
}}if(!Array.prototype.lastIndexOf||([0,1].lastIndexOf(0,-3)!=-1)){Array.prototype.lastIndexOf=function I(Y){var e=M&&D(this)=="[object String]"?this.split(""):E(this),aa=e.length>>>0;
if(!aa){return -1
}var Z=aa-1;
if(arguments.length>1){Z=Math.min(Z,K(arguments[1]))
}Z=Z>=0?Z:aa-Math.abs(Z);
for(;Z>=0;Z--){if(Z in e&&Y===e[Z]){return Z
}}return -1
}}if(!Object.keys){var i=true,o=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],h=o.length;
for(var q in {toString:null}){i=false
}Object.keys=function z(Z){if((typeof Z!="object"&&typeof Z!="function")||Z===null){throw new TypeError("Object.keys called on a non-object")
}var ac=[];
for(var Y in Z){if(J(Z,Y)){ac.push(Y)
}}if(i){for(var aa=0,ab=h;
aa<ab;aa++){var e=o[aa];
if(J(Z,e)){ac.push(e)
}}}return ac
}}var v=-62198755200000,f="-000001";
if(!Date.prototype.toISOString||(new Date(v).toISOString().indexOf(f)===-1)){Date.prototype.toISOString=function j(){var e,Z,aa,Y,ab;
if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}Y=this.getUTCFullYear();
ab=this.getUTCMonth();
Y+=Math.floor(ab/12);
ab=(ab%12+12)%12;
e=[ab+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];
Y=((Y<0?"-":(Y>9999?"+":""))+("00000"+Math.abs(Y)).slice(0<=Y&&Y<=9999?-4:-6));
Z=e.length;
while(Z--){aa=e[Z];
if(aa<10){e[Z]="0"+aa
}}return(Y+"-"+e.slice(0,2).join("-")+"T"+e.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z")
}}var R=false;
try{R=(Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(v).toJSON().indexOf(f)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true
}}))}catch(T){}if(!R){Date.prototype.toJSON=function G(Z){var aa=Object(this),Y=p(aa),e;
if(typeof Y==="number"&&!isFinite(Y)){return null
}e=aa.toISOString;
if(typeof e!="function"){throw new TypeError("toISOString property is not callable")
}return e.call(aa)
}}if(!Date.parse||"Date.parse is buggy"){Date=(function(aa){function Y(ag,al,ae,ak,aj,am,af){var ah=arguments.length;
if(this instanceof aa){var ai=ah==1&&String(ag)===ag?new aa(Y.parse(ag)):ah>=7?new aa(ag,al,ae,ak,aj,am,af):ah>=6?new aa(ag,al,ae,ak,aj,am):ah>=5?new aa(ag,al,ae,ak,aj):ah>=4?new aa(ag,al,ae,ak):ah>=3?new aa(ag,al,ae):ah>=2?new aa(ag,al):ah>=1?new aa(ag):new aa();
ai.constructor=Y;
return ai}return aa.apply(this,arguments)
}var ac=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");
var e=[0,31,59,90,120,151,181,212,243,273,304,334,365];
function ab(af,ag){var ae=ag>1?1:0;
return(e[ag]+Math.floor((af-1969+ae)/4)-Math.floor((af-1901+ae)/100)+Math.floor((af-1601+ae)/400)+365*(af-1970))
}for(var Z in aa){Y[Z]=aa[Z]
}Y.now=aa.now;
Y.UTC=aa.UTC;
Y.prototype=aa.prototype;
Y.prototype.constructor=Y;
Y.parse=function ad(am){var al=ac.exec(am);
if(al){var ao=Number(al[1]),an=Number(al[2]||1)-1,ap=Number(al[3]||1)-1,ah=Number(al[4]||0),ag=Number(al[5]||0),ae=Number(al[6]||0),ar=Math.floor(Number(al[7]||0)*1000),ai=!al[4]||al[8]?0:Number(new aa(1970,0)),ak=al[9]==="-"?1:-1,af=Number(al[10]||0),aj=Number(al[11]||0),aq;
if(ah<(ag>0||ae>0||ar>0?24:25)&&ag<60&&ae<60&&ar<1000&&an>-1&&an<12&&af<24&&aj<60&&ap>-1&&ap<(ab(ao,an+1)-ab(ao,an))){aq=((ab(ao,an)+ap)*24+ah+af*ak)*60;
aq=((aq+ag+aj*ak)*60+ae)*1000+ar+ai;
if(-8640000000000000<=aq&&aq<=8640000000000000){return aq
}}return NaN
}return aa.parse.apply(this,arguments)
};return Y})(Date)
}if(!Date.now){Date.now=function Q(){return new Date().getTime()
}}if(!Number.prototype.toFixed||(0.00008).toFixed(3)!=="0.000"||(0.9).toFixed(0)==="0"||(1.255).toFixed(2)!=="1.25"||(1000000000000000100).toFixed(0)!=="1000000000000000128"){(function(){var e,af,ac,ad;
e=10000000;
af=6;ac=[0,0,0,0,0,0];
function Y(ai,ah){var ag=-1;
while(++ag<af){ah+=ai*ac[ag];
ac[ag]=ah%e;
ah=Math.floor(ah/e)
}}function ab(ai){var ag=af,ah=0;
while(--ag>=0){ah+=ac[ag];
ac[ag]=Math.floor(ah/ai);
ah=(ah%ai)*e
}}function Z(){var ah=af;
var ai="";while(--ah>=0){if(ai!==""||ah===0||ac[ah]!==0){var ag=String(ac[ah]);
if(ai===""){ai=ag
}else{ai+="0000000".slice(0,7-ag.length)+ag
}}}return ai
}function ae(ag,ai,ah){return(ai===0?ah:(ai%2===1?ae(ag,ai-1,ah*ag):ae(ag*ag,ai/2,ah)))
}function aa(ag){var ah=0;
while(ag>=4096){ah+=12;
ag/=4096}while(ag>=2){ah+=1;
ag/=2}return ah
}Number.prototype.toFixed=function(an){var aj,am,ao,ag,ak,al,ai,ah;
aj=Number(an);
aj=aj!==aj?0:Math.floor(aj);
if(aj<0||aj>20){throw new RangeError("Number.toFixed called with invalid number of decimals")
}am=Number(this);
if(am!==am){return"NaN"
}if(am<=-1e+21||am>=1e+21){return String(am)
}ao="";if(am<0){ao="-";
am=-am}ag="0";
if(am>1e-21){ak=aa(am*ae(2,69,1))-69;
al=(ak<0?am*ae(2,-ak,1):am/ae(2,ak,1));
al*=4503599627370496;
ak=52-ak;if(ak>0){Y(0,al);
ai=aj;while(ai>=7){Y(10000000,0);
ai-=7}Y(ae(10,ai,1),0);
ai=ak-1;while(ai>=23){ab(1<<23);
ai-=23}ab(1<<ai);
Y(1,1);ab(2);
ag=Z()}else{Y(0,al);
Y(1<<(-ak),0);
ag=Z()+"0.00000000000000000000".slice(2,2+aj)
}}if(aj>0){ah=ag.length;
if(ah<=aj){ag=ao+"0.0000000000000000000".slice(0,aj-ah+2)+ag
}else{ag=ao+ag.slice(0,ah-aj)+"."+ag.slice(ah-aj)
}}else{ag=ao+ag
}return ag}
}())}var t=String.prototype.split;
if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"".split(/.?/).length===0||".".split(/()()/).length>1){(function(){var e=/()??/.exec("")[1]===void 0;
String.prototype.split=function(ad,ac){var ag=this;
if(ad===void 0&&ac===0){return[]
}if(Object.prototype.toString.call(ad)!=="[object RegExp]"){return t.apply(this,arguments)
}var aa=[],ab=(ad.ignoreCase?"i":"")+(ad.multiline?"m":"")+(ad.extended?"x":"")+(ad.sticky?"y":""),Y=0,ad=new RegExp(ad.source,ab+"g"),Z,ae,af,ah;
ag+="";if(!e){Z=new RegExp("^"+ad.source+"$(?!\\s)",ab)
}ac=ac===void 0?-1>>>0:ac>>>0;
while(ae=ad.exec(ag)){af=ae.index+ae[0].length;
if(af>Y){aa.push(ag.slice(Y,ae.index));
if(!e&&ae.length>1){ae[0].replace(Z,function(){for(var ai=1;
ai<arguments.length-2;
ai++){if(arguments[ai]===void 0){ae[ai]=void 0
}}})}if(ae.length>1&&ae.index<ag.length){Array.prototype.push.apply(aa,ae.slice(1))
}ah=ae[0].length;
Y=af;if(aa.length>=ac){break
}}if(ad.lastIndex===ae.index){ad.lastIndex++
}}if(Y===ag.length){if(ah||!ad.test("")){aa.push("")
}}else{aa.push(ag.slice(Y))
}return aa.length>ac?aa.slice(0,ac):aa
}}())}else{if("0".split(void 0,0).length){String.prototype.split=function(Y,e){if(Y===void 0&&e===0){return[]
}return t.apply(this,arguments)
}}}if("".substr&&"0b".substr(-1)!=="b"){var d=String.prototype.substr;
String.prototype.substr=function(Y,e){return d.call(this,Y<0?((Y=this.length+Y)<0?0:Y):Y,e)
}}var W="\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
if(!String.prototype.trim||W.trim()){W="["+W+"]";
var y=new RegExp("^"+W+W+"*"),r=new RegExp(W+W+"*$");
String.prototype.trim=function a(){if(this===void 0||this===null){throw new TypeError("can't convert "+this+" to object")
}return String(this).replace(y,"").replace(r,"")
}}function K(e){e=+e;
if(e!==e){e=0
}else{if(e!==0&&e!==(1/0)&&e!==-(1/0)){e=(e>0||-1)*Math.floor(Math.abs(e))
}}return e}function s(e){var Y=typeof e;
return(e===null||Y==="undefined"||Y==="boolean"||Y==="number"||Y==="string")
}function p(Y){var aa,e,Z;
if(s(Y)){return Y
}e=Y.valueOf;
if(typeof e==="function"){aa=e.call(Y);
if(s(aa)){return aa
}}Z=Y.toString;
if(typeof Z==="function"){aa=Z.call(Y);
if(s(aa)){return aa
}}throw new TypeError()
}var E=function(e){if(e==null){throw new TypeError("can't convert "+e+" to object")
}return Object(e)
}});var nb={};
nb.IE_LT9=Boolean(document.documentMode&&document.documentMode<9);
nb.inherit=function(c,a){var b=function(){};
b.prototype=a.prototype;
c.prototype=new b();
c.prototype.constructor=c
};nb.extend=function(b){var e=[].slice.call(arguments,1);
for(var d=0,a=e.length;
d<a;d++){var f=e[d];
for(var c in f){b[c]=f[c]
}}return b};
var nb=nb||{};
(function(){nb.node={};
nb.node.data=function(node,key,value){if(key){if(value!==undefined){node.setAttribute("data-nb-"+key,value)
}else{return parseValue(node.getAttribute("data-nb-"+key)||"")
}}else{var data={};
var attrs=node.attributes;
var r;for(var i=0,l=attrs.length;
i<l;i++){var attr=attrs[i];
if((r=/^data-nb-(.+)/.exec(attr.name))){data[r[1]]=parseValue(attr.value)
}}return data
}function parseValue(value){var ch=value.charAt(0);
return(ch==="["||ch==="{")?eval("("+value+")"):value
}};nb.node.getMod=function(node,name){return nb.node.setMod(node,name)
};var modCache={};
nb.node.setMod=function(node,name,value){var rx=modCache[name]||((modCache[name]=RegExp("(?:^|\\s+)"+name+"(?:_([\\w-]+))?(?:$|\\s+)")));
var className=node.className;
if(value===undefined){var r=rx.exec(className);
return(r)?((r[1]===undefined)?true:r[1]):""
}else{className=className.replace(rx," ").trim();
if(value!==false&&value!==""){className+=" "+name+((value===true)?"":"_"+value)
}node.className=className
}};nb.node.delMod=function(node,name){nb.node.setMod(node,name,false)
}})();(function(){var h={};
var f={};var j=["click","dblclick","mouseup","mousedown","keydown","keypress","keyup","input","change","blur","mouseover","mouseout","focusin","focusout"];
var b=new RegExp("^("+j.join("|")+")\\b\\s*(.*)?$");
var k=0;var e={};
var g=function(m){var l=m.getAttribute("data-nb");
return l?l.trim().replace(/\s+/g," "):l
};var i=function(l){return l.split(/\s+/)
};var d=function(){};
d.prototype.__init=function(l){this.node=l;
this.__handlers={};
this.__bindEvents();
this.trigger("init");
if(a){nb.trigger("inited:"+this.id,this)
}};d.prototype.__bindEvents=function(){var s=this;
var q=c.get(this.name).events;
for(var r=0,o=q.length;
r<o;r++){var v=q[r].custom;
var t=q[r].local;
for(var m in v){(function(l){s.__bindCustomEvent(m,function(z,A){for(var x=l.length;
x--;){var y=l[x].call(s,z,A);
if(y===false||y===null){return y
}}})})(v[m])
}for(var m in t){for(var p in t[m]){var u=(p||"").length?(" "+p):"";
var w=m+u;var n=t[m][p];
for(var r=0;
r<n.length;
r++){(function(l){s.on(w,function(){l.apply(s,arguments)
})}(n[r]))}}}}};
d.prototype.nbdestroy=function(){var n=c.get(this.name).events;
for(var o=0,m=n.length;
o<m;o++){for(var p in n[o].custom){this.off(p)
}for(var p in n[o].local){this.off(p)
}}e[this.id]=null
};d.prototype.__getHandlers=function(m){var l=this.__handlers;
return l[m]||((l[m]=[]))
};d.prototype.on=function(l,m){var n=b.exec(l);
if(n){$(this.node).on(n[1],n[2]||"",m)
}else{this.__bindCustomEvent(l,m)
}return m};
d.prototype.__bindCustomEvent=function(l,m){this.__getHandlers(l).push(m)
};d.prototype.off=function(m,o){var p=b.exec(m);
if(p){$(this.node).off(p[1],p[2]||"",o)
}else{if(o){var l=this.__getHandlers(m);
var n=l.indexOf(o);
if(n!==-1){l.splice(n,1)
}}else{this.__handlers[m]=null
}}};d.prototype.trigger=function(o,q){var n=this.__getHandlers(o).slice();
for(var p=0,m=n.length;
p<m;p++){n[p].call(this,o,q)
}};d.prototype.nbdata=function(l,m){return nb.node.data(this.node,l,m)
};d.prototype.show=function(){$(this.node).removeClass("nb-is-hidden");
this.trigger("show")
};d.prototype.hide=function(){$(this.node).addClass("nb-is-hidden");
this.trigger("hide")
};d.prototype.getMod=function(l){return nb.node.setMod(this.node,l)
};d.prototype.setMod=function(l,m){nb.node.setMod(this.node,l,m)
};d.prototype.delMod=function(l){nb.node.setMod(this.node,l,false)
};d.prototype.children=function(){var o=[];
var p=$(this.node).find("[data-nb]");
for(var n=0,m=p.length;
n<m;n++){o=o.concat(nb.blocks(p[n]))
}return o};
d.prototype.getYateModuleName=function(){return"main"
};nb.Block=d;
var c=function(l,n,m){this.name=l;
n.prototype.name=l;
this.ctor=n;
this.events=this._prepareEvents(m)
};c.prototype._prepareEvents=function(w){w=w||{};
var q=this.ctor.prototype;
var p={};var m={};
var t={};for(var n in w){var l=b.exec(n);
var o,u;if(l){var s=l[1];
if(s==="blur"){o=t[s]||((t[s]={}))
}else{o=p[s]||((p[s]={}))
}u=l[2]||""
}else{o=m;u=n
}var v=w[n];
if(typeof v==="string"){v=q[v]
}if(v===null){o[u]=null
}else{o=o[u]||((o[u]=[]));
o.push(v)}}for(var s in p){if(!f[s]){$(document).on(s,function(r){if(r.button&&r.type==="click"){return
}return c._onevent(r)
});f[s]=true
}}return[{dom:p,custom:m,local:t}]
};c.prototype.create=function(n,l){var p=n.getAttribute("id");
if(!p){p="nb-"+k++;
n.setAttribute("id",p)
}if(!e[p]){e[p]={};
if(g(n)===null){n.setAttribute("data-nb",this.name)
}}if(!e[p][this.name]){var o=new this.ctor();
o.id=p;o.__init(n);
if(l){for(var m in l){o.on(m,l[m])
}}e[p][this.name]=o
}return e[p][this.name]
};c.prototype._extendEvents=function(o){var l=this.events[0].dom;
var m=o.events[0].dom;
for(var n in m){p(l[n]||((l[n]={})),m[n])
}p(this.events[0].custom,o.events[0].custom);
function p(q,u){for(var r in u){var t=u[r];
var s=q[r];
q[r]=(s===null)?[]:t.concat(s||[])
}}};c._onevent=function(G){var o=G.type;
var t=G.target;
var m=(o==="mouseover"||o==="mouseout");
var s=G.relatedTarget;
var z;var y;
var q;var u;
var J;var p;
var A=t;z=[];
q=[];y=z.length;
while(1){if(!v()){break
}var w=i(J);
var x=true;
for(var D=0;
D<w.length;
D++){var C=w[D];
p=c.get(C);
var H=p.events;
for(var F=0,B=H.length;
F<B;F++){if(E(C,H[F].dom[o])===false){x=false
}}}if(!x){return false
}if(s){return
}z.push(A);
q.push($(A));
y=z.length;
A=A.parentNode
}function v(){u=null;
var l;while((l=A.parentNode)){if((J=g(A))){u=A;
break}z.push(A);
A=l}if(u){if(m&&s){z=(t===u)?[]:[t]
}y=z.length;
return true
}}function E(P,Q){if(!Q){return
}var N;var L,n;
for(var O=0;
O<y;O++){L=z[O];
n=q[O]||((q[O]=$(L)));
for(var M in Q){if(M&&n.is(M)&&!(m&&s&&$.contains(L,s))){var l=I(L,P,Q[M]);
if(l===false){N=l
}}}if(N===false){return N
}}var K=Q[""];
if(K&&!(m&&s&&$.contains(u,s))){return I(u,P,K)
}}function I(M,n,l){var N=p.create(u);
for(var K=l.length;
K--;){var L=l[K].call(N,G,M);
if(L===false){return false
}if(L===null){break
}}}};c.get=function(l){return h[l]
};nb.hasBlock=function(m,l){var n=m.getAttribute("id");
return !!(n&&e[n]&&(!l||e[n][l]))
};nb.block=function(o,n,m){var l=g(o);
if(!l){return null
}if(m){return c.get(m).create(o,n)
}return nb.blocks(o,n)[0]
};nb.blocks=function(o,n){var l=g(o);
if(!l){return[]
}var p=i(l);
var q=[];for(var m=0;
m<p.length;
m++){q.push(c.get(p[m]).create(o,n))
}return q};
nb.find=function(m){var l=document.getElementById(m);
if(l){return nb.block(l)
}};nb.define=function(n,m,q){if(typeof n!=="string"){q=m;
m=n;n="nb-"+k++
}if(q){q=c.get(q)
}var o=m.events;
delete m.events;
var p=function(){};
nb.inherit(p,(q)?q.ctor:d);
nb.extend(p.prototype,m);
var l=new c(n,p,o);
if(q){l._extendEvents(q)
}h[n]=l;return l
};nb.init=function(o){o=o||document;
var n=$(o).find("._init").addBack().filter("._init");
for(var p=0,m=n.length;
p<m;p++){nb.block(n[p])
}};nb.destroy=function(p){p=p||document;
var n=$(p).find("._init").addBack().filter("._init");
for(var q=0,m=n.length;
q<m;q++){var r=n[q];
var t=r.getAttribute("id");
var s=e[t];
if(s){for(var o in s){s[o].destroy()
}}}};var a=nb.define({events:{click:function(l){nb.trigger("space:click",l.target)
}}}).create(document.getElementsByTagName("html")[0]);
nb.on=function(l,m){return a.on(l,m)
};nb.off=function(l,m){a.off(l,m)
};nb.trigger=function(l,m){a.trigger(l,m)
}})();nb.define("base",{events:{init:"_oninit"},_oninit:function(){this.$node=$(this.node);
if(this.oninit){this.oninit()
}},getType:function(){return this.$node.attr("data-nb")
}});nb.define("button",{oninit:function(){this.$node.button({disabled:this.$node.prop("disabled")});
this.trigger("nb-inited",this)
},setText:function(a){if(this.$node&&this.$node.data("uiButton")){this.$node.find(".nb-button__text").html(a);
this.trigger("nb-text-set",this)
}return this
},getText:function(){return this.$node.find(".nb-button__text").html()
},setUrl:function(a){this.$node.attr("href",a);
this.trigger("nb-url-set",this);
return this
},getUrl:function(){return this.$node.attr("href")
},disable:function(){if(this.$node&&this.$node.data("uiButton")){this.$node.button("disable");
this.$node.addClass("nb-is-disabled");
this.trigger("nb-disabled",this)
}return this
},enable:function(){if(this.$node&&this.$node.data("uiButton")){this.$node.button("enable");
this.$node.removeClass("nb-is-disabled");
this.trigger("nb-enabled",this)
}return this
},isEnabled:function(){return !this.$node.prop("disabled")
},focus:function(){if(this.isEnabled()){this.$node.focus()
}this.trigger("nb-focused",this);
return this
},blur:function(){if(this.isEnabled()){this.$node.blur()
}this.trigger("nb-blured",this);
return this
},destroy:function(){if(this.$node&&this.$node.data("uiButton")){this.$node.button("destroy")
}this.trigger("nb-destroyed",this);
this.nbdestroy()
}},"base");
nb.define("tooltip-jq-toggler",{events:{mouseover:"onmouseenter"},onmouseenter:function(){if(this.$node.hasClass("nb-is-disabled")){return true
}var a=this.nbdata()[this.name];
var b={content:a.content,items:"*",tooltipClass:"nb-tooltip nb-island nb-island_type_fly nb-island_padding_s"};
if(a.position){b.position=a.position
}this.$node.tooltip(b);
this.$node.tooltip("open")
}},"base");
nb.define("checkbox",{events:{"change input":"onchange"},_onCheckboxChecked:function(a,b){if(b.name==this.getName()&&b.value!=this.getValue()){this.uncheck()
}},onchange:function(){if(this.$control.prop("checked")){this.check()
}else{this.uncheck()
}},oninit:function(){this.$control=this.$node.find("input[type]");
this._isChecked=this.$control.prop("checked");
this.$control.on("click.nb-checkbox",function(b){b.stopPropagation()
});if(document.documentMode&&document.documentMode<9){var a=this;
this.$control.on("propertychange.nb-checkbox",function(b){if(b.originalEvent.propertyName==="checked"){a.onchange()
}})}if(this.getType()==="radio"){nb.on("checkbox:checked",$.proxy(this._onCheckboxChecked,this))
}this.trigger("nb-inited",this)
},getType:function(){return this.$control.attr("type")
},isChecked:function(){return this._isChecked
},check:function(){if(!this.isEnabled()){return this
}if(this.getType()==="radio"){nb.trigger("checkbox:checked",{name:this.getName(),value:this.getValue()})
}var a=this.isChecked();
this.$control.prop({indeterminate:false,checked:true});
this._isChecked=true;
this.trigger("nb-checked",this);
if(!a){this.trigger("nb-changed",this)
}return this
},uncheck:function(){if(!this.isEnabled()){return this
}var a=this.isChecked();
this.$control.prop({indeterminate:false,checked:false});
this._isChecked=false;
this.trigger("nb-unchecked",this);
if(a){this.trigger("nb-changed",this)
}return this
},toggle:function(){if(!this.isEnabled()){return this
}this.trigger("nb-change",this);
if(this.isChecked()){this.uncheck()
}else{this.check()
}return this
},isIndeterminate:function(){return this.$control.prop("indeterminate")
},setIndeterminate:function(){if(this.isEnabled()){this.$control.prop("indeterminate",true);
this.trigger("nb-indeterminated",this)
}return this
},setDeterminate:function(){if(this.isEnabled()){this.$control.prop("indeterminate",false);
this.trigger("nb-determinated",this)
}return this
},isEnabled:function(){return !this.$control.prop("disabled")
},enable:function(){if(!this.isEnabled()){this.$node.removeClass("nb-is-disabled");
this.$control.removeAttr("disabled");
this.trigger("nb-enabled",this)
}return this
},disable:function(){if(this.isEnabled()){this.blur();
this.$node.addClass("nb-is-disabled");
this.$control.attr("disabled","disabled");
this.trigger("nb-disabled",this)
}return this
},focus:function(){this.$control.focus();
this.trigger("nb-focused",this);
return this
},blur:function(){this.$control.blur();
this.trigger("nb-blured",this);
return this
},setLabel:function(a){this.$node.find(".nb-checkbox__label").html(a);
this.trigger("nb-label-set",this);
return this
},getLabel:function(){return this.$node.find(".nb-checkbox__label").html()
},getName:function(){return this.$control.prop("name")
},setName:function(a){this.$control.attr("name",a);
this.trigger("nb-name-set",this);
return this
},getValue:function(){var a=this.$control.attr("value");
if(typeof a==="string"){return a
}else{return"on"
}},setValue:function(a){this.$control.attr("value",a);
this.trigger("nb-value-set",this);
return this
},destroy:function(){this.$control.off(".nb-checkbox");
if(this.getType()==="radio"){nb.off("checkbox:checked",$.proxy(this._onCheckboxChecked,this))
}this.trigger("nb-destroyed",this);
this.nbdestroy()
}},"base");
nb.define("select",{events:{click:"_onclick"},oninit:function(){this.$control=this.$node.find("select");
this.$dropdown=this.$node.children(".nb-select__dropdown").appendTo("body");
this.data=this.nbdata();
this._updateFromSelect();
if(nb.IE_LT9){var a=this;
this.$control.on("change",function(b){a.setState({value:b.target.value})
})}else{this.controlPrepare()
}this.trigger("nb-inited",this)
},controlPrepare:function(){var b=this;
var a={};a.collision="flip";
if(b.data.within){a.within=b.data.within
}if(b.data.direction=="top"){a.my="left bottom";
a.at="left top"
}else{a.my="left top";
a.at="left bottom"
}this.$node.autocomplete({delay:0,minLength:0,autoFocus:false,position:a,appendTo:b.$dropdown,source:function(d,c){c(b.$control.children(["option","optgroup"]).map(function(){var e;
var g=$(this);
if(this.tagName=="OPTGROUP"){e={type:"group",label:g.attr("label"),option:this,group:g.children("option").map(function(){return{label:$(this).text(),value:$(this).val(),option:this}
})}}else{var f=g.data("icon");
e={label:g.text(),value:g.val(),option:this};
if(f){e.icon=f
}}return e}))
},select:function(c,d){if(d.item.type!="group"){d.item.option.selected=true;
b.$jUI._trigger("selected",c,{item:d.item.option})
}},open:function(){b.$jUI._on(b.$jUI.document,{mousedown:function(c){if(c.which==1&&!$.contains(b.$jUI.element.get(0),c.target)&&!$.contains(b.$dropdown[0],c.target)){this.close()
}}});b.trigger("nb-opened",b)
},close:function(){b.$jUI._off(b.$jUI.document,"mousedown");
b.trigger("nb-closed",b)
}}).addClass("ui-widget ui-widget-content");
b.$jUI=b.$node.data("uiAutocomplete");
b.$jUI._renderItem=function(e,g){var h=$('<li class="nb-select__item"></li>');
if(g.option.selected){h.addClass("nb-select__item_selected_yes")
}if(g.type=="group"){h.addClass("nb-select__item_type_group");
var f=$("<ul></ul>");
g.group.each(function(i,j){b.$jUI._renderItem(f,j)
});h.append(f)
}h.data("ui-autocomplete-item",g);
var d=$("<a></a>");
var c=$('<span class="nb-select__text"></span>').text(g.label).appendTo(d);
if(g.icon){c.prepend('<img src="//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" class="nb-icon nb-icon_'+g.icon+'">')
}h.append(d).appendTo(e);
return h};b.$jUI.valueMethod=function(c){if(typeof c==="string"){var d=b.$control.find('option[value="'+c+'"]').text();
b.setState({value:c,text:d})
}return b.$selected.val()
};b.$jUI.__resizeMenu=b.$jUI._resizeMenu;
b.$jUI._resizeMenu=function(){if(b.data.maxheight){b._setMaxHeight(b.data.maxheight)
}this.__resizeMenu()
};b.$jUI.menu.element.on("click",function(c){c.stopPropagation()
})},_updateFromSelect:function(){this.$selected=this.$control.children(":selected");
this.value=this.$selected.val();
this.text=this.$selected.text()||"&nbsp;";
this._setText(this.text)
},_onclick:function(a){if(this.$node&&this.$node.data("uiAutocomplete")){a.preventDefault();
if(this.$node.data("uiAutocomplete")&&this.$node.autocomplete("widget").css("display")=="block"){this.close();
return}if(this.isEnabled()){this.open();
this.$node.focus()
}}},_setText:function(a){this.$node.find(".nb-button__text").text(a)
},_setMaxHeight:function(c){var a;
if(/^\d+$/.test(c)){var b=this.$jUI.menu.element.find(".nb-select__item").first();
a=parseInt(b.height())*c
}else{a=c}this.$jUI.menu.element.css({"max-height":a,"overflow-y":"auto","overflow-x":"hidden"})
},render:function(){if(!this.isEnabled()){return this
}this.$node.autocomplete("search","");
this.trigger("nb-rendered",this);
return this
},open:function(){if(this.$node&&this.$node.data("uiAutocomplete")&&this.isEnabled()){this.render()
}return this
},close:function(){if(this.$node&&this.$node.data("uiAutocomplete")){this.$node.autocomplete("close");
this.trigger("nb-closed",this)
}return this
},setState:function(b){b=b||{};
if(this.value!==b.value){var a;
if(b.value){a=this.$control.find('option[value="'+b.value+'"]')
}else{a=this.$control.find("option:contains("+b.text+")")
}if(a.length!==0){this.$selected.prop("selected",false);
this.$selected=a;
this.$selected.prop("selected",true);
this.value=this.$selected.val();
this.text=this.$selected.text();
this._setText(this.text);
this.trigger("nb-changed",this);
this.$control.val(b.value)
}}return this
},getState:function(){return{value:this.value,text:this.text}
},getName:function(){return this.$control.prop("name")
},setName:function(a){this.$control.prop("name",a);
this.trigger("nb-name-set",this);
return this
},disable:function(){if(this.isEnabled()){this.$node.addClass("nb-is-disabled");
if(!nb.IE_LT9){this.$node.autocomplete("disable")
}this.$control.attr("disabled","disabled");
this.trigger("nb-disabled",this)
}return this
},enable:function(){if(!this.isEnabled()){this.$node.removeClass("nb-is-disabled");
if(!nb.IE_LT9){this.$node.autocomplete("enable")
}this.$control.removeAttr("disabled");
this.trigger("nb-enabled",this)
}return this
},isEnabled:function(){return !this.$node.hasClass("nb-is-disabled")
},setSource:function(c){if(!c){return this
}if(!(c instanceof Array)){c=[c]
}var b=[];c.forEach(function(d){if(d.selected){b.push(d)
}});b.slice(0,-1).forEach(function(d){d.selected=false
});var a=yr.run(this.getYateModuleName(),{items:c},"nb-select-options");
this.$control.empty().append(a);
this._updateFromSelect();
this.trigger("nb-source-changed",this);
return this
},getSource:function(){return $.map(this.$control.children("option"),function(b){var a=$(b);
return{text:a.text(),value:a.val(),selected:a.prop("selected")}
})},addToSource:function(a,b){var e=this.getSource();
if(!(a instanceof Array)){a=[a]
}var c=null;
var d=a.filter(function(g){var f=e.indexOf(g)===-1;
if(f){if(g.selected){c=g.value
}return true
}return false
},this);if(isNaN(b)){b=e.length
}d.forEach(function(g,f){e.splice(b+f,0,g)
},this);this.setSource(e);
if(c){this.setState({value:c})
}this.trigger("nb-source-changed",this);
return this
},removeFromSource:function(c){var b=this.getSource();
var a;if(typeof c=="number"||typeof c=="string"){a=parseInt(c)
}else{if(!(c instanceof Array)){c=[c]
}}if(a||a===0){b.splice(a,1)
}else{c.forEach(function(d){b=b.filter(function(e){return e.text!=d.text&&e.value!=d.value
})},this)}this.setSource(b);
this.trigger("nb-source-changed",this);
return this
},focus:function(){if(this.isEnabled()){this.$node.focus()
}this.trigger("nb-focused",this);
return this
},blur:function(){if(this.isEnabled()){this.$node.blur()
}this.trigger("nb-blured",this);
return this
},setOption:function(a){this.$node.autocomplete("option",a);
this.trigger("nb-option-set",this);
return this
},getOption:function(a){return this.$node.autocomplete("option",a)
},destroy:function(){if(this.$node&&this.$node.data("uiAutocomplete")){this.$node.autocomplete("destroy");
this.$dropdown.empty().appendTo(this.$node)
}this.trigger("nb-destroyed",this);
this.nbdestroy()
}},"base");
nb.define("slider",{oninit:function(){var a=this;
this.data=this.nbdata();
this.$control=this.$node.find(".nb-slider__fallback");
this.$body=this.$node.children(".nb-slider__body");
this.$body.show();
this.$body.slider({range:"min",disabled:this.$node.hasClass("nb-is-disabled"),value:parseFloat(this.data.value),change:function(c,b){this.$control.val(b.value)
}.bind(this)});
this.$body.on("slidestop",function(b,c){a.trigger("nb-slider_slidestop",c.value)
});this.$body.on("slidestart",function(b,c){a.trigger("nb-slider_slidestart",c.value)
});this.$body.on("slide",function(b,c){a.trigger("nb-slider_slide",c.value)
});this.trigger("nb-inited",this);
return this
},setValue:function(a){if(this.$body.slider("option","disabled")){return this
}this.$body.slider("value",a);
this.trigger("nb-value-set",this);
return this
},getValue:function(){return this.$body.slider("option","value")
},setName:function(a){this.$control.prop("name",a);
this.trigger("nb-name-set",this);
return this
},getName:function(){return this.$control.prop("name")
},disable:function(){this.$node.addClass("nb-is-disabled");
this.$body.slider("disable");
this.trigger("nb-disabled",this);
return this
},enable:function(){this.$node.removeClass("nb-is-disabled");
this.$body.slider("enable");
this.trigger("nb-enabled",this);
return this
},isEnabled:function(){return !this.$body.slider("option","disabled")
},destroy:function(){if(this.$body&&this.$body.data("uiSlider")){this.$body.slider("destroy")
}this.trigger("nb-destroyed",this);
this.nbdestroy()
}},"base");
nb.define("radio-button",{oninit:function(){this.control=this.$node.buttonset()
}},"base");
(function(){$.nb={};
$.widget("nb.baseDialog",$.ui.dialog,{options:{height:"auto",minHeight:"auto",width:"auto"},open:function(){this._super();
var b=this;
if(!this.options.modal){this._onmousedown=function(c){b.options.closedByOuterClick=true;
if(c.which===2||c.which===3){return
}if($.contains(b.uiDialog[0],c.target)){return
}if(b.options.autoclose){b.close()
}};this.document.on("mousedown",this._onmousedown);
this.document.on("touchstart",this._onmousedown)
}if(this.options.position.fixed){this._onresize=$.proxy(this._position,this,true);
this.window.on("resize",this._onresize)
}this._onpopupclose=nb.on("popup-close",function(){if(b.options.autoclose){b.close()
}})},close:function(){this._super();
this.document.off("mousedown",this._onmousedown);
this.document.off("touchstart",this._onmousedown);
if(this._onresize){this.window.off("resize",this._onresize)
}nb.off("popup-close",this._onpopupclose)
},_create:function(){this.options.dialogClass+=a.call(this);
this.options.dialogClass+=(this.options.position.fixed)?" ui-dialog-fixed":"";
this._super();
this.element[0].widget=this
},_destroy:function(){this._super();
delete this.element[0].widget
},_position:function(){var b=this;
var c=this.options.position.using;
this.options.position.using=function(g,h){var e=$.extend({},g);
var f;var d;
if(h.vertical=="bottom"){d=b.window.height();
e.bottom=d-(e.top+h.element.height);
e.top="auto"
}if(h.horizontal=="right"){f=b.window.width();
e.right=f-(e.left+h.element.width);
e.left="auto"
}return c.call(h.element.element[0],e,h)
};this._super();
this.options.position.using=c
},_createTitlebar:function(){this.uiDialogTitlebarClose=$()
}});$.widget("nb.contextDialog",$.nb.baseDialog,{tailOffset:13,options:{tail:"center",height:"auto",minHeight:"auto",width:"auto",show:{effect:"nb",duration:150},hide:{effect:"nb",duration:150},draggable:false,resizable:false,dialogClass:"nb-popup-outer ui-dialog-no-close",position:{my:"center top",at:"center bottom",collision:"fit flip"}},_create:function(){this._super();
var b=$('<div class="nb-popup__tail"><i/></div>');
if(this.options.tail!="center"){b.addClass("nb-popup__tail_to_"+this.options.tail)
}b.prependTo(this.uiDialog)
},_position:function(b){var d=this;
var f=this.options.position.using;
var c=b?1:2;
var e={top:"bottom",bottom:"top",left:"right",right:"left"};
this.options.position.using=function(j,k){var h=k.element.element;
var i=h[0];
var g=k[k.important];
var l=e[g];
nb.node.setMod(i,"nb-popup_to",l);
h.data("nb-tail-dir",l);
j[g]+=(d.tailOffset*c);
return f.call(i,j,k)
};this._super();
this.options.position.using=f
}});jQuery.effects.effect.nb=function(f,b){var d=$(this);
var e=$.effects.setMode(d,f.mode||"hide");
var g=d.data("nb-tail-dir");
var c={show:{bottom:{opacity:1,top:"-="+$.nb.contextDialog.prototype.tailOffset},top:{opacity:1,bottom:"-="+$.nb.contextDialog.prototype.tailOffset},left:{opacity:1,right:"-="+$.nb.contextDialog.prototype.tailOffset},right:{opacity:1,left:"-="+$.nb.contextDialog.prototype.tailOffset}},hide:{bottom:{opacity:0,top:"+="+$.nb.contextDialog.prototype.tailOffset},top:{opacity:0,bottom:"+="+$.nb.contextDialog.prototype.tailOffset},left:{opacity:0,right:"+="+$.nb.contextDialog.prototype.tailOffset},right:{opacity:0,left:"+="+$.nb.contextDialog.prototype.tailOffset}}};
if(e=="show"){d.show()
}d.animate(c[e][g],{queue:false,duration:f.duration,easing:f.easing,complete:function(){if(e=="hide"){d.hide()
}b()}})};function a(){var d=this.element.attr("class").split(" ")||[];
var c=/\w+\_(?!_)/;
var b;b=$.map(d,function(g){var i=g.split(c);
var f=i.length;
var e=i.pop();
var h="";if(f>1){h="nb-popup-outer_"+e
}return h});
return b.join(" ")
}nb.define("popup",{events:{"click .nb-popup__close":"close",position:"onposition"},oninit:function(){var c=this.nbdata();
if("modal" in c){this.modal=true
}var b=this.node.previousSibling;
this._home=b?{previous:b}:{parent:this.node.parentNode}
},onposition:function(d,f){var b=f.where;
var c=f.how;
this._move(b,c,f)
},open:function(d){var b=d.where;
var c=d.how;
this.moved=false;
if(this.where){if(b===this.where||((b instanceof Array)&&b[0]===this.where[0]&&b[1]===this.where[1])){this.close()
}else{this.moved=true;
this._move(b,c,d)
}}else{$(this.node).removeClass("nb-is-hidden");
this._move(b,c,d);
this.trigger("nb-opened")
}return this
},close:function(){this.where=null;
if(this.isOpen()){this.node.widget.close();
this.trigger("nb-closed")
}if(this.node&&this.node.widget&&this.node.widget.options.closedByOuterClick){this.node.widget.options.closedByOuterClick=false;
this.trigger("nb-closed")
}return this
},isOpen:function(){return this.node&&this.node.widget&&this.node.widget.isOpen()
},destroy:function(){if(this.node&&this.node.widget){this.node.widget.destroy()
}this.trigger("nb-destroyed",this);
this.nbdestroy()
},_move:function(b,c,h){this.where=b;
var d=this;
var e=this.nbdata();
var f=false;
if(c&&c.fixed){f=true
}if(e.how=="fixed"){f=true
}var g=function(j){var i=$(this);
if(h.animate){i.stop().animate(j,{duration:"fast",queue:false,complete:$.proxy(d.trigger,d,"position.complete")})
}else{i.css(j)
}};c=c||{};
if(this.modal){$(this.node).baseDialog({height:e.height,minHeight:e.minheight,width:e.width,show:"fade",hide:"fade",modal:true,resizable:false,draggable:false,dialogClass:"nb-popup-outer ui-dialog-fixed",close:function(){d.close()
},appendTo:h.appendTo,position:{using:g},autoclose:typeof c.autoclose!=="undefined"?c.autoclose:true});
return}$(this.node).contextDialog({tail:e.tail,position:{at:(c.at?c.at:"center bottom"),my:(c.my?c.my:"center top"),fixed:f,of:$(this.where),collision:(c.collision?c.collision:"fit flip"),using:g},close:function(){d.close()
},appendTo:h.appendTo,autoclose:typeof c.autoclose!=="undefined"?c.autoclose:true})
}},"base")})();
nb.define("popup-toggler",{events:{click:"open"},oninit:function(){this.data=this.nbdata()["popup-toggler"];
this.popup=nb.find(this.data.id);
this.options={where:this.data.where||this.node,how:this.data.how,appendTo:this.data.appendTo};
this.trigger("nb-inited",this)
},open:function(a){if(a){a.preventDefault()
}if(!this.$node.hasClass("nb-is-disabled")&&this.popup){this.popup.open(this.options);
this.trigger("nb-opened",this)
}return this
},close:function(){if(!this.$node.hasClass("nb-is-disabled")&&this.popup){this.popup.close();
this.trigger("nb-closed",this)
}return this
},getPopup:function(){return this.popup
},setPopup:function(b){if(typeof b==="string"){var a={};
a.popup=b;b=a
}if(arguments.length===1&&typeof b==="object"&&b.popup){var c=b.popup;
delete b.popup;
if(b.where){this.options=b
}if(typeof c==="string"){this.popup=nb.find(c)
}else{this.popup=c
}this.trigger("nb-popup-set",this)
}return this
},getOptions:function(){return this.options
},setOptions:function(a){if(arguments.length===1&&typeof a==="object"){this.options=a;
this.trigger("nb-options-set",this)
}return this
},destroy:function(){this.nbdestroy()
}},"base");
nb.define("input",{events:{click:"focus","mousedown .nb-input__reset":"reset",focusin:"focus",focusout:"blur"},oninit:function(){var a=this;
this.data=this.nbdata();
if(this.data.type=="simple"){this.$control=this.$node
}else{this.$control=this.$node.find(".nb-input__controller")
}this.disabled=this.$control.prop("disabled");
a.getValue();
this.$control.on("change",function(b){a.trigger("nb-changed",this,b)
});this.$hint=this.$node.find(".nb-input__hint");
if(this.$hint.length){this._inithint()
}this.focused=false;
if(this.data.ghost){this.$node.on("mouseover mouseout",function(){a.$node.toggleClass("is-ghost")
})}if(this.data.error){this.error=nb.find(this.data.error.id)
}nb.on("is-focusedout",function(){a.blur()
});this.trigger("nb-inited",this)
},_inithint:function(){var a=this;
this.$hintGhost=this.$hint.find(".nb-input__hint-ghost");
if(this.$hintGhost.length){this.$hintGhost.html(a.getValue());
this.$control.on("input",function(){a.$hintGhost.html(a.getValue())
});this.$control.on("focus",function(){a.$hint.css("visibility","hidden")
});this.$control.on("blur",function(){a.$hint.css("visibility","inherit")
})}else{this.$control.on("input",function(){if(a.getValue()===""){a.$hint.css("visibility","inherit")
}else{a.$hint.css("visibility","hidden")
}})}},showError:function(b){var b=b||{};
if(this.data.error){this.$node.addClass("is-wrong");
var a={collision:"flip flip",autoclose:false};
if(this.data.error.direction&&this.data.error.direction=="left"){a.at="left";
a.my="right"
}else{a.at="right";
a.my="left"
}if(typeof b==="string"){this.setErrorContent(b)
}if(b.content){this.setErrorContent(b.content)
}if(!this.error.isOpen()){this.error.open({autoclose:b.autoclose||false,where:b.where||this.node,how:b.how||a,appendTo:b.appendTo||false})
}}return this
},hideError:function(){if(this.data.error){this.$node.removeClass("is-wrong");
this.error.close()
}return this
},setErrorContent:function(a){if(this.data.error){this.error.$node.find(".nb-popup__content").html(a);
this.trigger("nb-error-content-set",this)
}return this
},focus:function(){if(!this.isEnabled()){return this
}if(!this.focused){nb.trigger("nb-input_focusout");
this.$node.addClass("nb-is-focused");
if(this.data.ghost){this.$node.removeClass("is-ghost")
}this.focused=true;
this.$control.get(0).focus();
this.trigger("nb-focused",this);
return this
}},blur:function(){this.$node.removeClass("nb-is-focused");
if(this.data.ghost){this.$node.addClass("is-ghost")
}this.focused=false;
this.trigger("nb-blured",this);
return this
},disable:function(){this.$node.addClass("nb-is-disabled");
this.$control.prop("disabled",true);
this.trigger("nb-disabled",this);
return this
},enable:function(){this.$node.removeClass("nb-is-disabled");
this.$control.prop("disabled",false);
this.trigger("nb-enabled",this);
return this
},setValue:function(a){if(this.value!=a){this.value=a;
this.$control.val(a);
this.$control.trigger("input");
this.trigger("nb-value-set",this);
this.trigger("nb-changed",this)
}return this
},getValue:function(){this.value=this.$control.val();
return this.value
},getName:function(){return this.$control.prop("name")
},setName:function(a){this.$control.attr("name",a);
this.trigger("nb-name-set",this);
return this
},isEnabled:function(){return !this.$control.prop("disabled")
},reset:function(a){if(a&&a.preventDefault){a.preventDefault()
}this.setValue("");
return this
},setHint:function(a){if(this.$hint.length){if(this.$hintGhost.length){this.$hint.find(".nb-input__hint-content").html(a)
}else{this.$hint.find(".nb-input__hint-inner").html(a)
}this.trigger("nb-hint-set",this)
}return this
},getHint:function(){var a="";
if(this.$hint.length){if(this.$hintGhost.length){a=this.$hint.find(".nb-input__hint-content").html()
}else{a=this.$hint.find(".nb-input__hint-inner").html()
}}return a},destroy:function(){this.trigger("nb-destroyed",this);
if(this.error){this.error.nbdestroy();
this.error.$node.remove()
}this.nbdestroy()
}},"base");
nb.define("input-group",{events:{click:"oninit",disable:"onDisable",enable:"onEnable"},oninit:function(){var a=this;
a.disabled=this.nbdata()["disabled"];
$(this.children()).each(function(){if(this.$node.hasClass("nb-input")){a.input=this
}else{a.button=this
}})},onDisable:function(){this.input.trigger("disable");
this.button.disable();
this.disabled=true
},onEnable:function(){this.input.trigger("enable");
this.button.enable();
this.disabled=false
}},"base");
nb.define("progress",{oninit:function(){var a=this.nbdata();
if(a&&a.type){this.type=a.type
}this.$title=this.$node.find(".js-title");
this.$control=this.$node.find("input");
this.$bar=this.$node.find(".js-bar")
},setValue:function(a){var b=parseFloat(a);
this.$control.val(b);
this.$bar.css({width:b+"%"});
if(this.type=="percentage"){this.$title.html(b+"%")
}this.trigger("nb-value-set",this);
return this
},getValue:function(){return this.$control.val()
},tick:function(){var a=parseFloat(this.getValue());
if(a<100){a++
}this.setValue(a);
this.trigger("nb-changed",this);
return this
}},"base");
nb.define("tabs",{oninit:function(){this.$node.tabs()
}},"base");
nb.define("arrow",{events:{"focusin .nb-arrow__input__wrap":"focus","focusout .nb-arrow__input__wrap":"blur"},oninit:function(){this.$wrap=this.$node.find(".nb-arrow__name__wrap");
this.$requests=this.$node.find(".nb-arrow__requests");
this.$node.find(".nb-arrow__input_fake").text(this.$node.find(".nb-input").attr("value"))
},focus:function(){if(!this.$wrap.hasClass("nb-arrow__name__wrap_focus")){this.$wrap.addClass("nb-arrow__name__wrap_focus")
}this.$requests.fadeOut("fast")
},blur:function(){this.$wrap.removeClass("nb-arrow__name__wrap_focus");
this.$node.find(".nb-arrow__input_fake").text(this.$node.find(".nb-input").attr("value"));
this.$requests.fadeIn("fast")
}},"base");
nb.define("header",{events:{"click .nb-header__button":"togglePress"},togglePress:function(b){var a=$(b.target);
a.closest(".nb-header__button").toggleClass("nb-header__button_pressed");
if(a.hasClass("nb-icon_services")){nb.trigger("services-click")
}if(a.hasClass("nb-icon_settings")){nb.trigger("settings-click")
}}},"base");
nb.define("user",{events:{init:"oninit"},oninit:function(){}});
(function(){var a={source:null,countMax:10,type:"default",highlight:false,size:"s",minLength:2};
$.widget("ui.suggest",$.ui.autocomplete,{options:a,_renderMenu:function(e,c){var f=this;
var d="";$.each(c,function(g,h){d+=f._renderItem(h)
});$(d).appendTo(e);
e.children("li").each(function(g){$(this).data("ui-autocomplete-item",c[g])
})},_renderItem:function(c){var e=$.extend({},c);
if(this.options.highlight){if(typeof b[this.options.type]=="function"){b[this.options.type](e,this._value())
}else{if(typeof this.options.highlight=="function"){this.options.highlight(e,this._value())
}}}e.labelContent=e.label;
delete e.label;
var d={item:e,type:this.options.type,size:this.options.size};
if($.isFunction(this.options.renderItem)){return this.options.renderItem(d)
}else{return'<li><a href="#">'+e.labelContent+"</a></li>"
}},_suggest:function(c){this._super(c);
if(this.options.countMax&&!this._heightMax){this._heightMax=this.menu.element.children().eq(0).height()*this.options.countMax;
this.menu.element.css({"max-height":this._heightMax,"overflow-y":"auto","overflow-x":"hidden"})
}},search:function(d,c){this._trigger("_search");
return this._super(d,c)
}});var b={"default":function(d,c){var e=new RegExp("("+$.ui.autocomplete.escapeRegex(c)+")","i");
d.label=d.label.replace(e,"<b>$1</b>")
},username:function(d,c){var e=new RegExp("("+$.ui.autocomplete.escapeRegex(c)+")","ig");
d.usernameHighlighted=d.username.replace(e,'<span class="nb-suggest__hl">$1</span>');
if(typeof d.email=="string"){d.emailHighlighted=d.email.replace(e,'<span class="nb-suggest__hl">$1</span>')
}}};nb.define("suggest",{oninit:function(){var c=this;
var e=this.$node[0].tagName.toLowerCase();
if(e==="input"||e==="textarea"){this.$control=this.$node
}else{this.$control=this.$node.find("input");
this.input=this.children()[0]
}var d=this.$node.data("source");
this.$control.on("keydown.nb-suggest",function(g){var f=$.ui.keyCode;
if($.inArray(g.keyCode,[f.ENTER,f.NUMPAD_ENTER])!==-1){if(!this.$jUI.data().uiSuggest.menu.active){this.trigger("nb-keypress-enter",this,this.getValue())
}}}.bind(this));
this.$jUI=this.$control.suggest({source:d,countMax:this.$node.data("countMax"),type:this.$node.data("type"),size:this.$node.data("size"),highlight:this.$node.data("highlight"),minLength:this.$node.data("minLength"),renderItem:function(f){return yr.run(c.getYateModuleName(),f,"nb-suggest")
}});this.$suggest=this.$jUI.data().uiSuggest.menu.element;
this.$suggest.addClass(this.$node.data("class-suggest"));
this.$jUI.on("suggest_search.nb-suggest",function(){this.trigger("nb-type",this,this.getValue())
}.bind(this));
this.$jUI.on("suggestselect.nb-suggest",function(g,f){this.$selected=f.item;
this.trigger("nb-select",this,f.item)
}.bind(this));
this.trigger("nb-inited",this)
},getSelected:function(){return this.$selected
},setOption:function(c){this.$jUI.suggest("option",c);
this.trigger("nb-option-set",this);
return this
},getOption:function(c){return this.$jUI.suggest("option",c)
},setSource:function(c){this.setOption({source:c});
this.trigger("nb-source-set",this);
return this
},getSource:function(){return this.getOption("source")
},close:function(){this.$jUI.suggest("close");
this.trigger("nb-closed",this);
return this
},disable:function(){if(this.isEnabled()){if(this.input){this.input.disable()
}else{this.$control.prop("disabled",true)
}this.$node.addClass("nb-is-disabled");
this.$jUI.suggest("disable");
this.trigger("nb-disabled",this)
}return this
},enable:function(){if(!this.isEnabled()){if(this.input){this.input.enable()
}else{this.$control.prop("disabled",false)
}this.$node.removeClass("nb-is-disabled");
this.$jUI.suggest("enable");
this.trigger("nb-enabled",this)
}return this
},isEnabled:function(){return !this.$node.hasClass("nb-is-disabled")
},focus:function(){if(this.isEnabled()){if(this.input){this.input.focus()
}else{this.$control.focus()
}}this.trigger("nb-focused",this);
return this
},getName:function(){return this.$control.prop("name")
},setName:function(c){this.$control.prop("name",c);
this.trigger("nb-name-set",this);
return this
},blur:function(){if(this.isEnabled()){if(this.input){this.input.blur()
}else{this.$control.blur()
}}this.trigger("nb-blured",this);
return this
},getValue:function(){return this.$control.val()
},setValue:function(c){if(this.isEnabled()){this.$control.val(c);
this.trigger("nb-value-set",this)
}return this
},search:function(c){this.$jUI.suggest("search",c);
return this
},destroy:function(){if(this.$control&&this.$jUI){var c=this.$jUI.data();
this.$control.off(".nb-suggest");
this.$jUI.off(".nb-suggest");
if(c&&c.uiSuggest){this.$jUI.suggest("destroy")
}}this.trigger("nb-destroyed",this);
this.nbdestroy()
}},"base")})();
nb.define("toggler",{events:{click:"toggle"},oninit:function(){this.$control=this.$node.find(".nb-toggler__checkbox");
this.trigger("nb-inited",this);
return this
},setValue:function(a){this.$control.attr("value",a);
this.trigger("nb-value-set",this);
return this
},getValue:function(){return this.$control.prop("value")
},toggle:function(){if(this.isEnabled()){if(this.isChecked()){this.uncheck()
}else{this.check()
}this.trigger("nb-changed",this)
}return this
},getName:function(){return this.$control.attr("name")
},setName:function(a){this.$control.attr("name",a);
this.trigger("nb-name-set",this);
return this
},disable:function(){this.$control.prop("disabled",true);
this.$node.addClass("nb-is-disabled");
this.trigger("nb-disabled",this);
return this
},enable:function(){this.$control.prop("disabled",false);
this.$node.removeClass("nb-is-disabled");
this.trigger("nb-enabled",this);
return this
},isEnabled:function(){return !this.$control.prop("disabled")
},focus:function(){if(this.isEnabled()){if(!this.$node.hasClass("is-focused")){this.$node.addClass("is-focused").focus();
this.focused=true;
this.$control.focus();
this.trigger("nb-focused",this)
}}return this
},blur:function(){this.$node.removeClass("is-focused").blur();
this.focused=false;
this.trigger("nb-blured",this);
return this
},isChecked:function(){return this.$control.prop("checked")
},check:function(){if(this.isEnabled()&&!this.isChecked()){this.$control.prop({checked:true});
this.$node.addClass("is-checked");
this.trigger("nb-checked",this)
}return this
},uncheck:function(){if(this.isEnabled()&&this.isChecked()){this.$control.prop({checked:false});
this.$node.removeClass("is-checked");
this.trigger("nb-unchecked",this)
}return this
},destroy:function(){this.trigger("nb-destroyed",this);
this.nbdestroy()
}},"base");
nb.Block.prototype.getYateModuleName=function(){return"index"
};