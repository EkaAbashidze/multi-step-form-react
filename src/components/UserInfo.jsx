import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function UserInfoForm() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-md">
      <h2>
        User Information <span className="font-bold">{counter}</span>
      </h2>
      <button className=" underline" onClick={incrementHandler}>
        Increment Counter
      </button>
      <br />
      <button className=" underline" onClick={decrementHandler}>
        Decrement Counter
      </button>

      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
    </div>
  );
}

export default UserInfoForm;
