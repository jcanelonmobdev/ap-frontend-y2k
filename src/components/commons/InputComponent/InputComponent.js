import React from 'react';
// import PropTypes from 'prop-types';

const InputComponent = ({
    label,
    error,
    className,
    iconName,
    ...inputProps
}) => {
    const iconClass = iconName ? 'icon ' : '';
    const classCss =
        error !== ''
            ? `form-control input-validation-error`
            : `${iconClass}form-control ${className || ''}`;
    return (
        <div className="form-group">
            {label && <label className="sura-title-query">{label}</label>}
            <div className={`${iconClass}input-container`}>
                {iconName && (
                    <img className="icon-img" src={`/img/${iconName}`} alt="" />
                )}
                <input

                    data-testid="input" className={classCss} {...inputProps} />
            </div>
            {error !== '' && <span className="message-error">{error}</span>}
        </div>
    );
};

InputComponent.defaultProps = {
    type: 'text',
    error: '',
    label: ''
};

// InputComponent.propTypes = {
//     label: PropTypes.string,
//     type: PropTypes.string,
//     placeholder: PropTypes.string,
//     onChange: PropTypes.func.isRequired,
//     error: PropTypes.string,
//     iconName: PropTypes.string,
// };

export default InputComponent;
