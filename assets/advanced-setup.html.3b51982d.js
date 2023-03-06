import{_ as o,r as t,o as i,c as r,b as s,d as e,e as d,a as n}from"./app.d1528cb7.js";const p="/images/setting-work.png",c="/images/settings-work-json.png",l="/images/settings-json.gif",u={},m=n('<h1 id="vscode-基本设置" tabindex="-1"><a class="header-anchor" href="#vscode-基本设置" aria-hidden="true">#</a> VScode 基本设置</h1><p>VScode 有工作区设置和用户设置，那么这两个有什么区别呢</p><h2 id="用户设置和工作区设置的区别" tabindex="-1"><a class="header-anchor" href="#用户设置和工作区设置的区别" aria-hidden="true">#</a> 用户设置和工作区设置的区别</h2><ul><li><p>用户设置：其作用范围是在该用户打开的所有工程或文件</p></li><li><p>工作区设置：其本身是针对文件夹或项目的，是在打开的的文件夹下创建一个名为.vscode 的文件夹，里面包含着仅适用当前目录的 vscode 设置，工作区设置优先级会高于用户的设置</p><p><img src="'+p+'" alt="settings-work"></p><p>当你更改了工作区的第一个关于自动保存的设置后，立马会在此文件夹下生成一个.vscode 文件夹，里面是文件 settings.json,里面内容则是关于这个工程的所有配置</p><p><img src="'+c+'" alt="settings-work"></p></li></ul><p>一个项目是有多名开发者一起协同合作的话，那这个时候就会出现一些设置冲突对不对，在这种情况下，其实就是工作区设置突出作用的时候</p><h2 id="如何打开-settings-json-文件" tabindex="-1"><a class="header-anchor" href="#如何打开-settings-json-文件" aria-hidden="true">#</a> 如何打开 settings.json 文件</h2><p>首先适用快捷键 ctrl+shift+p 打开命令面板 → 输入 setting json→ 选择 <code>Preferences: Open User Settings (JSON)</code>；如图所示便是 json 格式的配置文件，演示打开的是用户设置的 JSON 文件，选择<code>Preferences: Open Workspace Settings (JSON)</code>则打开工作区设置 JSON 文件</p><p><img src="'+l+`" alt="setting-json"></p><h2 id="json-文件配置" tabindex="-1"><a class="header-anchor" href="#json-文件配置" aria-hidden="true">#</a> JSON 文件配置</h2><p>下面我们来配置一下常用的设置</p><h3 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token comment">// 字号</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>.

    <span class="token comment">//编辑器显示缩进参考线</span>
    <span class="token property">&quot;editor.renderIndentGuides&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于字号，通常屏幕推荐使用 13 码，不会特别大，展示信息量也足够。并且开启编辑器显示缩进参考线</p><h3 id="插件设置" tabindex="-1"><a class="header-anchor" href="#插件设置" aria-hidden="true">#</a> 插件设置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token comment">//插件是否自动更新</span>

    <span class="token property">&quot;extensions.autoUpdate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐打开插件自动更新</p><h3 id="文件层次" tabindex="-1"><a class="header-anchor" href="#文件层次" aria-hidden="true">#</a> 文件层次</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token comment">// 文件夹紧凑模式显示</span>
    <span class="token property">&quot;explorer.compactFolders&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，vscode 和 github 保持一致，即当一个文件夹下只有一个文件夹时，会略过中间部分的文件夹，将显示缩略为一行，这里建议将文件夹缩略关闭</p><h3 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token comment">// 开启 material icons</span>
    <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),v={href:"https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",target:"_blank",rel:"noopener noreferrer"},h=n(`<h3 id="vscode-更新" tabindex="-1"><a class="header-anchor" href="#vscode-更新" aria-hidden="true">#</a> VScode 更新</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token comment">// vscode update tips</span>
    <span class="token property">&quot;update.mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭 vscode 自动更新提示，我们定期手动升级即可</p><h3 id="文件格式化" tabindex="-1"><a class="header-anchor" href="#文件格式化" aria-hidden="true">#</a> 文件格式化</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token comment">// 默认格式化方式，统一为 prettier</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">// #每次保存的时候自动格式化</span>
    <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>prettier 默认配置并非全部都为最佳实践，这里推荐将全局默认行为也配置上，这样在任意文件都可以享受到最佳的格式化行为。</p><h3 id="窗口设置" tabindex="-1"><a class="header-anchor" href="#窗口设置" aria-hidden="true">#</a> 窗口设置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调整窗口的缩放级别。原始大小是 0，每次递增(例如 1)或递减(例如 -1)表示放大或缩小 20%。也可以输入小数以便以更精细的粒度调整缩放级别。</p><h3 id="换行" tabindex="-1"><a class="header-anchor" href="#换行" aria-hidden="true">#</a> 换行</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token comment">//超过屏幕视图换行</span>
    <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;afterDelay&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打开自动换行，代码超出屏幕自动切换为下一行</p><h3 id="单双引号设置" tabindex="-1"><a class="header-anchor" href="#单双引号设置" aria-hidden="true">#</a> 单双引号设置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token comment">// 设置格式化时，保持单引号，如果设置为false，则单引号会自动变成双引号</span>
    <span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="每行末尾是否添加分号" tabindex="-1"><a class="header-anchor" href="#每行末尾是否添加分号" aria-hidden="true">#</a> 每行末尾是否添加分号</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token comment">// 设置是否在每行末尾添加分号，默认为 true</span>
    <span class="token property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function b(k,g){const a=t("ExternalLinkIcon");return i(),r("div",null,[m,s("p",null,[e("我喜欢使用的 文件/文件夹 icons 图标是 "),s("a",v,[e("Material Icon Theme"),d(a)]),e("，这一款插件内置大量的图标")]),h])}const f=o(u,[["render",b],["__file","advanced-setup.html.vue"]]);export{f as default};