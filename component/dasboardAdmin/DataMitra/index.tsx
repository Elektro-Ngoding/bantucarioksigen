import { ChangeEvent, useEffect, useState } from "react";
import { getMitra, updateMitra } from "../../../lib/mitraAction";
import { removeUserSession } from "../../../lib/withSession";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Link from "next/link";
import Table from "../../Table";
interface Type {
  dataTab: Array<any>;
}

export default function DataMitra(props: Type) {
  const { dataTab } = props;
  return (
    <div className="bg-gray-100 pt-2 pb-3">
      <div className="text-center">
        <h1>
          <b>Data Mitra</b>
        </h1>
      </div>

      <div className="flex flex-start px-3">
        <div className="rounded">
          <Link href="adminOksigen/addData">
            <div className="bg-primary rounded text-white p-3">
              <b aria-hidden="true">Tambah Data</b>
            </div>
          </Link>
        </div>
      </div>
      <div className="p-3">
        <div className="rounded">
          <Table dataTab={props.dataTab} />
        </div>
      </div>
    </div>
  );
}
