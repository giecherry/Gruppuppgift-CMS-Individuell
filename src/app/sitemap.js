import { getStoryblokApi } from "@/lib/storyblok"

export default async function sitemap() {
    try {

        const baseUrl = 'https://gruppuppgift-cms.vercel.app'
        
        const staticPaths = [
            {
                url: `${baseUrl}/home/`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 1
            },
            {
                url: `${baseUrl}/about-us/`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8
            }
        ]

        const storyblok = getStoryblokApi()
        
        const blogPosts = await storyblok.get("cdn/stories/", {
            version: "published",
            starts_with: "posts"
        })
        const dynamicPaths = blogPosts.data.stories.map(blogPost => ({
            url: `${baseUrl}/posts/${blogPost.slug}/`,
            lastModified: new Date(blogPost.updated_at) || new Date(),
            changeFrequency: 'monthly',
            priority: 0.6
        }))
        
        return [...staticPaths, ...dynamicPaths]

    } catch (error) {
        return []
    }
}