!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("amazon-cognito-identity-js"),require("babel-polyfill"),require("aws-sdk")):"function"==typeof define&&define.amd?define(["amazon-cognito-identity-js","babel-polyfill","aws-sdk"],n):"object"==typeof exports?exports["aws-cognito-promises"]=n(require("amazon-cognito-identity-js"),require("babel-polyfill"),require("aws-sdk")):e["aws-cognito-promises"]=n(e["amazon-cognito-identity-js"],e["babel-polyfill"],e["aws-sdk"])}("undefined"!=typeof self?self:this,function(e,n,t){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getCurrentUserSession=n.setCurrentUserSession=n.getUser=n.getUserPool=n.get=n.set=void 0;var o=t(6),r=t(1),i=void 0,s=void 0,u=void 0;n.set=function(e){i=e,o.Config.region=i.region,o.Config.credentials=new o.CognitoIdentityCredentials({IdentityPoolId:i.IdentityPoolId}),s=new r.CognitoUserPool({UserPoolId:i.UserPoolId,ClientId:i.ClientId})},n.get=function(){return i},n.getUserPool=function(){return s},n.getUser=function(){return s.getCurrentUser()},n.setCurrentUserSession=function(e){u=e},n.getCurrentUserSession=function(){return u}},function(n,t){n.exports=e},function(e,n,t){t(3),e.exports=t(4)},function(e,t){e.exports=n},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.config=n.completeNewPassword=n.changePassword=n.forgotPassword=n.getSession=n.signOut=n.signIn=n.confirmation=n.register=void 0;var r=t(5),i=o(r),s=t(7),u=o(s),a=t(8),f=o(a),c=t(9),l=o(c),d=t(10),g=o(d),P=t(11),p=o(P),w=t(12),v=o(w),m=t(13),U=o(m),y=t(0),b=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(y);n.register=i.default,n.confirmation=u.default,n.signIn=f.default,n.signOut=l.default,n.getSession=g.default,n.forgotPassword=p.default,n.changePassword=v.default,n.completeNewPassword=U.default,n.config=b},function(e,n,t){"use strict";function o(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t){var s=(0,i.getUserPool)(),u=[].concat(o(t.map(function(e){return new r.CognitoUserAttribute(e)})),[new r.CognitoUserAttribute({Name:"email",Value:e})]);return new Promise(function(t,o){s.signUp(e,n,u,null,function(e,n){e?o(e):t(n)})})};var r=t(1),i=t(0)},function(e,n){e.exports=t},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t={Username:e,Pool:(0,r.getUserPool)()},i=new o.CognitoUser(t);return new Promise(function(e,t){i.confirmRegistration(n,!0,function(n,o){n?t(n):e(o)})})};var o=t(1),r=t(0)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t={Username:e,Password:n},i=new o.AuthenticationDetails(t),s={Username:e,Pool:(0,r.getUserPool)()},u=new o.CognitoUser(s);return new Promise(function(e,n){u.authenticateUser(i,{onSuccess:function(n){e(n)},onFailure:function(e){n(e)},newPasswordRequired:function(e,t){(0,r.setCurrentUserSession)(u),n({code:"PasswordResetRequiredException",message:"New Password Required",newPasswordRequired:!0})}})})};var o=t(1),r=t(0)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=(0,o.getUser)();if(!e)throw new Error("no cognitiveUser value");e.signOut(),Promise.resolve()};var o=t(0)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=(0,o.getUser)();if(e)return new Promise(function(n,t){e.getSession(function(e,o){e?t(e):n(o)})});throw new Error("no cognitiveUser value")};var o=t(0)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n={Username:e,Pool:(0,r.getUserPool)()},t=new o.CognitoUser(n);return new Promise(function(e,n){t.forgotPassword({onSuccess:function(n){e(n)},onFailure:function(e){n(e)}})})};var o=t(1),r=t(0)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t){var i={Username:e,Pool:(0,r.getUserPool)()},s=new o.CognitoUser(i);return new Promise(function(e,o){s.confirmPassword(n,t,{onSuccess:function(n){e(n)},onFailure:function(e){o(e)}})})};var o=t(1),r=t(0)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=(0,o.getCurrentUserSession)();return new Promise(function(e,o){r.completeNewPasswordChallenge(n,t,{onSuccess:function(n){e(n)},onFailure:function(e){o(e)}})})};var o=t(0)}])});
//# sourceMappingURL=index.js.map