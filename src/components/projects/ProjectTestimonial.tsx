import { IProjectTestimonial } from "@/models/Projects";
import { Quote } from "lucide-react";
import Image from "next/image";

interface ProjectTestimonialProps {
  testimonial?: IProjectTestimonial;
}

const ProjectTestimonial = ({ testimonial }: ProjectTestimonialProps) => {
  if (!testimonial || !testimonial.quote || !testimonial.author) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-classicGold/30 bg-cardBg/60 backdrop-blur-xs p-8 sm:p-10 my-12 shadow-xl inset-shadow-xs inset-shadow-darkGrey">
      <div className="absolute top-6 right-6 text-classicGold/10 pointer-events-none">
        <Quote className="w-24 h-24 stroke-1" />
      </div>

      <div className="relative z-10 max-w-3xl space-y-6">
        <div className="border-l-4 border-classicGold pl-5 sm:pl-6">
          <p className="text-lg sm:text-2xl text-offWhite font-normal italic leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-4 pl-5 sm:pl-6 pt-1">
          {testimonial.avatarUrl ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-classicGold/40 shrink-0">
              <Image
                src={testimonial.avatarUrl}
                alt={testimonial.author}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-11 h-11 rounded-full bg-classicGold/20 border border-classicGold/40 flex items-center justify-center text-classicGold font-bold text-lg shrink-0">
              {testimonial.author.charAt(0)}
            </div>
          )}

          <div>
            <p className="text-base sm:text-lg font-semibold text-classicGold">
              {testimonial.author}
            </p>
            <div className="text-xs sm:text-sm text-lightGrey/75 flex items-center gap-1.5 flex-wrap">
              {testimonial.role && <span>{testimonial.role}</span>}
              {testimonial.role && testimonial.company && <span>·</span>}
              {testimonial.company && (
                <span className="text-offWhite/90 font-medium">
                  {testimonial.company}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTestimonial;
