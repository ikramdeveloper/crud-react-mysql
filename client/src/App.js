import { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Employees from "./components/Employees";

const App = () => {
  const [form, setForm] = useState({});
  const [employeesList, setEmployeesList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <Form form={form} setForm={setForm} />
      <Employees
        employeesList={employeesList}
        setEmployeesList={setEmployeesList}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        form={form}
      />
    </div>
  );
};

export default App;
