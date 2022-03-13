import{_ as n,c as s,o as a,d as t}from"./app.041b2baf.js";const m='{"title":"Rollup\u57FA\u7840\u73AF\u5883\u642D\u5EFA","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\u3001\u521B\u5EFA\u57FA\u7840\u914D\u7F6E","slug":"_1\u3001\u521B\u5EFA\u57FA\u7840\u914D\u7F6E"},{"level":3,"title":"1\u3001\u9879\u76EE\u521D\u59CB\u5316","slug":"_1\u3001\u9879\u76EE\u521D\u59CB\u5316"},{"level":3,"title":"2\u3001\u5B89\u88C5\u4F9D\u8D56\u5305","slug":"_2\u3001\u5B89\u88C5\u4F9D\u8D56\u5305"},{"level":2,"title":"2\u3001\u6784\u5EFA\u5F00\u53D1\u73AF\u5883\u811A\u672C","slug":"_2\u3001\u6784\u5EFA\u5F00\u53D1\u73AF\u5883\u811A\u672C"},{"level":2,"title":"3\u3001\u914D\u7F6E rollup","slug":"_3\u3001\u914D\u7F6E-rollup"}],"relativePath":"mini-vue/env/base-env.md","lastUpdated":1646996797000}',p={},o=t(`<h1 id="rollup\u57FA\u7840\u73AF\u5883\u642D\u5EFA" tabindex="-1">Rollup\u57FA\u7840\u73AF\u5883\u642D\u5EFA <a class="header-anchor" href="#rollup\u57FA\u7840\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a></h1><p>\u642D\u5EFA mini-vue3 \u57FA\u7840\u5F00\u53D1\u73AF\u5883\u5168\u90E8\u6309\u7167 Vue-next \u914D\u7F6E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5220\u7E41\u5C31\u7B80\u4E3A\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6D01\u3001\u53EF\u7528\u3001\u9AD8\u6548\u7684\u73AF\u5883\uFF01</p><p>\u521B\u5EFA\u5B8C\u6210\u540E\u76EE\u5F55\u5982\u4E0B</p><div class="language-"><pre><code>build-your-own-vue3
\u251C\u2500 .gitignore
\u251C\u2500 doc
\u2502  \u2514\u2500 init.md
\u251C\u2500 examples
\u2502  \u2514\u2500 index.html
\u251C\u2500 package.json
\u251C\u2500 packages
\u2502  \u251C\u2500 reactivity
\u2502  \u2502  \u251C\u2500 package.json
\u2502  \u2502  \u2514\u2500 src
\u2502  \u2502     \u2514\u2500 index.ts
\u2502  \u251C\u2500 size-check
\u2502  \u2502  \u2514\u2500 package.json
\u2502  \u2514\u2500 vue
\u2502     \u251C\u2500 index.js
\u2502     \u251C\u2500 package.json
\u2502     \u2514\u2500 src
\u2502        \u251C\u2500 index.ts
\u2502        \u2514\u2500 runtime.ts
\u251C\u2500 README.md
\u251C\u2500 rollup.config.js
\u251C\u2500 scripts
\u2502  \u251C\u2500 dev.js
\u2502  \u2514\u2500 utils.js
\u251C\u2500 tsconfig.json
\u2514\u2500 yarn.lock
</code></pre></div><h2 id="_1\u3001\u521B\u5EFA\u57FA\u7840\u914D\u7F6E" tabindex="-1">1\u3001\u521B\u5EFA\u57FA\u7840\u914D\u7F6E <a class="header-anchor" href="#_1\u3001\u521B\u5EFA\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="_1\u3001\u9879\u76EE\u521D\u59CB\u5316" tabindex="-1">1\u3001\u9879\u76EE\u521D\u59CB\u5316 <a class="header-anchor" href="#_1\u3001\u9879\u76EE\u521D\u59CB\u5316" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token function">yarn</span> init
</code></pre></div><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u79C1\u6709\u5C5E\u6027\uFF0C\u6253\u5305\u65F6\u5FFD\u7565\u8BE5\u5305</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workspaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// npm \u591A\u5305\u7BA1\u7406\uFF0C\u4F7F\u7528 packages \u4E0B\u7684\u5DE5\u4F5C\u76EE\u5F55</span>
    <span class="token string">&quot;packages/*&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/hefeng6500/build-your-own-vue3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hefeng6500 &lt;2443992009@qq.com&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2\u3001\u5B89\u88C5\u4F9D\u8D56\u5305" tabindex="-1">2\u3001\u5B89\u88C5\u4F9D\u8D56\u5305 <a class="header-anchor" href="#_2\u3001\u5B89\u88C5\u4F9D\u8D56\u5305" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> @babel/core @babel/preset-env @rollup/plugin-babel @rollup/plugin-json chalk execa minimist rollup rollup-plugin-typescript2 -D -W
</code></pre></div><p><strong>\u914D\u7F6E babel</strong></p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    tsPlugin<span class="token punctuation">,</span>
    <span class="token function">getBabelOutputPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">allowAllFormats</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u521D\u59CB\u5316 ts \u914D\u7F6E</strong> \u6839\u76EE\u5F55\u4E0B\u751F\u6210 <code>tsconfig.json</code></p><div class="language-shell"><pre><code><span class="token function">yarn</span> global <span class="token function">add</span> typescript

tsc --init
</code></pre></div><p>\u4FEE\u6539 <code>tsconfig.json</code></p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> tsPlugin <span class="token operator">=</span> <span class="token function">ts</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">tsconfig</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;tsconfig.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cacheRoot</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;node_modules/.rts2_cache&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>tsPlugin<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u6DFB\u52A0 .gitignore</strong></p><div class="language-"><pre><code>dist
.DS_Store
node_modules
coverage
temp
explorations
TODOs.md
*.log
</code></pre></div><h2 id="_2\u3001\u6784\u5EFA\u5F00\u53D1\u73AF\u5883\u811A\u672C" tabindex="-1">2\u3001\u6784\u5EFA\u5F00\u53D1\u73AF\u5883\u811A\u672C <a class="header-anchor" href="#_2\u3001\u6784\u5EFA\u5F00\u53D1\u73AF\u5883\u811A\u672C" aria-hidden="true">#</a></h2><p>\u521B\u5EFA <code>scripts/dev.js</code>, <code>scripts/utils.js</code></p><div class="language-js"><pre><code><span class="token comment">// utils.js</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> chalk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BFB\u53D6 packages \u76EE\u5F55\u4E0B\u9700\u8981\u6253\u5305\u7684\u76EE\u5F55</span>
<span class="token keyword">const</span> targets <span class="token operator">=</span> <span class="token punctuation">(</span>exports<span class="token punctuation">.</span>targets <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span><span class="token string">&#39;packages&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">f</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">packages/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>f<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> pkg <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">../packages/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>f<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/package.json</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pkg<span class="token punctuation">.</span>private <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>pkg<span class="token punctuation">.</span>buildOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u6A21\u7CCA\u5339\u914D\u9700\u8981\u6253\u5305\u7684 package name</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">fuzzyMatchTarget</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">partialTargets<span class="token punctuation">,</span> includeAllMatching</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> matched <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  partialTargets<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">partialTarget</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> target <span class="token keyword">of</span> targets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>partialTarget<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        matched<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>includeAllMatching<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>matched<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> matched
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span>bgRed<span class="token punctuation">.</span><span class="token function">white</span><span class="token punctuation">(</span><span class="token string">&#39; ERROR &#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Target </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">underline</span><span class="token punctuation">(</span>partialTargets<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> not found!</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BFC\u51FA\u7684 <code>targets</code> \u4E3A packages \u76EE\u5F55\u4E0B\u7684\u5305\u540D\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\u4F8B\u5982: <code>vue</code>\u3001<code>reactivity</code>;</p><p><code>fuzzyMatchTarget</code> \u6A21\u7CCA\u5339\u914D\u9700\u8981\u6253\u5305\u7684\u76EE\u6807\u5305\u540D\uFF0C\u8FD4\u56DE\u5339\u914D\u7684\u5305\u540D\u3002\u5982\u679C\u672A\u5339\u914D\u5230\u5305\u5C06\u4F7F\u7528 chalk \u63D2\u4EF6\u9AD8\u4EAE\u63D0\u793A\u9519\u8BEF\u4FE1\u606F</p><div class="language-js"><pre><code><span class="token comment">// dev.js</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> execa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;execa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> fuzzyMatchTarget <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;minimist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> target <span class="token operator">=</span> args<span class="token punctuation">.</span>_<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token function">fuzzyMatchTarget</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>_<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&#39;reactivity&#39;</span>
<span class="token keyword">const</span> formats <span class="token operator">=</span> args<span class="token punctuation">.</span>formats <span class="token operator">||</span> args<span class="token punctuation">.</span>f
<span class="token keyword">const</span> sourceMap <span class="token operator">=</span> args<span class="token punctuation">.</span>sourcemap <span class="token operator">||</span> args<span class="token punctuation">.</span>s
<span class="token comment">// const commit = execa.sync(&#39;git&#39;, [&#39;rev-parse&#39;, &#39;HEAD&#39;]).stdout.slice(0, 7)</span>

<span class="token function">execa</span><span class="token punctuation">(</span>
  <span class="token string">&#39;rollup&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token string">&#39;-wc&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;--environment&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token comment">// \`COMMIT:\${commit}\`,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">TARGET:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">FORMATS:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>formats <span class="token operator">||</span> <span class="token string">&#39;global&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      sourceMap <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">SOURCE_MAP:true</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">]</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">&#39;inherit&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><p>execa \u662F\u4E00\u4E2A\u7BA1\u7406 node \u547D\u4EE4\u884C\u6267\u884C\u7684\u63D2\u4EF6\uFF0Cminimist \u662F\u4E00\u4E2A\u683C\u5F0F\u5316\u547D\u4EE4\u53C2\u6570\u9009\u9879\u7684\u63D2\u4EF6\u3002 <code>dev.js</code> \u4F7F\u7528\u4E86 execa \u7BA1\u7406 rollup \u8FDB\u884C\u6253\u5305\uFF0C<code>-w</code> \u5B9E\u65F6\u76D1\u542C\u6587\u4EF6\u8FDB\u884C\u70ED\u66F4\u65B0</p><h2 id="_3\u3001\u914D\u7F6E-rollup" tabindex="-1">3\u3001\u914D\u7F6E rollup <a class="header-anchor" href="#_3\u3001\u914D\u7F6E-rollup" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ts <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-typescript2&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-json&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getBabelOutputPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-babel&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> masterVersion <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./package.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>version<span class="token punctuation">;</span>
<span class="token keyword">const</span> packagesDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;packages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> packageDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>packagesDir<span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TARGET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>packageDir<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pkg <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">package.json</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> packageOptions <span class="token operator">=</span> pkg<span class="token punctuation">.</span>buildOptions <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> packageOptions<span class="token punctuation">.</span>filename <span class="token operator">||</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>packageDir<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> outputConfigs <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;esm-bundler&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.esm-bundler.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">es</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;esm-browser&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.esm-browser.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">es</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cjs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.cjs.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">cjs</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.global.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">iife</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// runtime-only builds, for main &quot;vue&quot; package only</span>
  <span class="token string-property property">&quot;esm-bundler-runtime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.runtime.esm-bundler.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">es</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;esm-browser-runtime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.runtime.esm-browser.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;global-runtime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.runtime.global.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;iife&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// const defaultFormats = [&quot;esm-bundler&quot;, &quot;cjs&quot;];</span>
<span class="token comment">// const inlineFormats = process.<wbr>env.FORMATS &amp;&amp; process.<wbr>env.FORMATS.split(&quot;,&quot;);</span>

<span class="token keyword">const</span> packageFormats <span class="token operator">=</span> packageOptions<span class="token punctuation">.</span>formats<span class="token punctuation">;</span>

<span class="token keyword">const</span> tsPlugin <span class="token operator">=</span> <span class="token function">ts</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">tsconfig</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;tsconfig.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cacheRoot</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;node_modules/.rts2_cache&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> packageConfigs <span class="token operator">=</span> packageFormats<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">format</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token function">createConfig</span><span class="token punctuation">(</span>format<span class="token punctuation">,</span> outputConfigs<span class="token punctuation">[</span>format<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> packageConfigs<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createConfig</span><span class="token punctuation">(</span><span class="token parameter">format<span class="token punctuation">,</span> output<span class="token punctuation">,</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> entryFile <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">runtime$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">src/runtime.ts</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">src/index.ts</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> isGlobalBuild <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">global</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isGlobalBuild<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    output<span class="token punctuation">.</span>name <span class="token operator">=</span> packageOptions<span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>entryFile<span class="token punctuation">)</span><span class="token punctuation">,</span>
    output<span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">namedExports</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      tsPlugin<span class="token punctuation">,</span>
      <span class="token function">getBabelOutputPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">allowAllFormats</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>outputConfigs</code> \u5BF9\u8C61\u5B58\u50A8\u4E86 rollup \u5BFC\u51FA\u5BF9\u8C61\u7684 <strong>\u540D\u79F0</strong> \u548C <strong>\u6587\u4EF6\u5BFC\u51FA\u6A21\u5757\u89C4\u8303</strong>\uFF1B\u66F4\u591A\u524D\u7AEF\u6A21\u5757\u89C4\u8303\u57FA\u7840\u77E5\u8BC6\u8BF7\u8FDB: <a href="https://juejin.cn/post/6844903576309858318" target="_blank" rel="noopener noreferrer">\u524D\u7AEF\u6A21\u5757\u5316\uFF1ACommonJS,AMD,CMD,ES6</a></p><p>format \u683C\u5F0F\u5206\u4E3A\uFF1A</p><ul><li><strong>es</strong>: es module\uFF0C\u662F ES \u6A21\u5757\u89C4\u8303\uFF0C\u4F7F\u7528 import \u548C export \u5173\u952E\u5B57\u5BF9\u6A21\u5757\u8FDB\u884C\u5BFC\u5165\u5BFC\u51FA</li><li><strong>cjs</strong>: commonjs \u89C4\u8303\uFF0C \u4F7F\u7528 module.exports \u548C require \u5173\u952E\u5B57\u5BF9\u6A21\u5757\u8FDB\u884C\u5BFC\u5165\u5BFC\u51FA</li><li><strong>iife</strong>: \u7ACB\u5373\u8C03\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\u3002\u662F\u4E00\u4E2A\u81EA\u6267\u884C\u51FD\u6570\uFF0C\u8FD9\u91CC\u6253\u5305\u540E\u4F1A\u5C06\u7ED3\u679C\u8D4B\u503C\u7ED9\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF,\u5F62\u5982\uFF1A</li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">VueReactivity</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> effect<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u91CC <code>export default packageConfigs;</code> packageFormats \u662F\u5355\u4E2A npm \u5305\u914D\u7F6E\u6587\u4EF6\u9700\u8981\u8F93\u51FA\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u50CF package/vue \u4E0B\u7684 package.json \u5982\u4E0B\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;buildOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;esm-bundler&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;esm-bundler-runtime&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;cjs&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;global&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;global-runtime&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;esm-browser&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;esm-browser-runtime&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>packageConfigs \u4F1A\u5BF9 formats \u4E0B\u5B9A\u4E49\u7684\u5404\u79CD\u6A21\u5757\u51E0\u4E2A\u8FDB\u884C\u6253\u5305\uFF0C\u6700\u540E\u8F93\u51FA\u591A\u4E2A\u6253\u5305\u6587\u4EF6</p><p>\u6CE8\u610F\uFF1Arollup.config.js \uFF0C<strong>\u5F53\u524D\u7684\u914D\u7F6E\u662F\u5BF9\u4E00\u4E2A npm \u5305\u4E0B\u7684\u591A\u4E2A\u5BFC\u51FA\u683C\u5F0F\u8FDB\u884C\u6253\u5305\uFF0C\u800C\u4E0D\u662F\u5BF9\u591A\u4E2Anpm\u5305\u8FDB\u884C\u6253\u5305</strong></p>`,36),e=[o];function c(u,l,i,r,k,g){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
