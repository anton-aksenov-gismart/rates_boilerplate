import React, { useEffect } from "react";
import { CurrencyKeys, currenciesUrl } from "../common/config";
import { createRatesUrl } from "../common/helpers";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { TReduxProps } from "./Container";

export type TDropdownProps = {
  label: string;
  menuPlacement: any;
} & TReduxProps;

const DropdownMenu: React.FC<TDropdownProps> = (props) => {
  const {
    fetchRates,
    fetchCurrencies,
    menuItems,
    label = "Dropdown",
    menuPlacement = "bottomCenter",
  } = props;

  useEffect(() => {
    fetchCurrencies(currenciesUrl);
  }, []);

  function handleMenuClick(e) {
    const targetEl =
      menuItems.find((el) => el[CurrencyKeys.id].toString() === e.key) || {};
    const currencyId = targetEl[CurrencyKeys.id] || "";
    const url = createRatesUrl(currencyId);
    fetchRates(url);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      {menuItems.map((item) => (
        <Menu.Item key={item[CurrencyKeys.id]} icon={<DownOutlined />}>
          {item[CurrencyKeys.name]}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div id="components-dropdown-demo-dropdown-button">
      <Dropdown.Button
        overlay={menu}
        placement={menuPlacement}
        icon={<DownOutlined />}
      >
        {label}
      </Dropdown.Button>
    </div>
  );
};

export default DropdownMenu;
