interface TechnologyBadgeProps {
  technology: string;
  variant?: "primary" | "secondary" | "accent";
}

const TechnologyBadge = ({ technology, variant = "primary" }: TechnologyBadgeProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-classicGold/20 text-classicGold border-classicGold/30";
      case "secondary":
        return "bg-mutedGrey text-lightGrey border-darkGrey";
      case "accent":
        return "bg-lightGrey/10 text-lightGrey border-lightGrey/30";
      default:
        return "bg-mutedGrey text-lightGrey border-darkGrey";
    }
  };

  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300 ${getVariantClasses()}`}>
      {technology}
    </span>
  );
};

export default TechnologyBadge;
