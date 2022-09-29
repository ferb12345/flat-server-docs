import{_ as s,c as a,o as e,a as n}from"./app.6b500ef2.js";const u=JSON.parse('{"title":"Update OAuth Application","description":"","frontmatter":{},"headers":[{"level":2,"title":"Description","slug":"description"},{"level":2,"title":"Method And Path","slug":"method-and-path"},{"level":2,"title":"Request","slug":"request"},{"level":3,"title":"Header","slug":"header"},{"level":3,"title":"Body","slug":"body"},{"level":2,"title":"Response","slug":"response"},{"level":3,"title":"Success","slug":"success"},{"level":3,"title":"Failed","slug":"failed"}],"relativePath":"api/v2/developer/oauth-update.md"}'),l={name:"api/v2/developer/oauth-update.md"},p=n(`<h1 id="update-oauth-application" tabindex="-1">Update OAuth Application <a class="header-anchor" href="#update-oauth-application" aria-hidden="true">#</a></h1><p>\u{1F511} Need JWT Authorization</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><p>Update oauth application</p><h2 id="method-and-path" tabindex="-1">Method And Path <a class="header-anchor" href="#method-and-path" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">POST </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">v2</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">developer</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">oauth</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">update</span></span>
<span class="line"></span></code></pre></div><h2 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-hidden="true">#</a></h2><h3 id="header" tabindex="-1">Header <a class="header-anchor" href="#header" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">authorization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-request-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-session-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">oauthUUID</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">appName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">appDesc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">homepageURL?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">callbacksURL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#F07178;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scopes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DeveloperOAuthScope</span><span style="color:#F07178;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Extends Type: <a href="/types/developer-oauth-scope.html">DeveloperOAuthScope</a></p><h4 id="oauthuuid" tabindex="-1">oauthUUID <a class="header-anchor" href="#oauthuuid" aria-hidden="true">#</a></h4><p>OAuth application uuid</p><h4 id="appname" tabindex="-1">appName <a class="header-anchor" href="#appname" aria-hidden="true">#</a></h4><p>Application name</p><ul><li>minLength: <code>1</code></li><li>maxLength: <code>20</code></li></ul><h4 id="appdesc" tabindex="-1">appDesc <a class="header-anchor" href="#appdesc" aria-hidden="true">#</a></h4><p>Application Description</p><ul><li>minLength: <code>1</code></li><li>maxLength: <code>300</code></li></ul><h4 id="homepageurl" tabindex="-1">homepageURL <a class="header-anchor" href="#homepageurl" aria-hidden="true">#</a></h4><p>Application Homepage URL</p><ul><li>minLength: <code>1</code></li><li>maxLength: <code>100</code></li><li>format: <a href="/misc/ajv-formats/https.html">https</a></li></ul><h4 id="callbacksurl" tabindex="-1">callbacksURL <a class="header-anchor" href="#callbacksurl" aria-hidden="true">#</a></h4><p>Application Callback URL</p><ul><li>minItems: <code>1</code></li><li>maxItems: <code>5</code></li><li>format: <a href="/misc/ajv-formats/https.html">https</a></li></ul><h4 id="scopes" tabindex="-1">scopes <a class="header-anchor" href="#scopes" aria-hidden="true">#</a></h4><p>Application Permission Scopes</p><ul><li>minItems: <code>1</code></li><li>maxItems: <a href="/types/developer-oauth-scope.html"><code>DeveloperOAuthScope</code> size</a></li><li>enum: <a href="/types/developer-oauth-scope.html"><code>DeveloperOAuthScope</code></a></li></ul><h2 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h2><h3 id="success" tabindex="-1">Success <a class="header-anchor" href="#success" aria-hidden="true">#</a></h3><p>HTTP Status Code: <code>200</code></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Success</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Extends Type: <a href="/types/status.html">Status</a></p><h3 id="failed" tabindex="-1">Failed <a class="header-anchor" href="#failed" aria-hidden="true">#</a></h3><p>HTTP Status Code: <code>200</code></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Failed</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ErrorCode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Extends Type: <a href="/types/status.html">Status</a>, <a href="/types/error-code.html">ErrorCode</a></p>`,38),o=[p];function t(c,r,i,d,h,D){return e(),a("div",null,o)}const y=s(l,[["render",t]]);export{u as __pageData,y as default};
