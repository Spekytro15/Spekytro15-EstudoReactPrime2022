import React, { useState, useEffect, useRef } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Insert} from '../components/PostComponents'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


export function Home(){
    
    return (
        <div>
      
      <div className="text-3xl text-800 font-bold mb-4">Crud</div>

    <DataTable dataKey="id"  rows={10} responsiveLayout="scroll" >

    <Column selectionMode="multiple" headerStyle={{ width: '1rem' }} exportable={false}></Column>
    <Column field="Id" header="Id"  style={{ minWidth: '1rem' }}></Column>
    <Column field="codigo" header="codigo"  style={{ minWidth: '1rem' }}></Column>
    <Column field="nome" header="nome" ></Column>
    <Column field="data" header="data denacimento"  style={{ minWidth: '3rem' }}></Column>
    <Column field="data" header="Ativo"  style={{ minWidth: '1rem' }}></Column>
    
     </DataTable>
           
        
        </div>
    )

    
}

