import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from "next/link";

export default function Menu(){
    return (
        <div>
            <nav>
                <Link href='/cart'>
                    <UserIcon className='h-8 w-8' />
                    <span>Sign In</span>

                </Link>
                <Link href='/cart'>
                    <ShoppingCartIcon className='h=8 w-8' />
                    <span className='font-bold'>Cart</span>
                </Link>
            </nav>
        </div>
    )
}