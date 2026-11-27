
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/FormSchema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerschema)
    });
    function onSubmit1(data) {
        console.log(data);
        alert("Register successful");
        navigate("/", {
            state: data
        });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-white p-7  shadow-lg w-99">
                <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
                    Registration Form
                </h1>
                <form onSubmit={handleSubmit(onSubmit1)}>
                    <label className="block mb-2 ">
                        Name
                    </label>
                    <input
                        className="w-full border p-5 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        type="text"
                        {...register("name")}
                    />
                    <p className="text-red-500 text-sm mb-3">
                        {errors.name?.message}
                    </p>
                    <label className="block mb-2 ">
                        Email
                    </label>
                    <input
                        className="w-full border p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email")}
                    />
                    <p className="text-red-800 text-sm mb-3">
                        {errors.email?.message}
                    </p>
                    <label className="block mb-2 ">
                        Password
                    </label>
                    <input
                        className="w-full border p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter password"
                        type="password"
                        {...register("password")}
                    />
                    <p className="text-red-800 text-sm mb-3">
                        {errors.password?.message}
                    </p>
                    <label className="block mb-1 ">
                        Age
                    </label>
                    <input
                        className="w-full border p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your age"
                        type="number"
                        {...register("age")}
                    />
                    <p className="text-red-800 text-sm mb-3">
                        {errors.age?.message}
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-green-400 text-white p-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
