"use client";
import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}

export default function ProductCard({
  product,
}: {
  product: ProductCardProps;
}) {
  const { image, name, price, rating } = product;

  return (
    <Card className="w-full max-w-136.25 border-none bg-black p-6 text-white shadow-2xl rounded-[40px]">
      {/* Media Container */}
      <CardContent className="p-0">
        <div className="relative aspect-4/3 overflow-hidden rounded-[40px] bg-[#4CAF50]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="500px"
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            priority
          />
        </div>
      </CardContent>

      {/* Product Details */}

      {/* Footer / Rating & Add Button */}
      <CardFooter className="mt-2 flex items-center justify-between bg-black border-none p-0 pb-4">
        <div className="space-y-3 ">
          <h3 className="text-2xl font-normal line-clamp-1 leading-tight">{name}</h3>

          <div className="flex items-center justify-start gap-4">
            <p className="text-3xl font-medium tracking-tight">
              ₹{price.toFixed(2)}
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < rating
                      ? "fill-[#74C044] text-[#74C044]"
                      : "fill-[#333] text-[#333]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <Button
          size="icon"
          className="h-16 w-16 rounded-2xl bg-[#74C044] hover:bg-[#63a33a] transition-colors"
        >
          <Plus className="h-8 w-8 text-black" strokeWidth={3} />
        </Button>
      </CardFooter>
    </Card>
  );
}
