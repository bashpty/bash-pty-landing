import{A as e,B as t,G as n,Rt as r,U as i,Vt as a,W as o,b as s,f as c,m as l,p as u,q as d,r as f,tt as p}from"./B3i-m4Vq.js";import{t as m}from"./DaeWVVkP.js";import{t as h}from"./yzfqzwpt.js";import{t as g}from"./BwurEhgw.js";import{t as _}from"./Cf14FfG5.js";import v from"./CAA0s_hB.js";import y from"./CRishFBm.js";import b from"./DfJkYp3O.js";var x=m.extend({name:`accordion`,style:`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,classes:{root:`p-accordion p-component`}}),S={name:`Accordion`,extends:{name:`BaseAccordion`,extends:h,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:x,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(t,n){var r=this;return{root:e({onClick:function(e){return r.onTabClick(e,n)}},this.getTabProp(t,`headerProps`),this.getTabPT(t,`header`,n)),toggleicon:e(this.getTabProp(t,`headeractionprops`),this.getTabPT(t,`headeraction`,n))}},getContentPT:function(t,n){return{root:e(this.getTabProp(t,`contentProps`),this.getTabPT(t,`toggleablecontent`,n)),transition:this.getTabPT(t,`transition`,n),content:this.getTabPT(t,`content`,n)}},getTabPT:function(t,n,r){var i=this.tabs.length,a={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:r,count:i,first:r===0,last:r===i-1,active:this.isItemActive(`${r}`)}};return e(this.ptm(`accordiontab.${n}`,a),this.ptmo(this.getTabProp(t,`pt`),n,a))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:b,AccordionHeader:y,AccordionContent:v,ChevronUpIcon:_,ChevronRightIcon:g}};function C(m,h,g,_,v,y){var b=n(`AccordionHeader`),x=n(`AccordionContent`),S=n(`AccordionPanel`);return t(),l(`div`,e({class:m.cx(`root`)},m.ptmi(`root`)),[y.hasAccordionTab?(t(!0),l(f,{key:0},i(y.tabs,function(n,i){return t(),c(S,{key:y.getKey(n,i),value:`${i}`,pt:{root:y.getTabPT(n,`root`,i)},disabled:y.getTabProp(n,`disabled`)},{default:p(function(){return[s(b,{class:r(y.getTabProp(n,`headerClass`)),pt:y.getHeaderPT(n,i)},{toggleicon:p(function(r){return[r.active?(t(),c(d(m.$slots.collapseicon?m.$slots.collapseicon:m.collapseIcon?`span`:`ChevronDownIcon`),e({key:0,class:[m.collapseIcon,r.class],"aria-hidden":`true`},{ref_for:!0},y.getTabPT(n,`headericon`,i)),null,16,[`class`])):(t(),c(d(m.$slots.expandicon?m.$slots.expandicon:m.expandIcon?`span`:`ChevronUpIcon`),e({key:1,class:[m.expandIcon,r.class],"aria-hidden":`true`},{ref_for:!0},y.getTabPT(n,`headericon`,i)),null,16,[`class`]))]}),default:p(function(){return[n.children&&n.children.headericon?(t(),c(d(n.children.headericon),{key:0,isTabActive:y.isItemActive(`${i}`),active:y.isItemActive(`${i}`),index:i},null,8,[`isTabActive`,`active`,`index`])):u(``,!0),n.props&&n.props.header?(t(),l(`span`,e({key:1,ref_for:!0},y.getTabPT(n,`headertitle`,i)),a(n.props.header),17)):u(``,!0),n.children&&n.children.header?(t(),c(d(n.children.header),{key:2})):u(``,!0)]}),_:2},1032,[`class`,`pt`]),s(x,{pt:y.getContentPT(n,i)},{default:p(function(){return[(t(),c(d(n)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):o(m.$slots,`default`,{key:1})],16)}S.render=C;export{S as default};