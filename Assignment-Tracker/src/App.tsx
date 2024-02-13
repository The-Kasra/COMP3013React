import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

function App() {
  const [assignments, setAssignments] = useState([]);

  const createAssignment = (newAssignment) => {
    setAssignments([...assignments, newAssignment]);
  };

  const deleteAssignment = (assignmentTitle) => {
    const updatedAssignments = assignments.filter((assignment) => assignment.title !== assignmentTitle);
    setAssignments(updatedAssignments);
  };

  const completeAssignment = (assignmentTitle) => {
    const updatedAssignments = assignments.map((assignment) => {
      if (assignment.title === assignmentTitle) {
        return { ...assignment, completed: !assignment.completed };
      }
      return assignment;
    });
    setAssignments(updatedAssignments);
  };
  return (
    <>
      <Header onClickInput={() => {}} onCreateAssignment={createAssignment} />
      <Assignments assignments={assignments} onDeleteAssignment={deleteAssignment} onCompleteAssignment={completeAssignment} />
    </>
  );
}

export default App;
