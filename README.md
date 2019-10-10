<h2 id="A_Hello_world!_example">A "Hello world!" example</h2>

<p>The above section might sound really exciting, and so it should — JavaScript is one of the most lively web technologies today, and as you start to get good at using it, your websites will enter a new dimension of power and creativity.</p>

<p>However, becoming comfortable with JavaScript is a little harder than becoming comfortable with HTML and CSS. You may have to start small and keep working in small consistent steps. To start, we'll show how to add some basic JavaScript to your page, creating a <em>"Hello world!"</em> example (<a class="external" href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program" rel="noopener">the standard in basic programming examples</a>).</p>

<div class="warning">
<p><strong>Important</strong>: If you haven't been following along with the rest of our course, <a class="external" href="https://github.com/mdn/beginner-html-site-styled/archive/gh-pages.zip" rel="noopener">download this example code</a> and use it as a starting point.</p>
</div>

<ol>
 <li>First, go to your test site and create a new folder named <code>scripts</code>. Then, within the new scripts folder you just created, create a new file called <code>main.js</code>. Save it in your <code>scripts</code> folder.</li>
 <li>Next, in your <code>index.html</code> file enter the following element on a new line just before the closing <code>&lt;/body&gt;</code> tag:
  <pre class="brush: html">&lt;script src="scripts/main.js"&gt;&lt;/script&gt;</pre>
 </li>
 <li>This is basically doing the same job as the <a href="/en-US/docs/Web/HTML/Element/link" title='The HTML External Resource Link element (&lt;link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.'><code>&lt;link&gt;</code></a> element for CSS — it applies the JavaScript to the page, so it can have an effect on the HTML (along with the CSS, and anything else on the page).</li>
 <li>Now add the following code to the <code>main.js</code> file:
  <pre class="brush: js">let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';</pre>
 </li>
 <li>Finally, make sure the HTML and JavaScript files are saved, then load <code>index.html</code> in the browser. You should see something like the following:<img alt="" src="https://mdn.mozillademos.org/files/9543/hello-world.png" style="display: block; height: 236px; margin: 0px auto; width: 806px;"></li>
</ol>
