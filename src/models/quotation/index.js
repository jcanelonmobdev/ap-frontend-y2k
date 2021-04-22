import Services from '../../services';

const schema = {
    id: 0,
    valorUf: 0,
    cantidadMaterias: 0,
    cantidadCargas: 0,
    numeroCotizacion: 0,
    corredorId: 0,
    nombreCorredor: '',
    ejecutivoId: 0,
    estadoCotizacionId: 0,
    ofertaId: 4,
    planPagoId: 0,
    documentoId: 0,
    fechaCotizacion: null,
    fechaModificacion: null,
    primaMensualCliente: 0.0,
    primaNetaUf: 0.0,
    numeroCuotas: 11,
    comisionAnual: 0,
    primaValorCuota: 0,
    primaTotal: 0,
    ivaFormaPago: 0,
    primaAnualUf: 0,
    comisionAnualUf: 0,
    primaValorCuotaUf: 0
};

export default class Quotation extends Services {
    constructor({
        proponent,
        dispatch = null,
        brokerId,
        executiveId,
        data = schema,
        offers = []
    }) {
        super('familia-protegida/api/');
        this.dispatch = dispatch;
        this.proponent = proponent;
        this.rutCliente = proponent.rut;
        this.rutEjecutivo = executiveId;
        this.rutCorredor = brokerId;
        this.data = data;
        this.offers = offers;
    }
    static get schema() { return schema; }

}