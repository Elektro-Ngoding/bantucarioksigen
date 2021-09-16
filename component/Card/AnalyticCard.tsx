export default function AnalyticCard(props: any) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-4 xl:col-span-2 bg-white shadow-md rounded-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 pt-3 px-3">
        {props.nameData}
      </h2>
      <div className="flex items-start">
        <h1 className="font-bold text-red-500 p-3">
          {props.value}
          <span className="text-lg font-semibold text-gray-800 py-3 pl-1">
            Mitra
          </span>
        </h1>
      </div>
    </div>
  );
}
