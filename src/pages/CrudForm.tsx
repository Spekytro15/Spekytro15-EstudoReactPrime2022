import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
interface CrudFormProps {
  dataCrud: any;
  actionHideDialog: () => any;
  actionOkDialog: (rowData: any) => any;
}

export const CrudForm: React.FC<CrudFormProps> = (props) => {
  const [rowData, setRowData] = useState({
    jt_nome: "",
    jt_codigo: "",
    jt_data_nascimento: Date(),
    ativo: true,
  });

  const [value, setValue] = useState(null);
  useEffect(() => {
    setRowData(props.dataCrud);
    console.log(props.dataCrud);
  }, [props.dataCrud]);

  //======================
  const dialogFooter = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={props.actionHideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={() => props.actionOkDialog(rowData)}
      />
    </>
  );

  const onInputChange = (value: any, name: any) => {
    const val = (value) || "";
    let _rowData: any = { ...rowData };
    _rowData[`${name}`] = val;
    
    setRowData(_rowData);
  };




  const onInputChangeDate = (value: any, name: any) => {
   
    const dated = convertDate(value)
   let _rowData: any = { ...rowData };
   _rowData[`${name}`] = dated
   
   setRowData(_rowData);
  }


  const convertDate = (dateOriginal : string) => {
   // dateOriginal = moment(dateOriginal).format('DD/MM/YYYY');
   let dt = new Date(dateOriginal)
    console.log('>>>dateOriginal',dateOriginal)
    return dt
  };

 const onchangeBoolean = (value: any, name:any) =>{
  setValue(value)
  const val = (value) || "";
  let _rowData: any = { ...rowData };
  _rowData[`${name}`] = val;
  
  console.log(_rowData[`${name}`] = val)
  setRowData(_rowData);
  }
  return (
    <>
      <div className="field">
        <label htmlFor="jt_codigo">Codigo</label>
        <InputText
          id="jt_codigo"
          value={rowData.jt_codigo}
          onChange={(e) => onInputChange(e.target.value, "jt_codigo")}
          required
          autoFocus
        />
        <label htmlFor="jt_nome">Name</label>
        <InputText
          id="jt_nome"
          value={rowData.jt_nome}
          onChange={(e) => onInputChange(e.target.value, "jt_nome")}
          required
          autoFocus
        />
        <label htmlFor="jt_data_nacimento">Data de nacimento</label>
        <Calendar
          id="monthpicker"
          viewDate={new Date(rowData.jt_data_nascimento)}
          value={new Date(rowData.jt_data_nascimento)}
          onChange={(e) => onInputChangeDate(e.value, "jt_data_nascimento")}
          
          dateFormat="dd/mm/yy"
          yearNavigator
          yearRange="1970:2030"
        />
             <br /> 
           <label>Status User</label>
            <br />
          <TriStateCheckbox value={rowData.ativo} onChange={(e) => onchangeBoolean(e.value, "ativo")} />
                     
                </div>
         
    

      <div>{}</div>
      <div>{dialogFooter}</div>
    </>
  );
};
