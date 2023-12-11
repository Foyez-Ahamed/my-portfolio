const SectionTitle = ({title}) => {
  return (
    <div>

      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <progress
          className="progress lg:w-[400px] prog"
          value="20"
          max="100"
        ></progress>
      </div>

    </div>
  );
};

export default SectionTitle;
