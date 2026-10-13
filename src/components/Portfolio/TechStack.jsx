const TechStack = ({ title, items = [], limit }) => {
  return (
    <div className="px-5 py-4 flex items-center justify-between gap-3">
      <h4 className="font-code font-semibold text-base text-secondary leading-tight">
        {title}
      </h4>
      <ul className="flex flex-wrap gap-1.5 justify-end">
        {items.slice(0, limit).map((item) => (
          <li
            key={item}
            className="font-code text-[11px] text-[#22c3df]/70 bg-[#22c3df]/10 px-2 py-0.5 rounded"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
