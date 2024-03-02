/* eslint-disable @typescript-eslint/no-unused-vars */
import type { RequestHandler } from './$types';
import { json } from "@sveltejs/kit"
import type { Post } from '$lib/types'


async function getPosts(){
    let posts = []

    const paths = import.meta.glob('/src/posts/*.md', { 
        eager: true })

    console.log(paths)

    for(const path in paths){
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if(file && typeof file === 'object' && 'metadata' in file && slug){
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug } satisfies Post
            post.published && posts.push(post)
            console.log(posts)
        }
     
    }

    posts = posts.sort((first, second) => 
        new Date(second.publishedAtIso).getTime() - new Date(first.publishedAtIso).getTime()
    )

    return posts
}

export const GET: RequestHandler = async () => {
    const posts = await getPosts();
    return json(posts)
};