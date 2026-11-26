
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/formschema/registerschema";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerschema)
  });
  function onSubmit(data) {
    console.log(data);
    alert("Register successful");
    navigate("/");
  }
  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter Name"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
        <br />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <br />
        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter Age"
          {...register("age")}
        />
        <p>{errors.age?.message}</p>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
