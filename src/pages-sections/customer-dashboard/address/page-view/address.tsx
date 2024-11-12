"use client";

import { useState, Fragment } from "react";
import Place from "@mui/icons-material/Place";
// Local CUSTOM COMPONENT
import Pagination from "../../pagination";
import AddressListItem from "../address-item";
import DashboardHeader from "../../dashboard-header";
// CUSTOM DATA MODEL
import Address from "models/Address.model";

// =======================================================
type Props = { addressList: Address[] };
// =======================================================

export default function AddressPageView({ addressList }: Props) {
  const [allAddress, setAllAddress] = useState(addressList);

  // HANDLE ADDRESS DELETE
  const handleAddressDelete = (id: string) => {
    setAllAddress(allAddress.filter((item) => item.id !== id));
  };

  return (
    <Fragment>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Place}
        href="/address"
        title="My Addresses"
        buttonText="Add New Address"
      />

      {/* ALL ADDRESS LIST AREA */}
      {allAddress.map((address) => (
        <AddressListItem key={address.id} address={address} handleDelete={handleAddressDelete} />
      ))}

      {/* PAGINATION AREA */}
      <Pagination count={5} onChange={(data) => console.log(data)} />
    </Fragment>
  );
}
