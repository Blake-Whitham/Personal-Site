/*! For license information please see 162.js.LICENSE.txt */
(self.webpackChunkmy_personal_site=self.webpackChunkmy_personal_site||[]).push([[162],{1:e=>{"use strict";function t(e){return function t(n,r,a){switch(r*=e,a){case"years":case"year":n.setFullYear(n.getFullYear()+r);break;case"months":case"month":n.setMonth(n.getMonth()+r);break;case"weeks":case"week":return t(n,7*r,"days");case"days":case"day":n.setDate(n.getDate()+r);break;case"hours":case"hour":n.setHours(n.getHours()+r);break;case"minutes":case"minute":n.setMinutes(n.getMinutes()+r);break;case"seconds":case"second":n.setSeconds(n.getSeconds()+r);break;case"milliseconds":case"millisecond":n.setMilliseconds(n.getMilliseconds()+r);break;default:throw new Error("Invalid range: "+a)}return n}}e.exports={add:t(1),subtract:t(-1)}},162:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r,a,o,i=n(294),s=n(163),u=n(771),c=n.n(u),l=s.ZP.div(r||(a=["\n& {\n  border-radius: 10px;\n  margin: 0px auto 0 auto;\n  background-image:\n  linear-gradient(180deg, rgba(0, 0, 0,.3), rgba(255, 255, 255,.3));\n  width: 90%;\n  z-index: 1;\n}\n\nrect.ContributionCalendar-day[data-level='0'] {\n    fill: #e2bebe;\n}\n\nrect.ContributionCalendar-day[data-level='1'] {\n    fill: #39dd34;\n}\n\nrect.ContributionCalendar-day[data-level='2'] {\n    fill: #45a045;\n}\n\nrect.ContributionCalendar-day[data-level='3'] {\n    fill: #047526;\n}\n\nrect.ContributionCalendar-day[data-level='4'] {\n    fill: #0a4208;\n}\n\n/* &.calendar .width-full > .float-left {\n    display: none;\n} */\n\n&.calendar {\n    font-family: Helvetica, arial;\n    border: 1px solid #DDDDDD;\n    border-radius: 3px;\n    min-height: 243px;\n    text-align: center;\n    margin: 0 auto;\n}\n\n.calendar-graph text.wday,\n.calendar-graph text.month {\n    font-size: 10px;\n    fill: #aaa;\n}\n\n.contrib-legend {\n    text-align: right;\n    padding: 0 14px 10px 0;\n    display: inline-block;\n    float: right;\n}\n\n.contrib-legend .legend {\n    display: inline-block;\n    list-style: none;\n    margin: 0 5px;\n    position: relative;\n    bottom: -1px;\n    padding: 0;\n}\n\n.contrib-legend .legend li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n}\n\n.text-small {\n    font-size: 12px;\n    color: #767676;\n}\n\n.calendar-graph {\n    padding: 5px 0 0;\n    text-align: center;\n}\n\n.contrib-column {\n    padding: 15px 0;\n    text-align: center;\n    border-left: 1px solid #ddd;\n    border-top: 1px solid #ddd;\n    font-size: 11px;\n}\n\n.contrib-column-first {\n    border-left: 0;\n}\n\n.table-column {\n    display: table-cell;\n    width: 1%;\n    padding-right: 10px;\n    padding-left: 10px;\n    vertical-align: top;\n}\n\n.contrib-number {\n    font-weight: 300;\n    line-height: 1.3em;\n    font-size: 24px;\n    display: block;\n    color: #333;\n}\n\n.calendar img.spinner {\n    width: 70px;\n    margin-top: 50px;\n    min-height: 70px;\n}\n\n.monospace {\n    text-align: center;\n    color: #000;\n    font-family: monospace;\n}\n\n.monospace a {\n    color: #1D75AB;\n    text-decoration: none;\n}\n\n.contrib-footer {\n    font-size: 11px;\n    padding: 0 10px 12px;\n    text-align: left;\n    width: 100%;\n    box-sizing: border-box;\n    height: 26px;\n}\n\n.left.text-muted {\n    float: left;\n    margin-left: 9px;\n    color: #767676;\n}\n.left.text-muted a {\n    color: #4078c0;\n    text-decoration: none;\n}\n.left.text-muted a:hover,\n.monospace a:hover {\n    text-decoration: underline;\n}\n\nh2.f4.text-normal.mb-3 {\n    display: none;\n}\n\n.float-left.text-gray {\n    float: left;\n}\n#user-activity-overview{\n    display:none;\n}\n\n.day-tooltip {\n    white-space: nowrap;\n    position: absolute;\n    z-index: 99999;\n    padding: 10px;\n    font-size: 12px;\n    color: #959da5;\n    text-align: center;\n    background: rgba(0,0,0,.85);\n    border-radius: 3px;\n    display: none;\n    pointer-events: none;\n}\n.day-tooltip strong {\n    color: #dfe2e5;\n}\n.day-tooltip.is-visible {\n    display: block;\n}\n.day-tooltip:after {\n    position: absolute;\n    bottom: -10px;\n    left: 50%;\n    width: 5px;\n    height: 5px;\n    box-sizing: border-box;\n    margin: 0 0 0 -5px;\n    content: \" \";\n    border: 5px solid transparent;\n    border-top-color: rgba(0,0,0,.85)\n}\n\ntext.ContributionCalendar-label {\n    fill: #ccc;\n    font-size: 11px;\n}\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))));const d=function(){return(0,i.useEffect)((function(){c()("#calendar","blake-whitham",{responsive:!0})}),[]),i.createElement(l,null,i.createElement("div",{id:"calendar"}))}},225:e=>{e.exports.en=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e.exports.en.abbr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e.exports.en.short=["Su","Mo","Tu","We","Th","Fr","Sa"],e.exports.fr=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],e.exports.fr.abbr=["dim","lun","mar","mer","jeu","ven","sam"],e.exports.fr.short=["di","lu","ma","me","je","ve","sa"],e.exports.es=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"],e.exports.es.abbr=["dom","lun","mar","mir","jue","vie","sab"],e.exports.es.short=["do","lu","ma","mi","ju","vi","sa"],e.exports.it=["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"],e.exports.it.abbr=["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],e.exports.it.short=["D","L","Ma","Me","G","V","S"],e.exports=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e.exports.abbr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e.exports.short=["Su","Mo","Tu","We","Th","Fr","Sa"]},478:(e,t,n)=>{"use strict";var r=n(604),a=n(698);function o(e,t){return"string"==typeof e?"<"===e.charAt(0)?(e=document.createElement(e.slice(1,-1)),r(t||{},(function(t,n){switch(n){case"text":return void(e.textContent=t);case"html":return void(e.innerHTML=t)}e.setAttribute(n,t)})),e):(t=t||document).querySelector(e):e}o.$$=function(e,t){return"string"==typeof e?(t=t||document,a(t.querySelectorAll(e))):[e]},e.exports=o},734:e=>{"use strict";e.exports=function(e,t,n){n=n||"0";var r=(t=t||2)-(e=e.toString()).length;return(r<=0?"":n.repeat(r))+e}},280:(e,t,n)=>{"use strict";var r=n(509),a=n(225),o=n(734),i=n(4).Parser,s={YYYY:function(e,t){return t?e.getUTCFullYear():e.getFullYear()},YY:function(e,t){return s.YYYY(e,t)%100},MMMM:function(e,t){return t?r[e.getUTCMonth()]:r[e.getMonth()]},MMM:function(e,t){return t?r.abbr[e.getUTCMonth()]:r.abbr[e.getMonth()]},MM:function(e,t){return o(t?e.getUTCMonth()+1:e.getMonth()+1)},M:function(e,t){return t?e.getUTCMonth()+1:e.getMonth()+1},dddd:function(e,t){return a[s.d(e,t)]},ddd:function(e,t){return a.abbr[s.d(e,t)]},dd:function(e,t){return a.short[s.d(e,t)]},d:function(e,t){return t?e.getUTCDay():e.getDay()},DD:function(e,t){return o(s.D(e,t))},D:function(e,t){return t?e.getUTCDate():e.getDate()},A:function(e,t){return s.a(e,t).toUpperCase()},a:function(e,t){return s.H(e,t)>=12?"pm":"am"},hh:function(e,t){return o(s.h(e,t))},h:function(e,t){return s.H(e,t)%12||12},HH:function(e,t){return o(s.H(e,t))},H:function(e,t){return t?e.getUTCHours():e.getHours()},mm:function(e,t){return o(s.m(e,t))},m:function(e,t){return t?e.getUTCMinutes():e.getMinutes()},ss:function(e,t){return o(s.s(e,t))},s:function(e,t){return t?e.getUTCSeconds():e.getSeconds()},S:function(e,t){return Math.round(s.s(e,t)/60*10)},SS:function(e,t){return o(s.s(e,t)/60*100)},SSS:function(e,t){return o(s.s(e,t)/60*1e3,3)},Z:function(e){var t=-e.getTimezoneOffset();return(t>=0?"+":"-")+o(parseInt(t/60))+":"+o(t%60)},ZZ:function(e){var t=-e.getTimezoneOffset();return(t>=0?"+":"-")+o(parseInt(t/60))+o(t%60)}},u=new i(s);e.exports=function(e,t){return u.run(t,[e,e._useUTC])}},997:e=>{"use strict";e.exports=["#eee","#d6e685","#8cc665","#44a340","#1e6823"]},783:(e,t,n)=>{"use strict";var r=n(997);e.exports=function(e){var t={last_year:0,longest_streak:-1,longest_streak_range:[],current_streak:0,current_streak_range:[],weeks:[],days:[],last_contributed:null},n=[],a=function(){t.current_streak>t.longest_streak&&(t.longest_streak=t.current_streak,t.longest_streak_range[0]=t.current_streak_range[0],t.longest_streak_range[1]=t.current_streak_range[1])};return e.split("\n").slice(2).map((function(e){return e.trim()})).forEach((function(e){if(e.startsWith("<g transform"))return n.length&&t.weeks.push(n)&&(n=[]);var o=e.match(/data-level="([0-9\-]+)"/i),i=e.match(/data-date="([0-9\-]+)"/),s=e.match(/data-count="([0-9]+)"/);if(o=o&&o[1],i=i&&i[1],s=s&&+s[1],o){var u={fill:r[o],date:new Date(i),count:s,level:o};0===t.current_streak&&(t.current_streak_range[0]=u.date),u.count?(++t.current_streak,t.last_year+=u.count,t.last_contributed=u.date,t.current_streak_range[1]=u.date):(a(),t.current_streak=0),n.push(u),t.days.push(u)}})),a(),t}},771:(e,t,n)=>{"use strict";var r=n(783),a=n(478),o=n(1),i=n(280),s="MMM D, YYYY",u="MMMM D",c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function l(e){return e+" "+(1===e?"day":"days")}e.exports=function(e,t,n){e=a(e),(n=n||{}).summary_text=n.summary_text||'Summary of pull requests, issues opened, and commits made by <a href="https://github.com/'+t+'" target="blank">@'+t+"</a>",n.cache=1e3*(n.cache||86400),!1===n.global_stats&&(e.style.minHeight="175px");var d={content:"gh_calendar_content."+t,expire_at:"gh_calendar_expire."+t};return n.proxy=n.proxy||function(e){return fetch("https://api.bloggify.net/gh-calendar/?username="+e).then((function(e){return e.text()}))},n.getCalendar=n.getCalendar||function(e){if(n.cache&&Date.now()<+localStorage.getItem(d.expire_at)){var t=localStorage.getItem(d.content);if(t)return Promise.resolve(t)}return n.proxy(e).then((function(e){return n.cache&&(localStorage.setItem(d.content,e),localStorage.setItem(d.expire_at,Date.now()+n.cache)),e}))},function d(){return n.getCalendar(t).then((function(t){var p=document.createElement("div");p.innerHTML=t;var g=p.querySelector(".js-yearly-contributions");if(a(".position-relative h2",g).remove(),g.querySelector("include-fragment"))setTimeout(d,500);else{if(!0===n.responsive){var f=g.querySelector("svg.js-calendar-graph-svg"),b=f.getAttribute("width"),m=f.getAttribute("height");f.removeAttribute("height"),f.setAttribute("width","100%"),f.setAttribute("viewBox","0 0 "+b+" "+m)}if(!1!==n.global_stats){var h=r(a("svg",g).outerHTML),x=h.current_streak?i(h.current_streak_range[0],u)+" &ndash; "+i(h.current_streak_range[1],u):h.last_contributed?"Last contributed in "+i(h.last_contributed,u)+".":"Rock - Hard Place",y=h.longest_streak?i(h.longest_streak_range[0],u)+" &ndash; "+i(h.longest_streak_range[1],u):h.last_contributed?"Last contributed in "+i(h.last_contributed,u)+".":"Rock - Hard Place",v=a("<div>",{class:"contrib-column contrib-column-first table-column",html:'<span class="text-muted">Contributions in the last year</span>\n                               <span class="contrib-number">'+h.last_year+' total</span>\n                               <span class="text-muted">'+i(o.add(o.subtract(new Date,1,"year"),1,"day"),s)+" &ndash; "+i(new Date,s)+"</span>"}),M=a("<div>",{class:"contrib-column table-column",html:'<span class="text-muted">Longest streak</span>\n                               <span class="contrib-number">'+l(h.longest_streak)+'</span>\n                               <span class="text-muted">'+y+"</span>"}),_=a("<div>",{class:"contrib-column table-column",html:'<span class="text-muted">Current streak</span>\n                               <span class="contrib-number">'+l(h.current_streak)+'</span>\n                               <span class="text-muted">'+x+"</span>"});g.appendChild(v),g.appendChild(M),g.appendChild(_)}e.innerHTML=g.innerHTML,!0===n.tooltips&&function(e){var t=document.createElement("div");t.classList.add("day-tooltip"),e.appendChild(t),e.querySelectorAll("rect.day").forEach((function(e){e.addEventListener("mouseenter",(function(e){var n=e.target.getAttribute("data-count");"0"===n?n="No contributions":"1"===n?n="1 contribution":n+=" contributions";var r=new Date(e.target.getAttribute("data-date")),a=c[r.getUTCMonth()]+" "+r.getUTCDate()+", "+r.getUTCFullYear();t.innerHTML="<strong>"+n+"</strong> on "+a,t.classList.add("is-visible");var o=e.target.getBoundingClientRect(),i=o.left+window.pageXOffset-t.offsetWidth/2+o.width/2,s=o.bottom+window.pageYOffset-t.offsetHeight-2*o.height;t.style.top=s+"px",t.style.left=i+"px"})),e.addEventListener("mouseleave",(function(){t.classList.remove("is-visible")}))}))}(e)}})).catch((function(e){return console.error(e)}))}()}},604:e=>{"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e,n){var r=0,a=[];if(Array.isArray(e))for(;r<e.length&&!1!==n(e[r],r,e);++r);else if("object"===(void 0===e?"undefined":t(e))&&null!==e)for(a=Object.keys(e);r<a.length&&!1!==n(e[a[r]],a[r],e);++r);}},509:e=>{e.exports=["January","February","March","April","May","June","July","August","September","October","November","December"],e.exports.abbr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e.exports.it=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],e.exports.abbr.it=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],e.exports.de=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],e.exports.abbr.de=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},4:(e,t,n)=>{"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(701),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.obj=t||{},this.re=new RegExp("^("+Object.keys(t).map(a).join("|")+")")}return r(e,[{key:"run",value:function(e,t){var n="";t=t||[];do{var r=e.match(this.re),a=r&&r[1],o=a||e.charAt(0);if(a){var i=this.obj[a];"function"==typeof i&&(i=i.apply(this,t)),n+=i}else n+=o;e=e.substring(o.length)}while(e);return n}}]),e}();function i(e,t,n){return new o(t).run(e,n)}i.Parser=o,e.exports=i},701:e=>{"use strict";function t(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}t.proto=function(){return RegExp.escape=t,t},e.exports=t},698:e=>{e.exports=function(e,t,n){var r=[],a=e.length;if(0===a)return r;var o=t<0?Math.max(0,t+a):t||0;for(void 0!==n&&(a=n<0?n+a:n);a-- >o;)r[a-o]=e[a];return r}}}]);