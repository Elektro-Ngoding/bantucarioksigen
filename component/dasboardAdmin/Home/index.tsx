import { ChangeEvent, useEffect, useState } from "react";
import { getMitra, updateMitra } from "../../../lib/mitraAction";
import { removeUserSession } from "../../../lib/withSession";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Link from "next/link";
import Table from "../../Table";
interface Type {
  dataTab: Array<any>;
}

export default function Home(props: Type) {
  const { dataTab } = props;
  return (
    <div className="bg-gray-100 pt-2 pb-3 px-3">
        <h1>halaman home</h1>
    </div>
  );
}
