import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { IProduct } from '@/lib/db/models/product.models'
import Rating from './rating'
import { number_formate } from '@/lib/utils'
import ProductPrice from './product-price'
import ImageHover from './image-hover'
import { boolean } from 'zod'

const ProductCard = ({
    product,
    hideBorder=false,
    hideDetails=false
}: {
    product: IProduct
    hideDetails?: boolean
    hideBorder?:boolean
    hideAddToCart?: boolean 
}) => {
    const ProductImage = () => (
        <Link href
    )
}

