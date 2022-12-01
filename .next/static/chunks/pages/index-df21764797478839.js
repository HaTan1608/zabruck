(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9789)}])},3399:function(e,n,s){"use strict";s.d(n,{Z:function(){return f}});var r=s(5893),t=s(3299),c=s(9008),i=s.n(c),l=s(1664),a=s.n(l),o=s(1955),d=s(7294),u=s(2920),h=s(9780);s(4213);var m=s(2148);function x(e){let{href:n,children:s,...t}=e;return(0,r.jsx)(a(),{href:n,children:(0,r.jsx)("a",{...t,children:s})})}function f(e){let{title:n,children:s}=e,{status:c,data:l}=(0,t.useSession)(),{state:f,dispatch:j}=(0,d.useContext)(m.y),{cart:p}=f,[g,N]=(0,d.useState)(0);(0,d.useEffect)(()=>{N(p.cartItems.reduce((e,n)=>e+n.quantity,0))},[p.cartItems]);let v=()=>{o.Z.remove("cart"),j({type:"CART_RESET"}),(0,t.signOut)({callbackUrl:"/login"})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:n?n+" - Amazona":"Amazona"}),(0,r.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(u.Ix,{position:"bottom-center",limit:1}),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col justify-between ",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md",children:[(0,r.jsx)(a(),{href:"/",children:"amazona"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(a(),{href:"/cart",children:["Cart",g>0&&(0,r.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:g})]}),"loading"===c?"Loading":(null==l?void 0:l.user)?(0,r.jsxs)(h.v,{as:"div",className:"relative inline-block",children:[(0,r.jsx)(h.v.Button,{className:"text-blue-600",children:l.user.name}),(0,r.jsxs)(h.v.Items,{className:"absolute right-0 w-56 origin-top-right bg-white shadow-lg ",children:[(0,r.jsx)(h.v.Item,{children:(0,r.jsx)(x,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,r.jsx)(h.v.Item,{children:(0,r.jsx)(x,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),l.user.isAdmin&&(0,r.jsx)(h.v.Item,{children:(0,r.jsx)(x,{className:"dropdown-link",href:"/admin/dashboard",children:"Admin Dashboard"})}),(0,r.jsx)(h.v.Item,{children:(0,r.jsx)("a",{className:"dropdown-link",href:"#",onClick:v,children:"Logout"})})]})]}):(0,r.jsx)(a(),{href:"/login",children:"Login"})]})]})}),(0,r.jsx)("main",{className:"container m-auto mt-4 px-4",children:s}),(0,r.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:(0,r.jsx)("p",{children:"Copyright \xa9 2022 Amazona"})})]})]})}},9789:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSP:function(){return h},default:function(){return m}});var r=s(5893),t=s(594),c=s(7294),i=s(2920),l=s(3399),a=s(1664),o=s.n(a);function d(e){let{product:n,addToCartHandler:s}=e;return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)(o(),{href:"/product/".concat(n.slug),children:(0,r.jsx)("img",{src:n.image,alt:n.name,className:"rounded shadow object-cover h-64 w-full"})}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center p-5",children:[(0,r.jsx)(o(),{href:"/product/".concat(n.slug),children:(0,r.jsx)("h2",{className:"text-lg",children:n.name})}),(0,r.jsx)("p",{className:"mb-2",children:n.brand}),(0,r.jsxs)("p",{children:["$",n.price]}),(0,r.jsx)("button",{className:"primary-button",type:"button",onClick:()=>s(n),children:"Add to cart"})]})]})}var u=s(2148),h=!0;function m(e){let{products:n}=e,{state:s,dispatch:a}=(0,c.useContext)(u.y),{cart:o}=s,h=async e=>{let n=o.cartItems.find(n=>n.slug===e.slug),s=n?n.quantity+1:1,{data:r}=await t.Z.get("/api/products/".concat(e._id));if(r.countInStock<s)return i.Am.error("Sorry. Product is out of stock");a({type:"CART_ADD_ITEM",payload:{...e,quantity:s}}),i.Am.success("Product added to the cart")};return console.log("product",n),(0,r.jsx)(l.Z,{title:"Home Page",children:(0,r.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4",children:n.map(e=>(0,r.jsx)(d,{product:e,addToCartHandler:h},e.slug))})})}}},function(e){e.O(0,[965,594,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);