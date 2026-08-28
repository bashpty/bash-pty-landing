import{A as e,B as t,G as n,K as r,Rt as i,U as a,Vt as o,W as s,_ as c,d as l,f as u,m as d,nt as f,p,q as m,r as h,tt as g,y as _,zt as ee}from"./B3i-m4Vq.js";import{L as v,t as y}from"./DaeWVVkP.js";import{t as b}from"./yzfqzwpt.js";import{t as x}from"./k8fQmq27.js";import{t as S}from"./B1P7_k2j.js";import{n as C,r as w,t as T}from"./DiUBDsbU.js";import{t as E}from"./Covpqhmd.js";import{n as te}from"./CCV59KxE.js";var ne=`
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: dt('paginator.background');
        color: dt('paginator.color');
        padding: dt('paginator.padding');
        border-radius: dt('paginator.border.radius');
        gap: dt('paginator.gap');
    }

    .p-paginator-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: dt('paginator.gap');
    }

    .p-paginator-content-start {
        margin-inline-end: auto;
    }

    .p-paginator-content-end {
        margin-inline-start: auto;
    }

    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
        background: dt('paginator.nav.button.background');
        border: 0 none;
        color: dt('paginator.nav.button.color');
        min-width: dt('paginator.nav.button.width');
        height: dt('paginator.nav.button.height');
        transition:
            background dt('paginator.transition.duration'),
            color dt('paginator.transition.duration'),
            outline-color dt('paginator.transition.duration'),
            box-shadow dt('paginator.transition.duration');
        border-radius: dt('paginator.nav.button.border.radius');
        padding: 0;
        margin: 0;
    }

    .p-paginator-page:focus-visible,
    .p-paginator-next:focus-visible,
    .p-paginator-last:focus-visible,
    .p-paginator-first:focus-visible,
    .p-paginator-prev:focus-visible {
        box-shadow: dt('paginator.nav.button.focus.ring.shadow');
        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');
        outline-offset: dt('paginator.nav.button.focus.ring.offset');
    }

    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
    .p-paginator-first:not(.p-disabled):hover,
    .p-paginator-prev:not(.p-disabled):hover,
    .p-paginator-next:not(.p-disabled):hover,
    .p-paginator-last:not(.p-disabled):hover {
        background: dt('paginator.nav.button.hover.background');
        color: dt('paginator.nav.button.hover.color');
    }

    .p-paginator-page.p-paginator-page-selected {
        background: dt('paginator.nav.button.selected.background');
        color: dt('paginator.nav.button.selected.color');
    }

    .p-paginator-current {
        color: dt('paginator.current.page.report.color');
    }

    .p-paginator-pages {
        display: flex;
        align-items: center;
        gap: dt('paginator.gap');
    }

    .p-paginator-jtp-input .p-inputtext {
        max-width: dt('paginator.jump.to.page.input.max.width');
    }

    .p-paginator-first:dir(rtl),
    .p-paginator-prev:dir(rtl),
    .p-paginator-next:dir(rtl),
    .p-paginator-last:dir(rtl) {
        transform: rotate(180deg);
    }
`;function D(e){"@babel/helpers - typeof";return D=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},D(e)}function O(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=A(e,`string`);return D(t)==`symbol`?t:t+``}function A(e,t){if(D(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(D(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var j=y.extend({name:`paginator`,style:ne,classes:{paginator:function(e){var t=e.instance,n=e.key;return[`p-paginator p-component`,O({"p-paginator-default":!t.hasBreakpoints()},`p-paginator-${n}`,t.hasBreakpoints())]},content:`p-paginator-content`,contentStart:`p-paginator-content-start`,contentEnd:`p-paginator-content-end`,first:function(e){return[`p-paginator-first`,{"p-disabled":e.instance.$attrs.disabled}]},firstIcon:`p-paginator-first-icon`,prev:function(e){return[`p-paginator-prev`,{"p-disabled":e.instance.$attrs.disabled}]},prevIcon:`p-paginator-prev-icon`,next:function(e){return[`p-paginator-next`,{"p-disabled":e.instance.$attrs.disabled}]},nextIcon:`p-paginator-next-icon`,last:function(e){return[`p-paginator-last`,{"p-disabled":e.instance.$attrs.disabled}]},lastIcon:`p-paginator-last-icon`,pages:`p-paginator-pages`,page:function(e){var t=e.props;return[`p-paginator-page`,{"p-paginator-page-selected":e.pageLink-1===t.page}]},current:`p-paginator-current`,pcRowPerPageDropdown:`p-paginator-rpp-dropdown`,pcJumpToPageDropdown:`p-paginator-jtp-dropdown`,pcJumpToPageInputText:`p-paginator-jtp-input`}}),M={name:`BasePaginator`,extends:b,props:{totalRecords:{type:Number,default:0},rows:{type:Number,default:0},first:{type:Number,default:0},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},template:{type:[Object,String],default:`FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown`},currentPageReportTemplate:{type:null,default:`({currentPage} of {totalPages})`},alwaysShow:{type:Boolean,default:!0}},style:j,provide:function(){return{$pcPaginator:this,$parentInstance:this}}},N={name:`CurrentPageReport`,hostName:`Paginator`,extends:b,props:{pageCount:{type:Number,default:0},currentPage:{type:Number,default:0},page:{type:Number,default:0},first:{type:Number,default:0},rows:{type:Number,default:0},totalRecords:{type:Number,default:0},template:{type:String,default:`({currentPage} of {totalPages})`}},computed:{text:function(){return this.template.replace(`{currentPage}`,this.currentPage).replace(`{totalPages}`,this.pageCount).replace(`{first}`,this.pageCount>0?this.first+1:0).replace(`{last}`,Math.min(this.first+this.rows,this.totalRecords)).replace(`{rows}`,this.rows).replace(`{totalRecords}`,this.totalRecords)}}};function re(n,r,i,a,s,c){return t(),d(`span`,e({class:n.cx(`current`)},n.ptm(`current`)),o(c.text),17)}N.render=re;var P={name:`FirstPageLink`,hostName:`Paginator`,extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{disabled:this.$attrs.disabled}})}},components:{AngleDoubleLeftIcon:w},directives:{ripple:x}};function ie(n,i,a,o,s,c){var l=r(`ripple`);return f((t(),d(`button`,e({class:n.cx(`first`),type:`button`},c.getPTOptions(`first`),{"data-pc-group-section":`pagebutton`}),[(t(),u(m(a.template||`AngleDoubleLeftIcon`),e({class:n.cx(`firstIcon`)},c.getPTOptions(`firstIcon`)),null,16,[`class`]))],16)),[[l]])}P.render=ie;var F={name:`JumpToPageDropdown`,hostName:`Paginator`,extends:b,emits:[`page-change`],props:{page:Number,pageCount:Number,disabled:Boolean,templates:null},methods:{onChange:function(e){this.$emit(`page-change`,e)}},computed:{pageOptions:function(){for(var e=[],t=0;t<this.pageCount;t++)e.push({label:String(t+1),value:t});return e}},components:{JTPSelect:E}};function I(e,r,a,o,s,l){var d=n(`JTPSelect`);return t(),u(d,{modelValue:a.page,options:l.pageOptions,optionLabel:`label`,optionValue:`value`,"onUpdate:modelValue":r[0]||=function(e){return l.onChange(e)},class:i(e.cx(`pcJumpToPageDropdown`)),disabled:a.disabled,unstyled:e.unstyled,pt:e.ptm(`pcJumpToPageDropdown`),"data-pc-group-section":`pagedropdown`},c({_:2},[a.templates.jumptopagedropdownicon?{name:`dropdownicon`,fn:g(function(e){return[(t(),u(m(a.templates.jumptopagedropdownicon),{class:i(e.class)},null,8,[`class`]))]}),key:`0`}:void 0]),1032,[`modelValue`,`options`,`class`,`disabled`,`unstyled`,`pt`])}F.render=I;var L={name:`JumpToPageInput`,hostName:`Paginator`,extends:b,inheritAttrs:!1,emits:[`page-change`],props:{page:Number,pageCount:Number,disabled:Boolean},data:function(){return{d_page:this.page}},watch:{page:function(e){this.d_page=e}},methods:{onChange:function(e){e!==this.page&&(this.d_page=e,this.$emit(`page-change`,e-1))}},computed:{inputArialabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.jumpToPageInputLabel:void 0}},components:{JTPInput:te}};function R(e,r,a,o,s,c){var l=n(`JTPInput`);return t(),u(l,{ref:`jtpInput`,modelValue:s.d_page,class:i(e.cx(`pcJumpToPageInputText`)),"aria-label":c.inputArialabel,disabled:a.disabled,"onUpdate:modelValue":c.onChange,unstyled:e.unstyled,pt:e.ptm(`pcJumpToPageInputText`)},null,8,[`modelValue`,`class`,`aria-label`,`disabled`,`onUpdate:modelValue`,`unstyled`,`pt`])}L.render=R;var z={name:`LastPageLink`,hostName:`Paginator`,extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{disabled:this.$attrs.disabled}})}},components:{AngleDoubleRightIcon:C},directives:{ripple:x}};function B(n,i,a,o,s,c){var l=r(`ripple`);return f((t(),d(`button`,e({class:n.cx(`last`),type:`button`},c.getPTOptions(`last`),{"data-pc-group-section":`pagebutton`}),[(t(),u(m(a.template||`AngleDoubleRightIcon`),e({class:n.cx(`lastIcon`)},c.getPTOptions(`lastIcon`)),null,16,[`class`]))],16)),[[l]])}z.render=B;var V={name:`NextPageLink`,hostName:`Paginator`,extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{disabled:this.$attrs.disabled}})}},components:{AngleRightIcon:S},directives:{ripple:x}};function H(n,i,a,o,s,c){var l=r(`ripple`);return f((t(),d(`button`,e({class:n.cx(`next`),type:`button`},c.getPTOptions(`next`),{"data-pc-group-section":`pagebutton`}),[(t(),u(m(a.template||`AngleRightIcon`),e({class:n.cx(`nextIcon`)},c.getPTOptions(`nextIcon`)),null,16,[`class`]))],16)),[[l]])}V.render=H;var U={name:`PageLinks`,hostName:`Paginator`,extends:b,inheritAttrs:!1,emits:[`click`],props:{value:Array,page:Number},methods:{getPTOptions:function(e,t){return this.ptm(t,{context:{active:e===this.page}})},onPageLinkClick:function(e,t){this.$emit(`click`,{originalEvent:e,value:t})},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},directives:{ripple:x}},W=[`aria-label`,`aria-current`,`onClick`,`data-p-active`];function G(n,i,s,c,l,u){var p=r(`ripple`);return t(),d(`span`,e({class:n.cx(`pages`)},n.ptm(`pages`)),[(t(!0),d(h,null,a(s.value,function(r){return f((t(),d(`button`,e({key:r,class:n.cx(`page`,{pageLink:r}),type:`button`,"aria-label":u.ariaPageLabel(r),"aria-current":r-1===s.page?`page`:void 0,onClick:function(e){return u.onPageLinkClick(e,r)}},{ref_for:!0},u.getPTOptions(r-1,`page`),{"data-p-active":r-1===s.page}),[_(o(r),1)],16,W)),[[p]])}),128))],16)}U.render=G;var K={name:`PrevPageLink`,hostName:`Paginator`,extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{disabled:this.$attrs.disabled}})}},components:{AngleLeftIcon:T},directives:{ripple:x}};function q(n,i,a,o,s,c){var l=r(`ripple`);return f((t(),d(`button`,e({class:n.cx(`prev`),type:`button`},c.getPTOptions(`prev`),{"data-pc-group-section":`pagebutton`}),[(t(),u(m(a.template||`AngleLeftIcon`),e({class:n.cx(`prevIcon`)},c.getPTOptions(`prevIcon`)),null,16,[`class`]))],16)),[[l]])}K.render=q;var J={name:`RowsPerPageDropdown`,hostName:`Paginator`,extends:b,emits:[`rows-change`],props:{options:Array,rows:Number,disabled:Boolean,templates:null},methods:{onChange:function(e){this.$emit(`rows-change`,e)}},computed:{rowsOptions:function(){var e=[];if(this.options)for(var t=0;t<this.options.length;t++)e.push({label:String(this.options[t]),value:this.options[t]});return e}},components:{RPPSelect:E}};function ae(e,r,a,o,s,l){var d=n(`RPPSelect`);return t(),u(d,{modelValue:a.rows,options:l.rowsOptions,optionLabel:`label`,optionValue:`value`,"onUpdate:modelValue":r[0]||=function(e){return l.onChange(e)},class:i(e.cx(`pcRowPerPageDropdown`)),disabled:a.disabled,unstyled:e.unstyled,pt:e.ptm(`pcRowPerPageDropdown`),"data-pc-group-section":`pagedropdown`},c({_:2},[a.templates.rowsperpagedropdownicon?{name:`dropdownicon`,fn:g(function(e){return[(t(),u(m(a.templates.rowsperpagedropdownicon),{class:i(e.class)},null,8,[`class`]))]}),key:`0`}:void 0]),1032,[`modelValue`,`options`,`class`,`disabled`,`unstyled`,`pt`])}J.render=ae;function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Y(e)}function X(e,t){return le(e)||ce(e,t)||se(e,t)||oe()}function oe(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(e,t){if(e){if(typeof e==`string`)return Z(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ce(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function le(e){if(Array.isArray(e))return e}var Q={name:`Paginator`,extends:M,inheritAttrs:!1,emits:[`update:first`,`update:rows`,`page`],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(e){this.d_first=e},rows:function(e){this.d_rows=e},totalRecords:function(e){this.page>0&&e&&this.d_first>=e&&this.changePage(this.pageCount-1)}},mounted:function(){this.createStyle()},methods:{changePage:function(e){var t=this.pageCount;if(e>=0&&e<t){this.d_first=this.d_rows*e;var n={page:e,first:this.d_first,rows:this.d_rows,pageCount:t};this.$emit(`update:first`,this.d_first),this.$emit(`update:rows`,this.d_rows),this.$emit(`page`,n)}},changePageToFirst:function(e){this.isFirstPage||this.changePage(0),e.preventDefault()},changePageToPrev:function(e){this.changePage(this.page-1),e.preventDefault()},changePageLink:function(e){this.changePage(e.value-1),e.originalEvent.preventDefault()},changePageToNext:function(e){this.changePage(this.page+1),e.preventDefault()},changePageToLast:function(e){this.isLastPage||this.changePage(this.pageCount-1),e.preventDefault()},onRowChange:function(e){this.d_rows=e,this.changePage(this.page)},createStyle:function(){var e=this;if(this.hasBreakpoints()&&!this.isUnstyled){var t;this.styleElement=document.createElement(`style`),this.styleElement.type=`text/css`,v(this.styleElement,`nonce`,(t=this.$primevue)==null||(t=t.config)==null||(t=t.csp)==null?void 0:t.nonce),document.body.appendChild(this.styleElement);var n=``,r=Object.keys(this.template),i={};r.sort(function(e,t){return parseInt(e)-parseInt(t)}).forEach(function(t){i[t]=e.template[t]});for(var a=0,o=Object.entries(Object.entries(i));a<o.length;a++){var s=X(o[a],2),c=s[0],l=X(s[1],1)[0],u=void 0,d=void 0;d=l!=="default"&&typeof Object.keys(i)[c-1]==`string`?Number(Object.keys(i)[c-1].slice(0,-2))+1+`px`:Object.keys(i)[c-1],u=Object.entries(i)[c-1]?`and (min-width:${d})`:``,n+=l==="default"?`
                            @media screen ${u} {
                                .p-paginator[${this.$attrSelector}],
                                    display: flex;
                                }
                            }
                        `:`
.p-paginator-${l} {
    display: none;
}
@media screen ${u} and (max-width: ${l}) {
    .p-paginator-${l} {
        display: flex;
    }

    .p-paginator-default{
        display: none;
    }
}
                    `}this.styleElement.innerHTML=n}},hasBreakpoints:function(){return Y(this.template)===`object`},getAriaLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[e]:void 0}},computed:{templateItems:function(){var e={};if(this.hasBreakpoints()){for(var t in e=this.template,e.default||(e.default=`FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown`),e)e[t]=this.template[t].split(` `).map(function(e){return e.trim()});return e}return e.default=this.template.split(` `).map(function(e){return e.trim()}),e},page:function(){return Math.floor(this.d_first/this.d_rows)},pageCount:function(){return Math.ceil(this.totalRecords/this.d_rows)},isFirstPage:function(){return this.page===0},isLastPage:function(){return this.page===this.pageCount-1},calculatePageLinkBoundaries:function(){var e=this.pageCount,t=Math.min(this.pageLinkSize,e),n=Math.max(0,Math.ceil(this.page-t/2)),r=Math.min(e-1,n+t-1),i=this.pageLinkSize-(r-n+1);return n=Math.max(0,n-i),[n,r]},pageLinks:function(){for(var e=[],t=this.calculatePageLinkBoundaries,n=t[0],r=t[1],i=n;i<=r;i++)e.push(i+1);return e},currentState:function(){return{page:this.page,first:this.d_first,rows:this.d_rows}},empty:function(){return this.pageCount===0},currentPage:function(){return this.pageCount>0?this.page+1:0},last:function(){return Math.min(this.d_first+this.rows,this.totalRecords)}},components:{CurrentPageReport:N,FirstPageLink:P,LastPageLink:z,NextPageLink:V,PageLinks:U,PrevPageLink:K,RowsPerPageDropdown:J,JumpToPageDropdown:F,JumpToPageInput:L}};function $(r,i,o,c,f,m){var g=n(`FirstPageLink`),_=n(`PrevPageLink`),v=n(`NextPageLink`),y=n(`LastPageLink`),b=n(`PageLinks`),x=n(`CurrentPageReport`),S=n(`RowsPerPageDropdown`),C=n(`JumpToPageDropdown`),w=n(`JumpToPageInput`);return r.alwaysShow||m.pageLinks&&m.pageLinks.length>1?(t(),d(`nav`,ee(e({key:0},r.ptmi(`paginatorContainer`))),[(t(!0),d(h,null,a(m.templateItems,function(n,o){return t(),d(`div`,e({key:o,ref_for:!0,ref:`paginator`,class:r.cx(`paginator`,{key:o})},{ref_for:!0},r.ptm(`root`)),[r.$slots.container?s(r.$slots,`container`,{key:0,first:f.d_first+1,last:m.last,rows:f.d_rows,page:m.page,pageCount:m.pageCount,pageLinks:m.pageLinks,totalRecords:r.totalRecords,firstPageCallback:m.changePageToFirst,lastPageCallback:m.changePageToLast,prevPageCallback:m.changePageToPrev,nextPageCallback:m.changePageToNext,rowChangeCallback:m.onRowChange,changePageCallback:m.changePage}):(t(),d(h,{key:1},[r.$slots.start?(t(),d(`div`,e({key:0,class:r.cx(`contentStart`)},{ref_for:!0},r.ptm(`contentStart`)),[s(r.$slots,`start`,{state:m.currentState})],16)):p(``,!0),l(`div`,e({class:r.cx(`content`)},{ref_for:!0},r.ptm(`content`)),[(t(!0),d(h,null,a(n,function(e){return t(),d(h,{key:e},[e===`FirstPageLink`?(t(),u(g,{key:0,"aria-label":m.getAriaLabel(`firstPageLabel`),template:r.$slots.firsticon||r.$slots.firstpagelinkicon,onClick:i[0]||=function(e){return m.changePageToFirst(e)},disabled:m.isFirstPage||m.empty,unstyled:r.unstyled,pt:r.pt},null,8,[`aria-label`,`template`,`disabled`,`unstyled`,`pt`])):e===`PrevPageLink`?(t(),u(_,{key:1,"aria-label":m.getAriaLabel(`prevPageLabel`),template:r.$slots.previcon||r.$slots.prevpagelinkicon,onClick:i[1]||=function(e){return m.changePageToPrev(e)},disabled:m.isFirstPage||m.empty,unstyled:r.unstyled,pt:r.pt},null,8,[`aria-label`,`template`,`disabled`,`unstyled`,`pt`])):e===`NextPageLink`?(t(),u(v,{key:2,"aria-label":m.getAriaLabel(`nextPageLabel`),template:r.$slots.nexticon||r.$slots.nextpagelinkicon,onClick:i[2]||=function(e){return m.changePageToNext(e)},disabled:m.isLastPage||m.empty,unstyled:r.unstyled,pt:r.pt},null,8,[`aria-label`,`template`,`disabled`,`unstyled`,`pt`])):e===`LastPageLink`?(t(),u(y,{key:3,"aria-label":m.getAriaLabel(`lastPageLabel`),template:r.$slots.lasticon||r.$slots.lastpagelinkicon,onClick:i[3]||=function(e){return m.changePageToLast(e)},disabled:m.isLastPage||m.empty,unstyled:r.unstyled,pt:r.pt},null,8,[`aria-label`,`template`,`disabled`,`unstyled`,`pt`])):e===`PageLinks`?(t(),u(b,{key:4,"aria-label":m.getAriaLabel(`pageLabel`),value:m.pageLinks,page:m.page,onClick:i[4]||=function(e){return m.changePageLink(e)},unstyled:r.unstyled,pt:r.pt},null,8,[`aria-label`,`value`,`page`,`unstyled`,`pt`])):e===`CurrentPageReport`?(t(),u(x,{key:5,"aria-live":`polite`,template:r.currentPageReportTemplate,currentPage:m.currentPage,page:m.page,pageCount:m.pageCount,first:f.d_first,rows:f.d_rows,totalRecords:r.totalRecords,unstyled:r.unstyled,pt:r.pt},null,8,[`template`,`currentPage`,`page`,`pageCount`,`first`,`rows`,`totalRecords`,`unstyled`,`pt`])):e===`RowsPerPageDropdown`&&r.rowsPerPageOptions?(t(),u(S,{key:6,"aria-label":m.getAriaLabel(`rowsPerPageLabel`),rows:f.d_rows,options:r.rowsPerPageOptions,onRowsChange:i[5]||=function(e){return m.onRowChange(e)},disabled:m.empty,templates:r.$slots,unstyled:r.unstyled,pt:r.pt},null,8,[`aria-label`,`rows`,`options`,`disabled`,`templates`,`unstyled`,`pt`])):e===`JumpToPageDropdown`?(t(),u(C,{key:7,"aria-label":m.getAriaLabel(`jumpToPageDropdownLabel`),page:m.page,pageCount:m.pageCount,onPageChange:i[6]||=function(e){return m.changePage(e)},disabled:m.empty,templates:r.$slots,unstyled:r.unstyled,pt:r.pt},null,8,[`aria-label`,`page`,`pageCount`,`disabled`,`templates`,`unstyled`,`pt`])):e===`JumpToPageInput`?(t(),u(w,{key:8,page:m.currentPage,onPageChange:i[7]||=function(e){return m.changePage(e)},disabled:m.empty,unstyled:r.unstyled,pt:r.pt},null,8,[`page`,`disabled`,`unstyled`,`pt`])):p(``,!0)],64)}),128))],16),r.$slots.end?(t(),d(`div`,e({key:1,class:r.cx(`contentEnd`)},{ref_for:!0},r.ptm(`contentEnd`)),[s(r.$slots,`end`,{state:m.currentState})],16)):p(``,!0)],64))],16)}),128))],16)):p(``,!0)}Q.render=$;export{Q as default};