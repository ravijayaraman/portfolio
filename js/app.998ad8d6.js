(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],m=0,d=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"374e":function(e,t,n){},"511d":function(e,t,n){"use strict";n("a2db")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,a,o,!1,null,null,null),u=c.exports,l=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("keep-alive",[n(e.getCurrentComponent,{tag:"component"})],1)],1)},d=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"col img-container animate-slide-in-from-top",class:e.getComputedImageClass,on:{mouseover:function(t){e.imageHover=!0},mouseleave:function(t){e.imageHover=!1}}},[r("img",{class:e.getImageFilterClass,attrs:{alt:"Profile",src:n("e1de"),rel:"preload"}})]),r("div",{staticClass:"col animate-slide-in-from-bottom"},[r("div",{staticClass:"row",class:e.getComputedTextClass,on:{mouseover:function(t){e.textHover=!0},mouseleave:function(t){e.textHover=!1}}},[e.isInteractive?r("div",[r("terminal")],1):r("div",{staticClass:"mx-auto"},[e._m(0),r("h3",[e._v(" Software Engineer, passionate about open source work to support community. Get in touch to know me better, keen to know about my work? Check out my "),r("a",{staticClass:"link-container-sm",attrs:{href:"https://github.com/ravijayaraman",target:"_blank"}},[r("h3",[r("b-icon-github")],1)]),e._v(" and "),r("a",{staticClass:"link-container-sm",attrs:{href:"https://www.linkedin.com/in/jayaraman-ravi",target:"_blank"}},[r("h3",[r("b-icon-linkedin")],1)]),e._v(" profile or download my resume. ")])])]),r("div",{staticClass:"d-flex align-items-center justify-content-between my-4"},[e.isInteractive?e._e():r("a",{staticClass:"d-flex link-container-lg mx-auto",attrs:{href:"https://drive.google.com/file/d/1e8_d1G6BRtdQKDoyuVegVUAPKyTWLgzd/view?usp=sharing",target:"_blank"}},[r("h3",[e._v(" Resume "),r("b-icon-arrow-up-right-circle")],1)]),r("button",{staticClass:"d-flex link-container-lg align-items-center mx-auto",on:{click:e.toggleInteractive}},[r("h3",[e._v(" "+e._s(e.isInteractive?"Go back":"Switch to interactive terminal")+" ")]),e.isInteractive?r("h3",{staticClass:"text-blink p-0"},[r("b-icon-arrow-return-left")],1):e._e(),e.isInteractive?e._e():r("h3",{staticClass:"text-blink p-0"},[r("b-icon-arrow-return-right")],1)])])])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v(" Hey "),n("button",{staticClass:"button-container-wave mx-0 px-0"},[e._v(" 👋 ")]),e._v(" there, I'm Ravi Jayaraman ")])}],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-4 justify-content-start",on:{mouseenter:e.focusInput,mouseleave:e.blurInput}},[n("div",{staticClass:"d-flex option-window align-items-center",on:{mouseenter:e.focusInput,mouseleave:e.blurInput}},[n("b-icon",{staticClass:"m-2",attrs:{icon:"circle-fill",variant:"danger"}}),n("b-icon",{attrs:{icon:"circle-fill",variant:"warning"}}),n("b-icon",{staticClass:"m-2",attrs:{icon:"circle-fill",variant:"success"}})],1),n("div",{staticClass:"col command-window p-2",on:{mouseenter:e.focusInput,mouseleave:e.blurInput}},[n("p",{staticClass:"text-start text-white d-flex",attrs:{id:"terminalText"},domProps:{innerHTML:e._s(e.terminalText)}}),n("div",{staticClass:"d-flex flex-row align-items-start"},[n("p",{staticClass:"text-left text-white"},[e._v("~/"+e._s(e.currentDirectory)+"/ $")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentCommand,expression:"currentCommand"}],ref:"inputCommand",staticClass:"text-white bg-transparent px-1 py-0 m-0",attrs:{id:"inputCommand",autocomplete:"off",spellcheck:"false"},domProps:{value:e.currentCommand},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.processCommand.apply(null,arguments)},input:function(t){t.target.composing||(e.currentCommand=t.target.value)}}})])])])},b=[],g=n("1da1"),v=n("3835"),y=n("53ca"),C=n("2909"),w=(n("96cf"),n("4160"),n("159b"),n("99af"),n("b64b"),n("4fad"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("ac1f"),n("1276"),n("caad"),{data:function(){var e=this;return{terminalText:"Hi my name is Ravi,<br> this is a terminal window you could use to browse and get information about my work. Let's get started, if you know basic linux commands feel free to go ahead, if not then you can type 'help' command to know more. Happy searching! :)",terminalCommands:[],currentCommand:"",hashDirectory:{portfolio:{about:{"about.txt":"Software Engineer, passionate about open source work to support community. Let's get in touch! &#x270B; Grab a coffee &#9749; and discuss, how does that sound? &#128526;<br>E: ravijayaraman13894@gmail.com M: 0468 537 327","hobbies.txt":"Cooking, soccer, hiking, design thinking"},experience:{"experience.txt":"The University of Sydney\n              <br>-------------------------------\n              <br>Software Engineer October 2020 – Current\n              <br>Programming languages: JavaScript | PHP | YAML | Node | Vue | React Native\n              <br>&emsp;• Designed scalable backend infrastructure in AWS to minimise load by 20% on servers.\n              <br>&emsp;• Increased response time for API by 30% by adding scalable queuing infrastructure.\n              <br>&emsp;• Grew retention of students using mobile application from 9,600 users to 11,300 in 3\n              months by restructuring services offered to students.\n              <br><br>Research Intern December 2020 – February 2021\n              <br>Programming languages: JavaScript | Node | Node | Java\n              <br>&emsp;• Collaborated in research projects targeting smart-home conflict resolution.\n              <br>&emsp;• Debugged IoT device by reverse engineering Android app to fetch endpoint call.\n              <br>&emsp;• Designed and developed comprehensive dashboard to improve overall health by\n              monitoring user activities.\n              <br>&emsp;• Analysed the user patterns to improve IoT based smart-home services by using\n              motion detection and data chunking.\n              <br>&emsp;• Improved data collection strategy by using 2 motion sensors (short and long ranged)\n              to enhance the qualitative aspect of the data.\n              <br><br>SYNCS! Hackathon August 2019\n              <br>----------------------------------\n              <br>Tools and programming languages: Figma | Swift | GitHub | HTML | CSS | Angular\n              <br>&emsp;• Brainstormed and collaborated to create a business case to ease storage problems\n              by making them affordable and quick to find.\n              <br>&emsp;• Designed wireframes in Figma to showcase user experience for storage space\n              application.\n              <br>&emsp;• Developed iOS application within 24 hours by collaborating in group of 4 team\n              members.\n              <br><br>Winjit Technologies Ltd, Global Software development company established in India\n              <br>-----------------------------------\n              <br>Software Engineer March 2017 – December 2018\n              <br>Programming languages: Swift | Objective C | HTML | CSS | JavaScript\n              <br>&emsp;• Improved velocity of development by 15% by designing reusable components across\n              projects.\n              <br>&emsp;• Secured phase second of the banking project before the end of phase one by\n              improving velocity of the development.\n              <br>&emsp;• Gained confidence of the client by shipping code before time for smooth release, as\n              a result onboarded new clients in financial sector.","leadership_and_awards.txt":"The University of Sydney\n              <br>-----------------------------\n              <br>Academic tutor February 2021 – July 2021\n              <br>&emsp;• Learned the skill of teaching students by applying my knowledge gained during peer\n              mentoring as a result student were more inquisitive about additional readings.\n              <br>&emsp;• Designed course presentations for tutorials to involve students to develop a culture of\n              sharing knowledge through active learning with the help of tools like Mentimeter and\n              padlet as a result student were more involved during the tutorials.\n              <br><br>Research Intern December 2020 – February 2021\n\n              <br>&emsp;• Selected as one of the 690 students for 3 month vacation research program for high-\n              achieving student in Computer Science based on leadership potential and academic\n\n              success.\n              <br><br>Peer mentor August 2019 – November 2019\n              <br>&emsp;• Improved leadership skills and public speaking by mentoring 68 incoming students in\n              the Master of IT program.\n              <br>&emsp;• Organised activities and friendly environment for new students to feel comfortable\n              away from home and better understand culture.\n              <br>&emsp;• Grew professionally and personally by connecting with students\n              <br>&emsp;• Guided the new students with potential opportunities to grow and discover university\n              and research life.\n\n              <br><br>SYNCS! Hackathon Aug 2019\n              <br>&emsp;• Third place – SYNCS! Hackathon at Canva, 2019. Project submission details\n              available at https://syncshack.devpost.com/project-gallery"},education:{"masters.txt":"The University of Sydney\n              <br>February 2019 – December 2020\n              <br>Master of Information Technology and Master of Information Technology Management\n              <br>Grade: WAM 74.5","bachelor.txt":"Savitribai Phule Pune University, India\n              <br>July 2012 – May 2016\n              <br>Bachelor of Engineering in Computer Science\n              <br>Grade: 7.5 CGPA"}}},currentDirectory:"",currentDirectoryChildren:{},hashCommand:{clear:{helpText:"Clear the current workspace by pushing the previous results to the top",output:function(){return"<br><br><br><br><br><br><br><br><br><br><br><br>"}},history:{helpText:"Display all previous commands entered in the terminal",output:function(){var t="",n=Object(C["a"])(e.terminalCommands);return 1===n.length?(t="There are no commands execute so far",t):(n.pop(),n.forEach((function(e){t+="<br>".concat(e)})),t)}},pwd:{helpText:"Display the present working directory",output:function(){return"~/".concat(e.currentDirectory,"/")}},cat:{helpText:"Display the information present in the file",output:function(t){return t=Object(y["a"])(t)===Object(y["a"])([])?t[1]:t,"<br>".concat(e.currentDirectoryChildren[t],"<br>")}},whoami:{helpText:"Display summary for curresnt session",output:function(){return"".concat(navigator.platform," ").concat(navigator.product," ").concat(navigator.appName," ").concat(navigator.userAgent)}},cd:{helpText:"Change directory",output:function(t){return e.getCurrentDirectory(Object(y["a"])(t)===Object(y["a"])([])?t[1]:t,e.currentDirectoryChildren).then((function(t){var n=t.directory,r=t.children;return e.currentDirectory+="/".concat(n),e.currentDirectoryChildren=r,"switched to ".concat(n," directory")}))["catch"]((function(t){return e.errorHandler(t)}))}},ls:{output:function(){var t="";return Object.keys(e.currentDirectoryChildren).forEach((function(e){t+="<br>".concat(e)})),t},helpText:"List all the filenames within the current directory"},help:{output:function(){var t="";return Object.entries(e.hashCommand).forEach((function(e){var n=Object(v["a"])(e,2),r=n[0],a=n[1].helpText;t+=a?"<br>&emsp;&emsp;".concat(r,"&emsp;&emsp;").concat(a):""})),t}}},validCommandSet:{}}},mounted:function(){var e=this;this.validCommandSet=new Set(Object.keys(this.hashCommand)),this.getCurrentDirectory().then((function(t){var n=t.directory,r=t.children;e.currentDirectory+=n,e.currentDirectoryChildren=r}))},computed:{},methods:{focusInput:function(){this.$refs.inputCommand.focus()},blurInput:function(){this.$refs.inputCommand.blur()},processCommand:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.terminalCommands.push(e.currentCommand),t.next=3,e.validateCommand().then((function(t){e.parseCommandOutput(t).then((function(t){e.terminalText+="<br>~/".concat(e.currentDirectory,"/ $ ").concat(e.currentCommand," <br>").concat(t)}))}))["catch"]((function(t){e.errorHandler(t)}))["finally"]((function(){e.currentCommand="";var t=e.$el.querySelector("#terminalText");t.scrollTop=t.scrollHeight}));case 3:case"end":return t.stop()}}),t)})))()},parseCommandOutput:function(e){return Promise.resolve(this.hashCommand[Object(y["a"])(e)===Object(y["a"])([])?e[0]:e].output(e))},validateCommand:function(){var e=this;return new Promise((function(t,n){var r=e.currentCommand.split(" ");e.validCommandSet.has(r[0])||n("".concat(r[0]," is not a valid command, try typing 'help' for more information")),r.length>2?n("".concat(r[0]," takes only one arguement you have passed ").concat(r.length-1,", try typing 'help' for more information")):["help","whoami","ls","history","pwd","clear"].includes(r[0])||1!==r.length||n("No arguements passed to command ".concat(r[0],", try typing 'help' for more information")),t(r)}))},errorHandler:function(e){this.terminalText+="<br>~/".concat(this.currentDirectory,"/ $ ").concat(this.currentCommand," <br>").concat(e),this.currentCommand=""},getCurrentDirectory:function(e,t){var n=this;return new Promise((function(r,a){e&&t||r({directory:"portfolio",children:n.hashDirectory.portfolio}),Object.hasOwnProperty.call(t,e)?r({directory:e,children:t[e]}):a("".concat(e," not found! Try using 'ls' command to list all the content of the current folder."))}))}}}),x=w,k=(n("7ba4"),Object(i["a"])(x,h,b,!1,null,"784212be",null)),I=k.exports,_={components:{Terminal:I},data:function(){return{textHover:!1,imageHover:!1,hover:!1,isInteractive:!1}},mounted:function(){},computed:{getComputedTextClass:function(){return this.textHover?"active":"inactive"},getComputedImageClass:function(){return this.imageHover?"active":"inactive"},getImageFilterClass:function(){return this.isInteractive?"img-filter":""},getTextForTerminalButton:function(){return this.isInteractive?"Go back <b-icon-arrow-return-left></b-icon-arrow-return-left>":"Switch to interactive terminal <b-icon-arrow-return-right></b-icon-arrow-return-right>"}},methods:{toggleInteractive:function(){this.isInteractive=!this.isInteractive}}},S=_,T=(n("ea4f"),Object(i["a"])(S,p,f,!1,null,"bfa0592a",null)),D=T.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row align-items-center w-100 my-2"},[r("div",{staticClass:"col animate-slide-in-from-bottom"},[r("div",{staticClass:"row",class:e.getComputedTextClass,on:{mouseover:function(t){e.textHover=!0},mouseleave:function(t){e.textHover=!1}}},[r("h1",[e._v(" Sydney Uni Mobile App ")]),r("h3",[e._v(" Design, develop and ship code in a fast paced environment to deliver enterprise application for all the university student and staff members. ")])]),r("div",{staticClass:"row my-3",class:e.getComputedDetailTextClass,on:{mouseover:function(t){e.detailTextHover=!0},mouseleave:function(t){e.detailTextHover=!1}}},[r("h1",[e._v(" Technology Stack ")]),e._m(0)]),r("div",{staticClass:"d-flex align-items-center my-4"},[e.isInteractive?e._e():r("a",{staticClass:"d-flex link-container-lg mx-auto",attrs:{href:"https://apps.apple.com/au/app/sydney-uni/id542003075#?platform=iphone",target:"_blank"}},[r("h3",[e._v(" App Store "),r("b-icon-arrow-up-right-circle")],1)]),e.isInteractive?e._e():r("a",{staticClass:"d-flex link-container-lg mx-auto",attrs:{href:"https://play.google.com/store/apps/details?id=com.blackboard.android.central.sydney_au",target:"_blank"}},[r("h3",[e._v(" Play Store "),r("b-icon-arrow-up-right-circle")],1)])])]),r("div",{staticClass:"col-3 img-container animate-slide-in-from-top",class:e.getComputedImageClass},[r("img",{class:e.getImageFilterClass,attrs:{src:n("5a3a"),rel:"preload"},on:{mouseover:function(t){e.imageHover=!0},mouseleave:function(t){e.imageHover=!1}}})]),r("div",{staticClass:"col-3 img-container animate-slide-in-from-bottom",class:e.getComputedImageClass},[r("img",{class:e.getImageFilterClass,attrs:{src:n("cffd"),rel:"preload"},on:{mouseover:function(t){e.imageHover=!0},mouseleave:function(t){e.imageHover=!1}}})])])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("div",{staticClass:"row"},[e._v("React Native, JavaScript, NodeJS, Jest, PHP")]),n("div",{staticClass:"row"},[e._v(" AWS Lambda, S3, RDS, DynamoDB, SQS, VPC ")])])}],P={data:function(){return{textHover:!1,detailTextHover:!1,imageHover:!1,hover:!1,isInteractive:!1}},computed:{getComputedTextClass:function(){return this.textHover?"active":"inactive"},getComputedDetailTextClass:function(){return this.detailTextHover?"active":"inactive"},getComputedImageClass:function(){return this.imageHover?"active":"inactive"},getImageFilterClass:function(){return this.isInteractive?"img-filter":""}},methods:{toggleInteractive:function(){this.isInteractive=!this.isInteractive}}},H=P,E=(n("511d"),Object(i["a"])(H,O,j,!1,null,"40f7005a",null)),M=E.exports,A={components:{Summary:D,Experience:M},data:function(){return{listOfPages:[D,M],currentPageIndex:0}},mounted:function(){window.addEventListener("keyup",this.getKeyCode)},beforeDestroy:function(){window.removeEventListener("keyup",this.getKeyCode)},computed:{getCurrentComponent:function(){return this.listOfPages[this.currentPageIndex]}},methods:{previousComponent:function(){this.currentPageIndex>0&&(this.currentPageIndex-=1)},nextComponent:function(){this.currentPageIndex<this.listOfPages.length-1&&(this.currentPageIndex+=1)},getKeyCode:function(e){switch(e.keyCode){case 38:this.previousComponent();break;case 40:this.nextComponent();break}}}},G=A,L=Object(i["a"])(G,m,d,!1,null,null,null),$=L.exports;r["default"].use(l["a"]);var J=[{path:"/",name:"Landing",component:$,meta:{title:"Ravi Jayaraman"}}],N=new l["a"]({mode:"history",base:"/portfolio/",routes:J}),F=N,R=n("5f5b"),B=n("b1e0");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(R["a"]),r["default"].use(B["b"]),r["default"].use(B["a"]),new r["default"]({router:F,render:function(e){return e(u)}}).$mount("#app")},"5a3a":function(e,t,n){e.exports=n.p+"img/syd-uni-1.a139bef1.png"},"5c0b":function(e,t,n){"use strict";n("9c0c")},"7ba4":function(e,t,n){"use strict";n("374e")},8207:function(e,t,n){},"9c0c":function(e,t,n){},a2db:function(e,t,n){},cffd:function(e,t,n){e.exports=n.p+"img/syd-uni-4.e50c578c.png"},e1de:function(e,t,n){e.exports=n.p+"img/landing-profile.3480549d.png"},ea4f:function(e,t,n){"use strict";n("8207")}});
//# sourceMappingURL=app.998ad8d6.js.map