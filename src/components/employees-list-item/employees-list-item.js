import "./employees-list-item.css";

const EmployeesListItem = ({
  id,
  name,
  salary,
  deleteItem,
  onToggleProp,
  increase,
  rise,
}) => {
  let classActive = "list-group-item d-flex justify-content-between";
  if (increase) classActive += " increase";
  if (rise) classActive += " like";

  return (
    <li className={classActive}>
      <span
        data-toggle="rise"
        onClick={onToggleProp}
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`${salary} $`}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          data-toggle="increase"
          className="btn-cookie btn-sm"
          type="button"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          className="bth-trash btn-sm"
          type="button"
          onClick={() => deleteItem(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
