import{_ as n,o as s,c as a,a as e}from"./app.d1528cb7.js";const t={},p=e(`<h1 id="空值合并运算符" tabindex="-1"><a class="header-anchor" href="#空值合并运算符" aria-hidden="true">#</a> 空值合并运算符</h1><p>为默认变量赋值</p><h2 id="使用-不推荐" tabindex="-1"><a class="header-anchor" href="#使用-不推荐" aria-hidden="true">#</a> 使用||（不推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token keyword">let</span> total <span class="token operator">=</span> count <span class="token operator">||</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token comment">// total是10而不是0</span>
<span class="token keyword">let</span> tip <span class="token operator">=</span> temp <span class="token operator">||</span> <span class="token string">&#39;haha&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tip<span class="token punctuation">)</span> <span class="token comment">// tip是&#39;haha&#39;而不是&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>||是一个布尔逻辑运算符，左侧的操作数会被强制转换成布尔值用于求值，任何假值都不会被返回。无法用 0、&#39;&#39;、NaN 作为有效值。</p><h2 id="使用-推荐" tabindex="-1"><a class="header-anchor" href="#使用-推荐" aria-hidden="true">#</a> 使用??（推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token keyword">let</span> total <span class="token operator">=</span> count <span class="token operator">??</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token comment">// total是10</span>
<span class="token keyword">let</span> tip <span class="token operator">=</span> temp <span class="token operator">??</span> <span class="token string">&#39;haha&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tip<span class="token punctuation">)</span> <span class="token comment">// tip是&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>空值合并运算符可以避免这种陷阱，其只在第一个操作数为 null 或 undefined 时（而不是其它假值）返回第二个操作数。</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>空值合并运算符会有短路效应吗</p>`,10),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","空值合并运算符.html.vue"]]);export{d as default};
