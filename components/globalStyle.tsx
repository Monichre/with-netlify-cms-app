import styled, { createGlobalStyle, css } from 'styled-components'

export const GothamGlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,900");
@import url("font-awesome.min.css");

/* Reset */

	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		-webkit-text-size-adjust: none;
	}


/* Box Model */

	*, *:before, *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

/* Containers */

	.container {
		margin-left: auto;
		margin-right: auto;
	}

	.container.\31 25\25 {
		width: 100%;
		max-width: 1800px;
		min-width: 1440px;
	}

	.container.\37 5\25 {
		width: 1080px;
	}

	.container.\35 0\25 {
		width: 720px;
	}

	.container.\32 5\25 {
		width: 360px;
	}

	.container {
		width: 1440px;
	}

	@media screen and (max-width: 1920px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 1700px;
			min-width: 1360px;
		}

		.container.\37 5\25 {
			width: 1020px;
		}

		.container.\35 0\25 {
			width: 680px;
		}

		.container.\32 5\25 {
			width: 340px;
		}

		.container {
			width: 1360px;
		}

	}

	@media screen and (max-width: 1680px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 1500px;
			min-width: 1200px;
		}

		.container.\37 5\25 {
			width: 900px;
		}

		.container.\35 0\25 {
			width: 600px;
		}

		.container.\32 5\25 {
			width: 300px;
		}

		.container {
			width: 1200px;
		}

	}

	@media screen and (max-width: 1280px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 1200px;
			min-width: 960px;
		}

		.container.\37 5\25 {
			width: 720px;
		}

		.container.\35 0\25 {
			width: 480px;
		}

		.container.\32 5\25 {
			width: 240px;
		}

		.container {
			/* width: 960px; */
		}

	}

	@media screen and (max-width: 1000px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 118.75%;
			min-width: 95%;
		}

		.container.\37 5\25 {
			width: 71.25%;
		}

		.container.\35 0\25 {
			width: 47.5%;
		}

		.container.\32 5\25 {
			width: 23.75%;
		}

		.container {
			width: 95%;
		}

	}

	@media screen and (max-width: 736px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 118.75%;
			min-width: 95%;
		}

		.container.\37 5\25 {
			width: 71.25%;
		}

		.container.\35 0\25 {
			width: 47.5%;
		}

		.container.\32 5\25 {
			width: 23.75%;
		}

		.container {
			width: 95%;
		}

	}

	@media screen and (max-width: 480px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 118.75%;
			min-width: 95%;
		}

		.container.\37 5\25 {
			width: 71.25%;
		}

		.container.\35 0\25 {
			width: 47.5%;
		}

		.container.\32 5\25 {
			width: 23.75%;
		}

		.container {
			width: 95% !important;
		}

	}

/* Grid */

	.row {
		border-bottom: solid 1px transparent;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row > * {
		float: left;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row:after, .row:before {
		content: '';
		display: block;
		clear: both;
		height: 0;
	}

	.row.uniform > * > :first-child {
		margin-top: 0;
	}

	.row.uniform > * > :last-child {
		margin-bottom: 0;
	}

	.row.\30 \25 > * {
		padding: 0px 0 0 0px;
	}

	.row.\30 \25 {
		margin: 0px 0 -1px 0px;
	}

	.row.uniform.\30 \25 > * {
		padding: 0px 0 0 0px;
	}

	.row.uniform.\30 \25 {
		margin: 0px 0 -1px 0px;
	}

	.row > * {
		padding: 40px 0 0 40px;
	}

	.row {
		margin: -40px 0 -1px -40px;
	}

	.row.uniform > * {
		padding: 40px 0 0 40px;
	}

	.row.uniform {
		margin: -40px 0 -1px -40px;
	}

	.row.\32 00\25 > * {
		padding: 80px 0 0 80px;
	}

	.row.\32 00\25 {
		margin: -80px 0 -1px -80px;
	}

	.row.uniform.\32 00\25 > * {
		padding: 80px 0 0 80px;
	}

	.row.uniform.\32 00\25 {
		margin: -80px 0 -1px -80px;
	}

	.row.\31 50\25 > * {
		padding: 60px 0 0 60px;
	}

	.row.\31 50\25 {
		margin: -60px 0 -1px -60px;
	}

	.row.uniform.\31 50\25 > * {
		padding: 60px 0 0 60px;
	}

	.row.uniform.\31 50\25 {
		margin: -60px 0 -1px -60px;
	}

	.row.\35 0\25 > * {
		padding: 20px 0 0 20px;
	}

	.row.\35 0\25 {
		margin: -20px 0 -1px -20px;
	}

	.row.uniform.\35 0\25 > * {
		padding: 20px 0 0 20px;
	}

	.row.uniform.\35 0\25 {
		margin: -20px 0 -1px -20px;
	}

	.row.\32 5\25 > * {
		padding: 10px 0 0 10px;
	}

	.row.\32 5\25 {
		margin: -10px 0 -1px -10px;
	}

	.row.uniform.\32 5\25 > * {
		padding: 10px 0 0 10px;
	}

	.row.uniform.\32 5\25 {
		margin: -10px 0 -1px -10px;
	}

	.\31 2u, .\31 2u\24 {
		width: 100%;
		clear: none;
		margin-left: 0;
	}

	.\31 1u, .\31 1u\24 {
		width: 91.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\31 0u, .\31 0u\24 {
		width: 83.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\39 u, .\39 u\24 {
		width: 75%;
		clear: none;
		margin-left: 0;
	}

	.\38 u, .\38 u\24 {
		width: 66.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\37 u, .\37 u\24 {
		width: 58.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\36 u, .\36 u\24 {
		width: 50%;
		clear: none;
		margin-left: 0;
	}

	.\35 u, .\35 u\24 {
		width: 41.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\34 u, .\34 u\24 {
		width: 33.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\33 u, .\33 u\24 {
		width: 25%;
		clear: none;
		margin-left: 0;
	}

	.\32 u, .\32 u\24 {
		width: 16.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\31 u, .\31 u\24 {
		width: 8.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\31 2u\24 + *,
	.\31 1u\24 + *,
	.\31 0u\24 + *,
	.\39 u\24 + *,
	.\38 u\24 + *,
	.\37 u\24 + *,
	.\36 u\24 + *,
	.\35 u\24 + *,
	.\34 u\24 + *,
	.\33 u\24 + *,
	.\32 u\24 + *,
	.\31 u\24 + * {
		clear: left;
	}

	.\-11u {
		margin-left: 91.66667%;
	}

	.\-10u {
		margin-left: 83.33333%;
	}

	.\-9u {
		margin-left: 75%;
	}

	.\-8u {
		margin-left: 66.66667%;
	}

	.\-7u {
		margin-left: 58.33333%;
	}

	.\-6u {
		margin-left: 50%;
	}

	.\-5u {
		margin-left: 41.66667%;
	}

	.\-4u {
		margin-left: 33.33333%;
	}

	.\-3u {
		margin-left: 25%;
	}

	.\-2u {
		margin-left: 16.66667%;
	}

	.\-1u {
		margin-left: 8.33333%;
	}

	@media screen and (max-width: 1920px) {

		.row > * {
			padding: 40px 0 0 40px;
		}

		.row {
			margin: -40px 0 -1px -40px;
		}

		.row.uniform > * {
			padding: 40px 0 0 40px;
		}

		.row.uniform {
			margin: -40px 0 -1px -40px;
		}

		.row.\32 00\25 > * {
			padding: 80px 0 0 80px;
		}

		.row.\32 00\25 {
			margin: -80px 0 -1px -80px;
		}

		.row.uniform.\32 00\25 > * {
			padding: 80px 0 0 80px;
		}

		.row.uniform.\32 00\25 {
			margin: -80px 0 -1px -80px;
		}

		.row.\31 50\25 > * {
			padding: 60px 0 0 60px;
		}

		.row.\31 50\25 {
			margin: -60px 0 -1px -60px;
		}

		.row.uniform.\31 50\25 > * {
			padding: 60px 0 0 60px;
		}

		.row.uniform.\31 50\25 {
			margin: -60px 0 -1px -60px;
		}

		.row.\35 0\25 > * {
			padding: 20px 0 0 20px;
		}

		.row.\35 0\25 {
			margin: -20px 0 -1px -20px;
		}

		.row.uniform.\35 0\25 > * {
			padding: 20px 0 0 20px;
		}

		.row.uniform.\35 0\25 {
			margin: -20px 0 -1px -20px;
		}

		.row.\32 5\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.\32 5\25 {
			margin: -10px 0 -1px -10px;
		}

		.row.uniform.\32 5\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.uniform.\32 5\25 {
			margin: -10px 0 -1px -10px;
		}

		.\31 2u\28wide\29, .\31 2u\24\28wide\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28wide\29, .\31 1u\24\28wide\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28wide\29, .\31 0u\24\28wide\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28wide\29, .\39 u\24\28wide\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28wide\29, .\38 u\24\28wide\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28wide\29, .\37 u\24\28wide\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28wide\29, .\36 u\24\28wide\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28wide\29, .\35 u\24\28wide\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28wide\29, .\34 u\24\28wide\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28wide\29, .\33 u\24\28wide\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28wide\29, .\32 u\24\28wide\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28wide\29, .\31 u\24\28wide\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28wide\29 + *,
		.\31 1u\24\28wide\29 + *,
		.\31 0u\24\28wide\29 + *,
		.\39 u\24\28wide\29 + *,
		.\38 u\24\28wide\29 + *,
		.\37 u\24\28wide\29 + *,
		.\36 u\24\28wide\29 + *,
		.\35 u\24\28wide\29 + *,
		.\34 u\24\28wide\29 + *,
		.\33 u\24\28wide\29 + *,
		.\32 u\24\28wide\29 + *,
		.\31 u\24\28wide\29 + * {
			clear: left;
		}

		.\-11u\28wide\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28wide\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28wide\29 {
			margin-left: 75%;
		}

		.\-8u\28wide\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28wide\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28wide\29 {
			margin-left: 50%;
		}

		.\-5u\28wide\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28wide\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28wide\29 {
			margin-left: 25%;
		}

		.\-2u\28wide\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28wide\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 1680px) {

		.row > * {
			padding: 40px 0 0 40px;
		}

		.row {
			margin: -40px 0 -1px -40px;
		}

		.row.uniform > * {
			padding: 40px 0 0 40px;
		}

		.row.uniform {
			margin: -40px 0 -1px -40px;
		}

		.row.\32 00\25 > * {
			padding: 80px 0 0 80px;
		}

		.row.\32 00\25 {
			margin: -80px 0 -1px -80px;
		}

		.row.uniform.\32 00\25 > * {
			padding: 80px 0 0 80px;
		}

		.row.uniform.\32 00\25 {
			margin: -80px 0 -1px -80px;
		}

		.row.\31 50\25 > * {
			padding: 60px 0 0 60px;
		}

		.row.\31 50\25 {
			margin: -60px 0 -1px -60px;
		}

		.row.uniform.\31 50\25 > * {
			padding: 60px 0 0 60px;
		}

		.row.uniform.\31 50\25 {
			margin: -60px 0 -1px -60px;
		}

		.row.\35 0\25 > * {
			padding: 20px 0 0 20px;
		}

		.row.\35 0\25 {
			margin: -20px 0 -1px -20px;
		}

		.row.uniform.\35 0\25 > * {
			padding: 20px 0 0 20px;
		}

		.row.uniform.\35 0\25 {
			margin: -20px 0 -1px -20px;
		}

		.row.\32 5\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.\32 5\25 {
			margin: -10px 0 -1px -10px;
		}

		.row.uniform.\32 5\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.uniform.\32 5\25 {
			margin: -10px 0 -1px -10px;
		}

		.\31 2u\28normal\29, .\31 2u\24\28normal\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28normal\29, .\31 1u\24\28normal\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28normal\29, .\31 0u\24\28normal\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28normal\29, .\39 u\24\28normal\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28normal\29, .\38 u\24\28normal\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28normal\29, .\37 u\24\28normal\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28normal\29, .\36 u\24\28normal\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28normal\29, .\35 u\24\28normal\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28normal\29, .\34 u\24\28normal\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28normal\29, .\33 u\24\28normal\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28normal\29, .\32 u\24\28normal\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28normal\29, .\31 u\24\28normal\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28normal\29 + *,
		.\31 1u\24\28normal\29 + *,
		.\31 0u\24\28normal\29 + *,
		.\39 u\24\28normal\29 + *,
		.\38 u\24\28normal\29 + *,
		.\37 u\24\28normal\29 + *,
		.\36 u\24\28normal\29 + *,
		.\35 u\24\28normal\29 + *,
		.\34 u\24\28normal\29 + *,
		.\33 u\24\28normal\29 + *,
		.\32 u\24\28normal\29 + *,
		.\31 u\24\28normal\29 + * {
			clear: left;
		}

		.\-11u\28normal\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28normal\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28normal\29 {
			margin-left: 75%;
		}

		.\-8u\28normal\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28normal\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28normal\29 {
			margin-left: 50%;
		}

		.\-5u\28normal\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28normal\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28normal\29 {
			margin-left: 25%;
		}

		.\-2u\28normal\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28normal\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 1280px) {

		.row > * {
			padding: 40px 0 0 40px;
		}

		.row {
			margin: -40px 0 -1px -40px;
		}

		.row.uniform > * {
			padding: 40px 0 0 40px;
		}

		.row.uniform {
			margin: -40px 0 -1px -40px;
		}

		.row.\32 00\25 > * {
			padding: 80px 0 0 80px;
		}

		.row.\32 00\25 {
			margin: -80px 0 -1px -80px;
		}

		.row.uniform.\32 00\25 > * {
			padding: 80px 0 0 80px;
		}

		.row.uniform.\32 00\25 {
			margin: -80px 0 -1px -80px;
		}

		.row.\31 50\25 > * {
			padding: 60px 0 0 60px;
		}

		.row.\31 50\25 {
			margin: -60px 0 -1px -60px;
		}

		.row.uniform.\31 50\25 > * {
			padding: 60px 0 0 60px;
		}

		.row.uniform.\31 50\25 {
			margin: -60px 0 -1px -60px;
		}

		.row.\35 0\25 > * {
			padding: 20px 0 0 20px;
		}

		.row.\35 0\25 {
			margin: -20px 0 -1px -20px;
		}

		.row.uniform.\35 0\25 > * {
			padding: 20px 0 0 20px;
		}

		.row.uniform.\35 0\25 {
			margin: -20px 0 -1px -20px;
		}

		.row.\32 5\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.\32 5\25 {
			margin: -10px 0 -1px -10px;
		}

		.row.uniform.\32 5\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.uniform.\32 5\25 {
			margin: -10px 0 -1px -10px;
		}

		.\31 2u\28narrow\29, .\31 2u\24\28narrow\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28narrow\29, .\31 1u\24\28narrow\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28narrow\29, .\31 0u\24\28narrow\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28narrow\29, .\39 u\24\28narrow\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28narrow\29, .\38 u\24\28narrow\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28narrow\29, .\37 u\24\28narrow\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28narrow\29, .\36 u\24\28narrow\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28narrow\29, .\35 u\24\28narrow\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28narrow\29, .\34 u\24\28narrow\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28narrow\29, .\33 u\24\28narrow\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28narrow\29, .\32 u\24\28narrow\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28narrow\29, .\31 u\24\28narrow\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28narrow\29 + *,
		.\31 1u\24\28narrow\29 + *,
		.\31 0u\24\28narrow\29 + *,
		.\39 u\24\28narrow\29 + *,
		.\38 u\24\28narrow\29 + *,
		.\37 u\24\28narrow\29 + *,
		.\36 u\24\28narrow\29 + *,
		.\35 u\24\28narrow\29 + *,
		.\34 u\24\28narrow\29 + *,
		.\33 u\24\28narrow\29 + *,
		.\32 u\24\28narrow\29 + *,
		.\31 u\24\28narrow\29 + * {
			clear: left;
		}

		.\-11u\28narrow\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28narrow\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28narrow\29 {
			margin-left: 75%;
		}

		.\-8u\28narrow\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28narrow\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28narrow\29 {
			margin-left: 50%;
		}

		.\-5u\28narrow\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28narrow\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28narrow\29 {
			margin-left: 25%;
		}

		.\-2u\28narrow\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28narrow\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 1000px) {

		.row > * {
			padding: 40px 0 0 40px;
		}

		.row {
			margin: -40px 0 -1px -40px;
		}

		.row.uniform > * {
			padding: 40px 0 0 40px;
		}

		.row.uniform {
			margin: -40px 0 -1px -40px;
		}

		.row.\32 00\25 > * {
			padding: 80px 0 0 80px;
		}

		.row.\32 00\25 {
			margin: -80px 0 -1px -80px;
		}

		.row.uniform.\32 00\25 > * {
			padding: 80px 0 0 80px;
		}

		.row.uniform.\32 00\25 {
			margin: -80px 0 -1px -80px;
		}

		.row.\31 50\25 > * {
			padding: 60px 0 0 60px;
		}

		.row.\31 50\25 {
			margin: -60px 0 -1px -60px;
		}

		.row.uniform.\31 50\25 > * {
			padding: 60px 0 0 60px;
		}

		.row.uniform.\31 50\25 {
			margin: -60px 0 -1px -60px;
		}

		.row.\35 0\25 > * {
			padding: 20px 0 0 20px;
		}

		.row.\35 0\25 {
			margin: -20px 0 -1px -20px;
		}

		.row.uniform.\35 0\25 > * {
			padding: 20px 0 0 20px;
		}

		.row.uniform.\35 0\25 {
			margin: -20px 0 -1px -20px;
		}

		.row.\32 5\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.\32 5\25 {
			margin: -10px 0 -1px -10px;
		}

		.row.uniform.\32 5\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.uniform.\32 5\25 {
			margin: -10px 0 -1px -10px;
		}

		.\31 2u\28narrower\29, .\31 2u\24\28narrower\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28narrower\29, .\31 1u\24\28narrower\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28narrower\29, .\31 0u\24\28narrower\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28narrower\29, .\39 u\24\28narrower\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28narrower\29, .\38 u\24\28narrower\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28narrower\29, .\37 u\24\28narrower\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28narrower\29, .\36 u\24\28narrower\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28narrower\29, .\35 u\24\28narrower\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28narrower\29, .\34 u\24\28narrower\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28narrower\29, .\33 u\24\28narrower\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28narrower\29, .\32 u\24\28narrower\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28narrower\29, .\31 u\24\28narrower\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28narrower\29 + *,
		.\31 1u\24\28narrower\29 + *,
		.\31 0u\24\28narrower\29 + *,
		.\39 u\24\28narrower\29 + *,
		.\38 u\24\28narrower\29 + *,
		.\37 u\24\28narrower\29 + *,
		.\36 u\24\28narrower\29 + *,
		.\35 u\24\28narrower\29 + *,
		.\34 u\24\28narrower\29 + *,
		.\33 u\24\28narrower\29 + *,
		.\32 u\24\28narrower\29 + *,
		.\31 u\24\28narrower\29 + * {
			clear: left;
		}

		.\-11u\28narrower\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28narrower\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28narrower\29 {
			margin-left: 75%;
		}

		.\-8u\28narrower\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28narrower\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28narrower\29 {
			margin-left: 50%;
		}

		.\-5u\28narrower\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28narrower\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28narrower\29 {
			margin-left: 25%;
		}

		.\-2u\28narrower\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28narrower\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 736px) {

		.row > * {
			padding: 20px 0 0 20px;
		}

		.row {
			margin: -20px 0 -1px -20px;
		}

		.row.uniform > * {
			padding: 20px 0 0 20px;
		}

		.row.uniform {
			margin: -20px 0 -1px -20px;
		}

		.row.\32 00\25 > * {
			padding: 40px 0 0 40px;
		}

		.row.\32 00\25 {
			margin: -40px 0 -1px -40px;
		}

		.row.uniform.\32 00\25 > * {
			padding: 40px 0 0 40px;
		}

		.row.uniform.\32 00\25 {
			margin: -40px 0 -1px -40px;
		}

		.row.\31 50\25 > * {
			padding: 30px 0 0 30px;
		}

		.row.\31 50\25 {
			margin: -30px 0 -1px -30px;
		}

		.row.uniform.\31 50\25 > * {
			padding: 30px 0 0 30px;
		}

		.row.uniform.\31 50\25 {
			margin: -30px 0 -1px -30px;
		}

		.row.\35 0\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.\35 0\25 {
			margin: -10px 0 -1px -10px;
		}

		.row.uniform.\35 0\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.uniform.\35 0\25 {
			margin: -10px 0 -1px -10px;
		}

		.row.\32 5\25 > * {
			padding: 5px 0 0 5px;
		}

		.row.\32 5\25 {
			margin: -5px 0 -1px -5px;
		}

		.row.uniform.\32 5\25 > * {
			padding: 5px 0 0 5px;
		}

		.row.uniform.\32 5\25 {
			margin: -5px 0 -1px -5px;
		}

		.\31 2u\28mobile\29, .\31 2u\24\28mobile\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28mobile\29, .\31 1u\24\28mobile\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28mobile\29, .\31 0u\24\28mobile\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28mobile\29, .\39 u\24\28mobile\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28mobile\29, .\38 u\24\28mobile\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28mobile\29, .\37 u\24\28mobile\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28mobile\29, .\36 u\24\28mobile\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28mobile\29, .\35 u\24\28mobile\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28mobile\29, .\34 u\24\28mobile\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28mobile\29, .\33 u\24\28mobile\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28mobile\29, .\32 u\24\28mobile\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28mobile\29, .\31 u\24\28mobile\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28mobile\29 + *,
		.\31 1u\24\28mobile\29 + *,
		.\31 0u\24\28mobile\29 + *,
		.\39 u\24\28mobile\29 + *,
		.\38 u\24\28mobile\29 + *,
		.\37 u\24\28mobile\29 + *,
		.\36 u\24\28mobile\29 + *,
		.\35 u\24\28mobile\29 + *,
		.\34 u\24\28mobile\29 + *,
		.\33 u\24\28mobile\29 + *,
		.\32 u\24\28mobile\29 + *,
		.\31 u\24\28mobile\29 + * {
			clear: left;
		}

		.\-11u\28mobile\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28mobile\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28mobile\29 {
			margin-left: 75%;
		}

		.\-8u\28mobile\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28mobile\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28mobile\29 {
			margin-left: 50%;
		}

		.\-5u\28mobile\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28mobile\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28mobile\29 {
			margin-left: 25%;
		}

		.\-2u\28mobile\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28mobile\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 480px) {

		.row > * {
			padding: 20px 0 0 20px;
		}

		.row {
			margin: -20px 0 -1px -20px;
		}

		.row.uniform > * {
			padding: 20px 0 0 20px;
		}

		.row.uniform {
			margin: -20px 0 -1px -20px;
		}

		.row.\32 00\25 > * {
			padding: 40px 0 0 40px;
		}

		.row.\32 00\25 {
			margin: -40px 0 -1px -40px;
		}

		.row.uniform.\32 00\25 > * {
			padding: 40px 0 0 40px;
		}

		.row.uniform.\32 00\25 {
			margin: -40px 0 -1px -40px;
		}

		.row.\31 50\25 > * {
			padding: 30px 0 0 30px;
		}

		.row.\31 50\25 {
			margin: -30px 0 -1px -30px;
		}

		.row.uniform.\31 50\25 > * {
			padding: 30px 0 0 30px;
		}

		.row.uniform.\31 50\25 {
			margin: -30px 0 -1px -30px;
		}

		.row.\35 0\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.\35 0\25 {
			margin: -10px 0 -1px -10px;
		}

		.row.uniform.\35 0\25 > * {
			padding: 10px 0 0 10px;
		}

		.row.uniform.\35 0\25 {
			margin: -10px 0 -1px -10px;
		}

		.row.\32 5\25 > * {
			padding: 5px 0 0 5px;
		}

		.row.\32 5\25 {
			margin: -5px 0 -1px -5px;
		}

		.row.uniform.\32 5\25 > * {
			padding: 5px 0 0 5px;
		}

		.row.uniform.\32 5\25 {
			margin: -5px 0 -1px -5px;
		}

		.\31 2u\28mobilenarrow\29, .\31 2u\24\28mobilenarrow\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28mobilenarrow\29, .\31 1u\24\28mobilenarrow\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28mobilenarrow\29, .\31 0u\24\28mobilenarrow\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28mobilenarrow\29, .\39 u\24\28mobilenarrow\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28mobilenarrow\29, .\38 u\24\28mobilenarrow\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28mobilenarrow\29, .\37 u\24\28mobilenarrow\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28mobilenarrow\29, .\36 u\24\28mobilenarrow\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28mobilenarrow\29, .\35 u\24\28mobilenarrow\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28mobilenarrow\29, .\34 u\24\28mobilenarrow\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28mobilenarrow\29, .\33 u\24\28mobilenarrow\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28mobilenarrow\29, .\32 u\24\28mobilenarrow\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28mobilenarrow\29, .\31 u\24\28mobilenarrow\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28mobilenarrow\29 + *,
		.\31 1u\24\28mobilenarrow\29 + *,
		.\31 0u\24\28mobilenarrow\29 + *,
		.\39 u\24\28mobilenarrow\29 + *,
		.\38 u\24\28mobilenarrow\29 + *,
		.\37 u\24\28mobilenarrow\29 + *,
		.\36 u\24\28mobilenarrow\29 + *,
		.\35 u\24\28mobilenarrow\29 + *,
		.\34 u\24\28mobilenarrow\29 + *,
		.\33 u\24\28mobilenarrow\29 + *,
		.\32 u\24\28mobilenarrow\29 + *,
		.\31 u\24\28mobilenarrow\29 + * {
			clear: left;
		}

		.\-11u\28mobilenarrow\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28mobilenarrow\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28mobilenarrow\29 {
			margin-left: 75%;
		}

		.\-8u\28mobilenarrow\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28mobilenarrow\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28mobilenarrow\29 {
			margin-left: 50%;
		}

		.\-5u\28mobilenarrow\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28mobilenarrow\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28mobilenarrow\29 {
			margin-left: 25%;
		}

		.\-2u\28mobilenarrow\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28mobilenarrow\29 {
			margin-left: 8.33333%;
		}

	}

/* Basic */

	@-ms-viewport {
		width: device-width;
	}

	html {
		height: 100%;
	}

	body {
		background: #fff;
		height: 100%;
		font-family: 'Open Sans Condensed', ;
		font-weight: 300;
		font-size: 18pt;
		line-height: 1.75em;
		color: #39454b;
		letter-spacing: 0.5px;
	}

		body.is-loading *, body.is-resizing * {
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
		}

	input, textarea, select {
		font-family: 'Open Sans Condensed', ;
		font-weight: 300;
		font-size: 18pt;
		line-height: 1.75em;
		color: #39454b;
		letter-spacing: 0.5px;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 900;
		color: inherit;
	}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
		color: inherit;
		text-decoration: none;
	}

	h2 {
		font-size: 2.25em;
		letter-spacing: -2px;
		line-height: 1.25em;
	}

	strong, b {
		font-weight: 900;
		color: inherit;
	}

	em, i {
		font-style: italic;
	}

	a {
		-moz-transition: all 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: all 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: all 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: all 0.2s ease-in-out, color 0.2s ease-in-out;
		color: #98c593;
	}

	sub {
		position: relative;
		top: 0.5em;
		font-size: 0.8em;
	}

	sup {
		position: relative;
		top: -0.5em;
		font-size: 0.8em;
	}

	hr {
		border: 0;
		border-top: solid 1px #ddd;
	}

	blockquote {
		border-left: solid 0.5em #ddd;
		padding: 1em 0 1em 2em;
		font-style: italic;
	}

	p, ul, ol, dl, table {
		margin-bottom: 1em;
	}

	header {
		margin-bottom: 1em;
	}

		header p {
			display: block;
			margin: 1em 0 0 0;
			padding: 0 0 0.5em 0;
		}

	footer {
		margin-top: 2em;
	}

	br.clear {
		clear: both;
	}

/* Sections/Article */

	section, article {
		margin-bottom: 3em;
	}

	section > :last-child,
	article > :last-child,
	section > .content > :last-child,
	article > .content > :last-child,
	section:last-child,
	article:last-child {
		margin-bottom: 0;
	}

	.row > section, .row > article {
		margin-bottom: 0;
	}

/* Image */

	.image {
		position: relative;
		display: inline-block;
	}

		.image:before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%!important;
			background: url("images/overlay.png");
		}

		.image img {
			display: block;
			width: 100%;
		}

		.image.featured {
			display: block;
			width: 100%;
			margin: 0 0 2em 0;
		}

		.image.fit {
			display: block;
			width: 100%;
			height: 100%!important;
		}

		.image.left {
			float: left;
			margin: 0 2em 2em 0;
		}

		.image.centered {
			display: block;
			margin: 0 0 2em 0;
		}

			.image.centered img {
				margin: 0 auto;
				width: auto;
			}

/* List */

	ul.default {
		list-style: disc;
		padding-left: 1em;
	}

		ul.default li {
			padding-left: 0.5em;
		}

	ul.icons {
		cursor: default;
	}

		ul.icons li {
			display: inline-block;
		}

		ul.icons a {
			display: inline-block;
			width: 2em;
			height: 2em;
			line-height: 2em;
			text-align: center;
			border: 0;
		}

	ul.menu {
		cursor: default;
	}

		ul.menu li {
			display: inline-block;
			line-height: 1em;
			border-left: solid 1px rgba(145, 146, 147, 0.25);
			padding: 0 0 0 0.5em;
			margin: 0 0 0 0.5em;
		}

			ul.menu li:first-child {
				border-left: 0;
				padding-left: 0;
				margin-left: 0;
			}

	ul.actions {
		cursor: default;
	}

		ul.actions li {
			display: inline-block;
			margin: 0 0 0 0.5em;
		}

			ul.actions li:first-child {
				margin-left: 0;
			}

	ol.default {
		list-style: decimal;
		padding-left: 1.25em;
	}

		ol.default li {
			padding-left: 0.25em;
		}

/* Form */

	form label {
		display: block;
	}

	form input[type="text"],
	form input[type="email"],
	form input[type="password"],
	form select,
	form textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: all 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: all 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: all 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: all 0.2s ease-in-out, color 0.2s ease-in-out;
		display: block;
		width: 100%;
		padding: 0.65em 0.75em;
		background: none;
		border: solid 2px rgba(185, 186, 187, 0.25);
		color: inherit;
		border-radius: 0.5em;
		outline: none;
	}

		form input[type="text"]:focus,
		form input[type="email"]:focus,
		form input[type="password"]:focus,
		form select:focus,
		form textarea:focus {
			border-color: #9ac8e9;
		}

	form input[type="text"],
	form input[type="email"],
	form input[type="password"] {
		line-height: 1.35em;
	}

	form select {
		line-height: 1.35em;
	}

	form textarea {
		min-height: 8em;
	}

	form .formerize-placeholder,
	form ::-webkit-input-placeholder,
	form :-moz-placeholder,
	form ::-moz-placeholder,
	form :-ms-input-placeholder {
		color: rgba(145, 146, 147, 0.85) !important;
	}

	form ::-moz-focus-inner {
		border: 0;
	}

/* Table */

	table {
		width: 100%;
	}

		table.default {
			width: 100%;
		}

			table.default tbody tr:nth-child(2n+2) {
				background: #f4f4f4;
			}

			table.default td {
				padding: 0.5em 1em 0.5em 1em;
			}

			table.default th {
				text-align: left;
				font-weight: 900;
				padding: 0.5em 1em 0.5em 1em;
			}

			table.default thead {
				background: #444;
				color: #fff;
			}

			table.default tfoot {
				background: #eee;
			}

/* Button */

	input[type="button"],
	input[type="submit"],
	input[type="reset"],
	.button,
	button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: all 0.2s ease-in-out;
		-webkit-transition: all 0.2s ease-in-out;
		-ms-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
		background-color: #98c593;
		border: 0;
		border-radius: 3.5em;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		height: 3.5em;
		line-height: 3.5em;
		outline: 0;
		padding: 0 2em 0 2em;
		position: relative;
		text-align: center;
		text-decoration: none;
	}

		input[type="button"].down,
		input[type="submit"].down,
		input[type="reset"].down,
		.button.down,
		button.down {
			width: 5em;
			height: 5em;
			line-height: 4.5em;
			padding: 0;
			background-image: url("images/dark-arrow.svg");
			background-position: center center;
			background-repeat: no-repeat;
			text-indent: -10em;
			overflow: hidden;
		}

			input[type="button"].down.anchored,
			input[type="submit"].down.anchored,
			input[type="reset"].down.anchored,
			.button.down.anchored,
			button.down.anchored {
				bottom: 0;
				border-bottom: 0;
				border-radius: 3em 3em 0 0;
				height: 4.5em;
				margin-left: -2.5em;
			}

		input[type="button"].anchored,
		input[type="submit"].anchored,
		input[type="reset"].anchored,
		.button.anchored,
		button.anchored {
			position: absolute;
			left: 50%;
		}

		input[type="button"]:hover,
		input[type="submit"]:hover,
		input[type="reset"]:hover,
		.button:hover,
		button:hover {
			background-color: #a8d5a3;
		}

		input[type="button"]:active,
		input[type="submit"]:active,
		input[type="reset"]:active,
		.button:active,
		button:active {
			background-color: #88b583;
		}

		input[type="button"].style2,
		input[type="submit"].style2,
		input[type="reset"].style2,
		.button.style2,
		button.style2 {
			background-color: transparent;
			border: solid 2px #e5e6e7;
			color: inherit;
		}

			input[type="button"].style2:hover,
			input[type="submit"].style2:hover,
			input[type="reset"].style2:hover,
			.button.style2:hover,
			button.style2:hover {
				background-color: rgba(145, 146, 147, 0.035);
			}

			input[type="button"].style2.down,
			input[type="submit"].style2.down,
			input[type="reset"].style2.down,
			.button.style2.down,
			button.style2.down {
				background-image: url("images/arrow.svg");
			}

/* Box */

	.box {
		background: #fff;
		color: #39454b;
		padding: 2em;
	}

		.box.style2 {
			padding: 3.5em 2.5em 3.5em 2.5em;
		}

/* Main */

	.main {
		position: relative;
		margin: 0;
		overflow-x: hidden;
	}

		.main.fullscreen {
			height: 100%;
		}

		.main.style1 {
			text-align: center;
			padding: 3em 0 3em 0;
		}

			.main.style1 h2 {
				font-size: 4.25em;
				line-height: 1em;
				letter-spacing: -4px;
			}

			.main.style1:before {
				content: '';
				display: inline-block;
				vertical-align: middle;
				height: 100%;
			}

			.main.style1 .content {
				-moz-transition: all 1s ease;
				-webkit-transition: all 1s ease;
				-ms-transition: all 1s ease;
				transition: all 1s ease;
				-moz-transform: translateZ(0);
				-webkit-transform: translateZ(0);
				-ms-transform: translateZ(0);
				transform: translateZ(0);
				opacity: 1.0;
				display: inline-block;
				vertical-align: middle;
			}

			.main.style1.inactive .content {
				opacity: 0;
			}

		.main.style2 {
			padding: 3em 0 3em 0;
			overflow: hidden;
		}

			.main.style2 .content {
				-moz-transition: all 1s ease;
				-webkit-transition: all 1s ease;
				-ms-transition: all 1s ease;
				transition: all 1s ease;
				-moz-transform: translateZ(0);
				-webkit-transform: translateZ(0);
				-ms-transform: translateZ(0);
				transform: translateZ(0);
				position: relative;
				width: 35%;
				display: inline-block;
				vertical-align: middle;
			}

			.main.style2.left:after {
				content: '';
				display: inline-block;
				vertical-align: middle;
				height: 100%;
			}

			.main.style2.left .content {
				left: 0;
			}

			.main.style2.right:before {
				content: '';
				display: inline-block;
				vertical-align: middle;
				height: 100%;
			}

			.main.style2.right .content {
				left: 65%;
			}

			.main.style2.inactive.left .content {
				left: -35%;
			}

			.main.style2.inactive.right .content {
				left: 100%;
			}

		.main.style3 {
			text-align: center;
			padding: 6em 0 6em 0;
		}

			.main.style3 .content > header {
				margin-bottom: 2em;
			}

			.main.style3.primary {
				background: #fff;
			}

			.main.style3.secondary {
				background: #f5f6f7;
			}

/* Dark */

	.dark {
		color: #fff;
	}

		.dark a {
			color: #fff;
		}

		.dark .button.style2 {
			border-color: inherit;
			background-color: rgba(64, 64, 64, 0.05);
		}

			.dark .button.style2:hover {
				background-color: rgba(255, 255, 255, 0.1);
			}

			.dark .button.style2.down {
				background-image: url("images/dark-arrow.svg");
			}

/* Spinner */

	@-moz-keyframes spinner-rotate {
		0% {
			-moz-transform: scale(1) rotate(0deg);
			-webkit-transform: scale(1) rotate(0deg);
			-ms-transform: scale(1) rotate(0deg);
			transform: scale(1) rotate(0deg);
		}

		100% {
			-moz-transform: scale(1) rotate(360deg);
			-webkit-transform: scale(1) rotate(360deg);
			-ms-transform: scale(1) rotate(360deg);
			transform: scale(1) rotate(360deg);
		}
	}

	@-webkit-keyframes spinner-rotate {
		0% {
			-moz-transform: scale(1) rotate(0deg);
			-webkit-transform: scale(1) rotate(0deg);
			-ms-transform: scale(1) rotate(0deg);
			transform: scale(1) rotate(0deg);
		}

		100% {
			-moz-transform: scale(1) rotate(360deg);
			-webkit-transform: scale(1) rotate(360deg);
			-ms-transform: scale(1) rotate(360deg);
			transform: scale(1) rotate(360deg);
		}
	}

	@-ms-keyframes spinner-rotate {
		0% {
			-moz-transform: scale(1) rotate(0deg);
			-webkit-transform: scale(1) rotate(0deg);
			-ms-transform: scale(1) rotate(0deg);
			transform: scale(1) rotate(0deg);
		}

		100% {
			-moz-transform: scale(1) rotate(360deg);
			-webkit-transform: scale(1) rotate(360deg);
			-ms-transform: scale(1) rotate(360deg);
			transform: scale(1) rotate(360deg);
		}
	}

	@keyframes spinner-rotate {
		0% {
			-moz-transform: scale(1) rotate(0deg);
			-webkit-transform: scale(1) rotate(0deg);
			-ms-transform: scale(1) rotate(0deg);
			transform: scale(1) rotate(0deg);
		}

		100% {
			-moz-transform: scale(1) rotate(360deg);
			-webkit-transform: scale(1) rotate(360deg);
			-ms-transform: scale(1) rotate(360deg);
			transform: scale(1) rotate(360deg);
		}
	}

/* Loader */

	@-moz-keyframes spinner-show {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes spinner-show {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes spinner-show {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes spinner-show {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes spinner-hide {
		0% {
			-moz-transform: scale(1) rotate(0deg);
			-webkit-transform: scale(1) rotate(0deg);
			-ms-transform: scale(1) rotate(0deg);
			transform: scale(1) rotate(0deg);
			color: #ececec;
			z-index: 100001;
		}

		99% {
			-moz-transform: scale(0.5) rotate(360deg);
			-webkit-transform: scale(0.5) rotate(360deg);
			-ms-transform: scale(0.5) rotate(360deg);
			transform: scale(0.5) rotate(360deg);
			color: #ececec;
			z-index: 100001;
		}

		100% {
			-moz-transform: scale(0.5) rotate(360deg);
			-webkit-transform: scale(0.5) rotate(360deg);
			-ms-transform: scale(0.5) rotate(360deg);
			transform: scale(0.5) rotate(360deg);
			color: #ececec;
			z-index: -1;
		}
	}

	@-webkit-keyframes spinner-hide {
		0% {
			-moz-transform: scale(1) rotate(0deg);
			-webkit-transform: scale(1) rotate(0deg);
			-ms-transform: scale(1) rotate(0deg);
			transform: scale(1) rotate(0deg);
			color: #ececec;
			z-index: 100001;
		}

		99% {
			-moz-transform: scale(0.5) rotate(360deg);
			-webkit-transform: scale(0.5) rotate(360deg);
			-ms-transform: scale(0.5) rotate(360deg);
			transform: scale(0.5) rotate(360deg);
			color: #ececec;
			z-index: 100001;
		}

		100% {
			-moz-transform: scale(0.5) rotate(360deg);
			-webkit-transform: scale(0.5) rotate(360deg);
			-ms-transform: scale(0.5) rotate(360deg);
			transform: scale(0.5) rotate(360deg);
			color: #ececec;
			z-index: -1;
		}
	}

	@-ms-keyframes spinner-hide {
		0% {
			-moz-transform: scale(1) rotate(0deg);
			-webkit-transform: scale(1) rotate(0deg);
			-ms-transform: scale(1) rotate(0deg);
			transform: scale(1) rotate(0deg);
			color: #ececec;
			z-index: 100001;
		}

		99% {
			-moz-transform: scale(0.5) rotate(360deg);
			-webkit-transform: scale(0.5) rotate(360deg);
			-ms-transform: scale(0.5) rotate(360deg);
			transform: scale(0.5) rotate(360deg);
			color: #ececec;
			z-index: 100001;
		}

		100% {
			-moz-transform: scale(0.5) rotate(360deg);
			-webkit-transform: scale(0.5) rotate(360deg);
			-ms-transform: scale(0.5) rotate(360deg);
			transform: scale(0.5) rotate(360deg);
			color: #ececec;
			z-index: -1;
		}
	}

	@keyframes spinner-hide {
		0% {
			-moz-transform: scale(1) rotate(0deg);
			-webkit-transform: scale(1) rotate(0deg);
			-ms-transform: scale(1) rotate(0deg);
			transform: scale(1) rotate(0deg);
			color: #ececec;
			z-index: 100001;
		}

		99% {
			-moz-transform: scale(0.5) rotate(360deg);
			-webkit-transform: scale(0.5) rotate(360deg);
			-ms-transform: scale(0.5) rotate(360deg);
			transform: scale(0.5) rotate(360deg);
			color: #ececec;
			z-index: 100001;
		}

		100% {
			-moz-transform: scale(0.5) rotate(360deg);
			-webkit-transform: scale(0.5) rotate(360deg);
			-ms-transform: scale(0.5) rotate(360deg);
			transform: scale(0.5) rotate(360deg);
			color: #ececec;
			z-index: -1;
		}
	}

	@-moz-keyframes overlay-hide {
		0% {
			opacity: 1;
			z-index: 100000;
		}

		15% {
			opacity: 1;
			z-index: 100000;
		}

		99% {
			opacity: 0;
			z-index: 100000;
		}

		100% {
			opacity: 0;
			z-index: -1;
		}
	}

	@-webkit-keyframes overlay-hide {
		0% {
			opacity: 1;
			z-index: 100000;
		}

		15% {
			opacity: 1;
			z-index: 100000;
		}

		99% {
			opacity: 0;
			z-index: 100000;
		}

		100% {
			opacity: 0;
			z-index: -1;
		}
	}

	@-ms-keyframes overlay-hide {
		0% {
			opacity: 1;
			z-index: 100000;
		}

		15% {
			opacity: 1;
			z-index: 100000;
		}

		99% {
			opacity: 0;
			z-index: 100000;
		}

		100% {
			opacity: 0;
			z-index: -1;
		}
	}

	@keyframes overlay-hide {
		0% {
			opacity: 1;
			z-index: 100000;
		}

		15% {
			opacity: 1;
			z-index: 100000;
		}

		99% {
			opacity: 0;
			z-index: 100000;
		}

		100% {
			opacity: 0;
			z-index: -1;
		}
	}

	body {
		text-decoration: none;
	}

		body:before {
			-moz-animation: spinner-show 1.5s 1 0.25s ease forwards, spinner-hide 0.25s ease-in-out forwards !important;
			-webkit-animation: spinner-show 1.5s 1 0.25s ease forwards, spinner-hide 0.25s ease-in-out forwards !important;
			-ms-animation: spinner-show 1.5s 1 0.25s ease forwards, spinner-hide 0.25s ease-in-out forwards !important;
			animation: spinner-show 1.5s 1 0.25s ease forwards, spinner-hide 0.25s ease-in-out forwards !important;
			-moz-transform-origin: 50% 50%;
			-webkit-transform-origin: 50% 50%;
			-ms-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
			color: #ececec;
			content: '\f1ce';
			cursor: default;
			display: block;
			font-size: 2em;
			height: 2em;
			left: 50%;
			line-height: 2em;
			margin: -1em 0 0 -1em;
			opacity: 0;
			position: fixed;
			text-align: center;
			top: 50%;
			width: 2em;
			z-index: -1;
		}

		body:after {
			-moz-animation: overlay-hide 1.5s ease-in forwards !important;
			-webkit-animation: overlay-hide 1.5s ease-in forwards !important;
			-ms-animation: overlay-hide 1.5s ease-in forwards !important;
			animation: overlay-hide 1.5s ease-in forwards !important;
			background: #ffffff;
			content: '';
			display: block;
			height: 100%;
			left: 0;
			opacity: 0;
			position: fixed;
			top: 0;
			width: 100%;
			z-index: -1;
		}

		body.is-loading:before {
			-moz-animation: spinner-show 1.5s 1 0.25s ease forwards, spinner-rotate 0.75s infinite linear !important;
			-webkit-animation: spinner-show 1.5s 1 0.25s ease forwards, spinner-rotate 0.75s infinite linear !important;
			-ms-animation: spinner-show 1.5s 1 0.25s ease forwards, spinner-rotate 0.75s infinite linear !important;
			animation: spinner-show 1.5s 1 0.25s ease forwards, spinner-rotate 0.75s infinite linear !important;
			z-index: 100001;
		}

		body.is-loading:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			opacity: 1;
			z-index: 100000;
		}

	@media (-webkit-min-device-pixel-ratio: 2) {

		body:before {
			line-height: 2.025em;
		}

	}

/* Icons */

	.icon {
		text-decoration: none;
	}

		.icon:before {
			display: inline-block;
			font-family: FontAwesome;
			font-size: 1.25em;
			text-decoration: none;
			font-style: normal;
			font-weight: normal;
			line-height: 1;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		.icon > .label {
			display: none;
		}

/* Header */

	#header {
		position: fixed;
		z-index: 10000;
		left: 0;
		top: 0;
		width: 100%;
		background: rgba(255, 255, 255, 0.3);
		height: 3em;
		line-height: 3em;
		box-shadow: 0 0 0.15em 0 rgba(0, 0, 0, 0.1);
	}
		#header img {
			
			max-width: 100%;
			max-height: 100%;
			height: 100%;
		}
	body {
		padding-top: 3em;
	}

	#nav {
		position: absolute;
		right: 0.5em;
		top: 0;
		height: 3em;
		line-height: 3em;
	}

		#nav ul {
			margin: 0;
		}

			#nav ul li {
				display: inline-block;
				margin-left: 0.5em;
				font-size: 0.9em;
			}

				#nav ul li a {
					display: block;
					color: inherit;
					text-decoration: none;
					height: 3em;
					line-height: 3em;
					padding: 0 0.5em 0 0.5em;
					outline: 0;
				}

/* Intro */

	#intro {
		position: relative;
		background: url("images/overlay.png"), url("../../images/glass_1.png");
		background-size: 256px 256px, cover;
		background-attachment: fixed, fixed;
		background-position: top left, bottom center;
		background-repeat: repeat, no-repeat;
	}

/* One */

	#one {
		background: url("images/overlay.png"), url("../../images/glass_interior_2.jpg");
		background-size: 256px 256px, cover;
		background-attachment: fixed, fixed;
		background-position: top left, center center;
	}

/* Two */

	#two {
		background: url("images/overlay.png"), url("../../images/glass_interior_3.jpg");
		background-size: 256px 256px, cover;
		background-attachment: fixed, fixed;
		background-position: top left, center center;
	}

/* Work */

	#work .row.images .image {
		-moz-transition: all 1s ease;
		-webkit-transition: all 1s ease;
		-ms-transition: all 1s ease;
		transition: all 1s ease;
		-moz-transform: translateZ(0);
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		position: relative;
		top: 0;
		left: 0;
		opacity: 1.0;
	}

	#work .row.images.inactive .image {
		opacity: 0;
	}

		#work .row.images.inactive .image.from-left {
			left: -14em;
		}

		#work .row.images.inactive .image.from-right {
			left: 14em;
		}

		#work .row.images.inactive .image.from-top {
			top: -7em;
		}

		#work .row.images.inactive .image.from-bottom {
			top: 7em;
		}

/* Contact */

	#contact {
		padding-bottom: 0;
		overflow: hidden;
	}

		#contact .box {
			-moz-transition: all 1s ease;
			-webkit-transition: all 1s ease;
			-ms-transition: all 1s ease;
			transition: all 1s ease;
			-moz-transform: translateZ(0);
			-webkit-transform: translateZ(0);
			-ms-transform: translateZ(0);
			transform: translateZ(0);
			position: relative;
			bottom: 0;
		}

		#contact.inactive .box {
			bottom: -30em;
		}

/* Footer */

	#footer {
		position: relative;
		height: 5em;
		line-height: 5em;
		margin: 0;
		background: #39454b;
		color: #999;
		color: rgba(185, 186, 187, 0.5);
		overflow: hidden;
	}

		#footer a {
			color: #999;
			color: rgba(185, 186, 187, 0.5);
		}

			#footer a:hover {
				color: #bbb;
				color: #b9babb;
			}

		#footer .actions {
			position: absolute;
			left: 1em;
			top: 0.25em;
			height: 5em;
			line-height: 5em;
			margin: 0;
		}

			#footer .actions li {
				font-size: 1.25em;
				margin: 0;
			}

				#footer .actions li a {
					padding: 0.5em;
				}

		#footer .menu {
			position: absolute;
			right: 2em;
			top: 0;
			height: 5em;
			line-height: 5em;
			margin: 0;
		}

			#footer .menu li {
				font-size: 0.9em;
			}

/* Poptrox */

	.poptrox-popup {
		-moz-box-sizing: content-box;
		-webkit-box-sizing: content-box;
		-ms-box-sizing: content-box;
		box-sizing: content-box;
		background: #fff;
		padding-bottom: 3em;
		box-shadow: 0 0.1em 0.15em 0 rgba(0, 0, 0, 0.15);
	}

		.poptrox-popup .loader {
			position: absolute;
			top: 50%;
			left: 50%;
			margin: -1em 0 0 -1em;
			width: 2em;
			height: 2em;
			display: block;
			font-size: 2em;
		}

			.poptrox-popup .loader:before {
				-moz-animation: spinner-rotate 0.75s infinite linear !important;
				-webkit-animation: spinner-rotate 0.75s infinite linear !important;
				-ms-animation: spinner-rotate 0.75s infinite linear !important;
				animation: spinner-rotate 0.75s infinite linear !important;
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
				color: #ececec;
				content: '\f1ce';
				cursor: default;
				display: block;
				height: 2em;
				left: 0;
				line-height: 2em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 2em;
			}

		.poptrox-popup .caption {
			position: absolute;
			bottom: 0;
			left: 0;
			background: #fff;
			width: 100%;
			height: 3em;
			line-height: 2.8em;
			text-align: center;
			cursor: default;
			z-index: 1;
			font-size: 0.9em;
		}

		.poptrox-popup .nav-next,
		.poptrox-popup .nav-previous {
			-moz-transition: opacity 0.2s ease-in-out;
			-webkit-transition: opacity 0.2s ease-in-out;
			-ms-transition: opacity 0.2s ease-in-out;
			transition: opacity 0.2s ease-in-out;
			position: absolute;
			top: 0;
			width: 50%;
			height: 100%;
			opacity: 0;
			cursor: pointer;
			background: rgba(0, 0, 0, 0.01);
			-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		}

		.poptrox-popup .nav-next:before,
		.poptrox-popup .nav-previous:before {
			content: '';
			position: absolute;
			width: 96px;
			height: 64px;
			background: url("images/poptrox-nav.svg");
			top: calc(50% - 1.5em);
			margin: -32px 0 0 0;
		}

		.poptrox-popup:hover .nav-next,
		.poptrox-popup:hover .nav-previous {
			opacity: 0.5;
		}

		.poptrox-popup:hover .nav-next:hover,
		.poptrox-popup:hover .nav-previous:hover {
			opacity: 1.0;
		}

		.poptrox-popup .nav-previous:before {
			-moz-transform: scaleX(-1);
			-webkit-transform: scaleX(-1);
			-ms-transform: scaleX(-1);
			transform: scaleX(-1);
			-ms-filter: "FlipH";
			filter: FlipH;
		}

		.poptrox-popup .nav-next {
			right: 0;
		}

			.poptrox-popup .nav-next:before {
				right: 0;
			}

		.poptrox-popup .nav-previous {
			left: 0;
		}

			.poptrox-popup .nav-previous:before {
				left: 0;
			}

		.poptrox-popup .closer {
			-moz-transition: opacity 0.2s ease-in-out;
			-webkit-transition: opacity 0.2s ease-in-out;
			-ms-transition: opacity 0.2s ease-in-out;
			transition: opacity 0.2s ease-in-out;
			position: absolute;
			top: 0;
			right: 0;
			width: 64px;
			height: 64px;
			text-indent: -9999px;
			z-index: 2;
			opacity: 0;
			-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		}

			.poptrox-popup .closer:before {
				content: '';
				display: block;
				position: absolute;
				right: 16px;
				top: 16px;
				width: 40px;
				height: 40px;
				border-radius: 100%;
				box-shadow: inset 0 0 0 2px #fff;
				background: url("images/poptrox-closer.svg") center center;
				color: #fff !important;
			}

		.poptrox-popup:hover .closer {
			opacity: 0.5;
		}

			.poptrox-popup:hover .closer:hover {
				opacity: 1.0;
			}

/* Touch Mode */

	body.is-touch .main {
		background-attachment: scroll !important;
	}

	body.is-touch .poptrox-popup .nav-next,
	body.is-touch .poptrox-popup .nav-previous,
	body.is-touch .poptrox-popup .closer {
		opacity: 1.0 !important;
	}

/* Wide */

	@media screen and (max-width: 1920px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 17pt;
			}

		/* Main */

			.main.style2 .content {
				width: 40%;
			}

			.main.style2.right .content {
				left: 60%;
			}

			.main.style2.inactive.left .content {
				left: -40%;
			}

	}

/* Normal */

	@media screen and (max-width: 1680px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 15pt;
			}

	}

/* Narrow */

	@media screen and (max-width: 1280px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 13pt;
			}

			#logo {
				width: 100%;
			}
		/* Main */

			.main.style2 .content {
				width: 50%;
			}

			.main.style2.right .content {
				left: 50%;
			}

			.main.style2.inactive.left .content {
				left: -50%;
			}

	}

/* Narrower */

	@media screen and (max-width: 1000px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 13pt;
			}

			.container > .container {
				width: 100% !important;
			}

		/* Main */

			.main.style2 .content {
				width: 60%;
			}

			.main.style2.right .content {
				left: 40%;
			}

			.main.style2.inactive.left .content {
				left: -60%;
			}

		/* Footer */

			#footer {
				height: auto;
				line-height: inherit;
				text-align: center;
				padding: 2em 1em 2em 1em;
			}

				#footer .actions {
					position: relative;
					left: 0;
					top: 0;
					height: auto;
					line-height: inherit;
					margin: 0 0 1em 0;
				}

				#footer .menu {
					position: relative;
					right: 0;
					top: 0;
					height: auto;
					line-height: inherit;
				}

	}

/* Mobile */

	@media screen and (max-width: 736px) {

		/* Basic */

			body {
				min-width: 320px;
				font-size: 12pt;
				line-height: 1.5em;
			}

			input, textarea, select {
				font-size: 12pt;
				line-height: 1.5em;
			}

			h2 {
				font-size: 1.5em;
				letter-spacing: -1px;
			}

		/* Box */

			.box {
				padding: 1em;
			}

				.box.style2 {
					padding: 1.5em 1.25em 1.5em 1.25em;
					background-color: rgba(255, 255, 255, 0.9);
				}

		/* Main */

			.main.fullscreen {
				height: auto !important;
			}

			.main.style1 {
				padding: 4em 15px 4em 15px;
			}

				.main.style1 h2 {
					font-size: 3em;
					letter-spacing: -3px;
				}

			.main.style2 {
				padding: 6em 15px 6em 15px;
			}

				.main.style2:before, .main.style2:after {
					display: none !important;
				}

				.main.style2 .button.anchored {
					display: none;
				}

				.main.style2 .content {
					width: 100%;
					left: 0% !important;
					text-align: center;
				}

				.main.style2 .tmp {
					width: 100%;
					height: 10em;
					background-size: cover;
				}

			.main.style3 {
				text-align: center;
				padding: 3em 10px 3em 10px;
			}

		/* Header */



			body {
				padding-top: 2.5em;
			}


			#nav {
				display: none;
			}

		/* Footer */

			#footer .menu li {
				border-left: 0;
				padding: 1em 0 0 0;
				margin: 0;
				display: block;
			}

				#footer .menu li:first-child {
					padding-top: 0;
				}

				#footer .menu li a {
					line-height: 1.5em;
				}

		/* Poptrox */

			.poptrox-popup .nav-next:before,
			.poptrox-popup .nav-previous:before {
				width: 48px;
				height: 32px;
				background-size: contain;
				margin: -16px 0 0 0;
			}

			.poptrox-popup .closer:before {
				right: 12px;
				top: 12px;
				width: 20px;
				height: 20px;
				box-shadow: inset 0 0 0 1px #fff;
				background-size: contain;
				opacity: 0.65;
			}

	}
`
