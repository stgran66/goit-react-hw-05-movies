/*! For license information please see 881.1e4c90a2.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{110:function(e,t,r){"use strict";var n=r(309),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?a:s[e.$$typeof]||i}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(h){var i=p(r);i&&i!==h&&e(t,i,n)}var a=u(r);f&&(a=a.concat(f(r)));for(var s=c(t),m=c(r),g=0;g<a.length;++g){var y=a[g];if(!o[y]&&(!n||!n[y])&&(!m||!m[y])&&(!s||!s[y])){var v=d(r,y);try{l(t,y,v)}catch(S){}}}}return t}},746:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function C(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case o:case s:case a:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case m:case c:return e;default:return t}}case i:return t}}}function w(e){return C(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=o,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=s,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||C(e)===u},t.isConcurrentMode=w,t.isContextConsumer=function(e){return C(e)===l},t.isContextProvider=function(e){return C(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return C(e)===d},t.isFragment=function(e){return C(e)===o},t.isLazy=function(e){return C(e)===g},t.isMemo=function(e){return C(e)===m},t.isPortal=function(e){return C(e)===i},t.isProfiler=function(e){return C(e)===s},t.isStrictMode=function(e){return C(e)===a},t.isSuspense=function(e){return C(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===f||e===s||e===a||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===S||e.$$typeof===b||e.$$typeof===y)},t.typeOf=C},309:function(e,t,r){"use strict";e.exports=r(746)},372:function(e,t){"use strict";var r=60103,n=60106,i=60107,o=60108,a=60114,s=60109,c=60110,l=60112,u=60113,f=60120,d=60115,p=60116,h=60121,m=60122,g=60117,y=60129,v=60131;if("function"===typeof Symbol&&Symbol.for){var S=Symbol.for;r=S("react.element"),n=S("react.portal"),i=S("react.fragment"),o=S("react.strict_mode"),a=S("react.profiler"),s=S("react.provider"),c=S("react.context"),l=S("react.forward_ref"),u=S("react.suspense"),f=S("react.suspense_list"),d=S("react.memo"),p=S("react.lazy"),h=S("react.block"),m=S("react.server.block"),g=S("react.fundamental"),y=S("react.debug_trace_mode"),v=S("react.legacy_hidden")}function b(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case a:case o:case u:case f:return e;default:switch(e=e&&e.$$typeof){case c:case l:case p:case d:case s:return e;default:return t}}case n:return t}}}t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===a||e===y||e===o||e===u||e===f||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===d||e.$$typeof===s||e.$$typeof===c||e.$$typeof===l||e.$$typeof===g||e.$$typeof===h||e[0]===m)},t.typeOf=b},441:function(e,t,r){"use strict";e.exports=r(372)},613:function(e){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(i=r?r.call(n,u,f,l):void 0)||void 0===i&&u!==f)return!1}return!0}},444:function(e,t,r){"use strict";r.d(t,{ZP:function(){return Ie}});var n=r(441),i=r(791),o=r(613),a=r.n(o);var s=function(e){function t(e,n,c,l,d){for(var p,h,m,g,b,w=0,k=0,A=0,_=0,E=0,I=0,$=m=p=0,j=0,F=0,L=0,H=0,W=c.length,z=W-1,M="",B="",U="",K="";j<W;){if(h=c.charCodeAt(j),j===z&&0!==k+_+A+w&&(0!==k&&(h=47===k?10:47),_=A=w=0,W++,z++),0===k+_+A+w){if(j===z&&(0<F&&(M=M.replace(f,"")),0<M.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:M+=c.charAt(j)}h=59}switch(h){case 123:for(p=(M=M.trim()).charCodeAt(0),m=1,H=++j;j<W;){switch(h=c.charCodeAt(j)){case 123:m++;break;case 125:m--;break;case 47:switch(h=c.charCodeAt(j+1)){case 42:case 47:e:{for($=j+1;$<z;++$)switch(c.charCodeAt($)){case 47:if(42===h&&42===c.charCodeAt($-1)&&j+2!==$){j=$+1;break e}break;case 10:if(47===h){j=$+1;break e}}j=$}}break;case 91:h++;case 40:h++;case 34:case 39:for(;j++<z&&c.charCodeAt(j)!==h;);}if(0===m)break;j++}if(m=c.substring(H,j),0===p&&(p=(M=M.replace(u,"").trim()).charCodeAt(0)),64===p){switch(0<F&&(M=M.replace(f,"")),h=M.charCodeAt(1)){case 100:case 109:case 115:case 45:F=n;break;default:F=R}if(H=(m=t(n,F,m,h,d+1)).length,0<D&&(b=s(3,m,F=r(R,M,L),n,T,O,H,h,d,l),M=F.join(""),void 0!==b&&0===(H=(m=b.trim()).length)&&(h=0,m="")),0<H)switch(h){case 115:M=M.replace(C,a);case 100:case 109:case 45:m=M+"{"+m+"}";break;case 107:m=(M=M.replace(y,"$1 $2"))+"{"+m+"}",m=1===P||2===P&&o("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=M+m,112===l&&(B+=m,m="")}else m=""}else m=t(n,r(n,M,L),m,l,d+1);U+=m,m=L=F=$=p=0,M="",h=c.charCodeAt(++j);break;case 125:case 59:if(1<(H=(M=(0<F?M.replace(f,""):M).trim()).length))switch(0===$&&(p=M.charCodeAt(0),45===p||96<p&&123>p)&&(H=(M=M.replace(" ",":")).length),0<D&&void 0!==(b=s(1,M,n,e,T,O,B.length,l,d,l))&&0===(H=(M=b.trim()).length)&&(M="\0\0"),p=M.charCodeAt(0),h=M.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){K+=M+c.charAt(j);break}default:58!==M.charCodeAt(H-1)&&(B+=i(M,p,h,M.charCodeAt(2)))}L=F=$=p=0,M="",h=c.charCodeAt(++j)}}switch(h){case 13:case 10:47===k?k=0:0===1+p&&107!==l&&0<M.length&&(F=1,M+="\0"),0<D*N&&s(0,M,n,e,T,O,B.length,l,d,l),O=1,T++;break;case 59:case 125:if(0===k+_+A+w){O++;break}default:switch(O++,g=c.charAt(j),h){case 9:case 32:if(0===_+w+k)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===_+k+w&&(F=L=1,g="\f"+g);break;case 108:if(0===_+k+w+x&&0<$)switch(j-$){case 2:112===E&&58===c.charCodeAt(j-3)&&(x=E);case 8:111===I&&(x=I)}break;case 58:0===_+k+w&&($=j);break;case 44:0===k+A+_+w&&(F=1,g+="\r");break;case 34:case 39:0===k&&(_=_===h?0:0===_?h:_);break;case 91:0===_+k+A&&w++;break;case 93:0===_+k+A&&w--;break;case 41:0===_+k+w&&A--;break;case 40:if(0===_+k+w){if(0===p)if(2*E+3*I===533);else p=1;A++}break;case 64:0===k+A+_+w+$+m&&(m=1);break;case 42:case 47:if(!(0<_+w+A))switch(k){case 0:switch(2*h+3*c.charCodeAt(j+1)){case 235:k=47;break;case 220:H=j,k=42}break;case 42:47===h&&42===E&&H+2!==j&&(33===c.charCodeAt(H+2)&&(B+=c.substring(H,j+1)),g="",k=0)}}0===k&&(M+=g)}I=E,E=h,j++}if(0<(H=B.length)){if(F=n,0<D&&(void 0!==(b=s(2,B,F,e,T,O,H,l,d,l))&&0===(B=b).length))return K+B+U;if(B=F.join(",")+"{"+B+"}",0!==P*x){switch(2!==P||o(B,2)||(x=0),x){case 111:B=B.replace(S,":-moz-$1")+B;break;case 112:B=B.replace(v,"::-webkit-input-$1")+B.replace(v,"::-moz-$1")+B.replace(v,":-ms-input-$1")+B}x=0}}return K+B+U}function r(e,t,r){var i=t.trim().split(m);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<o;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<o;++s)for(var l=0;l<a;++l)t[c++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var a=e+";",s=2*t+3*r+4*n;if(944===s){e=a.indexOf(":",9)+1;var c=a.substring(e,a.length-1).trim();return c=a.substring(0,e).trim()+c+";",1===P||2===P&&o(c,1)?"-webkit-"+c+c:c}if(0===P||2===P&&!o(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(E,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(c=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+c+a;case 1005:return p.test(a)?a.replace(d,":-webkit-")+a.replace(d,":-moz-")+a:a;case 1e3:switch(t=(c=a.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=a.replace(b,"tb");break;case 232:c=a.replace(b,"tb-rl");break;case 220:c=a.replace(b,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+c+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(c=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:a=a.replace(c,"-webkit-"+c)+";"+a;break;case 207:case 102:a=a.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(c,"-webkit-"+c)+";"+a.replace(c,"-ms-"+c+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return c=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+c+"-ms-flex-"+c+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(k,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(k,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===_.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):a.replace(c,"-webkit-"+c)+a.replace(c,"-moz-"+c.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+n&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+a}return a}function o(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),$(2!==t?n:n.replace(A,"$1"),r,t)}function a(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,o,a,s,c,u){for(var f,d=0,p=t;d<D;++d)switch(f=I[d].call(l,e,p,r,n,i,o,a,s,c,u)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&($=null,e?"function"!==typeof e?P=1:(P=2,$=e):P=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<D){var i=s(-1,r,n,n,T,O,0,0,0,0);void 0!==i&&"string"===typeof i&&(r=i)}var o=t(R,n,r,0,0);return 0<D&&(void 0!==(i=s(-2,o,n,n,T,O,o.length,0,0,0))&&(o=i)),"",x=0,O=T=1,o}var u=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,S=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,k=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,_=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,O=1,T=1,x=0,P=1,R=[],I=[],D=0,$=null,N=0;return l.use=function e(t){switch(t){case void 0:case null:D=I.length=0;break;default:if("function"===typeof t)I[D++]=t;else if("object"===typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else N=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},c={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=r(110),d=r.n(f);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},m=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,n.typeOf)(e)},g=Object.freeze([]),y=Object.freeze({});function v(e){return"function"==typeof e}function S(e){return e.displayName||e.name||"Component"}function b(e){return e&&"string"==typeof e.styledComponentId}var C="undefined"!=typeof process&&({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",w="undefined"!=typeof window&&"HTMLElement"in window,k=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY));function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var _=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&A(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),E=new Map,O=new Map,T=1,x=function(e){if(E.has(e))return E.get(e);for(;O.has(T);)T++;var t=T++;return E.set(e,t),O.set(t,e),t},P=function(e){return O.get(e)},R=function(e,t){t>=T&&(T=t+1),E.set(e,t),O.set(t,e)},I="style["+C+'][data-styled-version="5.3.6"]',D=new RegExp("^"+C+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},N=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(D);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(R(l,c),$(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},j=function(){return r.nc},F=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(C))return n}}(r),o=void 0!==i?i.nextSibling:null;n.setAttribute(C,"active"),n.setAttribute("data-styled-version","5.3.6");var a=j();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},L=function(){function e(e){var t=this.element=F(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}A(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),H=function(){function e(e){var t=this.element=F(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),z=w,M={isServer:!w,useCSSOMInjection:!k},B=function(){function e(e,t,r){void 0===e&&(e=y),void 0===t&&(t={}),this.options=p({},M,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&w&&z&&(z=!1,function(e){for(var t=document.querySelectorAll(I),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(C)&&(N(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return x(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(p({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new W(i):n?new L(i):new H(i),new _(e)));var e,t,r,n,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(x(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(x(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(x(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var o=P(i);if(void 0!==o){var a=e.names.get(o),s=t.getGroup(i);if(a&&s&&a.size){var c=C+".g"+i+'[id="'+o+'"]',l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),U=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function V(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=K(t%52)+r;return(K(t%52)+r).replace(U,"$1-$2")}var G=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Y=function(e){return G(5381,e)};function q(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(v(r)&&!b(r))return!1}return!0}var X=Y("5.3.6"),Z=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&q(e),this.componentId=t,this.baseHash=G(X,t),this.baseStyle=r,B.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var o=me(this.rules,e,t,r).join(""),a=V(G(this.baseHash,o)>>>0);if(!t.hasNameForId(n,a)){var s=r(o,"."+a,void 0,n);t.insertRules(n,a,s)}i.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,l=G(this.baseHash,r.hash),u="",f=0;f<c;f++){var d=this.rules[f];if("string"==typeof d)u+=d;else if(d){var p=me(d,e,t,r),h=Array.isArray(p)?p.join(""):p;l=G(l,h+f),u+=h}}if(u){var m=V(l>>>0);if(!t.hasNameForId(n,m)){var g=r(u,"."+m,void 0,n);t.insertRules(n,m,g)}i.push(m)}}return i.join(" ")},e}(),J=/^\s*\/\/.*$/gm,Q=[":","[",".","#"];function ee(e){var t,r,n,i,o=void 0===e?y:e,a=o.options,c=void 0===a?y:a,l=o.plugins,u=void 0===l?g:l,f=new s(c),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,o,a,s,c,l,u,f){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),h=function(e,n,o){return 0===n&&-1!==Q.indexOf(o[r.length])||o.match(i)?e:"."+t};function m(e,o,a,s){void 0===s&&(s="&");var c=e.replace(J,""),l=o&&a?a+" "+o+" { "+c+" }":c;return t=s,r=o,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),f(a||!o?"":o,l)}return f.use([].concat(u,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,h))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||A(15),G(e,t.name)}),5381).toString():"",m}var te=i.createContext(),re=(te.Consumer,i.createContext()),ne=(re.Consumer,new B),ie=ee();function oe(){return(0,i.useContext)(te)||ne}function ae(){return(0,i.useContext)(re)||ie}function se(e){var t=(0,i.useState)(e.stylisPlugins),r=t[0],n=t[1],o=oe(),s=(0,i.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),c=(0,i.useMemo)((function(){return ee({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,i.useEffect)((function(){a()(r,e.stylisPlugins)||n(e.stylisPlugins)}),[e.stylisPlugins]),i.createElement(te.Provider,{value:s},i.createElement(re.Provider,{value:c},e.children))}var ce=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=ie);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return A(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ie),this.name+e.hash},e}(),le=/([A-Z])/,ue=/([A-Z])/g,fe=/^ms-/,de=function(e){return"-"+e.toLowerCase()};function pe(e){return le.test(e)?e.replace(ue,de).replace(fe,"-ms-"):e}var he=function(e){return null==e||!1===e||""===e};function me(e,t,r,n){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)""!==(i=me(e[a],t,r,n))&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}return he(e)?"":b(e)?"."+e.styledComponentId:v(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:me(e(t),t,r,n):e instanceof ce?r?(e.inject(r,n),e.getName(n)):e:m(e)?function e(t,r){var n,i,o=[];for(var a in t)t.hasOwnProperty(a)&&!he(t[a])&&(Array.isArray(t[a])&&t[a].isCss||v(t[a])?o.push(pe(a)+":",t[a],";"):m(t[a])?o.push.apply(o,e(t[a],a)):o.push(pe(a)+": "+(n=a,(null==(i=t[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in c?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(o,["}"]):o}(e):e.toString();var l}var ge=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ye(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return v(e)||m(e)?ge(me(h(g,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ge(me(h(e,r)))}new Set;var ve=function(e,t,r){return void 0===r&&(r=y),e.theme!==r.theme&&e.theme||t||r.theme},Se=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function Ce(e){return e.replace(Se,"-").replace(be,"")}var we=function(e){return V(Y(e)>>>0)};function ke(e){return"string"==typeof e&&!0}var Ae=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},_e=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ee(e,t,r){var n=e[r];Ae(t)&&Ae(n)?Oe(n,t):e[r]=t}function Oe(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,o=r;i<o.length;i++){var a=o[i];if(Ae(a))for(var s in a)_e(s)&&Ee(e,a[s],s)}return e}var Te=i.createContext();Te.Consumer;var xe={};function Pe(e,t,r){var n=b(e),o=!ke(e),a=t.attrs,s=void 0===a?g:a,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":Ce(e);xe[r]=(xe[r]||0)+1;var n=r+"-"+we("5.3.6"+r+xe[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,f=t.displayName,h=void 0===f?function(e){return ke(e)?"styled."+e:"Styled("+S(e)+")"}(e):f,m=t.displayName&&t.componentId?Ce(t.displayName)+"-"+t.componentId:t.componentId||l,C=n&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,w=t.shouldForwardProp;n&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(r,n,i){return e.shouldForwardProp(r,n,i)&&t.shouldForwardProp(r,n,i)}:e.shouldForwardProp);var k,A=new Z(r,m,n?e.componentStyle:void 0),_=A.isStatic&&0===s.length,E=function(e,t){return function(e,t,r,n){var o=e.attrs,a=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,f=e.styledComponentId,d=e.target,h=function(e,t,r){void 0===e&&(e=y);var n=p({},t,{theme:e}),i={};return r.forEach((function(e){var t,r,o,a=e;for(t in v(a)&&(a=a(n)),a)n[t]=i[t]="className"===t?(r=i[t],o=a[t],r&&o?r+" "+o:r||o):a[t]})),[n,i]}(ve(t,(0,i.useContext)(Te),s)||y,t,o),m=h[0],g=h[1],S=function(e,t,r,n){var i=oe(),o=ae();return t?e.generateAndInjectStyles(y,i,o):e.generateAndInjectStyles(r,i,o)}(a,n,m),b=r,C=g.$as||t.$as||g.as||t.as||d,w=ke(C),k=g!==t?p({},t,{},g):t,A={};for(var _ in k)"$"!==_[0]&&"as"!==_&&("forwardedAs"===_?A.as=k[_]:(l?l(_,u,C):!w||u(_))&&(A[_]=k[_]));return t.style&&g.style!==t.style&&(A.style=p({},t.style,{},g.style)),A.className=Array.prototype.concat(c,f,S!==f?S:null,t.className,g.className).filter(Boolean).join(" "),A.ref=b,(0,i.createElement)(C,A)}(k,e,t,_)};return E.displayName=h,(k=i.forwardRef(E)).attrs=C,k.componentStyle=A,k.displayName=h,k.shouldForwardProp=w,k.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):g,k.styledComponentId=m,k.target=n?e.target:e,k.withComponent=function(e){var n=t.componentId,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(t,["componentId"]),o=n&&n+"-"+(ke(e)?e:Ce(S(e)));return Pe(e,p({},i,{attrs:C,componentId:o}),r)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=n?Oe({},e.defaultProps,t):t}}),k.toString=function(){return"."+k.styledComponentId},o&&d()(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var Re=function(e){return function e(t,r,i){if(void 0===i&&(i=y),!(0,n.isValidElementType)(r))return A(1,String(r));var o=function(){return t(r,i,ye.apply(void 0,arguments))};return o.withConfig=function(n){return e(t,r,p({},i,{},n))},o.attrs=function(n){return e(t,r,p({},i,{attrs:Array.prototype.concat(i.attrs,n).filter(Boolean)}))},o}(Pe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Re[e]=Re(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=q(e),B.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,r,n){var i=n(me(this.rules,t,r,n).join(""),""),o=this.componentId+e;r.insertRules(o,o,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&B.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=j();return"<style "+[r&&'nonce="'+r+'"',C+'="true"','data-styled-version="5.3.6"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?A(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return A(2);var r=((t={})[C]="",t["data-styled-version"]="5.3.6",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=j();return n&&(r.nonce=n),[i.createElement("style",p({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new B({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?A(2):i.createElement(se,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return A(3)}}();var Ie=Re},168:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=881.1e4c90a2.chunk.js.map