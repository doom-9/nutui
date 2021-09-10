import{e as s,o as a,G as n}from"./vendor.6bc94963.js";const t={class:"markdown-body"},l=[n('<h1>Radio 单选按钮</h1><h3>介绍</h3><p>用于在一组备选项中进行单选</p><h3>安装</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { Radio,RadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { Radio,RadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Radio);\napp.use(RadioGroup);\n</code></pre><h2>基本用法</h2><p>通过 <strong>v-model</strong> 绑定值当前选项的 <strong>label</strong> 。并且必须 <strong>nut-radiogroup</strong> 和 <strong>nut-radio</strong> 相结合进行使用</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>单选框1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>单选框2<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">radioVal</span>:<span class="hljs-string">&quot;1&quot;</span>,\n  };\n}\n</code></pre><h2>禁用选择</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>禁用单选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>禁用单选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">radioVal3</span>:<span class="hljs-string">&quot;1&quot;</span>,\n  };\n}\n</code></pre><h2>自定义尺寸</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>自定义尺寸12<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>自定义尺寸12<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">radioVal4</span>:<span class="hljs-string">&quot;1&quot;</span>,\n  };\n}\n</code></pre><h2>自定义图标</h2><p>建议 <code>icon-name</code> <code>icon-active-name</code> 一起修改</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal5&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon-name</span>=<span class="hljs-string">&quot;checklist&quot;</span> <span class="hljs-attr">icon-active-name</span>=<span class="hljs-string">&quot;checklist&quot;</span>&gt;</span>自定义图标<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon-name</span>=<span class="hljs-string">&quot;checklist&quot;</span> <span class="hljs-attr">icon-active-name</span>=<span class="hljs-string">&quot;checklist&quot;</span>&gt;</span>自定义图标<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">radioVal5</span>:<span class="hljs-string">&quot;1&quot;</span>,\n  };\n}\n</code></pre><h2>触发 change 事件</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal6&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span> &gt;</span>触发事件<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span> &gt;</span>触发事件<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> handleChange3 = <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">any</span></span>) =&gt;</span> {\n    Toast.text(<span class="hljs-string">`您选中了<span class="hljs-subst">${value}</span>`</span>);\n  }\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">radioVal6</span>:<span class="hljs-string">&quot;1&quot;</span>,\n    handleChange3\n  };\n}\n</code></pre><h2>Prop</h2><h3>Radio</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>是否禁用选择</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>icon-size</td><td><a href="#/icon">图标尺寸</a></td><td>String、Number</td><td><code>18</code></td></tr><tr><td>icon-name</td><td><a href="#/icon">图标名称</a>，选中前(建议和<code>icon-active-name</code>一起修改)</td><td>String</td><td><code>&#39;check-normal&#39;</code></td></tr><tr><td>icon-active-name</td><td><a href="#/icon">图标名称</a>，选中后(建议和<code>icon-name</code>一起修改)</td><td>String</td><td><code>&#39;check-checked&#39;</code></td></tr><tr><td>label</td><td>单选框标识</td><td>String、Number、Boolean</td><td>-</td></tr></tbody></table><h3>RadioGroup</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项的标识符，与label值一致时呈选中状态</td><td>String、Number、Boolean</td><td>-</td></tr><tr><td>text-position</td><td>文本所在的位置，可选值：<code>left</code>,<code>right</code></td><td>String</td><td><code>right</code></td></tr></tbody></table><h2>RadioGroup Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td>当前选中项值（label）【设置label后有值、默认为空】</td></tr></tbody></table>',29)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",t,l)))};export{p as default};