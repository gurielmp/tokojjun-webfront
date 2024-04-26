"use client"

import Image from "next/image"
import { Toast } from "react-hot-toast"
import { X } from "lucide-react"

import IconButton from "@/components/ui/icon-button"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"
import { Product } from "@/types"
import { useState } from "react"

interface CartItemProps {
  data: Product
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const [qty, setQty] = useState(1)

  const onIncrement = () => {
    setQty(qty + 1)
  }
  const onDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }
  const cart = useCart()

  const onRemove = () => {
    cart.removeItem(data.id)
  }

  const totalPrice = data.price * qty

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-6">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex flex-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 pl-4">{data.size.name}</p>
          </div>
          <Currency value={totalPrice} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-6">
          <div className="flex justify-between">
            <p className="text-lg text-black">Qty</p>
          </div>
          <div className="mt-1 flex flex-sm">
            <button onClick={onDecrement} className="text-gray-500 mr-4 pr-4">
              -
            </button>
            <span className="text-gray-500 mx-2">{qty}</span>
            <button onClick={onIncrement} className="text-gray-500 ml-4 pl-4">
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
