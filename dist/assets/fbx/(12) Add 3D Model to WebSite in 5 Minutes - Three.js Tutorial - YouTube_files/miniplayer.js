(function(g){var window=this;'use strict';var p6=function(a){g.V.call(this,{D:"div",L:"ytp-miniplayer-ui"});this.cg=!1;this.player=a;this.N(a,"minimized",this.jg);this.N(a,"onStateChange",this.pD)},q6=function(a){g.zN.call(this,a);
this.i=new p6(this.player);this.i.hide();g.oN(this.player,this.i.element,4);a.Ce()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(p6,g.V);g.k=p6.prototype;
g.k.HB=function(){this.tooltip=new g.ZQ(this.player,this);g.F(this,this.tooltip);g.oN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.jc=new g.uO(this.player);g.F(this,this.jc);this.Ag=new g.V({D:"div",L:"ytp-miniplayer-scrim"});g.F(this,this.Ag);this.Ag.ya(this.element);this.N(this.Ag.element,"click",this.Ex);var a=new g.V({D:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},S:[g.DL()]});g.F(this,a);a.ya(this.Ag.element);this.N(a.element,"click",this.Yh);
a=new g.R1(this.player,this);g.F(this,a);a.ya(this.Ag.element);this.xo=new g.V({D:"div",L:"ytp-miniplayer-controls"});g.F(this,this.xo);this.xo.ya(this.Ag.element);this.N(this.xo.element,"click",this.Ex);var b=new g.V({D:"div",L:"ytp-miniplayer-button-container"});g.F(this,b);b.ya(this.xo.element);a=new g.V({D:"div",L:"ytp-miniplayer-play-button-container"});g.F(this,a);a.ya(this.xo.element);var c=new g.V({D:"div",L:"ytp-miniplayer-button-container"});g.F(this,c);c.ya(this.xo.element);this.FJ=new g.WP(this.player,
this,!1);g.F(this,this.FJ);this.FJ.ya(b.element);b=new g.NP(this.player,this);g.F(this,b);b.ya(a.element);this.nextButton=new g.WP(this.player,this,!0);g.F(this,this.nextButton);this.nextButton.ya(c.element);this.Cg=new g.MQ(this.player,this);g.F(this,this.Cg);this.Cg.ya(this.Ag.element);this.Ec=new g.aQ(this.player,this);g.F(this,this.Ec);g.oN(this.player,this.Ec.element,4);this.ox=new g.V({D:"div",L:"ytp-miniplayer-buttons"});g.F(this,this.ox);g.oN(this.player,this.ox.element,4);a=new g.V({D:"button",
Ca:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},S:[g.DL()]});g.F(this,a);a.ya(this.ox.element);this.N(a.element,"click",this.Yh);a=new g.V({D:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],V:{"aria-label":"Close"},S:[g.IL()]});g.F(this,a);a.ya(this.ox.element);this.N(a.element,"click",this.wS);this.N(this.player,"presentingplayerstatechange",this.Dc);this.N(this.player,"appresize",this.tb);this.N(this.player,"fullscreentoggled",this.tb);this.tb()};
g.k.show=function(){this.td=new g.Cq(this.gp,null,this);this.td.start();this.cg||(this.HB(),this.cg=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ec.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.td&&(this.td.dispose(),this.td=void 0);g.V.prototype.hide.call(this);this.player.Ce()||(this.cg&&this.Ec.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.td&&(this.td.dispose(),this.td=void 0);g.V.prototype.ra.call(this)};
g.k.Yh=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.wS=function(){this.player.playVideo()};
g.k.Ex=function(a){if(a.target===this.Ag.element||a.target===this.xo.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.HK(this.player.sb())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.k.jg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Ce())};
g.k.Yc=function(){this.Ec.Rb();this.Cg.Rb()};
g.k.gp=function(){this.Yc();this.td&&this.td.start()};
g.k.Dc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.tb=function(){g.lQ(this.Ec,0,this.player.Za().getPlayerSize().width,!1);g.cQ(this.Ec)};
g.k.pD=function(a){this.player.Ce()&&(0===a?this.hide():this.show())};
g.k.ac=function(){return this.tooltip};
g.k.Ae=function(){return!1};
g.k.Ye=function(){return!1};
g.k.Th=function(){return!1};
g.k.ey=function(){};
g.k.tm=function(){};
g.k.xq=function(){};
g.k.Hm=function(){return null};
g.k.Pi=function(){return new g.ql(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.pp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Pl(a);if(b){c=g.Oq(b,"ytp-prev-button")||g.Oq(b,"ytp-next-button");var m=g.Oq(b,"ytp-play-button"),n=g.Oq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Nl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Oq(b,"ytp-miniplayer-button-top-left"),f=g.Nl(b,this.element),b=g.Pl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Za().getPlayerSize().width;e=f+(e||0);l=g.Kf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.zk=function(){};
g.k.Sj=function(){return!1};g.v(q6,g.zN);q6.prototype.create=function(){};
q6.prototype.ri=function(){return!1};
q6.prototype.load=function(){this.player.hideControls();this.i.show()};
q6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.KN.miniplayer=q6;})(_yt_player);
