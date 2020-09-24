(this.webpackJsonpbraincurry=this.webpackJsonpbraincurry||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(16),a(2)),i=a(3),u=a(4),m=a(6),s=a(5),p=function(e){var t=e.error,a=e.select;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:a?"s_error":"error"},t),r.a.createElement("br",null)):null},d=function(e){var t=e.name,a=e.label,n=e.type,l=e.value,c=e.handleInput,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{className:"form-control",id:t,name:t,type:n,value:l||"",onChange:function(e){return c(t,e)},style:{borderColor:"".concat(o?"red":"black")}}),r.a.createElement(p,{error:o}))},b={1:"List your team information",2:"Joining Date and Pro Level",3:"Contact Details"},h=function(e){var t=e.handleInput,a=e.currentStep,n=e.fields,l=e.errors,c=function(e,t,a,n,r){return[{name:"team_name",label:"Team Name",type:"text",value:e,error:r.team_name},{name:"location",label:"Zip Code",type:"number",value:t,error:r.location},{name:"players",label:"Total Number of Players",type:"number",value:a,error:r.players},{name:"captain",label:"Captain",type:"text",value:n,error:r.captain}]}(n.team_name,n.location,n.players,n.captain,l);return 1===a?r.a.createElement("div",{className:"form-group"},c.map((function(e,a){return r.a.createElement(d,{key:a,name:e.name,label:e.label,type:e.type,value:e.value,handleInput:t,error:e.error})}))):null},v=function(e){var t=e.handleInput,a=e.currentStep,n=e.fields,l=e.errors,c=n.date,o=n.exp;return 2===a?r.a.createElement("div",{className:"form-group"},r.a.createElement(d,{name:"date",label:"Date of Joining",type:"date",value:c,handleInput:t,error:l.date}),r.a.createElement("label",{htmlFor:"exp"},"Level of Experience"),r.a.createElement("select",{name:"exp",id:"exp",value:o,onChange:function(e){return t("exp",e)},style:{borderColor:"".concat(l.exp?"red":"black")}},r.a.createElement("option",{value:"",defaultValue:!0},"Select your experience level"),r.a.createElement("option",{value:"newbie"},"Newbie"),r.a.createElement("option",{value:"pro"},"Pro"),r.a.createElement("option",{value:"league level"},"League Level"),r.a.createElement("option",{value:"expert"},"Expert"),r.a.createElement("option",{value:"coach"},"Coach")),r.a.createElement(p,{error:l.exp,select:!0})):null},f=function(e){var t=e.handleInput,a=e.currentStep,n=e.fields,l=e.errors,c=function(e,t,a,n){return[{name:"name",label:"Name",type:"text",value:e,error:n.name},{name:"email",label:"Email",type:"text",value:t,error:n.email},{name:"phn",label:"Telephone Number",type:"number",value:a,error:n.phn}]}(n.name,n.email,n.phn,l);return 3===a?r.a.createElement("div",{className:"form-group"},c.map((function(e,a){return r.a.createElement(d,{key:a,name:e.name,label:e.label,type:e.type,value:e.value,handleInput:t,error:e.error})}))):null},y=function(e){var t=e.label,a=e.handleClick,n=e.type;return"submit"===n?r.a.createElement("button",{className:"continue_btn",type:n,onClick:a},t):"button"===n?r.a.createElement("button",{className:"continue_btn",onClick:a,type:n},t):r.a.createElement("button",{className:"back_btn",onClick:a},"\u2190 Back")},E=function(e,t){var a={},n=!0;return 1===t&&(e.team_name?e.team_name.match(/^[0-9a-zA-Z]+$/)||(n=!1,a.team_name="Only letters and numbers are allowed"):(n=!1,a.team_name="Team name can't be empty"),e.location?e.location>=1e5&&e.location<=999999||(n=!1,a.location="Zip code should be in range of 100000 - 999999"):(n=!1,a.location="Zip code can't be empty"),e.players?e.players>=5&&e.players<=15||(n=!1,a.players="Enter valid team size"):(n=!1,a.players="Enter your team size"),e.captain?e.captain.match(/^[A-Za-z]+$/)||(n=!1,a.captain="Can only contain alphabets"):(n=!1,a.captain="Captain name can't be empty")),2===t&&(e.date||(n=!1,a.date="Must select your joining date"),e.exp||(n=!1,a.exp="Select one for the dropdown")),3===t&&(e.name?e.name.match(/^[A-Za-z]+$/)||(n=!1,a.name="Should only contain alphabets"):(n=!1,a.name="Name can't be empty"),e.email?e.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)||(n=!1,a.email="Enter valid email. Eg - yyyyy1@gmail.com"):(n=!1,a.email="Enter your email"),e.phn?10!==e.phn.length&&(n=!1,a.phn="Enter a valid number"):(n=!1,a.phn="Enter your phone number")),[n,a]},S=function(e){var t=e.width,a=e.percentage,l=Object(n.useState)(0),c=Object(o.a)(l,2),i=c[0],u=c[1];return Object(n.useEffect)((function(){u(a*t/100)}),[a,t]),r.a.createElement("div",{className:"progress-div",style:{width:"".concat(t,"px")}},r.a.createElement("div",{style:{width:"".concat(i,"px")},className:"progress"}))},g=function(e){return function(t){Object(m.a)(n,t);var a=Object(s.a)(n);function n(e){var t;return Object(i.a)(this,n),(t=a.call(this,e)).state={progressBarWidth:t.findSize()},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeUpdate.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeUpdate.bind(this))}},{key:"findSize",value:function(){var e=window.screen.width;return e>419?661:89*e/100}},{key:"resizeUpdate",value:function(){var e=this.findSize();this.setState({progressBarWidth:e})}},{key:"render",value:function(){return r.a.createElement(e,{progressBarWidth:this.state.progressBarWidth})}}]),n}(r.a.PureComponent)},k=a(10),C=g(function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInput=function(e,t){var a=n.state.fields;a[e]=t.target.value,n.setState({fields:a})},n.incrementCurrentStep=function(){n.setState((function(e){return{currentStep:e.currentStep+1}}))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.fields,r=t.currentStep,l=E(a,r),c=Object(o.a)(l,2),i=c[0],u=c[1];u&&n.setState({errors:u}),i&&(n.incrementCurrentStep(),console.log(n.state.fields))},n.nextStep=function(){var e=n.state,t=e.fields,a=e.currentStep,r=E(t,a),l=Object(o.a)(r,2),c=l[0],i=l[1];i&&n.setState({errors:i}),c&&n.incrementCurrentStep()},n.prevStep=function(){n.setState((function(e){return{currentStep:e.currentStep-1}}))},n.prevBtn=function(){var e=n.state.currentStep;if(e>1&&e<4)return r.a.createElement(y,{handleClick:n.prevStep,type:"back"})},n.calculateProgressPercentage=function(){var e=n.state.currentStep;return 1===e?30:2===e?60:3===e?90:100},n.state={fields:{},errors:{},currentStep:1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currentStep,a=e.fields,n=e.errors,l={currentStep:t,handleInput:this.handleInput,fields:a,errors:n};return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"inner_container"},t<4?r.a.createElement("div",{className:"form_container"},r.a.createElement(S,{width:this.props.progressBarWidth,percentage:this.calculateProgressPercentage()}),this.prevBtn(),r.a.createElement("h2",null,"Football Registration"),r.a.createElement("p",{className:"h_bottom"},b[t]),r.a.createElement("form",{id:"my-form",onSubmit:this.handleSubmit},r.a.createElement(h,l),r.a.createElement(v,l),r.a.createElement(f,l)),3===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{sitekey:"6LclG9AZAAAAAPLIQwYHiHWjBj6mFx7CGodfPP-Q"}),r.a.createElement(y,{type:"submit",label:"Submit",handleClick:this.handleSubmit})):r.a.createElement(y,{label:"Continue",handleClick:this.nextStep,type:"button"})):r.a.createElement("div",{className:"form_container"},r.a.createElement("h2",null,"Thanks For Submitting the form"))))}}]),a}(n.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.261c6bd6.chunk.js.map