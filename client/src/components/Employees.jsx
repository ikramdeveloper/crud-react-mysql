import axios from "axios";

const Employees = ({
  employeesList,
  setEmployeesList,
  isVisible,
  setIsVisible,
}) => {
  const getEmployees = async () => {
    const resp = await axios.get("http://localhost:3001/employees");
    console.log(resp.data);
    setEmployeesList(resp.data);
    setIsVisible(true);
  };

  const updateEmployee = async (e) => {
    const { id, wage } = e.target.dataset;
    let newWage = prompt("Please enter new wage", wage);
    if (!newWage) return;

    while (isNaN(parseInt(newWage))) {
      newWage = prompt("Please enter a valid number", wage);
    }

    let updatedWage = parseInt(newWage);
    const resp = await axios.put("http://localhost:3001/update", {
      id,
      wage: updatedWage,
    });

    console.log(resp.data);
  };

  const deleteEmployee = async (e) => {
    const { id } = e.target.dataset;
    const resp = await axios.delete(`http://localhost:3001/delete/${id}`);
    console.log("deleted", resp);
  };

  return (
    <div className="employees">
      {!isVisible && (
        <button className="btn" onClick={getEmployees}>
          Show Employees
        </button>
      )}
      {isVisible && (
        <div>
          {employeesList.length ? (
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>name</th>
                  <th>age</th>
                  <th>country</th>
                  <th>position</th>
                  <th>wage</th>
                  <th colSpan="2">Oper.</th>
                </tr>
              </thead>
              <tbody>
                {employeesList.map((emp, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{emp.name}</td>
                    <td>{emp.age}</td>
                    <td>{emp.country}</td>
                    <td>{emp.position}</td>
                    <td>{emp.wage}</td>
                    <td>
                      <button
                        data-wage={emp.wage}
                        data-id={emp.id}
                        onClick={updateEmployee}
                      >
                        Put
                      </button>
                    </td>
                    <td>
                      <button data-id={emp.id} onClick={deleteEmployee}>
                        Del
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No employee found</p>
          )}
          <button className="btn refresh-btn" onClick={getEmployees}>
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default Employees;
