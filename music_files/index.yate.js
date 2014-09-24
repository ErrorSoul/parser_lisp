var yr=yr||require("yate/lib/runtime.js");
(function(){var ak=yr.cmpNN;
var k=yr.cmpSN;
var mC=yr.nodeset2xml;
var kR=yr.nodeset2boolean;
var dD=yr.nodeset2attrvalue;
var sx=yr.nodeset2scalar;
var eB=yr.scalar2attrvalue;
var b=yr.xml2attrvalue;
var ma=yr.scalar2xml;
var a=yr.xml2scalar;
var lP=yr.simpleScalar;
var kk=yr.simpleBoolean;
var eq=yr.selectNametest;
var lE=yr.closeAttrs;
var sy=new yr.Module();
sy.f0=function sw(f0,f4,f5,f2,f1,M){var f3="";
f3+=lE(f1);
f3+=M;return f3
};var rl=[0,"*"];
sy.f1=function sv(M,f3,f4,f1,f0,f6,f5){f5=(f5===undefined)?[]:f5;
var f2="";f2+=M.a(M,M.n(rl,(yr.externals["nb-wrap"])(f6,f5)),"nb",f0);
return f2};
var rk=[0,"href"];
var rj=[0,"type"];
sy.f2=function su(f3,f6,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.size="m";
f1.theme="normal";
var f7=f1;f2+=lE(f0);
if(k("file",f3.n(rj,f8))){f2+=f3.f("f1",f6,f5,f4,f0,"buttonAttach",(yr.externals["nb-extend"])(yr.object2nodeset(f7),f8))
}else{if(kR(f3.n(rk,f8))){f2+=f3.f("f1",f6,f5,f4,f0,"buttonLink",(yr.externals["nb-extend"])(yr.object2nodeset(f7),f8))
}else{f2+=f3.f("f1",f6,f5,f4,f0,"button",(yr.externals["nb-extend"])(yr.object2nodeset(f7),f8))
}}return f2
};sy.f3=function st(f3,f6,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.none="none";
var f7=f1;f2+=lE(f0);
f2+=f3.f("f1",f6,f5,f4,f0,"popupMenu",(yr.externals["nb-extend"])(yr.object2nodeset(f7),f8));
return f2};
sy.f4=function ss(f3,f6,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.none="none";
var f7=f1;f2+=lE(f0);
f2+=f3.f("f1",f6,f5,f4,f0,"popup",(yr.externals["nb-extend"])(yr.object2nodeset(f7),f8));
return f2};
sy.f5=function sr(f5,f8,f7,f6,f2,f9){f9=(f9===undefined)?[]:f9;
var f4="";var f3={};
var f0={a:{}};
var f1={};var M={a:{}};
f1.modal="true";
f1.width="auto";
f1.height="auto";
f1.minHeight="auto";
f3["data-nb"]=f1;
var f1={};var M={a:{}};
f1.none="none";
f3.close=f1;
var j0=f3;f4+=lE(f2);
f4+=f5.f("f1",f8,f7,f6,f2,"modalPopup",(yr.externals["nb-deep-extend"])(yr.object2nodeset(j0),f9));
return f4};
sy.f6=function sq(M,f4,f5,f1,f0,f3){f3=(f3===undefined)?[]:f3;
var f2="";f2+=lE(f0);
f2+='<div class="nb-popup__content">';
f2+=sx(f3);
f2+="</div>";
return f2};
sy.f7=function sp(M,f4,f5,f1,f0,f3){f3=(f3===undefined)?[]:f3;
var f2="";f2+=lE(f0);
f2+='<div class="nb-popup__title">';
f2+=sx(f3);
f2+="</div>";
return f2};
var ri=[0,"data"];
var rh=[0,"data",0,"*"];
var rg=[1,0];
sy.f8=function so(f1,f9,f5,f4,M,f6){f6=(f6===undefined)?[]:f6;
var f0="";f0+=lE(M);
f0+="<div";
M.a={"class":new yr.scalarAttr("nb-popup__buttons")};
M.s="div";f0+=f1.a(f1,f6,"nb-main-attrs",M);
f0+=lE(M);if((f1.n(rh,f6)).length){var f7=f1.n(ri,f6);
for(var f3=0,f2=f7.length;
f3<f2;f3++){var f8=f7[f3];
f0+=f1.f("f2",f8,f3,f2,M,f1.s(rg,f8))
}}else{f0+=sx(f1.n(ri,f6))
}f0+="</div>";
return f0};
sy.f9=function sn(f3,f8,f7,f5,f0,f6){f6=(f6===undefined)?[]:f6;
var f2="";var f1={};
var M={a:{}};
f1.size="m";
f1.theme="normal";
f1.type="radio";
var f4=f1;f2+=lE(f0);
f2+=f3.f("f1",f8,f7,f5,f0,"radio-button",(yr.externals["nb-extend"])(yr.object2nodeset(f4),f6));
return f2};
sy.f10=function jQ(f4,f8,f7,f6,f0,f5){f5=(f5===undefined)?[]:f5;
var f3="";var f2={};
var M={a:{}};
f2.size="m";
f2.theme="normal";
f2.direction="bottom";
var f1=f2;f3+=lE(f0);
f3+=f4.f("f1",f8,f7,f6,f0,"select",(yr.externals["nb-extend"])(yr.object2nodeset(f1),f5));
return f3};
var rf=[0,"text"];
var re=[0,"value"];
var rd=[0,"icon"];
var rc=[0,"selected"];
sy.f11=function jO(M,f3,f4,f1,f0,f5){f5=(f5===undefined)?[]:f5;
var f2="";f2+=lE(f0);
f2+="<option";
f0.a={};f0.s="option";
f0.a.label=new yr.scalarAttr(sx(M.n(rf,f5)));
f0.a.value=new yr.scalarAttr(sx(M.n(re,f5)));
f0.a["data-icon"]=new yr.scalarAttr(lP("icon",f3));
if(kR((M.n(rc,f5)))){f0.a.selected=new yr.scalarAttr("")
}f2+=lE(f0);
f2+=mC(M.n(rf,f5));
f2+="</option>";
return f2};
sy.f12=function jN(f5,f8,f7,f6,f2,f0){f0=(f0===undefined)?[]:f0;
var f4="";var f3={};
var M={a:{}};
f3.size="m";
f3.type="checkbox";
f3.theme="normal";
var f1=f3;f4+=lE(f2);
f4+=f5.f("f1",f8,f7,f6,f2,"checkbox",(yr.externals["nb-extend"])(yr.object2nodeset(f1),f0));
return f4};
var fp=[0,"leftContent"];
var fo=[0,"rightContent"];
var fn=[0,"labelContent"];
var fm=[0,"reset"];
var fl=[0,"ghost"];
var fk=[0,"error"];
var fj=[0,"hint"];
sy.f13=function jM(f5,f8,f7,f6,f2,f1){f1=(f1===undefined)?[]:f1;
var f4="";var f3={};
var f0={a:{}};
f3.size="s";
var M=f3;f4+=lE(f2);
if(kR(f5.n(fp,f1))||kR(f5.n(fo,f1))||kR(f5.n(fn,f1))||kR(f5.n(fm,f1))||kR(f5.n(fl,f1))||kR(f5.n(fk,f1))||kR(f5.n(fj,f1))){if(k("multiline",f5.n(rj,f1))){f4+=f5.f("f1",f8,f7,f6,f2,"textarea",(yr.externals["nb-extend"])(yr.object2nodeset(M),f1))
}else{f4+=f5.f("f1",f8,f7,f6,f2,"input",(yr.externals["nb-extend"])(yr.object2nodeset(M),f1))
}}else{if(k("multiline",f5.n(rj,f1))){f4+=f5.f("f1",f8,f7,f6,f2,"textareaSimple",(yr.externals["nb-extend"])(yr.object2nodeset(M),f1))
}else{f4+=f5.f("f1",f8,f7,f6,f2,"inputSimple",(yr.externals["nb-extend"])(yr.object2nodeset(M),f1))
}}return f4
};sy.f14=function jL(M,f4,f5,f1,f0,f3){f3=(f3===undefined)?[]:f3;
var f2="";f2+=lE(f0);
f2+=M.f("f1",f4,f5,f1,f0,"input-group",f3);
return f2};
sy.f15=function jK(f3,f6,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.bar="true";
f1.start="0";
f1.type="percentage";
f1.title=" ";
var f7=f1;f2+=lE(f0);
f2+=f3.f("f1",f6,f5,f4,f0,"progress",(yr.externals["nb-extend"])(yr.object2nodeset(f7),f8));
return f2};
sy.f16=function jJ(f3,f6,f5,f4,f0,f8){var f2="";
var f1={};var M={a:{}};
f1.icon=f8;
f1.size="s";
var f7=f1;f2+=lE(f0);
f2+=f3.f("f1",f6,f5,f4,f0,"icon",yr.object2nodeset(f7));
return f2};
sy.f17=function jI(f3,f6,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.theme="dark";
var f7=f1;f2+=lE(f0);
f2+=f3.f("f1",f6,f5,f4,f0,"paranja",(yr.externals["nb-extend"])(yr.object2nodeset(f7),f8));
return f2};
sy.f18=function jH(f3,f6,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.content="";
var f7=f1;f2+=lE(f0);
f2+=f3.f("f1",f6,f5,f4,f0,"island",(yr.externals["nb-extend"])(yr.object2nodeset(f7),f8));
return f2};
sy.f19=function jG(f5,f8,f7,f6,f2,j0){j0=(j0===undefined)?[]:j0;
var f4="";var f3={};
var f0={a:{}};
var f1={};var M={a:{}};
f1.size="s";
f1.type="file";
f1.theme="pseudo";
f1["class"]="nb-dropzone__button";
f3.button=f1;
var f9=f3;f4+=lE(f2);
f4+=f5.f("f1",f8,f7,f6,f2,"dropzone",(yr.externals["nb-deep-extend"])(yr.object2nodeset(f9),j0));
return f4};
sy.f20=function ji(f3,f6,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.size="m";
var f7=f1;f2+=lE(f0);
f2+=f3.f("f1",f6,f5,f4,f0,"loader",(yr.externals["nb-extend"])(yr.object2nodeset(f7),f8));
return f2};
sy.f21=function jg(f3,f6,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.value=0;
f1.type="range";
f1.size="s";
f1.orientation="horiz";
var f7=f1;f2+=lE(f0);
f2+=f3.f("f1",f6,f5,f4,f0,"slider",(yr.externals["nb-deep-extend"])(yr.object2nodeset(f7),f8));
return f2};
sy.f22=function jf(f3,f7,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.size="m";
var f6=f1;f2+=lE(f0);
f2+=f3.f("f1",f7,f5,f4,f0,"tabs",(yr.externals["nb-extend"])(yr.object2nodeset(f6),f8));
return f2};
sy.f23=function je(f3,f7,f5,f4,f0,f8){f8=(f8===undefined)?[]:f8;
var f2="";var f1={};
var M={a:{}};
f1.search="true";
f1.buttonContent="Найти";
var f6=f1;f2+=lE(f0);
f2+=f3.f("f1",f7,f5,f4,f0,"arrow",(yr.externals["nb-extend"])(yr.object2nodeset(f6),f8));
return f2};
sy.f24=function jd(f5,j0,f9,f7,f2,f8){f8=(f8===undefined)?[]:f8;
var f4="";var f3={};
var f0={a:{}};
var f1={};var M={a:{}};
f1.search="true";
f1.buttonContent="Найти";
f1["class"]="nb-header__arrow";
f3.arrow=f1;
f3.services="true";
f3.settings="true";
f3.yaHref="http://yandex.ru";
var f6=f3;f4+=lE(f2);
f4+=f5.f("f1",j0,f9,f7,f2,"header",(yr.externals["nb-deep-extend"])(yr.object2nodeset(f6),f8));
return f4};
sy.f25=function jc(f4,f8,f7,f6,f0,f5){f5=(f5===undefined)?[]:f5;
var f3="";var f1={};
var M={a:{}};
f1.size="m";
var f2=f1;f3+=lE(f0);
f3+=f4.f("f1",f8,f7,f6,f0,"user",(yr.externals["nb-extend"])(yr.object2nodeset(f2),f5));
return f3};
sy.f26=function jb(f5,f8,f7,f6,f1,f2){f2=(f2===undefined)?[]:f2;
var f4="";var f3={};
var M={a:{}};
f3.countMax="10";
f3.type="default";
var f0=f3;f4+=lE(f1);
f4+=f5.f("f1",f8,f7,f6,f1,"suggest",(yr.externals["nb-extend"])(yr.object2nodeset(f0),f2));
return f4};
sy.f27=function ja(f5,f8,f7,f6,f2,f1){f1=(f1===undefined)?[]:f1;
var f4="";var f3={};
var f0={a:{}};
f3.leftText="On";
f3.rightText="Off";
f3.size="s";
var M=f3;f4+=lE(f2);
f4+=f5.f("f1",f8,f7,f6,f2,"toggler",(yr.externals["nb-extend"])(yr.object2nodeset(M),f1));
return f4};
sy.f28=function i9(M,f3,f4,f0,f2){var f1="";
if(f2==200){f1+="L"
}else{if(f2==40){f1+="S"
}else{f1+="M"
}}return f1
};sy.f29=function i8(M,f4,f5,f2,f1,f0){var f3="";
if(f1<=1){f3+=""
}else{if(f0==0){f3+=" button_pin_right"
}else{if(f0==(f1-1)){f3+=" button_pin_left"
}else{f3+=" button_pin_both"
}}}return f3
};var fi=[0,"composer"];
sy.f30=function iQ(f0,f3,f4,f1,M,f6,f5){M=(M===undefined)?[]:M;
var f2="";if(kk("composer",f3)){f2+=f5
}else{f2+=f6
}return f2};
function n9(M,f1,f2,f0){return !kk("composer",f1)
}var fh=[2,n9];
function n8(M,f1,f2,f0){return kk("composer",f1)
}var fg=[2,n8];
sy.f31=function iO(f0,f3,f2,f1,j1,j0,f9,f7,f8,f6,f5){j1=(j1===undefined)?[]:j1;
var M="";var f4=(j1).length;
if((f0.n(fg,j1)).length==0){M+=(yr.externals.plural)(f4,"",j0,f9)
}else{if(((f0.n(fh,j1)).length==0)){M+=(yr.externals.plural)(f4,"",f7,f8)
}else{M+=(yr.externals.plural)(f4,"",f6,f5)
}}return M};
sy.f32=function iN(f0,f4,f5,f2,f1){var f3="";
var M=(yr.externals.cover)(f1,1000,true);
if(((yr.externals.startsWith)(M,"//"))){f3+="http:"+(M)
}return f3};
sy.f33=function iM(M,f1,f2,f0,f3){f3=(f3===undefined)?[]:f3;
return(yr.externals.isFavorite)(f3)
};sy.v67="http://music.yandex.ru";
sy.f34=function iL(M,f2,f4,f0,f5,f3){var f1="";
if((!f3)){if(f5=="asc"){f1+="asc"
}else{f1+="desc"
}}else{if(f5=="asc"){f1+="desc"
}else{f1+="asc"
}}return f1
};var ff=[0,"socialNetwork"];
var fe=[0,"title"];
sy.f35=function iK(M,f2,f4,f0,f3){var f1={};
if(k("official",eq("type",f2,[]))){f1.title=yr.nodeset2data(eq("title",f2,[]))
}else{f1.title=(yr.externals.socialTitle)(lP("socialNetwork",f2))
}return f1};
var fd=[0,"id"];
var fc=[0,"class"];
var fb=[0,"mixin-nb"];
var fa=[0,"data-nb",0,"*"];
var e9=[0,"attrs",0,"*"];
var e8=[0,"button"];
var e7=[0,"size"];
var e6=[0,"theme"];
var e5=[0,"static"];
var e4=[0,"disabled"];
var e3=[0,"name"];
var e2=[0,"attrs",0,"name"];
var e1=[0,"content"];
var e0=[0,"iconText"];
var eZ=[0,"buttonLink"];
var eY=[0,"buttonAttach"];
var eX=[0,"attrs",0,"multiple"];
var eW=[0,"multiple"];
var eV=[0,"attrs",0,"title"];
var eU=[0,"popupMenu"];
var eT=[0,"tail"];
var eS=[0,"menu"];
var eR=[0,"separator"];
var eQ=[0,"popup"];
var eP=[0,"titleContent"];
var eO=[0,"modalPopup"];
var eN=[0,"close"];
var eM=[0,"close",0,"class"];
var eL=[0,"close",0,"attrs"];
var eK=[0,"close",0,"attrs",0,"*"];
var eJ=[0,"buttons"];
var eI=[0,"radio-button"];
var eH=[0,"group"];
var eG=[1,1,0,"name"];
var eF=[0,"checked"];
var eE=[1,1,0,"theme"];
var eD=[1,1,0,"size"];
var eC=[0,"select"];
function n7(M,f1,f2,f0){return kR((eq("selected",f1,[])))
}var eA=[0,"items",2,n7];
var ez=[0,"direction"];
var ey=[0,"within"];
var ex=[0,"maxHeight"];
var ew=[0,"items"];
var ev=[];var eu=[0,"checkbox"];
var et=[0,"tabindex"];
var es=[0,"input"];
var er=[0,"error",0,"direction"];
var ek=[0,"hint",0,"ghost"];
var ei=[0,"hint",0,"text"];
var eg=[0,"error",0,"content"];
var ee=[0,"textarea"];
var ed=[0,"inputSimple"];
var ec=[0,"textareaSimple"];
var eb=[0,"input-group"];
var ea=[0,"progress"];
var d9=[0,"bar"];
var d8=[0,"start"];
function n6(M,f1,f2,f0){return kk("icon",f1)
}var dQ=[0,"icon",2,n6];
var dO=[0,"paranja"];
var dM=[0,"island"];
var dK=[0,"padding"];
var dJ=[0,"dropzone"];
var dI=[0,"head"];
var dH=[0,"loader"];
var dG=[0,"color"];
var dF=[0,"slider"];
var dE=[0,"orientation"];
var dk=[0,"handle",0,"class"];
var di=[0,"tabs"];
var dg=[0,"rise"];
var de=[0,"active"];
var dd=[0,"arrow"];
var dc=[0,"search"];
var db=[0,"buttonContent"];
var da=[0,"action"];
var c9=[0,"requests"];
var c8=[0,"header"];
var qp=[0,"settings"];
var qn=[0,"services"];
var ql=[0,"user"];
var qj=[0,"yaHref"];
var qh=[0,"justify"];
var qf=[0,"rightToLeft"];
var qd=[0,"userpic"];
var qb=[0,"notices"];
var qa=[0,"username"];
var pZ=[0,"email"];
var pC=[0,"suggest"];
var pA=[0,"countMax"];
var pz=[0,"source"];
var py=[0,"highlight"];
var px=[0,"classSuggest"];
var pv=[0,"attrsInput"];
var pt=[0,"item"];
function n5(M,f1,f2,f0){return k("default",eq("type",f1,[]))
}var pr=[2,n5,0,"item"];
function n4(M,f1,f2,f0){return k("username",eq("type",f1,[]))
}var pq=[2,n4,0,"item"];
var pp=[0,"size"];
var o3=[0,"usernameHighlighted"];
var o0=[0,"emailHighlighted"];
var oX=[0,"mod"];
function n3(M,f1,f2,f0){return k("suggest",eq("mod",f1,[]))&&kk("usernameHighlighted",f1)
}var oV=[0,"user",2,n3,0,"username"];
var oT=[1,1,0,"usernameHighlighted"];
function n2(M,f1,f2,f0){return k("suggest",eq("mod",f1,[]))&&kk("emailHighlighted",f1)
}var oR=[0,"user",2,n2,0,"email"];
var oP=[1,1,0,"emailHighlighted"];
var oN=[0,"toggler"];
var oM=[0,"leftText"];
var oL=[0,"rightText"];
function n1(M,f1,f2,f0){return !kk("*",f1)
}var oq=[0,"*",2,n1];
var oo=[0,"noauth"];
function n0(M,f1,f2,f0){return k(1,eq("noauth",f1,[]))
}var ol=[0,"*",2,n0];
var oj=[0,"target"];
var oh=[0,"pin"];
var of=[0,"coverUri"];
var od=[0,"cover"];
function gy(M,f1,f2,f0){return !kk("composer",f1)
}var ob=[0,"artists",2,gy];
var oa=[0,"artists",2,n8];
var nM=[0,"year"];
var nK=[0,"labels"];
var nI=[0,"genre"];
var nH=[0,"duplicates"];
var nG=[0,"version"];
var nF=[0,"artist",0,"cover",0,"uri"];
var nE=[0,"pics",0,"items"];
function gx(M,f1,f2,f0){return(M.s(nE,f1)).length>2
}var nD=[0,"*",2,gx];
var nC=[0,"pics"];
var nB=[0,"artist",0,"name"];
var nr=[0,"artist",0,"cover",0,"type"];
function gw(M,f1,f2,f0){return k("from-artist-photos",M.s(nr,f1))
}var np=[0,"*",2,gw];
var no=[0,"query"];
var nn=[0,"thumb"];
var nm=[0,"artist",0,"trackCount"];
var nl=[0,"artist",0,"counts",0,"tracks"];
function gv(M,f1,f2,f0){return !(k("other",M.s(rg,f1)))
}var nk=[0,"artist",0,"genres",2,gv];
var nj=[0,"artist"];
var ni=[0,"users"];
var m8=[0,"uid"];
var m6=[0,"login"];
function gu(M,f1,f2,f0){return kk("id",f1)
}var m5=[0,"decomposed",2,gu];
function gt(M,f1,f2,f0){return !kk("id",f1)
}var m4=[0,"*",2,gt];
var m3=[0,"various"];
var m2=[0,"enabled"];
function gs(M,f1,f2,f0){return kk("enabled",f1)
}var m1=[0,"*",2,gs];
var m0=[0,"code"];
var mZ=[0,"display_name"];
var mP=[0,"subscriptions",0,"nonAutoRenewable"];
var mN=[0,"subscriptions",0,"beeline"];
var mM=[0,"subscriptions",0,"trialEnd"];
var mL=[0,"expires"];
var mK=[0,"end"];
var mJ=[0,"notification"];
var mI=[0,"notification",0,"success"];
var mH=[0,"expired"];
var mF=[0,"notification",0,"paymentDate"];
var ml=[0,"pdd"];
var mj=[0,"status",0,"available"];
var mi=[0,"use-link"];
var mh=[0,"iconPosition"];
var mg=[0,"datetime"];
var mf=[0,"afishaUrl"];
var me=[0,"place"];
var md=[0,"city"];
var mc=[0,"events"];
var mb=[1,1,0,"noauth"];
function gr(M,f1,f2,f0){return !kR(M.s(mb,f1))
}var l0=[0,"*",2,gr];
var lY=[1,1,0,"today"];
var lX=[0,"day"];
var lW=[0,"tracksToPlay"];
var lV=[0,"tracksToPlay",0,"durationMs"];
var lU=[1,1,0,"scratch"];
var lT=[0,"message"];
var lS=[0,"stack"];
var lR=[0,"yaMoneyId"];
var lQ=[0,"emails"];
var kg=[0,"isSelected"];
var ke=[0,"subscribed"];
var kc=[0,"isOwner"];
var ka=[0,"subtitle"];
var jY=[0,"img"];
function gq(M,f1,f2,f0){return k("text",eq("type",f1,[]))
}var jW=[0,"*",2,gq];
function gp(M,f1,f2,f0){return k("artist",eq("type",f1,[]))
}var jU=[0,"*",2,gp];
function go(M,f1,f2,f0){return k("genre",eq("type",f1,[]))
}var jS=[0,"*",2,go];
function gn(M,f1,f2,f0){return k("user",eq("type",f1,[]))
}var jR=[0,"*",2,gn];
function gm(M,f1,f2,f0){return k("label",eq("type",f1,[]))
}var jP=[0,"*",2,gm];
var jt=[0,"playlist",0,"owner",0,"login"];
var jq=[0,"playlist",0,"kind"];
var jp=[0,"playlist"];
var jo=[0,"playlist",0,"title"];
var jn=[0,"playlist",0,"trackCount"];
var jm=[0,"someArtists"];
var jl=[0,"artistsCount"];
function gl(M,f1,f2,f0){return k("notification-vk-not-bound",eq("id",f1,[]))
}var jk=[0,"*",2,gl];
function gk(M,f1,f2,f0){return k("notification-facebook-not-bound",eq("id",f1,[]))
}var jj=[0,"*",2,gk];
function gj(M,f1,f2,f0){return k("notification-not-logged-in",eq("id",f1,[]))
}var jh=[0,"*",2,gj];
var iY=[0,"typeForFrom"];
var iW=[0,"promoId"];
var iV=[0,"albums"];
function gi(M,f1,f2,f0){return k("new-albums",eq("type",f1,[]))
}var iU=[0,"*",2,gi];
function gh(M,f1,f2,f0){return k("recommended-albums",eq("type",f1,[]))
}var iT=[0,"*",2,gh];
function gg(M,f1,f2,f0){return k("recommended-similar-artists",eq("type",f1,[]))
}var iS=[0,"*",2,gg];
var iR=[0,"similarArtists"];
function gf(M,f1,f2,f0){return k("suggest-recommended-artists",eq("type",f1,[]))
}var iP=[0,"*",2,gf];
var iA=[0,"artists"];
function ge(M,f1,f2,f0){return k("new-playlists",eq("type",f1,[]))
}var iy=[0,"*",2,ge];
function gd(M,f1,f2,f0){return k("promotion",eq("type",f1,[]))
}var ix=[0,"*",2,gd];
var iw=[0,"background"];
var iv=[0,"promotionType"];
function gc(M,f1,f2,f0){return k("promotion",eq("type",f1,[]))&&k("albums",eq("promotionType",f1,[]))
}var iu=[0,"*",2,gc];
var it=[0,"description"];
function gb(M,f1,f2,f0){return k("promotion",eq("type",f1,[]))&&k("playlists",eq("promotionType",f1,[]))
}var ir=[0,"*",2,gb];
var ig=[0,"playlists",0,"playlist"];
function ga(M,f1,f2,f0){return k("promotion",eq("type",f1,[]))&&k("tracks",eq("promotionType",f1,[]))
}var id=[0,"*",2,ga];
var ic=[0,"tracks"];
function fZ(M,f1,f2,f0){return k("genre-top",eq("type",f1,[]))
}var ib=[0,"*",2,fZ];
var ia=[0,"radioIsAvailable"];
function fY(M,f1,f2,f0){return k("recommended-similar-genre",eq("type",f1,[]))
}var h9=[0,"*",2,fY];
var h8=[0,"similarGenre"];
function fX(M,f1,f2,f0){return k("social-popular-tracks",eq("type",f1,[]))
}var h7=[0,"*",2,fX];
var h6=[0,"socialTracks"];
var h5=[0,"track"];
function fW(M,f1,f2,f0){return k("new-albums-of-favorite-genre",eq("type",f1,[]))
}var hV=[0,"*",2,fW];
function fV(M,f1,f2,f0){return k("recommended-concert",eq("type",f1,[]))
}var hT=[0,"*",2,fV];
function fU(M,f1,f2,f0){return k("well-forgotten-old-artists",eq("type",f1,[]))
}var hS=[0,"*",2,fU];
function fT(M,f1,f2,f0){return k("well-forgotten-old-tracks",eq("type",f1,[]))
}var hR=[0,"*",2,fT];
function fS(M,f1,f2,f0){return k("spike-tracks",eq("type",f1,[]))
}var hQ=[0,"*",2,fS];
function fR(M,f1,f2,f0){return k("new-albums-of-favorite-label",eq("type",f1,[]))
}var hP=[0,"*",2,fR];
function fQ(M,f1,f2,f0){return k("never-heard-from-library",eq("type",f1,[]))
}var hO=[0,"*",2,fQ];
function fP(M,f1,f2,f0){return k("last-week-personal-popular-tracks",eq("type",f1,[]))
}var hN=[0,"*",2,fP];
function fO(M,f1,f2,f0){return k("last-week-personal-popular-artists",eq("type",f1,[]))
}var hM=[0,"*",2,fO];
var hL=[0,"artists",0,"augmentedArtist"];
function fN(M,f1,f2,f0){return k("recommended-popular-albums",eq("type",f1,[]))
}var hB=[0,"*",2,fN];
function fM(M,f1,f2,f0){return k("recommended-popular-artists",eq("type",f1,[]))
}var hz=[0,"*",2,fM];
function fL(M,f1,f2,f0){return k("similar-tracks-from-history",eq("type",f1,[]))
}var hy=[0,"*",2,fL];
function fK(M,f1,f2,f0){return k("recommended-genre-radio",eq("type",f1,[]))
}var hx=[0,"*",2,fK];
function fJ(M,f1,f2,f0){return kk("radioIsAvailable",f1)
}var hw=[0,"genres",2,fJ];
function fI(M,f1,f2,f0){return k("notification",eq("type",f1,[]))
}var hv=[0,"*",2,fI];
var hu=[0,"parent"];
var ht=[0,"dir",0,"name"];
var hs=[0,"dir",0,"trackCount"];
var hi=[0,"tld"];
var hg=[0,"myMusicButton"];
var hf=[0,"yandexuid"];
var he=[0,"retpath"];
function fH(M,f1,f2,f0){return k("artist",eq("name",f1,[]))
}var hd=[0,"*",2,fH];
var hc=[0,"data",0,"artist",0,"name"];
var hb=[0,"what"];
var ha=[0,"data",0,"artist",0,"cover",0,"uri"];
var g9=[0,"data",0,"artist"];
var gZ=[0,"data",0,"what"];
function fG(M,f1,f2,f0){return k("album",eq("name",f1,[]))
}var gX=[0,"*",2,fG];
var gW=[0,"data",0,"title"];
var gV=[0,"data",0,"coverUri"];
var gU=[0,"trackId"];
function fF(M,f1,f2,f0){return k("album",eq("name",f1,[]))&&kk("trackId",f1)
}var gT=[0,"*",2,fF];
function fE(M,f1,f2,f0){return k("playlist",eq("name",f1,[]))
}var ep=[0,"*",2,fE];
var eo=[0,"data",0,"playlist",0,"title"];
var en=[0,"data",0,"playlist",0,"cover"];
var em=[0,"avatars"];
var el=[0,"dir"];
var ej=[0,"data",0,"playlist"];
function fD(M,f1,f2,f0){return k("users",eq("name",f1,[]))
}var eh=[0,"*",2,fD];
var ef=[0,"data",0,"owner",0,"name"];
var dY=[0,"data",0,"owner",0,"login"];
function fC(M,f1,f2,f0){return k("top",eq("name",f1,[]))
}var dW=[0,"*",2,fC];
var dV=[0,"filter"];
function fB(M,f1,f2,f0){return k("search",eq("name",f1,[]))
}var dU=[0,"*",2,fB];
var dT=[0,"data",0,"result",0,"counts"];
var dS=[0,"query",0,"text"];
var dR=[0,"query",0,"type"];
var dP=[0,"videos"];
function fA(M,f1,f2,f0){return k("mix",eq("name",f1,[]))
}var dN=[0,"*",2,fA];
function fz(M,f1,f2,f0){return k("settings",eq("name",f1,[]))
}var dL=[0,"*",2,fz];
function fy(M,f1,f2,f0){return k("payment",eq("name",f1,[]))
}var dt=[0,"*",2,fy];
function fx(M,f1,f2,f0){return k("apps",eq("name",f1,[]))
}var dr=[0,"*",2,fx];
var dq=[0,"tooltip"];
function fw(M,f1,f2,f0){return !kk("theme",f1)
}var dp=[1,0,2,fw];
var dn=[0,"state"];
var dm=[0,"tooltipText"];
function fv(M,f1,f2,f0){return k("player",eq("theme",f1,[]))
}var dl=[1,0,2,fv];
var dj=[0,"tooltip",0,"addText"];
var dh=[0,"tooltip",0,"removeText"];
var df=[0,"days"];
var cY=[0,"amount"];
var cW=[0,"currency"];
var cV=[0,"systemId"];
function fu(M,f1,f2,f0){return k("promo-code",eq("type",f1,[]))
}var cU=[0,"*",2,fu];
function ft(M,f1,f2,f0){return k("gift-2-0",eq("type",f1,[]))||k("dummy",eq("type",f1,[]))||k("samsung_galaxy_s5_gift",eq("type",f1,[]))||k("yandex_kit_gift",eq("type",f1,[]))
}var cT=[0,"*",2,ft];
var cS=[0,"duration"];
var cR=[0,"currentItem"];
function fs(M,f1,f2,f0){return !kk("items",f1)
}var cH=[0,"*",2,fs];
var cF=[0,"subGenres"];
function fr(M,f1,f2,f0){return k("other",eq("id",f1,[]))&&kk("subGenres",f1)
}var cE=[0,"*",2,fr];
var cD=[0,"url"];
var cC=[0,"item",0,"subGenres"];
var cB=[0,"mode"];
var cA=[0,"note"];
function fq(M,f1,f2,f0){return k("not-logged-in-pretty",eq("message",f1,[]))||k("logged-in-first-time",eq("message",f1,[]))
}function lD(M,f1,f2,f0){return k("not-logged-in-pretty",eq("message",f1,[]))
}var cq=[0,"*",2,lD];
function lC(M,f1,f2,f0){return k("logged-in-first-time",eq("message",f1,[]))
}var co=[0,"*",2,lC];
var cn=[0,"total"];
var cm=[0,"perPage"];
var cl=[0,"page"];
var ck=[0,"products"];
var cj=[0,"systems"];
var ci=[0,"fields"];
var ch=[0,"track",0,"original"];
var cg=[0,"album",0,"id"];
function lB(M,f1,f2,f0){return !kk("error",f1)
}var b6=[0,"cover",2,lB];
var b4=[0,"cover",0,"type"];
function lA(M,f1,f2,f0){return k("mosaic",M.s(b4,f1))
}var b3=[0,"*",2,lA];
var b2=[0,"cover",0,"itemsUri"];
function lz(M,f1,f2,f0){return k("pic",M.s(b4,f1))
}var b1=[0,"*",2,lz];
var b0=[0,"cover",0,"dir"];
var bZ=[0,"cover",0,"version"];
var bY=[0,"kind"];
function ly(M,f1,f2,f0){return k(3,eq("kind",f1,[]))
}var bX=[0,"*",2,ly];
var bN=[0,"owner",0,"login"];
var bK=[0,"trackCount"];
var bI=[0,"descriptionFormatted"];
var bG=[0,"image"];
var bE=[0,"imageUri"];
var bC=[0,"imagePosition"];
var bA=[0,"album",0,"coverUri"];
var by=[0,"track",0,"albums",0,"coverUri"];
var bv=[0,"playlist",0,"playlist"];
var bk=[0,"heading"];
var bh=[0,"titleUrl"];
var bf=[0,"subtitleUrl"];
var bd=[0,"album"];
var bb=[1,1,0,"genre"];
function lx(M,f1,f2,f0){return ak(eq("id",f1,[]),M.s(bb,f1))
}var a9=[0,"genres",2,lx];
var a7=[0,"context",0,"href"];
var a5=[0,"context",0,"shortTitle"];
var a3=[0,"language"];
var a1=[0,"settings",0,"language"];
var aQ=[0,"settings",0,"popFactor"];
var aM=[0,"scrobblingEnabled"];
var aK=[0,"userid"];
var aI=[0,"link"];
var aG=[0,"tooltip",0,"text"];
var aE=[0,"tooltip",0,"disabledText"];
function lw(M,f1,f2,f0){return kk("album",f1)
}var aC=[0,"*",2,lw];
var az=[0,"album",0,"title"];
function lv(M,f1,f2,f0){return kk("track",f1)
}var sm=[0,"*",2,lv];
var sl=[0,"track",0,"title"];
var sk=[0,"albumId"];
var sj=[0,"track",0,"id"];
function lu(M,f1,f2,f0){return kk("artist",f1)
}var si=[0,"*",2,lu];
var sh=[0,"artist",0,"id"];
function lt(M,f1,f2,f0){return kk("playlist",f1)
}var sg=[0,"*",2,lt];
function ls(M,f1,f2,f0){return kk("genre",f1)
}var sf=[0,"*",2,ls];
var r5=[0,"genre",0,"id"];
var r3=[0,"adv"];
var r2=[0,"topAlbums"];
var r1=[0,"counts",0,"directAlbumCount"];
var r0=[0,"counts",0,"trackCount"];
var rZ=[0,"buttonClass"];
var rY=[0,"auth",0,"user",0,"login"];
var rX=[0,"user",0,"login"];
var rW=[0,"subscribers"];
var rV=[0,"sort"];
var rL=[0,"sort",0,"useLink"];
var rJ=[0,"sort",0,"url"];
var rI=[0,"sort",0,"param"];
var rH=[0,"sort",0,"dir"];
var rG=[0,"sortParam"];
var rF=[0,"sortEnabled"];
var rE=[0,"fixed"];
var rD=[0,"preview"];
var rC=[0,"tabLink"];
var rB=[0,"titleLink"];
var rr=[0,"coverSize"];
var rp=[0,"searchQuery"];
var ro=[1,1,0,"likedByUsers"];
var rn=[0,"track",0,"artists"];
var rm=[0,"original"];
var q1=[0,"durationMs"];
var q0=[0,"displayName"];
var qZ=[1,1,0,"auth"];
var qY=[0,"genres"];
function lr(M,f1,f2,f0){return !(k("all",eq("id",f1,[])))&&!(k("other",eq("id",f1,[])))
}var qX=[0,"genres",2,lr];
var qW=[0,"debug"];
var qL=[0,"volumes"];
var qK=[0,"commerceModel"];
var qJ=[0,"price"];
var qI=[0,"desc"];
var qH=[0,"result",0,"counts",0,"artists"];
var qG=[0,"result",0,"counts",0,"albums"];
var qF=[0,"result",0,"counts",0,"tracks"];
var qE=[0,"result",0,"misspell"];
var qD=[0,"result",0,"best"];
var qt=[0,"result"];
var qr=[0,"corrected"];
var qq=[0,"orig"];
var qo=[0,"result",0,"text"];
var qm=[0,"result",0,"misspell",0,"orig"];
var qk=[0,"result",0,"best",0,"type"];
var qi=[0,"result",0,"pager"];
var qg=[0,"best",0,"type"];
var qe=[0,"best",0,"item"];
var qc=[0,"counts",0,"artists"];
var pI=[0,"counts",0,"albums"];
var pF=[0,"counts",0,"tracks"];
var pD=[0,"best"];
var pw=[0,"pager"];
function lq(M,f1,f2,f0){return !(k("not-logged-in-pretty",eq("message",f1,[])))&&!(k("logged-in-first-time",eq("message",f1,[])))
}var pu=[0,"headlines",2,lq];
var ps=[0,"headlines"];
function lp(M,f1,f2,f0){return kk("events",f1)
}var pa=[0,"days",2,lp];
var o7=[0,"nextRevision"];
var o4=[0,"artist",0,"composer"];
var o1=[0,"artist",0,"counts",0,"similarCount"];
var oY=[0,"artist",0,"genres"];
var oW=[0,"artist",0,"yaMoneyId"];
var oU=[0,"radio"];
var oS=[0,"artist",0,"links"];
var oQ=[0,"artist",0,"counts"];
var oO=[0,"directAlbums"];
var ow=[0,"alsoAlbums"];
var or=[0,"similar"];
function lo(M,f1,f2,f0){return k("official",eq("type",f1,[]))
}var om=[0,"links",2,lo];
function ln(M,f1,f2,f0){return k("vk",eq("socialNetwork",f1,[]))
}var ok=[0,"links",2,ln];
function lm(M,f1,f2,f0){return k("facebook",eq("socialNetwork",f1,[]))
}var oi=[0,"links",2,lm];
function ll(M,f1,f2,f0){return k("twitter",eq("socialNetwork",f1,[]))
}var og=[0,"links",2,ll];
function lk(M,f1,f2,f0){return k("youtube",eq("socialNetwork",f1,[]))
}var oe=[0,"links",2,lk];
function lj(M,f1,f2,f0){return !(k("official",eq("type",f1,[])))&&!(k("vk",eq("socialNetwork",f1,[])))&&!(k("facebook",eq("socialNetwork",f1,[])))&&!(k("twitter",eq("socialNetwork",f1,[])))&&!(k("youtube",eq("socialNetwork",f1,[])))
}var oc=[0,"links",2,lj];
var le=[0,"auth"];
var ld=[0,"owner"];
var lc=[0,"visibility"];
var lb=[0,"tracks",2,lB];
var la=[0,"composers"];
var k9=[0,"owner",0,"uid"];
var k8=[0,"owner",0,"name"];
var k7=[0,"verified"];
var k6=[0,"profiles"];
var k1=[0,"playlists"];
var k0=[0,"playlists",2,ly];
function li(M,f1,f2,f0){return !(k(3,eq("kind",f1,[])))
}var kZ=[0,"playlists",2,li];
var kY=[0,"bookmarks"];
var kX=[0,"indirectAlbums"];
var kW=[0,"albums",2,lB];
var kV=[0,"indirectAlbums",2,lB];
var kU=[0,"counts",0,"indirectCount"];
var kT=[0,"artists",2,lB];
var kS=[0,"indirectArtists"];
var kQ=[0,"subscriptions"];
var kP=[0,"provider"];
var kO=[0,"indirectArtists",2,lB];
var kN=[0,"auth",0,"isHosted"];
function lh(M,f1,f2,f0){return kk("noauth",f1)
}var kM=[2,lh];
var kL=[0,"orders"];
function lg(M,f1,f2,f0){return(eq("orders",f1,[])).length==0
}var kK=[0,"*",2,lg];
var kJ=[0,"subscription"];
var kI=[0,"account"];
function lf(M,f1,f2,f0){return k("vkontakte",eq("provider",f1,[]))
}var kH=[0,"social",0,"profiles",2,lf];
function k5(M,f1,f2,f0){return k("facebook",eq("provider",f1,[]))
}var kG=[0,"social",0,"profiles",2,k5];
var kF=[0,"social",0,"socialVisibility"];
function k4(M,f1,f2,f0){return k("last-fm",eq("type",f1,[]))
}var kE=[0,"social",0,"settings",2,k4];
var kD=[0,"settings",0,"billingMailEnabled"];
var kC=[0,"settings",0,"artistsMailEnabled"];
var kB=[0,"settings",0,"email"];
function k3(M,f1,f2,f0){return k("no-email",eq("settings",f1,[]))
}var kA=[0,"*",2,k3];
var kz=[0,"profile"];
var ky=[0,"loaderTooltip"];
var kx=[0,"scope"];
var kw=[0,"params"];
var kv=[0,"screen"];
var ku=[0,"subDirs"];
var kt=[0,"artists",0,"id"];
var ks=[0,"data",0,"albums"];
var kr=[0,"hideAlbum"];
var kq=[0,"data",0,"id"];
var kp=[0,"data",0,"similar"];
var ko=[0,"playlist",0,"tracks",2,lB];
var kn=[0,"playlist",0,"tracks"];
var km=[0,"playlist",0,"owner",0,"name"];
var kl=[0,"playlist",0,"visibility"];
var kj=[0,"order",0,"notification"];
var ki=[0,"success"];
var kh=[0,"errorCode"];
var kf=[0,"paymentDate"];
var kd=[0,"order",0,"expired"];
var kb=[0,"order"];
var jZ=[0,"order",0,"amount"];
var jX=[0,"order",0,"currency"];
var jV=[0,"order",0,"days"];
var jT=[0,"system",0,"name"];
function k2(M,f1,f2,f0){return kR(M.s(jT,f1))
}var jy=[0,"*",2,k2];
var jw=[0,"prompt"];
var ju=[0,"context",0,"title"];
var jr=[0,"tracks",0,"track",2,lB];
sy.t0=function mG(f3,j1,f9,f6,f0){var f2="";
f2+=f3.a(f3,f3.s(rg,j1),"nb-attrs",f0);
f2+=f3.a(f3,eq("*",j1,[]),"nb-attrs",f0);
if(kk("id",j1)){f0.a.id=new yr.scalarAttr(lP("id",j1))
}var f1="";
var M={a:{}};
var f8=eq("class",j1,[]);
for(var f5=0,f4=f8.length;
f5<f4;f5++){var j0=f8[f5];
f1+=" "+sx((f3.s(rg,j0)))
}var f7=f0.a["class"];
if(f7){f0.a["class"]=f7.addscalar(f1)
}else{f0.a["class"]=new yr.scalarAttr(f1)
}var f1="";
var M={a:{}};
var f8=eq("mixin-nb",j1,[]);
for(var f5=0,f4=f8.length;
f5<f4;f5++){var j0=f8[f5];
f1+=" "+sx((f3.s(rg,j0)))
}var f7=f0.a["data-nb"];
if(f7){f0.a["data-nb"]=f7.addscalar(f1)
}else{f0.a["data-nb"]=new yr.scalarAttr(f1)
}var f8=f3.s(fa,j1);
for(var f5=0,f4=f8.length;
f5<f4;f5++){var j0=f8[f5];
f0.a["data-nb-"+(j0.name)]=new yr.scalarAttr(sx(f3.s(rg,j0)))
}var f8=f3.s(e9,j1);
for(var f5=0,f4=f8.length;
f5<f4;f5++){var j0=f8[f5];
f0.a[(j0.name)]=new yr.scalarAttr(sx(f3.s(rg,j0)))
}return f2};
sy.t0.j=rl;
sy.t0.a=0;sy.t1=function mE(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"nb-content",f0);
return f2};
sy.t1.j=rl;
sy.t1.a=0;sy.t2=function mD(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<button";
f0.a={"class":new yr.scalarAttr("nb-button _init nb-button_size_"+sx((eq("size",f3,[])))+"  nb-button_theme_"+sx((eq("theme",f3,[]))))};
f0.s="button";
if(!kR((eq("static",f3,[])))){f0.a["data-nb"]=new yr.scalarAttr("button")
}f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(kk("disabled",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-is-disabled")
}else{f0.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}f0.a.disabled=new yr.scalarAttr("disabled")
}if(kk("name",f3)){f0.a.name=new yr.scalarAttr(lP("name",f3))
}if(kR(M.s(e2,f3))){f0.a.name=new yr.scalarAttr(sx(M.s(e2,f3)))
}if(!kR((eq("content",f3,[])))&&(kk("icon",f3)||kk("iconText",f3))){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-button_only-icon")
}else{f0.a["class"]=new yr.scalarAttr(" nb-button_only-icon")
}}f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("nb-button__text")};
f0.s="span";
f2+=M.a(M,eq("icon",f3,[]),"nb",f0);
f2+=lE(f0);
if(kk("iconText",f3)){f2+='<span class="nb-icon nb-icon_text">';
f2+=mC(eq("iconText",f3,[]));
f2+="</span>"
}if(kk("content",f3)){f2+=lP("content",f3)
}f2+="</span>";
f2+="</button>";
return f2};
sy.t2.j=e8;
sy.t2.a=0;sy.t3=function mB(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<a";f0.a={"class":new yr.scalarAttr("nb-button _init nb-button_size_"+sx((eq("size",f3,[])))+"  nb-button_theme_"+sx((eq("theme",f3,[]))))};
f0.s="a";f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(kk("disabled",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-is-disabled")
}else{f0.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}f0.a.disabled=new yr.scalarAttr("disabled")
}if(!kR((eq("disabled",f3,[])))&&kk("href",f3)){f0.a.href=new yr.scalarAttr(sx((eq("href",f3,[]))))
}if(!kR((eq("static",f3,[])))){f0.a["data-nb"]=new yr.scalarAttr("button")
}if(!kR((eq("content",f3,[])))&&(kk("icon",f3)||kk("iconText",f3))){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-button_only-icon")
}else{f0.a["class"]=new yr.scalarAttr(" nb-button_only-icon")
}}f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("nb-button__text")};
f0.s="span";
f2+=M.a(M,eq("icon",f3,[]),"nb",f0);
f2+=lE(f0);
if(kk("iconText",f3)){f2+='<span class="nb-icon nb-icon_text">';
f2+=mC(eq("iconText",f3,[]));
f2+="</span>"
}if(kk("content",f3)){f2+=lP("content",f3)
}f2+="</span>";
f2+="</a>";
return f2};
sy.t3.j=eZ;
sy.t3.a=0;sy.t4=function mA(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<label";
f0.a={"class":new yr.scalarAttr("nb-button _init nb-button_size_"+sx((eq("size",f3,[])))+" nb-button_type_attach  nb-button_theme_"+sx((eq("theme",f3,[]))))};
f0.s="label";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(kk("disabled",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-is-disabled")
}else{f0.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}f0.a.disabled=new yr.scalarAttr("disabled")
}if(!kR((eq("disabled",f3,[])))&&kk("href",f3)){f0.a.href=new yr.scalarAttr(sx((eq("href",f3,[]))))
}if(!kR((eq("static",f3,[])))){f0.a["data-nb"]=new yr.scalarAttr("button")
}if(!kR((eq("content",f3,[])))&&(kk("icon",f3)||kk("iconText",f3))){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-button_only-icon")
}else{f0.a["class"]=new yr.scalarAttr(" nb-button_only-icon")
}}f2+=lE(f0);
f2+='<span class="nb-file-intruder">';
f2+='<span class="nb-file-intruder__inner">';
f2+="<input";
f0.a={"class":new yr.scalarAttr("nb-file-intruder__input"),type:new yr.scalarAttr("file")};
f0.s="input";
if(kR(M.s(eX,f3))||kk("multiple",f3)){f0.a.multiple=new yr.scalarAttr("multiple")
}if(kk("name",f3)){f0.a.name=new yr.scalarAttr(lP("name",f3))
}if(kR(M.s(e2,f3))){f0.a.name=new yr.scalarAttr(sx((M.s(e2,f3))))
}if(kR(M.s(eV,f3))){var f4=f0.a.title;
if(f4){f0.a.title=f4.addscalar(sx((M.s(eV,f3))))
}else{f0.a.title=new yr.scalarAttr(sx((M.s(eV,f3))))
}}f2+=lE(f0);
f2+="";f2+='<span class="nb-file-intruder__focus"></span>';
f2+="</span>";
f2+="</span>";
f2+="<span";
f0.a={"class":new yr.scalarAttr("nb-button__text")};
f0.s="span";
f2+=M.a(M,eq("icon",f3,[]),"nb",f0);
f2+=lE(f0);
if(kk("iconText",f3)){f2+='<span class="nb-icon nb-icon_text">';
f2+=mC(eq("iconText",f3,[]));
f2+="</span>"
}if(kR((eq("content",f3,[])))){f2+=lP("content",f3)
}f2+="</span>";
f2+="</label>";
return f2};
sy.t4.j=eY;
sy.t4.a=0;sy.t5=function mz(f1,f9,f5,f4,M){var f0="";
f0+=lE(M);f0+="<div";
M.a={"class":new yr.scalarAttr("nb-popup _init")};
M.s="div";if(!kk("static",f9)){M.a["data-nb"]=new yr.scalarAttr("popup");
var f6=M.a["class"];
if(f6){M.a["class"]=f6.addscalar(" nb-is-hidden")
}else{M.a["class"]=new yr.scalarAttr(" nb-is-hidden")
}}f0+=f1.a(f1,f1.s(rg,f9),"nb-main-attrs",M);
if(kk("tail",f9)){M.a["data-nb-tail"]=new yr.scalarAttr(lP("tail",f9))
}f0+=lE(M);
var f7=eq("menu",f9,[]);
for(var f3=0,f2=f7.length;
f3<f2;f3++){var f8=f7[f3];
if(kk("separator",f8)){f0+='<div class="nb-popup__separator"></div>'
}else{f0+="<a";
M.a={"class":new yr.scalarAttr("nb-popup__line"),tabindex:new yr.scalarAttr("-1")};
M.s="a";if(kk("href",f8)){M.a.href=new yr.scalarAttr(lP("href",f8))
}f0+=f1.a(f1,f1.s(rg,f8),"nb-main-attrs",M);
f0+=lE(M);f0+=lP("content",f8);
f0+="</a>"}}f0+="</div>";
return f0};
sy.t5.j=eU;
sy.t5.a=0;sy.t6=function my(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("nb-popup _init nb-is-hidden"),"data-nb":new yr.scalarAttr("popup")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(kk("tail",f3)){f0.a["data-nb-tail"]=new yr.scalarAttr(lP("tail",f3))
}f2+=lE(f0);
if(kk("titleContent",f3)){f2+=M.f("f7",f3,f4,f1,f0,eq("titleContent",f3,[]))
}if(kk("content",f3)){f2+=M.f("f6",f3,f4,f1,f0,eq("content",f3,[]))
}f2+="</div>";
return f2};
sy.t6.j=eQ;
sy.t6.a=0;sy.t7=function mx(f1,f9,f5,f4,M){var f0="";
f0+=lE(M);if(kk("static",f9)){f0+=f1.f("f17",f9,f5,f4,M)
}f0+="<div";
M.a={"class":new yr.scalarAttr("nb-popup _init nb-popup_type_modal")};
M.s="div";if(!kk("static",f9)){M.a["data-nb"]=new yr.scalarAttr("popup");
var f6=M.a["class"];
if(f6){M.a["class"]=f6.addscalar(" nb-is-hidden")
}else{M.a["class"]=new yr.scalarAttr(" nb-is-hidden")
}}if(kk("theme",f9)){var f6=M.a["class"];
if(f6){M.a["class"]=f6.addscalar(" nb-popup_theme_"+sx((eq("theme",f9,[]))))
}else{M.a["class"]=new yr.scalarAttr(" nb-popup_theme_"+sx((eq("theme",f9,[]))))
}}f0+=f1.a(f1,f1.s(rg,f9),"nb-main-attrs",M);
f0+=lE(M);f0+='<div class="nb-popup__i">';
if(kk("close",f9)){f0+="<a";
M.a={"class":new yr.scalarAttr("nb-popup__close "+sx((f1.s(eM,f9))))};
M.s="a";if(kR(f1.s(eL,f9))){var f7=f1.s(eK,f9);
for(var f3=0,f2=f7.length;
f3<f2;f3++){var f8=f7[f3];
M.a[(f8.name)]=new yr.scalarAttr(sx(f1.s(rg,f8)))
}}f0+=lE(M);
f0+="</a>"}if(kk("titleContent",f9)){f0+=f1.f("f7",f9,f5,f4,M,eq("titleContent",f9,[]))
}if(kk("content",f9)){f0+=f1.f("f6",f9,f5,f4,M,eq("content",f9,[]))
}if(kk("buttons",f9)){f0+=f1.f("f8",f9,f5,f4,M,eq("buttons",f9,[]))
}f0+="</div>";
f0+="</div>";
return f0};
sy.t7.j=eO;
sy.t7.a=0;sy.t8=function mw(f1,j0,f7,f5,M){var f0="";
f0+=lE(M);f0+="<div";
M.a={"data-nb":new yr.scalarAttr("radio-button"),"class":new yr.scalarAttr("nb-radio-button nb-group nb-radio-button_theme_"+sx((eq("theme",j0,[])))+" nb-radio-button_size_"+sx((eq("size",j0,[])))+" _init")};
M.s="div";f0+=f1.a(f1,f1.s(rg,j0),"nb-main-attrs",M);
f0+=lE(M);var f8=eq("group",j0,[]);
for(var f4=0,f2=f8.length;
f4<f2;f4++){var f9=f8[f4];
var f6="nb-radio-button_"+((yr.externals["nb-uniq"])());
f0+='<span class="nb-radio-button__button nb-complex-group-item">';
f0+="<input";
M.a={"class":new yr.scalarAttr("nb-radio-button__radio"),type:new yr.scalarAttr("radio"),name:new yr.scalarAttr(sx((f1.s(eG,f9)))),value:new yr.scalarAttr(sx((eq("value",f9,[])))),id:new yr.scalarAttr((f6))};
M.s="input";
if(kk("checked",f9)){M.a.checked=new yr.scalarAttr("checked")
}if(kk("disabled",f9)){M.a.disabled=new yr.scalarAttr("disabled")
}if(kk("name",f9)){M.a.name=new yr.scalarAttr(lP("name",f9))
}if(kR(f1.s(e2,f9))){M.a.name=new yr.scalarAttr(sx(f1.s(e2,f9)))
}f0+=lE(M);
f0+="";f0+="<label";
M.a={"for":new yr.scalarAttr((f6)),"class":new yr.scalarAttr("nb-button nb-complex-group-item-subject  js-button nb-button_theme_"+sx((f1.s(eE,f9)))+" nb-button_size_"+sx((f1.s(eD,f9)))),"data-value":new yr.scalarAttr(sx((eq("value",f9,[]))))};
M.s="label";
f0+=f1.a(f1,f1.s(rg,f9),"nb-main-attrs",M);
if(kk("checked",f9)){var f3=M.a["class"];
if(f3){M.a["class"]=f3.addscalar(" nb-button_type_checked")
}else{M.a["class"]=new yr.scalarAttr(" nb-button_type_checked")
}}if(kk("disabled",f9)){var f3=M.a["class"];
if(f3){M.a["class"]=f3.addscalar(" nb-is-disabled js-disabled")
}else{M.a["class"]=new yr.scalarAttr(" nb-is-disabled js-disabled")
}M.a.disabled=new yr.scalarAttr("disabled")
}if(!kR((eq("content",f9,[])))&&kk("icon",f9)){var f3=M.a["class"];
if(f3){M.a["class"]=f3.addscalar(" nb-button_only-icon")
}else{M.a["class"]=new yr.scalarAttr(" nb-button_only-icon")
}}f0+=lE(M);
f0+="<span";
M.a={"class":new yr.scalarAttr("nb-button__text")};
M.s="span";
f0+=f1.a(f1,eq("icon",f9,[]),"nb",M);
f0+=lE(M);if(kR((eq("content",f9,[])))){f0+=lP("content",f9)
}f0+="</span>";
f0+="</label>";
f0+="</span>"
}f0+="</div>";
return f0};
sy.t8.j=eI;
sy.t8.a=0;sy.t9=function mv(f1,j0,f7,f5,M){var f0="";
var f4=(f1.s(eA,j0)).length>0;
f0+=lE(M);f0+="<span";
M.a={"class":new yr.scalarAttr("nb-select _init nb-button nb-select__button nb-button_size_"+sx((eq("size",j0,[])))+" nb-button_theme_"+sx((eq("theme",j0,[])))),"data-nb-direction":new yr.scalarAttr(sx((eq("direction",j0,[])))),"data-nb":new yr.scalarAttr("select"),tabindex:new yr.scalarAttr("0")};
M.s="span";
f0+=f1.a(f1,f1.s(rg,j0),"nb-main-attrs",M);
if(kk("within",j0)){M.a["data-nb-within"]=new yr.scalarAttr(lP("within",j0))
}if(kk("disabled",j0)){var f8=M.a["class"];
if(f8){M.a["class"]=f8.addscalar(" nb-is-disabled")
}else{M.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}}if(kk("maxHeight",j0)){M.a["data-nb-maxheight"]=new yr.scalarAttr(lP("maxHeight",j0))
}f0+=lE(M);
f0+='<span class="nb-button__text">';
var f6=eq("items",j0,[]);
for(var f3=0,f2=f6.length;
f3<f2;f3++){var f9=f6[f3];
if((f4&&kk("selected",f9))||(!f4&&f3==0)){f0+=mC(eq("text",f9,[]))
}}f0+="</span>";
f0+='<span class="nb-select-helper"></span>';
f0+="<select";
M.a={"class":new yr.scalarAttr("nb-select__fallback")};
M.s="select";
if(kR((eq("disabled",j0,[])))){M.a.disabled=new yr.scalarAttr("disabled")
}if(kk("name",j0)){M.a.name=new yr.scalarAttr(lP("name",j0))
}if(kR(f1.s(e2,j0))){M.a.name=new yr.scalarAttr(sx(f1.s(e2,j0)))
}f0+=f1.a(f1,f1.s(rg,j0),"nb-select-options",M);
f0+=lE(M);f0+="</select>";
f0+='<div class="nb-select__dropdown nb-select__dropdown_size_'+dD((eq("size",j0,[])))+" nb-select_theme_"+dD((eq("theme",j0,[])))+'"></div>';
f0+="</span>";
return f0};
sy.t9.j=eC;
sy.t9.a=0;sy.t10=function bM(f2,j2,f9,f7,M){var f1="";
f1+=lE(M);var j0=eq("items",j2,[]);
for(var f6=0,f4=j0.length;
f6<f4;f6++){var j1=j0[f6];
if(kk("group",j1)){f1+='<optgroup label="'+dD((eq("text",j1,[])))+'" data-nb-type="'+dD((eq("type",j1,[])))+'">';
var f5=eq("group",j1,[]);
for(var f3=0,f0=f5.length;
f3<f0;f3++){var f8=f5[f3];
f1+=f2.f("f11",f8,f3,f0,M,f2.s(rg,f8))
}f1+="</optgroup>"
}else{f1+=f2.f("f11",j1,f6,f4,M,f2.s(rg,j1))
}}return f1
};sy.t10.s=[1,eC];
sy.t10.a=[1,0];
sy.t11=function bJ(f3,f8,f7,f5,f0){var f2="";
var f1="";var M={a:{}};
if(kk("id",f8)){f1+=lP("id",f8)
}else{f1+=(yr.externals["nb-uniq"])()
}var f4=f1;
f2+=lE(f0);
f2+="<label";
f0.a={"data-nb":new yr.scalarAttr("checkbox"),"class":new yr.scalarAttr("nb-checkbox nb-checkbox_size_"+sx((eq("size",f8,[])))+" nb-checkbox_type_"+sx((eq("type",f8,[])))+" _init"),"for":new yr.scalarAttr("nb-checkbox_"+(f4))};
f0.s="label";
f2+=f3.a(f3,f3.s(rg,f8),"nb-main-attrs",f0);
if(kk("disabled",f8)){var f6=f0.a["class"];
if(f6){f0.a["class"]=f6.addscalar(" nb-is-disabled")
}else{f0.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}}f2+=lE(f0);
f2+="<input";
f0.a={"class":new yr.scalarAttr("nb-checkbox__input"),id:new yr.scalarAttr("nb-checkbox_"+(f4))};
f0.s="input";
if(k("button",eq("type",f8,[]))){f0.a.type=new yr.scalarAttr("checkbox")
}else{f0.a.type=new yr.scalarAttr(lP("type",f8))
}if(kk("name",f8)){f0.a.name=new yr.scalarAttr(lP("name",f8))
}if(kk("tabindex",f8)){f0.a.tabindex=new yr.scalarAttr(lP("tabindex",f8))
}if(kk("disabled",f8)){f0.a.disabled=new yr.scalarAttr("disabled")
}if(kk("checked",f8)){f0.a.checked=new yr.scalarAttr("checked")
}if((eq("value",f8,[])).length){f0.a.value=new yr.scalarAttr(lP("value",f8))
}f2+=lE(f0);
f2+="";if(!(k("button",eq("type",f8,[])))){f2+='<span class="nb-checkbox__flag nb-checkbox__flag_type_'+dD((eq("type",f8,[])))+'"><span class="nb-checkbox__flag__icon"></span></span>'
}f2+="<span";
f0.a={"class":new yr.scalarAttr("nb-checkbox__label")};
f0.s="span";
if(k("button",eq("type",f8,[]))){var f1="";
var M={a:{}};
f1+=" nb-button nb-button_size_";
f1+=lP("size",f8);
f1+=" nb-button_theme_";
f1+=lP("theme",f8);
var f6=f0.a["class"];
if(f6){f0.a["class"]=f6.addscalar(f1)
}else{f0.a["class"]=new yr.scalarAttr(f1)
}f2+=lE(f0);
f2+='<span class="nb-button__text">';
if(kR((eq("content",f8,[])))){f2+=lP("content",f8)
}f2+="</span>"
}else{f2+=lE(f0);
if(kR((eq("content",f8,[])))){f2+=lP("content",f8)
}}f2+=lE(f0);
f2+="</span>";
f2+="</label>";
return f2};
sy.t11.j=eu;
sy.t11.a=0;
sy.t12=function bH(f2,j0,f7,f5,M){var f0="";
var f1="nb-input_error"+(yr.externals["nb-uniq"])();
f0+=lE(M);f0+="<label";
M.a={"class":new yr.scalarAttr("nb-input nb-input_type_complex")};
M.s="label";
f0+=f2.a(f2,f2.s(rg,j0),"nb-main-attrs",M);
if(kk("hint",j0)||kk("error",j0)||kk("ghost",j0)){var f8=M.a["class"];
if(f8){M.a["class"]=f8.addscalar(" _init")
}else{M.a["class"]=new yr.scalarAttr(" _init")
}}if(!kR((eq("static",j0,[])))){M.a["data-nb"]=new yr.scalarAttr("input")
}if(kk("size",j0)){var f8=M.a["class"];
if(f8){M.a["class"]=f8.addscalar(" nb-input_size_"+sx((eq("size",j0,[]))))
}else{M.a["class"]=new yr.scalarAttr(" nb-input_size_"+sx((eq("size",j0,[]))))
}}if(kk("disabled",j0)){var f8=M.a["class"];
if(f8){M.a["class"]=f8.addscalar(" nb-is-disabled")
}else{M.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}M.a["data-nb-disabled"]=new yr.scalarAttr("true")
}if(kk("ghost",j0)){var f8=M.a["class"];
if(f8){M.a["class"]=f8.addscalar(" is-ghost")
}else{M.a["class"]=new yr.scalarAttr(" is-ghost")
}M.a["data-nb-ghost"]=new yr.scalarAttr("true")
}if(kk("error",j0)){M.a["data-nb-error"]=new yr.scalarAttr('{ "id": "'+(f1)+'", "direction":"'+sx((f2.s(er,j0)))+'"}')
}f0+=lE(M);
if(kk("hint",j0)){f0+='<span class="nb-input__hint">';
f0+='<span class="nb-input__hint-inner">';
if(kR(f2.s(ek,j0))){f0+='<span class="nb-input__hint-ghost"></span>';
f0+='<span class="nb-input__hint-content">';
f0+=mC(f2.s(ei,j0));
f0+="</span>"
}else{f0+=mC(eq("hint",j0,[]))
}f0+="</span>";
f0+="</span>"
}if(kk("error",j0)){f0+=f2.f("f4",j0,f7,f5,M,(function(){var j2={};
var j1={a:{}};
j2["class"]="nb-popup_type_error";
j2.content=yr.nodeset2data(f2.s(eg,j0));
j2.id=f1;return j2
})())}if(kk("reset",j0)){f0+='<span class="nb-input__reset"></span>'
}if(kk("leftContent",j0)){f0+='<span class="nb-input__left">';
f0+=lP("leftContent",j0);
f0+="</span>"
}if(kk("rightContent",j0)){f0+='<span class="nb-input__right">';
f0+=lP("rightContent",j0);
f0+="</span>"
}f0+='<span class="nb-input__content">';
f0+="<input";
M.a={"class":new yr.scalarAttr("nb-input__controller"),value:new yr.scalarAttr(sx((eq("content",j0,[]))))};
M.s="input";
var f6=f2.s(e9,j0);
for(var f4=0,f3=f6.length;
f4<f3;f4++){var f9=f6[f4];
M.a[(f9.name)]=new yr.scalarAttr(sx(f2.s(rg,f9)))
}if(kk("name",j0)){M.a.name=new yr.scalarAttr(lP("name",j0))
}if(kk("disabled",j0)){M.a.disabled=new yr.scalarAttr("disabled")
}f0+=lE(M);
f0+="";f0+='<span class="nb-input__view"> </span>';
f0+="</span>";
f0+="</label>";
return f0};
sy.t12.j=es;
sy.t12.a=0;
sy.t13=function bF(f2,j0,f7,f5,M){var f1="";
var f0="nb-input_error"+(yr.externals["nb-uniq"])();
f1+=lE(M);f1+="<label";
M.a={"class":new yr.scalarAttr("nb-input nb-input_type_complex")};
M.s="label";
f1+=f2.a(f2,f2.s(rg,j0),"nb-main-attrs",M);
if(!kR((eq("static",j0,[])))){M.a["data-nb"]=new yr.scalarAttr("input")
}if(kk("size",j0)){var f8=M.a["class"];
if(f8){M.a["class"]=f8.addscalar(" nb-input_size_"+sx((eq("size",j0,[]))))
}else{M.a["class"]=new yr.scalarAttr(" nb-input_size_"+sx((eq("size",j0,[]))))
}}if(kk("disabled",j0)){var f8=M.a["class"];
if(f8){M.a["class"]=f8.addscalar(" nb-is-disabled")
}else{M.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}M.a["data-nb-disabled"]=new yr.scalarAttr("true")
}if(kk("ghost",j0)){var f8=M.a["class"];
if(f8){M.a["class"]=f8.addscalar(" is-ghost _init")
}else{M.a["class"]=new yr.scalarAttr(" is-ghost _init")
}M.a["data-nb-ghost"]=new yr.scalarAttr("true")
}if(kk("error",j0)){var f8=M.a["class"];
if(f8){M.a["class"]=f8.addscalar(" _init")
}else{M.a["class"]=new yr.scalarAttr(" _init")
}M.a["data-nb-error"]=new yr.scalarAttr('{ "id": "'+(f0)+'", "direction":"'+sx((f2.s(er,j0)))+'" }');
f1+=lE(M);f1+=f2.f("f4",j0,f7,f5,M,(function(){var j2={};
var j1={a:{}};
j2["class"]="nb-popup_type_error";
j2.content=yr.nodeset2data(f2.s(eg,j0));
j2.id=f0;return j2
})())}f1+=lE(M);
if(kk("reset",j0)){f1+='<span class="nb-input__reset"></span>'
}if(kk("leftContent",j0)){f1+='<span class="nb-input__left">';
f1+=lP("leftContent",j0);
f1+="</span>"
}if(kk("rightContent",j0)){f1+='<span class="nb-input__right">';
f1+=lP("rightContent",j0);
f1+="</span>"
}f1+='<span class="nb-input__content">';
f1+="<textarea";
M.a={"class":new yr.scalarAttr("nb-input__controller")};
M.s="textarea";
var f6=f2.s(e9,j0);
for(var f4=0,f3=f6.length;
f4<f3;f4++){var f9=f6[f4];
M.a[(f9.name)]=new yr.scalarAttr(sx(f2.s(rg,f9)))
}if(kk("name",j0)){M.a.name=new yr.scalarAttr(lP("name",j0))
}if(kk("disabled",j0)){M.a.disabled=new yr.scalarAttr("disabled")
}f1+=lE(M);
if(kk("content",j0)){f1+=lP("content",j0)
}f1+="</textarea>";
f1+='<span class="nb-input__view"> </span>';
f1+="</span>";
f1+="</label>";
return f1};
sy.t13.j=ee;
sy.t13.a=0;
sy.t14=function bD(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<input";
f0.a={value:new yr.scalarAttr(sx((eq("content",f3,[])))),"data-nb-type":new yr.scalarAttr("simple"),"class":new yr.scalarAttr("nb-input _init nb-input_type_simple")};
f0.s="input";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(kk("name",f3)){f0.a.name=new yr.scalarAttr(lP("name",f3))
}if(!kR((eq("static",f3,[])))){f0.a["data-nb"]=new yr.scalarAttr("input")
}if(kk("size",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-input_size_"+sx((eq("size",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" nb-input_size_"+sx((eq("size",f3,[]))))
}}if(kk("disabled",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-is-disabled")
}else{f0.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}f0.a.disabled=new yr.scalarAttr("disabled");
f0.a["data-nb-disabled"]=new yr.scalarAttr("true")
}f2+=lE(f0);
f2+="";return f2
};sy.t14.j=ed;
sy.t14.a=0;
sy.t15=function bB(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<textarea";
f0.a={"data-nb-type":new yr.scalarAttr("simple"),"class":new yr.scalarAttr("nb-input _init nb-input_type_simple")};
f0.s="textarea";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(kk("name",f3)){f0.a.name=new yr.scalarAttr(lP("name",f3))
}if(!kR((eq("static",f3,[])))){f0.a["data-nb"]=new yr.scalarAttr("input")
}if(kk("size",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-input_size_"+sx((eq("size",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" nb-input_size_"+sx((eq("size",f3,[]))))
}}if(kk("disabled",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-is-disabled")
}else{f0.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}f0.a.disabled=new yr.scalarAttr("disabled");
f0.a["data-nb-disabled"]=new yr.scalarAttr("true")
}f2+=lE(f0);
if(kk("content",f3)){f2+=lP("content",f3)
}f2+="</textarea>";
return f2};
sy.t15.j=ec;
sy.t15.a=0;
sy.t16=function bz(f1,f9,f5,f4,M){var f0="";
f0+=lE(M);f0+="<div";
M.a={"class":new yr.scalarAttr("nb-input-group"),"data-nb":new yr.scalarAttr("input-group")};
M.s="div";f0+=f1.a(f1,f1.s(rg,f9),"nb-main-attrs",M);
if(kk("disabled",f9)){var f6=M.a["class"];
if(f6){M.a["class"]=f6.addscalar(" nb-input-group_disabled")
}else{M.a["class"]=new yr.scalarAttr(" nb-input-group_disabled")
}M.a["data-nb-disabled"]=new yr.scalarAttr("true")
}f0+=lE(M);
var f7=eq("*",f9,[]);
for(var f3=0,f2=f7.length;
f3<f2;f3++){var f8=f7[f3];
if(f8.name=="button"){f0+=f1.f("f2",f8,f3,f2,M,f1.s(rg,f8))
}else{if(f8.name=="input"){f0+=f1.f("f13",f8,f3,f2,M,f1.s(rg,f8))
}}}f0+="</div>";
return f0};
sy.t16.j=eb;
sy.t16.a=0;
sy.t17=function bx(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"data-nb":new yr.scalarAttr("progress"),"class":new yr.scalarAttr("nb-progress _init nb-progress_type_"+sx((eq("type",f3,[])))),"data-nb-type":new yr.scalarAttr(sx((eq("type",f3,[]))))};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
f2+=lE(f0);
if(kk("bar",f3)){f2+='<div class="nb-progress__bar js-bar" style="width: '+dD((eq("start",f3,[])))+'%"></div>'
}if(kk("title",f3)){f2+='<div class="nb-progress__title js-title">';
if(k("percentage",eq("type",f3,[]))){f2+=ma(lP("start",f3)+"%")
}else{f2+=mC(eq("title",f3,[]))
}f2+="</div>"
}f2+='<input type="hidden" value="'+dD((eq("start",f3,[])))+'%"/>';
f2+="</div>";
return f2};
sy.t17.j=ea;
sy.t17.a=0;
sy.t18=function bw(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<img src="//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" class="nb-icon nb-icon_'+dD((M.s(rg,f3)))+'"/>';
return f2};
sy.t18.j=rd;
sy.t18.a=0;
sy.t19=function bu(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<img src="//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" class="nb-icon nb-icon_'+dD((eq("icon",f3,[])))+" nb-icon_size_"+dD((eq("size",f3,[])))+'"/>';
return f2};
sy.t19.j=dQ;
sy.t19.a=0;
sy.t20=function bj(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("nb-paranja nb-paranja_theme_"+sx((eq("theme",f3,[]))))};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
f2+=lE(f0);
if(kk("content",f3)){f2+=lP("content",f3)
}f2+="</div>";
return f2};
sy.t20.j=dO;
sy.t20.a=0;
sy.t21=function bg(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("nb-island")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(kk("padding",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-island_padding_"+sx((eq("padding",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" nb-island_padding_"+sx((eq("padding",f3,[]))))
}}if(kk("type",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-island_type_"+sx((eq("type",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" nb-island_type_"+sx((eq("type",f3,[]))))
}}f2+=lE(f0);
if(kk("content",f3)){f2+=lP("content",f3)
}f2+="</div>";
return f2};
sy.t21.j=dM;
sy.t21.a=0;
sy.t22=function be(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("nb-dropzone")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(!(k("modal",eq("type",f3,[])))){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-dropzone_type_static")
}else{f0.a["class"]=new yr.scalarAttr(" nb-dropzone_type_static")
}}if(kk("type",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-dropzone_type_"+sx((eq("type",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" nb-dropzone_type_"+sx((eq("type",f3,[]))))
}}f2+=lE(f0);
if(kk("head",f3)){f2+='<div class="nb-dropzone__head">';
f2+=mC(eq("head",f3,[]));
f2+="</div>"
}if(kk("content",f3)){f2+='<div class="nb-dropzone__text">';
if(kk("content",f3)){f2+=lP("content",f3)
}if(!(k("false",eq("button",f3,[])))){f2+=M.f("f2",f3,f5,f1,f0,eq("button",f3,[]))
}f2+="</div>"
}if(k("modal",eq("type",f3,[]))){f2+='<div class="nb-dropzone__cover js-dropzone"></div>'
}f2+="</div>";
return f2};
sy.t22.j=dJ;
sy.t22.a=0;
sy.t23=function bc(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("nb-loader nb-loader_size_"+sx((eq("size",f3,[]))))};
f0.s="span";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("nb-loader__spinner")};
f0.s="span";
if(kk("color",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-loader__spinner_color_"+sx((eq("color",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" nb-loader__spinner_color_"+sx((eq("color",f3,[]))))
}}f2+=lE(f0);
f2+="</span>";
f2+="</span>";
return f2};
sy.t23.j=dH;
sy.t23.a=0;
sy.t24=function ba(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("nb-slider _init nb-slider_size_"+sx((eq("size",f3,[])))+" nb-slider_orientation_"+sx((eq("orientation",f3,[])))+"  nb-slider__handle_type_"+sx((eq("type",f3,[]))))};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
f0.a["data-nb-value"]=new yr.scalarAttr(sx((eq("value",f3,[]))));
if(!kk("static",f3)){f0.a["data-nb"]=new yr.scalarAttr("slider")
}if(kk("disabled",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-is-disabled")
}else{f0.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}}f2+=lE(f0);
f2+='<div class="nb-slider__body nb-slider__body_type_'+dD((eq("type",f3,[])))+'">';
f2+="<label";
f0.a={"class":new yr.scalarAttr("ui-slider-handle")};
f0.s="label";
if(k("s",eq("size",f3,[]))){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-slider__small-handle")
}else{f0.a["class"]=new yr.scalarAttr(" nb-slider__small-handle")
}}else{var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-slider__handle")
}else{f0.a["class"]=new yr.scalarAttr(" nb-slider__handle")
}}if(kR(M.s(dk,f3))){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" "+sx((M.s(dk,f3))))
}else{f0.a["class"]=new yr.scalarAttr(" "+sx((M.s(dk,f3))))
}}f2+=lE(f0);
f2+='<span class="nb-button__text">';
f2+="<input";
f0.a={"class":new yr.scalarAttr("nb-slider__fallback"),type:new yr.scalarAttr("text"),value:new yr.scalarAttr(sx((eq("value",f3,[])))),readonly:new yr.scalarAttr("readonly")};
f0.s="input";
if(kk("name",f3)){f0.a.name=new yr.scalarAttr(sx((eq("name",f3,[]))))
}f2+=lE(f0);
f2+="";f2+="</span>";
f2+="</label>";
f2+="</div>";
f2+="</div>";
return f2};
sy.t24.j=dF;
sy.t24.a=0;
sy.t25=function a8(f2,j1,f8,f6,M){var f1="";
var f0="tabs-"+((yr.externals["nb-uniq"])());
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("nb-tabs nb-tabs_size_"+sx((eq("size",j1,[])))+" _init"),"data-nb":new yr.scalarAttr("tabs")};
M.s="div";if(kk("rise",j1)){var f9=M.a["class"];
if(f9){M.a["class"]=f9.addscalar(" nb-tabs_rise_"+sx((eq("rise",j1,[]))))
}else{M.a["class"]=new yr.scalarAttr(" nb-tabs_rise_"+sx((eq("rise",j1,[]))))
}}f1+=f2.a(f2,f2.s(rg,j1),"nb-main-attrs",M);
f1+=lE(M);f1+='<ul class="nb-tabs__tabs">';
var f7=eq("items",j1,[]);
for(var f5=0,f3=f7.length;
f5<f3;f5++){var j0=f7[f5];
f1+="<li";M.a={"class":new yr.scalarAttr("nb-tabs__tab")};
M.s="li";if(kk("active",j0)){var f4=M.a["class"];
if(f4){M.a["class"]=f4.addscalar(" ui-tabs-active")
}else{M.a["class"]=new yr.scalarAttr(" ui-tabs-active")
}}f1+=lE(M);
f1+='<a class="nb-tabs__link _link" href="#'+eB((f0))+"-"+eB((f5))+'">';
f1+=mC(eq("title",j0,[]));
f1+="</a>";
f1+="</li>"
}f1+="</ul>";
var f7=eq("items",j1,[]);
for(var f5=0,f3=f7.length;
f5<f3;f5++){var j0=f7[f5];
f1+='<div class="nb-tabs__panel" id="'+eB((f0))+"-"+eB((f5))+'">';
if(kk("content",j0)){f1+=lP("content",j0)
}f1+="</div>"
}f1+="</div>";
return f1};
sy.t25.j=di;
sy.t25.a=0;
sy.t26=function a6(f7,j1,f9,f8,f4){var f6="";
f6+=lE(f4);
f6+="<div";
f4.a={"class":new yr.scalarAttr("nb-arrow _init"),"data-nb":new yr.scalarAttr("arrow")};
f4.s="div";
f6+=f7.a(f7,f7.s(rg,j1),"nb-main-attrs",f4);
if(!(k("true",eq("search",j1,[])))){var j0=f4.a["class"];
if(j0){f4.a["class"]=j0.addscalar(" nb-arrow_service")
}else{f4.a["class"]=new yr.scalarAttr(" nb-arrow_service")
}}else{var j0=f4.a["class"];
if(j0){f4.a["class"]=j0.addscalar(" nb-arrow_search")
}else{f4.a["class"]=new yr.scalarAttr(" nb-arrow_search")
}}f6+=lE(f4);
f6+='<div class="nb-arrow__top"></div>';
f6+='<div class="nb-arrow__bottom"></div>';
f6+="<div";
f4.a={"class":new yr.scalarAttr("nb-arrow__content")};
f4.s="div";
if(!(k("true",eq("search",j1,[])))){var j0=f4.a["class"];
if(j0){f4.a["class"]=j0.addscalar(" nb-arrow__service")
}else{f4.a["class"]=new yr.scalarAttr(" nb-arrow__service")
}f6+=lE(f4);
f6+='<a href="'+dD((eq("href",j1,[])))+'" class="_link nb-arrow__service__name">'+mC((eq("text",j1,[])))+"</a>"
}else{var f5={};
var f2={a:{}};
f5.size="m";
f5["class"]="nb-arrow__input";
var f3={};var f0={a:{}};
f3.autocomplete="off";
f3.value=yr.nodeset2data(eq("value",j1,[]));
f3.name="text";
f5.attrs=f3;
var f1=f5;var f5={};
var f2={a:{}};
f5.size="m";
f5.content=yr.nodeset2data(eq("buttonContent",j1,[]));
f5["class"]="nb-arrow__button";
var f3={};var f0={a:{}};
f3.type="submit";
f5.attrs=f3;
var M=f5;var j0=f4.a["class"];
if(j0){f4.a["class"]=j0.addscalar(" nb-arrow__search")
}else{f4.a["class"]=new yr.scalarAttr(" nb-arrow__search")
}f6+=lE(f4);
f6+="<form";
f4.a={};f4.s="form";
if(kk("action",j1)){f4.a.action=new yr.scalarAttr(lP("action",j1))
}f6+=lE(f4);
f6+=f7.f("f2",j1,f9,f8,f4,yr.object2nodeset(M));
if(kk("text",j1)){f6+='<div class="nb-arrow__name__wrap">';
f6+='<a href="'+dD((eq("href",j1,[])))+'" class="nb-arrow__name _link">'+mC((eq("text",j1,[])))+"</a>";
f6+="</div>"
}f6+='<div class="nb-arrow__input__wrap">';
f6+=f7.f("f13",j1,f9,f8,f4,yr.object2nodeset(f1));
f6+="</div>";
if(kk("requests",j1)){f6+='<div class="nb-arrow__requests__wrap">';
f6+='<span class="nb-arrow__input_fake"> </span>';
f6+='<div class="nb-arrow__requests"> — '+mC((eq("requests",j1,[])))+" </div>";
f6+="</div>"
}f6+="</form>"
}f6+=lE(f4);
f6+="</div>";
f6+="</div>";
return f6};
sy.t26.j=dd;
sy.t26.a=0;
sy.t27=function a4(f7,j0,f9,f8,f4){var f6="";
f6+=lE(f4);
f6+="<div";
f4.a={"class":new yr.scalarAttr("nb-header _init"),"data-nb":new yr.scalarAttr("header")};
f4.s="div";
f6+=f7.a(f7,f7.s(rg,j0),"nb-main-attrs",f4);
f6+=lE(f4);
f6+='<div class="nb-header__actions">';
if(k("true",eq("settings",j0,[]))){var f5={};
var f2={a:{}};
var f3={};var f1={a:{}};
f3.icon="settings";
f3.size="m";
f5.icon=f3;
var M=f5;f6+='<div class="nb-header__button">';
f6+="<div";
f4.a={"class":new yr.scalarAttr("nb-header__button__icon")};
f4.s="div";
f6+=f7.a(f7,f7.n(rd,yr.object2nodeset(M)),"nb",f4);
f6+=lE(f4);
f6+="</div>";
f6+="</div>"
}if(k("true",eq("services",j0,[]))){var f5={};
var f2={a:{}};
var f3={};var f1={a:{}};
f3.icon="services";
f3.size="m";
f5.icon=f3;
var f0=f5;f6+='<div class="nb-header__button">';
f6+="<div";
f4.a={"class":new yr.scalarAttr("nb-header__button__icon")};
f4.s="div";
f6+=f7.a(f7,f7.n(rd,yr.object2nodeset(f0)),"nb",f4);
f6+=lE(f4);
f6+="</div>";
f6+="</div>"
}if(kk("user",j0)){f6+=f7.f("f25",j0,f9,f8,f4,eq("user",j0,[]))
}f6+="</div>";
f6+='<div class="nb-header__main">';
f6+='<a href="'+dD((eq("yaHref",j0,[])))+'" class="nb-header__logo"></a>';
f6+=f7.f("f23",j0,f9,f8,f4,eq("arrow",j0,[]));
f6+="</div>";
f6+="</div>";
return f6};
sy.t27.j=c8;
sy.t27.a=0;
sy.t28=function a2(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("nb-user nb-user_size_"+sx((eq("size",f3,[])))+" _init"),"data-nb":new yr.scalarAttr("user")};
f0.s="span";
f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(kk("justify",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-user_justify")
}else{f0.a["class"]=new yr.scalarAttr(" nb-user_justify")
}}if(!kk("rightToLeft",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-user_direction_ltr")
}else{f0.a["class"]=new yr.scalarAttr(" nb-user_direction_ltr")
}f2+=M.a(M,M.s(rg,f3),"nb-user-pic",f0);
f2+=M.a(M,M.s(rg,f3),"nb-user-name",f0)
}else{var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-user_direction_rtl")
}else{f0.a["class"]=new yr.scalarAttr(" nb-user_direction_rtl")
}f2+=M.a(M,M.s(rg,f3),"nb-user-name",f0);
f2+=M.a(M,M.s(rg,f3),"nb-user-pic",f0)
}f2+=lE(f0);
f2+="</span>";
return f2};
sy.t28.j=ql;
sy.t28.a=0;
sy.t29=function a0(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("nb-user__avatar nb-user__avatar_size_"+sx((eq("size",f3,[]))))};
f0.s="span";
if(kk("userpic",f3)){var f4=f0.a.style;
if(f4){f0.a.style=f4.addscalar(" background-image: url('"+sx((eq("userpic",f3,[])))+"')")
}else{f0.a.style=new yr.scalarAttr(" background-image: url('"+sx((eq("userpic",f3,[])))+"')")
}}f2+=lE(f0);
if(lP("notices",f3)>0){f2+='<span class="nb-user__notice-count">';
f2+=mC(eq("notices",f3,[]));
f2+="</span>"
}f2+="</span>";
return f2};
sy.t29.j=ql;
sy.t29.a=0;
sy.t30=function aP(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<span class="nb-user__label">';
f2+='<span class="nb-user__name _link" title="'+dD((eq("username",f3,[])))+'">';
f2+=mC(eq("username",f3,[]));
f2+="</span>";
if(kk("email",f3)){f2+='<span class="nb-user__email" title="'+dD((eq("email",f3,[])))+'">';
f2+=mC(eq("email",f3,[]));
f2+="</span>"
}f2+="</span>";
return f2};
sy.t30.j=ql;
sy.t30.a=0;
sy.t31=function aN(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("nb-suggest _init"),"data-nb":new yr.scalarAttr("suggest")};
f0.s="div";
f0.a["data-countMax"]=new yr.scalarAttr(lP("countMax",f3));
f0.a["data-type"]=new yr.scalarAttr(lP("type",f3));
f0.a["data-size"]=new yr.scalarAttr(lP("size",f3));
f0.a["data-source"]=new yr.scalarAttr(lP("source",f3));
f0.a["data-highlight"]=new yr.scalarAttr(lP("highlight",f3));
f0.a["data-class-suggest"]=new yr.scalarAttr("nb-island nb-island_type_fly nb-suggest__container nb-suggest_size_"+sx((eq("size",f3,[]))));
if(kk("class",f3)){var f4=f0.a["data-class-suggest"];
if(f4){f0.a["data-class-suggest"]=f4.addscalar(" "+sx((eq("classSuggest",f3,[]))))
}else{f0.a["data-class-suggest"]=new yr.scalarAttr(" "+sx((eq("classSuggest",f3,[]))))
}}f2+=M.a(M,M.s(rg,f3),"nb-main-attrs",f0);
if(kk("disabled",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" nb-is-disabled")
}else{f0.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}}f2+=lE(f0);
f2+=M.f("f13",f3,f5,f1,f0,(function(){var f7={};
var f6={a:{}};
f7.size=yr.nodeset2data(eq("size",f3,[]));
f7["class"]="nb-suggest__input";
f7.attrs=yr.nodeset2data(eq("attrsInput",f3,[]));
f7.disabled=yr.nodeset2data(eq("disabled",f3,[]));
f7.name=yr.nodeset2data(eq("name",f3,[]));
f7.content=yr.nodeset2data(eq("content",f3,[]));
return f7})());
f2+="</div>";
return f2};
sy.t31.j=pC;
sy.t31.a=0;
sy.t32=function aL(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<li class="nb-suggest__item">';
f2+="<a";f0.a={"class":new yr.scalarAttr("nb-suggest__item__link")};
f0.s="a";f2+=M.a(M,eq("item",f3,[]),"nb-suggest",f0);
f2+=lE(f0);
f2+="</a>";
f2+="</li>";
return f2};
sy.t32.j=1;
sy.t32.a=1;
sy.t33=function aJ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(kk("labelContent",f3)){f2+=lP("labelContent",f3)
}return f2};
sy.t33.j=pr;
sy.t33.a=1;
sy.t34=function aH(f5,f8,f7,f6,f2){var f4="";
var f3={};var f0={a:{}};
f3.size=yr.nodeset2data(eq("size",f8.doc.root,[]));
f3.mod="suggest";
var f1=[];if(kk("username",f8)){f1+=yr.nodeset2data(eq("username",f8,[]))
}else{if(kk("email",f8)){f1+=yr.nodeset2data(eq("email",f8,[]))
}}f3.username=f1;
f3.rightToLeft=true;
if(kk("username",f8)&&kk("email",f8)){f3.email=yr.nodeset2data(eq("email",f8,[]))
}f3.justify=true;
if(kk("userpic",f8)){f3.userpic=yr.nodeset2data(eq("userpic",f8,[]))
}if(kk("usernameHighlighted",f8)){f3.usernameHighlighted=yr.nodeset2data(eq("usernameHighlighted",f8,[]))
}if(kk("emailHighlighted",f8)){f3.emailHighlighted=yr.nodeset2data(eq("emailHighlighted",f8,[]))
}var M=f3;f4+=lE(f2);
f4+=f5.f("f25",f8,f7,f6,f2,yr.object2nodeset(M));
return f4};
sy.t34.j=pq;
sy.t34.a=1;
sy.t35=function aF(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=sx(M.s(oT,f3));
return f2};
sy.t35.j=oV;
sy.t35.a=0;
sy.t36=function aD(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=sx(M.s(oP,f3));
return f2};
sy.t36.j=oR;
sy.t36.a=0;
sy.t37=function aB(f1,f9,f5,f4,M){var f0="";
f0+=lE(M);f0+="<a";
M.a={tabindex:new yr.scalarAttr("1"),"class":new yr.scalarAttr("nb-toggler nb-toggler_size_"+sx((eq("size",f9,[])))+" _init"),"data-nb":new yr.scalarAttr("toggler")};
M.s="a";f0+=f1.a(f1,f1.s(rg,f9),"nb-main-attrs",M);
if(kk("checked",f9)){var f6=M.a["class"];
if(f6){M.a["class"]=f6.addscalar(" is-checked")
}else{M.a["class"]=new yr.scalarAttr(" is-checked")
}}if(kk("disabled",f9)){var f6=M.a["class"];
if(f6){M.a["class"]=f6.addscalar(" nb-is-disabled")
}else{M.a["class"]=new yr.scalarAttr(" nb-is-disabled")
}}f0+=lE(M);
f0+='<label class="nb-toggler__label">';
f0+="<input";
M.a={type:new yr.scalarAttr("checkbox"),"class":new yr.scalarAttr("nb-toggler__checkbox")};
M.s="input";
var f7=f1.s(e9,f9);
for(var f3=0,f2=f7.length;
f3<f2;f3++){var f8=f7[f3];
M.a[(f8.name)]=new yr.scalarAttr(sx(f1.s(rg,f8)))
}if(kk("name",f9)){M.a.name=new yr.scalarAttr(lP("name",f9))
}if(kk("checked",f9)){M.a.checked=new yr.scalarAttr("checked")
}if(kk("disabled",f9)){M.a.disabled=new yr.scalarAttr("disabled")
}f0+=lE(M);
f0+="";f0+="</label>";
f0+='<div class="nb-toggler__container">';
f0+='<div class="nb-toggler__sticker nb-toggler__sticker_left">';
f0+='<span class="nb-toggler__text">';
f0+=mC(eq("leftText",f9,[]));
f0+="</span>";
f0+="</div>";
f0+='<div class="nb-toggler__sticker nb-toggler__sticker_right">';
f0+='<span class="nb-toggler__text">';
f0+=mC(eq("rightText",f9,[]));
f0+="</span>";
f0+="</div>";
f0+="</div>";
f0+='<div class="nb-toggler__knob"></div>';
f0+="</a>";
return f0};
sy.t37.j=oN;
sy.t37.a=0;
sy.t38=function aA(f5,f8,f7,f6,f2){var f4="";
var f3={};var f0={a:{}};
var f1={};var M={a:{}};
f1.placeholder="Новый плейлист";
f1.tabindex="-1";
f3.attrs=f1;
var f9=f3;f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("add-to-popup popup")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f8),"add-to-popup",true));
f4+=lE(f2);
f4+='<div class="add-to-popup__head">';
f4+='<div class="add-to-popup__item"><span class="icon icon_seq"></span>Слушать далее</div>';
f4+="</div>";
f4+='<div class="add-to-popup__list"></div>';
f4+='<div class="add-to-popup__foot">';
f4+=f5.f("f13",f8,f7,f6,f2,yr.object2nodeset(f9));
f4+="</div>";
f4+="</div>";
return f4};
sy.t38.j=rl;
sy.t38.a=0;
sy.t39=function ay(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="add-to-popup__title">Добавить в плейлист</div>';
f2+=M.a(M,eq("*",f3,[]),"add-to-popup__playlist",f0);
return f2};
sy.t39.j=rl;
sy.t39.a=0;
sy.t40=function an(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="add-to-popup__title">У вас пока нет плейлистов</div>';
return f2};
sy.t40.j=oq;
sy.t40.a=0;
sy.t41=function al(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="add-to-popup__title">Чтобы добавлять треки в плейлисты, нужно авторизоваться</div>';
return f2};
sy.t41.j=ol;
sy.t41.a=0;
sy.t42=function aj(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("add-to-popup__item")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"add-to-popup__playlist"));
f2+=lE(f0);
f2+=mC(eq("title",f3,[]));
f2+="</div>";
return f2};
sy.t42.j=rl;
sy.t42.a=0;
sy.t43=function ai(f5,f8,f7,f6,f2,j0){var f4="";
f4+=lE(f2);
f4+="<span";
f2.a={"class":new yr.scalarAttr("add-to")};
f2.s="span";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f8),"add-to"));
if(!kk("target",f8)){var f3="";
var f0={a:{}};
if(kk("pin",f8)){f3+="button_pin_"+lP("pin",f8)
}else{f3+=""
}var f9=f3;
var f3={};f3.icon="plus";
var f1={};var M={a:{}};
f1.title="Добавить в плейлист";
f3.attrs=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,j0,f9+" add-to__button")
}else{f4+=lE(f2);
f4+='<span class="add-to__button" title="Добавить в плейлист">';
f4+=lP("target",f8);
f4+="</span>"
}f4+=lE(f2);
f4+="</span>";
return f4};
sy.t43.j=rl;
sy.t43.a=0;
sy.t44=function ah(f4,f7,f6,f5,f0,j1){var f3="";
var f2="";var M={a:{}};
if(!j1){f2+=200
}else{f2+=j1
}var f9=f2;
var f8=f4.f("f28",f7,f6,f5,f9);
function f1(j2,j4,j5,j3){return 0
}var j0=[3,0];
f3+=lE(f0);
f3+='<img src="'+eB(((yr.externals.cover)(sx(f4.n(j0,((eq("coverUri",f7,[])).concat(eq("cover",f7,[]))))),f9)))+'" class="album-cover album-cover_size_'+eB((f8))+'"/>';
return f3};
sy.t44.j=rl;
sy.t44.a=0;
sy.t45=function ag(f3,f6,f5,f4,f0){var f2="";
var j3=f3.s(ob,f6);
var j1=(j3).length;
var j2=f3.s(oa,f6);
var j0=(j2).length;
var f9=kk("year",f6)&&lP("year",f6)>0;
var f1="";var M={a:{}};
f1+=f3.a(f3,eq("labels",f6,[]),"album-summary__label",M);
var f8=f1;var f1="";
var M={a:{}};
if(kk("genre",f6)){f1+=(yr.externals.genreName)(lP("genre",f6),true)
}var f7=f1;
f2+=lE(f0);
f2+='<div class="album-summary">';
if(j0){if(j1){f2+="<div>";
f2+='<span class="album-summary__item">';
f2+=ma((yr.externals.plural)(j1,"","Исполнитель: ","Исполнители: ","Исполнители: "));
f2+="</span>";
f2+=f3.a(f3,j3,"artists",f0,false,"");
f2+="</div>"
}f2+="<div>";
f2+='<span class="album-summary__item">';
f2+=ma((yr.externals.plural)(j0,"","Композитор: ","Композиторы: ","Композиторы: "));
f2+="</span>";
f2+=f3.a(f3,j2,"artists",f0,false,"");
f2+="</div>"
}else{f2+='<span class="album-summary__item">';
f2+=ma((yr.externals.plural)(j1,"","Исполнитель: ","Исполнители: ","Исполнители: "));
f2+="</span>";
f2+=f3.a(f3,j3,"artists",f0,false,"")
}f2+='<div class="album-summary__group album-summary__item">';
if(f9){f2+=mC(eq("year",f6,[]))
}if(f8){if(f9){f2+=f3.a(f3,f3.s(rg,f6),"separator",f0)
}f2+=f8}if(f7){if(f9||f8){f2+=f3.a(f3,f3.s(rg,f6),"separator",f0)
}f2+='<a class="link link_mimic" href="/genre/'+dD((eq("genre",f6,[])))+'">'+ma((f7))+"</a>"
}f2+="</div>";
f2+="</div>";
return f2};
sy.t45.j=rl;
sy.t45.a=0;
sy.t46=function af(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(f4){f2+=", "
}f2+=mC(eq("name",f3,[]));
return f2};
sy.t46.j=rl;
sy.t46.a=0;
sy.t47=function ae(f3,j0,f8,f5,f0,j2,j1){var f2="";
var f1="";var M={a:{}};
if(kk("duplicates",j0)){f1+="+ ещё "+((eq("duplicates",j0,[])).length)+" "+((yr.externals.plural)((eq("duplicates",j0,[])).length,"альбомов","альбом","альбома","альбомов"))
}var f9=f1;
var f1="";var M={a:{}};
if(kk("version",j0)){f1+=sx((eq("title",j0,[])))+" ("+sx((eq("version",j0,[])))+") "+(f9)
}else{f1+=sx((eq("title",j0,[])))+" "+(f9)
}var f7=f1;
var f4=f3.s(ob,j0);
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("album")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,j0),"album"));
if(j2){var f6=f0.a["class"];
if(f6){f0.a["class"]=f6.addscalar(" album_theme_"+(j2))
}else{f0.a["class"]=new yr.scalarAttr(" album_theme_"+(j2))
}}f2+=lE(f0);
if(j1){f2+='<a href="/album/'+dD((eq("id",j0,[])))+'" class="album__link"></a>'
}f2+=f3.a(f3,f3.s(rg,j0),"album-cover",f0,200);
if((j2=="line")){f2+="<div";
f0.a={"class":new yr.scalarAttr("album__controls")};
f0.s="div";
var f1={};f1.icon="play";
f1.text="Слушать";
f2+=f3.a(f3,yr.object2nodeset(f1),"button",f0,"","album__play");
f2+=lE(f0);
f2+=" ";var f1={};
f1.album=yr.nodeset2data(f3.s(rg,j0));
f1.pin="right";
f2+=f3.a(f3,yr.object2nodeset(f1),"like",f0);
var f1={};f1.album=yr.nodeset2data(f3.s(rg,j0));
f1.pin="left";
f2+=f3.a(f3,yr.object2nodeset(f1),"add-to",f0);
f2+="</div>"
}else{var f1={};
f1.icon="play";
f2+=f3.a(f3,yr.object2nodeset(f1),"button",f0,"","album__play")
}f2+='<div class="album__title" title="'+eB((f7))+'">';
f2+='<a href="/album/'+dD((eq("id",j0,[])))+'" class="link">';
f2+=mC(eq("title",j0,[]));
f2+="</a>";
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("album__artist")};
f0.s="div";
var f1="";var M={a:{}};
f1+=f3.a(f3,f4,"artists__text",M);
f0.a.title=new yr.xmlAttr(f1);
f2+=f3.a(f3,f4,"artists",f0,false,"");
f2+=lE(f0);
f2+="</div>";
f2+='<div class="album__year">';
f2+=mC(eq("year",j0,[]));
if(kk("version",j0)){if(kk("year",j0)){f2+=f3.a(f3,f3.s(rg,j0),"separator",f0)
}f2+='<span class="album__version">';
f2+=mC((eq("version",j0,[])));
f2+="</span>"
}f2+="</div>";
f2+="</div>";
return f2};
sy.t47.j=rl;
sy.t47.a=0;
sy.t48=function ad(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"album",f0,"compact");
return f2};
sy.t48.j=rl;
sy.t48.a=0;
sy.t49=function ac(M,f5,f6,f2,f1,f4){var f3="";
var f0=(yr.externals.cover)(sx(M.s(nF,f5)),200,"",150);
f3+=lE(f1);
f3+='<div class="artist-pics artist-pics_type_cover">';
f3+='<img src="'+eB((f0))+'" class="artist-pics__pic"/>';
f3+="</div>";
return f3};
sy.t49.j=rl;
sy.t49.a=0;
sy.t50=function ab(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"artist-pics_type_empty",f0);
return f2};
sy.t50.j=rl;
sy.t50.a=0;
sy.t51=function aa(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,eq("pics",f3,[]),"artist-pics_type_yandex",f0,(""+yr.nodeset2scalar(M.s(nB,f3))));
return f2};
sy.t51.j=nD;
sy.t51.a=0;
sy.t52=function Z(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"artist-pics_type_cover",f0,(""+yr.nodeset2scalar(M.s(nB,f3))));
return f2};
sy.t52.j=np;
sy.t52.a=0;
sy.t53=function Y(f2,j1,f9,f7,f0,j3){var f1="";
var j2="//yandex.ru/images/search"+lP("query",j1)+"&type=face";
function M(j4,j6,j7,j5){return j7<3
}var f6=[0,"items",2,M];
f1+=lE(f0);
f1+='<div class="artist-pics">';
var f8=f2.s(f6,j1);
for(var f5=0,f3=f8.length;
f5<f3;f5++){var j0=f8[f5];
f1+='<a href="'+eB((j2))+'" target="_blank">';
f1+="<div";
f0.a={"class":new yr.scalarAttr("artist-pics__pic artist-pics__pic_"+(f5+1))};
f0.s="div";
var f4=f0.a.style;
if(f4){f0.a.style=f4.addscalar('background-image: url("'+sx((eq("thumb",j0,[])))+'&n=24");')
}else{f0.a.style=new yr.scalarAttr('background-image: url("'+sx((eq("thumb",j0,[])))+'&n=24");')
}f1+=lE(f0);
f1+="</div>";
f1+="</a>"}f1+='<a href="'+eB((j2))+'" target="_blank" class="artist-pics__all">Яндекс Картинки</a>';
f1+="</div>";
return f1};
sy.t53.j=rl;
sy.t53.a=0;
sy.t54=function X(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="artist-pics artist-pics_type_cover">';
f2+='<img src="/blocks/artist-pics/artist_no_photo.png" class="artist-pics__pic"/>';
f2+="</div>";
return f2};
sy.t54.j=rl;
sy.t54.a=0;
sy.t55=function W(f2,f5,f4,f3,M){var f1="";
var f8=(yr.externals.cover)(sx(f2.s(nF,f5)),80,true);
var f7=(f2.s(nm,f5)).concat(f2.s(nl,f5));
var f6=f2.s(nk,f5);
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("artist")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f2.s(rg,f5),"artist"));
f1+=lE(M);f1+='<div class="artist__cover">';
f1+='<img src="'+eB((f8))+'" class="artist__cover-img"/>';
f1+="</div>";
f1+='<div class="artist__hover">';
f1+='<div class="artist__bg"></div>';
var f0={};f0.icon="play";
f1+=f2.a(f2,yr.object2nodeset(f0),"button",M,"M","button_wide artist__play");
f1+="</div>";
f1+="<div";
M.a={"class":new yr.scalarAttr("artist__action-bar")};
M.s="div";var f0={};
f0.artist=yr.nodeset2data(eq("artist",f5,[]));
f1+=f2.a(f2,yr.object2nodeset(f0),"like",M);
f1+=lE(M);f1+="</div>";
f1+="<div";
M.a={"class":new yr.scalarAttr("artist__name")};
M.s="div";f1+=f2.a(f2,eq("artist",f5,[]),"artists",M,false,"");
f1+=lE(M);f1+="</div>";
f1+='<div class="artist__genre">';
if(kR((f7))){f1+=ma((yr.externals.plural)(sx(f7),"","%s трек","%s трека","%s треков")+" ")
}f1+="<div";
M.a={};M.s="div";
var f0={};f0.genres=yr.nodeset2data(f6);
f1+=f2.a(f2,yr.object2nodeset(f0),"genres",M);
f1+=lE(M);f1+="</div>";
f1+="</div>";
f1+="<div";
M.a={"class":new yr.scalarAttr("artist__users")};
M.s="div";f1+=f2.a(f2,eq("users",f5,[]),"artist__user",M);
f1+=lE(M);f1+="</div>";
f1+="</div>";
return f1};
sy.t55.j=rl;
sy.t55.a=0;
sy.t56=function V(f3,f6,f5,f4,f0){var f2="";
var f1={};var M={a:{}};
f1.userpic=(yr.externals.userpic)(lP("uid",f6));
f1.size="s";
var f7=f1;f2+=lE(f0);
f2+="<a";f0.a={href:new yr.scalarAttr("/users/"+sx((eq("login",f6,[]))))};
f0.s="a";f0.a.title=new yr.scalarAttr(lP("name",f6));
f2+=lE(f0);
f2+=f3.f("f25",f6,f5,f4,f0,yr.object2nodeset(f7));
f2+="</a>";
return f2};
sy.t56.j=rl;
sy.t56.a=0;
sy.t57=function U(f1,f4,f3,f2,M,f7,f5){f5=(f5===undefined)?"link_mute":f5;
var f0="";var f6=f1.s(m5,f4);
f0+=f1.a(f1,f1.s(rg,f4),"artists__cont",M,f7,f5,f3);
f0+=f1.a(f1,f6,"artists__cont",M,f7,f5,true);
return f0};
sy.t57.j=rl;
sy.t57.a=0;
sy.t58=function T(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(f4){f2+="<span>, </span>"
}f2+="<span>"+mC((eq("name",f3,[])))+"</span>";
return f2};
sy.t58.j=m4;
sy.t58.a=0;
sy.t59=function S(f1,f4,f3,f2,M,f7,f6,f5){var f0="";
f0+=lE(M);if(f5){f0+='<span class="'+eB((f6))+'">, </span>'
}if(f7||kk("various",f4)){f0+='<span class="'+eB((f6))+'">'+mC((eq("name",f4,[])))+"</span>"
}else{f0+='<a href="/artist/'+dD((eq("id",f4,[])))+'" class="link '+eB((f6))+'">'+mC((eq("name",f4,[])))+"</a>"
}return f0};
sy.t59.j=rl;
sy.t59.a=0;
sy.t60=function R(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(f4){f2+=", "
}f2+=mC(eq("name",f3,[]));
return f2};
sy.t60.j=rl;
sy.t60.a=0;
sy.t61=function Q(f5,f9,f7,f6,f2){var f4="";
var f3={};var f0={a:{}};
f3.size="l";
f3["class"]="auth__input";
var f1={};var M={a:{}};
f1.name="login";
f1.placeholder="Логин";
f3.attrs=f1;
var j1=f3;var f3={};
var f0={a:{}};
f3.size="l";
f3["class"]="auth__input";
var f1={};var M={a:{}};
f1.type="password";
f1.name="password";
f1.placeholder="Пароль";
f1.maxlength="256";
f3.attrs=f1;
var j0=f3;var f3={};
var f0={a:{}};
f3.size="l";
f3["class"]="auth__captcha-input";
var f1={};var M={a:{}};
f1.name="captcha_answer";
f1.tabindex="0";
f1.autocomplete="off";
f3.attrs=f1;
var f8=f3;f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("popup auth")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f9),"auth"));
f4+=lE(f2);
f4+='<form action="https://passport.yandex.ru/passport?mode=embeddedauth" method="POST" class="auth__form">';
f4+='<div class="auth__username">';
f4+=f5.f("f13",f9,f7,f6,f2,yr.object2nodeset(j1));
f4+='<span unselectable="on" class="auth__clear"></span>';
f4+="</div>";
f4+='<div class="auth__password">';
f4+=f5.f("f13",f9,f7,f6,f2,yr.object2nodeset(j0));
f4+='<span unselectable="on" class="auth__clear"></span>';
f4+="</div>";
f4+='<div class="auth__captcha">';
f4+="<div>Введите символы:</div>";
f4+='<div class="auth__captcha-stamp"><img class="auth__captcha-img" src="" alt=""/></div>';
f4+='<div class="auth__captcha-row">';
f4+=f5.f("f13",f9,f7,f6,f2,yr.object2nodeset(f8));
f4+="</div>";
f4+='<span class="auth__captcha-cantread link">Другой код</span>';
f4+="</div>";
f4+='<div class="auth__row">';
f4+='<div class="auth__haunter">';
f4+='<input type="hidden" name="twoweeks" value="yes"/>';
f4+='<input type="checkbox" autocomplete="off" id="auth-haunter"/>';
f4+='<label class="auth__haunter-checkbox" for="auth-haunter">';
f4+='<span class="icon icon_tip icon_size_XL"></span>';
f4+="</label>";
f4+='<label for="auth-haunter">Чужой компьютер</label>';
f4+="</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("auth__button")};
f2.s="div";
var f3={};f3.text="Войти";
var f1={};var M={a:{}};
f1.type="submit";
f3.attrs=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"L","button_action");
f4+=lE(f2);
f4+="</div>";
f4+="</div>";
f4+='<div class="auth__row auth__social"></div>';
f4+="<div";
f2.a={"class":new yr.scalarAttr("auth__row auth__row_last")};
f2.s="div";
var f3={};f3.text="Вспомнить пароль";
f3.href="https://passport.yandex.ru/passport?mode=restore";
var f1={};var M={a:{}};
f1.target="_blank";
f3.attrs=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"","button_transparent auth__remember");
var f3={};f3.text="Регистрация";
f3.href="https://passport.yandex.ru/passport?mode=register&from=musicNew";
var f1={};var M={a:{}};
f1.target="_blank";
f3.attrs=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"","button_transparent auth__register");
f4+=lE(f2);
f4+="</div>";
var f3={};f3.text="";
var f1={};var M={a:{}};
f1.my="left center";
f1.at="right+15 center";
f3.position=f1;
f3["class"]="tooltip_theme_light";
var f1={};var M={a:{}};
f1.className="tooltip__tail_left-center";
f3.tail=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"tooltip",f2);
f4+="</form>";
f4+="</div>";
return f4};
sy.t61.j=rl;
sy.t61.a=0;
sy.t62=function P(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(m1,f3),"auth__provider",f0);
return f2};
sy.t62.j=rl;
sy.t62.a=0;
sy.t63=function O(f7,j1,f9,f8,f4){var f6="";
var f5={};var f2={a:{}};
var f3={};var f0={a:{}};
f3.provider=yr.nodeset2data(eq("name",j1,[]));
var f1="";var M={a:{}};
if(k("facebook",eq("name",j1,[]))){f1+="user_friends,user_likes"
}else{if(k("vkontakte",eq("name",j1,[]))){f1+="friends,audio"
}else{f1+=""
}}f3.scope=f1;
f5.params=f3;
var j0=f5;f6+=lE(f4);
f6+="<span";
f4.a={"class":new yr.scalarAttr("auth__provider auth__provider_"+sx((eq("code",j1,[])))+" social-bind"),title:new yr.scalarAttr(sx((eq("display_name",j1,[])))),"data-name":new yr.scalarAttr(sx((eq("name",j1,[]))))};
f4.s="span";
f4.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(yr.object2nodeset(j0),"social-bind"));
f6+=lE(f4);
f6+="</span>";
return f6};
sy.t63.j=rl;
sy.t63.a=0;
sy.t64=function N(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("bar")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"player-progress",f0);
f2+=M.a(M,M.s(rg,f3),"player-controls",f0);
f2+=M.a(M,M.s(rg,f3),"volume",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t64.j=rl;
sy.t64.a=0;
sy.t65=function L(f2,j0,f9,f6,M){var f1="";
function j3(j5,j7,j8,j6){return 0
}var j2=[0,"subscriptions",0,"autoRenewable",3,0];
var f8=f2.s(j2,j0);
var f5=f2.s(mP,j0);
var f7=f2.s(mN,j0);
var f4=f2.s(mM,j0);
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("billing-status")};
M.s="div";if(kk("pdd",j0)){var f0={};
f0.text="Неактивна";
f0.note="Невозможна оплата через аккаунт Почты для доменов";
f0.mode="negative";
f1+=f2.a(f2,yr.object2nodeset(f0),"notice",M)
}else{if(kR(f8)){var f0={};
f0.text="Активна";
f1+=f2.a(f2,yr.object2nodeset(f0),"notice",M);
f1+=lE(M);f1+='<span class="billing-status__note">Оплачено до '+ma(((yr.externals.formatDate)(sx(f2.n(mL,f8)),"%d %B %Y года")))+"</span>"
}else{if(kR(f5)){var f0={};
f0.text="Активна";
f1+=f2.a(f2,yr.object2nodeset(f0),"notice",M);
f1+=lE(M);f1+='<span class="billing-status__note">Оплачено до '+ma(((yr.externals.formatDate)(sx(f2.n(mK,f5)),"%d %B %Y года")))+"</span>"
}else{if(kR(f7)){var f0={};
f0.text="Активна";
f0.note="Музыкальный безлимит от Билайн";
f1+=f2.a(f2,yr.object2nodeset(f0),"notice",M)
}else{if(kR(f4)){var f0={};
f0.text="Активна";
f1+=f2.a(f2,yr.object2nodeset(f0),"notice",M);
f1+=lE(M);f1+='<span class="billing-status__note">Пробный период до '+ma(((yr.externals.formatDate)(sx(f4),"%d %B %Y года")))+"</span>"
}else{function j4(j5,j7,j8,j6){return 0
}var j1=[0,"orders",3,0];
var f3=f2.s(j1,j0);
if(kR(f3)&&kR(f2.n(mI,f3))&&kR(f2.n(mF,f3))){var f0={};
f0.text="Неактивна";
f0.mode="negative";
f1+=f2.a(f2,yr.object2nodeset(f0),"notice",M);
f1+=lE(M);f1+='<span class="billing-status__note">Последний платеж был '+ma(((yr.externals.formatDate)(sx(f2.n(mF,f3)),"%d %B %Y года")))+"</span>"
}else{if(kR(f3)&&(kR(f2.n(mJ,f3))&&!kR(f2.n(mI,f3))||kR(f2.n(mH,f3)))){var f0={};
f0.text="Неактивна";
f0.note="Ошибка платежа";
f0.mode="negative";
f1+=f2.a(f2,yr.object2nodeset(f0),"notice",M)
}else{if(kR(f3)){var f0={};
f0.text="Неактивна";
f0.note="Ожидание зачисления";
f0.mode="negative";
f1+=f2.a(f2,yr.object2nodeset(f0),"notice",M)
}else{var f0={};
f0.text="Неактивна";
f0.mode="negative";
f1+=f2.a(f2,yr.object2nodeset(f0),"notice",M);
f1+=lE(M);f1+='<span class="billing-status__note">Ещё ни разу не оплачена</span>'
}}}}}}}}f1+=lE(M);
f1+="</div>";
return f1};
sy.t65.j=rl;
sy.t65.a=0;
sy.t66=function K(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("button-arrow")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"button-arrow"));
if(kk("class",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" "+sx((eq("class",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" "+sx((eq("class",f3,[]))))
}}f2+=lE(f0);
f2+='<span class="button-arrow__text">'+mC((eq("text",f3,[])))+"</span>";
f2+='<span class="icon icon_dropdown icon_size_L"></span>';
f2+="</div>";
return f2};
sy.t66.j=rl;
sy.t66.a=0;
sy.t67=function J(f6,j3,j1,f9,f1,f4,f3){f3=(f3===undefined)?"":f3;
var f5="";var f2=[];
if(kk("group",j3)){f2=eq("group",j3,[])
}else{f2=eq("*",j3,[])
}var f0=f2;
var M=(f0).length;
f5+=lE(f1);
f5+="<span";
f1.a={"class":new yr.scalarAttr("button-group")};
f1.s="span";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f6.s(rg,j3),"button-group"));
var j0=f0;for(var f8=0,f7=j0.length;
f8<f7;f8++){var j2=j0[f8];
f5+=f6.a(f6,f6.s(rg,j2),"button",f1,f4,f3+f6.f("f29",j2,f8,f7,M,f8))
}f5+=lE(f1);
f5+="</span>";
return f5};
sy.t67.j=rl;
sy.t67.a=0;
sy.t68=function I(f5,f9,f8,f6,f2,f0){var f4="";
var f3="";var f1={a:{}};
if(f0){f3+="js-radio "+f0
}else{f3+="js-radio"
}var M=f3;f4+=lE(f2);
f4+="<span";
f2.a={"class":new yr.scalarAttr("button-radio")};
f2.s="span";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f9),"button-radio",true));
if(!kR(f5.s(mj,f9))){var f7=f2.a["class"];
if(f7){f2.a["class"]=f7.addscalar(" button-radio_hidden")
}else{f2.a["class"]=new yr.scalarAttr(" button-radio_hidden")
}}var f3={};
f3.icon="radio";
f3.text=yr.nodeset2data(eq("text",f9,[]));
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"",M);
f4+=lE(f2);
f4+="</span>";
return f4};
sy.t68.j=rl;
sy.t68.a=0;
sy.t69=function H(f3,f6,f5,f4,f0){var f2="";
var f1="";var M={a:{}};
if(k("google",eq("type",f6,[]))){f1+="https://play.google.com/store/apps/details?id=ru.yandex.music"
}else{if(k("apple",eq("type",f6,[]))){f1+="https://itunes.apple.com/ru/app/andeks.muzyka/id520797969&mt=8"
}}var f7=f1;
f2+=lE(f0);
f2+='<a class="button-store button-store_'+dD((eq("type",f6,[])))+'" href="'+eB((f7))+'" target="_blank"></a>';
return f2};
sy.t69.j=rl;
sy.t69.a=0;
sy.t70=function G(M,f3,f4,f1,f0,f6,f5){var f2="";
f2+=lE(f0);
if(kk("href",f3)||kk("use-link",f3)){f2+="<a";
f0.a={};f0.s="a";
if(!kk("checked",f3)&&kk("href",f3)){f0.a.href=new yr.scalarAttr(lP("href",f3));
if(kk("target",f3)){f0.a.target=new yr.scalarAttr(lP("target",f3))
}}f2+=M.a(M,M.s(rg,f3),"button__class",f0,f6,f5);
f2+=M.a(M,M.s(rg,f3),"button__attrs",f0);
f2+=M.a(M,M.s(rg,f3),"button__content",f0,f6);
f2+=lE(f0);
f2+="</a>"}else{f2+="<button";
f0.a={};f0.s="button";
f2+=M.a(M,M.s(rg,f3),"button__class",f0,f6,f5);
f2+=M.a(M,M.s(rg,f3),"button__attrs",f0);
f2+=M.a(M,M.s(rg,f3),"button__content",f0,f6);
f2+=lE(f0);
f2+="</button>"
}return f2};
sy.t70.j=rl;
sy.t70.a=0;
sy.t71=function F(f3,f6,f5,f4,f0,f9,f8){var f2="";
var f1="";var M={a:{}};
if(f9){f1+=" button_size_"+(f9)
}if(f8){f1+=" "+(f8)
}if(kk("icon",f6)){f1+=" button_ico"
}if(kk("checked",f6)){f1+=" button_checked"
}var f7=f1;
f0.a["class"]=new yr.scalarAttr("button"+(f7));
return f2};
sy.t71.j=rl;
sy.t71.a=0;
sy.t72=function E(f1,f8,f5,f4,M){var f0="";
var f6=f1.s(e9,f8);
for(var f3=0,f2=f6.length;
f3<f2;f3++){var f7=f6[f3];
M.a[(f7.name)]=new yr.scalarAttr(sx(f1.s(rg,f7)))
}return f0};
sy.t72.j=rl;
sy.t72.a=0;
sy.t73=function D(M,f4,f5,f1,f0,f3){var f2="";
if(k("right",eq("iconPosition",f4,[]))){f2+=M.a(M,M.s(rg,f4),"button__label",f0," button__label_left");
f2+=M.a(M,M.s(rg,f4),"button__icon",f0,f3)
}else{f2+=M.a(M,M.s(rg,f4),"button__icon",f0,f3);
f2+=M.a(M,M.s(rg,f4),"button__label",f0)
}return f2};
sy.t73.j=rl;
sy.t73.a=0;
sy.t74=function C(M,f4,f6,f1,f0,f3){var f2="";
f2+=lE(f0);
if(kk("icon",f4)){f2+="<span";
f0.a={"class":new yr.scalarAttr("icon icon_"+sx((eq("icon",f4,[]))))};
f0.s="span";
if(f3=="S"){var f5=f0.a["class"];
if(f5){f0.a["class"]=f5.addscalar(" icon_size_M")
}else{f0.a["class"]=new yr.scalarAttr(" icon_size_M")
}}else{if(f3=="L"){var f5=f0.a["class"];
if(f5){f0.a["class"]=f5.addscalar(" icon_size_XL")
}else{f0.a["class"]=new yr.scalarAttr(" icon_size_XL")
}}else{var f5=f0.a["class"];
if(f5){f0.a["class"]=f5.addscalar(" icon_size_L")
}else{f0.a["class"]=new yr.scalarAttr(" icon_size_L")
}}}f2+=lE(f0);
f2+="</span>"
}return f2};
sy.t74.j=rl;
sy.t74.a=0;
sy.t75=function B(M,f4,f5,f2,f1,f0){var f3="";
f3+=lE(f1);
if(kk("text",f4)){f3+='<span class="button__label'+eB((f0))+'">'+mC((eq("text",f4,[])))+"</span>"
}return f3};
sy.t75.j=rl;
sy.t75.a=0;
sy.t76=function A(M,f4,f5,f2,f1){var f3="";
var f0="#schedule";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("concert")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"concert"));
f3+=lE(f1);
f3+='<div class="concert__date">';
f3+='<div class="concert__month">'+ma(((yr.externals.formatDate)(lP("datetime",f4),"%b")))+"</div>";
f3+=ma((yr.externals.formatDate)(lP("datetime",f4),"%d"));
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("concert__title")};
f1.s="div";
f3+=M.a(M,eq("artist",f4,[]),"artists",f1,false,"");
f3+=lE(f1);
f3+="</div>";
f3+='<a href="'+dD((eq("afishaUrl",f4,[])))+eB((f0))+'" class="link link_mute concert__link" target="_blank">на Яндекс.Афише</a>';
f3+='<span class="concert__coord">Место: </span>';
f3+=mC((eq("place",f4,[])))+", "+mC((eq("city",f4,[])))+" ";
f3+='<span class="concert__coord">Время: </span>';
f3+=ma((yr.externals.formatDate)(lP("datetime",f4),"%w, %d %B, %H:%M"));
f3+="</div>";
return f3};
sy.t76.j=rl;
sy.t76.a=0;
sy.t77=function z(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("day")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"day"));
f2+=M.a(M,M.s(rg,f3),"day__head",f0,f4);
f2+=M.a(M,eq("events",f3,[]),"event",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t77.j=rl;
sy.t77.a=0;
sy.t78=function y(f4,f7,f6,f5,f1,j2){var f3="";
var j3=(yr.externals.dateRelation)(sx(f4.s(lY,f7)),lP("day",f7));
var j1=(yr.externals.dateRelationValue)(sx(f4.s(lY,f7)),lP("day",f7));
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("day__head")};
f1.s="div";
if(kk("tracksToPlay",f7)){var f2={};
f2.icon="play";
var f0={};var M={a:{}};
f0.title="Будут звучать треки из ваших рекомендаций";
f2.attrs=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"button",f1,"","button_wide day__play")
}f3+=lE(f1);
if(j3){f3+=ma((j3))+", "
}f3+=ma((yr.externals.formatDate)(lP("day",f7),"%d %B"));
if(kk("tracksToPlay",f7)){var j0=(yr.externals.round)((yr.externals.sum)(f4.s(lV,f7))/(1000*60));
if(j0){var f9=j0%60;
var f8=(j0-f9)/60;
f3+='<span class="day__duration" title="Время звучания треков из ваших рекомендаций">';
f3+='<span class="icon icon_time"></span>';
f3+=ma((yr.externals.plural)(f8,"","%s час","%s часа","%s часов"));
if(f8&&f9){f3+=", "
}f3+=ma((yr.externals.plural)(f9,"","%s минута","%s минуты","%s минут"));
f3+=" музыки";
if(j1==0){f3+='<span class="day__static-text">';
f3+=" — послушать рекомендованные сегодня треки";
f3+="</span>"
}f3+="</span>"
}}if(j2==0&&kR(f4.s(lU,f7))){f3+='<span class="icon icon_plus_thin day__more" title="Маловато будет!"></span>'
}f3+="</div>";
return f3};
sy.t78.j=l0;
sy.t78.a=0;
sy.t79=function x(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="debug">';
f2+='<div class="debug__desc">Отладочная информация (видна только внутри сети Яндекса)</div>';
if(kk("message",f3)){f2+="<h3>JS Error: "+mC((eq("message",f3,[])))+"</h3>";
f2+="<pre>"+mC((eq("stack",f3,[])))+"</pre>"
}else{f2+="<h3>500: "+mC((eq("error",f3,[])))+"</h3>";
f2+="<pre>"+mC((eq("text",f3,[])))+"</pre>"
}f2+="</div>";
return f2};
sy.t79.j=rl;
sy.t79.a=0;
sy.t80=function w(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("donate")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"donate",true));
f2+=lE(f0);
f2+='<form class="donate__form" action="https://money.yandex.ru/quickpay/confirm.xml" method="POST" target="_blank">';
f2+='<p class="donate__subtitle">Поддержать исполнителя: '+mC((eq("name",f3,[])))+"</p>";
f2+=M.a(M,M.s(rg,f3),"donate__intro",f0);
f2+=M.a(M,M.s(rg,f3),"donate__payment",f0);
f2+=M.a(M,M.s(rg,f3),"donate__other",f0);
f2+="</form>";
f2+="</div>";
return f2};
sy.t80.j=rl;
sy.t80.a=0;
sy.t81=function v(f5,j0,f7,f6,f2){var f4="";
var f3={};var f0={a:{}};
f3.text="Яндекс.Деньги";
var f1={};var M={a:{}};
f1.type="button";
f3.attrs=f1;
var f9=f3;var f3={};
var f0={a:{}};
f3.text="Другой способ";
var f1={};var M={a:{}};
f1.type="button";
f3.attrs=f1;
var f8=f3;f4+=lE(f2);
f4+='<div class="donate__slide donate__slide_intro">';
f4+='<p class="donate__static-text">';
f4+="Вы можете поддержать любимого артиста Яндекс.Деньгами или перевести ему деньги ";
f4+="другим способом — например, через платёжный терминал, банкомат или онлайн-банк.";
f4+="</p>";
f4+='<p class="donate__subtitle">Выберите удобный вариант:</p>';
f4+="<div";
f2.a={"class":new yr.scalarAttr("donate__choose-bar")};
f2.s="div";
f4+=f5.a(f5,yr.object2nodeset(f9),"button",f2,"","donate__button_ya-money");
f4+=lE(f2);
f4+=" ";f4+=f5.a(f5,yr.object2nodeset(f8),"button",f2,"","donate__button_other");
f4+="</div>";
f4+="</div>";
return f4};
sy.t81.j=rl;
sy.t81.a=0;
sy.t82=function u(f5,j0,f9,f7,f2){var f4="";
var f3={};var f0={a:{}};
f3.text="Подтвердить";
var f1={};var M={a:{}};
f1.type="submit";
f3.attrs=f1;
var f8=f3;var f3={};
var f0={a:{}};
f3.text="Отмена";
var f1={};var M={a:{}};
f1.type="reset";
f3.attrs=f1;
var f6=f3;f4+=lE(f2);
f4+='<div class="donate__slide donate__slide_payment donate__slide_hidden">';
f4+='<p class="donate__static-text">';
f4+="Укажите сумму перевода и нажмите кнопку «Подтвердить». После этого вы перейдете на сайт Яндекс.Денег, где ";
f4+="будет завершен платеж. Если у вас нет счета в Яндекс.Деньгах, вы сможете его создать.";
f4+="</p>";
f4+='<p class="donate__static-text">';
f4+="Комиссия за перевод: 0,5 %.";
f4+="</p>";
f4+='<p class="donate__subtitle">';
f4+="Перечислить исполнителю";
f4+=" ";f4+='<input type="text" name="sum" class="donate__sum" maxlength="10" value="100"/>';
f4+=" ";f4+="рублей";
f4+="</p>";
f4+='<label class="donate__error donate__error_sum donate__error_hidden">Неверный формат суммы</label>';
f4+='<input type="text" name="comment" class="donate__comment" placeholder="Передать артисту привет вместе с деньгами"/>';
f4+="<div";
f2.a={"class":new yr.scalarAttr("donate__actions-bar")};
f2.s="div";
f4+=f5.a(f5,yr.object2nodeset(f8),"button",f2,"","donate__button_submit");
f4+=lE(f2);
f4+=" ";f4+=f5.a(f5,yr.object2nodeset(f6),"button",f2,"","donate__button_reset");
f4+="</div>";
f4+='<div class="donate__controls">';
f4+='<input type="hidden" name="receiver" value="'+dD((eq("yaMoneyId",j0,[])))+'"/>';
f4+='<input type="hidden" name="targets" value="Поддержать исполнителя '+dD((eq("name",j0,[])))+' на Яндекс.Музыке"/>';
f4+='<input type="hidden" name="comment-needed" value="true"/>';
f4+='<input type="hidden" name="writable-targets" value="false"/>';
f4+='<input type="hidden" name="writable-sum" value="false"/>';
f4+='<input type="hidden" name="quickpay-form" value="donate"/>';
f4+="</div>";
f4+="</div>";
return f4};
sy.t82.j=rl;
sy.t82.a=0;
sy.t83=function t(f5,f9,f8,f7,f2){var f4="";
var f3={};var f0={a:{}};
f3.text="Отмена";
var f1={};var M={a:{}};
f1.type="reset";
f3.attrs=f1;
var f6=f3;f4+=lE(f2);
f4+='<div class="donate__slide donate__slide_other donate__slide_hidden">';
f4+='<p class="donate__static-text">';
f4+="Перевод можно сделать без регистрации в Яндекс.Деньгах. Пожалуйста, выберите удобный способ перечисления ";
f4+="средств и пополните счёт исполнителя.";
f4+="</p>";
f4+='<p class="donate__static-text">Номер счета исполнителя: '+mC((eq("yaMoneyId",f9,[])))+"</p>";
f4+='<p class="donate__static-text">';
f4+='<a href="https://money.yandex.ru/prepaid/" target="_blank">Как пополнить счет</a>';
f4+="</p>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("donate__actions-bar")};
f2.s="div";
f4+=f5.a(f5,yr.object2nodeset(f6),"button",f2,"","donate__button_reset");
f4+=lE(f2);
f4+="</div>";
f4+="</div>";
return f4};
sy.t83.j=rl;
sy.t83.a=0;
sy.t84=function s(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("email-selector email-selector_hidden popup")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"email-selector",true));
f2+=lE(f0);
f2+="<ul";f0.a={"class":new yr.scalarAttr("email-selector__emails")};
f0.s="ul";f2+=M.a(M,eq("emails",f3,[]),"email-selector__item",f0);
f2+=lE(f0);
f2+="</ul>";
f2+='<div class="email-selector__line"></div>';
f2+='<div class="email-selector__add-email">';
f2+='<a class="link link_pseudo" href="//validator.yandex.ru/" target="_blank">Добавить e-mail</a>';
f2+="</div>";
f2+="</div>";
return f2};
sy.t84.j=rl;
sy.t84.a=0;
sy.t85=function r(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<li";f0.a={"class":new yr.scalarAttr("email-selector__item")};
f0.s="li";if(kk("isSelected",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" email-selector__item_selected")
}else{f0.a["class"]=new yr.scalarAttr(" email-selector__item_selected")
}}f2+=lE(f0);
f2+='<span class="email-selector__mark"></span>';
f2+=mC(eq("email",f3,[]));
f2+="</li>";
return f2};
sy.t85.j=rl;
sy.t85.a=0;
sy.t86=function q(f3,f7,f6,f5,f0){var f2="";
var f1="";var M={a:{}};
if(kk("isOwner",f7)){f1+=lP("subtitle",f7)
}else{if(!kk("subscribed",f7)){f1+="Подпишитесь на пользователя, чтобы быть в курсе его обновлений."
}}var f4=f1;
f2+=lE(f0);
f2+='<div class="empty">';
f2+='<div class="empty__title">';
f2+=mC(eq("title",f7,[]));
f2+="</div>";
if(f4){f2+='<div class="empty__subtitle">';
f2+=f4;f2+="</div>"
}if(kk("isOwner",f7)&&kk("img",f7)){f2+='<div class="empty__img empty__img_'+dD((eq("img",f7,[])))+'"></div>'
}f2+="</div>";
return f2};
sy.t86.j=rl;
sy.t86.a=0;
sy.t87=function p(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,eq("title",f3,[]),"event__title-text",f0);
return f2};
sy.t87.j=rl;
sy.t87.a=0;
sy.t88=function o(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t88.j=rl;
sy.t88.a=0;
sy.t89=function n(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC(eq("text",f3,[]));
return f2};
sy.t89.j=jW;
sy.t89.a=0;
sy.t90=function m(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<a href="/artist/'+dD((eq("id",f3,[])))+'" class="link link_major">'+mC((eq("text",f3,[])))+"</a>";
return f2};
sy.t90.j=jU;
sy.t90.a=0;
sy.t91=function l(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<a class="link link_major" href="/genre/'+dD((eq("name",f3,[])))+'">'+mC((eq("text",f3,[])))+"</a>";
return f2};
sy.t91.j=jS;
sy.t91.a=0;
sy.t92=function j(f3,f7,f6,f5,f0){var f2="";
var f1={};var M={a:{}};
f1.username=yr.nodeset2data(eq("text",f7,[]));
f1.userpic=(yr.externals.userpic)(lP("uid",f7));
f1.size="s";
var f4=f1;f2+=lE(f0);
f2+='<a href="/users/'+dD((eq("login",f7,[])))+'" class="link link_major">';
f2+=f3.f("f25",f7,f6,f5,f0,yr.object2nodeset(f4));
f2+="</a>";
return f2};
sy.t92.j=jR;
sy.t92.a=0;
sy.t93=function i(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC(eq("text",f3,[]));
return f2};
sy.t93.j=jP;
sy.t93.a=0;
sy.t94=function h(f3,f7,f6,f5,M){var f2="";
var f4="/users/"+sx((f3.s(jt,f7)))+"/playlists/"+sx((f3.s(jq,f7)));
var f1=!(k(3,f3.s(jq,f7)));
f2+=lE(M);f2+="<div";
M.a={"class":new yr.scalarAttr("event__playlist")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(eq("playlist",f7,[]),"event__playlist",true));
f2+=f3.a(f3,eq("playlist",f7,[]),"playlist-cover",M,true,"event__playlist-image");
f2+=lE(M);f2+='<div class="event__playlist-title">';
f2+='<a href="'+eB(((yr.externals.assimilateLink)(f4)))+'" class="link">';
f2+=mC(f3.s(jo,f7));
f2+="</a>";
f2+="</div>";
f2+='<div class="event__playlist-info">';
f2+=ma((yr.externals.plural)(sx(f3.s(jn,f7)),"","%s трек","%s трека","%s треков"));
f2+="</div>";
f2+='<div class="event__playlist-description">';
if(kR((eq("someArtists",f7,[])))){f2+="В плейлисте: ";
f2+=f3.a(f3,eq("someArtists",f7,[]),"artists",M,false,"");
if((lP("artistsCount",f7)>(eq("someArtists",f7,[])).length)){f2+=", …"
}}f2+="</div>";
f2+="<div";
M.a={"class":new yr.scalarAttr("event__playlist-controls")};
M.s="div";var f0={};
f0.icon="play";
f0.text="Слушать";
f2+=f3.a(f3,yr.object2nodeset(f0),"button",M,"","event__play");
f2+=lE(M);f2+=" ";
if(f1){var f0={};
f0.playlist=yr.nodeset2data(eq("playlist",f7,[]));
f0.pin="right";
f2+=f3.a(f3,yr.object2nodeset(f0),"like",M)
}var f0={};
f0.playlist=yr.nodeset2data(eq("playlist",f7,[]));
if(f1){f0.pin="left"
}f2+=f3.a(f3,yr.object2nodeset(f0),"add-to",M);
f2+="</div>";
f2+="</div>";
return f2};
sy.t94.j=rl;
sy.t94.a=0;
sy.t95=function g(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t95.j=rl;
sy.t95.a=0;
sy.t96=function f(M,f3,f4,f1,f0,f5){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("event")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"event"));
f2+=lE(f0);
f2+='<div class="event__notify event__notify_bg'+eB((f5))+'">';
f2+="<div";
f0.a={"class":new yr.scalarAttr("event__notify-wrap")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"event__notify-content",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
f2+="</div>";
return f2};
sy.t96.j=rl;
sy.t96.a=0;
sy.t97=function e(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__notify-layout",f0,1);
return f2};
sy.t97.j=jk;
sy.t97.a=0;
sy.t98=function d(f4,f7,f6,f5,f0){var f3="";
f3+=lE(f0);
f3+='<div class="event__title">Сделайте свои рекомендации точнее</div>';
f3+='<div class="event__notify-desc">Загрузите свои аудиозаписи ВКонтакте и получите возможность узнавать, что слушают ваши друзья.</div>';
f3+="<div";
f0.a={"class":new yr.scalarAttr("event__notify-actions")};
f0.s="div";
var f2={};f2.text="Привязать ВКонтакте";
f2.buttonClass="button_action button_size_L";
var f1={};var M={a:{}};
f1.provider="vkontakte";
f1.scope="friends,audio";
f2.params=f1;
f3+=f4.a(f4,yr.object2nodeset(f2),"social-bind",f0);
var f2={};f2.text="Позже";
f3+=f4.a(f4,yr.object2nodeset(f2),"button",f0,"L","event__cancel");
f3+=lE(f0);
f3+="</div>";
return f3};
sy.t98.j=jk;
sy.t98.a=0;
sy.t99=function c(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+='<div class="event__title">Отлично!</div>';
f3+='<div class="event__notify-desc">Теперь вы сможете видеть, какая музыка нравится вашим друзьям.</div>';
f3+='<div class="event__notify-desc">Через несколько минут ваши треки будут доступны в разделе «<a href="/users/'+dD((eq("login",f4,[])))+'/playlists">Моя музыка</a>».</div>';
f3+="<div";
f1.a={"class":new yr.scalarAttr("event__notify-actions")};
f1.s="div";
var f0={};f0.text="Закрыть";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"L","event__cancel");
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t99.j=rl;
sy.t99.a=0;
sy.t100=function pV(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__notify-layout",f0,1);
return f2};
sy.t100.j=jj;
sy.t100.a=0;
sy.t101=function pT(f4,f7,f6,f5,f0){var f3="";
f3+=lE(f0);
f3+='<div class="event__title">Привяжите аккаунт Facebook</div>';
f3+='<div class="event__notify-desc">и слушайте музыку с друзьями.</div>';
f3+="<div";
f0.a={"class":new yr.scalarAttr("event__notify-actions")};
f0.s="div";
var f2={};f2.text="Привязать Facebook";
f2.buttonClass="button_action button_size_L";
var f1={};var M={a:{}};
f1.provider="facebook";
f1.scope="user_friends,user_likes";
f2.params=f1;
f3+=f4.a(f4,yr.object2nodeset(f2),"social-bind",f0);
var f2={};f2.text="Позже";
f3+=f4.a(f4,yr.object2nodeset(f2),"button",f0,"L","event__cancel");
f3+=lE(f0);
f3+="</div>";
return f3};
sy.t101.j=jj;
sy.t101.a=0;
sy.t102=function pR(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+='<div class="event__title">Отлично!</div>';
f3+='<div class="event__notify-desc">Теперь вы сможете видеть, какая музыка нравится вашим друзьям.</div>';
f3+="<div";
f1.a={"class":new yr.scalarAttr("event__notify-actions")};
f1.s="div";
var f0={};f0.text="Закрыть";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"L","event__cancel");
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t102.j=rl;
sy.t102.a=0;
sy.t103=function pP(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__notify-layout",f0,2);
return f2};
sy.t103.j=jh;
sy.t103.a=0;
sy.t104=function pN(f5,f8,f7,f6,f2){var f4="";
var f0=((yr.externals.protocol)())+"//"+((yr.externals.hostname)())+"/";
f4+=lE(f2);
f4+='<div class="event__title">Авторизуйтесь,</div>';
f4+='<div class="event__notify-desc">чтобы получать персональные рекомендации, сохранять понравившуюся музыку в личный раздел и видеть любимые треки друзей.</div>';
f4+="<div";
f2.a={"class":new yr.scalarAttr("event__notify-actions")};
f2.s="div";
var f3={};f3.text="Войти";
f3.href="https://passport.yandex.ru/auth?msg=music&retpath="+((yr.externals.urlencode)(f0));
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"L","button_action event__log-in");
var f3={};f3.text="Войти через ВКонтакте";
f3.buttonClass="button_size_L";
var f1={};var M={a:{}};
f1.provider="vkontakte";
f1.scope="friends,audio";
f3.params=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"social-bind",f2);
var f3={};f3.text="Войти через Facebook";
f3.buttonClass="button_size_L";
var f1={};var M={a:{}};
f1.provider="facebook";
f1.scope="user_friends,user_likes";
f3.params=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"social-bind",f2);
f4+=lE(f2);
f4+="</div>";
return f4};
sy.t104.j=jh;
sy.t104.a=0;
sy.t105=function pL(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t105.j=rl;
sy.t105.a=0;
sy.t106=function pJ(f4,f7,f6,f5,f1){var f3="";
var f2=[];if(kk("typeForFrom",f7)){f2=eq("typeForFrom",f7,[])
}else{f2=eq("type",f7,[])
}var M=f2;f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("event")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f4.s(rg,f7),"event"));
var f2="";var f0={a:{}};
if(kk("promoId",f7)){f2+=(yr.externals.fromName)(sx(M))+"_"+lP("promoId",f7)
}else{f2+=(yr.externals.fromName)(sx(M))
}f1.a["data-card"]=new yr.scalarAttr(f2);
f3+=f4.a(f4,f4.s(rg,f7),"event__remove",f1);
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("event__title")};
f1.s="div";
f3+=f4.a(f4,f4.s(rg,f7),"event__title",f1);
f3+=lE(f1);
f3+="</div>";
f3+=f4.a(f4,f4.s(rg,f7),"event__content",f1);
f3+="</div>";
return f3};
sy.t106.j=rl;
sy.t106.a=0;
sy.t107=function pG(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t107.j=rl;
sy.t107.a=0;
sy.t108=function pE(f4,f7,f6,f5,f1){var f3="";
var f2={};var f0={a:{}};
f2.username=yr.nodeset2data(eq("name",f7,[]));
f2.userpic=(yr.externals.userpic)(lP("uid",f7));
f2.size="s";
var M=f2;f3+=lE(f1);
f3+='<a href="/users/'+dD((eq("login",f7,[])))+'" class="link link_major">';
f3+=f4.f("f25",f7,f6,f5,f1,yr.object2nodeset(M));
f3+="</a>";
return f3};
sy.t108.j=rl;
sy.t108.a=0;
sy.t109=function pB(f3,f7,f5,f4,f0,j5){var f2="";
var f1="";var M={a:{}};
if(j5){f1+=j5
}else{f1+=4
}var j3=f1;
if((eq("albums",f7,[])).length==1){f2+=f3.a(f3,eq("albums",f7,[]),"album",f0,"line")
}else{function f8(j6,j8,j9,j7){return j9<j3
}var j0=[0,"albums",2,f8];
var j4=f3.s(j0,f7);
function f6(j6,j8,j9,j7){return j9>=j3
}var f9=[0,"albums",2,f6];
var j2=f3.s(f9,f7);
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("event__albums")};
f0.s="div";
f2+=f3.a(f3,j4,"album",f0);
f2+=lE(f0);
if((j2).length){var j1=(yr.externals.plural)((j2).length,"","один альбом","%s альбома","%s альбомов");
f2+="<div";
f0.a={"class":new yr.scalarAttr("event__more")};
f0.s="div";
var f1={};f1.text="Показать еще "+(j1);
f2+=f3.a(f3,yr.object2nodeset(f1),"button",f0,"L");
f2+=lE(f0);
f2+="</div>";
f2+=f3.a(f3,j2,"album",f0)
}f2+="</div>"
}return f2};
sy.t109.j=rl;
sy.t109.a=0;
sy.t110=function pl(f3,f7,f6,f4,f0,f8){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("event__remove")};
f0.s="div";
var f1="";var M={a:{}};
if(kk("id",f7)&&!(k("notification",eq("type",f7,[])))){f1+="Удалить событие из ленты рекомендаций"
}else{f1+="Закрыть"
}f0.a.title=new yr.scalarAttr(f1);
f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("icon icon_size_L")};
f0.s="span";
var f1="";var M={a:{}};
if(f8){f1+=" icon_remove_white"
}else{f1+=" icon_remove"
}var f5=f0.a["class"];
if(f5){f0.a["class"]=f5.addscalar(f1)
}else{f0.a["class"]=new yr.scalarAttr(f1)
}f2+=lE(f0);
f2+="</span>";
f2+="</div>";
return f2};
sy.t110.j=rl;
sy.t110.a=0;
sy.t111=function pj(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("event event_removed")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"event"));
f2+=M.a(M,M.s(rg,f3),"event__remove",f0);
f2+=lE(f0);
f2+='<div class="event__title">Мы учли ваше пожелание</div>';
f2+='<div class="event__description">';
f2+="Чем больше музыки вы слушаете, тем точнее становятся рекомендации.";
f2+="<br/>";
f2+="Используйте ";
f2+='<span class="icon icon_size_L icon_like_on"></span>';
f2+=" на треках, альбомах, исполнителях или жанрах, чтобы мы делали рекомендации точнее и интереснее.";
f2+="</div>";
f2+='<div class="event__description">';
f2+="Об ошибках вы можете сообщить через ";
f2+='<a href="//feedback2.yandex.ru/newmusic/" target="_blank">форму обратной связи</a>';
f2+=".";f2+="</div>";
f2+="</div>";
return f2};
sy.t111.j=rl;
sy.t111.a=0;
sy.t112=function ph(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t112.j=iU;
sy.t112.a=0;
sy.t113=function pf(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__albums",f0);
return f2};
sy.t113.j=iU;
sy.t113.a=0;
sy.t114=function pd(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t114.j=iT;
sy.t114.a=0;
sy.t115=function pb(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__albums",f0);
return f2};
sy.t115.j=iT;
sy.t115.a=0;
sy.t116=function o8(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t116.j=iS;
sy.t116.a=0;
sy.t117=function o5(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("event__artists")};
f0.s="div";
f2+=M.a(M,eq("similarArtists",f3,[]),"artist",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t117.j=iS;
sy.t117.a=0;
sy.t118=function o2(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t118.j=iP;
sy.t118.a=0;
sy.t119=function oZ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("event__artists")};
f0.s="div";
f2+=M.a(M,eq("artists",f3,[]),"artist",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t119.j=iP;
sy.t119.a=0;
sy.t120=function oH(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t120.j=iy;
sy.t120.a=0;
sy.t121=function oF(f5,f9,f8,f7,f0){var f4="";
function f2(j2,j4,j5,j3){return j5>0
}var f6=[0,"playlists",2,f2];
var j1=f5.s(f6,f9);
function M(j2,j4,j5,j3){return 0
}var f3=[0,"playlists",3,0];
f4+=f5.a(f5,f5.s(f3,f9),"event__playlist",f0);
f4+=lE(f0);
if((j1).length){var j0=(yr.externals.plural)((j1).length,"","один плейлист","%s плейлиста","%s плейлистов");
f4+="<div";
f0.a={"class":new yr.scalarAttr("event__more js-event-more")};
f0.s="div";
var f1={};f1.text="Показать еще "+(j0);
f4+=f5.a(f5,yr.object2nodeset(f1),"button",f0,"L");
f4+=lE(f0);
f4+="</div>";
f4+=f5.a(f5,j1,"event__playlist",f0)
}return f4};
sy.t121.j=iy;
sy.t121.a=0;
sy.t122=function oD(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC(eq("title",f3,[]));
return f2};
sy.t122.j=ix;
sy.t122.a=0;
sy.t123=function oB(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("event event_promo")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"event"));
f2+=M.a(M,M.s(rg,f3),"promo",f0);
f2+=M.a(M,M.s(rg,f3),"event__remove",f0,kk("background",f3)&&(yr.externals.isColorDark)(lP("background",f3)));
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t123.j=ix;
sy.t123.a=0;
sy.t124=function oz(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t124.j=iu;
sy.t124.a=0;
sy.t125=function ox(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(kk("description",f3)){f2+='<div class="event__description">'+(lP("description",f3))+"</div>"
}f2+=M.a(M,M.s(rg,f3),"event__albums",f0);
return f2};
sy.t125.j=iu;
sy.t125.a=0;
sy.t126=function ou(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t126.j=ir;
sy.t126.a=0;
sy.t127=function ot(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(kk("description",f3)){f2+='<div class="event__description">'+(lP("description",f3))+"</div>"
}f2+="<div";
f0.a={"class":new yr.scalarAttr("event__playlists")};
f0.s="div";
f2+=M.a(M,M.s(ig,f3),"playlist",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t127.j=ir;
sy.t127.a=0;
sy.t128=function op(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t128.j=id;
sy.t128.a=0;
sy.t129=function on(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(kk("description",f3)){f2+='<div class="event__description">'+(lP("description",f3))+"</div>"
}f2+=M.a(M,eq("tracks",f3,[]),"track_type_full",f0);
return f2};
sy.t129.j=id;
sy.t129.a=0;
sy.t130=function nX(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t130.j=ib;
sy.t130.a=0;
sy.t131=function nV(f4,f7,f6,f5,f0){var f3="";
f3+=lE(f0);
f3+="<div";
f0.a={};f0.s="div";
f3+=f4.a(f4,eq("tracks",f7,[]),"track_type_chart",f0);
f3+=lE(f0);
f3+="</div>";
if(kk("radioIsAvailable",f7)&&!(k("all",eq("genre",f7,[])))){f3+="<div";
f0.a={"class":new yr.scalarAttr("event__controls")};
f0.s="div";
var f2={};f2.text="Слушать радио жанра";
var f1={};var M={a:{}};
f1.available=true;
f2.status=f1;
f2.genre=yr.nodeset2data(eq("genre",f7,[]));
f3+=f4.a(f4,yr.object2nodeset(f2),"button-radio",f0);
f3+=lE(f0);
f3+="</div>"
}return f3};
sy.t131.j=ib;
sy.t131.a=0;
sy.t132=function nT(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t132.j=h9;
sy.t132.a=0;
sy.t133=function nR(f4,f7,f6,f5,f0){var f3="";
f3+=lE(f0);
f3+="<div";
f0.a={};f0.s="div";
f3+=f4.a(f4,eq("tracks",f7,[]),"track_type_chart",f0);
f3+=lE(f0);
f3+="</div>";
if(kk("radioIsAvailable",f7)&&!(k("all",eq("genre",f7,[])))){f3+="<div";
f0.a={"class":new yr.scalarAttr("event__controls")};
f0.s="div";
var f2={};f2.text="Слушать радио жанра";
var f1={};var M={a:{}};
f1.available=true;
f2.status=f1;
f2.genre=yr.nodeset2data(eq("similarGenre",f7,[]));
f3+=f4.a(f4,yr.object2nodeset(f2),"button-radio",f0);
f3+=lE(f0);
f3+="</div>"
}return f3};
sy.t133.j=h9;
sy.t133.a=0;
sy.t134=function nQ(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t134.j=h7;
sy.t134.a=0;
sy.t135=function nP(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={};f0.s="div";
f2+=M.a(M,eq("socialTracks",f3,[]),"event__social-track",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t135.j=h7;
sy.t135.a=0;
sy.t136=function nO(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,eq("track",f3,[]),"track_type_social",f0);
return f2};
sy.t136.j=rl;
sy.t136.a=0;
sy.t137=function nN(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t137.j=hV;
sy.t137.a=0;
sy.t138=function nL(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__albums",f0);
return f2};
sy.t138.j=hV;
sy.t138.a=0;
sy.t139=function nJ(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t139.j=hT;
sy.t139.a=0;
sy.t140=function nA(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"concert",f0);
return f2};
sy.t140.j=hT;
sy.t140.a=0;
sy.t141=function nz(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t141.j=hS;
sy.t141.a=0;
sy.t142=function ny(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,eq("artists",f3,[]),"artist",f0);
return f2};
sy.t142.j=hS;
sy.t142.a=0;
sy.t143=function nx(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t143.j=hR;
sy.t143.a=0;
sy.t144=function nw(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,eq("tracks",f3,[]),"track_type_full",f0);
return f2};
sy.t144.j=hR;
sy.t144.a=0;
sy.t145=function nv(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t145.j=hQ;
sy.t145.a=0;
sy.t146=function nu(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={};f0.s="div";
f2+=M.a(M,eq("tracks",f3,[]),"track_type_query",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t146.j=hQ;
sy.t146.a=0;
sy.t147=function nt(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t147.j=hP;
sy.t147.a=0;
sy.t148=function ns(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__albums",f0);
return f2};
sy.t148.j=hP;
sy.t148.a=0;
sy.t149=function nq(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t149.j=hO;
sy.t149.a=0;
sy.t150=function nh(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,eq("tracks",f3,[]),"track_type_full",f0);
if(kk("albums",f3)){f2+=M.a(M,M.s(rg,f3),"event__albums",f0)
}f2+=M.a(M,eq("artists",f3,[]),"artist",f0);
return f2};
sy.t150.j=hO;
sy.t150.a=0;
sy.t151=function ng(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t151.j=hN;
sy.t151.a=0;
sy.t152=function nf(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={};f0.s="div";
f2+=M.a(M,eq("tracks",f3,[]),"track_type_chart",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t152.j=hN;
sy.t152.a=0;
sy.t153=function ne(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t153.j=hM;
sy.t153.a=0;
sy.t154=function nd(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(hL,f3),"artist",f0);
return f2};
sy.t154.j=hM;
sy.t154.a=0;
sy.t155=function nc(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t155.j=hB;
sy.t155.a=0;
sy.t156=function nb(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__albums",f0);
return f2};
sy.t156.j=hB;
sy.t156.a=0;
sy.t157=function na(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t157.j=hz;
sy.t157.a=0;
sy.t158=function m9(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,eq("artists",f3,[]),"artist",f0);
return f2};
sy.t158.j=hz;
sy.t158.a=0;
sy.t159=function m7(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t159.j=hy;
sy.t159.a=0;
sy.t160=function mY(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,eq("tracks",f3,[]),"track_type_full",f0);
return f2};
sy.t160.j=hy;
sy.t160.a=0;
sy.t161=function mX(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__layout",f0);
return f2};
sy.t161.j=hx;
sy.t161.a=0;
sy.t162=function mW(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("event__radios")};
f0.s="div";
f2+=M.a(M,M.s(hw,f3),"radio",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t162.j=hx;
sy.t162.a=0;
sy.t163=function mV(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"event__notify",f0);
return f2};
sy.t163.j=hv;
sy.t163.a=0;
sy.t164=function mU(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("folder")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"folder"));
f3+=lE(f1);
f3+='<span class="folder__icon"></span>';
f3+='<div class="folder__info">';
f3+='<a href="/disk'+eB((lP("parent",f4)+sx(M.s(ht,f4))))+'" class="link folder__title">'+mC((M.s(ht,f4)))+"</a>";
f3+='<div class="folder__tracks">';
f3+=ma(((yr.externals.plural)(sx(M.s(hs,f4)),"нет треков","%s трек","%s трека","%s треков")));
f3+="</div>";
f3+="</div>";
var f0={};f0.folder=yr.nodeset2data(M.s(rg,f4));
f3+=M.a(M,yr.object2nodeset(f0),"add-to",f1);
f3+="</div>";
return f3};
sy.t164.j=rl;
sy.t164.a=0;
sy.t165=function mT(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("footer")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"footer",true));
f3+=lE(f1);
f3+='<div class="footer__left">';
f3+='<div class="footer__static-text">';
f3+='<a class="link" href="//help.yandex.ru/music/new-music/new-music.xml" target="_blank">Помощь</a>';
f3+="</div>";
f3+='<div class="footer__static-text">';
f3+='<a class="link" href="//feedback2.yandex.ru/newmusic/" target="_blank">Обратная связь</a>';
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("footer__static-text")};
f1.s="div";
var f0={};f0.text="Подписаться";
f0["class"]="footer__arrow";
f3+=M.a(M,yr.object2nodeset(f0),"button-arrow",f1);
f3+=M.a(M,M.s(rg,f4),"footer__social",f1);
f3+=lE(f1);
f3+="</div>";
f3+='<div class="footer__static-text">';
f3+='<a class="link footer__opt-out" href="#" target="top">Вернуться на старую версию</a>';
f3+="</div>";
f3+="<div";
f1.a={};f1.s="div";
var f0={};f0.type="google";
f3+=M.a(M,yr.object2nodeset(f0),"button-store",f1);
var f0={};f0.type="apple";
f3+=M.a(M,yr.object2nodeset(f0),"button-store",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
f3+='<div class="footer__right">';
f3+='<div class="footer__static-text">';
f3+='<a class="link" href="//advertising.yandex.ru/media/banner/music.xml?from=music-ru" target="_blank">Реклама</a>';
f3+="</div>";
f3+='<div class="footer__static-text">';
f3+='<a class="link" href="//help.yandex.ru/music/performers-and-copyright-holders/copyright.xml" target="_blank">© &amp; ℗</a>';
f3+="</div>";
f3+='<div class="footer__static-text">';
f3+='<a class="link" href="//music.yandex.ru/partners/" target="_blank">Партнерская программа</a>';
f3+="</div>";
f3+='<div class="footer__static-text">';
f3+="© 2014, ";
f3+='<a class="link" href="//www.yandex.ru/" target="_blank">Яндекс</a>';
f3+="</div>";
f3+="</div>";
f3+="</div>";
return f3};
sy.t165.j=rl;
sy.t165.a=0;
sy.t166=function mS(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<ul";f0.a={"class":new yr.scalarAttr("footer__social")};
f0.s="ul";f2+=M.a(M,M.s(rg,f3),"footer__social-link",f0,"//twitter.com/#!/yandexmusic","yandexmusic");
f2+=M.a(M,M.s(rg,f3),"footer__social-link",f0,"//vk.com/yandexmusic","yandexmusic");
f2+=lE(f0);
f2+="</ul>";
return f2};
sy.t166.j=rl;
sy.t166.a=0;
sy.t167=function mR(f1,f5,f4,f2,M,f8,f7){var f0="";
var f6="//favicon.yandex.net/favicon/"+(yr.externals.hostname)(f8);
f0+=lE(M);f0+='<li class="footer__social-link">';
f0+="<a";M.a={"class":new yr.scalarAttr("link"),href:new yr.scalarAttr((f8)),target:new yr.scalarAttr("_blank")};
M.s="a";var f3=M.a.style;
if(f3){M.a.style=f3.addscalar('background-image: url("'+(f6)+'");')
}else{M.a.style=new yr.scalarAttr('background-image: url("'+(f6)+'");')
}f0+=lE(M);
f0+=ma(f7);
f0+="</a>";
f0+="</li>";
return f0};
sy.t167.j=rl;
sy.t167.a=0;
sy.t168=function mQ(f1,f5,f3,f2,M,f6){f6=(f6===undefined)?"link_mute":f6;
var f0="";function f4(f8,j0,j1,f9){return(yr.externals.genreName)(sx(f8.s(rg,j0)))
}var f7=[0,"genres",2,f4];
f0+=f1.a(f1,f1.s(f7,f5),"genres__genre",M,f6);
return f0};
sy.t168.j=rl;
sy.t168.a=0;
sy.t169=function mO(M,f4,f5,f1,f0,f3){var f2="";
f2+=lE(f0);
if(f5){f2+=", "
}f2+='<a class="link '+eB((f3))+'" href="/genre/'+dD((M.s(rg,f4)))+'">'+ma(((yr.externals.genreName)(sx(M.s(rg,f4)),true)))+"</a>";
return f2};
sy.t169.j=rl;
sy.t169.a=0;
sy.t170=function mu(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="popup get-app-link">';
f2+='<p>Наберите с телефона <a href="http://m.ya.ru/ymusic" target="_blank">m.ya.ru/ymusic</a></p>';
f2+='<div class="get-app-link__qrcode"></div>';
f2+="</div>";
return f2};
sy.t170.j=rl;
sy.t170.a=0;
sy.t171=function mt(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("head-progress")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"head-progress"));
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t171.j=rl;
sy.t171.a=0;
sy.t172=function ms(f5,f8,f7,f6,f2){var f4="";
var f3={};var f0={a:{}};
f3.search="false";
f3.href="/";
f3.text="Музыка";
f3["class"]="head__search-arrow";
var j0=f3;var f3={};
var f0={a:{}};
f3.size="m";
f3["class"]="head__search-input";
var f1={};var M={a:{}};
f1.autocomplete="off";
f1.name="text";
f1.placeholder="Трек, альбом, исполнитель";
f3.attrs=f1;
var f9=f3;f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("head")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f8),"head",true));
f4+=lE(f2);
f4+='<div class="head__wrap">';
f4+='<div class="head__left">';
f4+='<a href="//www.yandex.'+dD((f5.n(hi,yr.object2nodeset((yr.externals.getSettings)()))))+'" target="_blank" class="head__logo">';
f4+='<svg xmlns="http://www.w3.org/2000/svg" width="82" height="34" viewBox="0 0 82 34"><path d="M27.806 9.979h-2.348c-.189 0-.303.151-.303.266v7.231h-4.354v-7.231c0-.189-.075-.266-.265-.266h-2.348c-.189 0-.303.114-.303.266v18.401c0 .189.076.303.265.303h2.386c.151 0 .265-.113.265-.303v-8.784h4.354v8.784c0 .189.113.303.303.303h2.348c.189 0 .265-.151.265-.303v-18.401c-.001-.151-.114-.266-.265-.266zm53.298 16.472c-.038-.114-.076-.152-.189-.152-.189 0-1.212.417-2.688.417-2.878 0-4.278-2.765-4.278-7.156 0-3.862 1.174-7.687 3.143-7.687.53 0 1.174.151 2.196 1.098.113.114.189.151.303.151s.228-.075.341-.265l1.022-1.666c.075-.113.113-.228.113-.341 0-.151-.151-.265-.379-.379-1.552-.795-2.612-.946-3.521-.946-3.559 0-6.322 4.241-6.322 10.867 0 5.717 2.65 9.012 6.437 9.012 1.59 0 3.294-.758 3.976-1.25.151-.113.189-.265.151-.416l-.305-1.287zm-16.154-7.914l4.543-8.292c.076-.114.038-.266-.113-.266h-2.234c-.644 0-.871.228-1.098.72l-3.407 7.08c-.189.417-.379.682-.568.796v-8.33c0-.151-.075-.266-.228-.266h-2.461c-.113 0-.228.114-.228.266v18.439c0 .113.076.265.228.265h2.461c.152 0 .228-.113.228-.265v-9.504c.113.076.189.189.265.341l4.316 8.86c.228.454.568.567 1.061.567h2.423c.152 0 .189-.151.114-.265l-5.302-10.146zm-21.696 8.027h-.454c-.568 0-.72-.228-.72-.682v-15.637c0-.189-.075-.266-.228-.266h-7.572c-.189 0-.303.114-.303.266v1.362c0 4.582-.265 10.489-2.688 14.957h-.833c-.228 0-.303.113-.303.303v5.528c0 .189.151.265.265.265h1.817c.417 0 .568-.303.568-.567v-3.144h8.103v3.446c0 .151.113.265.266.265h1.931c.227 0 .454-.189.454-.567v-5.226c0-.189-.114-.303-.303-.303zm-4.089 0h-5.49c1.931-3.294 2.688-7.005 2.953-11.549.075-.984.113-2.007.113-2.65h2.424v14.199zm11.814-17.039c-4.09 0-5.907 5.149-5.907 10.754 0 5.717 2.575 9.125 6.361 9.125 1.855 0 3.483-.72 4.316-1.25.151-.075.189-.189.151-.341l-.303-1.287c-.038-.151-.113-.228-.303-.228-.151 0-1.25.417-2.803.417-2.915 0-4.278-2.537-4.278-5.869v-.896s1.477.177 2.348.177h5.528v-1.59c.001-5.869-2.082-9.012-5.11-9.012zm-.417 8.217c-.871 0-2.234.151-2.234.151s0-.568.076-1.174c.341-3.219 1.136-4.847 2.461-4.847 1.212 0 1.97 1.666 2.158 4.582.038.605.038 1.287.038 1.287h-2.499z"></path><path fill="#EB2429" d="M13.573.566h-4.316c-4.241 0-7.838 3.219-7.838 9.466 0 3.749 1.742 6.513 4.847 7.876l-5.793 10.45c-.189.341 0 .606.303.606h2.688c.227 0 .378-.076.454-.266l5.263-10.261h1.893v10.261c0 .113.114.266.265.266h2.348c.227 0 .303-.114.303-.304v-27.715c0-.264-.152-.379-.417-.379zm-2.499 15.449h-1.59c-2.499 0-4.922-1.817-4.922-6.36 0-4.733 2.272-6.664 4.582-6.664h1.931v13.024z"></path></svg>';
f4+="</a>";
f4+='<form action="/search" class="head__search">';
f4+=f5.f("f23",f8,f7,f6,f2,yr.object2nodeset(j0));
f4+="<div";
f2.a={"class":new yr.scalarAttr("nb-suggest _init head__suggest"),"data-nb":new yr.scalarAttr("suggest")};
f2.s="div";
f2.a["data-class-suggest"]=new yr.scalarAttr("nb-island nb-island_type_fly nb-suggest__container nb-suggest_size_s");
f4+=lE(f2);
f4+=f5.f("f13",f8,f7,f6,f2,yr.object2nodeset(f9));
f4+="</div>";
var f3={};f3.text="Найти";
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"L","button_pin_left head__search-button");
f4+="</form>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("head__menu")};
f2.s="div";
var f3={};f3["subnav-node"]=".head__subnav";
f4+=f5.a(f5,yr.object2nodeset(f3),"nav",f2);
f4+=lE(f2);
f4+="</div>";
f4+="</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("head__user")};
f2.s="div";
f4+=f5.a(f5,f5.s(rg,f8),"head__noauth",f2);
f4+=lE(f2);
f4+="</div>";
f4+="</div>";
f4+='<div class="head__subnav"></div>';
f4+="</div>";
return f4};
sy.t172.j=1;
sy.t172.a=1;
sy.t173=function mr(f3,f6,f5,f4,f0){var f2="";
var f1={};var M={a:{}};
f1.username=yr.nodeset2data(eq("name",f6,[]));
f1.userpic=(yr.externals.userpic)(lP("uid",f6),"normal");
f1.notices="0";
var f7=f1;if(k("yes",f3.n(hg,yr.object2nodeset((yr.externals.experiments)())))){var f1={};
f1.icon="like_dark";
f1.text="Моя музыка";
f1.href="/users/"+sx((eq("login",f6,[])))+"/playlists";
f2+=f3.a(f3,yr.object2nodeset(f1),"button",f0,"L","head__user-button")
}else{f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("nav")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,f6),"nav"));
f2+=lE(f0);
f2+='<a class="nav__tab head__user-tab" href="/users/'+dD((eq("login",f6,[])))+'/playlists" data-name="my">Моя музыка</a>';
f2+="</div>"
}f2+=lE(f0);
f2+='<a class="head__username" href="https://passport.yandex.'+dD((f3.n(hi,yr.object2nodeset((yr.externals.getSettings)()))))+'/passport?mode=passport">';
f2+=f3.f("f25",f6,f5,f4,f0,yr.object2nodeset(f7));
f2+="</a>";
return f2};
sy.t173.j=rl;
sy.t173.a=0;
sy.t174=function mq(M,f4,f5,f2,f1){var f3="";
var f0={};f0.text="Войти";
f0.href="https://passport.yandex.ru/auth?msg=music";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"L","head__log-in");
return f3};
sy.t174.j=rl;
sy.t174.a=0;
sy.t175=function mp(f7,j1,f9,f8,f4){var f6="";
var f5={};var f2={a:{}};
f5.id="head__user-popup";
var f3=[];var f0={a:{}};
var f1={};var M={a:{}};
f1.href="/settings";
f1.content="Настройки";
f3.push(f1);
var f1={};var M={a:{}};
f1.href="https://passport.yandex.ru/?mode=logout&yu="+sx((eq("yandexuid",j1,[])))+"&retpath="+sx((eq("retpath",j1,[])));
f1.content="Выход";
f3.push(f1);
f5.menu=f3;
var j0=f5;f6+=lE(f4);
f6+=f7.f("f3",j1,f9,f8,f4,yr.object2nodeset(j0));
return f6};
sy.t175.j=rl;
sy.t175.a=0;
sy.t176=function mo(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="hint">';
f2+='<div class="hint__tail"></div>';
f2+='<div class="hint__content">';
f2+=mC(eq("content",f3,[]));
f2+="</div>";
f2+="</div>";
return f2};
sy.t176.j=rl;
sy.t176.a=0;
sy.t177=function mn(f3,j0,f8,f6,f0){var f2="";
var f1="";var M={a:{}};
f1+=f3.a(f3,f3.s(rg,j0),"html-head__og-image",M);
var f9=f1;var f1="";
var M={a:{}};
f1+=f3.a(f3,f3.s(rg,j0),"html-head__og-title",M);
var f7=f1;var f1="";
var M={a:{}};
f1+=f3.a(f3,f3.s(rg,j0),"html-head__og-description",M);
var f5=f1;var f1="";
var M={a:{}};
f1+=f3.a(f3,f3.s(rg,j0),"html-head__og-url",M);
var f4=f1;f2+=lE(f0);
f2+="<title";
f0.a={};f0.s="title";
f2+=f3.a(f3,f3.s(rg,j0),"html-head__title",f0);
f2+=lE(f0);
f2+="</title>";
f2+="<meta";
f0.a={name:new yr.scalarAttr("description")};
f0.s="meta";
var f1="";var M={a:{}};
f1+=f3.a(f3,f3.s(rg,j0),"html-head__description",M);
f0.a.content=new yr.xmlAttr(f1);
f2+=lE(f0);
f2+="";if(f9){f2+='<link rel="image_src" href="'+b((f9))+'"/>'
}if(f7){f2+='<meta property="og:title" content="'+b((f7))+'"/>'
}if(f5){f2+='<meta property="og:description" content="'+b((f5))+'"/>'
}if(f9){f2+='<meta property="og:image" content="'+b((f9))+'"/>'
}f2+="<meta";
f0.a={property:new yr.scalarAttr("og:type")};
f0.s="meta";
var f1="";var M={a:{}};
f1+=f3.a(f3,f3.s(rg,j0),"html-head__og-type",M);
f0.a.content=new yr.xmlAttr(f1);
f2+=lE(f0);
f2+="";if(f4){f2+='<meta property="og:url" content="'+b((f4))+'"/>'
}f2+='<meta property="og:og-site_name" content="Яндекс.Музыка"/>';
f2+='<meta property="og:og-app_id" content="117328825040925"/>';
f2+='<meta property="og:locale" content="ru_RU"/>';
f2+=f3.a(f3,f3.s(rg,j0),"html-head__rest",f0);
return f2};
sy.t177.j=rl;
sy.t177.a=0;
sy.t178=function mm(f4,f7,f6,f5,f0){var f3="";
var f1="";var M={a:{}};
f1+=f4.a(f4,f4.s(rg,f7),"html-head__title",M);
var f2=f1;f3+=lE(f0);
f3+=a(f2);return f3
};sy.t178.j=rl;
sy.t178.a=0;
sy.t179=function mk(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Яндекс.Музыка";
return f2};
sy.t179.j=rl;
sy.t179.a=0;
sy.t180=function l9(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Яндекс.Музыка — миллионы легальных треков во всех жанрах, бесплатно и без регистрации. Постоянные обновления каталога, рекомендации, клипы, персональное онлайн-радио по жанрам и исполнителям.";
return f2};
sy.t180.j=rl;
sy.t180.a=0;
sy.t181=function l8(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"html-head__title",f0);
return f2};
sy.t181.j=rl;
sy.t181.a=0;
sy.t182=function l7(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"html-head__description",f0);
return f2};
sy.t182.j=rl;
sy.t182.a=0;
sy.t183=function l6(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="website";
return f2};
sy.t183.j=rl;
sy.t183.a=0;
sy.t184=function l5(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma(M.v("v67",f3.doc.root));
return f2};
sy.t184.j=rl;
sy.t184.a=0;
sy.t185=function l4(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma((M.v("v67",f3.doc.root)))+"/blocks/html-head/og-image.png";
return f2};
sy.t185.j=rl;
sy.t185.a=0;
sy.t186=function l3(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t186.j=rl;
sy.t186.a=0;
sy.t187=function l2(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC((M.s(hc,f3)))+" — слушайте онлайн на Яндекс.Музыке";
return f2};
sy.t187.j=hd;
sy.t187.a=0;
sy.t188=function l1(f1,f9,f7,f5,M){var f0="";
f0+=lE(M);f0+=mC((f1.s(hc,f9)))+" — слушайте онлайн на Яндекс.Музыке.";
if(!kk("what",f9)){function f4(j1,j3,j4,j2){return j4<3
}var j0=[0,"data",0,"tracks",2,f4];
var f6=f1.s(j0,f9);
for(var f3=0,f2=f6.length;
f3<f2;f3++){var f8=f6[f3];
if(f3==0){f0+=" "
}else{f0+=", "
}f0+="«"+mC((eq("title",f8,[])))+"»"
}f0+=" и миллионы других треков бесплатно и без регистрации."
}return f0};
sy.t188.j=hd;
sy.t188.a=0;
sy.t189=function lZ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC(M.s(hc,f3));
return f2};
sy.t189.j=hd;
sy.t189.a=0;
sy.t190=function lO(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Слушайте на Яндекс.Музыке";
return f2};
sy.t190.j=hd;
sy.t190.a=0;
sy.t191=function lN(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="profile";
return f2};
sy.t191.j=hd;
sy.t191.a=0;
sy.t192=function lM(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma(M.f("f32",f3,f4,f1,sx(M.s(ha,f3))));
return f2};
sy.t192.j=hd;
sy.t192.a=0;
sy.t193=function lL(M,f4,f5,f2,f1){var f3="";
var f0={};f0.artist=yr.nodeset2data(M.s(g9,f4));
f0.what=yr.nodeset2data(M.s(gZ,f4));
f3+=M.a(M,yr.object2nodeset(f0),"share__link",f1);
return f3};
sy.t193.j=hd;
sy.t193.a=0;
sy.t194=function lK(f3,f6,f5,f4,M){var f1="";
function f2(f9,j1,j2,j0){return 0
}var f8=[0,"data",0,"artists",3,0];
f1+=lE(M);if(kR(f3.s(f8,f6))){function f0(f9,j1,j2,j0){return 0
}var f7=[0,"data",0,"artists",3,0,0,"name"];
f1+=mC((f3.s(f7,f6)))+" — "
}f1+="«"+mC((f3.s(gW,f6)))+"» на Яндекс.Музыке";
return f1};
sy.t194.j=gX;
sy.t194.a=0;
sy.t195=function lJ(f3,f8,f6,f4,f0){var f2="";
function f1(f9,j1,j2,j0){return 0
}var f7=[0,"data",0,"artists",3,0];
f2+=lE(f0);
if(kR(f3.s(f7,f8))){function M(f9,j1,j2,j0){return 0
}var f5=[0,"data",0,"artists",3,0,0,"name"];
f2+=mC((f3.s(f5,f8)))+" — альбом "
}else{f2+="Альбом "
}f2+="«"+mC((f3.s(gW,f8)))+"». Слушайте онлайн на Яндекс.Музыке миллионы легальных треков во всех жанрах, бесплатно и без регистрации. Постоянные обновления каталога, рекомендации, клипы, персональное онлайн-радио по жанрам и исполнителям.";
return f2};
sy.t195.j=gX;
sy.t195.a=0;
sy.t196=function lI(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC(M.s(gW,f3));
return f2};
sy.t196.j=gX;
sy.t196.a=0;
sy.t197=function lH(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Слушайте на Яндекс.Музыке";
return f2};
sy.t197.j=gX;
sy.t197.a=0;
sy.t198=function lG(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="music.album";
return f2};
sy.t198.j=gX;
sy.t198.a=0;
sy.t199=function lF(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma(M.f("f32",f3,f4,f1,sx(M.s(gV,f3))));
return f2};
sy.t199.j=gX;
sy.t199.a=0;
sy.t200=function jF(M,f4,f5,f2,f1){var f3="";
var f0={};f0.album=yr.nodeset2data(eq("data",f4,[]));
f3+=M.a(M,yr.object2nodeset(f0),"share__link",f1);
return f3};
sy.t200.j=gX;
sy.t200.a=0;
sy.t201=function jE(f6,j1,j0,f9,f1){var f5="";
var f8=eq("trackId",j1,[]);
function f0(j2,j4,j5,j3){return ak(eq("id",j4,[]),f8)
}var f7=[0,"data",0,"volumes",0,"*",2,f0];
function M(j2,j4,j5,j3){return 0
}var f4=[3,0];
var f3=f6.n(f4,(f6.s(f7,j1)));
var f2=[0,"artists",3,0,0,"name"];
f5+=lE(f1);
f5+="«"+mC((f6.n(fe,f3)))+"» исполнителя "+mC((f6.n(f2,f3)))+" из альбома «"+mC((f6.s(gW,j1)))+"» на Яндекс.Музыке";
return f5};
sy.t201.j=gT;
sy.t201.a=0;
sy.t202=function jD(f7,j0,f9,f8,f4){var f6="";
var f5=eq("trackId",j0,[]);
function M(j2,j4,j5,j3){return ak(eq("id",j4,[]),f5)
}var f3=[0,"data",0,"volumes",0,"*",2,M];
function j1(j2,j4,j5,j3){return 0
}var f1=[3,0];
var f2=f7.n(f1,(f7.s(f3,j0)));
var f0=[0,"artists",3,0,0,"name"];
f6+=lE(f4);
f6+=mC((f7.n(f0,f2)))+" — «"+mC((f7.n(fe,f2)))+"». Слушайте онлайн на Яндекс.Музыке этот и миллионы других легальных треков всех жанров, бесплатно и без регистрации.";
return f6};
sy.t202.j=gT;
sy.t202.a=0;
sy.t203=function jC(f3,f6,f5,f4,f1){var f2="";
var f0=eq("trackId",f6,[]);
function f8(j0,j2,j3,j1){return ak(eq("id",j2,[]),f0)
}var M=[0,"data",0,"volumes",0,"*",2,f8];
function f7(j0,j2,j3,j1){return 0
}var f9=[3,0,0,"title"];
f2+=lE(f1);
f2+=mC(f3.n(f9,(f3.s(M,f6))));
return f2};
sy.t203.j=gT;
sy.t203.a=0;
sy.t204=function jB(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Слушайте на Яндекс.Музыке";
return f2};
sy.t204.j=gT;
sy.t204.a=0;
sy.t205=function jA(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="music.song";
return f2};
sy.t205.j=gT;
sy.t205.a=0;
sy.t206=function jz(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma(M.f("f32",f3,f4,f1,sx(M.s(gV,f3))));
return f2};
sy.t206.j=gT;
sy.t206.a=0;
sy.t207=function jx(f3,f6,f5,f4,f0){var f2="";
var M=eq("trackId",f6,[]);
function f8(j1,j3,j4,j2){return ak(eq("id",j3,[]),M)
}var j0=[0,"data",0,"volumes",0,"*",2,f8];
var f1={};function f7(j1,j3,j4,j2){return 0
}var f9=[3,0];
f1.track=yr.nodeset2data(f3.n(f9,(f3.s(j0,f6))));
f1.albumId=yr.nodeset2data(eq("id",f6,[]));
f2+=f3.a(f3,yr.object2nodeset(f1),"share__link",f0);
return f2};
sy.t207.j=gT;
sy.t207.a=0;
sy.t208=function jv(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Плейлист «"+mC((M.s(eo,f3)))+"» на Яндекс.Музыке";
return f2};
sy.t208.j=ep;
sy.t208.a=0;
sy.t209=function js(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Слушайте на Яндекс.Музыке";
return f2};
sy.t209.j=ep;
sy.t209.a=0;
sy.t210=function i7(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC(M.s(eo,f3));
return f2};
sy.t210.j=ep;
sy.t210.a=0;
sy.t211=function i6(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Слушайте на Яндекс.Музыке";
return f2};
sy.t211.j=ep;
sy.t211.a=0;
sy.t212=function i5(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="music.playlist";
return f2};
sy.t212.j=ep;
sy.t212.a=0;
sy.t213=function i4(f2,f6,f4,f3,f0){var f1="";
var M=f2.s(en,f6);
function f8(j0,j2,j3,j1){return 0
}var f7=[0,"items",3,0];
f1+=lE(f0);
if(k("pic",f2.n(rj,M))){f1+="http://"+mC((f2.n(em,yr.object2nodeset((yr.externals.getSettings)()))))+mC((f2.n(el,M)))+"1000x1000?"+mC((f2.n(nG,M)))
}else{if(kR(f2.n(f7,M))){function f9(j0,j2,j3,j1){return 0
}var f5=[0,"itemsUri",3,0];
f1+=ma(f2.f("f32",f6,f4,f3,sx(f2.n(f5,M))))
}}return f1
};sy.t213.j=ep;
sy.t213.a=0;
sy.t214=function i3(M,f4,f5,f2,f1){var f3="";
var f0={};f0.playlist=yr.nodeset2data(M.s(ej,f4));
f3+=M.a(M,yr.object2nodeset(f0),"share__link",f1);
return f3};
sy.t214.j=ep;
sy.t214.a=0;
sy.t215=function i2(M,f4,f5,f2,f1){var f3="";
var f0=M.s(ef,f4);
f3+=lE(f1);
if(k("albums",eq("what",f4,[]))){f3+="Альбомы пользователя "+mC((f0))+" на Яндекс.Музыке"
}else{if(k("artists",eq("what",f4,[]))){f3+="Исполнители пользователя "+mC((f0))+" на Яндекс.Музыке"
}else{if(k("playlists",eq("what",f4,[]))){f3+="Плейлисты пользователя "+mC((f0))+" на Яндекс.Музыке"
}else{f3+="Пользователь "+mC((f0))+" на Яндекс.Музыке"
}}}return f3
};sy.t215.j=eh;
sy.t215.a=0;
sy.t216=function i1(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="profile";
return f2};
sy.t216.j=eh;
sy.t216.a=0;
sy.t217=function i0(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t217.j=eh;
sy.t217.a=0;
sy.t218=function iZ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma((M.v("v67",f3.doc.root)))+"/users/"+mC((M.s(dY,f3)));
if(kk("what",f3)){f2+="/"+mC((eq("what",f3,[])))
}return f2};
sy.t218.j=eh;
sy.t218.a=0;
sy.t219=function iX(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma(((yr.externals.genreName)(lP("genre",f3))))+" на Яндекс.Музыке";
return f2};
sy.t219.j=dW;
sy.t219.a=0;
sy.t220=function iJ(f4,f7,f6,f5,f0){var f3="";
var f2={};var f1={};
var M={a:{}};
f1.id=yr.nodeset2data(eq("genre",f7,[]));
f2.genre=f1;
f2.filter=yr.nodeset2data(eq("filter",f7,[]));
f3+=f4.a(f4,yr.object2nodeset(f2),"share__title",f0);
return f3};
sy.t220.j=dW;
sy.t220.a=0;
sy.t221=function iI(f0,f4,f5,f2,f1){var f3="";
var M=f0.s(dT,f4);
f3+=lE(f1);
f3+=mC((f0.s(dS,f4)))+" - Яндекс.Музыка: ";
if(k("albums",f0.s(dR,f4))){f3+=ma((yr.externals.plural)(sx(f0.n(iV,M)),"ничего не нашлось","нашёлся %s альбом","нашлось %s альбома","нашлось %s альбомов"))
}else{if(k("artists",f0.s(dR,f4))){f3+=ma((yr.externals.plural)(sx(f0.n(iA,M)),"ничего не нашлось","нашёлся %s исполнитель","нашлось %s исполнителя","нашлось %s исполнителей"))
}else{if(k("tracks",f0.s(dR,f4))){f3+=ma((yr.externals.plural)(sx(f0.n(ic,M)),"ничего не нашлось","нашёлся %s трек","нашлось %s трека","нашлось %s треков"))
}else{var f6=sx(f0.n(iV,M))+sx(f0.n(iA,M))+sx(f0.n(ic,M))+sx(f0.n(dP,M));
f3+=ma((yr.externals.plural)(f6,"ничего не нашлось","нашёлся %s ответ","нашлось %s ответа","нашлось %s ответов"))
}}}return f3
};sy.t221.j=dU;
sy.t221.a=0;
sy.t222=function iH(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t222.j=dU;
sy.t222.a=0;
sy.t223=function iG(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t223.j=dU;
sy.t223.a=0;
sy.t224=function iF(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t224.j=dU;
sy.t224.a=0;
sy.t225=function iE(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Музыкальные подборки - Яндекс.Музыка";
return f2};
sy.t225.j=dN;
sy.t225.a=0;
sy.t226=function iD(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t226.j=dN;
sy.t226.a=0;
sy.t227=function iC(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t227.j=dN;
sy.t227.a=0;
sy.t228=function iB(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t228.j=dN;
sy.t228.a=0;
sy.t229=function iz(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Настройки - Яндекс.Музыка";
return f2};
sy.t229.j=dL;
sy.t229.a=0;
sy.t230=function iq(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t230.j=dL;
sy.t230.a=0;
sy.t231=function ip(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t231.j=dL;
sy.t231.a=0;
sy.t232=function io(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t232.j=dL;
sy.t232.a=0;
sy.t233=function im(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Подписка на мобильное приложение - Яндекс.Музыка";
return f2};
sy.t233.j=dt;
sy.t233.a=0;
sy.t234=function il(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t234.j=dt;
sy.t234.a=0;
sy.t235=function ik(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t235.j=dt;
sy.t235.a=0;
sy.t236=function ij(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t236.j=dt;
sy.t236.a=0;
sy.t237=function ii(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Приложения - Яндекс.Музыка";
return f2};
sy.t237.j=dr;
sy.t237.a=0;
sy.t238=function ih(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t238.j=dr;
sy.t238.a=0;
sy.t239=function ie(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t239.j=dr;
sy.t239.a=0;
sy.t240=function h4(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t240.j=dr;
sy.t240.a=0;
sy.t241=function h3(f4,f8,f7,f5,f1){var f3="";
var j0=f4.f("f33",f8,f7,f5,f4.s(rg,f8));
var f2="";var M={a:{}};
var f0={};f0.tooltip=yr.nodeset2data(eq("tooltip",f8,[]));
f0.state=j0;
f2+=f4.a(f4,yr.object2nodeset(f0),"like__tooltip-text",M);
var f9=f2;f3+=lE(f1);
f3+="<span";
f1.a={"class":new yr.scalarAttr("like")};
f1.s="span";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f4.s(rg,f8),"like"));
var f2="";var M={a:{}};
if(j0){f2+=" like_on"
}var f6=f1.a["class"];
if(f6){f1.a["class"]=f6.addscalar(f2)
}else{f1.a["class"]=new yr.scalarAttr(f2)
}var f2="";
var M={a:{}};
if(kk("class",f8)){f2+=" "+sx((eq("class",f8,[])))
}var f6=f1.a["class"];
if(f6){f1.a["class"]=f6.addscalar(f2)
}else{f1.a["class"]=new yr.scalarAttr(f2)
}var f2={};
f2.theme=yr.nodeset2data(eq("theme",f8,[]));
f2.size=yr.nodeset2data(eq("size",f8,[]));
f2.tooltipText=f9;
f2.state=j0;
f2.pin=yr.nodeset2data(eq("pin",f8,[]));
f3+=f4.a(f4,yr.object2nodeset(f2),"like__content",f1);
f3+=lE(f1);
f3+="</span>";
return f3};
sy.t241.j=rl;
sy.t241.a=0;
sy.t242=function h2(f5,f8,f7,f6,f2){var f4="";
var f3="";var f0={a:{}};
if(kk("state",f8)){f3+="like_on"
}else{f3+="like"
}var j0=f3;
var f3="";var f0={a:{}};
if(kk("pin",f8)){f3+=" button_pin_"+lP("pin",f8)
}else{f3+=""
}var f9=f3;
var f3={};f3.icon=j0;
var f1={};var M={a:{}};
f1.title=yr.nodeset2data(eq("tooltipText",f8,[]));
f3.attrs=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,lP("size",f8),f9);
return f4};
sy.t242.j=dp;
sy.t242.a=0;
sy.t243=function h1(f3,f7,f6,f4,f0){var f2="";
var f1="";var M={a:{}};
if(kk("state",f7)){f1+="like_on"
}else{f1+="like"
}var f8=f1;
f2+=lE(f0);
f2+="<icon";
f0.a={"class":new yr.scalarAttr("icon icon_"+(f8))};
f0.s="icon";
if(!kk("state",f7)){f0.a.title=new yr.scalarAttr(lP("tooltipText",f7))
}var f1="";
var M={a:{}};
if(kk("size",f7)){f1+=" icon_size_"+(lP("size",f7))
}var f5=f0.a["class"];
if(f5){f0.a["class"]=f5.addscalar(f1)
}else{f0.a["class"]=new yr.scalarAttr(f1)
}f2+=lE(f0);
f2+="</icon>";
return f2};
sy.t243.j=dl;
sy.t243.a=0;
sy.t244=function h0(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(kk("state",f3)&&kR(M.s(dh,f3))){f2+=mC(M.s(dh,f3))
}else{if(kk("state",f3)){f2+="Удалить из «Моей музыки»"
}else{if(kR(M.s(dj,f3))){f2+=mC(M.s(dj,f3))
}else{f2+="Добавить в «Мою музыку»"
}}}return f2
};sy.t244.j=rl;
sy.t244.a=0;
sy.t245=function hZ(f3,f6,f5,f4,f0){var f2="";
var f8="/album/"+sx((eq("id",f6,[])));
var f7=eq("artists",f6,[]);
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("listed-album")};
f0.s="div";
f2+=f3.a(f3,f3.s(rg,f6),"album-cover",f0,80);
f2+=lE(f0);
f2+='<div class="listed-album__info">';
f2+='<div class="listed-album__name" title="'+dD((eq("title",f6,[])))+'">';
if(kk("id",f6)){f2+='<a href="'+eB((f8))+'" class="link">'+mC((eq("title",f6,[])))+"</a>"
}else{f2+="<span>"+mC((eq("title",f6,[])))+"</span>"
}f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("listed-album__artists")};
f0.s="div";
var f1="";var M={a:{}};
f1+=f3.a(f3,f7,"artists__text",M);
f0.a.title=new yr.xmlAttr(f1);
f2+=f3.a(f3,f7,"artists",f0,false,"");
f2+=lE(f0);
f2+="</div>";
if(kk("year",f6)){f2+='<div class="listed-album__year">'+mC((eq("year",f6,[])))+"</div>"
}f2+="</div>";
f2+="</div>";
return f2};
sy.t245.j=rl;
sy.t245.a=0;
sy.t246=function hY(M,f4,f5,f1,f0,f3){f3=(f3===undefined)?[]:f3;
var f2="";f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("listed-order table__row")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"listed-order"));
f2+=lE(f0);
f2+='<div class="table__column table__column_1 table__column_first">'+ma((f5+1))+".</div>";
f2+='<div class="table__column table__column_5">';
if(kk("notification",f4)&&!kR(M.s(mI,f4))){f2+="Ошибка платежа"
}else{if(kk("notification",f4)&&kR(M.s(mF,f4))){f2+=ma((yr.externals.formatDate)(sx(M.s(mF,f4)),"%d.%m.%Y"))
}else{if(kk("expired",f4)){f2+="Ошибка платежа"
}else{f2+="В обработке"
}}}f2+="</div>";
f2+='<div class="table__column table__column_2">'+ma((lP("days",f4)+(yr.externals.plural)(lP("days",f4),""," день"," дня"," дней")))+" </div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("table__column table__column_4")};
f0.s="div";
f2+=M.a(M,M.s(rg,f4),"listed-order__payment-type",f0,f3);
f2+=lE(f0);
f2+="</div>";
f2+='<div class="table__column table__column_2">'+ma((lP("amount",f4)+" "+(yr.externals.formatCurrency)(lP("currency",f4))))+"</div>";
f2+="</div>";
return f2};
sy.t246.j=rl;
sy.t246.a=0;
sy.t247=function hX(f1,f6,f3,f2,M,f8){f8=(f8===undefined)?[]:f8;
var f0="";var f7=eq("systemId",f6,[]);
function f4(f9,j1,j2,j0){return ak(eq("id",j1,[]),f7)
}var f5=[2,f4,0,"name"];
f0+=lE(M);f0+=mC(f1.n(f5,f8));
return f0};
sy.t247.j=rl;
sy.t247.a=0;
sy.t248=function hW(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Подарочный код";
return f2};
sy.t248.j=cU;
sy.t248.a=0;
sy.t249=function hU(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Подарок";
return f2};
sy.t249.j=cT;
sy.t249.a=0;
sy.t250=function hK(f4,j1,j0,f9,f0){var f3="";
function f7(j2,j4,j5,j3){return 0
}var f8=[0,"albums",0,"id",3,0];
var f6="/album/"+sx((f4.s(f8,j1)))+"/track/"+sx((eq("id",j1,[])));
var f2=eq("artists",j1,[]);
var f5=[0,"albums",0,"coverUri",3,0];
f3+=lE(f0);
f3+='<div class="listed-track">';
f3+='<a href="'+eB((f6))+'">';
f3+='<img src="'+eB(((yr.externals.cover)(sx(f4.s(f5,j1)),30)))+'" class="listed-track__cover"/>';
f3+="</a>";
f3+='<div class="listed-track__info">';
f3+='<div class="listed-track__name" title="'+dD((eq("title",j1,[])))+'">';
f3+='<a href="'+eB((f6))+'" class="link">'+mC((eq("title",j1,[])))+"</a>";
f3+="</div>";
f3+='<div class="listed-track__time">'+ma(((yr.externals.formatDuration)(lP("duration",j1))))+"</div>";
f3+="<div";
f0.a={"class":new yr.scalarAttr("listed-track__artists")};
f0.s="div";
var f1="";var M={a:{}};
f1+=f4.a(f4,f2,"artists__text",M);
f0.a.title=new yr.xmlAttr(f1);
f3+=f4.a(f4,f2,"artists",f0,false,"");
f3+=lE(f0);
f3+="</div>";
f3+="</div>";
f3+="</div>";
return f3};
sy.t250.j=rl;
sy.t250.a=0;
sy.t251=function hJ(M,f3,f5,f1,f0,f6){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("loading")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"loading",true));
if(f6){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" "+(f6))
}else{f0.a["class"]=new yr.scalarAttr(" "+(f6))
}}f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("loading__spinner")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"spinner",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
return f2};
sy.t251.j=rl;
sy.t251.a=0;
sy.t252=function hI(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("nav")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"nav",true));
f2+=lE(f0);
f2+='<a class="nav__tab" href="/" data-name="index">Рекомендации</a>';
f2+='<span class="nav__tab nav__tab_switch" data-name="top">Жанры</span>';
f2+='<span class="nav__tab nav__tab_switch" data-name="mix">Подборки</span>';
f2+='<a class="nav__tab nav__tab_my _hidden" href="/users//playlists" data-name="my">Моя музыка</a>';
f2+="</div>";
return f2};
sy.t252.j=1;
sy.t252.a=1;
sy.t253=function hH(f2,f9,f6,f5,f0){var f1="";
var M=lP("currentItem",f9);
var f7=eq("items",f9,[]);
for(var f4=0,f3=f7.length;
f4<f3;f4++){var f8=f7[f4];
f1+=f2.a(f2,f2.s(rg,f8),"nav__genre",f0,M)
}return f1};
sy.t253.j=rl;
sy.t253.a=0;
sy.t254=function hG(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div>";
f2+="К сожалению, жанры сейчас недоступны. Попробуйте ";
f2+='<span class="link link_major" onclick="location.reload()">обновить страницу</span>';
f2+=".";f2+="</div>";
return f2};
sy.t254.j=cH;
sy.t254.a=0;
sy.t255=function hF(f2,f9,f6,f5,f0){var f1="";
var M=lP("currentItem",f9);
var f7=eq("items",f9,[]);
for(var f4=0,f3=f7.length;
f4<f3;f4++){var f8=f7[f4];
f1+=f2.a(f2,f2.s(rg,f8),"nav__mix",f0,M)
}return f1};
sy.t255.j=rl;
sy.t255.a=0;
sy.t256=function hE(f7,j0,f9,f8,f3,f0){var f6="";
var f5="";var f1={a:{}};
if(kk("subGenres",j0)){f5+=" button_pin_right"
}else{f5+=""
}var M=f5;var f5="";
var f1={a:{}};
if(k(f0,eq("id",j0,[]))){f5+=" button_checked"
}else{f5+=""
}var j2=f5;
function f4(j3,j5,j6,j4){return k(f0,eq("id",j5,[]))
}var f2=[0,"subGenres",2,f4];
f6+=lE(f3);
f6+="<div";
f3.a={"class":new yr.scalarAttr("nav__sub-item")};
f3.s="div";
f3.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f7.s(rg,j0),"nav__sub-item"));
var f5={};f5.text=(yr.externals.genreShortName)(lP("id",j0));
f5.href="/genre/"+sx((eq("id",j0,[])));
f6+=f7.a(f7,yr.object2nodeset(f5),"button",f3,"M",(M)+(j2));
if(kk("subGenres",j0)){var f5="";
var f1={a:{}};
if((f7.s(f2,j0)).length){f5+=" button_checked"
}else{f5+=""
}var j1=f5;
var f5={};f5.icon="dropdown";
f6+=f7.a(f7,yr.object2nodeset(f5),"button",f3,"M","nav__arrow button_pin_left"+(j1))
}f6+=lE(f3);
f6+="</div>";
return f6};
sy.t256.j=rl;
sy.t256.a=0;
sy.t257=function hD(f5,f8,f7,f6,f2,f9){var f4="";
function f1(j1,j3,j4,j2){return k(f9,eq("id",j3,[]))
}var M=[0,"subGenres",2,f1];
f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("nav__sub-item")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f8),"nav__sub-item"));
if(kk("subGenres",f8)){var f3="";
var f0={a:{}};
if((f5.s(M,f8)).length){f3+=" button_checked"
}else{f3+=""
}var j0=f3;
var f3={};f3.text=(yr.externals.genreShortName)(lP("id",f8));
f3.icon="dropdown";
f3.iconPosition="right";
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"M","nav__arrow"+(j0))
}f4+=lE(f2);
f4+="</div>";
return f4};
sy.t257.j=cE;
sy.t257.a=0;
sy.t258=function hC(f3,f6,f5,f4,f0,f8){var f2="";
var f1="";var M={a:{}};
if(k(f8,eq("url",f6,[]))){f1+=" button_checked"
}else{f1+=""
}var f7=f1;
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("nav__sub-item")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,f6),"nav__sub-item"));
var f1={};f1.text=yr.nodeset2data(eq("title",f6,[]));
f1.href="/mix/"+sx((eq("url",f6,[])));
f2+=f3.a(f3,yr.object2nodeset(f1),"button",f0,"M",f7);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t258.j=rl;
sy.t258.a=0;
sy.t259=function hA(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="popup popup_compact">';
f2+='<div class="nav__popup"></div>';
f2+="</div>";
return f2};
sy.t259.j=rl;
sy.t259.a=0;
sy.t260=function hr(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(cC,f3),"nav__popup-item",f0,lP("currentItem",f3));
return f2};
sy.t260.j=rl;
sy.t260.a=0;
sy.t261=function hq(M,f3,f4,f1,f0,f5){var f2="";
f2+=lE(f0);
f2+='<a class="nav__popup-item" href="/genre/'+dD((eq("id",f3,[])))+'">';
if((k(f5,eq("id",f3,[])))){f2+='<span class="icon icon_tip icon_size_L"></span>'
}f2+=ma((yr.externals.genreShortName)(lP("id",f3)));
f2+="</a>";
return f2};
sy.t261.j=rl;
sy.t261.a=0;
sy.t262=function hp(f3,f6,f5,f4,f0){var f2="";
var f1="";var M={a:{}};
if(kk("mode",f6)){f1+=lP("mode",f6)
}else{f1+="positive"
}var f7=f1;
f2+=lE(f0);
f2+='<div class="notice notice_'+eB((f7))+'">';
f2+=mC(eq("text",f6,[]));
if(kk("note",f6)){f2+='<span class="notice__separator"></span>';
f2+='<span class="notice__note">'+mC((eq("note",f6,[])))+"</span>"
}f2+="</div>";
return f2};
sy.t262.j=rl;
sy.t262.a=0;
sy.t263=function ho(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("notify")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"notify",true));
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t263.j=rl;
sy.t263.a=0;
sy.t264=function hn(M,f4,f5,f1,f0){var f2="";
function f3(f7,f9,j0,f8){return 0
}var f6=[0,"*",2,fq,3,0];
f2+=M.a(M,M.s(f6,f4),"overhead__layout",f0);
return f2};
sy.t264.j=rl;
sy.t264.a=0;
sy.t265=function hm(f3,f7,f6,f4,f0){var f2="";
var f1="";var M={a:{}};
f1+=f3.a(f3,f3.s(rg,f7),"overhead__className",M);
var f8=f1;f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("overhead")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,f7),"overhead"));
if(f8){var f5=f0.a["class"];
if(f5){f0.a["class"]=f5.addscalar(" overhead_"+a((f8)))
}else{f0.a["class"]=new yr.scalarAttr(" overhead_"+a((f8)))
}}f2+=lE(f0);
f2+='<div class="overhead__content">';
f2+='<div class="overhead__close" title="Закрыть">';
f2+='<span class="icon icon_size_L icon_remove_white"></span>';
f2+="</div>";
f2+=f3.a(f3,f3.s(rg,f7),"overhead__content",f0);
f2+="</div>";
f2+="</div>";
return f2};
sy.t265.j=rl;
sy.t265.a=0;
sy.t266=function hl(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t266.j=rl;
sy.t266.a=0;
sy.t267=function hk(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t267.j=rl;
sy.t267.a=0;
sy.t268=function hj(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="overhead__title">Узнайте, что вам нравится</div>';
f2+='<div class="overhead__steps">';
f2+='<div class="overhead__step overhead__step_1">Слушайте новую музыку каждый день</div>';
f2+='<div class="overhead__arrow"></div>';
f2+='<div class="overhead__step overhead__step_2">Собирайте понравившиеся треки</div>';
f2+='<div class="overhead__arrow"></div>';
f2+='<div class="overhead__step overhead__step_3">Получайте персональные рекомендации</div>';
f2+="</div>";
return f2};
sy.t268.j=rl;
sy.t268.a=0;
sy.t269=function hh(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="not-authorized";
return f2};
sy.t269.j=cq;
sy.t269.a=0;
sy.t270=function g8(f4,f7,f6,f5,f1){var f3="";
var f8=((yr.externals.protocol)())+"//"+((yr.externals.hostname)())+"/";
f3+=f4.a(f4,f4.s(rg,f7),"overhead__common",f1);
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("overhead__actions")};
f1.s="div";
var f2={};f2.text="Войти";
f2.href="https://passport.yandex.ru/auth?msg=music&retpath="+((yr.externals.urlencode)(f8));
f3+=f4.a(f4,yr.object2nodeset(f2),"button",f1,"L","button_action overhead__log-in");
var f2={};f2.text="Войти через ВКонтакте";
f2.buttonClass="button_size_L overhead__button";
var f0={};var M={a:{}};
f0.provider="vkontakte";
f0.scope="friends,audio";
f2.params=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"social-bind",f1);
var f2={};f2.text="Войти через Facebook";
f2.buttonClass="button_size_L overhead__button";
var f0={};var M={a:{}};
f0.provider="facebook";
f0.scope="user_friends,user_likes";
f2.params=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"social-bind",f1);
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t270.j=cq;
sy.t270.a=0;
sy.t271=function g7(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="authorized";
return f2};
sy.t271.j=co;
sy.t271.a=0;
sy.t272=function g6(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"overhead__common",f0);
return f2};
sy.t272.j=co;
sy.t272.a=0;
sy.t273=function g5(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="overlay"></div>';
return f2};
sy.t273.j=rl;
sy.t273.a=0;
sy.t274=function g4(f2,f5,f4,f3,M,f9,f8){var f1="";
var f6=(yr.externals.ceil)(lP("total",f5)/lP("perPage",f5));
f1+=lE(M);if(f6>1){var f7=(yr.externals.querySeparator)(f9);
f1+="<div";
M.a={"class":new yr.scalarAttr("pager")};
M.s="div";var f0={};
f0.text="В начало";
f0.href=f9;
f1+=f2.a(f2,yr.object2nodeset(f0),"button",M,"M",f8);
f1+=lE(M);f1+="  ";
f1+=f2.a(f2,yr.object2nodeset((yr.externals.pagerData)(f2.s(rg,f5),f9)),"button-group",M,"M",f8);
if(lP("page",f5)+5<f6){f1+="  ";
var f0={};f0.text="+5";
f0.href=(f9+f7)+"page="+(lP("page",f5)+5);
f1+=f2.a(f2,yr.object2nodeset(f0),"button",M,"M",f8)
}f1+="</div>"
}return f1};
sy.t274.j=rl;
sy.t274.a=0;
sy.t275=function g3(f5,f8,f7,f6,f2){var f4="";
var f3={};var f0={a:{}};
var f1={};var M={a:{}};
f1.placeholder="Введите код";
f1.maxlength="30";
f3.attrs=f1;
var f9=f3;f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("payment-gift")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f8),"payment-gift"));
f4+=lE(f2);
f4+='<div class="payment-gift__subtitle">Получить подписку в подарок</div>';
f4+='<div class="payment-gift__bar">';
f4+=f5.f("f13",f8,f7,f6,f2,yr.object2nodeset(f9));
f4+=" ";var f3={};
f3.text="Активировать";
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"","payment-gift__submit-button button_action");
f4+='<div class="payment-gift__error">';
f4+='<span class="payment-gift__attention">!</span>';
f4+='<span class="payment-gift__error-text"></span>';
f4+="</div>";
f4+="</div>";
f4+='<div class="payment-gift__footer">';
f4+='<span class="payment-gift__static-text payment-gift__static-text_muted">';
f4+="Нажимая кнопку, вы принимаете «";
f4+='<a href="http://legal.yandex.ru/music_mobile_agreement/" class="link link_major" target="_blank">Лицензионное соглашение</a>';
f4+="»";f4+="</span>";
f4+="</div>";
f4+='<span class="popup__close icon icon_size_L icon_remove"></span>';
f4+="</div>";
return f4};
sy.t275.j=rl;
sy.t275.a=0;
sy.t276=function g2(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("payment-order")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"payment-order"));
var f0={};f0.text="Извините, сейчас купить подписку в подарок можно только Яндекс.Деньгами";
f0["class"]="payment-order__gift-tooltip";
f3+=M.a(M,yr.object2nodeset(f0),"tooltip",f1);
f3+=lE(f1);
f3+='<span class="popup__close icon icon_size_L icon_remove"></span>';
f3+="</div>";
return f3};
sy.t276.j=rl;
sy.t276.a=0;
sy.t277=function g1(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+='<div class="payment-order__products">';
f3+='<div class="payment-order__subtitle">Выберите, на сколько дней подписаться</div>';
f3+=M.a(M,eq("products",f4,[]),"payment-product",f1);
f3+="</div>";
f3+='<div class="payment-order__bottom">';
f3+="<div>";
f3+='<div class="payment-order__systems-section">';
f3+="<div";
f1.a={"class":new yr.scalarAttr("payment-order__systems")};
f1.s="div";
f3+=M.a(M,eq("systems",f4,[]),"page-order__payment-system",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
f3+='<div class="payment-order__total-section">';
f3+='<div class="payment-order__total">';
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("payment-order__actions-bar")};
f1.s="div";
var f0={};f0.text="Оплатить подписку";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"","payment-order__button-pay button_action");
f3+=lE(f1);
f3+=" ";var f0={};
f0.text="Купить в подарок";
f0.href="https://money.yandex.ru";
f0.target="_blank";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"","payment-order__button-gift");
f3+="</div>";
f3+="</div>";
f3+="</div>";
f3+="<div>";
f3+='<div class="payment-order__systems-section">';
f3+='<span class="payment-order__static-text"><a class="link link_major" href="http://help.yandex.ru/music/mobileapp/subscription.xml#how-to-pay" target="_blank">Автопродляемый платеж</a> (199 руб. в месяц) включается только в настройках приложения</span>';
f3+="</div>";
f3+='<div class="payment-order__total-section">';
f3+='<span class="payment-order__static-text payment-order__static-text_muted">Нажимая кнопку, вы принимаете «<a href="http://legal.yandex.ru/music_mobile_agreement/" class="link link_major" target="_blank">Лицензионное соглашение</a>»</span>';
f3+="</div>";
f3+="</div>";
f3+="</div>";
return f3};
sy.t277.j=rl;
sy.t277.a=0;
sy.t278=function g0(f3,f6,f5,f4,f0){var f2="";
var f1={};var M={a:{}};
f1.content=yr.nodeset2data(eq("name",f6,[]));
f1.checked=f5==0;
f1.type="radio";
f1.name="payment_system";
f1.value=yr.nodeset2data(eq("id",f6,[]));
var f7=f1;f2+=lE(f0);
f2+="<div>";
f2+=f3.f("f12",f6,f5,f4,f0,yr.object2nodeset(f7));
f2+="</div>";
return f2};
sy.t278.j=rl;
sy.t278.a=0;
sy.t279=function gY(f1,f8,f5,f4,M){var f0="";
f0+=lE(M);f0+='<form method="post" action="'+dD((eq("target",f8,[])))+'" class="invoice" target="_self">';
var f6=eq("fields",f8,[]);
for(var f3=0,f2=f6.length;
f3<f2;f3++){var f7=f6[f3];
f0+='<input type="hidden" name="'+dD((eq("name",f7,[])))+'" value="'+dD((eq("value",f7,[])))+'"/>'
}f0+="</form>";
return f0};
sy.t279.j=rl;
sy.t279.a=0;
sy.t280=function gS(f0,f4,f5,f2,f1){var f3="";
var M=(yr.externals.formatCurrency)(lP("currency",f4));
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("payment-product")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f0.s(rg,f4),"payment-product"));
f3+=lE(f1);
f3+='<div class="payment-product__shape payment-product__shape_'+dD((eq("days",f4,[])))+'">';
f3+='<span class="payment-product__shape-content">';
f3+='<span class="payment-product__days">'+mC((eq("days",f4,[])))+"</span>";
f3+="</span>";
f3+="</div>";
f3+='<div class="payment-product__amount">'+ma((lP("amount",f4)+" "+M))+"</div>";
f3+='<div class="payment-product__description">'+mC((eq("description",f4,[])))+"</div>";
f3+="</div>";
return f3};
sy.t280.j=rl;
sy.t280.a=0;
sy.t281=function gR(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("player-controls player-controls_empty")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"player-controls",true));
f3+=lE(f1);
f3+='<div class="player-controls__btn player-controls__btn_prev" title="Назад [k]">';
f3+='<div class="icon icon_prev icon_size_L"></div>';
f3+="</div>";
f3+='<div class="player-controls__btn player-controls__btn_play" title="Играть [p]">';
f3+='<div class="icon icon_size_XL"></div>';
f3+="</div>";
f3+='<div class="player-controls__btn player-controls__btn_next" title="Вперед [l]">';
f3+='<div class="icon icon_next icon_size_L"></div>';
f3+="</div>";
f3+='<div class="player-controls__btn player-controls__btn_seq" title="Слушать далее">';
f3+='<div class="icon icon_seq"></div>';
f3+="</div>";
f3+='<div class="player-controls__btn player-controls__btn_settings" title="Настроить радио">';
f3+='<div class="icon icon_settings icon_size_L"></div>';
f3+="</div>";
f3+='<div class="player-controls__track-container">';
f3+="</div>";
f3+='<div class="player-controls__seq-controls">';
f3+='<div class="player-controls__btn player-controls__btn_repeat" title="Повторять">';
f3+='<div class="icon icon_repeat icon_size_L"></div>';
f3+="</div>";
f3+='<div class="player-controls__btn player-controls__btn_shuffle" title="В случайном порядке">';
f3+='<div class="icon icon_shuffle icon_size_XL"></div>';
f3+="</div>";
f3+="</div>";
var f0={};f0.appendTo=".player-controls";
f3+=M.a(M,yr.object2nodeset(f0),"radio-settings",f1);
f3+="</div>";
return f3};
sy.t281.j=rl;
sy.t281.a=0;
sy.t282=function gQ(f4,f8,f6,f5,f1){var f3="";
var f2=[];if(kR(f4.s(ch,f8))){f2=f4.s(ch,f8)
}else{f2=eq("track",f8,[])
}var f7=f2;
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("player-controls__track")};
f1.s="div";
f3+=f4.a(f4,f4.s(rg,f8),"track_type_player",f1);
f3+=lE(f1);
f3+='<div class="player-controls__track-controls">';
f3+='<div class="player-controls__btn player-controls__btn_dislike" title="Не нравится">';
f3+='<div class="icon icon_cancel icon_size_XL"></div>';
f3+="</div>";
var f2={};var f0={};
var M={a:{}};
f0.track=yr.nodeset2data(f7);
f2.entry=f0;
f2["class"]="player-controls__btn";
f2.theme="player";
f2.size="XL";
f3+=f4.a(f4,yr.object2nodeset(f2),"like",f1);
var f2={};var f0="";
var M={a:{}};
f0+=f4.a(f4,f4.s(rg,f8),"player-controls__add",M);
f2.target=f0;
var f0={};var M={a:{}};
f0.track=yr.nodeset2data(f7);
f2.entry=f0;
f2.fixed=true;
f2.hideSeq=true;
var f0={};var M={a:{}};
f0.my="center bottom";
f0.at="center top";
f2.position=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"add-to",f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("player-controls__btn player-controls__btn_share")};
f1.s="div";
var f2={};f2.track=yr.nodeset2data(eq("track",f8,[]));
if(kR(f4.s(cg,f8))){f2.albumId=yr.nodeset2data(f4.s(cg,f8))
}var f0={};
var M={a:{}};
f0.text="Поделиться треком";
f2.tooltip=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"share",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
f3+="</div>";
return f3};
sy.t282.j=rl;
sy.t282.a=0;
sy.t283=function gP(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="player-controls__btn player-controls__btn_add">';
f2+='<div class="icon icon_plus icon_size_XL"></div>';
f2+="</div>";
return f2};
sy.t283.j=rl;
sy.t283.a=0;
sy.t284=function gO(f1,f7,f6,f3,M,f5,f2){var f0="";
f0+=lE(M);f0+="<div";
M.a={"class":new yr.scalarAttr("playlist-cover")};
M.s="div";if(f2){var f4=M.a["class"];
if(f4){M.a["class"]=f4.addscalar(" "+(f2))
}else{M.a["class"]=new yr.scalarAttr(" "+(f2))
}}if(f5){var f4=M.a["class"];
if(f4){M.a["class"]=f4.addscalar(" playlist-cover_decorated")
}else{M.a["class"]=new yr.scalarAttr(" playlist-cover_decorated")
}f0+=lE(M);
f0+='<div class="playlist-cover__decor"></div>';
f0+='<div class="playlist-cover__decor-line"></div>';
f0+='<div class="playlist-cover__border"></div>'
}if(kR(f1.s(b6,f7))){f0+=f1.a(f1,f1.s(rg,f7),"playlist-cover__cover",M)
}else{f0+=f1.a(f1,f1.s(rg,f7),"playlist-cover__note",M)
}f0+=lE(M);
f0+="</div>";
return f0};
sy.t284.j=rl;
sy.t284.a=0;
sy.t285=function gN(f2,j2,f9,f6,M){var f1="";
var f4=f2.s(b2,j2);
var f0=(f4).length;
if(f0>1){f1+=lE(M);
f1+='<div class="playlist-cover__mosaic">';
var f8=(yr.externals.mosaic)(f4);
for(var f5=0,f3=f8.length;
f5<f3;f5++){var j0=f8[f5];
f1+='<img src="'+eB(((yr.externals.cover)(sx(f2.s(rg,j0)),100)))+'" class="playlist-cover__img" alt=""/>'
}f1+="</div>"
}else{if((f0>0)){function j1(j3,j5,j6,j4){return 0
}var f7=[3,0];
f1+=lE(M);f1+='<img src="'+eB(((yr.externals.cover)(sx(f2.n(f7,f4)),200)))+'" class="playlist-cover__img" alt=""/>'
}else{f1+=f2.a(f2,f2.s(rg,j2),"playlist-cover__note",M)
}}return f1
};sy.t285.j=b3;
sy.t285.a=0;
sy.t286=function gM(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<img src="//'+dD((M.n(em,yr.object2nodeset((yr.externals.getSettings)()))))+dD((M.s(b0,f3)))+"200x200?"+dD((M.s(bZ,f3)))+'" class="playlist-cover__img" alt=""/>';
return f2};
sy.t286.j=b1;
sy.t286.a=0;
sy.t287=function gL(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<img src="/blocks/playlist-cover/playlist-cover_no_cover.png" class="playlist-cover__img"/>';
return f2};
sy.t287.j=rl;
sy.t287.a=0;
sy.t288=function gK(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<img src="/blocks/playlist-cover/playlist-cover_no_cover'+eB((lP("kind",f3)%5))+'.png" class="playlist-cover__img"/>';
return f2};
sy.t288.j=rl;
sy.t288.a=0;
sy.t289=function gJ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<img src="/blocks/playlist-cover/playlist-cover_like.png" class="playlist-cover__img"/>';
return f2};
sy.t289.j=bX;
sy.t289.a=0;
sy.t290=function gI(f4,f7,f6,f5,M){var f3="";
var f1="/users/"+sx((f4.s(bN,f7)))+"/playlists/"+sx((eq("kind",f7,[])));
var f2=!(k(3,f4.s(jq,f7)));
f3+=lE(M);f3+="<div";
M.a={"class":new yr.scalarAttr("playlist playlist_type_full")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f4.s(rg,f7),"playlist",true));
f3+=f4.a(f4,f4.s(rg,f7),"playlist-cover",M,true,"playlist__image");
f3+=lE(M);f3+='<div class="playlist__title">';
f3+='<a href="'+eB(((yr.externals.assimilateLink)(f1)))+'" class="link">';
f3+=mC(eq("title",f7,[]));
f3+="</a>";
f3+="</div>";
f3+='<div class="playlist__info">';
f3+=ma((yr.externals.plural)(lP("trackCount",f7),"","%s трек","%s трека","%s треков"));
f3+="</div>";
f3+='<div class="playlist__description">';
f3+=lP("descriptionFormatted",f7);
f3+="</div>";
f3+="<div";
M.a={"class":new yr.scalarAttr("playlist__controls")};
M.s="div";var f0={};
f0.icon="play";
f0.text="Слушать";
f3+=f4.a(f4,yr.object2nodeset(f0),"button",M,"","playlist__play");
f3+=lE(M);f3+=" ";
if(f2){var f0={};
f0.playlist=yr.nodeset2data(f4.s(rg,f7));
f0.pin="right";
f3+=f4.a(f4,yr.object2nodeset(f0),"like",M)
}var f0={};
f0.playlist=yr.nodeset2data(f4.s(rg,f7));
if(f2){f0.pin="left"
}f3+=f4.a(f4,yr.object2nodeset(f0),"add-to",M);
f3+="</div>";
f3+="</div>";
return f3};
sy.t290.j=rl;
sy.t290.a=0;
sy.t291=function gH(M,f4,f5,f1,f0,f3){f3=(f3===undefined)?[]:f3;
var f2="";f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("playlist")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"playlist"));
f2+=M.a(M,M.s(rg,f4),"playlist__cover",f0);
if(kk("trackCount",f4)){f2+=M.a(M,M.s(rg,f4),"playlist__play",f0)
}f2+=M.a(M,M.s(rg,f4),"playlist__title",f0);
f2+=M.a(M,M.s(rg,f4),"playlist__info",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t291.j=rl;
sy.t291.a=0;
sy.t292=function gG(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(rg,f3),"playlist-cover",f0,true,"playlist__cover");
return f2};
sy.t292.j=rl;
sy.t292.a=0;
sy.t293=function gF(M,f4,f5,f2,f1){var f3="";
var f0={};f0.icon="play";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"","playlist__play");
return f3};
sy.t293.j=rl;
sy.t293.a=0;
sy.t294=function gE(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="playlist__title">';
f2+='<a href="/users/'+dD((M.s(bN,f3)))+"/playlists/"+dD((eq("kind",f3,[])))+'" class="link" title="'+dD((eq("title",f3,[])))+'">'+mC((eq("title",f3,[])))+"</a>";
f2+="</div>";
return f2};
sy.t294.j=rl;
sy.t294.a=0;
sy.t295=function gD(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="playlist__info">';
f2+=ma((yr.externals.plural)(lP("trackCount",f3),"нет треков","%s трек","%s трека","%s треков"));
f2+="</div>";
return f2};
sy.t295.j=rl;
sy.t295.a=0;
sy.t296=function gC(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("popup-holder")};
f1.s="div";
var f0={};f0.listenOn="popups";
f3+=M.a(M,yr.object2nodeset(f0),"loading",f1,"loading_popup");
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t296.j=rl;
sy.t296.a=0;
sy.t297=function gB(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("progress")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"progress",true));
f2+=lE(f0);
f2+='<div class="progress__bg"></div>';
f2+='<div class="progress__text progress__progress_muted" style="clip: rect(0 -1px 25px 0);">';
f2+="</div>";
f2+='<div class="progress__text">';
f2+='<div class="progress__left"></div>';
f2+='<div class="progress__right"></div>';
f2+="</div>";
f2+='<div class="progress__text progress__progress" style="clip: rect(0 -1px 25px 0); clip: rect(0, -1px, 25px, 0);">';
f2+='<div class="progress__left"></div>';
f2+='<div class="progress__right"></div>';
f2+="</div>";
f2+="</div>";
return f2};
sy.t297.j=rl;
sy.t297.a=0;
sy.t298=function gA(f9,f7,j0,j1,j8){var j4="";
var j3=[];if(kk("typeForFrom",f7)){j3=eq("typeForFrom",f7,[])
}else{j3=eq("type",f7,[])
}var f6=j3;
var j3="";var j7={a:{}};
if(kk("imageUri",f7)){if(k("right",eq("imagePosition",f7,[]))){j3+=(yr.externals.cover)(lP("imageUri",f7),260)
}else{j3+=(yr.externals.cover)(lP("imageUri",f7),200)
}}else{if(kk("image",f7)){j3+=lP("image",f7)
}}var f4=j3;
var j3="";var j7={a:{}};
if(f4&&k("right",eq("imagePosition",f7,[]))){j3+="right"
}else{j3+="left"
}var f3=j3;
j4+=lE(j8);
j4+="<div";
j8.a={"class":new yr.scalarAttr("promo")};
j8.s="div";
j8.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f9.s(rg,f7),"promo",true));
var j3="";var j7={a:{}};
if(kk("promoId",f7)){j3+=(yr.externals.fromName)(sx(f6))+"_"+lP("promoId",f7)
}else{j3+=(yr.externals.fromName)(sx(f6))
}j8.a["data-card"]=new yr.scalarAttr(j3);
if(kk("background",f7)){j8.a.style=new yr.scalarAttr("background:"+sx((eq("background",f7,[]))));
if((yr.externals.isColorDark)(lP("background",f7))){var f8=j8.a["class"];
if(f8){j8.a["class"]=f8.addscalar(" promo_dark")
}else{j8.a["class"]=new yr.scalarAttr(" promo_dark")
}}}if(f3=="left"){var f8=j8.a["class"];
if(f8){j8.a["class"]=f8.addscalar(" promo_cover")
}else{j8.a["class"]=new yr.scalarAttr(" promo_cover")
}}if(f3=="right"){j4+=lE(j8);
j4+='<div class="promo__image">';
j4+='<img class="promo__img" src="'+eB((f4))+'" alt=""/>';
j4+="</div>"
}else{if(!f4&&k("playlist",eq("promotionType",f7,[]))){j4+=f9.a(f9,f9.s(bv,f7),"playlist-cover",j8,false,"promo__image")
}else{var j3="";
var j7={a:{}};
if(f4){j3+=f4
}else{function j6(j9,p1,p2,p0){return 0
}var f5=[3,0];
var f2=f9.n(f5,((f9.s(bA,f7)).concat((f9.s(nF,f7)).concat(f9.s(by,f7)))));
j3+=(yr.externals.cover)(sx(f2),200)
}var f1=j3;
j4+=lE(j8);
j4+='<div class="promo__image">';
j4+='<img class="promo__img" src="'+eB((f1))+'" alt=""/>';
j4+="</div>"
}}j4+=lE(j8);
if(kk("heading",f7)){j4+='<div class="promo__rubric">'+mC((eq("heading",f7,[])))+"</div>"
}j4+="<div";
j8.a={"class":new yr.scalarAttr("promo__title")};
j8.s="div";
j4+=f9.a(f9,eq("title",f7,[]),"promo__link",j8,lP("titleUrl",f7));
j4+=lE(j8);
j4+="</div>";
j4+="<div";
j8.a={"class":new yr.scalarAttr("promo__subtitle")};
j8.s="div";
j4+=f9.a(f9,eq("subtitle",f7,[]),"promo__link",j8,lP("subtitleUrl",f7));
j4+=lE(j8);
j4+="</div>";
j4+='<div class="promo__description">'+(lP("description",f7))+"</div>";
j4+="<div";
j8.a={"class":new yr.scalarAttr("promo__controls")};
j8.s="div";
var j3={};j3.icon="play";
j3.text="Слушать";
j4+=f9.a(f9,yr.object2nodeset(j3),"button",j8,"","promo__play");
j4+=lE(j8);
j4+=" ";if(k("track",eq("promotionType",f7,[]))){var j3={};
var j2={};var j5={a:{}};
j2.track=yr.nodeset2data(eq("track",f7,[]));
j3.entry=j2;
j3.pin="right";
j4+=f9.a(f9,yr.object2nodeset(j3),"like",j8);
var j3={};var j2={};
var j5={a:{}};
j2.track=yr.nodeset2data(eq("track",f7,[]));
j3.entry=j2;
j3.pin="left";
j4+=f9.a(f9,yr.object2nodeset(j3),"add-to",j8)
}if(k("album",eq("promotionType",f7,[]))){var j3={};
j3.album=yr.nodeset2data(eq("album",f7,[]));
j3.pin="right";
j4+=f9.a(f9,yr.object2nodeset(j3),"like",j8);
var j3={};j3.album=yr.nodeset2data(eq("album",f7,[]));
j3.pin="left";
j4+=f9.a(f9,yr.object2nodeset(j3),"add-to",j8)
}if(k("playlist",eq("promotionType",f7,[]))){var f0=f9.s(bv,f7);
var M=!(k(3,f9.n(bY,f0)));
if(M){var j3={};
j3.playlist=yr.nodeset2data(f0);
j3.pin="right";
j4+=f9.a(f9,yr.object2nodeset(j3),"like",j8)
}var j3={};
j3.playlist=yr.nodeset2data(f0);
if(M){j3.pin="left"
}j4+=f9.a(f9,yr.object2nodeset(j3),"add-to",j8)
}if(k("artist",eq("promotionType",f7,[]))){var j3={};
j3.artist=yr.nodeset2data(eq("artist",f7,[]));
j4+=f9.a(f9,yr.object2nodeset(j3),"like",j8)
}j4+="</div>";
j4+="</div>";
return j4};
sy.t298.j=rl;
sy.t298.a=0;
sy.t299=function gz(M,f3,f5,f1,f0,f4){var f2="";
f2+=lE(f0);
if(f4){f2+='<a href="'+eB(((yr.externals.assimilateLink)(f4)))+'" class="link link_mimic">'+mC((M.s(rg,f3)))+"</a>"
}else{f2+=mC(M.s(rg,f3))
}return f2};
sy.t299.j=rl;
sy.t299.a=0;
sy.t300=function d7(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("radio-settings popup")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"radio-settings",true));
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t300.j=rl;
sy.t300.a=0;
sy.t301=function d6(f7,j0,f9,f8,f4){var f6="";
var j1=f7.s(a9,j0);
f6+=lE(f4);
f6+='<div class="radio-settings__content">';
f6+='<p class="radio-settings__subtitle">';
if(kk("genre",j0)){f6+="Радио "
}else{f6+="Радио исполнителя "
}f6+='<strong><a class="link" href="'+dD((f7.s(a7,j0)))+'">'+mC((f7.s(a5,j0)))+"</a></strong>";
f6+="</p>";
f6+='<p class="radio-settings__subtitle">Какая музыка будет играть</p>';
if((f7.n(a3,j1)).length>1){f6+="<div";
f4.a={"class":new yr.scalarAttr("radio-settings__language")};
f4.s="div";
var f5={};f5.param="language";
var f3=[];var f1={a:{}};
var f2={};var M={a:{}};
f2.text="Любая";
f2.checked=k("any",f7.s(a1,j0));
var f0={};var j2={a:{}};
f0.value="any";
f2.attrs=f0;
f3.push(f2);
var f2={};var M={a:{}};
f2.text="Русская";
f2.checked=k("russian",f7.s(a1,j0));
var f0={};var j2={a:{}};
f0.value="russian";
f2.attrs=f0;
f3.push(f2);
var f2={};var M={a:{}};
f2.text="Зарубежная";
f2.checked=k("not-russian",f7.s(a1,j0));
var f0={};var j2={a:{}};
f0.value="not-russian";
f2.attrs=f0;
f3.push(f2);
f5.group=f3;
f6+=f7.a(f7,yr.object2nodeset(f5),"button-group",f4,"S");
f6+=lE(f4);
f6+="</div>"
}f6+="<div";
f4.a={"class":new yr.scalarAttr("radio-settings__pop-factor")};
f4.s="div";
var f5={};f5.param="popFactor";
var f3=[];var f1={a:{}};
var f2={};var M={a:{}};
f2.text="Популярная";
f2.checked=k("1",f7.s(aQ,j0));
var f0={};var j2={a:{}};
f0.value="1";
f2.attrs=f0;
f3.push(f2);
var f2={};var M={a:{}};
f2.text="Разнообразная";
f2.checked=k("0",f7.s(aQ,j0));
var f0={};var j2={a:{}};
f0.value="0";
f2.attrs=f0;
f3.push(f2);
f5.group=f3;
f6+=f7.a(f7,yr.object2nodeset(f5),"button-group",f4,"S");
f6+=lE(f4);
f6+="</div>";
f6+='<div class="radio-settings__tail-wrapper">';
f6+='<div class="radio-settings__tail"></div>';
f6+="</div>";
f6+="</div>";
return f6};
sy.t301.j=rl;
sy.t301.a=0;
sy.t302=function d5(f3,j1,f8,f6,M){var f1="";
var j2=(yr.externals.genreName)(lP("id",j1));
function f2(j3,j5,j6,j4){return j6<4
}var j0=[0,"albums",2,f2];
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("radio")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,j1),"radio"));
f1+=lE(M);f1+='<div class="radio__mosaic">';
var f7=f3.s(j0,j1);
for(var f5=0,f4=f7.length;
f5<f4;f5++){var f9=f7[f5];
f1+='<img src="'+eB(((yr.externals.cover)(lP("coverUri",f9),100)))+'" class="radio__img" alt=""/>'
}f1+="</div>";
var f0={};f0.icon="play";
f1+=f3.a(f3,yr.object2nodeset(f0),"button",M,"","radio__play");
f1+='<div class="radio__title" title="'+eB((j2))+'">';
f1+='<a href="/genre/'+dD((eq("id",j1,[])))+'" class="link">';
f1+=ma(j2);
f1+="</a>";
f1+="</div>";
f1+="<div";
M.a={"class":new yr.scalarAttr("radio__artists")};
M.s="div";f1+=f3.a(f3,eq("artists",j1,[]),"artists",M,false,"");
f1+=lE(M);f1+="</div>";
f1+="</div>";
return f1};
sy.t302.j=rl;
sy.t302.a=0;
sy.t303=function d4(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("scrobble-control js-scrobble-"+sx((eq("type",f3,[]))))};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"scrobble-control",true));
f2+=M.a(M,M.s(rg,f3),"scrobble-control__toggler",f0);
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("scrobble-control__connected")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"scrobble-control__connected",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
return f2};
sy.t303.j=rl;
sy.t303.a=0;
sy.t304=function d3(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(kk("name",f3)){f2+="<p";
f0.a={};f0.s="p";
f2+=M.a(M,M.s(rg,f3),"scrobble-control__profile",f0);
f2+=lE(f0);
f2+="</p>";
f2+="<p";f0.a={};
f0.s="p";f2+=M.a(M,M.s(rg,f3),"scrobble-control__disconnect",f0);
f2+=lE(f0);
f2+="</p>"}return f2
};sy.t304.j=rl;
sy.t304.a=0;
sy.t305=function d2(f3,f6,f5,f4,f0){var f2="";
var f1={};var M={a:{}};
f1.leftText="Вкл";
f1.rightText="Выкл";
f1.size="s";
f1.checked=kk("scrobblingEnabled",f6)&&kk("name",f6);
f1["class"]="scrobble-control__toggler";
var f7=f1;f2+=lE(f0);
f2+=f3.f("f27",f6,f5,f4,f0,yr.object2nodeset(f7));
return f2};
sy.t305.j=rl;
sy.t305.a=0;
sy.t306=function d1(M,f5,f6,f3,f2){var f4="";
f4+=lE(f2);
f4+='<div class="scrobble-control__profile">';
f4+="Ваш профиль: ";
f4+="<a";f2.a={target:new yr.scalarAttr("_blank"),"class":new yr.scalarAttr("link link_positive")};
f2.s="a";if(k("facebook",eq("type",f5,[]))){var f1="";
var f0={a:{}};
if(kk("link",f5)){f1+=lP("link",f5)
}else{f1+="//www.facebook.com/profile.php?id="+sx((eq("userid",f5,[])))
}f2.a.href=new yr.scalarAttr(f1)
}else{if(k("last-fm",eq("type",f5,[]))){f2.a.href=new yr.scalarAttr("//last.fm/user/"+sx((eq("name",f5,[]))))
}}f4+=lE(f2);
f4+=mC(eq("name",f5,[]));
f4+="</a>";
f4+="</div>";
return f4};
sy.t306.j=rl;
sy.t306.a=0;
sy.t307=function d0(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<a class="scrobble-control__disconnect link link_mute">Отвязать аккаунт</a>';
return f2};
sy.t307.j=rl;
sy.t307.a=0;
sy.t308=function dZ(f5,f8,f7,f6,f2){var f4="";
var f3=[];var f0={a:{}};
var f1={};var M={a:{}};
f1.name="www";
f1.href="//yandex.ru/yandsearch?text="+sx((f5.s(dS,f8)));
f1.title="Поиск";
f3.push(f1);
var f1={};var M={a:{}};
f1.name="music";
f1.title="Музыка";
f3.push(f1);
var f1={};var M={a:{}};
f1.name="images";
f1.href="//yandex.ru/images/search?stype=image&text="+sx((f5.s(dS,f8)));
f1.title="Картинки";
f3.push(f1);
var f1={};var M={a:{}};
f1.name="video";
f1.href="//yandex.ru/video/search?text="+sx((f5.s(dS,f8)));
f1.title="Видео";
f3.push(f1);
var f9=f3;f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("search-nav")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f8),"search-nav",true));
f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("search-nav__content")};
f2.s="div";
f4+=f5.a(f5,f5.n(rl,yr.array2nodeset(f9)),"search-nav__item",f2);
f4+=f5.a(f5,f5.s(rg,f8),"search-nav__more",f2);
f4+=lE(f2);
f4+="</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("search-nav__popup")};
f2.s="div";
f4+=f5.a(f5,f5.n(rl,yr.array2nodeset(f9)),"search-nav__item",f2);
f4+=lE(f2);
f4+="</div>";
f4+="</div>";
return f4};
sy.t308.j=rl;
sy.t308.a=0;
sy.t309=function dX(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<a";f0.a={name:new yr.scalarAttr(sx((eq("name",f3,[])))),target:new yr.scalarAttr("_blank"),"class":new yr.scalarAttr("search-nav__item")};
f0.s="a";if(kk("href",f3)){f0.a.href=new yr.scalarAttr(lP("href",f3))
}else{var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" search-nav_selected")
}else{f0.a["class"]=new yr.scalarAttr(" search-nav_selected")
}}f2+=lE(f0);
f2+='<div style="background-image:url(/blocks/search-nav/service-icon__'+dD((eq("name",f3,[])))+'_self.svg)" class="search-nav__icon"></div>';
f2+='<div class="search-nav__title">'+mC((eq("title",f3,[])))+"</div>";
f2+="</a>";
return f2};
sy.t309.j=rl;
sy.t309.a=0;
sy.t310=function dC(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="search-nav__item search-nav__item_more">';
f2+='<span class="search-nav__titlea">• • •</span>';
f2+="</div>";
return f2};
sy.t310.j=rl;
sy.t310.a=0;
sy.t311=function dB(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<span class="separator"></span>';
return f2};
sy.t311.j=rl;
sy.t311.a=0;
sy.t312=function dA(M,f4,f5,f1,f0,f3){var f2="";
return f2};
sy.t312.j=rl;
sy.t312.a=0;
sy.t313=function dz(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t313.j=rl;
sy.t313.a=0;
sy.t314=function dy(f3,f7,f6,f4,f0){var f2="";
var f1="";var M={a:{}};
f1+=f3.a(f3,f3.s(rg,f7),"share__tooltip-text",M);
var f9=f1;var f1={};
var M={a:{}};
f1.icon="share";
var f8=f1;f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("share button")};
f0.s="span";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,f7),"share",true));
f0.a.title=new yr.xmlAttr(f9);
f2+=f3.a(f3,yr.object2nodeset(f8),"button__class",f0,"","share");
if(kk("disabled",f7)){var f5=f0.a["class"];
if(f5){f0.a["class"]=f5.addscalar(" button_disabled")
}else{f0.a["class"]=new yr.scalarAttr(" button_disabled")
}}f2+=f3.a(f3,yr.object2nodeset(f8),"button__content",f0);
f2+=lE(f0);
f2+='<span class="share__yashare"></span>';
f2+="</span>";
return f2};
sy.t314.j=rl;
sy.t314.a=0;
sy.t315=function dx(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(kk("disabled",f3)&&kR(M.s(aE,f3))){f2+=mC(M.s(aE,f3))
}else{if(kR(M.s(aG,f3))){f2+=mC(M.s(aG,f3))
}else{f2+="Поделиться"
}}return f2
};sy.t315.j=rl;
sy.t315.a=0;
sy.t316=function dw(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t316.j=rl;
sy.t316.a=0;
sy.t317=function dv(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t317.j=rl;
sy.t317.a=0;
sy.t318=function du(f3,f6,f5,f4,f0){var f2="";
var f1="";var M={a:{}};
f1+=f3.a(f3,f3.s(rg,f6),"share__title",M);
var f7=f1;f2+=lE(f0);
f2+=a(f7);return f2
};sy.t318.j=rl;
sy.t318.a=0;
sy.t319=function ds(f0,f4,f5,f2,f1){var f3="";
function M(f7,f9,j0,f8){return 0
}var f6=[0,"album",0,"artists",3,0,0,"name"];
f3+=lE(f1);
f3+=mC((f0.s(f6,f4)))+" — альбом «"+mC((f0.s(az,f4)))+"»";
return f3};
sy.t319.j=aC;
sy.t319.a=0;
sy.t320=function c7(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma((M.v("v67",f3.doc.root)))+"/album/"+mC((M.s(cg,f3)));
return f2};
sy.t320.j=aC;
sy.t320.a=0;
sy.t321=function c6(M,f4,f5,f1,f0){var f2="";
function f6(f7,f9,j0,f8){return 0
}var f3=[0,"track",0,"artists",3,0,0,"name"];
f2+=lE(f0);
f2+=mC((M.s(f3,f4)))+" — "+mC((M.s(sl,f4)));
return f2};
sy.t321.j=sm;
sy.t321.a=0;
sy.t322=function c5(f3,f6,f5,f4,f0){var f2="";
var f1=[];if(kk("albumId",f6)){f1=eq("albumId",f6,[])
}else{function M(f9,j1,j2,j0){return 0
}var f8=[0,"track",0,"albums",3,0,0,"id"];
f1=f3.s(f8,f6)
}var f7=f1;
f2+=lE(f0);
f2+=ma((f3.v("v67",f6.doc.root)))+"/album/"+mC((f7))+"/track/"+mC((f3.s(sj,f6)));
return f2};
sy.t322.j=sm;
sy.t322.a=0;
sy.t323=function c4(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC(M.s(nB,f3));
return f2};
sy.t323.j=si;
sy.t323.a=0;
sy.t324=function c3(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma((M.v("v67",f3.doc.root)))+"/artist/"+mC((M.s(sh,f3)));
if(kk("what",f3)){f2+="/"+mC((eq("what",f3,[])))
}return f2};
sy.t324.j=si;
sy.t324.a=0;
sy.t325=function c2(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(kk("isOwner",f3)){f2+="Мой плейлист «"+mC((M.s(jo,f3)))+"»"
}else{f2+="Плейлист «"+mC((M.s(jo,f3)))+"» пользователя "+mC((M.s(jt,f3)))
}return f2};
sy.t325.j=sg;
sy.t325.a=0;
sy.t326=function c1(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma((M.v("v67",f3.doc.root)))+"/users/"+mC((M.s(jt,f3)))+"/playlists/"+mC((M.s(jq,f3)));
return f2};
sy.t326.j=sg;
sy.t326.a=0;
sy.t327=function c0(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma((yr.externals.genreName)(sx(M.s(r5,f3))));
return f2};
sy.t327.j=sf;
sy.t327.a=0;
sy.t328=function cZ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=ma((M.v("v67",f3.doc.root)))+"/genre/"+mC((M.s(r5,f3)));
if(kk("filter",f3)){f2+="/"+mC((eq("filter",f3,[])))
}return f2};
sy.t328.j=sf;
sy.t328.a=0;
sy.t329=function cX(f3,f6,f5,f4,f0){var f2="";
var f7=f3.n(r3,yr.object2nodeset((yr.externals.experiments)()));
var f1={};var M={a:{}};
if((k("a",f7)||k("b",f7))){f1.rtb=1;
f1.rtbId="R-I-136563-2"
}else{f1.rtb=1;
f1.direct=1;
f1.rtbId="R-I-136563-1";
f1.directId="D-I-136563-7"
}var f8=f1;
f2+=lE(f0);
f2+='<div class="sidebar">';
f2+="<div";
f0.a={"class":new yr.scalarAttr("sidebar__under")};
f0.s="div";
f2+=f3.a(f3,yr.object2nodeset(f8),"smalladv",f0);
f2+=lE(f0);
f2+="</div>";
var f1={};f1.listenOn="sidebars";
f2+=f3.a(f3,yr.object2nodeset(f1),"loading",f0,"loading_sidebar");
f2+="</div>";
return f2};
sy.t329.j=rl;
sy.t329.a=0;
sy.t330=function cQ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("smalladv")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"smalladv",true));
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t330.j=rl;
sy.t330.a=0;
sy.t331=function cP(M,f4,f5,f2,f1){var f3="";
var f6="/album/"+sx((eq("id",f4,[])));
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("snippet-album")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"snippet-album"));
f3+=lE(f1);
f3+='<div class="snippet-album__title">';
f3+='<a class="link link_major" href="'+eB((f6))+'">'+mC((eq("title",f4,[])))+"</a>";
f3+="</div>";
f3+='<div class="snippet-album__info">';
f3+='<a class="snippet-album__cover" href="'+eB((f6))+'">';
f3+='<img src="'+eB(((yr.externals.cover)(lP("cover",f4),200)))+'" class="snippet-album__cover-img"/>';
f3+="</a>";
f3+=M.a(M,M.s(rg,f4),"album-summary",f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("snippet-album__controls")};
f1.s="div";
var f0={};f0.icon="play";
f0.text="Слушать";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"L","js-play-album");
f3+=lE(f1);
f3+=" ";var f0={};
f0.album=yr.nodeset2data(M.s(rg,f4));
f0.pin="right";
f0.size="L";
f3+=M.a(M,yr.object2nodeset(f0),"like",f1);
var f0={};f0.album=yr.nodeset2data(M.s(rg,f4));
f0.pin="left";
f3+=M.a(M,yr.object2nodeset(f0),"add-to",f1,"L");
f3+="</div>";
f3+="</div>";
if(kk("tracks",f4)){f3+="<div";
f1.a={};f1.s="div";
f3+=M.a(M,eq("tracks",f4,[]),"track",f1);
f3+=lE(f1);
f3+="</div>";
f3+='<div class="snippet-album__more">';
f3+='<a class="link link_minor" href="'+eB((f6))+'">Все треки альбома</a>';
f3+="</div>"
}f3+="</div>";
return f3};
sy.t331.j=rl;
sy.t331.a=0;
sy.t332=function cO(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("serp-snippet__item snippet-artist")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"snippet-artist__head",f0);
f2+=M.a(M,M.s(rg,f3),"snippet-artist__tracks",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t332.j=rl;
sy.t332.a=0;
sy.t333=function cN(M,f3,f5,f1,f0,f4){f4=(f4===undefined)?-1:f4;
var f2="";f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("serp-snippet__item snippet-artist")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"snippet-artist__head",f0);
f2+=lE(f0);
f2+="<div";
f0.a={style:new yr.scalarAttr("margin: 0 -16px;")};
f0.s="div";
f2+=M.a(M,eq("topAlbums",f3,[]),"album_compact",f0);
f2+=lE(f0);
f2+='<div style="clear: both;"></div>';
f2+="</div>";
f2+='<div class="serp-snippet__head">Популярные треки</div>';
f2+=M.a(M,M.s(rg,f3),"snippet-artist__tracks",f0);
f2+='<a href="/artist/'+dD((eq("id",f3,[])))+'" class="serp-snippet__more link link_minor">На страницу исполнителя</a>';
f2+="</div>";
return f2};
sy.t333.j=rl;
sy.t333.a=0;
sy.t334=function cM(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("snippet-artist__name")};
f0.s="span";
f2+=M.a(M,M.s(rg,f3),"artists",f0,false,"link_major");
f2+=lE(f0);
f2+="</span>";
f2+=" ";f2+='<span class="snippet-artist__count">';
f2+=ma((yr.externals.plural)(sx(M.s(r1,f3)),"","%s альбом","%s альбома","%s альбомов"));
if((sx(M.s(r1,f3))>0)&&(sx(M.s(r0,f3))>0)){f2+=", "
}f2+=ma((yr.externals.plural)(sx(M.s(r0,f3)),"","%s трек","%s трека","%s треков"));
f2+="</span>";
return f2};
sy.t334.j=rl;
sy.t334.a=0;
sy.t335=function cL(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("serp-snippet__tracks")};
f0.s="div";
f2+=M.a(M,eq("tracks",f3,[]),"track",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t335.j=rl;
sy.t335.a=0;
sy.t336=function cK(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<button";
f0.a={"class":new yr.scalarAttr("social-bind button")};
f0.s="button";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"social-bind"));
if(kk("buttonClass",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" "+sx((eq("buttonClass",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" "+sx((eq("buttonClass",f3,[]))))
}}f2+=lE(f0);
f2+='<span class="button__label">'+mC((eq("text",f3,[])))+"</span>";
f2+="</button>";
return f2};
sy.t336.j=rl;
sy.t336.a=0;
sy.t337=function cJ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="spinner">';
f2+='<span class="spinner__circle"></span>';
f2+="</div>";
return f2};
sy.t337.j=rl;
sy.t337.a=0;
sy.t338=function cI(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="stamp">';
if(kk("href",f3)){f2+='<a class="stamp__title link link_mute" href="'+dD((eq("href",f3,[])))+'">'+mC((eq("title",f3,[])))+"</a>"
}else{f2+='<span class="stamp__title">'+mC((eq("title",f3,[])))+"</span>"
}f2+="</div>";
return f2};
sy.t338.j=rl;
sy.t338.a=0;
sy.t339=function cG(M,f5,f6,f2,f1,f4){var f3="";
f3+=lE(f1);
f3+="<span";
f1.a={"class":new yr.scalarAttr("subscribe")};
f1.s="span";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f5),"subscribe"));
if(kR(M.s(rY,f5))&&!(ak(M.s(rX,f5),M.s(rY,f5)))){var f0={};
f0.user=yr.nodeset2data(eq("user",f5,[]));
f0.subscribed=(yr.externals.isFavorite)(M.s(rg,f5));
f3+=M.a(M,yr.object2nodeset(f0),"subscribe__button",f1)
}f3+=lE(f1);
if(kk("subscribers",f5)){f3+=" ";
var f0={};f0.content=yr.nodeset2data(eq("subscribers",f5,[]));
f3+=M.a(M,yr.object2nodeset(f0),"hint",f1)
}f3+="</span>";
return f3};
sy.t339.j=rl;
sy.t339.a=0;
sy.t340=function cz(f5,f9,f8,f6,f2){var f4="";
var f3="";var f0={a:{}};
if(!kk("subscribed",f9)){f3+=" button_action"
}else{f3+=""
}var f7=f3;
var f3={};var f1="";
var M={a:{}};
if(kk("subscribed",f9)){f1+="Отписаться"
}else{f1+="Подписаться"
}f3.text=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"","subscribe__button"+f7);
return f4};
sy.t340.j=rl;
sy.t340.a=0;
sy.t341=function cy(f3,f9,f8,f6,f0){var f2="";
var f1="";var M={a:{}};
if(kk("selected",f9)){f1+=" table-head_active"
}if(kk("sort",f9)){f1+=" table-head_sort"
}var f5=f1;
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("table-head")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,f9),"table-head"));
var f7=f0.a["class"];
if(f7){f0.a["class"]=f7.addscalar((f5))
}else{f0.a["class"]=new yr.scalarAttr((f5))
}if(kR(f3.s(rL,f9))){var f4=eq("selected",f9,[]);
f2+=lE(f0);
f2+="<a";f0.a={"class":new yr.scalarAttr("table-head__link"),href:new yr.scalarAttr(sx((f3.s(rJ,f9)))+"?sort="+sx((f3.s(rI,f9)))+"&dir="+(f3.f("f34",f9,f8,f6,sx(f3.s(rH,f9)),kR(f4))))};
f0.s="a";f2+=f3.a(f3,f3.s(rg,f9),"table-head__content",f0);
f2+=lE(f0);
f2+="</a>"}else{f2+=f3.a(f3,f3.s(rg,f9),"table-head__content",f0)
}f2+=lE(f0);
f2+="</div>";
return f2};
sy.t341.j=rl;
sy.t341.a=0;
sy.t342=function cx(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+='<span class="table-head__title">';
f3+=mC(eq("title",f4,[]));
f3+="</span>";
if(kR(M.s(rI,f4))){var f0=M.f("f34",f4,f5,f2,sx(M.s(rH,f4)));
f3+='<span class="table-head__sort-dir">';
f3+='<span class="icon icon_'+eB((f0))+' icon_size_S"></span>';
f3+="</span>"
}return f3};
sy.t342.j=rl;
sy.t342.a=0;
sy.t343=function cw(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("table__row table__row_header")};
f0.s="div";
f2+=M.a(M,eq("*",f3,[]),"table__head-item",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t343.j=rl;
sy.t343.a=0;
sy.t344=function cv(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("table__row table__row_header table__head_track-artist")};
f1.s="div";
var f0={};f0.title="#";
f0.size=1;f0["class"]="table__column_num";
f0.fixed=true;
f3+=M.a(M,yr.object2nodeset(f0),"table__head-item",f1,M.s(rg,f4));
var f0={};f0.title="Название";
f0.size=7;f0["class"]="table__column_name";
f0.sortParam="title";
f3+=M.a(M,yr.object2nodeset(f0),"table__head-item",f1,M.s(rg,f4));
var f0={};f0.title="Исполнитель";
f0.size=7;f0.sortParam="artist";
f3+=M.a(M,yr.object2nodeset(f0),"table__head-item",f1,M.s(rg,f4));
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t344.j=rl;
sy.t344.a=0;
sy.t345=function cu(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("table__row table__row_header table__head_track-album")};
f1.s="div";
var f0={};f0.title="#";
f0.size=1;f0["class"]="table__column_num";
f0.fixed=true;
f3+=M.a(M,yr.object2nodeset(f0),"table__head-item",f1,M.s(rg,f4));
var f0={};f0.title="Название трека";
f0.size=7;f0["class"]="table__column_name";
f0.sortParam="title";
f3+=M.a(M,yr.object2nodeset(f0),"table__head-item",f1,M.s(rg,f4));
var f0={};f0.title="Альбом";
f0.size=7;f0.sortParam="album";
f3+=M.a(M,yr.object2nodeset(f0),"table__head-item",f1,M.s(rg,f4));
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t345.j=rl;
sy.t345.a=0;
sy.t346=function ct(f9,j3,j2,j0,f5,f7){f7=(f7===undefined)?[]:f7;
var f8="";var f6={};
var f2={a:{}};
f6.title=yr.nodeset2data(eq("title",j3,[]));
f6.size=yr.nodeset2data(eq("size",j3,[]));
f6.selected=ak(f9.n(rV,f7),eq("sortParam",j3,[]));
if(kR(f9.n(rF,f7))){var f4={};
var f0={a:{}};
f4.useLink=true;
f4.param=yr.nodeset2data(eq("sortParam",j3,[]));
f4.url=yr.nodeset2data(f9.n(cD,f7));
var f1="";var M={a:{}};
if(ak(f9.n(rV,f7),eq("sortParam",j3,[]))&&kR(f9.n(el,f7))){f1+=sx(f9.n(el,f7))
}else{f1+="asc"
}f4.dir=f1;
f6.sort=f4}var f3=f6;
f8+=lE(f5);
f8+="<div";
f5.a={"class":new yr.scalarAttr("table__column table__column_wrap table__column_"+sx((eq("size",j3,[]))))};
f5.s="div";
if(kk("fixed",j3)){var j1=f5.a["class"];
if(j1){f5.a["class"]=j1.addscalar(" table__column_fixed")
}else{f5.a["class"]=new yr.scalarAttr(" table__column_fixed")
}}if(kk("class",j3)){var j1=f5.a["class"];
if(j1){f5.a["class"]=j1.addscalar(" "+sx((eq("class",j3,[]))))
}else{f5.a["class"]=new yr.scalarAttr(" "+sx((eq("class",j3,[]))))
}}f8+=f9.a(f9,yr.object2nodeset(f3),"table-head",f5);
f8+=lE(f5);
f8+="</div>";
return f8};
sy.t346.j=rl;
sy.t346.a=0;
sy.t347=function cs(f0,f4,f5,f2,f1,M){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("tabs")};
f1.s="div";
f3+=f0.a(f0,eq("*",f4,[]),"tabs__tab",f1,M);
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t347.j=rl;
sy.t347.a=0;
sy.t348=function cr(f5,f8,f7,f6,f2,f1){var f4="";
f4+=lE(f2);
if(k(f1,eq("id",f8,[]))){f4+="<span";
f2.a={"class":new yr.scalarAttr("tabs__tab tabs__tab_current")};
f2.s="span";
f4+=f5.a(f5,f5.s(rg,f8),"tabs__title",f2);
f4+=lE(f2);
f4+="</span>"
}else{var f3="";
var f0={a:{}};
if(kk("class",f8)){f3+="link "+sx((eq("class",f8,[])))
}else{f3+="link"
}var M=f3;f4+='<span class="tabs__tab">';
f4+="<span";
f2.a={"class":new yr.scalarAttr("tabs__tab-extender")};
f2.s="span";
f4+=f5.a(f5,f5.s(rg,f8),"tabs__title",f2);
f4+=lE(f2);
f4+="</span>";
if(kk("href",f8)){f4+="<a";
f2.a={"class":new yr.scalarAttr((M)),href:new yr.scalarAttr(sx((eq("href",f8,[]))))};
f2.s="a";f4+=f5.a(f5,f5.s(rg,f8),"tabs__title",f2);
f4+=lE(f2);
f4+="</a>"}else{f4+="<span";
f2.a={"class":new yr.scalarAttr((M))};
f2.s="span";
f4+=f5.a(f5,f5.s(rg,f8),"tabs__title",f2);
f4+=lE(f2);
f4+="</span>"
}f4+="</span>"
}return f4};
sy.t348.j=rl;
sy.t348.a=0;
sy.t349=function cp(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC(eq("title",f3,[]));
if(kk("note",f3)){f2+='<span class="tabs__note"> '+mC((eq("note",f3,[])))+"</span>"
}return f2};
sy.t349.j=rl;
sy.t349.a=0;
sy.t350=function cf(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("text-expander")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"text-expander"));
f2+=lE(f0);
f2+='<div class="text-expander__preview">';
f2+='<span class="text-expander__static-text">'+mC((eq("preview",f3,[])))+"...</span>";
f2+='<a class="link link_minor text-expander__link text-expander__link_expand">Развернуть ▼</a>';
f2+="</div>";
f2+='<div class="text-expander__content">';
f2+='<span class="text-expander__static-text">'+mC((eq("text",f3,[])))+"</span>";
f2+='<a class="link link_minor text-expander__link text-expander__link_collapse">Свернуть ▲</a>';
f2+="</div>";
f2+="</div>";
return f2};
sy.t350.j=rl;
sy.t350.a=0;
sy.t351=function ce(M,f3,f5,f1,f0,f6){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("title")};
f0.s="div";
if(kk("tabLink",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" title_hover")
}else{f0.a["class"]=new yr.scalarAttr(" title_hover")
}}if(f6){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" "+(f6))
}else{f0.a["class"]=new yr.scalarAttr(" "+(f6))
}}f2+=lE(f0);
f2+='<span class="title__label">';
f2+=mC(eq("title",f3,[]));
f2+="</span>";
if(kk("tabLink",f3)){f2+="<a";
f0.a={href:new yr.scalarAttr(sx((eq("tabLink",f3,[])))),"class":new yr.scalarAttr("link link_arrow")};
f0.s="a";if(kk("target",f3)){f0.a.target=new yr.scalarAttr(lP("target",f3))
}f2+=lE(f0);
f2+=mC(eq("titleLink",f3,[]));
f2+="</a>"}if(kk("content",f3)){f2+=lP("content",f3)
}f2+="</div>";
return f2};
sy.t351.j=rl;
sy.t351.a=0;
sy.t352=function cd(f6,f9,f8,f7,f3){var f5="";
var f4={};var f1={a:{}};
var f2="";var f0={a:{}};
if(kk("leftText",f9)){f2+=lP("leftText",f9)
}else{f2+="Вкл"
}f4.leftText=f2;
var f2="";var f0={a:{}};
if(kk("rightText",f9)){f2+=lP("rightText",f9)
}else{f2+="Выкл"
}f4.rightText=f2;
var f2="";var f0={a:{}};
if(kk("size",f9)){f2+=lP("size",f9)
}else{f2+="s"
}f4.size=f2;
f4.checked=yr.nodeset2data(eq("checked",f9,[]));
var M=f4;f5+=lE(f3);
f5+="<span";
f3.a={"class":new yr.scalarAttr("toggler-control")};
f3.s="span";
f3.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f6.s(rg,f9),"toggler-control",true));
f5+=lE(f3);
f5+=f6.f("f27",f9,f8,f7,f3,yr.object2nodeset(M));
f5+="</span>";
return f5};
sy.t352.j=rl;
sy.t352.a=0;
sy.t353=function cc(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("tooltip tooltip_hidden")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"tooltip",true));
if(kk("class",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" "+sx((eq("class",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" "+sx((eq("class",f3,[]))))
}}f2+=lE(f0);
f2+='<div class="tooltip__content">';
f2+='<span class="tooltip__static-text">'+mC((eq("text",f3,[])))+"</span>";
f2+="</div>";
f2+='<div class="tooltip__tail">';
f2+='<div class="tooltip__tail-elem"></div>';
f2+="</div>";
f2+="</div>";
return f2};
sy.t353.j=rl;
sy.t353.a=0;
sy.t354=function cb(f3,f6,f5,f4,f0,f8){var f2="";
var f1="";var M={a:{}};
if((f8)){f1+=f8
}else{f1+=100
}var f7=f1;
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("top-pic")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,f6),"top-pic"));
f2+=lE(f0);
f2+='<img class="top-pic__img top-pic__img_'+eB((f7))+' top-pic__img_bottom"/>';
f2+='<img class="top-pic__img top-pic__img_'+eB((f7))+' top-pic__img_top" src="'+eB(((yr.externals.cover)(lP("coverUri",f6),f7)))+'"/>';
f2+="</div>";
return f2};
sy.t354.j=rl;
sy.t354.a=0;
sy.t355=function ca(f3,j0,f8,f6,f0){var f2="";
var f1="";var M={a:{}};
if(kR((eq("coverSize",j0,[])))){f1+=lP("coverSize",j0)
}else{f1+=100
}var j3=f1;
var j2=(yr.externals.shuffle)(eq("albums",j0,[]));
function j4(j5,j7,j8,j6){return j8<20
}var j1=[2,j4];
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("top-pics top-pics_"+(j3))};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,j0),"top-pics",true));
var f7=f3.n(j1,j2);
for(var f5=0,f4=f7.length;
f5<f4;f5++){var f9=f7[f5];
f2+=f3.a(f3,f3.s(rg,f9),"top-pic",f0,j3)
}f2+=lE(f0);
f2+="</div>";
return f2};
sy.t355.j=rl;
sy.t355.a=0;
sy.t356=function b9(f1,f5,f4,f2,M,f7,f9,f8,f6){var f0="";
f0+=lE(M);f0+="<div";
M.a={"class":new yr.scalarAttr("track track_type_full")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f1.s(rg,f5),"track"));
if(!f7){var f3=M.a["class"];
if(f3){M.a["class"]=f3.addscalar(" track_selectable")
}else{M.a["class"]=new yr.scalarAttr(" track_selectable")
}}f0+=f1.a(f1,f1.s(rg,f5),"track_in-lib",M);
f0+=f1.a(f1,f1.s(rg,f5),"track__cover",M,f8);
f0+=f1.a(f1,f1.s(rg,f5),"track__play-button",M);
f0+=lE(M);f0+='<div class="track__name">';
f0+="<div";
M.a={"class":new yr.scalarAttr("track__name-wrap")};
M.s="div";f0+=f1.a(f1,f1.s(rg,f5),"track__title",M,f8);
f0+=f1.a(f1,f1.s(rg,f5),"track__artists_newline",M,f9);
f0+=lE(M);f0+="</div>";
f0+="</div>";
f0+="<div";
M.a={"class":new yr.scalarAttr("track__time")};
M.s="div";f0+=f1.a(f1,f1.s(rg,f5),"track__time",M);
f0+=f1.a(f1,f1.s(rg,f5),"track__actions",M,f8,f6);
f0+=lE(M);f0+="</div>";
f0+="</div>";
return f0};
sy.t356.j=rl;
sy.t356.a=0;
sy.t357=function b8(f1,f4,f3,f2,M,f7,f6,f5){f5=(f5===undefined)?f3:f5;
var f0="";f0+=lE(M);
f0+="<div";
M.a={"class":new yr.scalarAttr("track track_type_full track_type_chart track_selectable")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f1.s(rg,f4),"track"));
f0+=lE(M);f0+='<div class="track__id">';
f0+=ma((f5+1));
f0+="</div>";
f0+=f1.a(f1,f1.s(rg,f4),"track__cover",M,f6);
f0+=f1.a(f1,f1.s(rg,f4),"track__play-button",M);
f0+='<div class="track__name">';
f0+="<div";
M.a={"class":new yr.scalarAttr("track__name-wrap")};
M.s="div";f0+=f1.a(f1,f1.s(rg,f4),"track__title",M,f6);
f0+=f1.a(f1,f1.s(rg,f4),"track__artists_newline",M,f7);
f0+=lE(M);f0+="</div>";
f0+="</div>";
f0+="<div";
M.a={"class":new yr.scalarAttr("track__time")};
M.s="div";f0+=f1.a(f1,f1.s(rg,f4),"track__time",M);
f0+=f1.a(f1,f1.s(rg,f4),"track__actions",M,f6);
f0+=lE(M);f0+="</div>";
f0+="</div>";
return f0};
sy.t357.j=rl;
sy.t357.a=0;
sy.t358=function b7(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("track track_type_full track_type_query track_selectable")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(eq("track",f3,[]),"track"));
f2+=lE(f0);
f2+='<div class="track__cover">';
f2+='<div class="icon icon_search_white"></div>';
f2+="</div>";
f2+=M.a(M,eq("track",f3,[]),"track__play-button",f0);
f2+='<div class="track__name">';
f2+='<div class="track__name-wrap">';
f2+='<span class="track__title">'+mC((eq("searchQuery",f3,[])))+"</span>";
if(kk("description",f3)){f2+='<div class="track__description">'+mC((eq("description",f3,[])))+"</div>"
}f2+="</div>";
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("track__time")};
f0.s="div";
f2+=M.a(M,eq("track",f3,[]),"track__time",f0);
f2+=M.a(M,eq("track",f3,[]),"track__actions",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
return f2};
sy.t358.j=rl;
sy.t358.a=0;
sy.t359=function b5(f1,f5,f3,f2,M,f8,f7){var f0="";
var f6=f1.s(ro,f5);
var f4=3;f0+=lE(M);
f0+="<div";
M.a={"class":new yr.scalarAttr("track track_type_full track_type_social track_selectable")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f1.s(rg,f5),"track"));
f0+=f1.a(f1,f1.s(rg,f5),"track_in-lib",M);
f0+=f1.a(f1,f1.s(rg,f5),"track__cover",M,f7);
f0+=f1.a(f1,f1.s(rg,f5),"track__play-button",M);
f0+=lE(M);f0+='<div class="track__name">';
f0+="<div";
M.a={"class":new yr.scalarAttr("track__name-wrap")};
M.s="div";f0+=f1.a(f1,f1.s(rg,f5),"track__title",M,f7);
f0+=f1.a(f1,f1.s(rg,f5),"track__artists_newline",M,f8);
f0+=lE(M);f0+="</div>";
f0+="</div>";
f0+="<div";
M.a={"class":new yr.scalarAttr("track__users")};
M.s="div";if((f6).length>f4){function j0(j1,j3,j4,j2){return j4<f4-1
}var f9=[2,j0];
f0+=f1.a(f1,f1.n(f9,f6),"track__user",M);
f0+=f1.a(f1,f1.s(rg,f5),"track__more-users",M,f4)
}else{f0+=f1.a(f1,f6,"track__user",M)
}f0+=lE(M);
f0+="</div>";
f0+="<div";
M.a={"class":new yr.scalarAttr("track__time")};
M.s="div";f0+=f1.a(f1,f1.s(rg,f5),"track__time",M);
f0+=f1.a(f1,f1.s(rg,f5),"track__actions",M,f7);
f0+=lE(M);f0+="</div>";
f0+="</div>";
return f0};
sy.t359.j=rl;
sy.t359.a=0;
sy.t360=function bW(f3,f6,f5,f4,f0){var f2="";
var f1={};var M={a:{}};
f1.size="s";
f1.userpic=(yr.externals.userpic)(lP("uid",f6),"small");
var f7=f1;f2+=lE(f0);
f2+="<a";f0.a={href:new yr.scalarAttr("/users/"+sx((eq("login",f6,[]))))};
f0.s="a";f0.a.title=new yr.scalarAttr(lP("name",f6));
f2+=lE(f0);
f2+=f3.f("f25",f6,f5,f4,f0,yr.object2nodeset(f7));
f2+="</a>";
return f2};
sy.t360.j=rl;
sy.t360.a=0;
sy.t361=function bV(f3,j1,f8,f6,f0,j2){var f2="";
function j4(j5,j7,j8,j6){return j8>=j2-1
}var j3=[1,1,0,"likedByUsers",2,j4];
var j0=f3.s(j3,j1);
f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("track__more-users")};
f0.s="span";
var f1="";var M={a:{}};
var f7=j0;for(var f5=0,f4=f7.length;
f5<f4;f5++){var f9=f7[f5];
if(f5!=0){f1+=", "
}f1+=lP("name",f9)
}f0.a.title=new yr.scalarAttr(f1);
f2+=lE(f0);
f2+="+"+ma(((j0).length));
f2+="</span>";
return f2};
sy.t361.j=rl;
sy.t361.a=0;
sy.t362=function bU(f2,f9,f7,f4,M,f8,f5,f3,f1){f1=(f1===undefined)?f7:f1;
var f0="";f0+=lE(M);
f0+="<div";
M.a={"class":new yr.scalarAttr("track track_type_table table__row track_selectable")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f2.s(rg,f9),"track"));
if(kk("error",f9)){var f6=M.a["class"];
if(f6){M.a["class"]=f6.addscalar(" track_error")
}else{M.a["class"]=new yr.scalarAttr(" track_error")
}}f0+=f2.a(f2,f2.s(rg,f9),"track_in-lib",M);
f0+=lE(M);f0+="<div";
M.a={"class":new yr.scalarAttr("table__column table__column_7 table__column_wrap track__name")};
M.s="div";f0+=f2.a(f2,f2.s(rg,f9),"track__title",M,"");
f0+=lE(M);f0+="</div>";
f0+="<div";
M.a={"class":new yr.scalarAttr("table__column table__column_1 table__column_fixed track__num")};
M.s="div";f0+=f2.a(f2,f2.s(rg,f9),"track__num",M,f1);
f0+=f2.a(f2,f2.s(rg,f9),"track__play-button",M,"");
f0+=lE(M);f0+="</div>";
if(f5){f0+="<div";
M.a={"class":new yr.scalarAttr("table__column table__column_7 table__column_wrap track__album")};
M.s="div";f0+=f2.a(f2,eq("albums",f9,[]),"track__album",M,false,"link");
f0+=lE(M);f0+="</div>"
}else{f0+="<div";
M.a={"class":new yr.scalarAttr("table__column table__column_7 table__column_wrap track__artist")};
M.s="div";f0+=f2.a(f2,f2.s(rg,f9),"track__artists_along",M,"");
f0+=lE(M);f0+="</div>"
}f0+="<div";
M.a={"class":new yr.scalarAttr("table__column table__column_1 table__column_fixed track__time")};
M.s="div";f0+=f2.a(f2,f2.s(rg,f9),"track__time",M);
f0+=f2.a(f2,f2.s(rg,f9),"track__actions",M,false,f3);
f0+=lE(M);f0+="</div>";
f0+="</div>";
return f0};
sy.t362.j=rl;
sy.t362.a=0;
sy.t363=function bT(M,f3,f4,f1,f0,f5){f5=(f5===undefined)?f4:f5;
var f2="";f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("track track_type_table-album table__row track_selectable")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"track"));
f2+=M.a(M,M.s(rg,f3),"track_in-lib",f0);
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("table__column table__column_7 table__column_wrap track__name")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"track__title",f0);
f2+=lE(f0);
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("table__column table__column_1 table__column_fixed track__num")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"track__num",f0,f5);
f2+=M.a(M,M.s(rg,f3),"track__play-button",f0);
f2+=lE(f0);
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("table__column table__column_7 table__column_wrap track__album")};
f0.s="div";
f2+=M.a(M,eq("albums",f3,[]),"track__album",f0,false);
f2+=lE(f0);
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("table__column table__column_1 table__column_fixed track__time")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"track__time",f0);
f2+=M.a(M,M.s(rg,f3),"track__actions",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
return f2};
sy.t363.j=rl;
sy.t363.a=0;
sy.t364=function bS(M,f4,f6,f1,f0,f5){var f2="";
var f3=sx(M.s(cg,f4));
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("track track_type_player")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(eq("track",f4,[]),"track"));
f2+=M.a(M,eq("track",f4,[]),"track__cover",f0,f3);
f2+=lE(f0);
f2+='<div class="track__name">';
f2+="<div";
f0.a={"class":new yr.scalarAttr("track__name-wrap")};
f0.s="div";
f2+=M.a(M,eq("track",f4,[]),"track__title",f0,f3);
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("track__artists")};
f0.s="div";
f2+=M.a(M,M.s(rn,f4),"artists",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
f2+="</div>";
f2+="</div>";
return f2};
sy.t364.j=rl;
sy.t364.a=0;
sy.t365=function bR(f5,f9,f8,f6,f3,f2,f1,f0,M){f1=(f1===undefined)?[]:f1;
M=(M===undefined)?f8:M;
var f4="";f4+=lE(f3);
f4+="<div";
f3.a={"class":new yr.scalarAttr("track")};
f3.s="div";
f3.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f9),"track"));
if(!f2){var f7=f3.a["class"];
if(f7){f3.a["class"]=f7.addscalar(" track_selectable")
}else{f3.a["class"]=new yr.scalarAttr(" track_selectable")
}}if(kk("error",f9)){var f7=f3.a["class"];
if(f7){f3.a["class"]=f7.addscalar(" track_error")
}else{f3.a["class"]=new yr.scalarAttr(" track_error")
}}f4+=f5.a(f5,f5.s(rg,f9),"track_in-lib",f3);
f4+=f5.a(f5,f5.s(rg,f9),"track__num",f3,M);
f4+=f5.a(f5,f5.s(rg,f9),"track__play-button",f3,"");
f4+=lE(f3);
f4+='<div class="track__name">';
f4+="<div";
f3.a={"class":new yr.scalarAttr("track__name-wrap")};
f3.s="div";
f4+=f5.a(f5,f5.s(rg,f9),"track__title",f3,f0);
f4+=f5.a(f5,f5.s(rg,f9),"track__artists",f3,f1);
f4+=lE(f3);
f4+="</div>";
f4+="</div>";
f4+="<div";
f3.a={"class":new yr.scalarAttr("track__time")};
f3.s="div";
f4+=f5.a(f5,f5.s(rg,f9),"track__time",f3);
f4+=f5.a(f5,f5.s(rg,f9),"track__actions",f3,"","");
f4+=lE(f3);
f4+="</div>";
f4+="</div>";
return f4};
sy.t365.j=rl;
sy.t365.a=0;
sy.t366=function bQ(f2,f6,f5,f3,M){var f1="";
var f0=[];if(kk("original",f6)){f0=eq("original",f6,[])
}else{f0=f2.s(rg,f6)
}var f7=f0;
if((yr.externals.isInLibrary)((function(){var j1={};
var j0={a:{}};
var f9={};var f8={a:{}};
f9.track=yr.nodeset2data(f7);
j1.entry=f9;
return j1})())){var f4=M.a["class"];
if(f4){M.a["class"]=f4.addscalar(" track_in-lib")
}else{M.a["class"]=new yr.scalarAttr(" track_in-lib")
}}return f1
};sy.t366.j=rl;
sy.t366.a=0;
sy.t367=function bP(M,f4,f5,f2,f1,f0){var f3="";
f3+=lE(f1);
f3+='<div class="track__id track__nohover">';
f3+=ma((f0+1))+".";
f3+="</div>";
return f3};
sy.t367.j=rl;
sy.t367.a=0;
sy.t368=function bO(f4,f7,f6,f5,f1,f9,f8){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("track__play track__hover")};
f1.s="div";
if(!f8){var f2={};
f2.icon="pp";
f3+=f4.a(f4,yr.object2nodeset(f2),"button",f1,f9)
}else{var f2={};
f2.icon="pp";
var f0={};var M={a:{}};
f0.disabled=true;
f2.attrs=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"button",f1,f9," button_disabled")
}f3+=lE(f1);
f3+="</div>";
return f3};
sy.t368.j=rl;
sy.t368.a=0;
sy.t369=function bL(f3,f7,f5,f4,f0,j0){var f2="";
var f1="";var M={a:{}};
if(j0){f1+=j0
}else{function j1(j2,j4,j5,j3){return 0
}var f6=[0,"albums",3,0,0,"id"];
f1+=sx(f3.s(f6,f7))
}var f9=f1;
var f1="";var M={a:{}};
if(kk("error",f7)&&!kk("title",f7)){f1+="Трек недоступен"
}else{f1+=lP("title",f7)
}var f8=f1;
f2+=lE(f0);
if(f9&&!kk("error",f7)){f2+='<a href="/album/'+eB((f9))+"/track/"+dD((eq("id",f7,[])))+'" class="track__title link">'+ma((f8))+"</a>"
}else{f2+='<span class="track__title">'+ma((f8))+"</span>"
}if((kk("version",f7)&&!(k("Album Version",eq("version",f7,[]))))){f2+='<span class="track__ver">'+mC((eq("version",f7,[])))+"</span>"
}return f2};
sy.t369.j=rl;
sy.t369.a=0;
sy.t370=function bt(M,f5,f6,f1,f0,f4,f3){f3=(f3===undefined)?"link_mute":f3;
var f2="";f2+=lE(f0);
if(f4){f2+='<span class="'+eB((f3))+'">'+mC((eq("title",f5,[])))+"</span>"
}else{f2+='<a href="/album/'+dD((eq("id",f5,[])))+'" class="link '+eB((f3))+'">'+mC((eq("title",f5,[])))+"</a>"
}return f2};
sy.t370.j=rl;
sy.t370.a=0;
sy.t371=function bs(f1,f8,f5,f3,M,f6,f4){f6=(f6===undefined)?[]:f6;
var f0="";function f9(j0,j2,j3,j1){return !(yr.externals.contains)(f6,lP("id",j2))
}var f7=[0,"artists",2,f9];
var f2=f1.s(f7,f8);
f0+=lE(M);if((f2).length>0){f0+=" — ";
f0+=f1.a(f1,f2,"artists",M,f4)
}return f0};
sy.t371.j=rl;
sy.t371.a=0;
sy.t372=function br(f6,j1,f9,f8,f2,f7,f4){f7=(f7===undefined)?[]:f7;
var f5="";function j2(j3,j5,j6,j4){return !(yr.externals.contains)(f7,lP("id",j5))
}var j0=[0,"artists",2,j2];
var f1=f6.s(j0,j1);
if((f1).length>0){var f3="";
var f0={a:{}};
if(!f4){f3+="link"
}var M=f3;f5+=f6.a(f6,f1,"artists",f2,f4,M)
}return f5};
sy.t372.j=rl;
sy.t372.a=0;
sy.t373=function bq(f3,f7,f5,f4,f1,f0){f0=(f0===undefined)?[]:f0;
var f2="";function f8(f9,j1,j2,j0){return !(yr.externals.contains)(f0,lP("id",j1))
}var f6=[0,"artists",2,f8];
var M=f3.s(f6,f7);
f2+=lE(f1);
if((M).length>0){f2+="<div";
f1.a={"class":new yr.scalarAttr("track__artists nw")};
f1.s="div";
f2+=f3.a(f3,M,"artists",f1);
f2+=lE(f1);
f2+="</div>"
}return f2};
sy.t373.j=rl;
sy.t373.a=0;
sy.t374=function bp(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="track__lib track__nohover">✓ </div>';
f2+='<div class="track__nohover">'+ma(((yr.externals.formatDuration)(sx((eq("duration",f3,[])).concat(eq("durationMs",f3,[]))))))+"</div>";
return f2};
sy.t374.j=rl;
sy.t374.a=0;
sy.t375=function bo(f7,j0,f9,f8,f4,f1,M){var f6="";
var f5=[];if(kk("original",j0)){f5=eq("original",j0,[])
}else{f5=f7.s(rg,j0)
}var j2=f5;
var f5={};var f2={a:{}};
f5.track=yr.nodeset2data(j2);
if(f1){var f3={};
var f0={a:{}};
f3.id=f1;f5.album=f3
}var j1=f5;
f6+=lE(f4);
f6+="<div";
f4.a={"class":new yr.scalarAttr("track__actions track__hover")};
f4.s="div";
var f5={};f5.data=j1;
f6+=f7.a(f7,yr.object2nodeset(f5),"track__like",f4);
var f5={};f5.entry=j1;
f5.pin="left";
f6+=f7.a(f7,yr.object2nodeset(f5),"add-to",f4);
f6+=lE(f4);
f6+=" ";var f5={};
f5.track=yr.nodeset2data(f7.s(rg,j0));
if(f1){f5.albumId=f1
}if(kk("error",j0)){f5.disabled=true
}f6+=f7.a(f7,yr.object2nodeset(f5),"share",f4);
if(M=="remove"){f6+=f7.a(f7,j2,"track__remove",f4)
}else{if(M=="library"){f6+=f7.a(f7,j2,"track__remove",f4,"Удалить из «Моей музыки» и всех плейлистов")
}}f6+="</div>";
return f6};
sy.t375.j=rl;
sy.t375.a=0;
sy.t376=function bn(f2,f7,f6,f5,M,j1){var f1="";
function f8(j2,j4,j5,j3){return k(j1,eq("id",j4,[]))
}var f3=[0,"albums",2,f8];
var f0=[];if(j1){f0=f2.s(f3,f7)
}else{function f9(j2,j4,j5,j3){return 0
}var f4=[0,"albums",3,0];
f0=f2.s(f4,f7)
}var j0=f0;
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("track__cover")};
M.s="div";f1+=f2.a(f2,j0,"album-cover",M,40);
f1+=lE(M);f1+="</div>";
return f1};
sy.t376.j=rl;
sy.t376.a=0;
sy.t377=function bm(f4,f7,f6,f5,f0){var f3="";
var f2={};f2.entry=yr.nodeset2data(eq("data",f7,[]));
f2.pin="right";
var f1={};var M={a:{}};
f1.removeText="Удалить из «Моей музыки»";
f2.tooltip=f1;
f3+=f4.a(f4,yr.object2nodeset(f2),"like",f0);
return f3};
sy.t377.j=rl;
sy.t377.a=0;
sy.t378=function bl(f3,f6,f5,f4,f0,f8){var f2="";
var f1="";var M={a:{}};
if(f8){f1+=f8
}else{f1+="Удалить трек"
}var f7=f1;
f2+=lE(f0);
f2+="<span";
f0.a={"class":new yr.scalarAttr("track__delete")};
f0.s="span";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,f6),"track__remove"));
f2+=lE(f0);
f2+='<span class="icon icon_trashcan icon_size_L" title="'+eB((f7))+'">';
f2+="</span>";
f2+="</span>";
return f2};
sy.t378.j=rl;
sy.t378.a=0;
sy.t379=function bi(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("users-popup")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"users-popup"));
f2+=lE(f0);
f2+='<div class="users-popup__header">';
f2+="</div>";
f2+='<div class="users-popup__content">';
f2+="</div>";
f2+='<span class="popup__close icon icon_size_L icon_remove"></span>';
f2+="</div>";
return f2};
sy.t379.j=rl;
sy.t379.a=0;
sy.t380=function aZ(M,f3,f4,f1,f0){var f2="";
var f5=(eq("users",f3,[])).length;
f2+=lE(f0);
f2+='<span class="users-popup__subtitle">';
f2+='<span class="users-popup__muted-text"> '+ma(((eq("users",f3,[])).length))+"</span>";
f2+=" ";f2+=mC(eq("header",f3,[]));
f2+="</span>";
return f2};
sy.t380.j=rl;
sy.t380.a=0;
sy.t381=function aY(f3,j0,f7,f6,f0){var f2="";
f2+=lE(f0);
var f8=eq("users",j0,[]);
for(var f5=0,f4=f8.length;
f5<f4;f5++){var f9=f8[f5];
var f1={};var M={a:{}};
f1.userpic=(yr.externals.userpic)(lP("uid",f9),"normal");
f1.size="L";
var j1=f1;f2+='<span class="users-popup__user">';
f2+='<a class="users-popup__avatar" href="/users/'+dD((eq("login",f9,[])))+'">';
f2+=f3.f("f25",f9,f5,f4,f0,yr.object2nodeset(j1));
f2+="</a>";
f2+='<div class="users-popup__user-info">';
f2+='<a class="users-popup__user-name link link_major" href="/users/'+dD((eq("login",f9,[])))+'">'+mC((eq("displayName",f9,[])))+"</a>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("users-popup__bar")};
f0.s="div";
var f1={};f1.user=yr.nodeset2data(f3.s(rg,f9));
f1.auth=yr.nodeset2data(f3.s(qZ,f9));
f2+=f3.a(f3,yr.object2nodeset(f1),"subscribe",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
f2+="</span>"
}return f2};
sy.t381.j=rl;
sy.t381.a=0;
sy.t382=function aX(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("video-preview")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"video-preview",true));
f2+=lE(f0);
f2+='<span class="video-preview__tile"></span>';
f2+='<div class="video-preview__close"></div>';
f2+='<div class="video-preview__content"></div>';
f2+="</div>";
return f2};
sy.t382.j=rl;
sy.t382.a=0;
sy.t383=function aW(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("video")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"video"));
f2+=lE(f0);
f2+='<div class="video__pic">';
f2+='<img src="'+dD((eq("cover",f3,[])))+'" class="video__cover"/>';
f2+='<div class="video__overlay"></div>';
f2+='<span class="video__duration">';
if(kk("duration",f3)){f2+=ma((yr.externals.formatDuration)(lP("duration",f3)*1000))
}f2+="</span>";
f2+='<span class="icon icon_play_white icon_size_XL"></span>';
f2+="</div>";
f2+='<div class="video__title">';
f2+='<a href="'+dD((eq("url",f3,[])))+'" class="link" target="_blank">';
f2+=mC(eq("title",f3,[]));
f2+="</a>";
f2+="</div>";
f2+="</div>";
return f2};
sy.t383.j=rl;
sy.t383.a=0;
sy.t384=function aV(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("volume")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"volume",true));
f2+=lE(f0);
f2+='<div class="volume__control">';
f2+='<div class="volume__track">';
f2+='<div class="volume__filled" style="height: 20px;"></div>';
f2+="</div>";
f2+="</div>";
f2+='<div class="volume__holder">';
f2+="</div>";
f2+='<span class="volume__icon"></span>';
f2+="</div>";
return f2};
sy.t384.j=rl;
sy.t384.a=0;
sy.t385=function aU(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-404")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-404"));
f2+=lE(f0);
f2+='<div class="page-404__title">Ошибка 404</div>';
f2+='<div class="page-404__description">';
f2+="<p>Вы попали на несуществующую страницу.</p>";
f2+="<p>Вероятно, это произошло из-за опечатки или неправильной раскладки клавиатуры.</p>";
f2+="</div>";
f2+='<div class="page-404__link">';
f2+="Если вы прошли сюда по ссылке, ";
f2+='<a class="link link_major" href="http://feedback.yandex.ru/?from=music" target="_blank">поделитесь ею с нами</a>';
f2+=", пожалуйста.";
f2+="</div>";
if((eq("genres",f3,[])).length){f2+='<div class="page-404__subtitle">Выбирайте музыку по вкусу</div>';
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-404__genres")};
f0.s="div";
f2+=M.a(M,M.s(qX,f3),"page-404__genres",f0);
f2+=lE(f0);
f2+="</div>"
}f2+="</div>";
return f2};
sy.t385.j=1;
sy.t385.a=1;
sy.t386=function aT(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(f4){f2+=", "
}f2+='<a class="link link_mimic" href="/genre/'+dD((eq("id",f3,[])))+'">'+ma(((yr.externals.genreName)(lP("id",f3),true)))+"</a>";
return f2};
sy.t386.j=rl;
sy.t386.a=0;
sy.t387=function aS(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-500")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-500"));
f2+=lE(f0);
f2+='<div class="page-500__title">Ошибка 500</div>';
f2+='<div class="page-500__description">';
f2+="<p>Случилось страшное, но мы уже знаем об этом.</p>";
f2+="</div>";
f2+='<div class="page-500__link">Попробуйте <span class="link link_major" onclick="location.reload()">обновить страницу</span>.</div>';
if((eq("genres",f3,[])).length){f2+='<div class="page-500__subtitle">Выбирайте музыку по вкусу</div>';
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-500__genres")};
f0.s="div";
f2+=M.a(M,M.s(qX,f3),"page-500__genres",f0);
f2+=lE(f0);
f2+="</div>"
}if(kk("debug",f3)){f2+=M.a(M,eq("error",f3,[]),"debug",f0)
}f2+="</div>";
return f2};
sy.t387.j=1;
sy.t387.a=1;
sy.t388=function aR(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
if(f4){f2+=", "
}f2+='<a class="link link_mimic" href="/genre/'+dD((eq("id",f3,[])))+'">'+ma(((yr.externals.genreName)(lP("id",f3),true)))+"</a>";
return f2};
sy.t388.j=rl;
sy.t388.a=0;
sy.t389=function aO(f6,f4,j1,j3,j7){var j5="";
function f0(j8,p0,p1,j9){return 0
}var M=[0,"buy",3,0];
var j2=f6.s(M,f4);
var j0=(eq("volumes",f4,[])).length>1;
var f7=eq("artists",f4,[]);
var f3=lP("id",f4);
j5+=lE(j7);
j5+="<div";
j7.a={"class":new yr.scalarAttr("page-album")};
j7.s="div";
j7.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f6.s(rg,f4),"page-album"));
j5+=lE(j7);
j5+="<div";
j7.a={"class":new yr.scalarAttr("page-album__head")};
j7.s="div";
j5+=f6.a(f6,f6.s(rg,f4),"album-cover",j7);
var j4={};j4.title="альбом";
j5+=f6.a(f6,yr.object2nodeset(j4),"stamp",j7);
j5+=lE(j7);
j5+='<div class="page-album__title">';
j5+=mC(eq("title",f4,[]));
if(kk("version",f4)){j5+="<span";
j7.a={"class":new yr.scalarAttr("page-album__version")};
j7.s="span";
if(kk("duplicates",f4)){var f5=j7.a["class"];
if(f5){j7.a["class"]=f5.addscalar(" link")
}else{j7.a["class"]=new yr.scalarAttr(" link")
}}j5+=lE(j7);
j5+=" "+mC((eq("version",f4,[])));
j5+="</span>"
}j5+="</div>";
j5+=f6.a(f6,f6.s(rg,f4),"album-summary",j7);
if(kR(j2)){j5+='<a class="page-album__buy link link_minor" href="'+dD((f6.n(aI,j2)))+'" target="_blank">';
if(k("sale",f6.n(qK,j2))){j5+="Купить альбом";
if(kR(f6.n(qJ,j2))){j5+=" ("+mC((f6.n(qJ,j2)))+" р.)"
}}else{j5+="Скачать альбом"
}j5+="</a>"
}j5+="<div";
j7.a={"class":new yr.scalarAttr("page-album__controls")};
j7.s="div";
var j4={};j4.icon="play";
j5+=f6.a(f6,yr.object2nodeset(j4),"button",j7,"","js-play-album");
j5+=lE(j7);
j5+=" ";var j4={};
j4.album=yr.nodeset2data(f6.s(rg,f4));
j4.pin="right";
j5+=f6.a(f6,yr.object2nodeset(j4),"like",j7);
var j4={};j4.album=yr.nodeset2data(f6.s(rg,f4));
j4.pin="left";
j5+=f6.a(f6,yr.object2nodeset(j4),"add-to",j7);
j5+=" ";var j4={};
j4.album=yr.nodeset2data(f6.s(rg,f4));
j5+=f6.a(f6,yr.object2nodeset(j4),"share",j7);
j5+="</div>";
if(kk("desc",f4)){var f2="Четвертый альбом Kraftwerk, принесший группе коммерческий успех после трех полностью инструментальных и экспериментальных пластинок; пять композиций одновременно минималистичной и сложносочиненной электроники, записанной в те времена, когда электронной музыки еще попросту не существовало. \n «Autobahn», возможно, первая по-настоящему успешная электронная запись (хотя, справедливости ради, на альбоме звучит несколько живых инструментов) и одновременно с этим последний экспериментальный шедевр Kraftwerk, заглавный (и весьма хитовый) трек с которого идет 22 минуты; несколько лет спустя Kraftwerk придумали нью-вейв и электропоп.";
j5+="<div";
j7.a={"class":new yr.scalarAttr("page-album__desc")};
j7.s="div";
var j4={};j4.preview="Четвертый альбом Kraftwerk, принесший группе коммерческий успех после трех полностью инструментальных и экспериментальных пластинок";
j4.text=f2;
j5+=f6.a(f6,yr.object2nodeset(j4),"text-expander",j7);
j5+=lE(j7);
j5+="</div>"
}j5+="</div>";
var j6=eq("volumes",f4,[]);
for(var f8=0,f9=j6.length;
f8<f9;f8++){var f1=j6[f8];
if(j0){j5+='<div class="page-album__vol">Диск '+ma((f8+1))+"</div>"
}j5+='<div class="page-album__line"></div>';
j5+="<div";
j7.a={"class":new yr.scalarAttr("page-album__tracks")};
j7.s="div";
j5+=f6.a(f6,eq("*",f1,[]),"track",j7,false,f6.n(fd,f7),f3);
j5+=lE(j7);
j5+="</div>"
}if(kk("duplicates",f4)){j5+=f6.a(f6,f6.s(rg,f4),"page-album__duplicates",j7)
}j5+=f6.a(f6,f6.s(rg,f4),"page-album__popup",j7);
j5+="</div>";
return j5};
sy.t389.j=1;
sy.t389.a=1;
sy.t390=function ax(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="popup page-album__popup">';
f2+='<img src="'+eB(((yr.externals.cover)(lP("coverUri",f3),460,true)))+'"/>';
f2+="</div>";
return f2};
sy.t390.j=rl;
sy.t390.a=0;
sy.t391=function aw(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="page-album__line page-album__line_spaced"></div>';
f2+='<div id="duplicates" class="page-album__title page-album__title_duplicates">Другие версии альбома</div>';
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-album__duplicates")};
f0.s="div";
f2+=M.a(M,eq("duplicates",f3,[]),"album",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t391.j=rl;
sy.t391.a=0;
sy.t392=function av(M,f4,f5,f1,f0){var f3="";
var f2=sx(M.s(qH,f4))+sx(M.s(qG,f4))+sx(M.s(qF,f4));
f3+=lE(f0);
f3+="<div";
f0.a={"class":new yr.scalarAttr("page-search")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"page-search"));
f3+=lE(f0);
f3+="<div";
f0.a={"class":new yr.scalarAttr("page-search__main")};
f0.s="div";
f3+=M.a(M,M.s(qE,f4),"page-search__misspell",f0);
if(f2==0&&!kR(M.s(qD,f4))){f3+=M.a(M,M.s(rg,f4),"page-search__empty",f0)
}if(f2!=0&&!(k(f2,M.s(qH,f4)))&&!(k(f2,M.s(qG,f4)))&&!(k(f2,M.s(qF,f4)))){f3+=M.a(M,M.s(rg,f4),"page-search__switch",f0)
}f3+=M.a(M,M.s(rg,f4),"page-search__serp",f0);
f3+=lE(f0);
f3+="</div>";
f3+=M.a(M,M.s(rg,f4),"search-nav",f0);
f3+="</div>";
return f3};
sy.t392.j=1;
sy.t392.a=1;
sy.t393=function au(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
if(kk("corrected",f4)){f3+='<div class="page-search__misspell">';
f3+="«"+mC((eq("orig",f4,[])))+"» — запрос исправлен";
var f0={};f0.text="Отменить";
f0.href="/search?text="+((yr.externals.urlencode)(lP("orig",f4)))+"&nocorrect=1";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"S","button_pseudo page-search__misspell-button");
f3+="</div>"
}else{if(kk("result",f4)){f3+='<div class="page-search__misspell">';
f3+="Быть может, вы искали «";
f3+='<a href="/search?text='+eB(((yr.externals.urlencode)(lP("result",f4))))+'" class="link link_major">'+mC((eq("result",f4,[])))+"</a>";
f3+="»?";f3+="</div>"
}}return f3
};sy.t393.j=rl;
sy.t393.a=0;
sy.t394=function at(M,f5,f6,f3,f2){var f4="";
var f1=[];if(kR(M.s(qm,f5))){f1=M.s(qm,f5)
}else{f1=M.s(qo,f5)
}var f0=f1;
f4+=lE(f2);
f4+='<div class="page-search__empty">';
f4+="В библиотеке Яндекс.Музыки пока нет исполнителей, альбомов и треков с таким названием — ";
f4+='<a href="//yandex.ru/yandsearch?text='+eB(((yr.externals.urlencode)(sx(f0))))+'" class="link link_major" target="_blank">Поискать на Яндексе</a>';
f4+="</div>";
return f4};
sy.t394.j=rl;
sy.t394.a=0;
sy.t395=function ar(f4,f8,f6,f5,f1){var f3="";
var f7=(yr.externals.urlencode)(sx(f4.s(qo,f8)));
var f9=f4.s(dR,f8);
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-search__switch")};
f1.s="div";
var f2=[];var f0={};
var M={a:{}};
f0.text="Всё";
f0.href="/search?text="+(f7);
f0.checked=k("all",f9);
f2.push(f0);
if(kR(f4.s(qH,f8))){var f0={};
var M={a:{}};
f0.text=(yr.externals.plural)(sx(f4.s(qH,f8)),"","%s исполнитель","%s исполнителя","%s исполнителей");
f0.href="/search?text="+(f7)+"&type=artists";
f0.checked=k("artists",f9);
f2.push(f0)
}if(kR(f4.s(qG,f8))){var f0={};
var M={a:{}};
f0.text=(yr.externals.plural)(sx(f4.s(qG,f8)),"","%s альбом","%s альбома","%s альбомов");
f0.href="/search?text="+(f7)+"&type=albums";
f0.checked=k("albums",f9);
f2.push(f0)
}if(kR(f4.s(qF,f8))){var f0={};
var M={a:{}};
f0.text=(yr.externals.plural)(sx(f4.s(qF,f8)),"","%s трек","%s трека","%s треков");
f0.href="/search?text="+(f7)+"&type=tracks";
f0.checked=k("tracks",f9);
f2.push(f0)
}f3+=f4.a(f4,yr.array2nodeset(f2),"button-group",f1,"S","");
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t395.j=rl;
sy.t395.a=0;
sy.t396=function aq(f1,f7,f5,f3,M){var f0="";
var f6=sx(f1.s(qk,f7));
var f4=sx(f1.s(dR,f7));
var f2="/search?text="+(yr.externals.urlencode)(sx(f1.s(qo,f7)))+"&type="+sx(f1.s(dR,f7));
f0+=f1.a(f1,eq("result",f7,[]),"search_serp_best",M);
f0+=f1.a(f1,eq("result",f7,[]),"search_serp_results",M,f4);
f0+=f1.a(f1,f1.s(qi,f7),"pager",M,f2,"");
return f0};
sy.t396.j=rl;
sy.t396.a=0;
sy.t397=function ap(M,f3,f5,f1,f0){var f2="";
var f6=M.s(qg,f3);
var f4=M.s(qe,f3);
if(k("artist",f6)){f2+=M.a(M,eq("artists",f3,[]),"page-search__artists",f0,M.s(rg,f3))
}if(k("album",f6)){f2+=M.a(M,eq("albums",f3,[]),"page-search__albums",f0,M.s(rg,f3))
}if(k("track",f6)){f2+=M.a(M,eq("tracks",f3,[]),"page-search__tracks",f0,M.s(rg,f3))
}if(k("video",f6)){f2+=M.a(M,eq("videos",f3,[]),"page-search__videos",f0,M.s(rg,f3))
}f2+=lE(f0);
if(k("playlist",f6)){f2+="<div";
f0.a={"class":new yr.scalarAttr("serp-snippet")};
f0.s="div";
f2+=M.a(M,M.s(qe,f3),"playlist_type_full",f0);
f2+=lE(f0);
f2+="</div>"
}return f2};
sy.t397.j=rl;
sy.t397.a=0;
sy.t398=function ao(f9,f8,j0,j1,j7,j6){var j2="";
var j5=f9.s(qg,f8);
var j4=sx(f9.s(qc,f8))+sx(f9.s(pI,f8))+sx(f9.s(pF,f8));
var j3=!kk("best",f8)&&!j4;
var f6=!j6||j6=="all";
if(!(k("artist",j5))){function f7(j8,p0,p1,j9){return(eq("items",p0,[])).length
}var f5=[0,"artists",2,f7];
j2+=f9.a(f9,f9.s(f5,f8),"page-search__artists",j7,f9.s(rg,f8),j6)
}j2+=f9.a(f9,f9.s(rg,f8),"search_serp_adv",j7,!j3&&f6&&kk("artists",f8));
if(!(k("album",j5))){function f2(j8,p0,p1,j9){return(eq("items",p0,[])).length
}var f4=[0,"albums",2,f2];
j2+=f9.a(f9,f9.s(f4,f8),"page-search__albums",j7,f9.s(rg,f8),j6)
}j2+=f9.a(f9,f9.s(rg,f8),"search_serp_adv",j7,!j3&&f6&&!kk("artists",f8)&&kk("albums",f8));
if(!(k("track",j5))){function f0(j8,p0,p1,j9){return(eq("items",p0,[])).length
}var f3=[0,"tracks",2,f0];
j2+=f9.a(f9,f9.s(f3,f8),"page-search__tracks",j7,f9.s(rg,f8),j6)
}j2+=f9.a(f9,f9.s(rg,f8),"search_serp_adv",j7,!j3&&f6&&!kk("artists",f8)&&!kk("albums",f8));
if(!(k("video",j5))){function M(j8,p0,p1,j9){return(eq("items",p0,[])).length
}var f1=[0,"videos",2,M];
j2+=f9.a(f9,f9.s(f1,f8),"page-search__videos",j7,f9.s(rg,f8),j6)
}return j2};
sy.t398.j=rl;
sy.t398.a=0;
sy.t399=function am(M,f5,f6,f3,f2,f1){var f4="";
if((f1)){var f0={};
f0.direct=1;
f0.directId="D-I-136563-5";
f4+=M.a(M,yr.object2nodeset(f0),"smalladv",f2)
}return f4};
sy.t399.j=rl;
sy.t399.a=0;
sy.t400=function se(f4,j1,f9,f7,f1,M,j3){M=(M===undefined)?[]:M;
var f3="";f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("serp-snippet")};
f1.s="div";
if(j3!="artists"){var f2="";
var f0={a:{}};
if(!kR(f4.n(pw,M))&&sx(f4.n(qc,M))>1){f2+="/search?text="+((yr.externals.urlencode)(sx(f4.n(rf,M))))+"&type=artists"
}var j2=f2;
var f2={};f2.title="Исполнители";
f2.titleLink="Все исполнители";
f2.tabLink=j2;
f3+=f4.a(f4,yr.object2nodeset(f2),"title",f1)
}f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("serp-snippet__artists")};
f1.s="div";
var f8=eq("items",j1,[]);
for(var f6=0,f5=f8.length;
f6<f5;f6++){var j0=f8[f6];
var f2={};f2.artist=yr.nodeset2data(f4.s(rg,j0));
f3+=f4.a(f4,yr.object2nodeset(f2),"artist",f1)
}f3+=lE(f1);
f3+="</div>";
f3+="</div>";
return f3};
sy.t400.j=rl;
sy.t400.a=0;
sy.t401=function sd(f3,f6,f5,f4,f0,f9,f8){f9=(f9===undefined)?[]:f9;
var f2="";f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("serp-snippet")};
f0.s="div";
if(f8!="albums"){var f1="";
var M={a:{}};
if(!kR(f3.n(pw,f9))&&sx(f3.n(pI,f9))>1){f1+="/search?text="+((yr.externals.urlencode)(sx(f3.n(rf,f9))))+"&type=albums"
}var f7=f1;
var f1={};f1.title="Альбомы";
f1.titleLink="Все альбомы";
f1.tabLink=f7;
f2+=f3.a(f3,yr.object2nodeset(f1),"title",f0)
}f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("serp-snippet__albums")};
f0.s="div";
f2+=f3.a(f3,eq("items",f6,[]),"album",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
return f2};
sy.t401.j=rl;
sy.t401.a=0;
sy.t402=function sc(f3,f6,f5,f4,f0,f9,f7){f9=(f9===undefined)?[]:f9;
var f2="";f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("serp-snippet")};
f0.s="div";
if(f7!="tracks"){var f1="";
var M={a:{}};
if(!kR(f3.n(pw,f9))&&sx(f3.n(pF,f9))>1){f1+="/search?text="+((yr.externals.urlencode)(sx(f3.n(rf,f9))))+"&type=tracks"
}var f8=f1;
var f1={};f1.title="Треки";
f1.titleLink="Все треки";
f1.tabLink=f8;
f2+=f3.a(f3,yr.object2nodeset(f1),"title",f0)
}f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("serp-snippet__tracks")};
f0.s="div";
f2+=f3.a(f3,eq("items",f6,[]),"page-search__tracks-item",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
return f2};
sy.t402.j=rl;
sy.t402.a=0;
sy.t403=function sb(M,f4,f5,f1,f0,f3){var f2="";
f2+=M.a(M,M.s(rg,f4),"track_type_full",f0,false,false,false);
return f2};
sy.t403.j=rl;
sy.t403.a=0;
sy.t404=function sa(f2,f5,f4,f3,M,f8,f7){f8=(f8===undefined)?[]:f8;
f7=(f7===undefined)?[]:f7;
var f1="";var f6="//video.yandex.ru/search?text="+sx((f2.n(rf,f8)))+"&vcat=music";
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("serp-snippet")};
M.s="div";var f0={};
f0.title="Видео";
f0.titleLink="Все видео";
f0.tabLink=f6;
f0.target="_blank";
f1+=f2.a(f2,yr.object2nodeset(f0),"title",M);
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("serp-snippet__videos")};
M.s="div";f1+=f2.a(f2,eq("items",f5,[]),"video",M);
f1+=lE(M);f1+="</div>";
f1+=f2.a(f2,f2.s(rg,f5),"video-preview",M);
f1+="</div>";
return f1};
sy.t404.j=rl;
sy.t404.a=0;
sy.t405=function r9(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-index")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-index"));
f2+=lE(f0);
if(kR(M.s(pu,f3))){f2+="<div";
f0.a={"class":new yr.scalarAttr("page-index__headlines")};
f0.s="div";
f2+=M.a(M,eq("headlines",f3,[]),"event",f0);
f2+=lE(f0);
f2+="</div>"
}f2+=M.a(M,M.s(pa,f3),"day",f0);
if(kk("nextRevision",f3)){f2+="<div";
f0.a={"class":new yr.scalarAttr("page-index__more")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"spinner",f0);
f2+=lE(f0);
f2+="Предыдущие дни";
f2+="</div>"
}f2+="</div>";
return f2};
sy.t405.j=1;
sy.t405.a=1;
sy.t406=function r8(f5,f9,f7,f6,f2){var f4="";
var j1=sx(f5.s(sh,f9));
var f3="";var f0={a:{}};
if(kR(f5.s(o4,f9))){f3+="композитор"
}else{f3+="исполнитель"
}var j0=f3;
var f3=[];var f0={a:{}};
var f1={};var M={a:{}};
f1.title="Главное";
f1.href="/artist/"+(j1);
f1.id="";f3.push(f1);
var f1={};var M={a:{}};
f1.title="Треки";
f1.href="/artist/"+(j1)+"/tracks";
f1.id="tracks";
f3.push(f1);
var f1={};var M={a:{}};
f1.title="Альбомы";
f1.href="/artist/"+(j1)+"/albums";
f1.id="albums";
f3.push(f1);
if(kR(f5.s(o1,f9))){var f1={};
var M={a:{}};
f1.title="Похожие исполнители";
f1.href="/artist/"+(j1)+"/similar";
f1.id="similar";
f3.push(f1)
}var f8=f3;
f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-artist")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f9),"page-artist"));
f4+=f5.a(f5,f5.s(rg,f9),"artist-pics",f2);
f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-artist__info")};
f2.s="div";
var f3={};f3.title=j0;
f4+=f5.a(f5,yr.object2nodeset(f3),"stamp",f2);
f4+=lE(f2);
f4+='<div class="page-artist__title">'+mC((f5.s(nB,f9)))+"</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-artist__genres")};
f2.s="div";
var f3={};f3.genres=yr.nodeset2data(f5.s(oY,f9));
f4+=f5.a(f5,yr.object2nodeset(f3),"genres",f2);
f4+=lE(f2);
f4+="</div>";
f4+='<div class="page-artist__actions">';
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-artist__left-side")};
f2.s="div";
var f3={};f3.icon="play";
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"","js-play-artist");
f4+=lE(f2);
f4+=" ";var f3={};
f3.artist=yr.nodeset2data(eq("artist",f9,[]));
f4+=f5.a(f5,yr.object2nodeset(f3),"like",f2);
f4+=" ";var f3={};
f3.artist=yr.nodeset2data(eq("artist",f9,[]));
f3.what=yr.nodeset2data(eq("what",f9,[]));
f4+=f5.a(f5,yr.object2nodeset(f3),"share",f2);
if(kR((f5.s(oW,f9)))){f4+="   ";
var f3={};f3.icon="money";
f3.text="Поддержать";
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"","donate-button")
}f4+="</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-artist__right-side")};
f2.s="div";
var f3={};f3.text="Радио";
f3.status=yr.nodeset2data(eq("radio",f9,[]));
f3.artist=yr.nodeset2data(eq("artist",f9,[]));
f4+=f5.a(f5,yr.object2nodeset(f3),"button-radio",f2,"button_left");
f4+=lE(f2);
f4+="</div>";
f4+="</div>";
f4+="</div>";
f4+='<div class="page-artist__tabs">';
if(kR(f5.s(oS,f9))){f4+="<div";
f2.a={"class":new yr.scalarAttr("page-artist__links-tab")};
f2.s="div";
var f3={};f3.text="Официальные страницы";
f3["class"]="page-artist__button-links";
f4+=f5.a(f5,yr.object2nodeset(f3),"button-arrow",f2);
f4+=f5.a(f5,eq("artist",f9,[]),"page-artist__links",f2);
f4+=lE(f2);
f4+="</div>"
}f4+=f5.a(f5,yr.array2nodeset(f8),"tabs",f2,lP("what",f9));
f4+="</div>";
if(k("",eq("what",f9,[]))){f4+=f5.a(f5,f5.s(rg,f9),"page-artist__artist",f2)
}if(k("tracks",eq("what",f9,[]))){f4+=f5.a(f5,f5.s(rg,f9),"page-artist__tracks",f2)
}if(k("albums",eq("what",f9,[]))){f4+=f5.a(f5,f5.s(rg,f9),"page-artist__albums",f2)
}if(k("similar",eq("what",f9,[]))){f4+=f5.a(f5,f5.s(rg,f9),"page-artist__similar",f2)
}f4+=f5.a(f5,eq("artist",f9,[]),"donate",f2);
f4+="</div>";
return f4};
sy.t406.j=1;
sy.t406.a=1;
sy.t407=function r7(f5,f4,f8,j1,j9){var j3="";
var f2=f5.s(oQ,f4);
var j2="";var j8={a:{}};
if(sx(f5.n(oO,f2))>0&&sx(f5.n(oO,f2))<=4&&sx(f5.n(ow,f2))>0){j2+="Популярные альбомы и сборники"
}else{if(sx(f5.n(oO,f2))>0){j2+="Популярные альбомы"
}else{if(sx(f5.n(ow,f2))>0){j2+="Популярные сборники"
}}}var f1=j2;
function M(p0,p2,p3,p1){return p3<8
}var j6=[0,"albums",2,M];
var j4=[0,"similar",2,M];
j3+=lE(j9);
j3+="<div";
j9.a={"class":new yr.scalarAttr("page-artist__subhead")};
j9.s="div";
var j2={};j2.title="Популярные треки";
j2.titleLink="Все треки";
j2.tabLink="/artist/"+sx((f5.s(sh,f4)))+"/tracks";
j3+=f5.a(f5,yr.object2nodeset(j2),"title",j9);
j3+=lE(j9);
j3+="</div>";
j3+="<div";
j9.a={};j9.s="div";
j9.a["data-card"]=new yr.scalarAttr("top_tracks");
j3+=f5.a(f5,eq("tracks",f4,[]),"track",j9,false,f5.s(sh,f4));
j3+=lE(j9);
j3+="</div>";
j3+="<div";
j9.a={"class":new yr.scalarAttr("page-artist__subhead")};
j9.s="div";
var j2={};j2.title=f1;
j2.titleLink="Все альбомы";
j2.tabLink="/artist/"+sx((f5.s(sh,f4)))+"/albums";
j3+=f5.a(f5,yr.object2nodeset(j2),"title",j9);
j3+=lE(j9);
j3+="</div>";
j3+="<div";
j9.a={"class":new yr.scalarAttr("page-artist__albums")};
j9.s="div";
j9.a["data-card"]=new yr.scalarAttr("top_albums");
var j5=f5.s(j6,f4);
for(var f6=0,f9=j5.length;
f6<f9;f6++){var f3=j5[f6];
j3+=f5.a(f5,f5.s(rg,f3),"album",j9)
}j3+=lE(j9);
j3+="</div>";
if(kR(f5.s(o1,f4))){var j2="";
var j8={a:{}};
if(kk("similar",f4)){j2+="/artist/"+sx((f5.s(sh,f4)))+"/similar"
}var f0=j2;
j3+="<div";
j9.a={"class":new yr.scalarAttr("page-artist__subhead")};
j9.s="div";
var j2={};j2.title="Похожие исполнители";
j2.titleLink="Все похожие исполнители";
j2.tabLink=f0;
var j0="";var j7={a:{}};
if(kk("radio",f4)){var f7={};
f7.text="Радио";
f7.artist=yr.nodeset2data(eq("artist",f4,[]));
j0+=f5.a(f5,yr.object2nodeset(f7),"button-radio",j7,"button_left")
}j2.content=j0;
j3+=f5.a(f5,yr.object2nodeset(j2),"title",j9,"page-artist__title-similar");
j3+=lE(j9);
j3+="</div>"
}j3+="<div";
j9.a={"class":new yr.scalarAttr("page-artist__artists")};
j9.s="div";
j9.a["data-card"]=new yr.scalarAttr("similar_artists");
var j5=f5.s(j4,f4);
for(var f6=0,f9=j5.length;
f6<f9;f6++){var f3=j5[f6];
var j2={};j2.artist=yr.nodeset2data(f5.s(rg,f3));
j3+=f5.a(f5,yr.object2nodeset(j2),"artist",j9)
}j3+=lE(j9);
j3+="</div>";
return j3};
sy.t407.j=rl;
sy.t407.a=0;
sy.t408=function r6(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-artist__subhead")};
f1.s="div";
var f0={};f0.title="Треки";
f3+=M.a(M,yr.object2nodeset(f0),"title",f1);
f3+=lE(f1);
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-artist__tracks table table_fluid table_styled")};
f1.s="div";
var f0={};f0.sortEnabled=true;
f0.url="/artist/"+(sx(M.s(sh,f4)))+"/tracks";
f0.sort=yr.nodeset2data(eq("sort",f4,[]));
f0.dir=yr.nodeset2data(eq("dir",f4,[]));
f3+=M.a(M,yr.object2nodeset(f0),"table__head_track-album",f1);
f3+=lE(f1);
f3+="<div";
f1.a={};f1.s="div";
f3+=M.a(M,eq("tracks",f4,[]),"track_type_table-album",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
return f3};
sy.t408.j=rl;
sy.t408.a=0;
sy.t409=function r4(f4,j1,f9,f7,f0){var f3="";
f3+=lE(f0);
if(kk("albums",j1)){f3+="<div";
f0.a={"class":new yr.scalarAttr("page-artist__subhead")};
f0.s="div";
var f2={};f2.title="Альбомы";
f3+=f4.a(f4,yr.object2nodeset(f2),"title",f0);
f3+=lE(f0);
f3+="<div";
f0.a={"class":new yr.scalarAttr("page-artist__right-side")};
f0.s="div";
var f2=[];var f1={};
var M={a:{}};
f1.text="по популярности";
f1.href="/artist/"+sx((f4.s(sh,j1)))+"/albums?sort=rating";
f1.checked=k("rating",eq("sort",j1,[]));
f2.push(f1);
var f1={};var M={a:{}};
f1.text="по дате выхода";
f1.href="/artist/"+sx((f4.s(sh,j1)))+"/albums?sort=year";
f1.checked=k("year",eq("sort",j1,[]));
f2.push(f1);
f3+=f4.a(f4,yr.array2nodeset(f2),"button-group",f0,"M");
f3+=lE(f0);
f3+="</div>";
f3+="</div>";
f3+="<div";
f0.a={"class":new yr.scalarAttr("page-artist__albums")};
f0.s="div";
var f8=eq("albums",j1,[]);
for(var f6=0,f5=f8.length;
f6<f5;f6++){var j0=f8[f6];
f3+=f4.a(f4,f4.s(rg,j0),"album",f0)
}f3+=lE(f0);
f3+="</div>"
}if(kk("alsoAlbums",j1)){f3+="<div";
f0.a={"class":new yr.scalarAttr("page-artist__subhead")};
f0.s="div";
var f2={};f2.title="Сборники";
f3+=f4.a(f4,yr.object2nodeset(f2),"title",f0);
f3+=lE(f0);
f3+="</div>";
f3+="<div";
f0.a={"class":new yr.scalarAttr("page-artist__albums")};
f0.s="div";
var f8=eq("alsoAlbums",j1,[]);
for(var f6=0,f5=f8.length;
f6<f5;f6++){var j0=f8[f6];
f3+=f4.a(f4,f4.s(rg,j0),"album",f0)
}f3+=lE(f0);
f3+="</div>"
}return f3};
sy.t409.j=rl;
sy.t409.a=0;
sy.t410=function rU(f2,f9,f6,f5,M){var f1="";
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("page-artist__subhead")};
M.s="div";var f0={};
f0.title="Похожие исполнители";
f1+=f2.a(f2,yr.object2nodeset(f0),"title",M,"page-artist__title-similar");
f1+=lE(M);f1+="</div>";
f1+="<div";
M.a={"class":new yr.scalarAttr("page-artist__artists")};
M.s="div";M.a["data-card"]=new yr.scalarAttr("similar_artists");
var f7=eq("similar",f9,[]);
for(var f4=0,f3=f7.length;
f4<f3;f4++){var f8=f7[f4];
var f0={};f0.artist=yr.nodeset2data(f2.s(rg,f8));
f1+=f2.a(f2,yr.object2nodeset(f0),"artist",M)
}f1+=lE(M);
f1+="</div>";
return f1};
sy.t410.j=rl;
sy.t410.a=0;
sy.t411=function rT(f1,f8,f5,f4,M){var f0="";
f0+=lE(M);f0+="<ul";
M.a={"class":new yr.scalarAttr("page-artist__links popup")};
M.s="ul";f0+=f1.a(f1,f1.s(om,f8),"page-artist__link",M);
f0+=f1.a(f1,f1.s(ok,f8),"page-artist__link",M);
f0+=f1.a(f1,f1.s(oi,f8),"page-artist__link",M);
f0+=f1.a(f1,f1.s(og,f8),"page-artist__link",M);
f0+=f1.a(f1,f1.s(oe,f8),"page-artist__link",M);
var f6=f1.s(oc,f8);
for(var f3=0,f2=f6.length;
f3<f2;f3++){var f7=f6[f3];
f0+=f1.a(f1,f1.s(rg,f7),"page-artist__link",M)
}f0+=lE(M);
f0+="</ul>";
return f0};
sy.t411.j=rl;
sy.t411.a=0;
sy.t412=function rS(M,f4,f6,f1,f0){var f2="";
var f3=M.f("f35",f4,f6,f1,sx(M.s(rg,f4)));
f2+=lE(f0);
f2+='<li class="page-artist__page-link">';
f2+="<a";f0.a={"class":new yr.scalarAttr("link"),href:new yr.scalarAttr(sx((eq("href",f4,[])))),target:new yr.scalarAttr("_blank")};
f0.s="a";var f5=f0.a.style;
if(f5){f0.a.style=f5.addscalar('background-image: url("//favicon.yandex.net/favicon/'+((yr.externals.hostname)(lP("href",f4)))+'");')
}else{f0.a.style=new yr.scalarAttr('background-image: url("//favicon.yandex.net/favicon/'+((yr.externals.hostname)(lP("href",f4)))+'");')
}f2+=lE(f0);
f2+=mC(M.n(fe,yr.object2nodeset(f3)));
f2+="</a>";
f2+="</li>";
return f2};
sy.t412.j=rl;
sy.t412.a=0;
sy.t413=function rR(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-playlist")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-playlist"));
f2+=M.a(M,eq("playlist",f3,[]),"page-playlist__playlist",f0,eq("auth",f3,[]));
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t413.j=1;
sy.t413.a=1;
sy.t414=function rQ(j0,j5,j4,j3,f5,j2){j2=(j2===undefined)?[]:j2;
var f9="";var j1=ak(j0.n(rX,j2),j0.s(bN,j5));
var f8=(eq("tracks",j5,[])).length;
var f7=!(k(3,eq("kind",j5,[])));
f9+=lE(f5);
f9+='<div class="page-playlist__head">';
f9+="<div";
f5.a={"class":new yr.scalarAttr("page-playlist__cover-wrapper")};
f5.s="div";
f9+=j0.a(j0,j0.s(rg,j5),"playlist-cover",f5,true);
f9+=lE(f5);
if(j1&&lP("kind",j5)>=1000){f9+="<div";
f5.a={"class":new yr.scalarAttr("page-playlist__cover-control")};
f5.s="div";
if(k("pic",j0.s(b4,j5))){var f6={};
f6.text="Сменить обложку";
f6["class"]="theme1";
f9+=j0.a(j0,yr.object2nodeset(f6),"button-arrow",f5);
f9+=j0.a(j0,j0.s(rg,j5),"page-playlist__cover-popup",f5)
}else{var f6={};
var f2={a:{}};
f6.text="Добавить обложку";
var f4=f6;f9+=lE(f5);
f9+="<span";
f5.a={};f5.s="span";
f9+=j0.a(j0,yr.object2nodeset(f4),"button__class",f5);
f9+=j0.a(j0,yr.object2nodeset(f4),"button__attrs",f5);
f9+=j0.a(j0,yr.object2nodeset(f4),"button__content",f5);
f9+=j0.a(j0,j0.s(rg,j5),"page-playlist__upload-pic",f5);
f9+=lE(f5);
f9+="</span>"
}f9+=lE(f5);
f9+="</div>"
}f9+="</div>";
var f6={};f6.title="плейлист";
f9+=j0.a(j0,yr.object2nodeset(f6),"stamp",f5);
if(j1&&!(k(3,eq("kind",j5,[])))){f9+='<div class="page-playlist__title_wrapper">';
f9+='<input type="text" class="page-playlist__title page-playlist__title_edit" maxlength="89" title="Переименовать" value="'+dD((eq("title",j5,[])))+'"/>';
f9+="</div>"
}else{f9+='<div class="page-playlist__title">'+mC((eq("title",j5,[])))+"</div>"
}f9+="<div";
f5.a={"class":new yr.scalarAttr("page-playlist__info")};
f5.s="div";
f9+=j0.a(j0,eq("owner",j5,[]),"page-playlist__user",f5);
f9+=lE(f5);
f9+='<span class="page-playlist__text_muted">'+ma(((yr.externals.plural)(f8,"нет треков","%s трек","%s трека","%s треков")))+"</span>";
f9+="</div>";
f9+='<div class="page-playlist__controls">';
if(j1&&!(k(3,eq("kind",j5,[])))){f9+="<span";
f5.a={"class":new yr.scalarAttr("page-playlist__access-controls")};
f5.s="span";
f9+=j0.a(j0,j0.s(rg,j5),"page-playlist__access-button",f5);
f9+=j0.a(j0,j0.s(rg,j5),"page-playlist__access-popup",f5);
f9+=lE(f5);
f9+=" ";var f6={};
f6.icon="trashcan";
var f3={};var f0={a:{}};
f3.title="Удалить плейлист";
f6.attrs=f3;
f9+=j0.a(j0,yr.object2nodeset(f6),"button",f5,"","page-playlist__delete");
f9+="</span>"
}var f6={};
f6.icon="play";
f6.text="Слушать";
f9+=j0.a(j0,yr.object2nodeset(f6),"button",f5,"","js-play-playlist");
f9+=" ";if(f7){var f6={};
f6.playlist=yr.nodeset2data(j0.s(rg,j5));
f6.pin="right";
f9+=j0.a(j0,yr.object2nodeset(f6),"like",f5)
}var f6={};
f6.playlist=yr.nodeset2data(j0.s(rg,j5));
if(f7){f6.pin="left"
}f9+=j0.a(j0,yr.object2nodeset(f6),"add-to",f5);
f9+=" ";var f6={};
f6.playlist=yr.nodeset2data(j0.s(rg,j5));
f6.isOwner=j1;
f6.disabled=k("private",eq("visibility",j5,[]));
var f3={};var f0={a:{}};
f3.disabledText="Чтобы поделиться этим плейлистом, переведите его в режим «публичный»";
f6.tooltip=f3;
f9+=j0.a(j0,yr.object2nodeset(f6),"share",f5);
f9+="</div>";
if(!(k(3,eq("kind",j5,[])))){if(j1){f9+=j0.a(j0,j0.s(rg,j5),"page-playlist__desc_editable",f5)
}else{f9+='<div class="page-playlist__desc">'+(lP("descriptionFormatted",j5))+"</div>"
}}f9+="</div>";
f9+='<div class="page-playlist__line"></div>';
if((eq("tracks",j5,[])).length>0){var f6="";
var f2={a:{}};
if(j1){f6+="remove"
}var f1=f6;
var f6=[];if(j1){f6=eq("tracks",j5,[])
}else{f6=j0.s(lb,j5)
}var M=f6;f9+="<div";
f5.a={"class":new yr.scalarAttr("page-playlist__tracks table table_fluid table_styled")};
f5.s="div";
f9+=j0.a(j0,j0.s(rg,j5),"table__head_track-artist",f5);
f9+=lE(f5);
f9+="<div";
f5.a={};f5.s="div";
f9+=j0.a(j0,M,"track_type_table",f5,false,false,f1);
f9+=lE(f5);
f9+="</div>";
f9+="</div>"
}else{var f6={};
f6.title="Пока здесь пусто";
f6.subtitle="Жмите плюс, чтобы добавить треки в плейлист.";
f6.isOwner=j1;
f6.subscribed=(yr.externals.isFavorite)((function(){var j7={};
var j6={a:{}};
j7.user=yr.nodeset2data(eq("owner",j5,[]));
return j7})());
f6.img="add";
f9+=j0.a(j0,yr.object2nodeset(f6),"empty",f5)
}return f9};
sy.t414.j=rl;
sy.t414.a=0;
sy.t415=function rP(f4,f7,f6,f5,f1){var f3="";
var f2={};var f0={a:{}};
f2.userpic=(yr.externals.userpic)(lP("uid",f7));
f2.size="s";
var M=f2;f3+=lE(f1);
f3+='<div class="page-playlist__user">';
f3+='<a href="/users/'+dD((eq("login",f7,[])))+'/playlists">';
f3+=f4.f("f25",f7,f6,f5,f1,yr.object2nodeset(M));
f3+="</a>";
f3+='<a href="/users/'+dD((eq("login",f7,[])))+'/playlists" class="link link_major">'+mC((eq("name",f7,[])))+"</a>";
f3+="</div>";
return f3};
sy.t415.j=rl;
sy.t415.a=0;
sy.t416=function rO(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<form class="page-playlist__upload-pic" enctype="multipart/form-data">';
f2+='<input type="file" name="file" accept="image/jpeg, image/png"/>';
f2+="</form>";
return f2};
sy.t416.j=rl;
sy.t416.a=0;
sy.t417=function rN(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-playlist__cover-popup popup popup_hidden")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"popup"));
f2+=lE(f0);
f2+='<div class="page-playlist__popup-item">';
f2+="Загрузить новую";
f2+=M.a(M,M.s(rg,f3),"page-playlist__upload-pic",f0);
f2+="</div>";
f2+='<div class="page-playlist__popup-item page-playlist__remove-pic">Удалить</div>';
f2+="</div>";
return f2};
sy.t417.j=rl;
sy.t417.a=0;
sy.t418=function rM(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("button-arrow theme1")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(eq("visibility",f3,[]),"button-arrow"));
f2+=M.a(M,M.s(rg,f3),"page-playlist__access-icon",f0);
f2+=M.a(M,M.s(rg,f3),"page-playlist__access-text",f0);
f2+=lE(f0);
f2+='<span class="icon icon_dropdown icon_size_L"></span>';
f2+="</div>";
return f2};
sy.t418.j=rl;
sy.t418.a=0;
sy.t419=function rK(f4,f7,f6,f5,f1){var f3="";
var f2="";var f0={a:{}};
if(k("public",eq("visibility",f7,[]))){f2+="public"
}else{f2+="lock"
}var M=f2;f3+=lE(f1);
f3+='<span class="page-playlist__access-icon icon icon_size_L icon_'+eB((M))+'"></span>';
return f3};
sy.t419.j=rl;
sy.t419.a=0;
sy.t420=function rA(f4,f7,f6,f5,f1){var f3="";
var f2="";var f0={a:{}};
if(k("public",eq("visibility",f7,[]))){f2+="Публичный"
}else{f2+="Личный"
}var M=f2;f3+=lE(f1);
f3+='<span class="page-playlist__access-text button-arrow__text">'+ma((M))+"</span>";
return f3};
sy.t420.j=rl;
sy.t420.a=0;
sy.t421=function rz(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-playlist__access-popup popup popup_hidden")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"popup"));
f2+=lE(f0);
f2+='<div class="page-playlist__popup-item" data-value="public">';
f2+='<span class="icon icon_size_L icon_public"></span>';
f2+="Публичный";
f2+="</div>";
f2+='<div class="page-playlist__popup-item" data-value="private">';
f2+='<span class="icon icon_size_L icon_lock"></span>';
f2+="Личный";
f2+="</div>";
f2+="</div>";
return f2};
sy.t421.j=rl;
sy.t421.a=0;
sy.t422=function ry(f4,f8,f6,f5,f1){var f3="";
f3+=lE(f1);
f3+='<div class="page-playlist__desc">';
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-playlist__desc-text")};
f1.s="div";
if(kR((eq("descriptionFormatted",f8,[])))){f1.a.title=new yr.scalarAttr("Редактировать описание");
f3+=lE(f1);
f3+=lP("descriptionFormatted",f8)
}else{var f7=f1.a["class"];
if(f7){f1.a["class"]=f7.addscalar(" page-playlist__desc-text_empty")
}else{f1.a["class"]=new yr.scalarAttr(" page-playlist__desc-text_empty")
}f3+=lE(f1);
f3+="Добавить описание"
}f3+=lE(f1);
f3+="</div>";
f3+='<form class="page-playlist__desc-form">';
f3+='<textarea name="description" class="page-playlist__desc-area" maxlength="2000">';
f3+=mC(eq("description",f8,[]));
f3+="</textarea>";
var f2={};f2.text="Сохранить";
var f0={};var M={a:{}};
f0.type="submit";
f2.attrs=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"button",f1,"","page-playlist__desc-save");
f3+=" ";var f2={};
f2.text="Отменить";
var f0={};var M={a:{}};
f0.type="button";
f2.attrs=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"button",f1,"","page-playlist__desc-cancel");
f3+="</form>";
f3+="</div>";
return f3};
sy.t422.j=rl;
sy.t422.a=0;
sy.t423=function rx(f5,f8,f7,f6,f2){var f4="";
var j2=lP("filter",f8);
var j1=lP("genre",f8);
var f3=[];var f0={a:{}};
var f1={};var M={a:{}};
f1.title="Обзор";
f1.href="/genre/"+sx((eq("genre",f8,[])));
f1.id="";f3.push(f1);
var f1={};var M={a:{}};
f1.title="Треки";
f1.href="/genre/"+sx((eq("genre",f8,[])))+"/tracks";
f1.id="tracks";
f3.push(f1);
var f1={};var M={a:{}};
f1.title="Исполнители";
f1.href="/genre/"+sx((eq("genre",f8,[])))+"/artists";
f1.id="artists";
f3.push(f1);
if(j1=="classical"){var f1={};
var M={a:{}};
f1.title="Композиторы";
f1.href="/genre/"+sx((eq("genre",f8,[])))+"/composers";
f1.id="composers";
f3.push(f1)
}var f1={};
var M={a:{}};
f1.title="Альбомы";
f1.href="/genre/"+sx((eq("genre",f8,[])))+"/albums";
f1.id="albums";
f3.push(f1);
var j0=f3;f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-top")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f8),"page-top"));
f4+=lE(f2);
if((eq("albums",f8,[])).length>=14&&!j2){f4+="<div";
f2.a={"class":new yr.scalarAttr("page-top__mosaic")};
f2.s="div";
f4+=f5.a(f5,f5.s(rg,f8),"top-pics",f2);
f4+=lE(f2);
f4+="</div>"
}f4+='<div class="page-top__title">';
f4+=ma((yr.externals.genreName)(j1));
f4+="  ";var f3={};
f3.text="Радио жанра";
f3.status=yr.nodeset2data(eq("radio",f8,[]));
f3.genre=yr.nodeset2data(eq("genre",f8,[]));
f4+=f5.a(f5,yr.object2nodeset(f3),"button-radio",f2,"button_action");
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-top__actions_right")};
f2.s="div";
if(!(k("all",eq("genre",f8,[])))){var f3={};
f3.genre=yr.nodeset2data(f5.s(rg,f8));
f4+=f5.a(f5,yr.object2nodeset(f3),"like",f2);
f4+=lE(f2);
f4+=" "}var f3={};
var f1={};var M={a:{}};
f1.id=j1;f3.genre=f1;
f3.filter=j2;
f4+=f5.a(f5,yr.object2nodeset(f3),"share",f2);
f4+=lE(f2);
f4+="</div>";
f4+="</div>";
f4+=f5.a(f5,yr.array2nodeset(j0),"tabs",f2,j2);
if(kk("tracks",f8)){f4+=f5.a(f5,f5.s(rg,f8),"page-top__tracks",f2,j1,j2)
}if(kk("artists",f8)){f4+=f5.a(f5,f5.s(rg,f8),"page-top__artists",f2,j1,j2)
}if(kk("composers",f8)){f4+=f5.a(f5,f5.s(rg,f8),"page-top__composers",f2,j1,j2)
}if(kk("albums",f8)&&(!j2||j2=="albums")){f4+=f5.a(f5,f5.s(rg,f8),"page-top__albums",f2,j1,j2)
}if(kk("pager",f8)){var f9="/genre/"+(j1)+"/"+(j2);
f4+=f5.a(f5,eq("pager",f8,[]),"pager",f2,f9,"")
}f4+="</div>";
return f4};
sy.t423.j=1;
sy.t423.a=1;
sy.t424=function rw(f4,f7,f6,f5,f1,f9,f8){var f3="";
f3+=lE(f1);
f3+='<div class="page-top__chart">';
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-top__subtitle")};
f1.s="div";
var f2={};f2.title="Популярные треки";
f2.titleLink="Больше популярных треков";
var f0="";var M={a:{}};
if(f8!="tracks"){f0+="/genre/"+(f9)+"/tracks"
}f2.tabLink=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"title",f1);
f3+=lE(f1);
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-top__tracks")};
f1.s="div";
if(!f8){f1.a["data-card"]=new yr.scalarAttr("top_tracks")
}f3+=f4.a(f4,eq("tracks",f7,[]),"track_type_full",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
return f3};
sy.t424.j=rl;
sy.t424.a=0;
sy.t425=function rv(f4,j1,f9,f7,f1,j3,j2){var f3="";
f3+=lE(f1);
f3+='<div class="page-top__chart">';
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-top__subtitle")};
f1.s="div";
var f2={};f2.title="Популярные исполнители";
f2.titleLink="Больше популярных исполнителей";
var f0="";var M={a:{}};
if(j2!="artists"){f0+="/genre/"+(j3)+"/artists"
}f2.tabLink=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"title",f1);
f3+=lE(f1);
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-top__artists")};
f1.s="div";
if(!j2){f1.a["data-card"]=new yr.scalarAttr("top_artists")
}var f8=eq("artists",j1,[]);
for(var f6=0,f5=f8.length;
f6<f5;f6++){var j0=f8[f6];
var f2={};f2.artist=yr.nodeset2data(f4.s(rg,j0));
f3+=f4.a(f4,yr.object2nodeset(f2),"artist",f1)
}f3+=lE(f1);
f3+="</div>";
f3+="</div>";
return f3};
sy.t425.j=rl;
sy.t425.a=0;
sy.t426=function ru(f2,f9,f7,f5,M,j1,j0){var f1="";
f1+=lE(M);f1+='<div class="page-top__chart">';
f1+="<div";
M.a={"class":new yr.scalarAttr("page-top__subtitle")};
M.s="div";var f0={};
f0.title="Популярные композиторы";
f1+=f2.a(f2,yr.object2nodeset(f0),"title",M);
f1+=lE(M);f1+="</div>";
f1+="<div";
M.a={"class":new yr.scalarAttr("page-top__artists")};
M.s="div";if(!j0){M.a["data-card"]=new yr.scalarAttr("top_artists")
}var f6=eq("composers",f9,[]);
for(var f4=0,f3=f6.length;
f4<f3;f4++){var f8=f6[f4];
var f0={};f0.artist=yr.nodeset2data(f2.s(rg,f8));
f1+=f2.a(f2,yr.object2nodeset(f0),"artist",M)
}f1+=lE(M);
f1+="</div>";
f1+="</div>";
return f1};
sy.t426.j=rl;
sy.t426.a=0;
sy.t427=function rt(f3,f2,f5,f8,j6,j2,j0){var j3="";
var j1=[];if(j0=="albums"){j1=eq("albums",f2,[])
}else{function f0(j7,j9,p0,j8){return p0<8
}var M=[0,"albums",2,f0];
j1=f3.s(M,f2)
}var f7=j1;
j3+=lE(j6);
j3+='<div class="page-top__chart page-top__chart_type_albums">';
j3+="<div";
j6.a={"class":new yr.scalarAttr("page-top__subtitle")};
j6.s="div";
var j1={};j1.title="Новые поступления";
j1.titleLink="Больше альбомов";
var f9="";var j5={a:{}};
if(j0!="albums"){f9+="/genre/"+(j2)+"/albums"
}j1.tabLink=f9;
j3+=f3.a(f3,yr.object2nodeset(j1),"title",j6);
j3+=lE(j6);
j3+="</div>";
j3+="<div";
j6.a={"class":new yr.scalarAttr("page-top__albums")};
j6.s="div";
if(!j0){j6.a["data-card"]=new yr.scalarAttr("top_albums")
}var j4=f7;
for(var f4=0,f6=j4.length;
f4<f6;f4++){var f1=j4[f4];
j3+=f3.a(f3,f3.s(rg,f1),"album",j6)
}j3+=lE(j6);
j3+="</div>";
j3+="</div>";
return j3};
sy.t427.j=rl;
sy.t427.a=0;
sy.t428=function rs(f5,j2,f9,f7,f2){var f4="";
var j3=ak(f5.s(rY,j2),f5.s(bN,j2));
var f3={};var f0={a:{}};
f3.userpic=(yr.externals.userpic)(sx(f5.s(k9,j2)),"normal");
f3.size="L";
var j1=f3;var f3="";
var f0={a:{}};
if(j3){f3+="Моя музыка"
}else{f3+="пользователь"
}var j0=f3;
var f3=[];var f0={a:{}};
var f1={};var M={a:{}};
f1.title="Треки";
f1.href="/users/"+sx((f5.s(bN,j2)))+"/tracks";
f1.id="tracks";
f3.push(f1);
var f1={};var M={a:{}};
f1.title="Альбомы";
f1.href="/users/"+sx((f5.s(bN,j2)))+"/albums";
f1.id="albums";
f3.push(f1);
var f1={};var M={a:{}};
f1.title="Исполнители";
f1.href="/users/"+sx((f5.s(bN,j2)))+"/artists";
f1.id="artists";
f3.push(f1);
var f1={};var M={a:{}};
f1.title="Плейлисты";
f1.href="/users/"+sx((f5.s(bN,j2)))+"/playlists";
f1.id="playlists";
f3.push(f1);
var f1={};var M={a:{}};
f1.title="Друзья";
f1.href="/users/"+sx((f5.s(bN,j2)))+"/subscriptions";
f1.id="subscriptions";
f3.push(f1);
if(j3){var f1={};
var M={a:{}};
f1.title="История";
f1.href="/users/"+sx((f5.s(bN,j2)))+"/history";
f1.id="history";
f3.push(f1)
}var f8=f3;
var f6=(yr.externals.isFavorite)((function(){var j5={};
var j4={a:{}};
j5.user=yr.nodeset2data(eq("owner",j2,[]));
return j5})())||!(k("public",eq("visibility",j2,[])));
f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-users")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,j2),"page-users"));
f4+=lE(f2);
f4+='<div class="page-users__header">';
f4+=f5.f("f25",j2,f9,f7,f2,yr.object2nodeset(j1));
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-users__user-info")};
f2.s="div";
var f3={};f3.title=j0;
f4+=f5.a(f5,yr.object2nodeset(f3),"stamp",f2);
f4+=lE(f2);
f4+='<div class="page-users__title">';
f4+=mC((f5.s(k8,j2)));
if(kk("verified",j2)){f4+='<span class="icon icon_size_L icon_star" title="Подтверждённый пользователь"></span>'
}f4+="</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-users__bar")};
f2.s="div";
if(sx(f5.s(pF,j2))>0&&(j3||k("public",eq("visibility",j2,[])))){var f3={};
f3.icon="shuffle";
f3.text="Слушать вперемешку";
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"","page-users__shuffle-button");
f4+=lE(f2);
f4+=" "}if(!j3&&k("public",eq("visibility",j2,[]))){var f3={};
f3.user=yr.nodeset2data(eq("owner",j2,[]));
f3.auth=yr.nodeset2data(eq("auth",j2,[]));
f4+=f5.a(f5,yr.object2nodeset(f3),"subscribe",f2)
}f4+=lE(f2);
f4+="</div>";
f4+="</div>";
if(j3){var f3={};
f3.icon="settings";
f3.text="Настройки";
f3.href="/settings";
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"","page-users__settings-button")
}f4+="</div>";
f4+='<div class="page-users__tabs">';
if((eq("profiles",j2,[])).length>0){f4+="<div";
f2.a={"class":new yr.scalarAttr("page-users__links-tab")};
f2.s="div";
var f3={};f3.text="Соцсети";
f3["class"]="page-users__button-links";
f4+=f5.a(f5,yr.object2nodeset(f3),"button-arrow",f2);
f4+=f5.a(f5,f5.s(rg,j2),"page-users__links",f2);
f4+=lE(f2);
f4+="</div>"
}f4+=f5.a(f5,yr.array2nodeset(f8),"tabs",f2,lP("what",j2));
f4+="</div>";
if(k("no owner",eq("error",j2,[]))){f4+="Данный раздел доступен только для авторизованных пользователей"
}else{if(k("",eq("what",j2,[]))){f4+=f5.a(f5,f5.s(rg,j2),"page-users__user",f2)
}if(k("albums",eq("what",j2,[]))){f4+=f5.a(f5,f5.s(rg,j2),"page_user__albums",f2,f6,j3)
}if(k("tracks",eq("what",j2,[]))){f4+=f5.a(f5,f5.s(rg,j2),"page-users__tracks",f2,f6,j3)
}if(k("playlists",eq("what",j2,[]))){f4+=f5.a(f5,f5.s(rg,j2),"page-users__playlists",f2,j3)
}if(k("artists",eq("what",j2,[]))){f4+=f5.a(f5,f5.s(rg,j2),"page-users__artists",f2,f6,j3)
}if(k("history",eq("what",j2,[]))){f4+=f5.a(f5,f5.s(rg,j2),"page-users__history",f2,j3)
}if(k("subscriptions",eq("what",j2,[]))){f4+=f5.a(f5,f5.s(rg,j2),"page-users__subscriptions",f2,f6,j3)
}}f4+="</div>";
return f4};
sy.t428.j=1;
sy.t428.a=1;
sy.t429=function rq(f5,j2,j0,f7,f0,j1,f8){var f4="";
if((eq("tracks",j2,[])).length>0){var f2="";
var M={a:{}};
if(f8){f2+="library"
}else{f2+=""
}var f3=f2;
var f2=[];if(f8){f2=eq("tracks",j2,[])
}else{f2=f5.s(lb,j2)
}var f1=f2;
f4+=lE(f0);
f4+="<div";
f0.a={"class":new yr.scalarAttr("page-users__tracks table table_fluid table_styled")};
f0.s="div";
if(f8){var f9=f0.a["class"];
if(f9){f0.a["class"]=f9.addscalar(" js-my-lib")
}else{f0.a["class"]=new yr.scalarAttr(" js-my-lib")
}}var f2={};
f2.sortEnabled=true;
f2.url="/users/"+sx((f5.s(bN,j2)))+"/tracks";
f2.sort=yr.nodeset2data(eq("sort",j2,[]));
f2.dir=yr.nodeset2data(eq("dir",j2,[]));
f4+=f5.a(f5,yr.object2nodeset(f2),"table__head_track-artist",f0);
f4+=lE(f0);
f4+="<div";
f0.a={};f0.s="div";
f4+=f5.a(f5,f1,"track_type_table",f0,false,false,f3);
f4+=lE(f0);
f4+="</div>";
f4+="</div>"
}else{var f6=ak(f5.s(rY,j2),f5.s(bN,j2));
var f2={};f2.title="Пока нет треков";
f2.subtitle="Создайте плейлист или используйте сердечко, чтобы добавить треки в этот раздел.";
f2.isOwner=f6;
f2.subscribed=j1;
f2.img="like";
f4+=f5.a(f5,yr.object2nodeset(f2),"empty",f0)
}return f4};
sy.t429.j=rl;
sy.t429.a=0;
sy.t430=function rb(f5,f8,f7,f6,f2,f1){var f4="";
f4+=lE(f2);
f4+='<div class="page-users__playlists">';
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-users__section")};
f2.s="div";
if(f1){f4+=f5.a(f5,f5.s(k0,f8),"playlist",f2);
f4+=f5.a(f5,f5.s(rg,f8),"page-users__new-playlist",f2);
f4+=f5.a(f5,f5.s(kZ,f8),"playlist",f2)
}else{f4+=f5.a(f5,eq("playlists",f8,[]),"playlist",f2)
}f4+=lE(f2);
f4+="</div>";
if((eq("bookmarks",f8,[])).length){var f3="";
var f0={a:{}};
if(f1){f3+="вам"
}else{f3+="пользователю"
}var M=f3;f4+='<div class="page-users__subtitle">Также '+ma((M))+" понравились эти плейлисты</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-users__section")};
f2.s="div";
f4+=f5.a(f5,eq("bookmarks",f8,[]),"playlist",f2);
f4+=lE(f2);
f4+="</div>"
}f4+="</div>";
return f4};
sy.t430.j=rl;
sy.t430.a=0;
sy.t431=function ra(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="page-users__user">';
if(kR(M.s(rY,f3))){f2+="Привет, "+mC((M.s(rY,f3)))
}f2+="</div>";
return f2};
sy.t431.j=rl;
sy.t431.a=0;
sy.t432=function q9(f5,f8,f7,f6,f2,f0,M){var f4="";
f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-users__albums")};
f2.s="div";
if((eq("albums",f8,[])).length>0){f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-users__section")};
f2.s="div";
f4+=f5.a(f5,f5.s(kW,f8),"album",f2);
f4+=lE(f2);
f4+="</div>"
}else{if((eq("indirectAlbums",f8,[])).length==0||M){var f3={};
f3.title="Пока нет альбомов";
f3.subtitle="Используйте сердечко, чтобы добавить альбом в этот раздел.";
f3.isOwner=M;
f3.subscribed=f0;
f3.img="like-album";
f4+=f5.a(f5,yr.object2nodeset(f3),"empty",f2)
}}f4+=lE(f2);
if((f5.s(kV,f8)).length>0){var f3="";
var f1={a:{}};
if(M&&kk("albums",f8)){f3+="Также вы сохранили треки из этих альбомов"
}else{if(M&&!kk("albums",f8)){f3+="Вы сохранили треки из этих альбомов"
}else{if(!M&&kk("albums",f8)){f3+="Также пользователь сохранил треки из этих альбомов"
}else{if(!M&&!kk("albums",f8)){f3+="Пользователь сохранил треки из этих альбомов"
}}}}var j0=f3;
f4+='<div class="page-users__subtitle">';
f4+=ma((j0));
f4+="</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("page-users__section page-users__section_albums")};
f2.s="div";
f4+=f5.a(f5,f5.s(rg,f8),"page-users__indirect-albums",f2);
f4+=lE(f2);
f4+="</div>";
if(sx(f5.s(kU,f8))>0){var f9=(yr.externals.plural)(sx(f5.s(kU,f8)),"","%s альбом","%s альбома","%s альбомов");
f4+=f5.a(f5,f5.s(rg,f8),"page-users__more",f2,f9)
}}f4+="</div>";
return f4};
sy.t432.j=rl;
sy.t432.a=0;
sy.t433=function q8(f3,j0,f8,f6,f0,j4,j3){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-users__artists")};
f0.s="div";
if((eq("artists",j0,[])).length){f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-users__section")};
f0.s="div";
var f7=f3.s(kT,j0);
for(var f5=0,f4=f7.length;
f5<f4;f5++){var f9=f7[f5];
var f1={};f1.artist=yr.nodeset2data(f3.s(rg,f9));
f2+=f3.a(f3,yr.object2nodeset(f1),"artist",f0)
}f2+=lE(f0);
f2+="</div>"
}else{var f1={};
f1.title="Пока нет исполнителей";
f1.subtitle="Используйте сердечко, чтобы добавить исполнителя в этот раздел.";
f1.isOwner=j3;
f1.subscribed=j4;
f1.img="like-artist";
f2+=f3.a(f3,yr.object2nodeset(f1),"empty",f0)
}f2+=lE(f0);
if((eq("indirectArtists",j0,[])).length>0){var f1="";
var M={a:{}};
if(j3&&kk("artists",j0)){f1+="Также вы сохранили треки этих исполнителей"
}else{if(j3&&!kk("artists",j0)){f1+="Вы сохранили треки этих исполнителей"
}else{if(!j3&&kk("artists",j0)){f1+="Также пользователь сохранил треки этих исполнителей"
}else{if(!j3&&!kk("artists",j0)){f1+="Пользователь сохранил треки этих исполнителей"
}}}}var j2=f1;
f2+='<div class="page-users__subtitle">';
f2+=ma((j2));
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-users__section page-users__section_artists")};
f0.s="div";
f2+=f3.a(f3,f3.s(rg,j0),"page-users__indirect-artists",f0);
f2+=lE(f0);
f2+="</div>";
if(sx(f3.s(kU,j0))>0){var j1=(yr.externals.plural)(sx(f3.s(kU,j0)),"","%s исполнитель","%s исполнителя","%s исполнителей");
f2+=f3.a(f3,f3.s(rg,j0),"page-users__more",f0,j1)
}}f2+="</div>";
return f2};
sy.t433.j=rl;
sy.t433.a=0;
sy.t434=function q7(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+='<div class="page-users__history">';
f3+='<div class="page-users__subtitle">';
f3+="Последние прослушанные треки";
var f0={};f0.text="Очистить";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"","page-users__button-clear");
f3+="</div>";
f3+="<div";
f1.a={};f1.s="div";
f3+=M.a(M,eq("tracks",f4,[]),"track_type_full",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
return f3};
sy.t434.j=rl;
sy.t434.a=0;
sy.t435=function q6(f2,f7,f4,f3,M,f8,f6){var f1="";
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("page-users__subscriptions")};
M.s="div";if((eq("subscriptions",f7,[])).length){f1+=lE(M);
f1+='<div class="page-users__subtitle">';
f1+="Друзья";
f1+="</div>";
f1+=f2.a(f2,eq("subscriptions",f7,[]),"page-users__user",M,eq("auth",f7,[]))
}else{var f5='Используйте кнопку "Подписаться", или привяжите социальные сети на странице <a href="/settings" class="link link_mute">настроек</a>';
var f0={};f0.title="Пока нет друзей";
f0.isOwner=f6;
f0.subtitle=f5;
f0.subscribed=f8;
f1+=f2.a(f2,yr.object2nodeset(f0),"empty",M)
}f1+=lE(M);
if((eq("subscribers",f7,[])).length){f1+='<div class="page-users__subtitle">';
f1+="Подписчики";
f1+="</div>";
f1+=f2.a(f2,eq("subscribers",f7,[]),"page-users__user",M,eq("auth",f7,[]))
}f1+="</div>";
return f1};
sy.t435.j=rl;
sy.t435.a=0;
sy.t436=function q5(f3,f8,f6,f5,f0,f7){f7=(f7===undefined)?[]:f7;
var f2="";var f1={};
var M={a:{}};
f1.userpic=(yr.externals.userpic)(lP("uid",f8),"normal");
f1.size="L";
var f4=f1;f2+=lE(f0);
f2+='<span class="page-users__user">';
f2+='<a class="page-users__avatar" href="/users/'+dD((eq("login",f8,[])))+'">';
f2+=f3.f("f25",f8,f6,f5,f0,yr.object2nodeset(f4));
f2+="</a>";
f2+='<div class="page-users__user-info">';
f2+='<a class="page-users__user-name link link_major" href="/users/'+dD((eq("login",f8,[])))+'">'+mC((eq("displayName",f8,[])))+"</a>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-users__bar")};
f0.s="div";
var f1={};f1.user=yr.nodeset2data(f3.s(rg,f8));
f1.auth=yr.nodeset2data(f7);
f2+=f3.a(f3,yr.object2nodeset(f1),"subscribe",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
f2+="</span>";
return f2};
sy.t436.j=rl;
sy.t436.a=0;
sy.t437=function q4(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="page-users__new-playlist">';
f2+='<span class="icon icon_plus_thin icon_size_XL"></span>';
f2+="</div>";
return f2};
sy.t437.j=rl;
sy.t437.a=0;
sy.t438=function q3(f1,f8,f5,f4,M){var f0="";
f0+=lE(M);f0+="<ul";
M.a={"class":new yr.scalarAttr("page-users__links")};
M.s="ul";var f6=eq("profiles",f8,[]);
for(var f3=0,f2=f6.length;
f3<f2;f3++){var f7=f6[f3];
f0+=f1.a(f1,f1.s(rg,f7),"page-users__link",M)
}f0+=lE(M);
f0+="</ul>";
return f0};
sy.t438.j=rl;
sy.t438.a=0;
sy.t439=function q2(f2,f9,f7,f5,f0){var f1="";
var f8=(yr.externals.socialTitle)(lP("provider",f9));
function M(j0,j2,j3,j1){return 0
}var f3=[0,"addresses",3,0];
var f4=f2.s(f3,f9);
f1+=lE(f0);
f1+='<li class="page-users__page-link">';
f1+="<a";f0.a={"class":new yr.scalarAttr("link"),href:new yr.scalarAttr(sx((f4))),target:new yr.scalarAttr("_blank")};
f0.s="a";var f6=f0.a.style;
if(f6){f0.a.style=f6.addscalar('background-image: url("//favicon.yandex.net/favicon/'+((yr.externals.hostname)(sx(f4)))+'");')
}else{f0.a.style=new yr.scalarAttr('background-image: url("//favicon.yandex.net/favicon/'+((yr.externals.hostname)(sx(f4)))+'");')
}f1+=lE(f0);
f1+=ma(f8);
f1+="</a>";
f1+="</li>";
return f1};
sy.t439.j=rl;
sy.t439.a=0;
sy.t440=function qV(M,f3,f4,f1,f0){var f2="";
f2+=M.a(M,M.s(kV,f3),"album",f0);
return f2};
sy.t440.j=rl;
sy.t440.a=0;
sy.t441=function qU(f2,f9,f6,f5,M){var f1="";
var f7=f2.s(kO,f9);
for(var f4=0,f3=f7.length;
f4<f3;f4++){var f8=f7[f4];
var f0={};f0.artist=yr.nodeset2data(f2.s(rg,f8));
f1+=f2.a(f2,yr.object2nodeset(f0),"artist",M)
}return f1};
sy.t441.j=rl;
sy.t441.a=0;
sy.t442=function qT(M,f4,f5,f2,f1,f0){var f3="";
f3+=lE(f1);
f3+='<div class="page-users__more">';
f3+="<span";
f1.a={"class":new yr.scalarAttr("button button_size_L")};
f1.s="span";
f3+=M.a(M,M.s(rg,f4),"spinner",f1);
f3+=lE(f1);
f3+="Показать еще "+ma((f0));
f3+="</span>";
f3+="</div>";
return f3};
sy.t442.j=rl;
sy.t442.a=0;
sy.t443=function qS(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-payment")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-payment"));
if(kR(M.s(kN,f3))){f2+=M.a(M,M.s(rg,f3),"page-payment__account-status_pdd",f0)
}else{f2+=M.a(M,M.s(rg,f3),"page-payment__account-status",f0)
}f2+=M.a(M,M.s(rg,f3),"page-payment__history",f0);
f2+=M.a(M,M.s(rg,f3),"payment-order",f0);
f2+=M.a(M,M.s(rg,f3),"payment-gift",f0);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t443.j=1;
sy.t443.a=1;
sy.t444=function qR(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-payment")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-payment"));
f2+=lE(f0);
f2+='<div class="page-payment__title">Подписка</div>';
f2+="<div>";
f2+="Чтобы оплатить подписку, ";
f2+='<span class="page-payment__log-in link link_major">войдите или зарегистрируйтесь</span>';
f2+=" на Яндексе.";
f2+="</div>";
f2+="</div>";
return f2};
sy.t444.j=kM;
sy.t444.a=1;
sy.t445=function qQ(f6,f9,f8,f7,f2){var f5="";
var f3=[];var f0={a:{}};
var f1={};var M={a:{}};
f1.title="#";
f1.size="1";
f3.push(f1);
var f1={};var M={a:{}};
f1.title="Когда";
f1.size=5;f3.push(f1);
var f1={};var M={a:{}};
f1.title="На сколько";
f1.size=2;f3.push(f1);
var f1={};var M={a:{}};
f1.title="Как";
f1.size=4;f3.push(f1);
var f1={};var M={a:{}};
f1.title="Сумма";
f1.size="2";
f3.push(f1);
var f4=f3;f5+=lE(f2);
f5+='<div class="page-payment__title">История платежей</div>';
f5+="<div";
f2.a={"class":new yr.scalarAttr("table table_fixed table_styled")};
f2.s="div";
f5+=f6.a(f6,yr.array2nodeset(f4),"table__head",f2);
f5+=lE(f2);
f5+="<div";
f2.a={"class":new yr.scalarAttr("page-payment__orders")};
f2.s="div";
f5+=f6.a(f6,eq("orders",f9,[]),"listed-order",f2,eq("systems",f9,[]));
f5+=lE(f2);
f5+="</div>";
f5+="</div>";
return f5};
sy.t445.j=rl;
sy.t445.a=0;
sy.t446=function qP(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="page-payment__title">История платежей</div>';
f2+="<div>Оплата не производилась</div>";
return f2};
sy.t446.j=kK;
sy.t446.a=0;
sy.t447=function qO(f4,f7,f6,f5,f1){var f3="";
function f8(f9,j1,j2,j0){return 0
}var M=[0,"subscriptions",0,"autoRenewable",3,0];
var f2=f4.s(M,f7);
var f0=f4.s(mP,f7);
f3+=lE(f1);
f3+='<div class="page-payment__title">Подписка в мобильном приложении</div>';
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-payment__account-status")};
f1.s="div";
f3+=f4.a(f4,f4.s(rg,f7),"billing-status",f1);
f3+=f4.a(f4,f4.s(rg,f7),"page-payment__buttons-bar",f1,!kR(f2)&&!kR(f0));
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t447.j=rl;
sy.t447.a=0;
sy.t448=function qN(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+='<div class="page-payment__title">Подписка в мобильном приложении</div>';
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-payment__account-status")};
f1.s="div";
var f0={};f0.pdd=true;
f3+=M.a(M,yr.object2nodeset(f0),"billing-status",f1);
f3+=lE(f1);
f3+="</div>";
return f3};
sy.t448.j=rl;
sy.t448.a=0;
sy.t449=function qM(f6,f9,f8,f7,f3,f2){var f5="";
var f0="page-payment__payment-button";
var f4="";var f1={a:{}};
if(f2){f4+="button_action "+f0
}else{f4+=f0
}var M=f4;function j0(j3,j5,j6,j4){return 0
}var j2=[0,"orders",3,0];
var f4="";var f1={a:{}};
if(kR(f6.s(j2,f9))){f4+="Продлить подписку"
}else{f4+="Оплатить подписку"
}var j1=f4;
f5+=lE(f3);
f5+="<div";
f3.a={"class":new yr.scalarAttr("page-payment__buttons-bar")};
f3.s="div";
var f4={};f4.text=j1;
f5+=f6.a(f6,yr.object2nodeset(f4),"button",f3,"",M);
f5+=lE(f3);
f5+=" ";var f4={};
f4.text="Ввести подарочный код";
f5+=f6.a(f6,yr.object2nodeset(f4),"button",f3,"","page-payment__gift-button");
f5+="</div>";
return f5};
sy.t449.j=rl;
sy.t449.a=0;
sy.t450=function qC(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-settings")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-settings"));
f2+=M.a(M,M.s(rg,f3),"page-settings__account",f0);
f2+=lE(f0);
f2+='<div class="page-settings__line"></div>';
f2+=M.a(M,M.s(rg,f3),"page-settings__scrobble",f0);
f2+='<div class="page-settings__line"></div>';
f2+=M.a(M,eq("subscription",f3,[]),"page-settings__subscribe",f0);
f2+='<div class="page-settings__line"></div>';
f2+=M.a(M,M.s(rg,f3),"payment-order",f0);
f2+=M.a(M,M.s(rg,f3),"payment-gift",f0);
f2+="</div>";
return f2};
sy.t450.j=1;
sy.t450.a=1;
sy.t451=function qB(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-settings")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-settings"));
f2+=lE(f0);
f2+='<div class="page-settings__title">Настройки</div>';
f2+="<div>";
f2+="Чтобы настроить аккаунт, ";
f2+='<span class="page-settings__log-in link link_major">войдите или зарегистрируйтесь</span>';
f2+=" на Яндексе.";
f2+="</div>";
f2+="</div>";
return f2};
sy.t451.j=kM;
sy.t451.a=1;
sy.t452=function qA(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="page-settings__section">';
f2+='<div class="page-settings__subtitle">Аккаунт</div>';
f2+='<div class="page-settings__item">';
f2+='<div class="page-settings__item-label">';
f2+="Подписка в мобильном приложении";
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-settings__item-cont")};
f0.s="div";
if(kR(M.s(kN,f3))){f2+=M.a(M,eq("account",f3,[]),"page-settings__subscription-status_pdd",f0)
}else{f2+=M.a(M,eq("account",f3,[]),"page-settings__subscription-status",f0)
}f2+=lE(f0);
f2+="</div>";
f2+="</div>";
f2+='<div class="page-settings__item">';
f2+='<div class="page-settings__item-label">';
f2+="Персональные данные";
f2+="</div>";
f2+='<div class="page-settings__item-cont">';
f2+='<p class="page-settings__paragraph"><a class="link link_major" href="https://passport.yandex.ru/passport?mode=changedisplayname" target="_blank">Как показывать имя</a></p>';
f2+='<p class="page-settings__paragraph"><a class="link link_major" href="https://passport.yandex.ru/passport?mode=changeavatar" target="_blank">Сменить портрет</a></p>';
f2+="</div>";
f2+="</div>";
f2+="</div>";
return f2};
sy.t452.j=rl;
sy.t452.a=0;
sy.t453=function qz(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+='<div class="page-settings__section">';
f3+='<div class="page-settings__subtitle">Связанные сервисы</div>';
var f0={};f0.profile=yr.nodeset2data(M.s(kH,f4));
f0.provider="vkontakte";
f0.scope="friends,audio";
f0.name="ВКонтакте";
f0.loaderTooltip="Снова импортировать треки";
f3+=M.a(M,yr.object2nodeset(f0),"page-settings__social-item",f1);
var f0={};f0.profile=yr.nodeset2data(M.s(kG,f4));
f0.provider="facebook";
f0.scope="user_friends,user_likes";
f0.name="Facebook";
f0.loaderTooltip="Снова импортировать любимых исполнителей";
f3+=M.a(M,yr.object2nodeset(f0),"page-settings__social-item",f1);
f3+='<div class="page-settings__item">';
f3+='<div class="page-settings__item-label">';
f3+="Показывать соцсети на моей странице";
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-settings__item-cont")};
f1.s="div";
var f0={};f0.checked=k("public",M.s(kF,f4));
f0.paramName="socialVisibility";
f0.leftText="Да";
f0.rightText="Нет";
f3+=M.a(M,yr.object2nodeset(f0),"toggler-control",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
f3+='<div class="page-settings__item">';
f3+='<div class="page-settings__item-label">';
f3+="Скробблинг в Last.fm";
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-settings__item-cont")};
f1.s="div";
f3+=M.a(M,M.s(kE,f4),"scrobble-control",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
f3+='<div class="page-settings__item">';
f3+='<div class="page-settings__item-label">';
f3+="Яндекс.Диск";
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-settings__item-cont")};
f1.s="div";
var f0={};f0.text="Добавить треки";
f0.href="/disk";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"","page-settings__disk");
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
f3+="</div>";
return f3};
sy.t453.j=rl;
sy.t453.a=0;
sy.t454=function qy(f4,f7,f6,f5,f1){var f3="";
var f2={};var f0={a:{}};
f2.checked=yr.nodeset2data(f4.s(kD,f7));
f2["class"]="billing-toggler";
f2.paramName="billingMailEnabled";
var M=f2;var f2={};
var f0={a:{}};
f2.checked=yr.nodeset2data(f4.s(kC,f7));
f2["class"]="artist-toggler";
f2.paramName="artistsMailEnabled";
var f8=f2;f3+=lE(f1);
f3+='<div class="page-settings__section">';
f3+='<div class="page-settings__subtitle">Уведомления</div>';
f3+='<div class="page-settings__item">';
f3+='<div class="page-settings__item-label">';
f3+="Присылать по этому адресу";
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-settings__item-cont page-settings__email")};
f1.s="div";
var f2={};f2.text=yr.nodeset2data(f4.s(kB,f7));
f2["class"]="theme1";
f3+=f4.a(f4,yr.object2nodeset(f2),"button-arrow",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
f3+='<div class="page-settings__item">';
f3+='<div class="page-settings__item-label">';
f3+="Письма об окончании подписки";
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-settings__item-cont")};
f1.s="div";
f3+=f4.a(f4,yr.object2nodeset(M),"toggler-control",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
f3+='<div class="page-settings__item">';
f3+='<div class="page-settings__item-label">';
f3+="Новинки моих любимых исполнителей";
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-settings__item-cont")};
f1.s="div";
f3+=f4.a(f4,yr.object2nodeset(f8),"toggler-control",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
f3+=f4.a(f4,f4.s(rg,f7),"email-selector",f1);
f3+="</div>";
return f3};
sy.t454.j=rl;
sy.t454.a=0;
sy.t455=function qx(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="page-settings__section">';
f2+='<div class="page-settings__subtitle">Уведомления</div>';
f2+='<div class="page-settings__item">';
f2+="Чтобы подписаться на уведомления, ";
f2+='<a href="https://validator.yandex.ru/" target="_blank">укажите адрес электронной почты</a>';
f2+=" в настройках Яндекса";
f2+="</div>";
f2+="</div>";
return f2};
sy.t455.j=kA;
sy.t455.a=0;
sy.t456=function qw(f4,f8,f6,f5,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-settings__item page-settings__item_social")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f4.s(rg,f8),"page-settings__item_social"));
if(kk("profile",f8)){var f7=f1.a["class"];
if(f7){f1.a["class"]=f7.addscalar(" page-settings__item_connected")
}else{f1.a["class"]=new yr.scalarAttr(" page-settings__item_connected")
}}f3+=lE(f1);
f3+='<div class="page-settings__item-label">';
f3+=mC(eq("name",f8,[]));
var f2={};f2.tooltip=yr.nodeset2data(eq("loaderTooltip",f8,[]));
f3+=f4.a(f4,yr.object2nodeset(f2),"page-settings__loader",f1);
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-settings__item-cont")};
f1.s="div";
var f2={};var f0={};
var M={a:{}};
f0.provider=yr.nodeset2data(eq("provider",f8,[]));
f0.scope=yr.nodeset2data(eq("scope",f8,[]));
f2.params=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"page-settings__social-control",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
return f3};
sy.t456.j=rl;
sy.t456.a=0;
sy.t457=function qv(f2,f6,f4,f3,M,f7){var f1="";
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("page-settings__social-control")};
M.s="div";if(f7){var f5=M.a["class"];
if(f5){M.a["class"]=f5.addscalar(" "+(f7))
}else{M.a["class"]=new yr.scalarAttr(" "+(f7))
}}var f0={};
f0.text="Привязать";
f0.buttonClass="page-settings__btn-bind";
f0.params=yr.nodeset2data(eq("params",f6,[]));
f1+=f2.a(f2,yr.object2nodeset(f0),"social-bind",M);
f1+=lE(M);f1+='<div class="page-settings__social-account">';
f1+='<p><a class="page-settings__btn-unbind link link_mute">Отвязать аккаунт</a></p>';
f1+="</div>";
f1+="</div>";
return f1};
sy.t457.j=rl;
sy.t457.a=0;
sy.t458=function qu(f1,f4,f3,f2,M){var f0="";
function f6(f9,j1,j2,j0){return 0
}var f5=[0,"subscriptions",0,"autoRenewable",3,0];
var f8=f1.s(f5,f4);
var f7=f1.s(mP,f4);
f0+=f1.a(f1,f1.s(rg,f4),"billing-status",M);
f0+=lE(M);f0+='<a href="/payment/history" class="page-settings__payment-history link link_major">История платежей</a>';
f0+=f1.a(f1,f1.s(rg,f4),"page-settings__subscription-bar",M,!kR(f8)&&!kR(f7));
return f0};
sy.t458.j=rl;
sy.t458.a=0;
sy.t459=function qs(M,f4,f5,f2,f1){var f3="";
var f0={};f0.pdd=true;
f3+=M.a(M,yr.object2nodeset(f0),"billing-status",f1);
return f3};
sy.t459.j=rl;
sy.t459.a=0;
sy.t460=function pY(f3,f7,f5,f4,f0,j2){var f2="";
var j1="page-settings__payment-button";
var f1="";var M={a:{}};
if(j2){f1+="button_action "+j1
}else{f1+=j1
}var j0=f1;
function f9(j3,j5,j6,j4){return 0
}var f6=[0,"orders",3,0];
var f1="";var M={a:{}};
if(kR(f3.s(f6,f7))){f1+="Продлить подписку"
}else{f1+="Оплатить подписку"
}var f8=f1;
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-settings__buttons-bar")};
f0.s="div";
var f1={};f1.text=f8;
f2+=f3.a(f3,yr.object2nodeset(f1),"button",f0,"",j0);
f2+=lE(f0);
f2+=" ";var f1={};
f1.text="Ввести подарочный код";
f2+=f3.a(f3,yr.object2nodeset(f1),"button",f0,"","page-settings__gift-button");
f2+="</div>";
return f2};
sy.t460.j=rl;
sy.t460.a=0;
sy.t461=function pX(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<span class="page-settings__loader" title="'+dD((eq("tooltip",f3,[])))+'">';
f2+='<span class="icon icon_update icon_size_M"></span>';
f2+="</span>";
return f2};
sy.t461.j=rl;
sy.t461.a=0;
sy.t462=function pW(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-apps")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-apps"));
f2+=lE(f0);
f2+='<div class="page-apps__section page-apps__section_phone">';
f2+='<div class="page-apps__prompt page-apps__prompt_left page-apps__section_iphone">';
f2+='<div class="page-apps__title">';
f2+="Открывайте новую музыку";
f2+="</div>";
f2+='<p class="page-apps__static-text">';
f2+="Сервис ежедневно собирает персональные ";
f2+='<span class="page-apps__button page-apps__button_active page-apps__button_feed">рекомендации</span>';
f2+=" — подборку треков и альбомов. Они основаны на ваших предпочтениях, интересах друзей и предложениях редакции.";
f2+="</p>";
f2+='<p class="page-apps__static-text">';
f2+='<span class="page-apps__button page-apps__button_radio">Радио</span>';
f2+=" поможет вам найти новые треки в жанре или в стиле конкретного исполнителя.";
f2+="</p>";
f2+="</div>";
f2+=M.a(M,M.s(rg,f3),"page-apps__phones",f0,"right","feed");
f2+="</div>";
f2+='<div class="page-apps__section page-apps__section_phone page-apps__section_iphone page-apps__section_overlay">';
f2+='<div class="page-apps__prompt page-apps__prompt_right">';
f2+='<div class="page-apps__title">';
f2+="Слушайте, когда хотите";
f2+="</div>";
f2+='<p class="page-apps__static-text page-apps__static-text_android">';
f2+="Собирайте свою ";
f2+='<span class="page-apps__button page-apps__button_active page-apps__button_library">коллекцию</span>';
f2+=". Вы можете сохранять понравившиеся треки в приложении и на сайте сервиса.";
f2+="</p>";
f2+='<p class="page-apps__static-text page-apps__static-text_iphone">';
f2+="Собирайте свою ";
f2+='<span class="page-apps__button page-apps__button_active page-apps__button_library">коллекцию</span>';
f2+=". Вы можете сохранять понравившиеся треки в приложении и на сайте сервиса, перенести фонотеку из ВКонтакте и телефона.";
f2+="</p>";
f2+='<p class="page-apps__static-text">';
f2+="А если хотите слушать любимую музыку без доступа в интернет, воспользуйтесь ";
f2+='<span class="page-apps__button page-apps__button_offline">офлайн-режимом</span>';
f2+=".";f2+="</p>";
f2+="</div>";
f2+=M.a(M,M.s(rg,f3),"page-apps__phones",f0,"left","library");
f2+="</div>";
f2+=M.a(M,M.s(rg,f3),"page-apps__section_promo",f0);
f2+=M.a(M,M.s(rg,f3),"page-apps__bar",f0);
f2+=M.a(M,M.s(rg,f3),"payment-order",f0);
f2+=M.a(M,M.s(rg,f3),"payment-gift",f0);
f2+="</div>";
return f2};
sy.t462.j=1;
sy.t462.a=1;
sy.t463=function pU(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+='<div class="page-apps__section page-apps__section_promo">';
f3+='<div class="page-apps__title">Подписывайтесь</div>';
f3+="<div";
f1.a={};f1.s="div";
var f0={};f0.type="gift";
f0.text="30 дней подписки в подарок";
f3+=M.a(M,yr.object2nodeset(f0),"page-apps__promo-item",f1);
var f0={};f0.type="offline";
f0.text="Офлайн-режим для прослушивания без интернета";
f3+=M.a(M,yr.object2nodeset(f0),"page-apps__promo-item",f1);
var f0={};f0.type="tracks";
f0.text="Доступ к каталогу из 17 млн треков";
f3+=M.a(M,yr.object2nodeset(f0),"page-apps__promo-item",f1);
f3+=lE(f1);
f3+="</div>";
f3+="</div>";
return f3};
sy.t463.j=rl;
sy.t463.a=0;
sy.t464=function pS(M,f4,f5,f2,f1){var f3="";
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("page-apps__bar")};
f1.s="div";
var f0={};f0.text="Оплатить подписку";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"XL","button_promo page-apps__button_payment");
f3+=lE(f1);
f3+=" ";var f0={};
f0.text="Ввести подарочный код";
f3+=M.a(M,yr.object2nodeset(f0),"button",f1,"XL","button_transparent page-apps__button_gift");
f3+='<div class="page-apps__static-text">';
f3+="Вы можете оплатить подписку и в приложении";
f3+="</div>";
f3+="</div>";
return f3};
sy.t464.j=rl;
sy.t464.a=0;
sy.t465=function pQ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="page-apps__promo-item page-apps__promo-item_'+dD((eq("type",f3,[])))+'">';
f2+='<span class="page-apps__promo-icon"></span>';
f2+='<div class="page-apps__promo-text">';
f2+=mC(eq("text",f3,[]));
f2+="</div>";
f2+="</div>";
return f2};
sy.t465.j=rl;
sy.t465.a=0;
sy.t466=function pO(f2,f6,f5,f3,M,f7,f8){var f1="";
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("page-apps__phones")};
M.s="div";if(f7){var f4=M.a["class"];
if(f4){M.a["class"]=f4.addscalar(" page-apps__phones_"+(f7))
}else{M.a["class"]=new yr.scalarAttr(" page-apps__phones_"+(f7))
}}else{var f4=M.a["class"];
if(f4){M.a["class"]=f4.addscalar(" page-apps__phones_right")
}else{M.a["class"]=new yr.scalarAttr(" page-apps__phones_right")
}}f1+=lE(M);
f1+='<span class="icon icon_dropdown icon_fwd"></span>';
f1+='<span class="icon icon_dropdown icon_back"></span>';
f1+="<div";
M.a={};M.s="div";
var f0={};f0.type="android";
f0.screen=f8;
f0["class"]="page-apps__phone_pale page-apps__phone_size_s";
f1+=f2.a(f2,yr.object2nodeset(f0),"page-apps__phone",M);
var f0={};f0.type="iphone";
f0.screen=f8;
f1+=f2.a(f2,yr.object2nodeset(f0),"page-apps__phone",M);
f1+=lE(M);f1+="</div>";
f1+="</div>";
return f1};
sy.t466.j=rl;
sy.t466.a=0;
sy.t467=function pM(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-apps__phone page-apps__phone_"+sx((eq("type",f3,[]))))};
f0.s="div";
if(kk("size",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" page-apps__phone_size_"+sx((eq("size",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" page-apps__phone_size_"+sx((eq("size",f3,[]))))
}}if(kk("class",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" "+sx((eq("class",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" "+sx((eq("class",f3,[]))))
}}f2+=lE(f0);
f2+='<div class="page-apps__phone-body">';
f2+='<div class="page-apps__phone-display">';
f2+='<div class="page-apps__phone-screen page-apps__phone-screen_'+dD((eq("screen",f3,[])))+'"></div>';
f2+="</div>";
f2+='<div class="page-apps__phone-shadow"></div>';
f2+="</div>";
f2+='<div class="page-apps__phone-overlay"></div>';
f2+="</div>";
return f2};
sy.t467.j=rl;
sy.t467.a=0;
sy.t468=function pK(M,f3,f5,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-apps__phone-screen")};
f0.s="div";
if(kk("type",f3)){var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" page-apps__phone-screen_"+sx((eq("type",f3,[]))))
}else{f0.a["class"]=new yr.scalarAttr(" page-apps__phone-screen_"+sx((eq("type",f3,[]))))
}}else{var f4=f0.a["class"];
if(f4){f0.a["class"]=f4.addscalar(" page-apps__phone-screen_feed")
}else{f0.a["class"]=new yr.scalarAttr(" page-apps__phone-screen_feed")
}}f2+=lE(f0);
f2+="</div>";
return f2};
sy.t468.j=rl;
sy.t468.a=0;
sy.t469=function pH(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-mix")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-mix"));
f2+=lE(f0);
f2+='<div class="page-mix__title">';
f2+=mC(eq("title",f3,[]));
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-mix__playlists")};
f0.s="div";
f2+=M.a(M,eq("items",f3,[]),"playlist",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
return f2};
sy.t469.j=1;
sy.t469.a=1;
sy.t470=function po(f2,f9,f7,f5,M){var f1="";
var j1=(yr.externals.dirInfo)(lP("dir",f9));
var j0=(eq("tracks",f9,[])).length;
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("page-disk")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f2.s(rg,f9),"page-disk"));
f1+=lE(M);f1+='<div class="page-disk__header">';
if(kR(f2.n(hu,yr.object2nodeset(j1)))){f1+='<span class="page-disk__back">';
f1+='<span class="icon icon_dropdown icon_size_L"></span>';
f1+='<a href="/disk'+dD((f2.n(hu,yr.object2nodeset(j1))))+'" class="link">Назад</a>';
f1+="</span>"
}f1+='<span class="page-disk__title">';
if(!kR(f2.n(hu,yr.object2nodeset(j1)))){f1+="Музыка на Яндекс.Диске"
}else{f1+=mC(f2.n(e3,yr.object2nodeset(j1)))
}f1+="</span>";
f1+="</div>";
f1+="<div";
M.a={"class":new yr.scalarAttr("page-disk__folders")};
M.s="div";var f6=eq("subDirs",f9,[]);
for(var f4=0,f3=f6.length;
f4<f3;f4++){var f8=f6[f4];
var f0={};f0.dir=yr.nodeset2data(f2.s(rg,f8));
f0.parent=yr.nodeset2data(f2.n(el,yr.object2nodeset(j1)));
f1+=f2.a(f2,yr.object2nodeset(f0),"folder",M)
}f1+=lE(M);
f1+="</div>";
if(j0&&(eq("subDirs",f9,[])).length){f1+='<div class="page-disk__subtitle">';
f1+="И еще "+ma(((yr.externals.plural)(j0,"нет треков","%s трек","%s трека","%s треков")));
f1+="</div>"
}f1+="<div";
M.a={"class":new yr.scalarAttr("page-disk__tracks")};
M.s="div";f1+=f2.a(f2,eq("tracks",f9,[]),"track",M);
f1+=lE(M);f1+="</div>";
f1+="</div>";
return f1};
sy.t470.j=1;
sy.t470.a=1;
sy.t471=function pn(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("page-disk")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"page-disk"));
f2+=lE(f0);
f2+='<div class="page-disk__header">';
f2+='<div class="page-disk__title">';
f2+="Музыка на Яндекс.Диске";
f2+="</div>";
f2+="</div>";
f2+="<div>";
f2+="Чтобы импортировать треки с Яндекс.Диска, нужно ";
f2+='<span class="page-disk__log-in link link_major">авторизоваться</span>';
f2+=".";f2+="</div>";
f2+="</div>";
return f2};
sy.t471.j=kM;
sy.t471.a=1;
sy.t472=function pm(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("sidebar-500")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"sidebar-500"));
f2+=lE(f0);
f2+='<div class="sidebar-500__title">Ошибка 500</div>';
f2+='<div class="sidebar-500__description">';
f2+="<p>Случилось страшное, но мы уже знаем об этом.</p>";
f2+="</div>";
f2+='<div class="sidebar-500__link">Попробуйте <span class="link link_major" onclick="location.reload()">обновить страницу</span>.</div>';
if(kk("debug",f3)){f2+=M.a(M,eq("error",f3,[]),"debug",f0)
}f2+="</div>";
return f2};
sy.t472.j=1;
sy.t472.a=1;
sy.t473=function pk(f2,j0,f7,f5,M){var f1="";
var j2=f2.s(kt,j0);
var j1=lP("id",j0);
var f9=(eq("volumes",j0,[])).length>1;
f1+=lE(M);f1+="<div";
M.a={"class":new yr.scalarAttr("sidebar-album")};
M.s="div";M.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f2.s(rg,j0),"sidebar-album"));
var f0={};f0.title="альбом";
f0.href="/album/"+sx((eq("id",j0,[])));
f1+=f2.a(f2,yr.object2nodeset(f0),"stamp",M);
f1+=lE(M);f1+='<div class="sidebar-album__title">';
f1+='<a href="/album/'+dD((eq("id",j0,[])))+'" class="link">';
f1+=mC(eq("title",j0,[]));
if(kk("version",j0)){f1+='<span class="sidebar-album__version">';
f1+=" "+mC((eq("version",j0,[])));
f1+="</span>"
}f1+="</a>";
f1+="</div>";
f1+=f2.a(f2,f2.s(rg,j0),"album-summary",M);
var f0={};f0.icon="play";
f1+=f2.a(f2,yr.object2nodeset(f0),"button",M,"","js-play-album");
f1+=" ";var f0={};
f0.album=yr.nodeset2data(f2.s(rg,j0));
f0.pin="right";
f1+=f2.a(f2,yr.object2nodeset(f0),"like",M);
var f0={};f0.album=yr.nodeset2data(f2.s(rg,j0));
f0.pin="left";
f1+=f2.a(f2,yr.object2nodeset(f0),"add-to",M);
f1+=" ";var f0={};
f0.album=yr.nodeset2data(f2.s(rg,j0));
f1+=f2.a(f2,yr.object2nodeset(f0),"share",M);
f1+='<div class="sidebar-album__tracks">';
var f6=eq("volumes",j0,[]);
for(var f4=0,f3=f6.length;
f4<f3;f4++){var f8=f6[f4];
if(f9){f1+='<div class="sidebar-album__vol">Диск '+ma((f4+1))+"</div>"
}f1+="<div";
M.a={};M.s="div";
f1+=f2.a(f2,eq("*",f8,[]),"track",M,true,j2,j1);
f1+=lE(M);f1+="</div>"
}f1+="</div>";
f1+="</div>";
return f1};
sy.t473.j=1;
sy.t473.a=1;
sy.t474=function pi(f4,j1,f8,f7,f1){var f3="";
var j0=eq("album",j1,[]);
var f9=kR(j0)&&!(k("-1",j0));
function j2(j3,j5,j6,j4){return !(ak(eq("id",j5,[]),j0))
}var f5=[0,"data",0,"albums",2,j2];
var f2=[];if(kk("hideAlbum",j1)){f2=f4.s(f5,j1)
}else{f2=f4.s(ks,j1)
}var f6=f2;
f3+=lE(f1);
f3+="<div";
f1.a={"class":new yr.scalarAttr("sidebar-track")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f4.s(rg,j1),"sidebar-track"));
var f2={};f2.title="трек";
if(f9){f2.href="/album/"+sx((j0))+"/track/"+sx((f4.s(kq,j1)))
}f3+=f4.a(f4,yr.object2nodeset(f2),"stamp",f1);
f3+=lE(f1);
f3+='<div class="sidebar-track__title">';
if(f9){f3+='<a href="/album/'+dD((j0))+"/track/"+dD((f4.s(kq,j1)))+'" class="link">'+mC((f4.s(gW,j1)))+"</a>"
}else{f3+="<span>"+mC((f4.s(gW,j1)))+"</span>"
}f3+="</div>";
f3+="<div";
f1.a={};f1.s="div";
f3+=f4.a(f4,eq("data",j1,[]),"album-summary",f1);
f3+=lE(f1);
f3+="</div>";
f3+="<div";
f1.a={"class":new yr.scalarAttr("sidebar-track__controls")};
f1.s="div";
var f2={};f2.icon="pp";
f3+=f4.a(f4,yr.object2nodeset(f2),"button",f1,"","js-play-track");
f3+=lE(f1);
f3+=" ";var f2={};
var f0={};var M={a:{}};
f0.track=yr.nodeset2data(eq("data",j1,[]));
f2.entry=f0;
f2.pin="right";
var f0={};var M={a:{}};
f0.removeText="Удалить из Моей музыки и всех плейлистов";
f2.tooltip=f0;
f3+=f4.a(f4,yr.object2nodeset(f2),"like",f1);
var f2={};var f0={};
var M={a:{}};
f0.track=yr.nodeset2data(eq("data",j1,[]));
f2.entry=f0;
f2.pin="left";
f3+=f4.a(f4,yr.object2nodeset(f2),"add-to",f1);
f3+=" ";var f2={};
f2.track=yr.nodeset2data(eq("data",j1,[]));
f2.albumId=yr.nodeset2data(j0);
f3+=f4.a(f4,yr.object2nodeset(f2),"share",f1);
f3+="</div>";
if((f6).length){f3+='<div class="sidebar-track__subtitle">';
if(kk("hideAlbum",j1)){f3+="Также встречается в альбомах"
}else{f3+="Встречается в альбомах"
}f3+="</div>";
f3+=f4.a(f4,f6,"listed-album",f1)
}if((f4.s(kp,j1)).length){f3+='<div class="sidebar-track__subtitle">Похожие треки</div>';
f3+=f4.a(f4,f4.s(kp,j1),"track_type_full",f1,true)
}if(!(f6).length&&!(f4.s(kp,j1)).length){var f2={};
f2.rtb=1;f2.rtbId="R-I-136563-4";
f3+=f4.a(f4,yr.object2nodeset(f2),"smalladv",f1)
}f3+="</div>";
return f3};
sy.t474.j=1;
sy.t474.a=1;
sy.t475=function pg(f5,j0,f9,f8,f2){var f4="";
var f6=f5.s(sh,j0);
var f3="";var f0={a:{}};
if(kR(f5.s(o4,j0))){f3+="композитор"
}else{f3+="исполнитель"
}var f7=f3;
function j2(j3,j5,j6,j4){return j6<5
}var f1=[0,"tracks",2,j2];
function j1(j3,j5,j6,j4){return j6<3
}var M=[0,"albums",2,j1];
f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("sidebar-artist")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,j0),"sidebar-artist"));
var f3={};f3.title=f7;
f3.href="/artist/"+sx((f5.s(sh,j0)));
f4+=f5.a(f5,yr.object2nodeset(f3),"stamp",f2);
f4+=lE(f2);
f4+='<div class="sidebar-artist__title">';
f4+='<a href="/artist/'+dD((f5.s(sh,j0)))+'" class="link">'+mC((f5.s(nB,j0)))+"</a>";
f4+="</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("sidebar-artist__genres")};
f2.s="div";
var f3={};f3.genres=yr.nodeset2data(f5.s(oY,j0));
f4+=f5.a(f5,yr.object2nodeset(f3),"genres",f2);
f4+=lE(f2);
f4+="</div>";
f4+="<div";
f2.a={"class":new yr.scalarAttr("sidebar-artist__actions")};
f2.s="div";
var f3={};f3.icon="play";
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"","js-play-artist");
f4+=lE(f2);
f4+=" ";var f3={};
f3.artist=yr.nodeset2data(eq("artist",j0,[]));
f4+=f5.a(f5,yr.object2nodeset(f3),"like",f2);
f4+=" ";var f3={};
f3.artist=yr.nodeset2data(eq("artist",j0,[]));
f4+=f5.a(f5,yr.object2nodeset(f3),"share",f2);
var f3={};f3.text="Радио";
f3.status=yr.nodeset2data(eq("radio",j0,[]));
f3.artist=yr.nodeset2data(eq("artist",j0,[]));
f4+=f5.a(f5,yr.object2nodeset(f3),"button-radio",f2,"button_left");
f4+="</div>";
f4+='<div class="sidebar-artist__subtitle">Популярные треки</div>';
f4+="<div";
f2.a={};f2.s="div";
f4+=f5.a(f5,f5.s(f1,j0),"track",f2,true,f6);
f4+=lE(f2);
f4+="</div>";
f4+='<div class="sidebar-artist__more">';
f4+='<a class="link link_major" href="/artist/'+dD((f6))+'/tracks">Все треки</a>';
f4+="</div>";
f4+='<div class="sidebar-artist__subtitle">Популярные альбомы</div>';
f4+=f5.a(f5,f5.s(M,j0),"listed-album",f2);
f4+='<div class="sidebar-artist__more">';
f4+='<a class="link link_major" href="/artist/'+dD((f6))+'/albums">Все альбомы</a>';
f4+="</div>";
f4+="</div>";
return f4};
sy.t475.j=1;
sy.t475.a=1;
sy.t476=function pe(f6,j0,f9,f8,f1){var f5="";
var f7=ak(f6.s(rY,j0),f6.s(jt,j0));
var f4=!(k(3,f6.s(jq,j0)));
var f3=[];if(f7){f3=f6.s(kn,j0)
}else{f3=f6.s(ko,j0)
}var f2=f3;
f5+=lE(f1);
f5+="<div";
f1.a={"class":new yr.scalarAttr("sidebar-playlist")};
f1.s="div";
f1.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f6.s(rg,j0),"sidebar-playlist"));
var f3={};f3.title="плейлист";
f3.href="/users/"+sx((f6.s(jt,j0)))+"/playlists/"+sx((f6.s(jq,j0)));
f5+=f6.a(f6,yr.object2nodeset(f3),"stamp",f1);
f5+=lE(f1);
f5+="<div";
f1.a={"class":new yr.scalarAttr("sidebar-playlist__title")};
f1.s="div";
f5+=f6.a(f6,eq("playlist",j0,[]),"sidebar-playlist__link",f1);
f5+=lE(f1);
f5+="</div>";
f5+='<div class="sidebar-playlist__bar">';
f5+='<div class="sidebar-playlist__info">';
f5+='<a class="sidebar-playlist__user" href="/users/'+dD((f6.s(jt,j0)))+'">'+mC((f6.s(km,j0)))+"</a>";
f5+='<span class="sidebar-playlist__count">'+ma(((yr.externals.plural)((f6.s(kn,j0)).length,"нет треков","%s трек","%s трека","%s треков")))+"</span>";
f5+="</div>";
var f3={};f3.icon="play";
f5+=f6.a(f6,yr.object2nodeset(f3),"button",f1,"M","js-play-playlist");
f5+=" ";if(f4){var f3={};
f3.playlist=yr.nodeset2data(eq("playlist",j0,[]));
f3.pin="right";
f5+=f6.a(f6,yr.object2nodeset(f3),"like",f1)
}var f3={};
f3.playlist=yr.nodeset2data(eq("playlist",j0,[]));
if(f4){f3.pin="left"
}f5+=f6.a(f6,yr.object2nodeset(f3),"add-to",f1);
f5+=" ";var f3={};
f3.playlist=yr.nodeset2data(eq("playlist",j0,[]));
f3.isOwner=f7;
f3.disabled=k("private",f6.s(kl,j0));
var f0={};var M={a:{}};
f0.disabledText="Нельзя опубликовать скрытый плейлист";
f3.tooltip=f0;
f5+=f6.a(f6,yr.object2nodeset(f3),"share",f1);
if(f4&&f7){var f3={};
f3.icon="trashcan";
var f0={};var M={a:{}};
f0.title="Удалить плейлист";
f3.attrs=f0;
f5+=f6.a(f6,yr.object2nodeset(f3),"button",f1,"","sidebar-playlist__delete")
}f5+="</div>";
f5+="<div";
f1.a={"class":new yr.scalarAttr("sidebar-playlist__tracks")};
f1.s="div";
f5+=f6.a(f6,f2,"track",f1,true,"","");
f5+=lE(f1);
f5+="</div>";
f5+="</div>";
return f5};
sy.t476.j=1;
sy.t476.a=1;
sy.t477=function pc(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<a href="/users/'+dD((M.s(bN,f3)))+"/playlists/"+dD((eq("kind",f3,[])))+'" class="link" title="'+dD((eq("title",f3,[])))+'">'+mC((eq("title",f3,[])))+"</a>";
return f2};
sy.t477.j=rl;
sy.t477.a=0;
sy.t478=function o9(M,f3,f4,f1,f0){var f2="";
return f2};
sy.t478.j=rl;
sy.t478.a=0;
sy.t479=function o6(M,f4,f5,f1,f0){var f2="";
var f3=M.s(kj,f4);
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("sidebar-order-info")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f4),"sidebar-order-info"));
if(kR(f3)&&!kR(M.n(ki,f3))){f2+=M.a(M,M.s(rg,f4),"sidebar-order-info__error",f0)
}else{f2+=M.a(M,M.s(rg,f4),"sidebar-order-info__success",f0)
}f2+=lE(f0);
f2+="</div>";
return f2};
sy.t479.j=1;
sy.t479.a=1;
sy.t480=function oK(M,f4,f5,f1,f0){var f2="";
var f3=M.s(kj,f4);
f2+=lE(f0);
f2+='<div class="sidebar-order-info__title">';
f2+="Ошибка при проведении платежа";
f2+="</div>";
f2+="<div>";
f2+='<div class="sidebar-order-info__label">Код ошибки</div>';
f2+='<div class="sidebar-order-info__value">'+mC((M.n(kh,f3)))+"</div>";
f2+="</div>";
f2+="<div>";
f2+='<div class="sidebar-order-info__label">Подробности</div>';
f2+='<div class="sidebar-order-info__value"></div>';
f2+="</div>";
return f2};
sy.t480.j=rl;
sy.t480.a=0;
sy.t481=function oJ(M,f4,f5,f1,f0){var f2="";
var f3=M.s(kj,f4);
f2+=lE(f0);
f2+='<div class="sidebar-order-info__title">';
f2+="Платёж успешен";
f2+="</div>";
f2+="<div>";
f2+='<div class="sidebar-order-info__label">Когда</div>';
f2+='<div class="sidebar-order-info__value">';
if(kR(f3)&&!kR(M.n(ki,f3))){f2+="Ошибка платежа"
}else{if(kR(f3)&&kR(M.n(kf,f3))){f2+=ma((yr.externals.formatDate)(sx(M.n(kf,f3)),"%d.%m.%Y"))
}else{if(kR(M.s(kd,f4))){f2+="Ошибка платежа"
}else{f2+="В обработке"
}}}f2+="</div>";
f2+="</div>";
f2+="<div>";
f2+='<div class="sidebar-order-info__label">Тип платежа</div>';
f2+="<div";
f0.a={"class":new yr.scalarAttr("sidebar-order-info__value")};
f0.s="div";
f2+=M.a(M,eq("order",f4,[]),"sidebar-order-info__payment-type",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
f2+="<div>";
f2+='<div class="sidebar-order-info__label">Сумма</div>';
f2+='<div class="sidebar-order-info__value">'+ma((sx(M.s(jZ,f4))+" "+(yr.externals.formatCurrency)(sx(M.s(jX,f4)))))+"</div>";
f2+="</div>";
f2+="<div>";
f2+='<div class="sidebar-order-info__label">Подписка на</div>';
f2+='<div class="sidebar-order-info__value">'+ma((sx(M.s(jV,f4))+(yr.externals.plural)(sx(M.s(jV,f4)),""," день"," дня"," дней")))+" </div>";
f2+="</div>";
if(kR(M.n(kf,f3))){f2+="<br/>";
f2+='<p class="sidebar-order-info__label sidebar-order-info__label_pale">Спасибо!</p>'
}else{f2+='<p class="sidebar-order-info__feedback">';
f2+="Срок зачисления платежа зависит от способа оплаты, но обычно не превышает 15–20 минут. Если платеж ";
f2+="задерживается, обратитесь, пожалуйста, в ";
f2+='<a href="http://feedback.yandex.ru/?from=mobmusic">Службу поддержки</a>';
f2+=".";f2+="</p>"
}return f2};
sy.t481.j=rl;
sy.t481.a=0;
sy.t482=function oI(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+=mC(M.s(jT,f3));
return f2};
sy.t482.j=jy;
sy.t482.a=0;
sy.t483=function oG(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Подарочный код";
return f2};
sy.t483.j=cU;
sy.t483.a=0;
sy.t484=function oE(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="Подарок";
return f2};
sy.t484.j=cT;
sy.t484.a=0;
sy.t485=function oC(f3,j0,f7,f6,f0){var f2="";
var M=(yr.externals.dirInfo)(lP("dir",j0));
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("sidebar-folder")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f3.s(rg,j0),"sidebar-folder"));
f2+=lE(f0);
f2+='<div class="sidebar-folder__header">';
f2+='<span class="sidebar-folder__title">';
if(!kR(f3.n(hu,yr.object2nodeset(M)))){f2+="Музыка на Яндекс.Диске"
}else{f2+=mC(f3.n(e3,yr.object2nodeset(M)))
}f2+="</span>";
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("sidebar-folder__folders")};
f0.s="div";
var f8=eq("subDirs",j0,[]);
for(var f5=0,f4=f8.length;
f5<f4;f5++){var f9=f8[f5];
var f1={};f1.dir=yr.nodeset2data(f3.s(rg,f9));
f1.parent=yr.nodeset2data(f3.n(el,yr.object2nodeset(M)));
f2+=f3.a(f3,yr.object2nodeset(f1),"folder",f0)
}f2+=lE(f0);
f2+="</div>";
f2+="<div";
f0.a={"class":new yr.scalarAttr("sidebar-folder__tracks")};
f0.s="div";
f2+=f3.a(f3,eq("tracks",j0,[]),"track",f0);
f2+=lE(f0);
f2+="</div>";
f2+="</div>";
return f2};
sy.t485.j=1;
sy.t485.a=1;
sy.t486=function oA(f5,f8,f7,f6,f2){var f4="";
var f3={};var f0={a:{}};
f3.size="m";
f3["class"]="sidebar-apps__phone";
var f1={};var M={a:{}};
f1.autocomplete="off";
f1.name="text";
f1.placeholder="79001234567";
f1.maxlength=12;
f1.tabindex="1";
f3.attrs=f1;
var f9=f3;f4+=lE(f2);
f4+="<div";
f2.a={"class":new yr.scalarAttr("sidebar-apps")};
f2.s="div";
f2.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(f5.s(rg,f8),"sidebar-apps"));
f4+=lE(f2);
f4+='<div class="sidebar-apps__logo"></div>';
f4+="<div";
f2.a={"class":new yr.scalarAttr("sidebar-apps__form")};
f2.s="div";
var f3={};f3.type="apple";
f3.prompt="iOS 7.0 и выше";
f4+=f5.a(f5,yr.object2nodeset(f3),"sidebar-apps__store-item",f2);
var f3={};f3.type="google";
f3.prompt="Android™ 4.0 и выше";
f4+=f5.a(f5,yr.object2nodeset(f3),"sidebar-apps__store-item",f2);
f4+=lE(f2);
f4+="<span>Получите ссылку на телефон:</span>";
f4+='<div class="sidebar-apps__bar">';
f4+=f5.f("f13",f8,f7,f6,f2,yr.object2nodeset(f9));
f4+='<span class="sidebar-apps__plus">+</span>';
f4+=" ";var f3={};
f3.text="Получить";
var f1={};var M={a:{}};
f1.tabindex="3";
f3.attrs=f1;
f4+=f5.a(f5,yr.object2nodeset(f3),"button",f2,"L","button_promo sidebar-apps__button-send");
f4+="</div>";
var f3={};f3.text="Некорректный номер телефона";
var f1={};var M={a:{}};
f1.my="left top";
f1.at="left bottom+10";
f1.of=".sidebar-apps__phone";
f3.position=f1;
f3["class"]="tooltip_theme_light";
f4+=f5.a(f5,yr.object2nodeset(f3),"tooltip",f2);
f4+="</div>";
f4+=f5.a(f5,f5.s(rg,f8),"sidebar-apps__popup",f2);
f4+="</div>";
return f4};
sy.t486.j=1;
sy.t486.a=1;
sy.t487=function oy(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("sidebar-apps__store-item")};
f0.s="div";
f2+=M.a(M,M.s(rg,f3),"button-store",f0);
f2+=lE(f0);
f2+='<span class="sidebar-apps__prompt">';
f2+=mC(eq("prompt",f3,[]));
f2+="</span>";
f2+="</div>";
return f2};
sy.t487.j=rl;
sy.t487.a=0;
sy.t488=function ov(f5,f8,f7,f6,f2){var f4="";
var f3={};var f0={a:{}};
f3.size="s";
f3["class"]="sidebar-apps__captcha";
var f1={};var M={a:{}};
f1.autocomplete="off";
f1.name="text";
f1.placeholder="Символы с картинки";
f1.maxlength=10;
f1.tabindex="2";
f3.attrs=f1;
var f9=f3;f4+=lE(f2);
f4+='<div class="sidebar-apps__popup">';
f4+='<img class="sidebar-apps__captcha-img" src="'+dD((eq("url",f8,[])))+'" target="_blank"/>';
f4+='<span class="link link_mute sidebar-apps__captcha-reload">Показать другую картинку</span>';
f4+=f5.f("f13",f8,f7,f6,f2,yr.object2nodeset(f9));
f4+='<span class="sidebar-apps__error"></span>';
f4+="</div>";
return f4};
sy.t488.j=rl;
sy.t488.a=0;
sy.t489=function os(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("popup-sequence")};
f0.s="div";
f0.a["data-b"]=new yr.scalarAttr((yr.externals.blockRoot)(M.s(rg,f3),"popup-sequence"));
f2+=lE(f0);
f2+='<span class="popup-sequence__close-wrapper">';
f2+='<span class="popup__close icon icon_size_L icon_remove"></span>';
f2+="</span>";
f2+=M.a(M,M.s(rg,f3),"popup-sequence__header",f0);
f2+=M.a(M,M.s(rg,f3),"popup-sequence__content",f0);
f2+="</div>";
return f2};
sy.t489.j=1;
sy.t489.a=1;
sy.t490=function nZ(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("popup-sequence__content")};
f0.s="div";
if(k("history",eq("what",f3,[]))){f2+=M.a(M,M.s(rg,f3),"popup-sequence__history",f0)
}else{f2+=M.a(M,M.s(rg,f3),"popup-sequence__seq",f0)
}f2+=lE(f0);
f2+="</div>";
return f2};
sy.t490.j=rl;
sy.t490.a=0;
sy.t491=function nY(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+='<div class="popup-sequence__tracks">';
if(kR(M.s(a7,f3))&&kR(M.s(ju,f3))){f2+='<div class="popup-sequence__context">';
f2+='<span class="icon icon_dropdown icon_size_L"></span>';
f2+='<a class="link" href="'+dD((M.s(a7,f3)))+'">'+mC((M.s(ju,f3)))+"</a>";
f2+="</div>"
}f2+=M.a(M,M.s(jr,f3),"track_type_full",f0,true,"","","remove");
f2+="</div>";
return f2};
sy.t491.j=rl;
sy.t491.a=0;
sy.t492=function nW(M,f3,f4,f1,f0){var f2="";
f2+=lE(f0);
f2+="<div";
f0.a={"class":new yr.scalarAttr("popup-sequence__tracks")};
f0.s="div";
f2+=M.a(M,M.s(lb,f3),"track_type_full",f0,true);
f2+=lE(f0);
f2+="</div>";
return f2};
sy.t492.j=rl;
sy.t492.a=0;
sy.t493=function nU(f6,f9,f8,f7,f3){var f5="";
var f4=[];var f1={a:{}};
var f2={};var M={a:{}};
f2.title="Слушать далее";
f2.id="";f2["class"]="popup-sequence__seq-tab";
f4.push(f2);
if(kR(f6.s(rY,f9))){var f2={};
var M={a:{}};
f2.title="История";
f2.id="history";
f2["class"]="popup-sequence__history-tab";
f4.push(f2)
}var j0=f4;
f5+=lE(f3);
f5+='<div class="popup-sequence__header">';
f5+='<div class="popup-sequence__header-content">';
f5+="<div";
f3.a={"class":new yr.scalarAttr("popup-sequence__buttons-bar")};
f3.s="div";
if(!(k("history",eq("what",f9,[])))){var f4={};
f4.entries=yr.nodeset2data(eq("tracks",f9,[]));
var f2={};var M={a:{}};
f2.my="center top+10";
f2.at="center bottom";
f4.position=f2;
f4.fixed=true;
f4.hideSeq=true;
var f2="";var M={a:{}};
var f0={};f0.text="Сохранить как плейлист";
f2+=f6.a(f6,yr.object2nodeset(f0),"button",M,"","popup-sequence__button-save");
f4.target=f2;
f4.hideSeq=true;
f5+=f6.a(f6,yr.object2nodeset(f4),"add-to",f3);
f5+=lE(f3);
f5+=" "}var f4={};
f4.text="Очистить";
f5+=f6.a(f6,yr.object2nodeset(f4),"button",f3,"","popup-sequence__button-clear");
f5+=lE(f3);
f5+="</div>";
f5+=f6.a(f6,yr.array2nodeset(j0),"tabs",f3,lP("what",f9));
f5+="</div>";
f5+="</div>";
return f5};
sy.t493.j=rl;
sy.t493.a=0;
sy.t494=function nS(M,f4,f5,f2,f1){var f3="";
f3+=M.a(M,M.s(rg,f4),"head",f1);
f3+=M.a(M,M.s(rg,f4),"head-progress",f1);
f3+=lE(f1);
f3+='<div class="centerblock-wrapper">';
f3+='<div class="centerblock"></div>';
f3+=M.a(M,M.s(rg,f4),"footer",f1);
f3+="</div>";
f3+=M.a(M,M.s(rg,f4),"sidebar",f1);
f3+=M.a(M,M.s(rg,f4),"popup-holder",f1);
var f0={};f0.listenOn="pages";
f3+=M.a(M,yr.object2nodeset(f0),"loading",f1,"loading_page");
f3+=M.a(M,M.s(rg,f4),"overlay",f1);
f3+=M.a(M,M.s(rg,f4),"bar",f1);
f3+=M.a(M,M.s(rg,f4),"notify",f1);
return f3};
sy.t494.j=1;
sy.t494.a=1;
sy.matcher={"nb-main-attrs":{"*":["t0"]},"nb-main-content":{"*":["t1"]},nb:{button:["t2"],buttonLink:["t3"],buttonAttach:["t4"],popupMenu:["t5"],popup:["t6"],modalPopup:["t7"],"radio-button":["t8"],select:["t9"],checkbox:["t11"],input:["t12"],textarea:["t13"],inputSimple:["t14"],textareaSimple:["t15"],"input-group":["t16"],progress:["t17"],icon:["t19","t18"],paranja:["t20"],island:["t21"],dropzone:["t22"],loader:["t23"],slider:["t24"],tabs:["t25"],arrow:["t26"],header:["t27"],user:["t28"],suggest:["t31"],toggler:["t37"]},"nb-select-options":{"":["t10"],select:["t10"]},"nb-user-pic":{user:["t29"]},"nb-user-name":{user:["t30"],username:["t35"],email:["t36"]},"nb-suggest":{"":["t32"],item:["t34","t33"]},"add-to-popup":{"*":["t38"]},"add-to-popup__playlists":{"*":["t41","t40","t39"]},"add-to-popup__playlist":{"*":["t42"]},"add-to":{"*":["t43"]},"album-cover":{"*":["t44"]},"album-summary":{"*":["t45"]},"album-summary__label":{"*":["t46"]},album:{"*":["t47"]},album_compact:{"*":["t48"]},"artist-pics_type_cover":{"*":["t49"]},"artist-pics":{"*":["t52","t51","t50"]},"artist-pics_type_yandex":{"*":["t53"]},"artist-pics_type_empty":{"*":["t54"]},artist:{"*":["t55"]},artist__user:{"*":["t56"]},artists:{"*":["t58","t57"]},artists__cont:{"*":["t59"]},artists__text:{"*":["t60"]},auth:{"*":["t61"]},auth__social:{"*":["t62"]},auth__provider:{"*":["t63"]},bar:{"*":["t64"]},"billing-status":{"*":["t65"]},"button-arrow":{"*":["t66"]},"button-group":{"*":["t67"]},"button-radio":{"*":["t68"]},"button-store":{"*":["t69"]},button:{"*":["t70"]},button__class:{"*":["t71"]},button__attrs:{"*":["t72"]},button__content:{"*":["t73"]},button__icon:{"*":["t74"]},button__label:{"*":["t75"]},concert:{"*":["t76"]},day:{"*":["t77"]},day__head:{"*":["t78"]},debug:{"*":["t79"]},donate:{"*":["t80"]},donate__intro:{"*":["t81"]},donate__payment:{"*":["t82"]},donate__other:{"*":["t83"]},"email-selector":{"*":["t84"]},"email-selector__item":{"*":["t85"]},empty:{"*":["t86"]},event__title:{"*":["t122","t87"]},"event__title-text":{"*":["t93","t92","t91","t90","t89","t88"]},event__playlist:{"*":["t94"]},event__notify:{"*":["t103","t100","t97","t95"]},"event__notify-layout":{"*":["t96"]},"event__notify-content":{"*":["t104","t101","t98"]},"event__notify-content_vkontakte-success":{"*":["t99"]},"event__notify-content_facebook-success":{"*":["t102"]},event:{"*":["t163","t161","t159","t157","t155","t153","t151","t149","t147","t145","t143","t141","t139","t137","t134","t132","t130","t128","t126","t124","t123","t120","t118","t116","t114","t112","t105"]},event__layout:{"*":["t106"]},event__content:{"*":["t162","t160","t158","t156","t154","t152","t150","t148","t146","t144","t142","t140","t138","t135","t133","t131","t129","t127","t125","t121","t119","t117","t115","t113","t107"]},event__user:{"*":["t108"]},event__albums:{"*":["t109"]},event__remove:{"*":["t110"]},event_removed:{"*":["t111"]},"event__social-track":{"*":["t136"]},folder:{"*":["t164"]},footer:{"*":["t165"]},footer__social:{"*":["t166"]},"footer__social-link":{"*":["t167"]},genres:{"*":["t168"]},genres__genre:{"*":["t169"]},"get-app-link":{"*":["t170"]},"head-progress":{"*":["t171"]},head:{"":["t172"]},head__user:{"*":["t173"]},head__noauth:{"*":["t174"]},"head__user-popup":{"*":["t175"]},hint:{"*":["t176"]},"html-head":{"*":["t177"]},"html-head__title_unescaped":{"*":["t178"]},"html-head__title":{"*":["t237","t233","t229","t225","t221","t219","t215","t208","t201","t194","t187","t179"]},"html-head__description":{"*":["t209","t202","t195","t188","t180"]},"html-head__og-title":{"*":["t238","t234","t230","t226","t222","t210","t203","t196","t189","t181"]},"html-head__og-description":{"*":["t239","t235","t231","t227","t223","t211","t204","t197","t190","t182"]},"html-head__og-type":{"*":["t216","t212","t205","t198","t191","t183"]},"html-head__og-url":{"*":["t240","t236","t232","t228","t224","t220","t218","t214","t207","t200","t193","t184"]},"html-head__og-image":{"*":["t217","t213","t206","t199","t192","t185"]},"html-head__rest":{"*":["t186"]},like:{"*":["t241"]},like__content:{"":["t243","t242"]},"like__tooltip-text":{"*":["t244"]},"listed-album":{"*":["t245"]},"listed-order":{"*":["t246"]},"listed-order__payment-type":{"*":["t249","t248","t247"]},"listed-track":{"*":["t250"]},loading:{"*":["t251"]},nav:{"":["t252"]},nav__genres:{"*":["t254","t253"]},nav__mixes:{"*":["t255"]},nav__genre:{"*":["t257","t256"]},nav__mix:{"*":["t258"]},nav__popup:{"*":["t259"]},"nav__popup-content":{"*":["t260"]},"nav__popup-item":{"*":["t261"]},notice:{"*":["t262"]},notify:{"*":["t263"]},overhead:{"*":["t264"]},overhead__layout:{"*":["t265"]},overhead__className:{"*":["t271","t269","t266"]},overhead__content:{"*":["t272","t270","t267"]},overhead__common:{"*":["t268"]},overlay:{"*":["t273"]},pager:{"*":["t274"]},"payment-gift":{"*":["t275"]},"payment-order":{"*":["t276"]},"payment-order__content":{"*":["t277"]},"page-order__payment-system":{"*":["t278"]},"payment-order__form":{"*":["t279"]},"payment-product":{"*":["t280"]},"player-controls":{"*":["t281"]},"player-controls__track":{"*":["t282"]},"player-controls__add":{"*":["t283"]},"playlist-cover":{"*":["t284"]},"playlist-cover__cover":{"*":["t286","t285"]},"playlist-cover__empty":{"*":["t287"]},"playlist-cover__note":{"*":["t289","t288"]},playlist_type_full:{"*":["t290"]},playlist:{"*":["t291"]},playlist__cover:{"*":["t292"]},playlist__play:{"*":["t293"]},playlist__title:{"*":["t294"]},playlist__info:{"*":["t295"]},"popup-holder":{"*":["t296"]},"player-progress":{"*":["t297"]},promo:{"*":["t298"]},promo__link:{"*":["t299"]},"radio-settings":{"*":["t300"]},"radio-settings__content":{"*":["t301"]},radio:{"*":["t302"]},"scrobble-control":{"*":["t303"]},"scrobble-control__connected":{"*":["t304"]},"scrobble-control__toggler":{"*":["t305"]},"scrobble-control__profile":{"*":["t306"]},"scrobble-control__disconnect":{"*":["t307"]},"search-nav":{"*":["t308"]},"search-nav__item":{"*":["t309"]},"search-nav__more":{"*":["t310"]},separator:{"*":["t311"]},"serp-snippet":{"*":["t312"]},"serp-snippet__item":{"*":["t313"]},share:{"*":["t314"]},"share__tooltip-text":{"*":["t315"]},share__title:{"*":["t327","t325","t323","t321","t319","t316"]},share__link:{"*":["t328","t326","t324","t322","t320","t317"]},share__title_unescaped:{"*":["t318"]},sidebar:{"*":["t329"]},smalladv:{"*":["t330"]},"snippet-album":{"*":["t331"]},"snippet-artist":{"*":["t332"]},"snippet-artist_best":{"*":["t333"]},"snippet-artist__head":{"*":["t334"]},"snippet-artist__tracks":{"*":["t335"]},"social-bind":{"*":["t336"]},spinner:{"*":["t337"]},stamp:{"*":["t338"]},subscribe:{"*":["t339"]},subscribe__button:{"*":["t340"]},"table-head":{"*":["t341"]},"table-head__content":{"*":["t342"]},table__head:{"*":["t343"]},"table__head_track-artist":{"*":["t344"]},"table__head_track-album":{"*":["t345"]},"table__head-item":{"*":["t346"]},tabs:{"*":["t347"]},tabs__tab:{"*":["t348"]},tabs__title:{"*":["t349"]},"text-expander":{"*":["t350"]},title:{"*":["t351"]},"toggler-control":{"*":["t352"]},tooltip:{"*":["t353"]},"top-pic":{"*":["t354"]},"top-pics":{"*":["t355"]},track_type_full:{"*":["t356"]},track_type_chart:{"*":["t357"]},track_type_query:{"*":["t358"]},track_type_social:{"*":["t359"]},track__user:{"*":["t360"]},"track__more-users":{"*":["t361"]},track_type_table:{"*":["t362"]},"track_type_table-album":{"*":["t363"]},track_type_player:{"*":["t364"]},track:{"*":["t365"]},"track_in-lib":{"*":["t366"]},track__num:{"*":["t367"]},"track__play-button":{"*":["t368"]},track__title:{"*":["t369"]},track__album:{"*":["t370"]},track__artists:{"*":["t371"]},track__artists_along:{"*":["t372"]},track__artists_newline:{"*":["t373"]},track__time:{"*":["t374"]},track__actions:{"*":["t375"]},track__cover:{"*":["t376"]},track__like:{"*":["t377"]},track__remove:{"*":["t378"]},"users-popup":{"*":["t379"]},"users-popup__header":{"*":["t380"]},"users-popup__content":{"*":["t381"]},"video-preview":{"*":["t382"]},video:{"*":["t383"]},volume:{"*":["t384"]},"page-404":{"":["t385"]},"page-404__genres":{"*":["t386"]},"page-500":{"":["t387"]},"page-500__genres":{"*":["t388"]},"page-album":{"":["t389"]},"page-album__popup":{"*":["t390"]},"page-album__duplicates":{"*":["t391"]},"page-search":{"":["t392"]},"page-search__misspell":{"*":["t393"]},"page-search__empty":{"*":["t394"]},"page-search__switch":{"*":["t395"]},"page-search__serp":{"*":["t396"]},search_serp_best:{"*":["t397"]},search_serp_results:{"*":["t398"]},search_serp_adv:{"*":["t399"]},"page-search__artists":{"*":["t400"]},"page-search__albums":{"*":["t401"]},"page-search__tracks":{"*":["t402"]},"page-search__tracks-item":{"*":["t403"]},"page-search__videos":{"*":["t404"]},"page-index":{"":["t405"]},"page-artist":{"":["t406"]},"page-artist__artist":{"*":["t407"]},"page-artist__tracks":{"*":["t408"]},"page-artist__albums":{"*":["t409"]},"page-artist__similar":{"*":["t410"]},"page-artist__links":{"*":["t411"]},"page-artist__link":{"*":["t412"]},"page-playlist":{"":["t413"]},"page-playlist__playlist":{"*":["t414"]},"page-playlist__user":{"*":["t415"]},"page-playlist__upload-pic":{"*":["t416"]},"page-playlist__cover-popup":{"*":["t417"]},"page-playlist__access-button":{"*":["t418"]},"page-playlist__access-icon":{"*":["t419"]},"page-playlist__access-text":{"*":["t420"]},"page-playlist__access-popup":{"*":["t421"]},"page-playlist__desc_editable":{"*":["t422"]},"page-top":{"":["t423"]},"page-top__tracks":{"*":["t424"]},"page-top__artists":{"*":["t425"]},"page-top__composers":{"*":["t426"]},"page-top__albums":{"*":["t427"]},"page-users":{"":["t428"]},"page-users__tracks":{"*":["t429"]},"page-users__playlists":{"*":["t430"]},"page-users__user":{"*":["t436","t431"]},page_user__albums:{"*":["t432"]},"page-users__artists":{"*":["t433"]},"page-users__history":{"*":["t434"]},"page-users__subscriptions":{"*":["t435"]},"page-users__new-playlist":{"*":["t437"]},"page-users__links":{"*":["t438"]},"page-users__link":{"*":["t439"]},"page-users__indirect-albums":{"*":["t440"]},"page-users__indirect-artists":{"*":["t441"]},"page-users__more":{"*":["t442"]},"page-payment":{"":["t444","t443"]},"page-payment__history":{"*":["t446","t445"]},"page-payment__account-status":{"*":["t447"]},"page-payment__account-status_pdd":{"*":["t448"]},"page-payment__buttons-bar":{"*":["t449"]},"page-settings":{"":["t451","t450"]},"page-settings__account":{"*":["t452"]},"page-settings__scrobble":{"*":["t453"]},"page-settings__subscribe":{"*":["t455","t454"]},"page-settings__social-item":{"*":["t456"]},"page-settings__social-control":{"*":["t457"]},"page-settings__subscription-status":{"*":["t458"]},"page-settings__subscription-status_pdd":{"*":["t459"]},"page-settings__subscription-bar":{"*":["t460"]},"page-settings__loader":{"*":["t461"]},"page-apps":{"":["t462"]},"page-apps__section_promo":{"*":["t463"]},"page-apps__bar":{"*":["t464"]},"page-apps__promo-item":{"*":["t465"]},"page-apps__phones":{"*":["t466"]},"page-apps__phone":{"*":["t467"]},"page-apps__phone-screen":{"*":["t468"]},"page-mix":{"":["t469"]},"page-disk":{"":["t471","t470"]},"sidebar-500":{"":["t472"]},"sidebar-album":{"":["t473"]},"sidebar-track":{"":["t474"]},"sidebar-artist":{"":["t475"]},"sidebar-playlist":{"":["t476"]},"sidebar-playlist__link":{"*":["t477"]},"sidebar-playlist__user":{"*":["t478"]},"sidebar-order-info":{"":["t479"]},"sidebar-order-info__error":{"*":["t480"]},"sidebar-order-info__success":{"*":["t481"]},"sidebar-order-info__payment-type":{"*":["t484","t483","t482"]},"sidebar-folder":{"":["t485"]},"sidebar-apps":{"":["t486"]},"sidebar-apps__store-item":{"*":["t487"]},"sidebar-apps__popup":{"*":["t488"]},"popup-sequence":{"":["t489"]},"popup-sequence__content":{"*":["t490"]},"popup-sequence__seq":{"*":["t491"]},"popup-sequence__history":{"*":["t492"]},"popup-sequence__header":{"*":["t493"]},"":{"":["t494"]}};
sy.imports=[];
yr.register("index",sy)
})();