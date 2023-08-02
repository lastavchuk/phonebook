"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[65],{3268:function(n,e,t){var r,o=t(168),a=t(5867).ZP.form(r||(r=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    label {\n        margin-bottom: 5px;\n    }\n    input {\n        display: block;\n        width: 100%;\n        margin-bottom: 15px;\n        padding: 0.375rem 0.75rem;\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #212529;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid #ced4da;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        border-radius: 0.25rem;\n        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    }\n    input:focus {\n        border-color: #86b7fe;\n        outline: 0;\n        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n    }\n"])));e.Z=a},2497:function(n,e,t){var r=t(9085),o=(t(5462),t(184));e.Z=function(){return(0,o.jsxs)(r.Ix,{position:"top-right",autoClose:5e3,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored",transition:r.Mi,children:[(0,o.jsx)("b",{children:"User"})," is already in contacts"]})}},9677:function(n,e,t){t.d(e,{Z:function(){return s}});var r,o=t(168),a=t(5867).ZP.section(r||(r=(0,o.Z)(["\n    padding-bottom: 30px;\n\n    &:first-child {\n        padding-top: 20px;\n    }\n\n    @media screen and (min-width: 768px) {\n        padding-bottom: 40px;\n\n        &:first-child {\n            padding-top: 32px;\n        }\n    }\n"]))),i=t(184),s=function(n){var e=n.children;return(0,i.jsx)(a,{children:e})}},1065:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,o,a,i,s=t(2791),c=t(9085),d=t(9434),l=t(6351),u=t(168),m=t(5867),p=m.ZP.input(r||(r=(0,u.Z)(["\n    display: block;\n    width: 100%;\n    margin-bottom: 15px;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0.25rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n    &:focus {\n        border-color: #86b7fe;\n        outline: 0;\n        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n    }\n"]))),h=t(184),x=function(n){var e=n.filter,t=n.onFilterChange;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{children:"Find contacts by name or phone number"}),(0,h.jsx)(p,{onChange:function(n){t(n.target.value)},value:e,type:"text",name:"search"})]})},f=t(9677),b=t(3623),g=m.ZP.h2(o||(o=(0,u.Z)(["\n    text-align: center;\n    margin: 20px 0;\n"]))),j=function(n){var e=n.title;return(0,h.jsx)(g,{children:e})},Z=t(3433),v=m.ZP.li(a||(a=(0,u.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 5px;\n    padding-right: 5px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n    &:nth-of-type(odd) {\n        background-color: rgba(0, 0, 0, 0.05);\n    }\n"]))),C=t(3535),w=function(n){var e=n.contact,t=n.onRemoveContact;return(0,h.jsxs)(v,{children:[(0,h.jsxs)("span",{children:[(0,h.jsx)("b",{children:e.name}),": ",e.number]}),(0,h.jsx)(C.Z,{className:"btnRed fixed",onClick:function(){return t(e.id)},children:"Delete"})]})},k=m.ZP.ul(i||(i=(0,u.Z)([""]))),y=function(n){var e=n.contacts,t=n.onRemoveContact,r=(0,Z.Z)(e);return r.sort((function(n,e){return n.name.localeCompare(e.name)})),(0,h.jsx)(k,{children:r.map((function(n){return(0,h.jsx)(w,{contact:n,onRemoveContact:t},n.id)}))})},A=t(4942),F=t(1413),z=t(9439),P=t(3268),N={name:"",number:""};var R=function(n){var e=n.onAddContact,t=(0,s.useState)(N),r=(0,z.Z)(t,2),o=r[0],a=r[1],i=function(n){a((0,F.Z)((0,F.Z)({},o),{},(0,A.Z)({},n.target.name,n.target.value)))};return(0,h.jsxs)(P.Z,{onSubmit:function(n){n.preventDefault(),e(o),a(N)},children:[(0,h.jsx)("label",{htmlFor:"name",children:"Name"}),(0,h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:o.name,onChange:i,required:!0}),(0,h.jsx)("label",{htmlFor:"number",children:"Number"}),(0,h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:o.number,onChange:i,required:!0}),(0,h.jsx)(C.Z,{className:"btnGreen",type:"submit",children:"Add contact"})]})},O=t(2497),D=t(4808),I=t(8361);function L(){var n=(0,d.v9)(l.vI),e=(0,d.v9)(l.Af),t=e.items,r=e.error,o=(0,d.v9)(l.AD),a=(0,d.I0)();(0,s.useEffect)((function(){n&&a((0,I.CJ)())}),[n,a]),(0,s.useEffect)((function(){r&&(c.Am.dismiss(),c.Am.error(r))}),[r]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Z,{children:(0,h.jsxs)(b.Z,{children:[(0,h.jsx)(j,{title:"Phonebook"}),(0,h.jsx)(R,{onAddContact:function(n){var e=t.find((function(e){return e.name===n.name.trim()}));if(e)return c.Am.dismiss(),void c.Am.warning((0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("b",{children:e.name})," is already in contacts!"]}));a((0,I.je)(n))}})]})}),t.length?(0,h.jsx)(f.Z,{children:(0,h.jsxs)(b.Z,{children:[(0,h.jsx)(j,{title:"Contacts"}),(0,h.jsx)(x,{filter:o,onFilterChange:function(n){a((0,D.T)(n))}}),(0,h.jsx)(y,{contacts:o?t.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase().trim())||n.number.includes(o.trim())})):t,onRemoveContact:function(n){a((0,I.xX)(n))}})]})}):(0,h.jsx)(f.Z,{children:(0,h.jsx)(b.Z,{children:(0,h.jsx)(j,{title:"No contacts"})})}),(0,h.jsx)(O.Z,{})]})}}}]);
//# sourceMappingURL=65.6a8e68af.chunk.js.map