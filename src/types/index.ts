import { ProductFieldSchema } from '@/lib/validator'
import { z } from 'zod'

// ✅ Correct syntax
export type IProductField = z.infer<typeof ProductFieldSchema>



export type Data  = {
    products: IProductField[],
    headerMenu: {
        name: string,
        href: string
    }[],
    carousels: {
        image: string,
        url: string,
        title: string,
        buttonCaption: string,
        isPublished: false
    }[]
    
}