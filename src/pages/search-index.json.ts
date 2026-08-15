import { getCollection } from "astro:content";

function stripMarkdown(md: string): string {
	return md
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/`([^`]+)`/g, "$1")
		.replace(/!\[.*?\]\(.*?\)/g, " ")
		.replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
		.replace(/^#{1,6}\s+/gm, "")
		.replace(/[>*_~\-|#]/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

export async function GET() {
	const posts = (
		await getCollection("posts", ({ data }) => !data.draft)
	).sort((a, b) => b.data.published.getTime() - a.data.published.getTime());

	const index = posts.map((post) => ({
		title: post.data.title,
		slug: post.id,
		published: post.data.published.toISOString().slice(0, 10),
		description: post.data.description,
		tags: post.data.tags,
		category: post.data.category,
		content: stripMarkdown(post.body),
	}));

	return new Response(JSON.stringify(index), {
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
}