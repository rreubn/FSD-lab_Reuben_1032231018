<?php
include "db.php";

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['department'];

    $sql = "INSERT INTO student (name, email, mobile, department)
            VALUES ('$name', '$email', '$mobile', '$dept')";
    mysqli_query($conn, $sql);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Management System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f9;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 80%;
            margin: 40px auto;
        }
        .card {
            background: white;
            padding: 20px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 8px 0 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .btn {
            background: #4f46e5;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .btn:hover {
            background: #4338ca;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            text-align: center;
        }
        th {
            background: #4f46e5;
            color: white;
        }
        tr:nth-child(even) {
            background: #f2f2f2;
        }
        .delete {
            color: red;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="container">

    <div class="card">
        <h2>Student Registration Form</h2>
        <form method="post">
            <label>Name</label>
            <input type="text" name="name" required>

            <label>Email</label>
            <input type="email" name="email" required>

            <label>Mobile</label>
            <input type="text" name="mobile" required>

            <label>Department</label>
            <input type="text" name="department" required>

            <button type="submit" name="submit" class="btn">Add Student</button>
        </form>
    </div>

    <div class="card">
        <h2>Student Records</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Department</th>
                <th>Action</th>
            </tr>

            <?php
            $result = mysqli_query($conn, "SELECT * FROM student");
            while ($row = mysqli_fetch_assoc($result)) {
            ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['name']; ?></td>
                <td><?php echo $row['email']; ?></td>
                <td><?php echo $row['mobile']; ?></td>
                <td><?php echo $row['department']; ?></td>
                <td>
                    <a class="delete" href="delete.php?id=<?php echo $row['id']; ?>">Delete</a>
                </td>
            </tr>
            <?php } ?>
        </table>
    </div>

</div>

</body>
</html>
