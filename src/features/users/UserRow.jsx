import PropTypes from "prop-types";

import { HiEye } from "react-icons/hi2";

import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function UserRow({ user = {} }) {
  const navigate = useNavigate();

  const { id, name, transactions = [] } = user;

  return (
    <Table.Row>
      <div></div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{formatCurrency(transactions.at(-1).amount)}</div>
      <div>{transactions.at(-1).date}</div>

      <div>
        <Menus.Menu>
          <Menus.Toggle id={id} />

          <Menus.List id={id}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/details/${id}`)}
            >
              See details
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </Table.Row>
  );
}

export default UserRow;

UserRow.propTypes = {
  user: PropTypes.object,
};
