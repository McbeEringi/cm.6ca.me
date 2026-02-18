#!/bin/bun
await Bun.build({
	entrypoints:['./src/index.mjs'],
	minify:true,
	outdir:'./dst'
});
await Bun.write('./dst/_redirects',`/ /index.js 301`);
await Bun.write('./dst/_headers',`/static/*
	Access-Control-Allow-Origin:*`);
