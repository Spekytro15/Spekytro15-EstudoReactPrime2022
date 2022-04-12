import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Calendar } from "primereact/calendar";
import 'primeicons/primeicons.css';
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
  const [date, setDate] = useState<Date | Date[] | undefined>(undefined);

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

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: any) => {
    const val = (e.target && e.target.value) || "";
    let _rowData: any = { ...rowData };
    _rowData[`${name}`] = val;   
      _rowData[`jt_data_nascimento`] = date
    setRowData(_rowData);
  };
  
  useEffect(() => {
    let _rowData: any = { ...rowData };
      _rowData[`jt_data_nascimento`] = date
    setRowData(_rowData);

  }, [date]);
  return (
    <>
      <div className="field">
        <label htmlFor="jt_codigo">Codigo</label>
        <InputText
          id="jt_codigo"
          value={rowData.jt_codigo}
          onChange={(e) => onInputChange(e, "jt_codigo")}
          required
          autoFocus
        />
        <label htmlFor="jt_nome">Name</label>
        <InputText
          id="jt_nome"
          value={rowData.jt_nome}
          onChange={(e) => onInputChange(e, "jt_nome")}
          required
          autoFocus
        />
        <label htmlFor="jt_data_nacimento">Data de nacimento</label>
        <Calendar
          viewDate={new Date(rowData.jt_data_nascimento)}
          value={new Date(rowData.jt_data_nascimento)}
          onChange={(e) => setDate(e.value)}
        ></Calendar>
      </div>

      <div>{}</div>
      <div>{dialogFooter}</div>
    </>
  );
};
