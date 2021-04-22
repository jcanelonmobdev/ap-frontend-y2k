import HeaderComponent from 'components/commons/HeaderComponent';
import SpinnerComponent from 'components/commons/SpinnerComponent';
import Coverage from 'models/coverage';
import React from 'react';
// import { useParams } from 'react-router-dom';
import { setPageName } from 'utils';
import PriceComponent from '../../components/fragments/PriceComponent'
import RangeComponent from '../../components/fragments/RangeComponent'

const QuotationFormComponent = () => {
    const coverages = new Coverage();

    setPageName(' Cotización | Accidentes Personales');
    //const {quotationId} = useParams();
    //const history = useHistory();
    //const isReady = Boolean(quotation.data.primaTotal && coverages.collection.length > 0);
    const isReady = true;

    const [listCoverages, setListCoverages] = React.useState(
        []
    )
    //.. 
    const handleUpdate = (arr, type, id, value) => {
        const newList = arr.map(element => {
            if (element.id === id) {
                if (type === 'switch') {
                    return { ...element, state: value }
                }
                else if (type === 'input') {
                    if (value !== '' && (value < element.min || value > element.max))
                        return { ...element, error: 'Valor fuera de rango', inputValue: value }

                    return { ...element, error: '', inputValue: value }
                }
            }

            return element;
        });

        setListCoverages(newList);
    }

    const InitializateAll = async () => {
        const data = await coverages.getAll();

        setListCoverages(
            data.map(
                element => {
                    return { ...element, error: "", inputValue: "" }
                }
            )
        );
    }

    React.useEffect(() => {
        InitializateAll();

        // logica para cargar una cotizacion
    }, []); //end useEffect

    return (
        <div className="familia">
            <div className="container">
                <div className="row">
                    {!isReady ? <SpinnerComponent /> :
                        <div className="col-12 col-sm-12">
                            <HeaderComponent name="Cotización" />
                        </div>
                    }
                </div>

                {
                    isReady && <React.Fragment>
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <PriceComponent
                                    quotes={1}
                                    quotePrice={1000}
                                    quoteUfPrice={0.5}
                                    finalPrice={2000}
                                    finalPrice={9999}
                                    finalUfPrice={9.9}
                                    ufValue={27000}
                                >
                                    <div className="box-precio-personaliza__totales-row">
                                        <h3 className="m1-auto px-2">Coberturas Asegurado Titular</h3>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h4 className="m1-auto px-2">Cobertura</h4>
                                            </div>
                                            <div className="col-6">
                                                <h4 className="m1-auto px-2">Valor Asegurado</h4>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="box-precio-personaliza__perdida cotizacion-price m2-bottom flex-direction-column">
                                        <RangeComponent
                                            list={listCoverages}
                                            typeCoverage={1}
                                            onChangeSwitch={(id, status) => handleUpdate(listCoverages, 'switch', id, status)}
                                            onChangeInput={(id, value) => handleUpdate(listCoverages, 'input', id, value)}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h4 className="m1-auto px-2">Coberturas Opcionales</h4>
                                        </div>
                                    </div>
                                    <div className="box-precio-personaliza__perdida cotizacion-price m2-bottom flex-direction-column">
                                        <RangeComponent
                                            list={listCoverages}
                                            typeCoverage={2}
                                            onChangeSwitch={(id, status) => handleUpdate(listCoverages, 'switch', id, status)}
                                            onChangeInput={(id, value) => handleUpdate(listCoverages, 'input', id, value)}
                                        />
                                    </div>
                                    <div className="box-precio-personaliza__totales-row">
                                        <h3 className="m1-auto px-2">Coberturas Cargas</h3>
                                    </div>
                                    <div className="box-precio-personaliza__perdida cotizacion-price m2-bottom flex-direction-column">
                                        <RangeComponent
                                            list={listCoverages}
                                            typeCoverage={3}
                                            onChangeSwitch={(id, status) => handleUpdate(listCoverages, 'switch', id, status)}
                                            onChangeInput={(id, value) => handleUpdate(listCoverages, 'input', id, value)}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h4 className="m1-auto px-2">Ingresa cantidad de cargas</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h4 className="m1-auto px-2">Frecuencia de pago</h4>
                                        </div>
                                    </div>
                                </PriceComponent>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        </div >
    )
}

// QuotationFormComponent.defaultProps = {
//     //image: '/img/sura-image-reintentar.svg'
// };

export default QuotationFormComponent;
