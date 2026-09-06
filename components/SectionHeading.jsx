const SectionHeading = ({ index, title, kicker }) => {
  return (
    <div className="mb-10 md:mb-14">
      {kicker && (
        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-orange">
          {kicker}
        </p>
      )}
      <div className="flex items-baseline gap-4">
        {index && (
          <span className="font-mono text-sm text-gray-600">{index}</span>
        )}
        <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <span className="h-px flex-1 bg-line" />
      </div>
    </div>
  );
};

export default SectionHeading;
