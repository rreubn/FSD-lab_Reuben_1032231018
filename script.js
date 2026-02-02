* {
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
    margin: 0;
    height: 100vh;
    background: linear-gradient(135deg, #1f78c8, #4facfe);
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Card */
.container {
    background: #ffffff;
    width: 400px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

/* Logo */
.logo {
    text-align: center;
    margin-bottom: 15px;
}

.logo img {
    width: 120px;
    height: auto;
}

/* Heading */
h2 {
    text-align: center;
    margin-bottom: 25px;
    color: #1f78c8;
}

/* Form */
.field {
    margin-bottom: 18px;
}

label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
}

input:focus {
    outline: none;
    border-color: #1f78c8;
}

small {
    color: red;
    font-size: 12px;
    visibility: hidden;
}

/* Button */
button {
    width: 100%;
    padding: 12px;
    background: #1f78c8;
    border: none;
    color: white;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #155fa0;
}
