import React, { useEffect, useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';




export function Insert(){
    return(

<div className="flex justify-content-center">
    <div className="card">
        <h5 className="text-center">Register</h5>
        <form  className="p-fluid">
            <div className="field">
                <span className="p-float-label">
                    <InputText id="name" name="name" autoFocus  />
                    <label htmlFor="name" >Name*</label>
                </span>
                
            </div>
            <div className="field">
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText id="email" name="codigo"    />
                    <label htmlFor="email" >codigo</label>
                </span>
               
            </div>
            <div className="field">
                <span className="p-float-label">
                    <Calendar id="date" name="date"  dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                    <label htmlFor="date">Birthday</label>
                </span>
            </div>
            <div className="field">
                <span className="p-float-label">
                    <Dropdown id="country" name="country"   optionLabel="name" />
                    <label htmlFor="country">Country</label>
                </span>
            </div>
            <div className="field-checkbox">
                <Checkbox inputId="accept" name="accept"    />
                <label htmlFor="accept" >I agree to the terms and conditions*</label>
            </div>

            <Button type="submit" label="Submit" className="mt-2" />
        </form>
    </div>
</div>

    )
}

