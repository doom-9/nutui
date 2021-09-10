import{e as t,o as s,G as a}from"./vendor.6bc94963.js";const d={class:"markdown-body"},n=[a('<h1>Dialog 对话框</h1><h3>介绍</h3><p>模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。</p><p>弹出框组件支持函数调用和组件调用两种方式。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Dialog);\n</code></pre><h2>函数调用</h2><pre><code class="language-javascript">Dialog({\n  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;基础弹框&#39;</span>,\n  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;支持函数调用和组件调用两种方式。&#39;</span>\n});\n\nDialog({\n  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;无标题弹框&#39;</span>\n});\n\nDialog({\n  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;提示弹框&#39;</span>,\n  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;支持函数调用和组件调用两种方式。&#39;</span>,\n  <span class="hljs-attr">noCancelBtn</span>: <span class="hljs-literal">true</span>,\n});\n</code></pre><h2>teleport 使用，挂载到指定节点</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;#app&quot;</span> <span class="hljs-attr">...</span> /&gt;</span>\n</code></pre><pre><code class="language-javascript">Dialog({\n  <span class="hljs-attr">teleport</span>: <span class="hljs-string">&#39;#app&#39;</span>,\n  ...\n});\nDialog({\n  <span class="hljs-attr">teleport</span>: <span class="hljs-string">&#39;.demo&#39;</span>,\n  ...\n});\n</code></pre><h2>函数调用 proxy.&amp;dialog(…)</h2><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span>{\n  <span class="hljs-keyword">const</span> { proxy } = getCurrentInstance();\n  proxy.$dialog({\n    <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;基础弹框&#39;</span>,\n    <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;支持函数调用和组件调用两种方式。&#39;</span>\n  });\n}\n</code></pre><h2>标签式组件使用</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:close-on-click-overlay</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-dialog</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> title = <span class="hljs-string">&#39;标签式使用&#39;</span>;\n    <span class="hljs-keyword">const</span> content = <span class="hljs-string">&#39;内容&#39;</span>;\n  \n    <span class="hljs-keyword">return</span> { visible,title,content };\n  },\n};\n</code></pre><h2>API</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>-</td></tr><tr><td>content</td><td>内容，支持HTML</td><td>String</td><td>-</td></tr><tr><td>teleport</td><td>指定挂载节点</td><td>String</td><td>“body”</td></tr><tr><td>closeOnClickOverlay</td><td>点击蒙层是否关闭对话框</td><td>Boolean</td><td>false</td></tr><tr><td>noFooter</td><td>是否隐藏底部按钮栏</td><td>Boolean</td><td>false</td></tr><tr><td>noOkBtn</td><td>是否隐藏确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>noCancelBtn</td><td>是否隐藏取消按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancelText</td><td>取消按钮文案</td><td>String</td><td>”取消“</td></tr><tr><td>okText</td><td>确定按钮文案</td><td>String</td><td>”确定“</td></tr><tr><td>okBtnDisabled</td><td>禁用确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancelAutoClose</td><td>取消按钮是否默认关闭弹窗</td><td>Boolean</td><td>true</td></tr><tr><td>textAlign</td><td>文字对齐方向，可选值同css的text-align</td><td>String</td><td>“center”</td></tr><tr><td>closeOnPopstate</td><td>是否在页面回退时自动关闭</td><td>Boolean</td><td>false</td></tr><tr><td>onUpdate</td><td>更新</td><td>Boolean</td><td>false</td></tr><tr><td>onOk</td><td>确定按钮回调</td><td>Function</td><td>-</td></tr><tr><td>onCancel</td><td>取消按钮回调</td><td>Function</td><td>-</td></tr><tr><td>onOpen</td><td>背景是否锁定</td><td>Function</td><td>-</td></tr><tr><td>onClosed</td><td>关闭回调，任何情况关闭弹窗都会触发</td><td>Function</td><td>-</td></tr></tbody></table><h2>Props</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>-</td></tr><tr><td>content</td><td>内容，支持HTML</td><td>String</td><td>-</td></tr><tr><td>teleport</td><td>指定挂载节点</td><td>String</td><td>“body”</td></tr><tr><td>close-on-click-overlay</td><td>点击蒙层是否关闭对话框</td><td>Boolean</td><td>false</td></tr><tr><td>no-footer</td><td>是否隐藏底部按钮栏</td><td>Boolean</td><td>false</td></tr><tr><td>no-ok-btn</td><td>是否隐藏确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>no-cancel-btn</td><td>是否隐藏取消按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td>String</td><td>”取消“</td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td>String</td><td>”确 定“</td></tr><tr><td>ok-btn-disabled</td><td>禁用确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancel-auto-close</td><td>取消按钮是否默认关闭弹窗</td><td>Boolean</td><td>true</td></tr><tr><td>text-align</td><td>文字对齐方向，可选值同css的text-align</td><td>String</td><td>“center”</td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td>Boolean</td><td>false</td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>Boolean</td><td>false</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>ok</td><td>确定按钮回调</td><td>Function</td><td>-</td></tr><tr><td>cancel</td><td>取消按钮回调</td><td>Function</td><td>-</td></tr><tr><td>closed</td><td>关闭回调，任何情况关闭弹窗都会触发</td><td>Function</td><td>-</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>header</td><td>自定义标题区域</td></tr><tr><td>default</td><td>自定义内容</td></tr><tr><td>footer</td><td>自定义底部按钮区域</td></tr></tbody></table>',24)],l={setup:(a,{expose:l})=>(l({frontmatter:{}}),(a,l)=>(s(),t("div",d,n)))};export{l as default};