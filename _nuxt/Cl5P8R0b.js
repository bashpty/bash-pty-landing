import{A as e,B as t,G as n,Rt as r,U as i,Vt as a,W as o,b as s,d as c,f as l,m as u,p as d,q as f,r as p}from"./B3i-m4Vq.js";import{t as m}from"./DaeWVVkP.js";import{t as h}from"./yzfqzwpt.js";import{t as g}from"./BwurEhgw.js";var _=m.extend({name:`breadcrumb`,style:`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,classes:{root:`p-breadcrumb p-component`,list:`p-breadcrumb-list`,homeItem:`p-breadcrumb-home-item`,separator:`p-breadcrumb-separator`,separatorIcon:`p-breadcrumb-separator-icon`,item:function(e){return[`p-breadcrumb-item`,{"p-disabled":e.instance.disabled()}]},itemLink:`p-breadcrumb-item-link`,itemIcon:`p-breadcrumb-item-icon`,itemLabel:`p-breadcrumb-item-label`}}),v={name:`BaseBreadcrumb`,extends:h,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:_,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},y={name:`BreadcrumbItem`,hostName:`Breadcrumb`,extends:h,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,t=e.to,n=e.url,r=typeof window<`u`?window.location.pathname:``;return t===r||n===r?`page`:void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:e({class:this.cx(`itemLink`),"aria-current":this.isCurrentUrl(),onClick:function(e){return t.onClick(e)}},this.ptm(`itemLink`,this.ptmOptions)),icon:e({class:[this.cx(`icon`),this.item.icon]},this.ptm(`icon`,this.ptmOptions)),label:e({class:this.cx(`label`)},this.ptm(`label`,this.ptmOptions))}}}},b=[`href`,`target`,`aria-current`];function x(n,i,o,s,c,p){return p.visible()?(t(),u(`li`,e({key:0,class:[n.cx(`item`),o.item.class]},n.ptm(`item`,p.ptmOptions)),[o.templates.item?(t(),l(f(o.templates.item),{key:1,item:o.item,label:p.label(),props:p.getMenuItemProps},null,8,[`item`,`label`,`props`])):(t(),u(`a`,e({key:0,href:o.item.url||`#`,class:n.cx(`itemLink`),target:o.item.target,"aria-current":p.isCurrentUrl(),onClick:i[0]||=function(){return p.onClick&&p.onClick.apply(p,arguments)}},n.ptm(`itemLink`,p.ptmOptions)),[o.templates&&o.templates.itemicon?(t(),l(f(o.templates.itemicon),{key:0,item:o.item,class:r(n.cx(`itemIcon`,p.ptmOptions))},null,8,[`item`,`class`])):o.item.icon?(t(),u(`span`,e({key:1,class:[n.cx(`itemIcon`),o.item.icon]},n.ptm(`itemIcon`,p.ptmOptions)),null,16)):d(``,!0),o.item.label?(t(),u(`span`,e({key:2,class:n.cx(`itemLabel`)},n.ptm(`itemLabel`,p.ptmOptions)),a(p.label()),17)):d(``,!0)],16,b))],16)):d(``,!0)}y.render=x;var S={name:`Breadcrumb`,extends:v,inheritAttrs:!1,components:{BreadcrumbItem:y,ChevronRightIcon:g}};function C(r,a,f,m,h,g){var _=n(`BreadcrumbItem`),v=n(`ChevronRightIcon`);return t(),u(`nav`,e({class:r.cx(`root`)},r.ptmi(`root`)),[c(`ol`,e({class:r.cx(`list`)},r.ptm(`list`)),[r.home?(t(),l(_,e({key:0,item:r.home,class:r.cx(`homeItem`),templates:r.$slots,pt:r.pt,unstyled:r.unstyled},r.ptm(`homeItem`)),null,16,[`item`,`class`,`templates`,`pt`,`unstyled`])):d(``,!0),(t(!0),u(p,null,i(r.model,function(n,i){return t(),u(p,{key:n.label+`_`+i},[r.home||i!==0?(t(),u(`li`,e({key:0,class:r.cx(`separator`)},{ref_for:!0},r.ptm(`separator`)),[o(r.$slots,`separator`,{},function(){return[s(v,e({"aria-hidden":`true`,class:r.cx(`separatorIcon`)},{ref_for:!0},r.ptm(`separatorIcon`)),null,16,[`class`])]})],16)):d(``,!0),s(_,{item:n,index:i,templates:r.$slots,pt:r.pt,unstyled:r.unstyled},null,8,[`item`,`index`,`templates`,`pt`,`unstyled`])],64)}),128))],16)],16)}S.render=C;export{S as default};