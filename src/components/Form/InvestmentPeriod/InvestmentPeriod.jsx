import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import Label from '../../App/Common/Form/Label/Label'
import InputRange from '../../styled/InputRange'

const Datalist = styled.datalist`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1px 0 0;

  & option {
    width: ${(props) => props.theme.elements.inputRange.thumb.width}px;
    color: ${(props) => props.theme.palette.shades.secondary[200]};
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    text-align: center;
  }
`

function InputInvestmentPeriod() {
  return (
    <BoxSectionForm id='componentInputInvestmentPeriod'>
      <Label>Срок инвестиций ( Месяцев )</Label>

      <InputRange id='investmentPeriod' type='range' min='1' max='12' list='range-list' />

      <Datalist id='range-list'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
      </Datalist>
    </BoxSectionForm>
  )
}

export default InputInvestmentPeriod
