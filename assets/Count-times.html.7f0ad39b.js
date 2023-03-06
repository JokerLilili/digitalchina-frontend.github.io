import{_ as n,o as s,c as a,a as p}from"./app.d1528cb7.js";const t={},e=p(`<h1 id="计算数组中元素出现次数" tabindex="-1"><a class="header-anchor" href="#计算数组中元素出现次数" aria-hidden="true">#</a> 计算数组中元素出现次数</h1><p>这里我们将来学习如何计算数组中元素出现的次数。</p><h2 id="for-of-循环-不推荐" tabindex="-1"><a class="header-anchor" href="#for-of-循环-不推荐" aria-hidden="true">#</a> for of 循环（不推荐）</h2><p>在 for...of 循环期间，检查元素是否已经在对象中；如果是在的，则将其值加一。否则，它是添加到对象的新元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> counts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> myArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  counts<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> counts<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">?</span> counts<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> counts<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> counts<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> counts<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> counts<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span>，counts<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然这有很大的局限性，下面我们用 reduce 实现一下</p><h2 id="array-prototype-reduce-推荐" tabindex="-1"><a class="header-anchor" href="#array-prototype-reduce-推荐" aria-hidden="true">#</a> Array.prototype.reduce（推荐）</h2><p>Array.prototype.reduce 接受两个参数：一个回调函数和一个初始值。将初始值设置为 Object 时，可以将该对象的属性设置为数组元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> myArray <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span> currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  accumulator<span class="token punctuation">[</span>currentValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">++</span>accumulator<span class="token punctuation">[</span>currentValue<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">1</span>
  <span class="token keyword">return</span> accumulator
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>Array.prototype.reduce 除了计算数组中元素次数还有哪些用法？</p>`,11),o=[e];function c(u,l){return s(),a("div",null,o)}const i=n(t,[["render",c],["__file","Count-times.html.vue"]]);export{i as default};