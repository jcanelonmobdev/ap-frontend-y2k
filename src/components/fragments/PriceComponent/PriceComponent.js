import React from 'react'
// import PropTypes from 'prop-types'
import { formatCurrency, formatUf } from 'utils';

const PriceComponent = ({ children, quotes, quotePrice, quoteUfPrice, finalPrice, finalUfPrice, ufValue }) => {
    return (
        <div className="box-precio">
            <div className="box-precio-personaliza">
                {children}
            </div>

            <div className="box-precio-mensual">
                <div className="box-precio-mensual__title">
                    <h3 className="cyan">PRECIO SEMESTRAL</h3>
                </div>
                <div className="box-precio-mensual__img"><img src="/img/sura-image-familia.svg" alt="SURA IMAGEN FAMILIA" /></div>
                <div className="box-precio-mensual__valor">
                    <h2>$ {formatCurrency(quotePrice)}</h2>
                    <p className="text-center text-white">UF {formatUf(quoteUfPrice)} IVA incluído</p>
                </div>
                <div className="gray-box text-center">
                    <h4 className="cyan text-uppercase"> 1 cuota de $ {formatCurrency(finalPrice)}</h4>
                    <p className="box-precio-mensual__uf" id="ufIva">UF {formatUf(finalUfPrice)} IVA incluído</p>
                </div>
                <p className="box-precio-mensual__uf-diario">*Ajustado al valor UF del día.($ {formatCurrency(ufValue, true)})</p>
            </div>
        </div >
    )
}

export default PriceComponent;