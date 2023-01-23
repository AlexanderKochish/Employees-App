import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({ data, deleteItem, onToggleProp }) => {
  const elements = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}
        {...item}
        deleteItem={deleteItem}
        onToggleProp={(e) =>
          onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });
  return (
    <ul className="app-list list-group">
      {!elements.length ? (
        <span className="list-empty">Список пуст!</span>
      ) : (
        elements
      )}
    </ul>
  );
};

export default EmployeesList;
