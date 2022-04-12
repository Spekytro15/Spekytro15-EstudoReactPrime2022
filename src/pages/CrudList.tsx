import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { CrudForm } from "./CrudForm";
import { CrudService } from "../services/CrudService";

import { confirmDialog } from "primereact/confirmdialog"; // To use confirmDialog method
import { Checkbox } from "primereact/checkbox";


const crudService = new CrudService();

export default function CrudList() {
  //======================
  const dt = useRef(null);

  //======================
  const [showDialog, setShowDialog] = useState(false);
  const [dataCrud, setDataCrud] = useState([]);

  //======================
  const [selectedCruds, setSelectedCruds] = useState([]);

  useEffect(() => {
    // console.log(">>>selectedCruds", selectedCruds);
  }, [selectedCruds]);

  const [selectedCrud, setSelectedCrud] = useState({});

  //======================
  const getDataCrud = async () => {
    let data = await crudService.getDataCrud();
    // console.log(">>>getDataCrud", data);
    setDataCrud(data);
  };
  //=========
  useEffect(() => {
    getDataCrud();
  }, []);

  //======================
  const newCrud = () => {
    // console.log(">>>newcrud");
    setSelectedCrud({
      jt_codigo: "",
      jt_nome: "",
      jt_data_nascimento: "",
      ativo: true,
    });
    setShowDialog(true);
  };

  //======================
  const hideDialog = () => {
    setShowDialog(false);
  };

  //======================
  const saveCrud = (rowData: any) => {
    confirmDialog({
      message: "Deseja Continuar ?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",

      accept: async () => {
        console.log(">>> save crud", rowData);
        window.location.reload();
        await crudService.PostDataCrud(rowData);

        setShowDialog(false);
      },
      reject: () => {
        // console.log(">>> NAOOOOOOOOOOO save crud");
      },
    });
  };

  const editCrud = (rowData: any) => {
    // console.log(">>> edit crud", rowData);

    crudService.PutDataCrud(selectedCrud);
    setSelectedCrud(rowData);
    setShowDialog(true);
  };

  //======================
  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => editCrud(rowData)}
        />
      </React.Fragment>
    );
  };

  const confirmDeleteDialog = () => {
    confirmDialog({
      message: `Deletar ${selectedCruds.length} registro(s)`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => acceptDelete(),
      reject: () => rejectDelete(),
    });
  };

  const acceptDelete = () => {
    selectedCruds.map((ids) => {
      console.log(ids);
      window.location.reload();
      crudService.DeleteDataCrud(ids);
    });
  };
  const rejectDelete = () => {
    console.log("rejectDelete");
  };
  const AtivoTemplate = (rowData: any) => {
    return <Checkbox checked={rowData?.ativo} />;
  };

  return (
    <div>
      <div className="card">
        <Button label="Novo" icon="pi pi-plus" onClick={newCrud} />

        <Button
          label="Delete"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteDialog}
          disabled={!selectedCruds || !selectedCruds.length}
        />
      </div>

      <div className="card">
        <div className="col">
          <DataTable
            dataKey="id"
            rows={10}
            header="Lista de Crud"
            responsiveLayout="scroll"
            ref={dt}
            value={dataCrud}
            selection={selectedCruds}
            onSelectionChange={(e) => setSelectedCruds(e.value)}
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "1rem" }}
              exportable={false}
            ></Column>
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="jt_codigo"
              header="Código"
              style={{ minWidth: "1rem" }}
            ></Column>
            <Column field="jt_nome" header="Nome"></Column>
            <Column
              field="jt_data_nascimento"
              header="Data Nascimento"
              style={{ minWidth: "3rem" }}
            ></Column>
            <Column
              field="ativo"
              header="Ativo"
              style={{ minWidth: "1rem" }}
              body={AtivoTemplate}
            ></Column>
          </DataTable>
        </div>
      </div>

      <Dialog
        visible={showDialog}
        header="Novo"
        modal
        className="p-fluid"
        onHide={hideDialog}
      >
        <CrudForm
          dataCrud={selectedCrud}
          actionHideDialog={() => setShowDialog(false)}
          actionOkDialog={(rowData: any) => saveCrud(rowData)}
        ></CrudForm>
      </Dialog>
    </div>
  );
}
