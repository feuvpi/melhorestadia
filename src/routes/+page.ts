import type { Post } from "$lib/types"

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function load({ fetch }){
    const response = await fetch('api/posts')

    const posts: Post[] = await response.json()

    return { posts }
}