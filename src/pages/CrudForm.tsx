import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { classNames } from 'primereact/utils';
import { Calendar } from "primereact/calendar";


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
      type="submit"
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
    setRowData(_rowData);
  };

  useEffect(() => {
    let _rowData: any = { ...rowData };
    _rowData[`jt_data_nascimento`] = date;
    setRowData(_rowData);
  }, [date]);

//===========valida
const [countries, setCountries] = useState({});
const [showMessage, setShowMessage] = useState(false);
const [formData, setFormData] = useState({});


useEffect(() => {
  setCountries(rowData)
}, []); // eslint-disable-line react-hooks/exhaustive-deps

/*
  const formik = useFormik({
    initialValues: {
        jt_codigo: '',
        jt_nome: '',
        jt_data_nascimento: '',
     
    },
    validate: (data: any) => {
        let errors = {};

        if (!data. jt_codigo) {
            errors. jt_codigo = 'Name is required.';
        }

        if (!data.jt_nome) {
            errors.jt_nome = 'Email is required.';
        }
        if (!data.accept) {
            errors.jt_data_nascimento = 'You need to agree to the terms and conditions.';
        }

        return errors;
    },
    onSubmit: () => {
        setFormData(rowData);
        setShowMessage(true);

        formik.resetForm();
    }
});*/
  return (
    <> 
    <form  className="p-fluid">
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
          value={new Date(rowData.jt_data_nascimento)}
          onChange={(e) => setDate(e.value)}
        ></Calendar>
      </div>

      <div>{}</div>
      <div>{dialogFooter}</div>
      </form>
    </>
  );
};
