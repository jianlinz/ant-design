webpackJsonp([191,200],{1373:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var o=n(1),s=(a(o),n(2));a(s);t.exports={content:["section",["p","Autocomplete function of input field."],["h2","When To Use"],["p","When need to use autocomplete function."]],meta:{category:"Components",type:"Data Entry",cols:1,title:"AutoComplete",filename:"components/auto-complete/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >const</span> dataSource <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'12345\'</span><span class="token punctuation" >,</span> <span class="token string" >\'23456\'</span><span class="token punctuation" >,</span> <span class="token string" >\'34567\'</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>AutoComplete</span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>dataSource<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>'},["code","const dataSource = ['12345', '23456', '34567'];\n<AutoComplete dataSource={dataSource} />"]],["p","Since ",["code","AutoComplete"]," is based on ",["code","Select"],", so besides following API, ",["code","AutoComplete"]," has same API as ",["code","Select"],"."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","dataSource"],["td","Data source for autocomplete"],["td","Array"],["td"]],["tr",["td","value"],["td","selected option"],["td","String/Array",["string"],"/{key: String, label: React.Node}/Array<{key, label}>"],["td","-"]],["tr",["td","defaultValue"],["td","Initial selected option."],["td","string/Array",["string"]],["td","-"]],["tr",["td","allowClear"],["td","Show clear button, effective in multiple mode only."],["td","boolean"],["td","false"]],["tr",["td","onChange"],["td","Called when select an option or input value change, or value of input is changed"],["td","function(value, label)"],["td","-"]],["tr",["td","onSelect"],["td","Called when a option is selected. param is option's value and option instance."],["td","function(value, option)"],["td","-"]],["tr",["td","disabled"],["td","Whether disabled select"],["td","boolean"],["td","false"]]]]]}}});