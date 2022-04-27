import axios from "axios";

const Form = ({ form, setForm }) => {
  const addEmployee = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:3001/create", form);
      console.log("From React", resp.data);
      e.target.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={addEmployee}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        onChange={(e) => setForm({ ...form, country: e.target.value })}
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        onChange={(e) => setForm({ ...form, position: e.target.value })}
      />
      <label htmlFor="wage">Wage (year)</label>
      <input
        type="text"
        id="wage"
        onChange={(e) => setForm({ ...form, wage: e.target.value })}
      />
      <button type="submit" className="btn">
        Add Employee
      </button>
    </form>
  );
};

export default Form;
