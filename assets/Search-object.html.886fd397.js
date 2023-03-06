import{_ as n,o as a,c as s,a as p}from"./app.d1528cb7.js";const e={},t=p(`<h1 id="使用-findindex-查找对象" tabindex="-1"><a class="header-anchor" href="#使用-findindex-查找对象" aria-hidden="true">#</a> 使用 findIndex 查找对象</h1><p>有时我们需要知道在数组中是否存在某个对象，并且知道它的位置，我们该怎么做呢</p><h2 id="indexof-不推荐" tabindex="-1"><a class="header-anchor" href="#indexof-不推荐" aria-hidden="true">#</a> indexOf(不推荐)</h2><p>indexOf() 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">pre</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">pre</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">pre</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token comment">// -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 indexOf 查找不到数组中是否存在某个对象</p><h3 id="findindex-推荐" tabindex="-1"><a class="header-anchor" href="#findindex-推荐" aria-hidden="true">#</a> findIndex(推荐)</h3><p>findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>prop <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>你还知道哪些可以查找数组中对象的方法</p>`,11),o=[t];function c(r,i){return a(),s("div",null,o)}const u=n(e,[["render",c],["__file","Search-object.html.vue"]]);export{u as default};