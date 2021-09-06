import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import DashboardComponent from "../../component/dasboard";
import withAuth from "../../HOC/withAuth";
import React, { lazy } from "react";
const DashboardComponent = lazy(() => import("../../component/dasboard"));
interface Type {
  dataTable: Array<any>;
}

function Dashboard(props: Type) {
  const { dataTable } = props;
  return <DashboardComponent dataTable={dataTable} />;
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_HOST_ROUTER}`);
  const dataTable = await res.json();
  return {
    props: {
      dataTable,
    },
  };
}
export default withAuth(Dashboard);
