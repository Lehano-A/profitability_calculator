import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import StyledInputRange from '../../styled/StyledInputRange'
import StyledLabel from '../../styled/StyledLabel'

const Label = styled(StyledLabel)`
  line-height: 1.31;
  margin-bottom: 15px;
`

const Datalist = styled.datalist`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5px 0 0;

  & option {
    width: ${(props) => props.theme.elements.inputRange.thumb.width}px;
    color: ${(props) => props.theme.palette.shades.secondary[200]};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.31;
    padding: 0;
    text-align: center;
  }

  @media (min-width: 480px) {
    & option {
      font-size: 1.6rem;
    }
  }
`

function InputInvestmentPeriod() {
  return (
    <BoxSectionForm id='componentInputInvestmentPeriod'>
      <Label htmlFor='inputRangeInvestmentPeriod'>Срок инвестиций ( Месяцев )</Label>

      <StyledInputRange
        id='inputRangeInvestmentPeriod'
        $margin='0 0 4px 0'
        type='range'
        min='1'
        max='12'
        list='range-list'
      />

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
