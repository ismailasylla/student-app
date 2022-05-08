import { useDispatch } from "react-redux";

const StudentRecord = (student) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>{new Date(student.createdAt).toLocaleString("en-US")}</div>
      <h2>{student.name}</h2>
    </div>
  );
};

export default StudentRecord;
