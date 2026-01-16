import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
	type: 'content',
	// 블로그 포스트의 형식을 정의합니다 (제목, 날짜 등)
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// 날짜 형식은 'Jun 1, 2024' 처럼 문자열로 들어올 수도 있으니 유연하게 설정
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { gallery };