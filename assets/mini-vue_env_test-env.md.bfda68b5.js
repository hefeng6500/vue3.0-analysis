import{_ as s,c as n,o as a,d as t}from"./app.d4156150.js";const m='{"title":"\u642D\u5EFA\u6D4B\u8BD5\u73AF\u5883","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u4F9D\u8D56","slug":"\u5B89\u88C5\u4F9D\u8D56"},{"level":2,"title":"\u521D\u59CB\u5316 jest \u914D\u7F6E","slug":"\u521D\u59CB\u5316-jest-\u914D\u7F6E"},{"level":3,"title":"\u65B0\u5EFA test \u547D\u4EE4\u884C","slug":"\u65B0\u5EFA-test-\u547D\u4EE4\u884C"}],"relativePath":"mini-vue/env/test-env.md","lastUpdated":1647160491000}',e={},o=t(`<h1 id="\u642D\u5EFA\u6D4B\u8BD5\u73AF\u5883" tabindex="-1">\u642D\u5EFA\u6D4B\u8BD5\u73AF\u5883 <a class="header-anchor" href="#\u642D\u5EFA\u6D4B\u8BD5\u73AF\u5883" aria-hidden="true">#</a></h1><p>\u6839\u636E vuejs/core\uFF0C\u91C7\u7528\u4E86 jest \u6D4B\u8BD5\u5DE5\u5177\u3002<a href="https://jestjs.io/zh-Hans/" target="_blank" rel="noopener noreferrer">https://jestjs.io/zh-Hans/</a></p><h2 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="language-"><pre><code>pnpm install jest ts-jest ts-node -D -W
</code></pre></div><h2 id="\u521D\u59CB\u5316-jest-\u914D\u7F6E" tabindex="-1">\u521D\u59CB\u5316 jest \u914D\u7F6E <a class="header-anchor" href="#\u521D\u59CB\u5316-jest-\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u4F1A\u5728\u6839\u76EE\u5F55\u4E0B\u751F\u6210 jest.config.ts</p><div class="language-shell"><pre><code>node_modules/.bin/jest --init
</code></pre></div><p>jest \u914D\u7F6E\u5982\u4E0B</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// Automatically clear mock calls, instances and results before every test</span>
  clearMocks<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// Indicates whether the coverage information should be collected while executing the test</span>
  collectCoverage<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of glob patterns indicating a set of files for which coverage information should be collected</span>
  collectCoverageFrom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;packages/*/src/**/*.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// The directory where Jest should output its coverage files</span>
  coverageDirectory<span class="token operator">:</span> <span class="token string">&quot;coverage&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Indicates which provider should be used to instrument code for coverage</span>
  coverageProvider<span class="token operator">:</span> <span class="token string">&quot;v8&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of file extensions your modules use</span>
  moduleFileExtensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module</span>
  moduleNameMapper<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;^@vue/(.*?)$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;rootDir&gt;/packages/$1/src&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// A preset that is used as a base for Jest&#39;s configuration</span>
  preset<span class="token operator">:</span> <span class="token string">&quot;ts-jest&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// The root directory that Jest should scan for tests and modules within</span>
  rootDir<span class="token operator">:</span> __dirname<span class="token punctuation">,</span>

  <span class="token comment">// The test environment that will be used for testing</span>
  testEnvironment<span class="token operator">:</span> <span class="token string">&quot;jsdom&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// The glob patterns Jest uses to detect test files</span>
  testMatch<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;rootDir&gt;/packages/**/__tests__/**/*spec.[jt]s?(x)&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped</span>
  testPathIgnorePatterns<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\\\\\\\\node_modules\\\\\\\\&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5728\u5BF9\u5E94\u7684 packages \u76EE\u5F55\u4E0B\u65B0\u5EFA __tests__ \u6587\u4EF6\u5939,\u91CC\u9762\u65B0\u5EFA *.spec.ts \u6D4B\u8BD5\u7528\u4F8B\u6587\u4EF6\u3002</p><h3 id="\u65B0\u5EFA-test-\u547D\u4EE4\u884C" tabindex="-1">\u65B0\u5EFA test \u547D\u4EE4\u884C <a class="header-anchor" href="#\u65B0\u5EFA-test-\u547D\u4EE4\u884C" aria-hidden="true">#</a></h3><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jest&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,12),p=[o];function c(r,l,u,i,d,k){return a(),n("div",null,p)}var g=s(e,[["render",c]]);export{m as __pageData,g as default};
