import dataProv from "../../data/province.json";
import dataKota from "../../data/kota.json";

interface InputChangeInterface {
  target: HTMLInputElement;
}

type FieldProps = {
  type: string;
};

interface GetKota {
    val : string
}

export default function Province(props: GetKota) {
    const { val } = props;
  const listItemsProvisi = dataProv.map((item) => (
    <option>{item.provinsi}</option>
  ));

  
  const handleOnChange = (event: InputChangeInterface) => {
      const val = event.target.value;
      const listItemsKota = dataKota.map((item) => (
        item.Aceh.map((data) => (
            <option>{data}</option>
          ))
      ));
     console.log(listItemsKota[0][0].props.children);
    //   return {
    //       props :{
    //         listItemsKota
    //       }
    //   }
  };

  return (
    <div>
      <select
        className="browser-default custom-select"
        data-style="select-new"
        data-live-search="true"
        data-size={5}
        id="provinsi"
        name="propinsi"
        data-width="100%"
        onChange={handleOnChange}
      >
        {listItemsProvisi}
      </select>
      <select
        className="browser-default custom-select"
        data-style="select-new"
        data-live-search="true"
        data-size={5}
        id="provinsi"
        name="propinsi"
        data-width="100%"
        // onChange={handleOnChange}
      >
        {handleOnChange}
      </select>
    </div>
  );
}
