import Student from "./student.jsx";
function App() {
  return (
    <div>
      <Student name="John Doe" age={20} isStudent={true} />
      <Student name="Jane Smith" age={22} isStudent={true} />
      <Student name="Bob Johnson" age={21} isStudent={true} />
      <Student name="Alice Williams" age={23} isStudent={true} />
    </div>
  );
}
export default App;
