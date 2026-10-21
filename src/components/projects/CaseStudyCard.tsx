interface CaseStudyCardProps {
  heading: string;
  content: string;
}

const CaseStudyCard = ({ heading, content }: CaseStudyCardProps) => {
  if (!content) return null;

  return (
    <div className="p-6 md:p-8 rounded-4xl inset-shadow-xs inset-shadow-darkGrey bg-cardBg/40 border border-darkGrey/40 space-y-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-offWhite">
        {heading}
      </h2>
      <p className="text-lightGrey/90 leading-relaxed text-sm sm:text-base whitespace-pre-line">
        {content}
      </p>
    </div>
  );
};

export default CaseStudyCard;
