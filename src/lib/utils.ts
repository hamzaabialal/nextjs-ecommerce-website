import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2,'0')}` : int
}

export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')

const CURRENCY_FORMATTOR = new Intl.NumberFormat('en-PK', {
  currency: "PKR",
  style: 'currency',
  minimumFractionDigits: 2
})   


export function currency_formate(amount: number){
  return CURRENCY_FORMATTOR.format(amount)
}


const NUMBER_FORMATTOR = new Intl.NumberFormat('en-PK')

export function number_formate(num: number){
  return NUMBER_FORMATTOR.format(num)
}