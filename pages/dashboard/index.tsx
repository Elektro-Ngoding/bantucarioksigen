import DashboardComponent from "../../component/Dasboard";
import withAuth from "../../HOC/withAuth";
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
