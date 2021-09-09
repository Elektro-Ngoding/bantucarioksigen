interface Type {
  dataTab: Array<any>;
}

export default function Home(props: Type) {
  const { dataTab } = props;
  return (
    <div className="bg-gray-100 pt-2 pb-3 px-3">
      <h1>Dashboard Admin</h1>
    </div>
  );
}
