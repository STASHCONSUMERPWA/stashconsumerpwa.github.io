webpackJsonp([1],{"5wlR":function(t,e){},"9U6r":function(t,e){},Brm5:function(t,e){},DNC2:function(t,e){},DXZv:function(t,e){},FBBS:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("ydGU");Object(r.a)(Object({NODE_ENV:"production"}).BASE_URL+"service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var n=a("IZMb"),o=a.n(n),i=a("1mcD"),c=a.n(i),l=a("It2I"),u=a.n(l),d=(a("3VHS"),a("Dd8w")),v=a.n(d),m=a("NYxO"),p={name:"GeneralHeader",computed:v()({},Object(m.b)(["isAuthenticated","currentCart"]))},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("\n      STASH\n    ")]),t._v(" "),t.isAuthenticated?a("ul",{staticClass:"nav navbar-nav pull-xs-right"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"wallet"}}},[a("i",{staticClass:"ion-cash"}),t._v("  "),a("b",[t._v("SGD 20")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"inbox"}}},[a("b",[a("i",{staticClass:"ion-ios-email-outline"})])])],1),t._v(" "),t.currentCart.items.length>=1?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"cart"}}},[a("b",{staticClass:"currentCart"},[a("i",{staticClass:"ion-android-cart"})])])],1):t._e()]):t._e()],1)])},staticRenderFns:[]};var _={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("footer",[e("div",{staticClass:"container"},[e("router-link",{staticClass:"logo-font",attrs:{to:{name:"home",params:{}}}},[this._v("\n        STASH\n      ")]),this._v(" "),e("span",{staticClass:"attribution"},[this._v("\n        A project made by customer for you\n      ")])],1)])])},staticRenderFns:[]},f={name:"App",components:{GeneralHeader:a("VU/8")(p,h,!1,function(t){a("qm0y")},"data-v-644cfe13",null).exports,GeneralFooter:a("VU/8")({name:"GeneralFooter"},_,!1,null,null,null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("GeneralHeader"),this._v(" "),e("div",{staticClass:"container_"},[e("router-view")],1),this._v(" "),e("GeneralFooter")],1)},staticRenderFns:[]};var C,b,w,x=a("VU/8")(f,g,!1,function(t){a("5wlR")},"data-v-698ab0b8",null).exports,y=a("//Fk"),S=a.n(y),U=a("/ocq"),E=a("bOdI"),T=a.n(E),A=a("mtWM"),R=a.n(A),M=a("Rf8U"),F=a.n(M),k=function(){return window.localStorage.getItem("id_token")},N=function(t){window.localStorage.setItem("id_token",t)},D=function(){window.localStorage.removeItem("id_token")},G="https://conduit.productionready.io/api",I={init:function(){s.a.use(F.a,R.a),s.a.axios.defaults.baseURL=G},setHeader:function(){s.a.axios.defaults.headers.common.Authorization="Token "+k()},query:function(t,e){return s.a.axios.get(t,e).catch(function(t){throw new Error("[STASH] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s.a.axios.get(t+"/"+e).catch(function(t){throw new Error("[STASH] ApiService "+t)})},post:function(t,e){return s.a.axios.post(""+t,e)},update:function(t,e,a){return s.a.axios.put(t+"/"+e,a)},put:function(t,e){return s.a.axios.put(""+t,e)},delete:function(t){return s.a.axios.delete(t).catch(function(t){throw new Error("[STASH] ApiService "+t)})}},H="auth/SET_AUTH",$={state:{errors:null,user:{},isAuthenticated:!!k()},actions:(C={},T()(C,"auth/LOGIN",function(t,e){return new S.a(function(a){I.post("users/login",{user:e}).then(function(e){var s=e.data;t.commit(H,s.user),a(s)}).catch(function(e){var a=e.response;t.commit("setError",a.data.errors)})})}),T()(C,"auth/LOGOUT",function(t){t.commit("auth/PURGE_AUTH")}),T()(C,"auth/REGISTER",function(t,e){return new S.a(function(a,s){I.post("users",{user:e}).then(function(e){var s=e.data;t.commit(H,s.user),a(s)}).catch(function(e){var a=e.response;t.commit("setError",a.data.errors),s(a)})})}),T()(C,"auth/CHECK_AUTH",function(t){if(!k())return t.commit("auth/PURGE_AUTH"),!1;I.setHeader(),I.get("user").then(function(e){var a=e.data;t.commit(H,a.user)}).catch(function(e){var a=e.response;t.commit("setError",a.data.errors)})}),T()(C,"auth/UPDATE_USER",function(t,e){var a=e.email,s=e.username,r=e.password,n=e.image,o={email:a,username:s,bio:e.bio,image:n};return r&&(o.password=r),I.put("user",o).then(function(e){var a=e.data;return t.commit(H,a.user),a})}),C),mutations:(b={},T()(b,"setError",function(t,e){t.errors=e}),T()(b,H,function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},N(t.user.token)}),T()(b,"auth/PURGE_AUTH",function(t){t.isAuthenticated=!1,t.user={},t.errors={},D()}),b),getters:{currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}}},O={state:{errors:null,currentCart:{merchant:null,items:[]}},actions:T()({},"cart/SUBMIT_CART",function(t,e){return 0}),mutations:(w={},T()(w,"cart/ADD_TO_CART",function(t,e){t.currentCart.items.push({item:e})}),T()(w,"cart/REMOVE_FROM_CART",function(t,e){t.currentCart.items={},t.errors={}}),T()(w,"cart/RESET_CART",function(t){t.currentCart={merchant:{},items:[]}}),T()(w,"cart/NEW_CART",function(t,e){t.currentCart={merchant:e,items:[]}}),w),getters:{currentCart:function(t){return t.currentCart}}},P=a("Xxa5"),V=a.n(P),L=a("exGp"),B=a.n(L),j=function(t,e){return{data:{merchants:[{id:1,image:"https://via.placeholder.com/220",name:"Thirsty Guys",friendlyId:"tgnus",address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0,tags:["Food Court","Bubble Tea","Beverages"]},{id:2,image:"https://via.placeholder.com/220",name:"Gohan Gohan",friendlyId:"ggnus",address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!1,tags:["Food Court","Curry","Rice"]},{id:3,image:"https://via.placeholder.com/220",name:"Nasi Club",friendlyId:"ncnus",address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0,tags:["Food Court","Rice","Lemak"]},{id:4,image:"https://via.placeholder.com/220",name:"Serious Salads",friendlyId:"ssnus",address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0,tags:["Food Court","Healthy","Salad"]},{id:5,image:"https://via.placeholder.com/220",name:"Daily Bowl",friendlyId:"dbnus",address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0,tags:["Food Court","Salad","Quinoa"]},{id:6,image:"https://via.placeholder.com/220",name:"Test Merchant",friendlyId:"tmnus",address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0,tags:["Food Court","Salad","Quinoa"]}]}}},q=function(t){return{data:{merchant:{name:"Thirsty Guys",address:"Faculty of Science S16 NUS",image:"https://via.placeholder.com/1200x500",isOpen:!0,menu:[{name:"Food",menuList:[{id:1,name:"Sunny side egg",price:2,minQty:0,maxQty:1},{id:2,name:"Rice and Beef Brisket",price:12.7,minQty:0,maxQty:1}]},{name:"Beverages",menuList:[{id:3,name:"Ice Lemon Kopi",price:3.25,minQty:0,maxQty:1},{id:4,name:"Ice Lemon Tea",price:3.2,minQty:0,maxQty:1}]}]}}}},Q={state:v()({},{merchant:null}),actions:T()({},"merchant/FETCH_MERCHANT",function(t,e){var a=this;return B()(V.a.mark(function s(){var r,n;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,q(e);case 2:return r=a.sent,n=r.data,t.commit("home/SET_MERCHANT",n.merchant),a.abrupt("return",n);case 6:case"end":return a.stop()}},s,a)}))()}),mutations:T()({},"home/SET_MERCHANT",function(t,e){t.merchant=e}),getters:{merchant:function(t){return t.merchant}}},W={state:v()({},{merchants:[],isLoadingMerchant:!0}),actions:T()({},"merchant/FETCH_MERCHANTS",function(t){var e=this;return B()(V.a.mark(function a(){var s,r;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("","");case 2:return s=e.sent,r=s.data,t.commit("home/FETCH_MERCHANTS_END",r.merchants),e.abrupt("return",r);case 6:case"end":return e.stop()}},a,e)}))()}),mutations:T()({},"home/FETCH_MERCHANTS_END",function(t,e){t.merchants=e,t.isLoadingMerchant=!1}),getters:{merchants:function(t){return t.merchants},isLoadingMerchant:function(t){return t.isLoadingMerchant}}};s.a.use(m.a);var z=new m.a.Store({modules:{auth:$,cart:O,merchant:Q,home:W}}),Y={name:"viewLogin",data:function(){return{email:null,password:null}},methods:{onSubmit:function(t,e){var a=this;this.$store.dispatch("auth/LOGIN",{email:t,password:e}).then(function(){return a.$router.push({name:"home"})})}},computed:v()({},Object(m.c)({errors:function(t){return t.auth.errors}}))},Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-page"},[a("div",{staticClass:"container page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[a("h1",{staticClass:"text-xs-center"},[t._v("Sign in")]),t._v(" "),a("p",{staticClass:"text-xs-center"},[a("router-link",{attrs:{to:{name:"register"}}},[t._v("\n            Need an account?\n          ")])],1),t._v(" "),t.errors?a("ul",{staticClass:"error-messages"},t._l(t.errors,function(e,s){return a("li",{key:s},[t._v(t._s(s)+" "+t._s(t._f("error")(e)))])}),0):t._e(),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(t.email,t.password)}}},[a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("fieldset",{staticClass:"form-group"},[a("router-link",{attrs:{to:{name:"forget_password",params:{}}}},[t._v("\n              or click here to reset password\n            ")])],1),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n            Sign in\n          ")])])])])])])},staticRenderFns:[]},K=a("VU/8")(Y,Z,!1,null,null,null).exports,X={name:"viewRegister",data:function(){return{username:"",email:"",password:""}},computed:v()({},Object(m.c)({errors:function(t){return t.auth.errors}})),methods:{onSubmit:function(){var t=this;this.$store.dispatch("auth/REGISTER",{email:this.email,password:this.password,username:this.username}).then(function(){return t.$router.push({name:"home"})})}}},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-page"},[a("div",{staticClass:"container page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[a("h1",{staticClass:"text-xs-center"},[t._v("Sign up")]),t._v(" "),a("p",{staticClass:"text-xs-center"},[a("router-link",{attrs:{to:{name:"login"}}},[t._v("\n            Have an account?\n          ")])],1),t._v(" "),t.errors?a("ul",{staticClass:"error-messages"},t._l(t.errors,function(e,s){return a("li",{key:s},[t._v(t._s(s)+" "+t._s(t._f("error")(e)))])}),0):t._e(),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n            Sign up\n          ")])])])])])])},staticRenderFns:[]},tt=a("VU/8")(X,J,!1,null,null,null).exports,et={name:"viewHome",data:function(){return{}},computed:v()({},Object(m.b)(["currentCart","merchants"])),mounted:function(){this.fetchMerchants()},methods:{fetchMerchants:function(){this.$store.dispatch("merchant/FETCH_MERCHANTS")},openMerchant:function(t){var e=this.merchants[t];if(this.currentCart.items.length>=1){if(this.currentCart.merchant.friendlyId!=e.friendlyId){if(!window.confirm(this.currentCart.merchant.name+" cart is found, would you like to proceed to visit "+e.name+"?"))return 0;this.$store.commit("cart/NEW_CART",e,{root:!0}),this.$router.push({name:"merchant",params:{merchantId:e.friendlyId}})}}else this.$store.commit("cart/NEW_CART",e,{root:!0});this.$router.push({name:"merchant",params:{merchantId:e.friendlyId}})}}},at={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("div",{staticClass:"container page"},[a("br"),t._m(0),a("br"),t._v(" "),a("div",{staticClass:"row justify-content-center"},t._l(t.merchants,function(e,s){return a("div",{key:s,staticClass:"col-xs-6 col-md-3 itemGrid"},[a("div",{staticClass:"merchantCard",on:{click:function(e){return t.openMerchant(s)}}},[a("div",{staticClass:"merchantImage img-fluid"},[e.currentlyOp?t._e():a("div",{staticClass:"notOpOverlay"},[a("div",{staticClass:"text"},[t._v("Closed")])]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{src:e.image}})]),t._v(" "),a("small",t._l(e.tags,function(s,r){return a("span",{key:r,staticClass:"merchantTags"},[t._v("\n              "+t._s(s)+"\n              "),r!=e.tags.length-1?a("span",[t._v(" - ")]):t._e()])}),0),a("br"),t._v(" "),a("b",[t._v(t._s(e.name.toUpperCase()))]),a("br"),t._v(" "),a("span",[t._v(t._s(e.address))]),a("br")])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("b",[this._v("Food and Beverage")])])}]};var st=a("VU/8")(et,at,!1,function(t){a("9U6r")},"data-v-172fc7ac",null).exports,rt={name:"viewSettings",computed:v()({},Object(m.b)(["currentUser"])),methods:{updateSettings:function(){var t=this;this.$store.dispatch(UPDATE_USER,this.currentUser).then(function(){t.$router.push({name:"home"})})},logout:function(){var t=this;this.$store.dispatch("auth/LOGOUT").then(function(){t.$router.push({name:"home"})})}}},nt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h1",[t._v("Settings")]),a("hr"),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.updateSettings()}}},[a("fieldset",[a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tName\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.username,expression:"currentUser.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your username"},domProps:{value:t.currentUser.username},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"username",e.target.value)}}})]),a("br"),t._v(" "),a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tEmail\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.email,expression:"currentUser.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.currentUser.email},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"email",e.target.value)}}})]),a("br"),t._v(" "),a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tPasssword\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.password,expression:"currentUser.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.currentUser.password},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"password",e.target.value)}}})]),a("br"),t._v(" "),a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tRepeat Passsword\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.password,expression:"currentUser.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.currentUser.password},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"password",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n\t\t\t\t\t\tUpdate Settings\n\t\t\t\t\t")])])]),t._v(" "),a("hr"),t._v(" "),a("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("\n\t\t\t\tLogout\n\t\t\t")])])])])},staticRenderFns:[]},ot=a("VU/8")(rt,nt,!1,null,null,null).exports,it={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h1",[t._v("Forget password")]),t._v(" "),a("form",[a("fieldset",[a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tEmail\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.email,expression:"currentUser.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.currentUser.email},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"email",e.target.value)}}})]),a("br"),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n\t\t\t\t\t\tForget password\n\t\t\t\t\t")])])])])])])},staticRenderFns:[]},ct=a("VU/8")({name:"viewForgetPasswordRequest"},it,!1,null,null,null).exports,lt={name:"viewWallet",data:function(){return{}},computed:v()({},Object(m.b)(["currentUser"])),methods:{gotoTopUpWallet:function(){this.$router.push({name:"walletTopUp"})}}},ut={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h4",[t._v("Hi "),a("span",{staticClass:"text-uppercase font-weight-bold"},[t._v(t._s(t.currentUser.username))]),t._v("! "),a("small",[t._v(" Your wallet credit balance:")])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"text-xs-center"},[a("h1",{staticClass:"text-xs-center font-weight-bold"},[t._v("SGD 20")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-xl",on:{click:t.gotoTopUpWallet}},[a("i",{staticClass:"ion-ios-plus-outline"}),a("span",[t._v(" Top Up Balance")])])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("p",[t._v("Last transactions:")]),t._v(" "),t._m(0),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"text-xs-center"},[a("router-link",{staticClass:"btn btn-secondary btn-md",attrs:{exact:"",to:{name:"settings"}}},[a("i",{staticClass:"ion-gear-a"}),t._v(" Settings\n        ")])],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Merchant")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Date Time")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("i",{staticClass:"ion-arrow-right-b"}),t._v("  Thirsty Guys")]),t._v(" "),a("td",[t._v("SGD 20")]),t._v(" "),a("td",[t._v("18 Dec 2019 19:23")])]),t._v(" "),a("tr",[a("td",[a("i",{staticClass:"ion-arrow-right-b"}),t._v("  Gohan Gohan")]),t._v(" "),a("td",[t._v("SGD 20")]),t._v(" "),a("td",[t._v("18 Dec 2019 19:23")])]),t._v(" "),a("tr",[a("td",[a("i",{staticClass:"ion-arrow-right-b"}),t._v("  Monti")]),t._v(" "),a("td",[t._v("SGD 20")]),t._v(" "),a("td",[t._v("18 Dec 2019 19:23")])])])])}]};var dt=a("VU/8")(lt,ut,!1,function(t){a("Brm5")},"data-v-44910bb0",null).exports,vt={name:"viewTopUpWallet",data:function(){return{isTopUpSuccess:!1,topUpValue:20,topUpMethod:"",voucherCode:""}},methods:{submitTopUpRequest:function(){if([20,35,50].includes(parseInt(this.topUpValue))){if(["VISA","MASTER"].includes(this.topUpMethod.toUpperCase()))alert("Processing payment with card"),this.isTopUpSuccess=!0;else if(!["VISA","MASTER","VOUCHER"].includes(this.topUpMethod.toUpperCase()))return void alert("Please select valid preferred payment method");if(["VOUCHER"].includes(this.topUpMethod.toUpperCase())){if(!(this.voucherCode.length>=6))return void alert("Please provide valid voucher code to proceed with top-up");alert("Processing payment with voucher"),this.isTopUpSuccess=!0}}else alert("Please select valid top-up value")}}},mt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("form",[a("div",{staticClass:"form-group"},[a("h4",[t._v("Top-up value (SGD)")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.topUpValue,expression:"topUpValue"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.topUpValue=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"20"}},[t._v("SGD 20")]),t._v(" "),a("option",{attrs:{value:"35"}},[t._v("SGD 35")]),t._v(" "),a("option",{attrs:{value:"50"}},[t._v("SGD 50")])])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"form-group"},[a("h4",[t._v("Preferred payment method")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.topUpMethod,expression:"topUpMethod"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.topUpMethod=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("-- Select --")]),t._v(" "),a("option",{attrs:{value:"visa"}},[t._v("Visa")]),t._v(" "),a("option",{attrs:{value:"master"}},[t._v("Master")]),t._v(" "),a("option",{attrs:{value:"voucher"}},[t._v("Voucher")])])]),t._v(" "),"VOUCHER"==t.topUpMethod.toUpperCase()?a("div",{staticClass:"form-group"},[a("br"),t._v(" "),a("h4",[t._v("Preferred payment method")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.voucherCode,expression:"voucherCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Type your voucher code here"},domProps:{value:t.voucherCode},on:{input:function(e){e.target.composing||(t.voucherCode=e.target.value)}}})]):t._e()]),t._v(" "),a("br")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h4",[t._v("Payment summary (SGD)")]),t._v(" "),a("div",{staticClass:"text-xs-center"},[a("h3",[a("b",[t._v("SGD "+t._s(t.topUpValue))]),t._v(" with "),a("b",[t.topUpMethod.length>=1?a("span",[t._v(t._s(t._f("capitalize")(t.topUpMethod)))]):t._e(),t._v(" "),t.topUpMethod.length<=0?a("span",[t._m(1)]):t._e()]),t._v(" "),"VOUCHER"==t.topUpMethod.toUpperCase()?a("span",[a("small",[t.voucherCode.length>=1?a("i",[t._v("\n                ( "+t._s(t.voucherCode.toUpperCase())+" )\n              ")]):t._e(),t._v(" "),t.voucherCode.length<=0?a("i",[t._v("\n                ( Insert your voucher code )\n              ")]):t._e()])]):t._e()]),t._v(" "),a("br")])])]),t._v(" "),t.isTopUpSuccess?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:t.submitTopUpRequest}},[t._v("Submit")])])]),t._v(" "),t.isTopUpSuccess?a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\n        Success top-up! \n          "),a("router-link",{attrs:{to:{name:"wallet"}}},[t._v("\n            Click here to view your wallet\n          ")])],1)])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("br"),this._v(" "),e("h2",[this._v("Wallet Balance Top-up")]),this._v(" "),e("hr"),this._v(" "),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("i",[this._v("select payment method")])])}]};var pt=a("VU/8")(vt,mt,!1,function(t){a("hpZL")},"data-v-9c126e2e",null).exports,ht={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("br"),t._v(" "),a("h1",[t._v("Inbox")]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"merchantImg"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/73"}})]),t._v(" "),a("td",[a("p",[a("b",[t._v("Thirsty Guys - Faculty of Science")])]),t._v(" "),a("p",[t._v("Test123")])])]),t._v(" "),a("tr",[a("td",{staticClass:"merchantImg"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/73"}})]),t._v(" "),a("td",[a("p",[a("b",[t._v("Thirsty Guys - Faculty of Science")])]),t._v(" "),a("p",[t._v("Test123")])])]),t._v(" "),a("tr",[a("td",{staticClass:"merchantImg"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/73"}})]),t._v(" "),a("td",[a("p",[a("b",[t._v("Thirsty Guys - Faculty of Science")])]),t._v(" "),a("p",[t._v("Test123")])])]),t._v(" "),a("tr",[a("td",{staticClass:"merchantImg"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/73"}})]),t._v(" "),a("td",[a("p",[a("b",[t._v("Thirsty Guys - Faculty of Science")])]),t._v(" "),a("p",[t._v("Test123")])])])])])])])])}]};var _t=a("VU/8")({name:"viewInbox",data:function(){return{}}},ht,!1,function(t){a("DXZv")},"data-v-6013fa5e",null).exports,ft={name:"MenuCategory",props:{menuCategory:{type:Object,required:!0}},data:function(){return{toggledMenu:!1}},methods:{toggleCategory:function(){this.toggledMenu=!this.toggledMenu},checkItem:function(t){var e=this.menuCategory.menuList[t];this.$toasted.show("<b>"+e.name.toUpperCase()+" </b>&nbsp;added to your cart",{theme:"bubble",position:"bottom-center",duration:2e3});this.$store.commit("cart/ADD_TO_CART",String(t))}}},gt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"menuCategory",on:{click:function(e){return t.toggleCategory()}}},[a("h4",{staticClass:"text-uppercase"},[t.toggledMenu?a("i",{staticClass:"ion-arrow-down-b"}):t._e(),t.toggledMenu?t._e():a("i",{staticClass:"ion-arrow-right-b"}),t._v("  "+t._s(t.menuCategory.name))])]),t._v(" "),t.toggledMenu?a("div",{staticClass:"menuList",attrs:{transition:"expand"}},t._l(t.menuCategory.menuList,function(e,s){return a("div",{key:s,staticClass:"item",on:{click:function(e){return t.checkItem(s)}}},[a("div",{staticClass:"row itemContent"},[t._m(0,!0),t._v(" "),a("div",{staticClass:"col-xs-6 text-uppercase"},[a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v("\n              "+t._s(e.name)+"\n            ")])]),t._v(" "),a("div",{staticClass:"col-xs-3"},[t._v("\n            SGD "+t._s(e.price)+"\n          ")])]),t._v(" "),s!=t.menuCategory.menuList.length-1?a("hr"):t._e()])}),0):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-3"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/100"}})])}]};var Ct={name:"viewMerchant",components:{MenuCategory:a("VU/8")(ft,gt,!1,function(t){a("zdVv")},"data-v-1cbb5c43",null).exports},data:function(){return{isPageLoading:!1}},computed:v()({},Object(m.b)(["merchant"])),beforeRouteEnter:function(t,e,a){S.a.all([z.dispatch("merchant/FETCH_MERCHANT",t.params.merchantId)]).then(function(){a()})}},bt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.isPageLoading?a("div",[a("div",{staticClass:"col-xs-12"},[t._v("\n\t\t\tLoading "+t._s(t.merchant.name)+"'s data\n\t\t")])]):t._e(),t._v(" "),t.isPageLoading?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("img",{staticClass:"img-fluid",attrs:{src:t.merchant.image}}),t._v(" "),a("h2",[a("b",[t._v(t._s(t.merchant.name))])]),t._v(" "),a("p",[t._v(t._s(t.merchant.address))]),t._v(" "),a("hr"),t._v(" "),a("h4",{staticClass:"text-xs-center font-weight-bold"},[t._v("MENU")]),t._v(" "),a("hr",{staticClass:"mb-0"}),t._v(" "),t._l(t.merchant.menu,function(e,s){return a("div",{key:s,attrs:{classs:"categoryList"}},[a("MenuCategory",{staticClass:"menuCategory",attrs:{menuCategory:e}}),t._v(" "),a("hr",{staticClass:"margin0"})],1)})],2)])])},staticRenderFns:[]};var wt=a("VU/8")(Ct,bt,!1,function(t){a("DNC2")},"data-v-3c4e2f82",null).exports,xt={name:"viewCart",data:function(){return{}},computed:v()({},Object(m.b)(["currentCart"]))},yt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("br"),t._v(" "),a("h1",[t._v("Checkout")])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-3"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/220"}})]),t._v(" "),a("div",{staticClass:"col-xs-9"},[a("h3",[a("b",[t._v("Thirsty Guys")])]),t._v(" "),a("h5",[t._v("Faculty of Science S16 NUS")])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6"},[t._v("\n      Eat in / Take out\n      "),a("select",{staticClass:"form-control",attrs:{required:""}},[a("option",{attrs:{value:""}},[t._v("-- Select --")]),t._v(" "),a("option",{attrs:{value:"20"}},[t._v("Eat in")]),t._v(" "),a("option",{attrs:{value:"35"}},[t._v("Take out")])])]),t._v(" "),a("div",{staticClass:"col-xs-6"},[t._v("\n      I am coming in ...\n      "),a("select",{staticClass:"form-control",attrs:{required:""}},[a("option",{attrs:{value:""}},[t._v("-- X minutes --")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("Now")]),t._v(" "),a("option",{attrs:{value:"5"}},[t._v("5 minutes")]),t._v(" "),a("option",{attrs:{value:"10"}},[t._v("10 minutes")]),t._v(" "),a("option",{attrs:{value:"15"}},[t._v("15 minutes")]),t._v(" "),a("option",{attrs:{value:"30"}},[t._v("30 minutes")])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h4",[t._v("Items")]),t._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Item")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Add on")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Total")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("b",[t._v("Red Iced Bubble Tea")])]),t._v(" "),a("td",[t._v("\n                + Extra Bubble (SGD 2)"),a("br"),t._v("\n                + Extra Milk (SGD 2)"),a("br")]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v("SGD 5")])])]),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"text-xs-right",attrs:{colspan:"2"}},[t._v("Subtotal")]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v("SGD 20")])]),t._v(" "),a("tr",[a("td",{staticClass:"text-xs-right",attrs:{colspan:"2"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-7 align-middle text-success"},[t._v("\n                    Promo description\n                  ")]),t._v(" "),a("div",{staticClass:"col-xs-5 form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Promo code"}})])])]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v("SGD 20")])]),t._v(" "),a("tr",[a("td",{staticClass:"text-xs-right",attrs:{colspan:"2"}},[t._v("Incl. GST")]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v("SGD 20")])]),t._v(" "),a("tr",{staticClass:"font-weight-bold"},[a("td",{staticClass:"text-xs-right",attrs:{colspan:"2"}},[t._v("Total")]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v("SGD 20")])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"}},[t._v("Submit")])])])])}]};var St=a("VU/8")(xt,yt,!1,function(t){a("FBBS")},"data-v-5b014e84",null).exports;s.a.use(U.a);var Ut=new U.a({routes:[{path:"/",redirect:"/home"},{name:"login",path:"/login",component:K},{name:"register",path:"/register",component:tt},{name:"home",path:"/home",component:st,meta:{requiresAuth:!0}},{name:"settings",path:"/settings",component:ot,meta:{requiresAuth:!0}},{name:"merchant",path:"/merchant/:merchantId",component:wt,props:!0,meta:{requiresAuth:!0}},{name:"inbox",path:"/inbox",component:_t},{name:"wallet",path:"/wallet",component:dt},{name:"walletTopUp",path:"/wallet/topup",component:pt},{name:"cart",path:"/cart",component:St},{name:"forget_password",path:"/forget_password",component:ct},{name:"NotFound",path:"*",redirect:"/"}]});Ut.beforeEach(function(t,e,a){var s=t.matched.some(function(t){return t.meta.requiresAuth}),r=["login","register","forget_password"].includes(t.name);s?S.a.all([z.dispatch("auth/CHECK_AUTH")]).then(function(t){0==t[0]&&a("login")}):S.a.all([z.dispatch("auth/CHECK_AUTH")]).then(function(t){0==t[0]?a():r?a("home"):a()}),a()});var Et=Ut,Tt=a("Eoz/"),At=a.n(Tt),Rt={getCurrentCoordinates:function(){navigator;return new S.a(function(t,e){navigator.geolocation.getCurrentPosition(function(e){var a=e.coords;return t(a)},function(t){return e(t)})})}};a.d(e,"db",function(){return Mt}),s.a.use(o.a),s.a.use(c.a),s.a.config.productionTip=!1,I.init(),console.log(Rt.getCurrentCoordinates()),s.a.filter("date",function(t){return At()(new Date(t),"MMMM D, YYYY")}),s.a.filter("error",function(t){return""+t[0]}),s.a.filter("capitalize",function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}),u.a.initializeApp({projectId:"vue-app-fb29a",messagingSenderId:"972401469784"});var Mt=u.a.firestore();new s.a({el:"#app",router:Et,store:z,components:{App:x},template:"<App/>"})},hpZL:function(t,e){},qm0y:function(t,e){},zdVv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fb2715143b90bf5cea67.js.map