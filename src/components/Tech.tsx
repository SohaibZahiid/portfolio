const Tech = ({ Icon, label }: { Icon: React.ElementType; label: string }) => {
  return (
    <li className="flex gap-4 items-center">
      <Icon className="text-rose-600 text-5xl" />
      <p className="text-slate-600 text-base md:text-lg lg:text-xl">{label}</p>
    </li>
  );
};

export default Tech;
