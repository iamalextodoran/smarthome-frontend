(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){e.exports=a(70)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(23),a(1)),i=a(2),s=a(4),m=a(3),u=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("i",{onClick:this.props.onClick,className:this.props.icon,style:{fontSize:this.props.size+"px",color:this.props.color,padding:"5px",transition:"all .5s"}})}}]),a}(n.Component),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-row layout-align-center-center",style:{marginTop:"25px"}},r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement(u,{icon:"far fa-copyright"})),"TODD SOLUTIONS"))}}]),a}(n.Component),d=a(6),h=a(10),g=(a(13),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:(this.props.raised?"m_button ":"m_button_not_raised ")+this.props.type+" "+this.props.size},r.a.createElement(u,{icon:this.props.icon}),this.props.text)}}]),a}(n.Component)),E=(a(16),n.Component,a(35),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{className:"field",type:this.props.type,placeholder:this.props.placeholder,autoComplete:this.props.autoComplete}),r.a.createElement("i",{className:this.props.icon}),r.a.createElement("i",{className:"dot "+this.props.dot}))}}]),a}(n.Component)),y=(a(36),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={checked:e.props.checked},e.onChange=function(t){e.setState({checked:t.target.checked}),"function"===typeof e.props.onChange&&e.props.onChange(),e.props.getLightsToggle(e.state.checked)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("label",{className:"toggle-row"},r.a.createElement("div",{className:"toggle"},r.a.createElement("input",{className:"state",type:"checkbox",id:this.props.id,name:this.props.name,checked:this.props.checked,onChange:this.onChange}),r.a.createElement("div",{className:"indicator"})),r.a.createElement("div",{className:"text"},this.props.text)))}}]),a}(n.Component)),f=(a(37),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={checked:e.props.checked},e.handleChange=function(t){e.setState({checked:!e.state.checked}),"function"===typeof e.props.onChange&&e.props.onChange(),e.props.setMode(t.target.checked,t.target.innerHTML)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper",value:this.props.value,checked:this.props.checked,onClick:this.handleChange},r.a.createElement("input",{className:"state",type:"radio",id:this.props.value,name:this.props.value,value:this.props.value,checked:this.state.checked,onChange:this.handleChange}),r.a.createElement("label",{className:"label"},r.a.createElement("div",{className:"indicator",value:this.props.value}),r.a.createElement("span",{className:"text",value:this.props.value},this.props.value)))}}]),a}(n.Component)),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-row layout-align-end-end",style:{marginRight:"10px"}},r.a.createElement(d.c,{style:{color:"black"},activeStyle:{color:"coral"},to:"/login"},r.a.createElement(u,{icon:"fas fa-sign-out-alt",size:"23"})),r.a.createElement(d.c,{style:{color:"black"},activeStyle:{color:"coral"},to:"/settings"},r.a.createElement(u,{icon:"fas fa-cog",size:"23"})))}}]),a}(n.Component),b=(a(43),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-row layout-align-center-center",style:{marginLeft:"10px"}},r.a.createElement("div",{className:"profile"},r.a.createElement("img",{src:this.props.picture,alt:this.props.name})),r.a.createElement("h3",{style:{marginLeft:"15px"}},r.a.createElement("span",{style:{fontWeight:300}},"Hey"),", ",this.props.name))}}]),a}(n.Component)),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"big layout-row layout-align-end-end",style:{marginRight:"10px"}},r.a.createElement(d.c,{exact:!0,activeClassName:"m_button_not_raised primary",className:"m_button_not_raised",to:"/"},"Home"),r.a.createElement(d.c,{activeClassName:"m_button_not_raised primary",className:"m_button_not_raised",to:"/rooms"},"Rooms"),r.a.createElement(d.c,{activeClassName:"m_button_not_raised primary",className:"m_button_not_raised",to:"/devices"},"Devices")),r.a.createElement("div",{className:"small",style:{marginRight:"10px"}},r.a.createElement(d.c,{exact:!0,style:{color:"black"},activeStyle:{color:"coral"},to:"/"},r.a.createElement(u,{icon:"fas fa-home",size:"25"})),r.a.createElement(d.c,{style:{color:"black"},activeStyle:{color:"coral"},to:"/rooms"},r.a.createElement(u,{icon:"fas fa-square",size:"25"})),r.a.createElement(d.c,{style:{color:"black"},activeStyle:{color:"coral"},to:"/devices"},r.a.createElement(u,{icon:"fas fa-toolbox",size:"25"}))))}}]),a}(n.Component),j=(a(14),a(44),a(46),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={weather:"",bit:"",querryCity:"Baia-Mare"},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.weatherbit.io/v2.0/current?city=".concat(this.state.querryCity,"&key=d50c57c063ec458dab88e7a1c530219c")).then((function(e){return e.json()})).then((function(t){return e.setState({bit:t.data[0],weather:t.data[0].weather})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"mini-card"},r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("h4",null,this.state.bit.city_name),r.a.createElement("p",{style:{marginTop:"-25px"}},this.state.bit.country_code)),r.a.createElement("div",{className:"layout-row layout-align-space-between-center",style:{marginTop:"-70px"}},r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("img",{src:"https://www.weatherbit.io/static/img/icons/"+this.state.weather.icon+".png",alt:this.state.weather.description,width:"80px"}),r.a.createElement("p",{style:{marginTop:"-25px"}},this.state.weather.description)),r.a.createElement("div",null),r.a.createElement("div",{className:"layout-column layout-align-end-end"},r.a.createElement("h4",{style:{justifyContent:"end"}},r.a.createElement("strong",null,this.state.bit.temp," \xb0C")),r.a.createElement("p",{style:{marginTop:"-25px"}},"Feels like ",this.state.bit.app_temp," \xb0C"))))}}]),a}(n.Component)),O=(a(49),a(28)),x=new(a.n(O).a),N=function(e,t){x.emit("notify",e,t)},k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onShow=function(e,t){n.timeout?(clearTimeout(n.timeout),n.setState({visible:""},(function(){n.timeout=setTimeout((function(){n.showToast(e,t)}),300)}))):(n.setState({message:e,color:t}),n.showToast(e,t))},n.showToast=function(e,t){n.setState({visible:"show"},(function(){n.timeout=setTimeout((function(){n.setState({visible:""})}),3e3)}))},n.timeout=null,n.state={message:"Default toast",color:"accent",visible:""},x.on("notify",(function(e,t){n.onShow(e,t)})),n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"toast",className:"toast "+this.state.visible+" "+this.state.color},r.a.createElement("div",{id:"frame",className:"frame"},this.state.message)))}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isAnyLightOn:!0,lightsOn:21,totalLights:30},e.getLightsToggle=function(t){e.setState({isAnyLightOn:!t}),t?(e.setState({lightsOn:0}),N("Turned off all","primary")):e.setState({lightsOn:e.state.totalLights})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mini-card"},r.a.createElement(k,null),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement(u,{icon:"fas fa-lightbulb",size:"40",color:0===this.state.lightsOn?"grey":"gold"}),r.a.createElement("div",{className:"layout-column layout-align-end-end"},r.a.createElement("h4",{style:{paddingLeft:"5px"}},"Lights"),r.a.createElement("p",{style:{marginLeft:"0px",marginTop:"-25px"}},this.state.lightsOn," out of ",this.state.totalLights)),r.a.createElement(y,{id:"1",name:"lights",getLightsToggle:this.getLightsToggle,checked:!!this.state.isAnyLightOn})))}}]),a}(n.Component),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={setTemperature:22,actualTemperature:24,selectedMode:"Eco",setTemperatureEco:16,setTemperatureDay:19,setTemperatureNight:22},e.setMode=function(t,a){var n;t?e.setState({selectedMode:e.state.selectedMode}):e.setState({selectedMode:a}),"Eco"===a?n=e.state.setTemperatureEco:"Day"===a?n=e.state.setTemperatureDay:"Night"===a&&(n=e.state.setTemperatureNight),e.setState({setTemperature:n})},e.setColor=function(){return"Day"===e.state.selectedMode?"deeppink":"Night"===e.state.selectedMode?"crimson":"deepskyblue"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mini-card"},r.a.createElement("div",{className:"layout-row layout-align-center-center"},r.a.createElement(u,{icon:"Eco"===this.state.selectedMode?"fas fa-thermometer-empty":"fas fa-thermometer-half",size:"40",color:this.setColor()}),r.a.createElement("div",{className:"layout-column layout-align-end-end"},r.a.createElement("h4",null,r.a.createElement("strong",null,this.state.actualTemperature,"  \xb0C")),r.a.createElement("p",{style:{marginTop:"-25px"}},"set ",this.state.setTemperature," \xb0C"))),r.a.createElement("div",{className:"layout-row layout-align-space-between-center",style:{marginTop:"-20px"}},r.a.createElement(f,{checked:"Day"===this.state.selectedMode,value:"Day",setMode:this.setMode}),r.a.createElement(f,{checked:"Eco"===this.state.selectedMode,value:"Eco",setMode:this.setMode}),r.a.createElement(f,{checked:"Night"===this.state.selectedMode,value:"Night",setMode:this.setMode})))}}]),a}(n.Component),S=(a(68),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:e.props.value||30},e.handleChange=function(t){e.setState({value:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("p",{style:{margin:"-15px"}},this.props.description),r.a.createElement("div",{className:"slider-container layout-row layout-align-space-between-center"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{className:"slider-bar shadow",style:{}}),r.a.createElement("div",{className:"slider-bar",style:{width:this.state.value+"%",background:this.props.color}}),r.a.createElement("input",{className:"slider",type:"range",step:this.props.step,min:this.props.min,max:this.props.max,onChange:this.handleChange,value:this.state.value,style:{position:"relative"}})),r.a.createElement("p",{className:"slider-value"},this.state.value,"%")))}}]),a}(n.Component)),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={playing:!1,artistList:["MGK","G-Eazy","Eminem","Sandu Ciorba","Florin Salam"],songList:["Smoke and drive","Moana","Lose yourself","Aragaz cu butelie","Toate pozele cu tine"],songIndex:0,volume:69},e.prevSong=function(){0!==e.state.songIndex&&e.setState({songIndex:e.state.songIndex-1})},e.playSong=function(){e.setState({playing:!e.state.playing})},e.nextSong=function(){e.state.songIndex!==e.state.songList.length-1&&e.setState({songIndex:e.state.songIndex+1})},e.handleVolume=function(t){e.setState({volume:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mini-card"},r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("p",null,this.state.artistList[this.state.songIndex]," - ",this.state.songList[this.state.songIndex]),r.a.createElement("div",{className:"layout-row layout-align-center-center"},r.a.createElement(u,{icon:"fas fa-step-backward",size:"40",onClick:this.prevSong}),r.a.createElement(u,{icon:this.state.playing?"fas fa-play":"fas fa-pause",size:"40",onClick:this.playSong}),r.a.createElement(u,{icon:"fas fa-step-forward",size:"40",onClick:this.nextSong})),r.a.createElement("br",null),r.a.createElement(u,{icon:"fas fa-volume-up"}),r.a.createElement("br",null)),r.a.createElement(S,{value:this.state.volume,onChange:this.handleVolume}))}}]),a}(n.Component),A=(n.Component,function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={rooms:[{description:"This is a room, one of a kind, unique 1",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg",id:1,name:"Big room"},{description:"This is a room, one of a kind, unique 2",img:"https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg",id:2,name:"Small room"},{description:"This is a room, one of a kind, unique 3",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg",id:3,name:"Living room"},{description:"This is a room, one of a kind, unique 4",img:"https://lh3.googleusercontent.com/proxy/chQib78KIC5yUX-NUfcccw9WM5G6FbNT7tywiB96rsL2KKohQHqUIO5WKCSjCkhuK5fjiAKwqaSxeAxrbU5eJ-gxAqx3s5GA4fFvN1X5JZnxWTiIFrBLFonj4ZWgsxVB9CoZ2NT8WhmQyQm4__14S0HSAzSa_wkB61tz7y9r_jF2WQhlpipkES9_l3Q9i4iP",id:4,name:"Guest room"}]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout-row layout-align-space-between-start flex-wrap"},this.state.rooms.map((function(e){return r.a.createElement("div",{key:e.id,className:"card flex-33",style:{minHeight:"415px"}},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement("div",{className:"layout-column layout-align-none-center flex-60"},r.a.createElement("img",{src:e.img,style:{borderRadius:"20px"},width:"80%"})),r.a.createElement("div",{className:"layout-column layout-align-start-start flex-30"},r.a.createElement("p",{style:{marginBottom:"-15px"}},"Lights on : 3"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Temperature: 20 C"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Windws open"),r.a.createElement("p",null,"Blinds open")))),r.a.createElement("div",{className:"interactions"},r.a.createElement(g,{raised:"true",size:"medium",type:"accent",text:"Get me there"})))}),[this.state.rooms])))}}]),a}(n.Component)),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={rooms:[{description:"This is a room, one of a kind, unique 1",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg",id:1,name:"Big room"},{description:"This is a room, one of a kind, unique 2",img:"https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg",id:2,name:"Small room"},{description:"This is a room, one of a kind, unique 3",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg",id:3,name:"Living room"},{description:"This is a room, one of a kind, unique 4",img:"https://lh3.googleusercontent.com/proxy/chQib78KIC5yUX-NUfcccw9WM5G6FbNT7tywiB96rsL2KKohQHqUIO5WKCSjCkhuK5fjiAKwqaSxeAxrbU5eJ-gxAqx3s5GA4fFvN1X5JZnxWTiIFrBLFonj4ZWgsxVB9CoZ2NT8WhmQyQm4__14S0HSAzSa_wkB61tz7y9r_jF2WQhlpipkES9_l3Q9i4iP",id:4,name:"Guest room"}]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout-row layout-align-space-between-start flex-wrap"},this.state.rooms.map((function(e){return r.a.createElement("div",{key:e.id,className:"card flex-50"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"layout-row layout-align-space-between-start"},r.a.createElement("h3",null,e.name),r.a.createElement(u,{icon:"fas fa-edit"})),r.a.createElement("p",null,e.description),r.a.createElement("img",{src:e.img,style:{borderRadius:"20px"},width:"80%"}),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Lights on : 3"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Temperature: 20 C"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Windws open"),r.a.createElement("p",null,"Blinds open")),r.a.createElement("div",{className:"interactions"},r.a.createElement(g,{raised:"true",size:"medium",type:"accent",text:"Get me there"})))}),[this.state.rooms])))}}]),a}(n.Component),_=a(29),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={lights:[{id:3,name:"Light 1",roomId:1,value:80,warm:30},{id:4,name:"Light 2",roomId:1,value:80,warm:30},{id:5,name:"Light 3",roomId:1,value:80,warm:30},{id:6,name:"Light 4",roomId:1,value:80,warm:30},{id:16,name:"Light 1",roomId:2,value:30,warm:10},{id:26,name:"Light 2",roomId:2,value:30,warm:20},{id:56,name:"Light 3",roomId:2,value:30,warm:60},{id:36,name:"Light 1",roomId:3,value:30,warm:60}]},e.handleLights=function(){e.state.lights.map((function(e){return e.value=0}))},e.eachUniqueRoom=function(){Object(_.a)(new Set(e.state.lights.map((function(e){return e.roomId}))));e.state.lights.map((function(e){return 1!==e.roomId&&console.log("adevarat")}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("h3",null,"Lights"),r.a.createElement("button",{className:"m_button accent",onClick:this.handleLights},r.a.createElement(u,{icon:"fas fa-power-off"}),"All lights warm")),r.a.createElement("div",{className:"layout-row layout-align-space-between-start flex-wrap"},this.state.lights.map((function(e){return r.a.createElement("div",{key:e.id,style:{minWidth:"200px",flex:"50%"}},r.a.createElement("p",null,e.name),r.a.createElement(S,{description:"brightness",step:"10",value:e.value,color:"orange"}),r.a.createElement(S,{description:"warmth",step:"10",value:e.warm,color:"hotpink"}))})))))}}]),a}(n.Component),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={blinds:[{id:3,name:"Blinds",roomId:1,value:0,warm:30},{id:16,name:"Blinds",roomId:2,value:0,warm:10},{id:26,name:"Blinds",roomId:3,value:100,warm:60}]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Blinds"),r.a.createElement("button",{className:"m_button accent"},r.a.createElement(u,{icon:"fas fa-times"}),"Close all blinds"),r.a.createElement("div",{className:""},this.state.blinds.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",{style:{color:"coral"}},"In room ",e.roomId),0===e.value?r.a.createElement("p",null,"Blinds closed"):r.a.createElement("p",null,"Blinds open"))})))))}}]),a}(n.Component),z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={windows:[{id:2,name:"Windows",roomId:1,value:0,warm:null},{id:15,name:"Windows",roomId:2,value:0,warm:null},{id:23,name:"Windows",roomId:3,value:100,warm:null}]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Windows"),r.a.createElement("button",{className:"m_button accent"},r.a.createElement(u,{icon:"fas fa-times"}),"Close all windows"),r.a.createElement("div",{className:""},this.state.windows.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",{style:{color:"coral"}},"In room ",e.roomId),0===e.value?r.a.createElement("p",null,"Windows closed"):r.a.createElement("p",null,"Windows open"))})))))}}]),a}(n.Component),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={temperatures:[{id:3,name:"Temperature",roomId:1,value:21,warm:null},{id:16,name:"Temperature",roomId:2,value:22,warm:null},{id:26,name:"Temperature",roomId:3,value:19,warm:null}]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Temperatures"),r.a.createElement("div",{className:""},this.state.temperatures.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",{style:{color:"coral"}},"In room ",e.roomId),r.a.createElement("p",null,"Temperature is ",e.value," \xb0C"))})))))}}]),a}(n.Component),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(M,null),r.a.createElement(z,null),r.a.createElement(W,null))}}]),a}(n.Component),q=(a(69),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"big-card",style:{borderSize:"border-box",paddingRight:"110px"}},r.a.createElement("h3",null,"Settings"),r.a.createElement("p",null,"Profile picture"),r.a.createElement("p",null,"Main color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"),r.a.createElement("p",null,"Accent color"))}}]),a}(n.Component)),Q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("h3",null,"Register page"),r.a.createElement("div",{className:"card",style:{width:"21em",paddingBottom:"50px"}},r.a.createElement("p",{style:{paddingLeft:"40px",marginBottom:"-10px",paddingTop:"30px"}},"Enter your data"),r.a.createElement("div",{className:"content layout-column layout-align-start-center"},r.a.createElement(E,{type:"text",dot:"hidden",placeholder:"Name"}),r.a.createElement(E,{type:"text",dot:"hidden",placeholder:"Last name"}),r.a.createElement(E,{type:"text",dot:"hidden",placeholder:"Email"}),r.a.createElement(E,{type:"password",dot:"hidden",placeholder:"Password"}),r.a.createElement(E,{type:"password",dot:"hidden",placeholder:"Enter password again"}),r.a.createElement(g,{raised:"true",text:"Press to register",type:"primary",icon:"fas fa-fingerprint"}))))}}]),a}(n.Component),K=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-column layout-align-center-center",style:{height:"70vh"}},r.a.createElement("h3",null,"Log in page"),r.a.createElement("div",{className:"card",style:{width:"21em"}},r.a.createElement("p",{style:{paddingLeft:"40px",marginBottom:"-10px",paddingTop:"30px"}},"Enter your credentials"),r.a.createElement("div",{className:"content layout-column layout-align-start-center"},r.a.createElement(E,{type:"text",dot:"success",placeholder:"Username"}),r.a.createElement(E,{type:"password",dot:"danger",placeholder:"Password"}),r.a.createElement(g,{raised:"true",text:"Log in brotha",type:"accent",icon:"fas fa-fingerprint"})),r.a.createElement("p",{style:{paddingLeft:"175px",marginTop:"-2px"}},"New? ",r.a.createElement(d.b,{to:"/register"},"Register here"))))}}]),a}(n.Component),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement(b,{name:"Alex",picture:"https://source.unsplash.com/ToqoQSH-WYQ/500x500"}),r.a.createElement(w,null)))}}]),a}(n.Component),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-column layout-align-start-end flex-30",style:{paddingLeft:"10px"}},r.a.createElement(j,null),r.a.createElement(C,null),r.a.createElement(T,null),r.a.createElement(L,null))}}]),a}(n.Component);var G=function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(h.a,{path:"/register",component:Q}),r.a.createElement(h.a,{path:"/login",component:K}),r.a.createElement(h.a,{path:"/settings",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement("div",{className:"layout-column layout-align-start-center"},r.a.createElement(q,null)))}}),r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement("div",{className:"layout-row layout-xs-column"},r.a.createElement(U,null),r.a.createElement("div",{className:"layout-row layout-align-end-start flex-wrap flex-70"},r.a.createElement(A,null))))}}),r.a.createElement(h.a,{path:"/rooms",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement("div",{className:"layout-row layout-xs-column"},r.a.createElement(U,null),r.a.createElement("div",{className:"layout-row layout-align-end-start flex-wrap flex-70"},r.a.createElement(I,null))))}}),r.a.createElement(h.a,{path:"/devices",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement("div",{className:"layout-row layout-xs-column"},r.a.createElement(U,null),r.a.createElement("div",{className:"layout-row layout-align-end-start flex-wrap flex-70"},r.a.createElement(F,null))))}}),r.a.createElement(p,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.29c67ffb.chunk.js.map