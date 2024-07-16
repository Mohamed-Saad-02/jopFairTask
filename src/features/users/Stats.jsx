import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineBanknotes } from "react-icons/hi2";

import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import { FaRegAddressCard } from "react-icons/fa6";

function Stats({ name, amount, userId }) {
  return (
    <>
      <Stat
        title="#ID"
        color="indigo"
        icon={<FaRegAddressCard />}
        value={userId}
      />
      <Stat
        title="Name"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={name}
      />
      <Stat
        title="Total amount"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(amount)}
      />
    </>
  );
}

export default Stats;
