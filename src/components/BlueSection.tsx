interface BlueSectionProps {
  children: React.ReactNode;
  className?: string;
}

const BlueSection = ({ children, className = "" }: BlueSectionProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "3.5rem",
        padding: "1rem",
        boxSizing: "border-box",
      }}
      className={`bg-primary-600 text-white ${className}`}
    >
      <div
        style={{
          margin: 0,
          padding: 0,
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BlueSection;
