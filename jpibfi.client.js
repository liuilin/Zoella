var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function t(e,n,i){function r(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var n=e[a][1][t];return r(n?n:t)},c,c.exports,t,e,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.siteTitle,r=void 0===n?"":n;i(this,t),this.desc_funcs={img_title:function(t){return t.attr("title")},img_alt:function(t){return t.attr("alt")},post_title:function(t){return t.attr("data-jpibfi-post-title")},post_excerpt:function(t){return t.attr("data-jpibfi-post-excerpt")},img_description:function(t){return t.attr("data-jpibfi-description")},img_caption:function(t){return t.attr("data-jpibfi-caption")},site_title:function(){return r}}}return r(t,[{key:"getDescription",value:function(t,e){for(var n="",i=0;i<e.length&&!n;i++)n=this.desc_funcs[e[i]](t);return n||""}}]),t}();n["default"]=o},{}],2:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=t("./link-generator"),s=i(a),u=function(){function t(e,n){r(this,t),this.$=e,this.settings=n,this.linkGenerator=new s["default"](n),this.$element=this.$("<a />",{target:"_blank","class":"pinit-button "+n.pin_image});var i="default"===n.pin_image?"jpibfi-icon-"+n.pin_image_icon:"";this.$element.html('<span class="'+i+'"></span>'),"default"===n.pin_image&&this.$element.addClass("jpibfi-size-"+n.pin_image_size+" jpibfi-button-"+n.pin_image_button),this.size={height:n.pinImageHeight,width:n.pinImageWidth}}return o(t,[{key:"createButton",value:function(t){var e=this.$element.clone(!1);return e.attr("href",this.linkGenerator.generate(t)).click(function(t){t.preventDefault(),t.stopPropagation(),"#"!==t.currentTarget.href.slice(-1)&&window.open(t.currentTarget.href,"mw"+t.timeStamp,"left=20,top=20,width=500,height=500,toolbar=1,resizable=0")}),{$element:e,size:this.size}}}]),t}();n["default"]=u},{"./link-generator":5}],3:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){var n=this;i(this,t),this.settings=e,this.disabledClasses=this.createClassList(e.disabled_classes),this.enabledClasses=this.createClassList(e.enabled_classes),this.updateSizeConstraints(),window.addEventListener("resize",function(){return n.updateSizeConstraints()},!1)}return r(t,[{key:"createClassList",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split(";").filter(function(t){return!!t})}},{key:"imageEligible",value:function(t){return this.enabledClasses.every(function(e){return t.hasClass(e)})&&!this.disabledClasses.some(function(e){return t.hasClass(e)})&&this.imageSizeIsOk(t)}},{key:"imageSizeIsOk",value:function(t){var e=t[0].clientWidth,n=t[0].clientHeight;return e>=this.minWidth&&n>=this.minHeight}},{key:"updateSizeConstraints",value:function(){this.minWidth=window.outerWidth<768?this.settings.min_image_width_small:this.settings.min_image_width,this.minHeight=window.outerWidth<768?this.settings.min_image_height_small:this.settings.min_image_height}}]),t}();n["default"]=o},{}],4:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=t("./show-on-hover-strategy"),s=i(a),u=t("./show-on-scroll-strategy"),l=i(u),c=function(){function t(e,n,i){r(this,t),this.settings=n,this.$=e,this.logger=i}return o(t,[{key:"init",value:function(){this.showStrategy=this.getStrategy(),this.showStrategy.start()}},{key:"getStrategy",value:function(){var t=null;return new(t="hover"===this.settings.show_button||!this.settings.isTouchDevice&&"always_touch"===this.settings.show_button?s["default"]:l["default"])(this.$,this.settings,this.logger)}}]),t}();n["default"]=c},{"./show-on-hover-strategy":7,"./show-on-scroll-strategy":8}],5:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=t("./../common/description-helper"),s=i(a),u=function(){function t(e){r(this,t),this.descriptionHelper=new s["default"]({siteTitle:e.siteTitle}),this.pinLinkedImages=e.pinLinkedImages,this.description_option=e.description_option,this.desc_funcs={img_title:function(t){return t.attr("title")},img_alt:function(t){return t.attr("alt")},post_title:function(t){return t.attr("data-jpibfi-post-title")},img_description:function(t){return t.attr("data-jpibfi-description")},img_caption:function(t){return t.attr("data-jpibfi-caption")},site_title:function(){return e.siteTitle}}}return o(t,[{key:"getDescription",value:function(t){return this.descriptionHelper.getDescription(t,this.description_option)}},{key:"getImage",value:function(t){var e=t.prop?t.prop("src"):t.attr("src");if(!this.pinLinkedImages)return e;var n=t.closest("a");if(0===n.length)return e;var i=e.split(".").pop(),r=n.attr("href"),o=r.split(".").pop();return o.toLowerCase()===i.toLowerCase()?r:e}},{key:"getUrl",value:function(t){return t.attr("data-jpibfi-post-url")||window.location.href}},{key:"generate",value:function(t){var e=encodeURIComponent(this.getDescription(t)),n=encodeURIComponent(this.getUrl(t)),i=encodeURIComponent(this.getImage(t));return"http://pinterest.com/pin/create/bookmarklet/?is_video=false&url="+n+"&media="+i+"&description="+e}}]),t}();n["default"]=u},{"./../common/description-helper":1}],6:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t,e,n,i){return t.top+i.top},a=function(t,e,n,i){return t.left+i.left},s=function(t,e,n,i){return e.top-n.height-i.bottom},u=function(t,e,n,i){return e.left-i.right-n.width},l=function(t,e,n){return t.top+((e.top-t.top)/2-n.height/2)},c=function(t,e,n){return t.left+((e.left-t.left)/2-n.width/2)},f=function(){function t(e,n){i(this,t),this.topF=e,this.leftF=n}return r(t,[{key:"calculate",value:function(t,e,n,i){return{top:this.topF(t,e,n,i),left:this.leftF(t,e,n,i)}}}]),t}(),h=function(){function t(e,n){i(this,t),this.margins=n,this.positionCalculator=this.getPositionCalculator(e)}return r(t,[{key:"getPositionCalculator",value:function(t){switch(t){case"top-left":return new f(o,a);case"top-right":return new f(o,u);case"bottom-left":return new f(s,a);case"bottom-right":return new f(s,u);case"center":default:return new f(l,c)}}},{key:"calculatePosition",value:function(t,e,n){return this.positionCalculator.calculate(t,e,n,this.margins)}}]),t}();n["default"]=h},{}],7:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=t("./show-strategy"),l=i(u),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"init",value:function(){var t=this,e=function(){return t.$(".jpibfi").closest("div").addClass("jpibfi_container")};e()}},{key:"start",value:function(){var t=this;this.init();var e="data-jpibfi-timeout",n=0,i=function(e){return t.$("a.pinit-button["+t.indexerAttr+'="'+e+'"]')},r=this;r.$(document).delegate(this.settings.image_selector,"mouseenter",function(){var t=r.$(this);if(r.imageFilter.imageEligible(t)){t.addClass("pinit-hover");var o=t.attr(r.indexerAttr);o||(o=n++,t.attr(r.indexerAttr,o));var a=i(o);0===a.length?!function(){var n=r.buttonGenerator.createButton(t),i=n.$element,a=n.size,s=t.offset(),u={top:s.top+t[0].clientHeight,left:s.left+t[0].clientWidth},l=r.positioner.calculatePosition(s,u,a);t.after(i),i.attr(r.indexerAttr,o).css("visibility","hidden").show().offset(l).css("visibility","visible").hover(function(){return clearTimeout(i.attr(e))},function(){return i.attr(e,setTimeout(function(){t.removeClass("pinit-hover"),i.remove()},100))})}():clearTimeout(a.attr(e))}}),r.$(document).delegate(this.settings.image_selector,"mouseleave",function(){var t=r.$(this),n=t.attr(r.indexerAttr);if(n){var o=i(n);o.attr(e,setTimeout(function(){t.removeClass("pinit-hover"),o.remove()},100))}})}}]),e}(l["default"]);n["default"]=c},{"./show-strategy":9}],8:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=t("./show-strategy"),l=i(u),c=function(t){function e(t,n,i){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));return a.indexer=0,a.buttonsDictionary={},a.running=!1,a}return a(e,t),s(e,[{key:"start",value:function(){var t=this,e=function(){return t.$(".jpibfi").closest("div").addClass("jpibfi_container")};e(),this.scroll();var n=function(e){var n=t.$(e),i=n.data("jpibfi-indexer");return t.$('img[data-jpibfi-indexer="'+i+'"]')};this.$(document).delegate("img["+this.indexerAttr+"], a["+this.indexerAttr+"]","mouseenter",function(){var t=n(this);t.addClass("pinit-hover");var e=t.data("jpibfi-timeoutId");e&&clearTimeout(e)}),this.$(document).delegate("img["+this.indexerAttr+"], a["+this.indexerAttr+"]","mouseleave",function(){var t=n(this),e=setTimeout(function(){t.removeClass("pinit-hover")},100);t.data("jpibfi-timeoutId",e)}),this.$(window).load(function(){return t.scroll()}),this.$(window).scroll(function(){return t.scroll()}),this.$(window).on("touchmove",function(){t.scroll()}),this.$(window).on("jpibfi-refresh-scroll",function(){t.scroll()})}},{key:"scroll",value:function(){this.running||(this.running=!0,this.refreshElements(),this.running=!1)}},{key:"elementIsVisible",value:function(t){var e=t.offset().top,n=e+t.height(),i=this.$(window).scrollTop(),r=i+this.$(window).height();return e>=i&&e<=r||n>=i&&n<=r||e<=i&&n>=i}},{key:"refreshElements",value:function(){for(var t=this.$(this.settings.image_selector),e=0;e<t.length;e++)this.processElement(this.$(t[e]))}},{key:"processElement",value:function(t){if(this.imageFilter.imageEligible(t)){var e=t.attr(this.indexerAttr);null==e&&(e=(this.indexer++).toString(),t.attr(this.indexerAttr,e));var n=this.elementIsVisible(t);if(n&&void 0===this.buttonsDictionary[e]){this.buttonsDictionary[e]=!0;var i=this.buttonGenerator.createButton(t),r=i.$element,o=i.size,a=t.offset(),s={top:a.top+t[0].clientHeight,left:a.left+t[0].clientWidth},u=this.positioner.calculatePosition(a,s,o);t.after(r),r.attr(this.indexerAttr,e).css("visibility","hidden").show().offset(u).css("visibility","visible")}else if(!n&&void 0!==this.buttonsDictionary[e]){delete this.buttonsDictionary[e];var l=this.$("a["+this.indexerAttr+'="'+e+'"]');l.remove()}}}}]),e}(l["default"]);n["default"]=c},{"./show-strategy":9}],9:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=t("./image-filter"),a=i(o),s=t("./button-generator"),u=i(s),l=t("./positioner"),c=i(l),f=function h(t,e,n){r(this,h),this.$=t,this.settings=e,this.logger=n,this.imageFilter=new a["default"](e),this.buttonGenerator=new u["default"](t,e);var i={left:e.button_margin_left,top:e.button_margin_top,right:e.button_margin_right,bottom:e.button_margin_bottom};this.positioner=new c["default"](e.button_position,i),this.indexerAttr="data-jpibfi-indexer"};n["default"]=f},{"./button-generator":2,"./image-filter":3,"./positioner":6}],10:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=t("./settings"),o=i(r),a=t("./logger"),s=i(a),u=t("./hover"),l=i(u);!function(t){var e=window.jpibfi_options,n=new o["default"](t.extend({pageUrl:document.URL,pageTitle:document.title,pageDescription:t('meta[name="description"]').attr("content")||""},e.hover)),i=new s["default"](/[?&]jpibfi_debug=/.test(location.search));i.logObject(n);var r=function(){var e=new l["default"](t,n,i);e.init()};t(document).ready(r)}(jQuery)},{"./hover":4,"./logger":11,"./settings":12}],11:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){var n=this;i(this,t);var r=e&&"undefined"!=typeof console&&"undefined"!=typeof console.log,o="undefined"!=typeof JSON&&"function"==typeof JSON.stringify;r?(this.logString=function(t){n.log(t)},this.logObject=o?function(t){n.log(JSON.stringify(t,null,4))}:function(t){return n.simplelogObject(t)}):(this.logString=function(){},this.logObject=function(){})}return r(t,[{key:"log",value:function(t){console.log("jpibfi debug: "+t)}},{key:"simplelogObject",value:function(t){var e=Object.keys(t).filter(function(e){return t.hasOwnPrototype(e)}).map(function(e){return e+": "+t[e]+"\n"}).join();this.log(e)}}]),t}();n["default"]=o},{}],12:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function o(t){var e=this;i(this,o),Object.keys(t).forEach(function(n){e[n]=t[n]}),this.isTouchDevice="ontouchstart"in window||{}.hasOwnProperty.call(navigator,"maxTouchPoints")};n["default"]=r},{}]},{},[10]);

}
/*
     FILE ARCHIVED ON 03:28:21 Feb 13, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:13:47 Apr 06, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 125.359
  exclusion.robots: 0.182
  exclusion.robots.policy: 0.165
  RedisCDXSource: 1.495
  esindex: 0.011
  LoadShardBlock: 102.307 (3)
  PetaboxLoader3.datanode: 228.478 (5)
  CDXLines.iter: 17.783 (3)
  load_resource: 250.757 (2)
  PetaboxLoader3.resolve: 90.232 (2)
*/