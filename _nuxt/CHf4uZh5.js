import{A as e,B as t,U as n,Vt as r,d as i,m as a,nt as o,p as s,r as c}from"./B3i-m4Vq.js";import{o as l}from"./B-OWinTa.js";import{nt as u,t as d}from"./DaeWVVkP.js";import{t as f}from"./yzfqzwpt.js";var p=u(),m=d.extend({name:`terminal`,style:`
    .p-terminal {
        display: block;
        height: dt('terminal.height');
        overflow: auto;
        background: dt('terminal.background');
        color: dt('terminal.color');
        border: 1px solid dt('terminal.border.color');
        padding: dt('terminal.padding');
        border-radius: dt('terminal.border.radius');
    }

    .p-terminal-prompt {
        display: flex;
        align-items: center;
    }

    .p-terminal-prompt-value {
        flex: 1 1 auto;
        border: 0 none;
        background: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
    }

    .p-terminal-prompt-label {
        margin-inline-end: dt('terminal.prompt.gap');
    }

    .p-terminal-input::-ms-clear {
        display: none;
    }

    .p-terminal-command-response {
        margin: dt('terminal.command.response.margin');
    }
`,classes:{root:`p-terminal p-component`,welcomeMessage:`p-terminal-welcome-message`,commandList:`p-terminal-command-list`,command:`p-terminal-command`,commandValue:`p-terminal-command-value`,commandResponse:`p-terminal-command-response`,prompt:`p-terminal-prompt`,promptLabel:`p-terminal-prompt-label`,promptValue:`p-terminal-prompt-value`}}),h={name:`Terminal`,extends:{name:`BaseTerminal`,extends:f,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:m,provide:function(){return{$pcTerminal:this,$parentInstance:this}}},inheritAttrs:!1,data:function(){return{commandText:null,commands:[]}},mounted:function(){p.on(`response`,this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){p.off(`response`,this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(e){e.key===`Enter`&&this.commandText&&(this.commands.push({text:this.commandText}),p.emit(`command`,this.commandText),this.commandText=``)},responseListener:function(e){this.commands[this.commands.length-1].response=e}}};function g(u,d,f,p,m,h){return t(),a(`div`,e({class:u.cx(`root`),onClick:d[2]||=function(){return h.onClick&&h.onClick.apply(h,arguments)}},u.ptmi(`root`)),[u.welcomeMessage?(t(),a(`div`,e({key:0,class:u.cx(`welcomeMessage`)},u.ptm(`welcomeMessage`)),r(u.welcomeMessage),17)):s(``,!0),i(`div`,e({class:u.cx(`commandList`)},u.ptm(`content`)),[(t(!0),a(c,null,n(m.commands,function(n,o){return t(),a(`div`,e({key:n.text+o.toString(),class:u.cx(`command`)},{ref_for:!0},u.ptm(`commands`)),[i(`span`,e({class:u.cx(`promptLabel`)},{ref_for:!0},u.ptm(`prompt`)),r(u.prompt),17),i(`span`,e({class:u.cx(`commandValue`)},{ref_for:!0},u.ptm(`command`)),r(n.text),17),i(`div`,e({class:u.cx(`commandResponse`),"aria-live":`polite`},{ref_for:!0},u.ptm(`response`)),r(n.response),17)],16)}),128))],16),i(`div`,e({class:u.cx(`prompt`)},u.ptm(`container`)),[i(`span`,e({class:u.cx(`promptLabel`)},u.ptm(`prompt`)),r(u.prompt),17),o(i(`input`,e({ref:`input`,"onUpdate:modelValue":d[0]||=function(e){return m.commandText=e},class:u.cx(`promptValue`),type:`text`,autocomplete:`off`,onKeydown:d[1]||=function(){return h.onKeydown&&h.onKeydown.apply(h,arguments)}},u.ptm(`commandText`)),null,16),[[l,m.commandText]])],16)],16)}h.render=g;export{h as default};