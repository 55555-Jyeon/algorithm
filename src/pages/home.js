import { useNavigate } from "react-router-dom";
import Test01 from "./day01/test";

const HomePage = () => {
  const navigate = useNavigate();
  const toTest01 = () => {
    navigate("./day01");
  };
  return (
    <>
      <h1>programmers coding test</h1>
      <div>
        <h3> day01.</h3>
        <button onClick={toTest01}>Test 01</button>
      </div>
    </>
  );
};
export default HomePage;
