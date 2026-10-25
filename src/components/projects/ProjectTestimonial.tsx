import { Quote } from "lucide-react";

interface ProjectTestimonialProps {
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
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

      <div className="relative z-10 max-w-3xl space-y-5">
        <div className="border-l-4 border-classicGold pl-5 sm:pl-6">
          <p className="text-lg sm:text-2xl text-offWhite font-normal italic leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        <div className="pl-5 sm:pl-6 pt-1">
          <p className="text-base sm:text-lg font-semibold text-classicGold">
            {testimonial.author}
          </p>
          {testimonial.role && (
            <p className="text-xs sm:text-sm text-lightGrey/70">
              {testimonial.role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTestimonial;
