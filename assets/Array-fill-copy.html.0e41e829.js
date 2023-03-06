import{_ as n,o as a,c as s,a as e}from"./app.d1528cb7.js";const t={},p=e(`<h1 id="数组复制填充" tabindex="-1"><a class="header-anchor" href="#数组复制填充" aria-hidden="true">#</a> 数组复制填充</h1><h2 id="fill-方法" tabindex="-1"><a class="header-anchor" href="#fill-方法" aria-hidden="true">#</a> fill()方法</h2><p>fill() 方法用于将一个固定值替换数组的元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>array<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>value 必需。填充的值。 start 可选。开始填充位置。 end 可选。停止填充位置 (默认为 array.length)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span> <span class="token comment">// [1, 2, 1, 1, 5, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="copywithin-方法" tabindex="-1"><a class="header-anchor" href="#copywithin-方法" aria-hidden="true">#</a> copyWithin()方法</h2><p>copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>array<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>target 必需。复制到指定目标索引位置。 start 可选。元素复制的起始位置。 end 可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span> <span class="token comment">// [3, 4, 5, 4, 5, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>copyWithin()和 slice()都是复制数组，那他们有什么区别吗？</p>`,13),c=[p];function o(i,l){return a(),s("div",null,c)}const r=n(t,[["render",o],["__file","Array-fill-copy.html.vue"]]);export{r as default};