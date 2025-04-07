const students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

function Students() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.suid}>
          {student.name}, {student.year}, {student.major}
        </li>
      ))}
    </ul>
  );
}

function FilteredStudent() {
  const filtered = students.filter(student => student.name === "Sue Flay");
  return (
    <ul>
      {filtered.map((student) => (
        <li key={student.suid}>
          {student.name}, {student.year}, {student.major}
        </li>
      ))}
    </ul>
  );
}

function App() {
  function handleClick(message) {
    console.log(message);
  }

  return (
    <div>
      <h1>Student List</h1>
      <Students />
      <button onClick={() => handleClick("按钮点击了")}>Click Me</button>
      <h2>Filtered Student</h2>
      <FilteredStudent />
    </div>
  );
}

export default App;
