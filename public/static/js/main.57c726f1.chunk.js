(this["webpackJsonpbonappeteat-client"]=this["webpackJsonpbonappeteat-client"]||[]).push([[0],{36:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(30),i=n.n(c),s=(n(36),n(16)),o=n(2),l=n(3),u=n(5),h=n(4),j=n(6),d=n(8),p=n.n(d),g="https://bonappeteat.herokuapp.com",b=n(13),f=n.p+"static/media/logo-bonAppeteat.0b754076.png",O=n(0),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.loggedInUser,n=e.onLogOut;return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsxs)("a",{href:"/",children:[Object(O.jsx)("img",{alt:"logo bonappeteat",src:f}),Object(O.jsx)("p",{children:"BonAppeteat"})]}),t?Object(O.jsxs)("nav",{children:[Object(O.jsx)(b.b,{to:"/profile",children:"Profile"})," ",Object(O.jsx)(b.b,{to:"/",onClick:n,children:"Log OUT"})]}):Object(O.jsx)("nav",{children:Object(O.jsx)("a",{href:"#form",children:"Account"})})]})}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onSign;return Object(O.jsx)(r.a.Fragment,{children:Object(O.jsxs)("form",{id:"form",onSubmit:e,children:[Object(O.jsx)("label",{children:"Email address"}),Object(O.jsx)("input",{type:"email",name:"email"}),Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{name:"password",type:"password"}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]})})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onSign;return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)("h1",{children:"Bon Appeteat"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(O.jsx)(x,{onSign:e})]})}}]),n}(a.Component),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("input",{onChange:this.props.change,type:"text",placeholder:"Enter the name"})})}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={restaurants:[],filterRestaurant:[]},e.handleSearch=function(t){var n=t.target.value.toLowerCase();console.log(e.state.filterRestaurant);var a=e.state.restaurants.filter((function(e){return e.name.toLowerCase().includes(n)})),r=[];e.state.filterRestaurant.forEach((function(e){a.forEach((function(t){e.name==t.name&&r.push(t)}))})),console.log(r),e.setState({filterRestaurant:a})},e.handleFilter=function(t){var n=t.target.value;if("all"==n)e.setState({filterRestaurant:e.state.restaurants});else{var a=e.state.restaurants.filter((function(e){return e.category.includes(n)}));e.setState({filterRestaurant:a})}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("".concat(g,"/api/restaurants")).then((function(t){console.log("data fetched"),e.setState({restaurants:t.data,filterRestaurant:t.data})})).catch((function(){console.log("Error grabing restaurants")}))}},{key:"render",value:function(){var e=this.state,t=e.restaurants,n=e.filterRestaurant;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"All the restaurants"}),Object(O.jsxs)("select",{onChange:this.handleFilter,children:[Object(O.jsx)("option",{value:"all",children:"All"},t._id),t.map((function(e,t){return Object(O.jsx)("option",{value:e.category,children:e.category},t)}))]}),Object(O.jsx)(y,{change:this.handleSearch}),n.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[" ",e.category]}),Object(O.jsx)("img",{src:e.images[0]}),Object(O.jsx)(b.b,{to:"/restaurant/".concat(e._id),children:e.name},t),Object(O.jsxs)("div",{children:[" ",e.location]})]})}))]})}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.onSign;return Object(O.jsx)(r.a.Fragment,{children:t?Object(O.jsx)(C,{}):Object(O.jsx)(v,{onSign:n})})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={restaurant:{},bookings:[]},e.handleCreateBooking=function(t){t.preventDefault();var n=e.props.match.params.restaurantId;p.a.post("".concat(g,"/api/").concat(n,"/create"),{dateTime:t.target.dateTime.value,pax:t.target.pax.value},{withCredentials:!0}).then((function(t){e.setState({bookings:[t.data]},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Bookings creation failed",e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.restaurantId;p.a.get("".concat(g,"/api/restaurant/").concat(t)).then((function(t){e.setState({restaurant:t.data})})).catch((function(){console.log("error getting restaurant details")}))}},{key:"render",value:function(){var e=this.state.restaurant;return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)("h1",{children:e.name}),Object(O.jsx)("div",{children:e.description}),e.images?e.images.map((function(e,t){return Object(O.jsx)("img",{src:e,alt:"restaurant image"},t)})):Object(O.jsx)("div",{}),Object(O.jsxs)("form",{onSubmit:this.handleCreateBooking,children:[Object(O.jsx)("label",{children:"Choose the day and time:"}),Object(O.jsx)("input",{name:"dateTime",type:"datetime-local",step:"1800"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"Pax:"}),Object(O.jsx)("input",{name:"pax",type:"number",placeholder:"pax",min:"0",max:"10"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:"Create booking"})]})]})}}]),n}(a.Component),S=Object(j.f)(w),I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loggedInUser:e.props.loggedInUser,password:""},e.handlePasswordChange=function(t){t.preventDefault();var n=t.target.value;e.setState({password:n})},e.handleImageChange=function(t){t.preventDefault();var n=t.target.image.files[0];console.log(n);var a=new FormData;a.append("image",n),console.log(a),p.a.post("".concat(g,"/api/uploadprofile"),a,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.changeImg(t.data)}))})).catch((function(e){console.log("Failing uploading img profile")}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.changeUser,n=e.deleteUser,a=this.state.loggedInUser;return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)("img",{src:a.image}),Object(O.jsx)("button",{children:"Edit your profile details"}),Object(O.jsxs)("form",{onSubmit:this.handleImageChange,encType:"multipart/form-data",children:[Object(O.jsx)("input",{type:"file",name:"image",accept:"image/png, image/jpg"}),Object(O.jsx)("button",{children:"Submit"})]}),Object(O.jsxs)("form",{onSubmit:t,children:[Object(O.jsx)("label",{children:"Email:"}),Object(O.jsx)("input",{name:"email",type:"email",defaultValue:a.email}),Object(O.jsx)("label",{children:"Password:"}),Object(O.jsx)("input",{onChange:this.handlePasswordChange,name:"password",type:"password",placeholder:"****",value:this.state.password}),Object(O.jsx)("button",{type:"submit",children:"Apply changes"})]}),Object(O.jsx)("button",{children:"Your bookings"}),Object(O.jsx)("button",{onClick:n,children:"Delete Account"})]})}}]),n}(a.Component),U=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).changeDate=function(e){return e.replace("T"," ").slice(0,16)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.bookings;return Object(O.jsx)(r.a.Fragment,{children:t.map((function(t,n){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h4",{children:["Restaurant:",t.restaurant.name]}),Object(O.jsxs)("h4",{children:["Date:",e.changeDate(t.dateTime)]}),Object(O.jsxs)("h4",{children:["People:",t.pax]})]},n)}))})}}]),n}(a.Component),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.loggedInUser,n=e.bookings,a=e.changeUser,c=e.deleteUser,i=e.changeImg;return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(I,Object(s.a)({changeImg:i,loggedInUser:t,changeUser:a,deleteUser:c},this.props)),Object(O.jsx)(U,{bookings:n})]})}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loggedInUser:null,bookings:[],fetching:!0},e.handleSign=function(t){t.preventDefault();var n={email:t.target.email.value,password:t.target.password.value};p.a.post("".concat(g,"/api/user/log"),n,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Error signing")}))},e.handleLogOut=function(){p.a.post("".concat(g,"/api/logout"),{},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:null})})).catch((function(e){console.log("Failing loging out")}))},e.handleChange=function(t){t.preventDefault();var n={email:t.target.email.value,password:t.target.password.value};console.log(n),p.a.patch("".concat(g,"/api/user"),n,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/profile")}))})).catch((function(e){console.log("Error changing profile details")}))},e.handleImgProfile=function(t){e.setState({loggedInUser:t})},e.handleDelete=function(){p.a.delete("".concat(g,"/api/user"),{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))})).catch((function(){console.log("Failed deleting user profile")}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.state.loggedInUser||p.a.get("".concat(g,"/api/user"),{withCredentials:!0}).then((function(t){p.a.get("".concat(g,"/api/bookings"),{withCredentials:!0}).then((function(n){e.setState({loggedInUser:t.data,bookings:n.data,fetching:!1})})).catch((function(e){console.log(e)}))})).catch((function(){console.log("Error grabing data from user session"),e.setState({fetching:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.loggedInUser,a=t.bookings;return t.fetching?Object(O.jsx)("p",{children:"Loading"}):Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(m,{loggedInUser:n,onLogOut:this.handleLogOut}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(k,{onSign:e.handleSign,user:n})}}),Object(O.jsx)(j.a,{path:"/profile",render:function(t){return Object(O.jsx)(D,Object(s.a)({changeImg:e.handleImgProfile,loggedInUser:n,bookings:a,changeUser:e.handleChange,deleteUser:e.handleDelete},t))}}),Object(O.jsx)(j.a,{path:"/restaurant/:restaurantId",render:function(e){return Object(O.jsx)(S,Object(s.a)({user:n},e))}})]})]})}}]),n}(a.Component),A=Object(j.f)(F);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(A,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.57c726f1.chunk.js.map