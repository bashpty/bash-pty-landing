import{A as e,B as t,G as n,K as r,Rt as i,U as a,Vt as o,W as s,b as c,d as l,f as u,m as d,nt as f,p,q as m,r as h,tt as g}from"./B3i-m4Vq.js";import{s as _,t as v}from"./B-OWinTa.js";import{B as y,Et as b,St as x,bt as S,dt as C,et as w,st as T,t as E,w as D,xt as O}from"./DaeWVVkP.js";import{t as k}from"./yzfqzwpt.js";import{t as A}from"./BwurEhgw.js";import{t as j}from"./B722J4lI.js";import{t as M}from"./k8fQmq27.js";var N=E.extend({name:`panelmenu`,style:`
    .p-panelmenu {
        display: flex;
        flex-direction: column;
        gap: dt('panelmenu.gap');
    }

    .p-panelmenu-panel {
        background: dt('panelmenu.panel.background');
        border-width: dt('panelmenu.panel.border.width');
        border-style: solid;
        border-color: dt('panelmenu.panel.border.color');
        color: dt('panelmenu.panel.color');
        border-radius: dt('panelmenu.panel.border.radius');
        padding: dt('panelmenu.panel.padding');
    }

    .p-panelmenu-panel:first-child {
        border-width: dt('panelmenu.panel.first.border.width');
        border-start-start-radius: dt('panelmenu.panel.first.top.border.radius');
        border-start-end-radius: dt('panelmenu.panel.first.top.border.radius');
    }

    .p-panelmenu-panel:last-child {
        border-width: dt('panelmenu.panel.last.border.width');
        border-end-start-radius: dt('panelmenu.panel.last.bottom.border.radius');
        border-end-end-radius: dt('panelmenu.panel.last.bottom.border.radius');
    }

    .p-panelmenu-header {
        outline: 0 none;
    }

    .p-panelmenu-header-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        outline-color: transparent;
        color: dt('panelmenu.item.color');
    }

    .p-panelmenu-header-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
        color: inherit;
    }

    .p-panelmenu-header-icon,
    .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.color');
    }

    .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.color');
    }

    .p-panelmenu-submenu-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-submenu {
        margin: 0;
        padding: 0 0 0 dt('panelmenu.submenu.indent');
        outline: 0;
        list-style: none;
    }

    .p-panelmenu-submenu:dir(rtl) {
        padding: 0 dt('panelmenu.submenu.indent') 0 0;
    }

    .p-panelmenu-item-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu-item-label {
        line-height: 1;
    }

    .p-panelmenu-item-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        color: dt('panelmenu.item.color');
        outline-color: transparent;
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panelmenu-content-wrapper {
        min-height: 0;
    }
`,classes:{root:`p-panelmenu p-component`,panel:`p-panelmenu-panel`,header:function(e){var t=e.instance,n=e.item;return[`p-panelmenu-header`,{"p-panelmenu-header-active":t.isItemActive(n)&&!!n.items,"p-disabled":t.isItemDisabled(n)}]},headerContent:`p-panelmenu-header-content`,headerLink:`p-panelmenu-header-link`,headerIcon:`p-panelmenu-header-icon`,headerLabel:`p-panelmenu-header-label`,contentContainer:`p-panelmenu-content-container`,contentWrapper:`p-panelmenu-content-wrapper`,content:`p-panelmenu-content`,rootList:`p-panelmenu-root-list`,item:function(e){var t=e.instance,n=e.processedItem;return[`p-panelmenu-item`,{"p-focus":t.isItemFocused(n),"p-disabled":t.isItemDisabled(n)}]},itemContent:`p-panelmenu-item-content`,itemLink:`p-panelmenu-item-link`,itemIcon:`p-panelmenu-item-icon`,itemLabel:`p-panelmenu-item-label`,submenuIcon:`p-panelmenu-submenu-icon`,submenu:`p-panelmenu-submenu`,separator:`p-menuitem-separator`}}),P={name:`BasePanelMenu`,extends:k,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:N,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},F={name:`PanelMenuSub`,hostName:`PanelMenu`,extends:k,emits:[`item-toggle`,`item-mousemove`],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return`${this.panelId}_${e.key}`},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,n){return e&&e.item?x(e.item[t],n):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},getPTOptions:function(e,t,n){return this.ptm(e,{context:{item:t.item,index:n,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,t){this.getItemProp(t,`command`,{originalEvent:e,item:t.item}),this.$emit(`item-toggle`,{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle:function(e){this.$emit(`item-toggle`,e)},onItemMouseMove:function(e,t){this.$emit(`item-mousemove`,{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,`separator`)}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(e){return t.isItemVisible(e)&&t.getItemProp(e,`separator`)}).length+1},getMenuItemProps:function(t,n){return{action:e({class:this.cx(`itemLink`),tabindex:-1},this.getPTOptions(`itemLink`,t,n)),icon:e({class:[this.cx(`itemIcon`),this.getItemProp(t,`icon`)]},this.getPTOptions(`itemIcon`,t,n)),label:e({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`,t,n)),submenuicon:e({class:this.cx(`submenuIcon`)},this.getPTOptions(`submenuicon`,t,n))}}},components:{ChevronRightIcon:A,ChevronDownIcon:j},directives:{ripple:M}},I=[`tabindex`],ee=[`id`,`aria-label`,`aria-expanded`,`aria-level`,`aria-setsize`,`aria-posinset`,`data-p-focused`,`data-p-disabled`],L=[`onClick`,`onMousemove`],R=[`href`,`target`];function z(s,y,b,x,S,C){var w=n(`PanelMenuSub`,!0),T=r(`ripple`);return t(),d(`ul`,{class:i(s.cx(`submenu`)),tabindex:b.tabindex},[(t(!0),d(h,null,a(b.items,function(n,r){return t(),d(h,{key:C.getItemKey(n)},[C.isItemVisible(n)&&!C.getItemProp(n,`separator`)?(t(),d(`li`,e({key:0,id:C.getItemId(n),class:[s.cx(`item`,{processedItem:n}),C.getItemProp(n,`class`)],style:C.getItemProp(n,`style`),role:`treeitem`,"aria-label":C.getItemLabel(n),"aria-expanded":C.isItemGroup(n)?C.isItemActive(n):void 0,"aria-level":b.level+1,"aria-setsize":C.getAriaSetSize(),"aria-posinset":C.getAriaPosInset(r)},{ref_for:!0},C.getPTOptions(`item`,n,r),{"data-p-focused":C.isItemFocused(n),"data-p-disabled":C.isItemDisabled(n)}),[l(`div`,e({class:s.cx(`itemContent`),onClick:function(e){return C.onItemClick(e,n)},onMousemove:function(e){return C.onItemMouseMove(e,n)}},{ref_for:!0},C.getPTOptions(`itemContent`,n,r)),[b.templates.item?(t(),u(m(b.templates.item),{key:1,item:n.item,root:!1,active:C.isItemActive(n),hasSubmenu:C.isItemGroup(n),label:C.getItemLabel(n),props:C.getMenuItemProps(n,r)},null,8,[`item`,`active`,`hasSubmenu`,`label`,`props`])):f((t(),d(`a`,e({key:0,href:C.getItemProp(n,`url`),class:s.cx(`itemLink`),target:C.getItemProp(n,`target`),tabindex:`-1`},{ref_for:!0},C.getPTOptions(`itemLink`,n,r)),[C.isItemGroup(n)?(t(),d(h,{key:0},[b.templates.submenuicon?(t(),u(m(b.templates.submenuicon),e({key:0,class:s.cx(`submenuIcon`),active:C.isItemActive(n)},{ref_for:!0},C.getPTOptions(`submenuIcon`,n,r)),null,16,[`class`,`active`])):(t(),u(m(C.isItemActive(n)?`ChevronDownIcon`:`ChevronRightIcon`),e({key:1,class:s.cx(`submenuIcon`)},{ref_for:!0},C.getPTOptions(`submenuIcon`,n,r)),null,16,[`class`]))],64)):p(``,!0),b.templates.itemicon?(t(),u(m(b.templates.itemicon),{key:1,item:n.item,class:i(s.cx(`itemIcon`))},null,8,[`item`,`class`])):C.getItemProp(n,`icon`)?(t(),d(`span`,e({key:2,class:[s.cx(`itemIcon`),C.getItemProp(n,`icon`)]},{ref_for:!0},C.getPTOptions(`itemIcon`,n,r)),null,16)):p(``,!0),l(`span`,e({class:s.cx(`itemLabel`)},{ref_for:!0},C.getPTOptions(`itemLabel`,n,r)),o(C.getItemLabel(n)),17)],16,R)),[[T]])],16,L),c(v,e({name:`p-collapsible`},{ref_for:!0},s.ptm(`transition`)),{default:g(function(){return[f(l(`div`,e({class:s.cx(`contentContainer`)},{ref_for:!0},s.ptm(`contentContainer`)),[l(`div`,e({class:s.cx(`contentWrapper`)},{ref_for:!0},s.ptm(`contentWrapper`)),[C.isItemVisible(n)&&C.isItemGroup(n)?(t(),u(w,e({key:0,id:C.getItemId(n)+`_list`,role:`group`,panelId:b.panelId,focusedItemId:b.focusedItemId,items:n.items,level:b.level+1,templates:b.templates,activeItemPath:b.activeItemPath,onItemToggle:C.onItemToggle,onItemMousemove:y[0]||=function(e){return s.$emit(`item-mousemove`,e)},pt:s.pt,unstyled:s.unstyled},{ref_for:!0},s.ptm(`submenu`)),null,16,[`id`,`panelId`,`focusedItemId`,`items`,`level`,`templates`,`activeItemPath`,`onItemToggle`,`pt`,`unstyled`])):p(``,!0)],16)],16),[[_,C.isItemActive(n)]])]}),_:2},1040)],16,ee)):p(``,!0),C.isItemVisible(n)&&C.getItemProp(n,`separator`)?(t(),d(`li`,e({key:1,style:C.getItemProp(n,`style`),class:[s.cx(`separator`),C.getItemProp(n,`class`)],role:`separator`},{ref_for:!0},s.ptm(`separator`)),null,16)):p(``,!0)],64)}),128))],10,I)}F.render=z;function B(e,t){return G(e)||W(e,t)||H(e,t)||V()}function V(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(e,t){if(e){if(typeof e==`string`)return U(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}function U(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function W(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function G(e){if(Array.isArray(e))return e}var K={name:`PanelMenuList`,hostName:`PanelMenu`,extends:k,emits:[`item-toggle`,`header-focus`],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},created:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,t){return e&&e.item?x(e.item[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.parentKey})},isItemGroup:function(e){return b(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=``},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:case`Tab`:case`PageDown`:case`PageUp`:case`Backspace`:case`ShiftLeft`:case`ShiftRight`:break;default:!t&&T(e.key)&&this.searchItems(e,e.key)}},onArrowDownKey:function(e){var t=b(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var t=b(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var t=this;b(this.focusedItem)&&(this.activeItemPath.some(function(e){return e.key===t.focusedItem.key})?this.activeItemPath=this.activeItemPath.filter(function(e){return e.key!==t.focusedItem.key}):this.focusedItem=b(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault())},onArrowRightKey:function(e){var t=this;b(this.focusedItem)&&(this.isItemGroup(this.focusedItem)&&(this.activeItemPath.some(function(e){return e.key===t.focusedItem.key})?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(e){return e.parentKey!==t.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))),e.preventDefault())},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(b(this.focusedItem)){var t=w(this.$el,`li[id="${`${this.focusedItemId}`}"]`),n=t&&(w(t,`[data-pc-section="itemlink"]`)||w(t,`a,button`));n?n.click():t&&t.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var t=e.processedItem,n=e.expanded;this.expandedKeys?this.$emit(`item-toggle`,{item:t.item,expanded:n}):(this.activeItemPath=this.activeItemPath.filter(function(e){return e.parentKey!==t.parentKey}),n&&this.activeItemPath.push(t)),this.focusedItem=t,y(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,t){var n=e.currentTarget.closest(`[data-pc-section="panel"]`);return n&&n.contains(t)},isItemMatched:function(e){return this.isValidItem(e)&&this.getItemLabel(e)?.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,`separator`)},findFirstItem:function(){var e=this;return this.visibleItems.find(function(t){return e.isValidItem(t)})},findLastItem:function(){var e=this;return C(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItem:function(e){var t=this,n=this.visibleItems.findIndex(function(t){return t.key===e.key});return(n<this.visibleItems.length-1?this.visibleItems.slice(n+1).find(function(e){return t.isValidItem(e)}):void 0)||e},findPrevItem:function(e){var t=this,n=this.visibleItems.findIndex(function(t){return t.key===e.key});return(n>0?C(this.visibleItems.slice(0,n),function(e){return t.isValidItem(e)}):void 0)||e},searchItems:function(e,t){var n=this;this.searchValue=(this.searchValue||``)+t;var r=null,i=!1;if(b(this.focusedItem)){var a=this.visibleItems.findIndex(function(e){return e.key===n.focusedItem.key});r=this.visibleItems.slice(a).find(function(e){return n.isItemMatched(e)}),r=O(r)?this.visibleItems.slice(0,a).find(function(e){return n.isItemMatched(e)}):r}else r=this.visibleItems.find(function(e){return n.isItemMatched(e)});return b(r)&&(i=!0),O(r)&&O(this.focusedItem)&&(r=this.findFirstItem()),b(r)&&this.changeFocusedItem({originalEvent:e,processedItem:r,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue=``,n.searchTimeout=null},500),i},changeFocusedItem:function(e){var t=e.originalEvent,n=e.processedItem,r=e.focusOnNext,i=e.selfCheck,a=e.allowHeaderFocus,o=a===void 0||a;b(this.focusedItem)&&this.focusedItem.key!==n.key?(this.focusedItem=n,this.scrollInView()):o&&this.$emit(`header-focus`,{originalEvent:t,focusOnNext:r,selfCheck:i})},scrollInView:function(){var e=w(this.$el,`li[id="${`${this.focusedItemId}`}"]`);e&&e.scrollIntoView&&e.scrollIntoView({block:`nearest`,inline:`start`})},autoUpdateActiveItemPath:function(e){var t=this;this.activeItemPath=Object.entries(e||{}).reduce(function(e,n){var r=B(n,2),i=r[0];if(r[1]){var a=t.findProcessedItemByItemKey(i);a&&e.push(a)}return e},[])},findProcessedItemByItemKey:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(t||=n===0&&this.processedItems,!t)return null;for(var r=0;r<t.length;r++){var i=t[r];if(this.getItemProp(i,`key`)===e)return i;var a=this.findProcessedItemByItemKey(e,i.items,n+1);if(a)return a}},createProcessedItems:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:``,a=[];return e&&e.forEach(function(e,o){var s=(i===``?``:i+`_`)+o,c={item:e,index:o,level:n,key:s,parent:r,parentKey:i};c.items=t.createProcessedItems(e.items,n+1,c,s),a.push(c)}),a},flatItems:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(e){t.isVisibleItem(e)&&(n.push(e),t.flatItems(e.items,n))}),n}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return b(this.focusedItem)?`${this.panelId}_${this.focusedItem.key}`:null}},components:{PanelMenuSub:F}};function q(r,i,a,o,s,c){var l=n(`PanelMenuSub`);return t(),u(l,e({id:a.panelId+`_list`,class:r.cx(`rootList`),role:`tree`,tabindex:-1,"aria-activedescendant":s.focused?c.focusedItemId:void 0,panelId:a.panelId,focusedItemId:s.focused?c.focusedItemId:void 0,items:c.processedItems,templates:a.templates,activeItemPath:s.activeItemPath,onFocus:c.onFocus,onBlur:c.onBlur,onKeydown:c.onKeyDown,onItemToggle:c.onItemToggle,onItemMousemove:c.onItemMouseMove,pt:r.pt,unstyled:r.unstyled},r.ptm(`rootList`)),null,16,[`id`,`class`,`aria-activedescendant`,`panelId`,`focusedItemId`,`items`,`templates`,`activeItemPath`,`onFocus`,`onBlur`,`onKeydown`,`onItemToggle`,`onItemMousemove`,`pt`,`unstyled`])}K.render=q;function J(e){"@babel/helpers - typeof";return J=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},J(e)}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Y(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Z(e,t,n){return(t=Q(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){var t=te(e,`string`);return J(t)==`symbol`?t:t+``}function te(e,t){if(J(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(J(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var $={name:`PanelMenu`,extends:P,inheritAttrs:!1,emits:[`update:expandedKeys`,`panel-open`,`panel-close`],data:function(){return{activeItem:null,activeItems:[]}},methods:{getItemProp:function(e,t){return e?x(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},getPTOptions:function(e,t,n){return this.ptm(e,{context:{index:n,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,`key`)]:this.multiple?this.activeItems.some(function(t){return S(e,t)}):S(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemFocused:function(e){return S(e,this.activeItem)},isItemGroup:function(e){return b(e.items)},getPanelId:function(e){return`${this.$id}_${e}`},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return`${this.getPanelId(e)}_header`},getContentId:function(e){return`${this.getPanelId(e)}_content`},onHeaderClick:function(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),y(e.currentTarget)},onHeaderKeyDown:function(e,t){switch(e.code){case`ArrowDown`:this.onHeaderArrowDownKey(e);break;case`ArrowUp`:this.onHeaderArrowUpKey(e);break;case`Home`:this.onHeaderHomeKey(e);break;case`End`:this.onHeaderEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onHeaderEnterKey(e,t)}},onHeaderArrowDownKey:function(e){var t=D(e.currentTarget,`data-p-active`)===!0?w(e.currentTarget.nextElementSibling,`[data-pc-section="rootlist"]`):null;t?y(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),n=D(t,`data-p-active`)===!0?w(t.nextElementSibling,`[data-pc-section="rootlist"]`):null;n?y(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,t){var n=w(e.currentTarget,`[data-pc-section="headerlink"]`);n?n.click():this.onHeaderClick(e,t),e.preventDefault()},findNextHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling,n=w(t,`[data-pc-section="header"]`);return n?D(n,`data-p-disabled`)?this.findNextHeader(n.parentElement):n:null},findPrevHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling,n=w(t,`[data-pc-section="header"]`);return n?D(n,`data-p-disabled`)?this.findPrevHeader(n.parentElement):n:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var t=e.originalEvent,n=e.focusOnNext,r=e.selfCheck,i=t.currentTarget.closest(`[data-pc-section="panel"]`),a=r?w(i,`[data-pc-section="header"]`):n?this.findNextHeader(i):this.findPrevHeader(i);a?this.changeFocusedHeader(t,a):n?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!this.isItemDisabled(t)){var r=this.isItemActive(t),i=r?`panel-close`:`panel-open`;this.activeItem=n?t:this.activeItem&&S(t,this.activeItem)?null:t,this.multiple&&(this.activeItems.some(function(e){return S(t,e)})?this.activeItems=this.activeItems.filter(function(e){return!S(t,e)}):this.activeItems.push(t)),this.changeExpandedKeys({item:t,expanded:!r}),this.$emit(i,{originalEvent:e,item:t})}},changeExpandedKeys:function(e){var t=e.item,n=e.expanded,r=n!==void 0&&n;if(this.expandedKeys){var i=X({},this.expandedKeys);r?i[t.key]=!0:delete i[t.key],this.$emit(`update:expandedKeys`,i)}},changeFocusedHeader:function(e,t){t&&y(t)},getMenuItemProps:function(t,n){return{icon:e({class:[this.cx(`headerIcon`),this.getItemProp(t,`icon`)]},this.getPTOptions(`headerIcon`,t,n)),label:e({class:this.cx(`headerLabel`)},this.getPTOptions(`headerLabel`,t,n))}}},components:{PanelMenuList:K,ChevronRightIcon:A,ChevronDownIcon:j}},ne=[`id`],re=[`id`,`tabindex`,`aria-label`,`aria-expanded`,`aria-controls`,`aria-disabled`,`onClick`,`onKeydown`,`data-p-active`,`data-p-disabled`],ie=[`href`],ae=[`id`,`aria-labelledby`];function oe(r,y,b,x,S,C){var w=n(`PanelMenuList`);return t(),d(`div`,e({id:r.$id,class:r.cx(`root`)},r.ptmi(`root`)),[(t(!0),d(h,null,a(r.model,function(n,a){return t(),d(h,{key:C.getPanelKey(a)},[C.isItemVisible(n)?(t(),d(`div`,e({key:0,style:C.getItemProp(n,`style`),class:[r.cx(`panel`),C.getItemProp(n,`class`)]},{ref_for:!0},r.ptm(`panel`)),[l(`div`,e({id:C.getHeaderId(a),class:[r.cx(`header`,{item:n}),C.getItemProp(n,`headerClass`)],tabindex:C.isItemDisabled(n)?-1:r.tabindex,role:`button`,"aria-label":C.getItemLabel(n),"aria-expanded":C.isItemActive(n),"aria-controls":C.getContentId(a),"aria-disabled":C.isItemDisabled(n),onClick:function(e){return C.onHeaderClick(e,n)},onKeydown:function(e){return C.onHeaderKeyDown(e,n)}},{ref_for:!0},C.getPTOptions(`header`,n,a),{"data-p-active":C.isItemActive(n),"data-p-disabled":C.isItemDisabled(n)}),[l(`div`,e({class:r.cx(`headerContent`)},{ref_for:!0},C.getPTOptions(`headerContent`,n,a)),[r.$slots.item?(t(),u(m(r.$slots.item),{key:1,item:n,root:!0,active:C.isItemActive(n),hasSubmenu:C.isItemGroup(n),label:C.getItemLabel(n),props:C.getMenuItemProps(n,a)},null,8,[`item`,`active`,`hasSubmenu`,`label`,`props`])):(t(),d(`a`,e({key:0,href:C.getItemProp(n,`url`),class:r.cx(`headerLink`),tabindex:-1},{ref_for:!0},C.getPTOptions(`headerLink`,n,a)),[C.getItemProp(n,`items`)?s(r.$slots,`submenuicon`,{key:0,active:C.isItemActive(n)},function(){return[(t(),u(m(C.isItemActive(n)?`ChevronDownIcon`:`ChevronRightIcon`),e({class:r.cx(`submenuIcon`)},{ref_for:!0},C.getPTOptions(`submenuIcon`,n,a)),null,16,[`class`]))]}):p(``,!0),r.$slots.headericon?(t(),u(m(r.$slots.headericon),{key:1,item:n,class:i([r.cx(`headerIcon`),C.getItemProp(n,`icon`)])},null,8,[`item`,`class`])):C.getItemProp(n,`icon`)?(t(),d(`span`,e({key:2,class:[r.cx(`headerIcon`),C.getItemProp(n,`icon`)]},{ref_for:!0},C.getPTOptions(`headerIcon`,n,a)),null,16)):p(``,!0),l(`span`,e({class:r.cx(`headerLabel`)},{ref_for:!0},C.getPTOptions(`headerLabel`,n,a)),o(C.getItemLabel(n)),17)],16,ie))],16)],16,re),c(v,e({name:`p-collapsible`},{ref_for:!0},r.ptm(`transition`)),{default:g(function(){return[f(l(`div`,e({id:C.getContentId(a),class:r.cx(`contentContainer`),role:`region`,"aria-labelledby":C.getHeaderId(a)},{ref_for:!0},r.ptm(`contentContainer`)),[l(`div`,e({class:r.cx(`contentWrapper`)},{ref_for:!0},r.ptm(`contentWrapper`)),[C.getItemProp(n,`items`)?(t(),d(`div`,e({key:0,class:r.cx(`content`)},{ref_for:!0},r.ptm(`content`)),[c(w,{panelId:C.getPanelId(a),items:C.getItemProp(n,`items`),templates:r.$slots,expandedKeys:r.expandedKeys,onItemToggle:C.changeExpandedKeys,onHeaderFocus:C.updateFocusedHeader,pt:r.pt,unstyled:r.unstyled},null,8,[`panelId`,`items`,`templates`,`expandedKeys`,`onItemToggle`,`onHeaderFocus`,`pt`,`unstyled`])],16)):p(``,!0)],16)],16,ae),[[_,C.isItemActive(n)]])]}),_:2},1040)],16)):p(``,!0)],64)}),128))],16,ne)}$.render=oe;export{$ as default};