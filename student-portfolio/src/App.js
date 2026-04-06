import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: ''
  });
  const [editId, setEditId] = useState(null);

  // fetch students
  const fetchStudents = () => {
    axios.get('http://localhost:3000/student/view')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // add or update
  const handleSubmit = () => {
    if (editId) {
      axios.put(`http://localhost:3000/student/update/${editId}`, form)
        .then(() => {
          setEditId(null);
          setForm({ name: '', email: '', course: '' });
          fetchStudents();
        });
    } else {
      axios.post('http://localhost:3000/student/add', form)
        .then(() => {
          setForm({ name: '', email: '', course: '' });
          fetchStudents();
        });
    }
  };

  // delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/student/delete/${id}`)
      .then(() => fetchStudents());
  };

  // edit
  const handleEdit = (student) => {
    setForm({
      name: student.name,
      email: student.email,
      course: student.course
    });
    setEditId(student._id);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Registration</h1>

      {/* FORM */}
      <div style={styles.card}>
        <h2>{editId ? 'Update Student' : 'Add Student'}</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          style={styles.input}
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          style={styles.input}
        />
        <input
          name="course"
          value={form.course}
          onChange={handleChange}
          placeholder="Course"
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          {editId ? 'Update Student' : 'Add Student'}
        </button>
      </div>

      {/* LIST */}
      <div style={styles.card}>
        <h2>Students List</h2>

        {students.map(s => (
          <div key={s._id} style={styles.student}>
            <p><b>{s.name}</b></p>
            <p>{s.email}</p>
            <p>{s.course}</p>

            <button onClick={() => handleEdit(s)} style={styles.edit}>
              Edit
            </button>
            <button onClick={() => handleDelete(s._id)} style={styles.delete}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// styles
const styles = {
  container: {
    background: '#0f172a',
    minHeight: '100vh',
    padding: '30px',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  card: {
    background: '#1e293b',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px'
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '6px',
    border: 'none'
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#22c55e',
    border: 'none',
    borderRadius: '6px',
    color: 'white'
  },
  student: {
    background: '#334155',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '8px'
  },
  edit: {
    marginRight: '10px',
    background: '#3b82f6',
    border: 'none',
    padding: '5px 10px',
    color: 'white',
    borderRadius: '5px'
  },
  delete: {
    background: '#ef4444',
    border: 'none',
    padding: '5px 10px',
    color: 'white',
    borderRadius: '5px'
  }
};

export default App;