interface CapabilitiesCardProps {
  features?: string[];
}

const CapabilitiesCard = ({ features }: CapabilitiesCardProps) => {
  if (!features || features.length === 0) return null;

  return (
    <div className="p-6 md:p-8 rounded-4xl inset-shadow-xs inset-shadow-darkGrey bg-cardBg/40 border border-darkGrey/40 space-y-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-offWhite">
        Key Capabilities
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-lightGrey/90 text-sm sm:text-base leading-relaxed">
            <span className="text-classicGold font-bold mt-0.5">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CapabilitiesCard;
