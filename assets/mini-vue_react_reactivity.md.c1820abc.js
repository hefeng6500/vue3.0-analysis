import{_ as n,c as s,o as a,d as t}from"./app.4d765364.js";const w='{"title":"@vue/reactivity","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u73B0 reactive","slug":"\u5B9E\u73B0-reactive"},{"level":2,"title":"\u5B9E\u73B0 ref","slug":"\u5B9E\u73B0-ref"}],"relativePath":"mini-vue/react/reactivity.md","lastUpdated":1646996797000}',p={},o=t(`<h1 id="vue-reactivity" tabindex="-1">@vue/reactivity <a class="header-anchor" href="#vue-reactivity" aria-hidden="true">#</a></h1><p>\u672C\u7ED3\u5B9E\u73B0\u54CD\u5E94\u5F0F\u76F8\u5173 api\uFF0C\u5305\u62EC\u5982\u4E0B</p><p><strong>@vue/reactivity/src/index.ts</strong></p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> shallowRef<span class="token punctuation">,</span> toRef<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./ref&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> effect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./effect&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./computed&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  shallowReactive<span class="token punctuation">,</span>
  <span class="token keyword">readonly</span><span class="token punctuation">,</span>
  shallowReadonly<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./reactive&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5B9E\u73B0-reactive" tabindex="-1">\u5B9E\u73B0 reactive <a class="header-anchor" href="#\u5B9E\u73B0-reactive" aria-hidden="true">#</a></h2><p><strong>package.json</strong></p><p>\u914D\u7F6E\u6253\u5305\u9009\u9879\uFF0C\u6253\u5305\u51FA\u6765\u7684\u683C\u5F0F\u6709 <code>esm-bundler</code>, <code>esm-browser</code>,<code>cjs</code>,<code>global</code></p><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/reactivity&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;buildOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VueReactivity&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;esm-bundler&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;esm-browser&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cjs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;global&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>reactive.ts</strong></p><p>\u5B9E\u73B0\u54CD\u5E94\u5F0F api\uFF0C<code>reactive</code>, <code>shallowReactive</code>, <code>readonly</code>,<code>shallowReadonly</code> \u90FD\u4F7F\u7528 createReactiveObject \u51FD\u6570\u8FDB\u884C\u521B\u5EFA\uFF0C\u8BE5\u51FD\u6570\u5165\u53C2\u5982\u4E0B\uFF1A target(\u76EE\u6807\u5BF9\u8C61), isReadonly(\u662F\u5426\u53EA\u8BFB), baseHandlers(proxy \u7684 <code>handler</code> \u914D\u7F6E)</p><p>\u8FD9\u91CC\u5C06<code>reactive</code>, <code>shallowReactive</code>, <code>readonly</code>,<code>shallowReadonly</code> \u7684 proxy \u7684 <code>handler</code> \u914D\u7F6E\u5168\u90E8\u63D0\u53D6\u5230 <code>baseHandlers.ts</code> \u6587\u4EF6\u4E2D\u5B9A\u4E49</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/shared&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  mutableHandlers<span class="token punctuation">,</span>
  shallowReactiveHandlers<span class="token punctuation">,</span>
  readonlyHandlers<span class="token punctuation">,</span>
  shallowReadonlyHandlers<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./baseHandlers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> mutableHandlers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> shallowReactiveHandlers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token keyword">readonly</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> readonlyHandlers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> shallowReadonlyHandlers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> readonlyMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> reactiveMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> isReadonly<span class="token punctuation">,</span> baseHandlers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> proxyMap <span class="token operator">=</span> isReadonly <span class="token operator">?</span> readonlyMap <span class="token operator">:</span> reactiveMap<span class="token punctuation">;</span>
  <span class="token keyword">const</span> existProxy <span class="token operator">=</span> proxyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> existProxy<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> baseHandlers<span class="token punctuation">)</span><span class="token punctuation">;</span>

  proxyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> proxy<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>baseHandlers.ts</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isObject<span class="token punctuation">,</span> extend<span class="token punctuation">,</span> isArray<span class="token punctuation">,</span> isIntegerKey<span class="token punctuation">,</span> hasOwn<span class="token punctuation">,</span> hasChanged <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/shared&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> track<span class="token punctuation">,</span> trigger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./effect&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TrackOpTypes<span class="token punctuation">,</span> TriggerOpTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./operations&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> <span class="token keyword">readonly</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./reactive&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span>isReadonly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> shallow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8FDB\u884C\u4F9D\u8D56\u6536\u96C6</span>
      <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TrackOpTypes<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>shallow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token keyword">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createSetters</span><span class="token punctuation">(</span>shallow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldValue <span class="token operator">=</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> hadKey <span class="token operator">=</span>
      <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isIntegerKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token operator">?</span> <span class="token function">Number</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&lt;</span> target<span class="token punctuation">.</span>length
        <span class="token operator">:</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hadKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChanged</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">SET</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> get <span class="token operator">=</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token function">createSetters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> shallowGet <span class="token operator">=</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> shallowSet <span class="token operator">=</span> <span class="token function">createSetters</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> readonlyGet <span class="token operator">=</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> shallowReadonlyGet <span class="token operator">=</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> readonlyObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Set operation on key &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; failed: target is readonly.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      target
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mutableHandlers <span class="token operator">=</span> <span class="token punctuation">{</span>
  get<span class="token punctuation">,</span>
  set<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> shallowReactiveHandlers <span class="token operator">=</span> <span class="token punctuation">{</span>
  get<span class="token operator">:</span> shallowGet<span class="token punctuation">,</span>
  set<span class="token operator">:</span> shallowSet<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> readonlyHandlers <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    get<span class="token operator">:</span> readonlyGet<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  readonlyObj
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> shallowReadonlyHandlers <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    get<span class="token operator">:</span> shallowReadonlyGet<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  readonlyObj
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5728 <code>baseHandlers.ts</code> \u4E2D <code>createGetter</code>\u3001<code>createSetter</code> \u51FD\u6570\u7528\u4E8E\u521B\u5EFA\u5BF9 <code>reactive</code>, <code>shallowReactive</code>, <code>readonly</code>,<code>shallowReadonly</code>\u56DB\u4E2A api \u7684 <code>getter</code> \u548C <code>setter</code></p><p><code>createGetter</code> \u51FD\u6570\u4F1A\u5BF9\u8BBF\u95EE\u5BF9\u8C61\u7684\u5C5E\u6027\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C<code>createSetter</code> \u51FD\u6570\u4F1A\u5BF9\u8BBF\u95EE\u5BF9\u8C61\u7684\u5C5E\u6027\u8FDB\u884C\u89E6\u53D1\u66F4\u65B0\uFF0C\u5173\u4E8E\u4F9D\u8D56\u6536\u96C6\u548C\u89E6\u53D1\u66F4\u65B0\u6211\u4EEC\u540E\u7EED\u4F1A\u8BB2\u5230</p><h2 id="\u5B9E\u73B0-ref" tabindex="-1">\u5B9E\u73B0 ref <a class="header-anchor" href="#\u5B9E\u73B0-ref" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hasChanged<span class="token punctuation">,</span> isArray<span class="token punctuation">,</span> isObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/shared&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> track<span class="token punctuation">,</span> trigger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./effect&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TrackOpTypes<span class="token punctuation">,</span> TriggerOpTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./operations&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./reactive&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createRef</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createRef</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toRef</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ObjectRefImpl</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token function">isArray</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>object<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ret<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createRef</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">,</span> shallow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RefImpl</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">,</span> shallow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">convert</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">reactive</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// beta \u7248\u672C \u4E4B\u524D\u7684\u7248\u672Cref \u5C31\u662F\u4E2A\u5BF9\u8C61 \uFF0C\u7531\u4E8E\u5BF9\u8C61\u4E0D\u65B9\u4FBF\u6269\u5C55 \u6539\u6210\u4E86\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">RefImpl</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> _value<span class="token punctuation">;</span>
  <span class="token keyword">public</span> __v_isRef <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> rawValue<span class="token punctuation">,</span> <span class="token keyword">public</span> shallow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u662F\u6DF1\u5EA6\u7684\uFF0C\u9700\u8981\u628A\u91CC\u9762\u7684\u53D8\u6210\u54CD\u5E94\u5F0F\u7684</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> shallow <span class="token operator">?</span> rawValue <span class="token operator">:</span> <span class="token function">convert</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F9D\u8D56\u6536\u96C6\uFF0Ckey \u4E3A\u56FA\u5B9A\u7684 value</span>
    <span class="token function">track</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> TrackOpTypes<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// setter\uFF0C\u53EA\u5904\u7406 value \u5C5E\u6027\u7684\u4FEE\u6539</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChanged</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rawValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>rawValue <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shallow <span class="token operator">?</span> newValue <span class="token operator">:</span> <span class="token function">convert</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// \u6D3E\u53D1\u901A\u77E5</span>
      <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">SET</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ObjectRefImpl</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> __v_isRef <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> target<span class="token punctuation">,</span> <span class="token keyword">public</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>ref</code> \u63A5\u53D7\u4E00\u4E2A\u5185\u90E8\u503C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u5F0F\u4E14\u53EF\u53D8\u7684 <code>ref</code> \u5BF9\u8C61\u3002ref \u5BF9\u8C61\u5177\u6709\u6307\u5411\u5185\u90E8\u503C\u7684\u5355\u4E2A property <code>.value</code>\u3002</p><p><code>ref</code> \u672C\u662F\u7528\u4E8E\u8BBE\u8BA1\u5BF9\u57FA\u7840\u7C7B\u578B\u7684\u503C\u8FDB\u884C\u54CD\u5E94\u5F0F\u7684\u4E00\u4E2A api\uFF0C\u6E90\u7801\u4E2D\u770B\u5230 ref \u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5185\u90E8\u4F1A\u5BF9\u8FD9\u4E2A\u5BF9\u8C61\u8FDB\u884C\u54CD\u5E94\u5F0F\u3002ref api\u901A\u8FC7\u8C03\u7528 <code>createRef</code> \u8FD4\u56DE\u4E00\u4E2A RefImpl \u5B9E\u4F8B\uFF0C\u8BE5\u5B9E\u4F8B\u4E0A\u7684 <code>.value</code> \u5C31\u662F ref \u51FD\u6570\u4F20\u5165\u7684\u503C\uFF0C \u5728\u8BBF\u95EE\u9636\u6BB5 getter \u4E2D\u4F1A\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C\u4FEE\u6539\u65F6\u4F1A\u89E6\u53D1\u4F9D\u8D56\u66F4\u65B0</p><p>\u7136\u540E <code>toRef</code> \u5E76\u6CA1\u6709\u590D\u7528 ref \u7684\u80FD\u529B\uFF08\u4F9D\u8D56\u6536\u96C6\u3001\u89E6\u53D1\u66F4\u65B0\uFF09\uFF0C\u53EA\u662F\u8D1F\u8D23\u4E3A\u6E90\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0A\u7684\u67D0\u4E2A property \u65B0\u521B\u5EFA\u4E00\u4E2A ref\u3002\u8FD9\u4E2A ref \u53EF\u4EE5\u7406\u89E3\u4E3A\u5F15\u7528\uFF0C\u53EA\u662F\u4E3A\u6E90\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684 property \u8FDB\u884C\u4E00\u4E2A\u54CD\u5E94\u5F0F\u8FDE\u63A5\uFF0C\u81EA\u8EAB\u6CA1\u6709\u54CD\u5E94\u5F0F\u3002</p><p><code>roRefs</code> \u5C31\u662F\u590D\u7528 <code>toRef</code> \u7684\u80FD\u529B\uFF0C\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u7684\u53EF\u904D\u5386\u5C5E\u6027\u8FDB\u884C <code>toRef</code></p>`,22),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{w as __pageData,f as default};
