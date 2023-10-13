import { useSelector } from "react-redux";

function UserInfoForm() {
  const userInfo = useSelector((state) => state.userInfo);

  console.log("UserInfoForm - Modified userInfo:", userInfo);

  return (
    <div className="bg-white p-2 rounded-lg shadow-md">
      <h2>User Information</h2>

      <div>
        <label>Name:</label>
        <input type="text" defaultValue={userInfo.name} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" defaultValue={userInfo.email} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" defaultValue={userInfo.phoneNumber} />
      </div>
    </div>
  );
}

export default UserInfoForm;
