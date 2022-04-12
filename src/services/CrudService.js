
export class CrudService {
    

    async getDataCrud() {
        try {

            let res = await fetch('http://localhost:3000/crud-on')
            let data = await res.json()
            return data;
        } catch (error) {
            console.log('>>>CrudService>getDataCrud', error)
        }
    }

    async PostDataCrud(props) {

        if(!props.id){
            let cad = {
           
                jt_codigo: props.jt_codigo,
                jt_nome: props.jt_nome,
                jt_data_nascimento: props.jt_data_nascimento,
                ativo: true
            }
            try {
    
                // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(cad)
                };
                fetch('http://localhost:3000/crud-on/', requestOptions)
                    .then(async response => {
                        const isJson = response.headers.get('content-type')?.includes('application/json');
                        const data = isJson && await response.json();
                        console.log(data)
    
                        return data
                    })
                    .catch(error => {
                        this.setState({ errorMessage: error.toString() });
                        console.error('There was an error!', error);
                    });
            } catch (error) {
                console.log('>>>CrudService>getDataCrud', error)
            }
        }else{
        let cad = {
           
            jt_codigo: props.jt_codigo,
            jt_nome: props.jt_nome,
            jt_data_nascimento: props.jt_data_nascimento,
            ativo: true
        }
        try {

            // POST request using fetch with error handling
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cad)
            };
            fetch('http://localhost:3000/crud-on/'+props.id, requestOptions)
                .then(async response => {
                    const isJson = response.headers.get('content-type')?.includes('application/json');
                    const data = isJson && await response.json();
                    console.log(data)

                    return data
                })
                .catch(error => {
                    this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
        } catch (error) {
            console.log('>>>CrudService>getDataCrud', error)
        }}
    }

    async DeleteDataCrud(props) {
        console.log(props.id);
        try {

            // POST request using fetch with error handling
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://localhost:3000/crud-on/' + props.id, requestOptions)
                .then(async response => {
                    const isJson = response.headers.get('content-type')?.includes('application/json');
                    const data = isJson && await response.json();
                    console.log(data)

                    return data
                })
                .catch(error => {
                    this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
        } catch (error) {
            console.log('>>>CrudService>getDataCrud', error)
        }
    }

}
