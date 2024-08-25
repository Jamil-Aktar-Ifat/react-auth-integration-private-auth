

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl text-center">Please Register</h2>
      <form onSubmit={handleSubmit} className=" ">
        <input
          className="border-2 mt-4 px-4 py-2 w-3/4"
          type="name"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <br />
        <input
          className="border-2 my-4 px-4 py-2 w-3/4"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
        />
        <br />
        <div className="flex items-center justify-center relative">
          <input
            className="border-2  px-4 py-2 w-3/4"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <br />
        <input className="mb-3" type="checkbox" name="terms" id="terms" />
        <label className="ml-2 mb-4" htmlFor="terms">
          Accept our <a href="http://">Terms and Conditions </a>
        </label>
        <br />
        <input
          type="submit"
          value="Register"
          className="btn btn-secondary w-3/4  rounded-none"
        />
      </form>
    </div>
  );
};

export default Register;
