import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/moon.css';
import 'highlight.js/styles/atom-one-dark.css'

import $ from 'jquery';
import Reveal from 'reveal.js';
import {RevealMarkdown} from 'reveal.js/plugin/markdown/markdown';
import hljs from 'reveal.js/plugin/highlight/highlight';
import notes from 'reveal.js/plugin/notes/notes';

import slides from './slides/index';

slides.forEach(slide => {
	if (DEBUG) {
		console.log(slide);
	}
	$('#slides').append(slide);
});


Reveal.initialize();

RevealMarkdown.initialize();

hljs.initHighlightingOnLoad();

console.log(notes);

