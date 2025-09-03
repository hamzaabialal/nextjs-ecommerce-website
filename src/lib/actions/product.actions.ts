"use server"

import { connectToDatabase } from "../db"
import Product, { IProduct } from "../db/models/product.models"

export async function getAllCategory(){
    await connectToDatabase()
    const category = await Product.find({isPublished: true}).distinct('category')
    return category

}

export async function getProductFormCard({tag, limit=4}:{
    tag: string,
    limit?: number
}){
    await connectToDatabase()
    const product = await Product.find(
        {tags: { $in:[tag]}, isPublished: true},
        {
            name:1,
            href: { $concat: ['/products/', '$slug']},
            image: { $arrayElemAt: ['$images', 0]}
        }
    ).sort({createdAt: 'desc'})
    .limit(limit)

    return JSON.parse(JSON.stringify(product)) as {
        name: string,
        href: string,
        image: string
    }
}

export async function getProductByTags({tag, limit=4}: {
    tag: string,
    limit: number
}){
    await connectToDatabase()
    const product = await Product.find({
        tags: {$in: [tag]},
        isPublished: true
    })
    return JSON.parse(JSON.stringify(product)) as IProduct[]
}
