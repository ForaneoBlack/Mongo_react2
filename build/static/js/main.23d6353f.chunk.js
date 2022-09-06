(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(77)},50:function(e,t,n){},51:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),l=n.n(c),i=(n(50),n(51),n(39)),u=n(13),o=n(33),d=n(34),s=n(15),f=n.n(s),m=function(){function e(){Object(o.a)(this,e),this.baseUrl="https://productos-api-foraneo.herokuapp.com/api/productos/"}return Object(d.a)(e,[{key:"create",value:function(e){return f.a.post(this.baseUrl+"product/",e).then(function(e){return e.data})}},{key:"readAll",value:function(){return f.a.get(this.baseUrl).then(function(e){return e.data})}},{key:"update",value:function(e){return f.a.put(this.baseUrl+"product/"+e._id,e).then(function(e){return e.data})}},{key:"delete",value:function(e){return f.a.delete(this.baseUrl+"product/"+e).then(function(e){return e.data})}}]),e}(),p=Object(a.createContext)(),b=function(e){var t=new m,n=Object(a.useState)([]),c=Object(u.a)(n,2),l=c[0],o=c[1],d=Object(a.useState)(null),s=Object(u.a)(d,2),f=s[0],b=s[1];Object(a.useEffect)(function(){t.readAll().then(function(e){return o(e)})},[]);return r.a.createElement(p.Provider,{value:{createProduct:function(e){t.create(e).then(function(e){return o([].concat(Object(i.a)(l),[e]))})},deleteProduct:function(e){t.delete(e).then(function(){return o(l.filter(function(t){return t._id!==e}))})},findProduct:function(e){var t=l.find(function(t){return t._id===e});b(t)},updateProduct:function(e){t.update(e).then(function(t){return o(l.map(function(n){return n._id===e._id?t:e}))}),b(null)},editProduct:f,products:l}},e.children)},E=n(35),v=n(40),h=n(16),g=n(5),O=n(19),y=n(36),j=n(37),P=n(11),C=n(18),S=n(38),_=function(e){var t=e.isVisible,n=e.setIsVisible,c=Object(a.useContext)(p),l=c.createProduct,i=c.deleteProduct,o=c.editProduct,d=c.updateProduct,s={_id:null,name:"",price:0,expiry_date:null},f=Object(a.useState)(s),m=Object(u.a)(f,2),b=m[0],E=m[1];Object(a.useEffect)(function(){o&&E(o)},[o]);var v=function(e,t){E(Object(y.a)({},b,Object(O.a)({},t,e))),console.log(b)},h=r.a.createElement("div",{className:"ui-dialog-buttonpane p-clearfix"},r.a.createElement(g.a,{label:"Delete",icon:"pi pi-times",onClick:function(){o&&(i(b._id),E(s)),n(!1)}}),r.a.createElement(g.a,{label:"Save",icon:"pi pi-check",onClick:function(){o?d(b):l(b),E(s),n(!1)}}));return r.a.createElement("div",null,r.a.createElement(j.a,{visible:t,modal:!0,style:{width:"420px"},contentStyle:{overflow:"visible"},header:"Detalles del Producto",onHide:function(){return n(!1),void E(s)},footer:h},r.a.createElement("div",{className:"p-grid p-fluid"},r.a.createElement("br",null),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(P.a,{value:b.name,onChange:function(e){return v(e.target.value.trim(),"name")}}),r.a.createElement("label",null,"Nombre:")),r.a.createElement("br",null),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(C.a,{value:b.price,onChange:function(e){return v(e.target.value,"price")},mode:"currency",currency:"USD"}),r.a.createElement("label",null,"Precio:")),r.a.createElement("br",null),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(S.a,{value:b.expiry_date&&new Date(b.expiry_date+" "),onChange:function(e){return v(e.target.value.toISOString().substring(0,10),"expiry_date")},dateFormat:"yy-mm-dd"}),r.a.createElement("label",null,"Fecha de caducidad:")),r.a.createElement("br",null))))},x=function(e){var t=Object(a.useContext)(p),n=t.products,c=t.findProduct,l=Object(a.useState)(!1),i=Object(u.a)(l,2),o=i[0],d=i[1],s=r.a.createElement("div",{className:"p-clearfix",style:{width:"100%"}},r.a.createElement(g.a,{style:{float:"left"},icon:"pi pi-plus",label:"Add",onClick:function(){return d(!0)}}));return r.a.createElement("div",null,r.a.createElement(E.a,{header:"LISTA DE PRODUCTOS",style:{textAlign:"center"}},r.a.createElement(v.a,{value:n,selectionMode:"single",onSelectionChange:function(e){return t=e.value._id,c(t),void d(!0);var t},footer:s},r.a.createElement(h.a,{field:"_id",header:"Id"}),r.a.createElement(h.a,{field:"name",header:"Nombre"}),r.a.createElement(h.a,{field:"price",header:"Precio"}),r.a.createElement(h.a,{field:"expiry_date",header:"Fecha de caducidad"}))),r.a.createElement(_,{isVisible:o,setIsVisible:d}))};n(74),n(75),n(76);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null,r.a.createElement(x,null)))},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null))),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.23d6353f.chunk.js.map