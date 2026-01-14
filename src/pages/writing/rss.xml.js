import rss from '@astrojs/rss';
import { getCollection } from "astro:content";
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
	const posts = (await getCollection('writing'))
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf(),)
		.slice(0, 10);
	
	return rss({
		title: 'Mia Rose Winters Writing Exercises',
		description: 'Little writing exercises and short stories I made. No guarantees for quality.',
		site: context.site,
		xmlns: {
			content: 'http://purl.org/rss/1.0/modules/content/',
			atom: 'http://www.w3.org/2005/Atom',
			dc: 'http://purl.org/dc/elements/1.1/',
		},
		trailingSlash: true,
		stylesheet: new URL('/pretty-feed-v3.xsl', context.site).toString(),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/writing/${post.id}`,
			content: parser.render(post.body),
		})),
		customData: `<language>en-us</language>`,
	});
}