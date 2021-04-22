import React from 'react';
// import PropTypes from 'prop-types';
import Switch from 'components/commons/SwitchComponent'
import InputComponent from 'components/commons/InputComponent';

const RangeComponent = ({ list, onChangeSwitch, onChangeInput, typeCoverage }) => {
  //console.log(list);
  return (
    <React.Fragment>
      {
        list.filter(c => c.type === typeCoverage).map(element =>
          <div className='d-flex justify-md-content w100 align-item-center mb1' key={element.id}>
            <div>
              {
                element.description
              }
            </div>

            <Switch
              status={
                element.state
              }
              onClick={(_status) => onChangeSwitch(element.id, _status)}
            />
            {
              element.type !== 3 && (
                <div>
                  <InputComponent
                    error={element.error}

                    disabled={!element.state}
                    type="number"
                    placeholder={element.placeholder}
                    value={element.inputValue !== 0 ? element.inputValue : ""}
                    onChange={(e) => onChangeInput(element.id, e.target.value)}
                  />
                </div>
              )
            }
          </div>
        )
      }

    </React.Fragment>
  )
}

RangeComponent.defaultProps = {
  //list: []
}

// RangeComponent.propTypes = {
//   list: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     //label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     state: PropTypes.oneOfType([PropTypes.bool]).isRequired,
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   }))
// }

export default RangeComponent
