import "./app-filter.css";

const AppFilter = (props) => {
  const buttons = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "1000", label: "З/П больше 1000$" },
  ];

  const btn = buttons.map(({ name, label }) => {
    const active = props.filter === name;
    let clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        name={name}
        className={`btn ${clazz}`}
        onClick={() => props.onFiltersUpdate(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{btn}</div>;
};

export default AppFilter;
