import { createClient } from "next-sanity";
export const client=createClient({
    apiVersion:"2023-09-18",
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:"",
    useCdn:false
})