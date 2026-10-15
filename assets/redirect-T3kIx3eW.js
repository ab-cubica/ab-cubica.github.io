import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{d as t,h as n,r,t as i,y as a}from"./react-BmTetyfc.js";import{dt as o,ft as s,ht as c}from"./app-Cwr6QyfK.js";var l=e(a(),1),u=i(),d=o(`/`,`ru`);function f(e){for(let t of e){let e=t.toLowerCase().split(`-`)[0],n=c.find(t=>t===e);if(n)return n}return`ru`}var p=`(function () {
  var supported = ${JSON.stringify(c)};
  var tags = navigator.languages || [navigator.language];
  for (var i = 0; i < tags.length; i++) {
    var primary = String(tags[i]).toLowerCase().split('-')[0];
    if (supported.indexOf(primary) >= 0) return location.replace('/' + primary + '/');
  }
  location.replace(${JSON.stringify(d)});
})();`,m=()=>[{title:s(`ru`,`site.name`)},{httpEquiv:`refresh`,content:`0; url=${d}`},{name:`robots`,content:`noindex`}],h=n(function(){let e=t();return(0,l.useEffect)(()=>{e(o(`/`,f(navigator.languages)),{replace:!0})},[e]),(0,u.jsxs)(`div`,{"data-page":`redirect`,className:`container`,children:[(0,u.jsx)(`script`,{dangerouslySetInnerHTML:{__html:p}}),(0,u.jsx)(r,{to:d,children:s(`ru`,`redirect.link`)})]})});export{h as default,m as meta};