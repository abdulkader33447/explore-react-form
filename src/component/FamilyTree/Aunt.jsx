import React, { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext);

  const handleAddMoney = () => {
    setMoney(money + 500);
  };

  return (
    <div>
      <h2>Aunt</h2>
      <section className="flex">
        <Cousin asset={asset} name="Tom Tom"></Cousin>
        <Cousin name="Jo Jooo"></Cousin>
        <button onClick={handleAddMoney}>Add 500 tk</button>
      </section>
    </div>
  );
};

export default Aunt;
