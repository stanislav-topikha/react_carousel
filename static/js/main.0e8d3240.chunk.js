(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(t,e,i){},15:function(t,e,i){},17:function(t,e,i){"use strict";i.r(e);var s=i(9),n=i.n(s),a=i(2),r=i(8),h=i(3),c=i(4),l=i(6),u=i(5),o=i(1),p=i.n(o),f=(i(14),i(15),i(0)),m=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(){var t;Object(h.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={listShift:0,isPrevDisabled:!1,isNextDisabled:!1},t}return Object(c.a)(i,[{key:"componentDidMount",value:function(){this.buttonsSwitch()}},{key:"componentDidUpdate",value:function(){this.props.infinite?(this.state.isNextDisabled||this.state.isPrevDisabled)&&this.setState({isPrevDisabled:!1,isNextDisabled:!1}):this.buttonsSwitch()}},{key:"getShiftLimit",value:function(){return(this.props.images.length-this.props.frameSize)*this.props.itemWidth}},{key:"getStepShift",value:function(){return this.props.step*this.props.itemWidth}},{key:"nextBtnHandler",value:function(){var t=this.getShiftLimit();if(this.state.listShift<t){var e=this.getStepShift();return this.state.listShift+e>t&&(e=t-this.state.listShift),void this.setState((function(t){return{listShift:t.listShift+e}}))}this.props.infinite&&this.state.listShift===t&&this.setState({listShift:0})}},{key:"prevBtnHandler",value:function(){if(this.state.listShift>0){var t=this.getStepShift();return this.state.listShift-t<0&&(t=this.state.listShift),void this.setState((function(e){return{listShift:e.listShift-t}}))}this.props.infinite&&0===this.state.listShift&&this.setState({listShift:this.getShiftLimit()})}},{key:"buttonsSwitch",value:function(){if(this.state.isPrevDisabled&&this.state.listShift>0)this.setState({isPrevDisabled:!1});else if(this.state.listShift<=0&&!this.state.isPrevDisabled)this.setState({isPrevDisabled:!0});else{var t=this.getShiftLimit();this.state.listShift>=t&&!this.state.isNextDisabled?this.setState({isNextDisabled:!0}):this.state.isNextDisabled&&this.state.listShift<t&&this.setState({isNextDisabled:!1})}}},{key:"render",value:function(){var t=this,e={transition:"transform ".concat(this.props.animationDuration,"ms"),transform:"translateX(-".concat(this.state.listShift,"px)")},i={width:"".concat(this.props.itemWidth,"px")},s={width:"".concat(this.props.frameSize*this.props.itemWidth,"px")};return Object(f.jsxs)("div",{className:"Carousel",children:[Object(f.jsx)("button",{type:"button",className:"Carousel__button",onClick:function(){return t.prevBtnHandler()},disabled:this.state.isPrevDisabled,children:"\u2b05\ufe0f"}),Object(f.jsx)("div",{className:"Carousel__wrapper",style:s,children:Object(f.jsx)("ul",{className:"Carousel__list",style:e,children:this.props.images.map((function(t,e){return Object(f.jsx)("li",{children:Object(f.jsx)("img",{src:t,alt:String(e),style:i})},t)}))})}),Object(f.jsx)("button",{type:"button",className:"Carousel__button",onClick:function(){return t.nextBtnHandler()},disabled:this.state.isNextDisabled,"data-cy":"next",children:"\u27a1\ufe0f"})]})}}]),i}(p.a.Component),d=m,b=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(){var t;Object(h.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],userNumInputs:{step:3,frameSize:3,itemWidth:130,animationDuration:1e3},infinite:!1},t}return Object(c.a)(i,[{key:"numInputHandler",value:function(t,e){return this.setState((function(i){return{userNumInputs:Object(r.a)(Object(r.a)({},i.userNumInputs),{},Object(a.a)({},e,+t))}}))}},{key:"checkboxHandler",value:function(){return this.setState((function(t){return{infinite:!t.infinite}}))}},{key:"render",value:function(){var t=this,e=this.state,i=e.images,s=e.userNumInputs,n=e.infinite;function a(t){switch(t){case"itemWidth":return 10;case"animationDuration":return 100;default:return 1}}return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsxs)("h1",{className:"app__title","data-cy":"title",children:["Carousel with ",i.length," images"]}),Object(f.jsx)(d,{images:i,step:s.step,frameSize:s.frameSize,itemWidth:s.itemWidth,animationDuration:s.animationDuration,infinite:n}),Object(f.jsxs)("form",{className:"app__form",children:[Object.keys(s).map((function(e){return Object(f.jsxs)("label",{children:["".concat(e.split(/(?=[A-Z])/).join(" ").toUpperCase(),": "),Object(f.jsx)("input",{name:"key",type:"number",defaultValue:s[e],onChange:function(i){return t.numInputHandler(i.target.value,e)},min:0,step:a(e)})]},e)})),Object(f.jsxs)("label",{children:["Infinite",Object(f.jsx)("input",{name:"Infinite",type:"checkbox",onChange:function(){return t.checkboxHandler()}})]})]})]})}}]),i}(p.a.Component),S=b;n.a.render(Object(f.jsx)(S,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0e8d3240.chunk.js.map