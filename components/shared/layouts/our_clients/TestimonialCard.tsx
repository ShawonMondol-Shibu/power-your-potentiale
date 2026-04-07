import React from "react";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  title: string;
  feedback: string;
  name: string;
  role: string;
  image: string;
  rating: number; // Assuming rating is a number between 0 and 5
}

const TestimonialCard = ( { title, feedback, name, role, image, rating }: TestimonialCardProps ) => {
  return (
    <>
      <div className="w-full max-w-112.5 bg-black rounded-[40px] p-10 text-white shadow-2xl">
        {/* Title */}
        <h2 className="text-[22px] font-semibold tracking-tight mb-4">
          {title}
        </h2>

        {/* Testimonial Body */}
        <p className="text-zinc-400 text-[15px] leading-[1.6] mb-10">
          {feedback}
        </p>

        {/* Footer Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar - Using a stylized SVG to match the character art style */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-sky-400 ring-2 ring-zinc-800">
              <Image src={image} alt={name} width={64} height={64} />
            </div>

            {/* User Info */}
            <div>
              <h3 className="text-[19px] font-medium leading-tight">
                {name}
              </h3>
              <p className="text-zinc-500 text-[14px]">{role}</p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {Array.from({ length: rating }, (_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-yellow-500 text-yellow-500"
                />
              ))}
              <StarHalf size={14} className="fill-yellow-500 text-yellow-500" />
            </div>
            <span className="text-zinc-400 text-[13px] ml-1">(4.5)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
