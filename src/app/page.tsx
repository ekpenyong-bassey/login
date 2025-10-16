import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-300 p-8">
      <h1 className="text-5xl frot-bold mb-6">Login</h1>

      <form className="bg-white-700 shadow-md rounded-lg p-8 w-full max-w-sm">
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />

        <input
          type="text"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" />Remember me
          </label>
          <a href="/forget-Password" className="text-sm text-blue-600 hover:underline">
            Forget password?
          </a>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <p className="mt-4 text-sm">
        Don't have an account?{""}
        <a href="/register" className="text-blue-600 hover:underline">
        </a>
      </p>
    </div>

  );
}
