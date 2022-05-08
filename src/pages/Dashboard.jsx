import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getStudent, reset } from "../features/students/studentSlice";
import StudentRecord from "../components/StudentRecord";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { students, isLoading, isError, message } = useSelector(
    (state) => state.students
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getStudent());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Student Dashboard</p>
      </section>

      <section className="content">
        {students.length > 0 ? (
          <div className="student">
            {students.map((student) => (
              <StudentRecord key={student._id} student={student} />
            ))}
          </div>
        ) : (
          <h3>No records found</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
