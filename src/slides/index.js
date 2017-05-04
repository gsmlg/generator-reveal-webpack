
let slides = [];

import yeoman from 'images/yeoman.png';

slides.push(`
<section>
	<img src="${yeoman}" />
	<h1>Slide One</h1>
</section>
`);

let markdown = `
<section data-markdown>
	<textarea data-template>
## Page title

A paragraph with some text and a [link](http://gsmlg.club).

\`\`\`javascript

Slide.next();

function Slide() {
    return this;
}

Slide.next = function() {
    let cb = this._callbacks.pop();
    cb();
}
\`\`\`
	</textarea>
</section>
`;

slides.push(markdown)


let note = `
<section>
	<h2>Some Slide</h2>

	<aside class="notes">
		Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
	</aside>
</section>
`
slides.push(note);

export default slides;