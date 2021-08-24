import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Link from "next/link";
import Dashboard from "../../component/dasboardAdmin";
import Layout from "../../component/Layout/Layout";
import Table from "../../component/Table";
interface Type {
  dataTable: Array<any>;
}

export default function Admin(props: Type) {
  const { dataTable } = props;
  return <Dashboard dataTable={dataTable} />;
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3006/dataoksigen");
  const dataTable = await res.json();
  return {
    props: {
      dataTable,
    },
  };
}
