import "./app-info.css";

const AppInfo = ({ data }) => {
  const increase = data.filter((item) => item.increase).length;
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>Премию получат: {increase}</h2>
    </div>
  );
};

export default AppInfo;
