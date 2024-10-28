import React, { useState } from 'react';
// import './AssignmentTable.css';

const AssignmentTable = () => {
  // Sample data
  const [students] = useState([
    {
      enrollmentNo: '1099',
      name: 'Roshni Parihar',
      notesStatus: 'Incompleted',
      attendanceStatus: 'NA',
      assignmentStatus: 'Submitted'
    },
    // {
    //   enrollmentNo: '1048',
    //   name: 'Iqra Rahman',
    //   notesStatus: 'Complete',
    //   attendanceStatus: 'NA',
    //   assignmentStatus: 'Not Submitted'
    // }
    // Add more sample data as needed
  ]);

  return (
    <div className="assignment-table-container">
      <h2>Assignment Table</h2>
      <table className="assignment-table" border={"2px"}>
        <thead>
          <tr>
            <th>Enrollment No</th>
            <th>Name</th>
            <th>Notes Status</th>
            <th>Attendance Status</th>
            <th>Assignment Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.enrollmentNo}</td>
              <td>{student.name}</td>
              <td>{student.notesStatus}</td>
              <td>{student.attendanceStatus}</td>
              <td>{student.assignmentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentTable;
