import React from "react";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import Text from "../components/text";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <Text size="large" color="secondary">
        Главная
      </Text>
      <Link to={"/registration"} className="text-black">
        <Button size="small" color="primary" title="Зарегистрируйтесь" />
      </Link>
    </div>
  );
};

export default Home;
