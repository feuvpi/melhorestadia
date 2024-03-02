import { error } from "@sveltejs/kit"

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function load({ params }) {
    try{
        console.log("entrei aqui")
        const post = await import(`../../posts/${params.slug}.md`)

        console.log(post)
        return{
            content: post.default,
            meta: post.metadata
        }
    } catch (e){
        throw error(404, `Could not find ${params.slug}`)
    }

}



