import{A as e,B as t,G as n,Rt as r,Vt as i,W as a,b as o,d as s,f as c,m as l,nt as u,p as d,q as f,tt as p}from"./B3i-m4Vq.js";import{s as m,t as h}from"./B-OWinTa.js";import{t as g}from"./DaeWVVkP.js";import{t as _}from"./CRHlWn3X.js";import{t as v}from"./yzfqzwpt.js";import{t as y}from"./k8fQmq27.js";import{n as b}from"./DbeLjDaA.js";import{t as x}from"./B0sVcoJh.js";import{t as S}from"./m5YWzuMp.js";var C=g.extend({name:`panel`,style:`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,classes:{root:function(e){return[`p-panel p-component`,{"p-panel-toggleable":e.props.toggleable}]},header:`p-panel-header`,title:`p-panel-title`,headerActions:`p-panel-header-actions`,pcToggleButton:`p-panel-toggle-button`,contentContainer:`p-panel-content-container`,contentWrapper:`p-panel-content-wrapper`,content:`p-panel-content`,footer:`p-panel-footer`}}),w={name:`Panel`,extends:{name:`BasePanel`,extends:v,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}}},style:C,provide:function(){return{$pcPanel:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return _({toggleable:this.toggleable})}},components:{PlusIcon:S,MinusIcon:x,Button:b},directives:{ripple:y}},T=[`data-p`],E=[`data-p`],D=[`id`],O=[`id`,`aria-labelledby`];function k(g,_,v,y,b,x){var S=n(`Button`);return t(),l(`div`,e({class:g.cx(`root`),"data-p":x.dataP},g.ptmi(`root`)),[s(`div`,e({class:g.cx(`header`),"data-p":x.dataP},g.ptm(`header`)),[a(g.$slots,`header`,{id:g.$id+`_header`,class:r(g.cx(`title`)),collapsed:b.d_collapsed},function(){return[g.header?(t(),l(`span`,e({key:0,id:g.$id+`_header`,class:g.cx(`title`)},g.ptm(`title`)),i(g.header),17,D)):d(``,!0)]}),s(`div`,e({class:g.cx(`headerActions`)},g.ptm(`headerActions`)),[a(g.$slots,`icons`),g.toggleable?a(g.$slots,`togglebutton`,{key:0,collapsed:b.d_collapsed,toggleCallback:function(e){return x.toggle(e)},keydownCallback:function(e){return x.onKeyDown(e)}},function(){return[o(S,e({id:g.$id+`_header`,class:g.cx(`pcToggleButton`),"aria-label":x.buttonAriaLabel,"aria-controls":g.$id+`_content`,"aria-expanded":!b.d_collapsed,unstyled:g.unstyled,onClick:_[0]||=function(e){return x.toggle(e)},onKeydown:_[1]||=function(e){return x.onKeyDown(e)}},g.toggleButtonProps,{pt:g.ptm(`pcToggleButton`)}),{icon:p(function(n){return[a(g.$slots,g.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:b.d_collapsed},function(){return[(t(),c(f(b.d_collapsed?`PlusIcon`:`MinusIcon`),e({class:n.class},g.ptm(`pcToggleButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`id`,`class`,`aria-label`,`aria-controls`,`aria-expanded`,`unstyled`,`pt`])]}):d(``,!0)],16)],16,E),o(h,e({name:`p-collapsible`},g.ptm(`transition`)),{default:p(function(){return[u(s(`div`,e({id:g.$id+`_content`,class:g.cx(`contentContainer`),role:`region`,"aria-labelledby":g.$id+`_header`},g.ptm(`contentContainer`)),[s(`div`,e({class:g.cx(`contentWrapper`)},g.ptm(`contentWrapper`)),[s(`div`,e({class:g.cx(`content`)},g.ptm(`content`)),[a(g.$slots,`default`)],16),g.$slots.footer?(t(),l(`div`,e({key:0,class:g.cx(`footer`)},g.ptm(`footer`)),[a(g.$slots,`footer`)],16)):d(``,!0)],16)],16,O),[[m,!b.d_collapsed]])]}),_:3},16)],16,T)}w.render=k;export{w as default};