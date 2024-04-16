import styled from 'styled-components'
import Label from '../../App/Common/Form/Label/Label'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 106px;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette.shades.secondary[100]};
`

const BoxOutput = styled.div`
  display: flex;
  align-items: first baseline;
`

const Output = styled.output`
  font-size: 2.4rem;
  font-weight: 700;
`

const PercentDesignation = styled(Output)`
  margin-right: 0.5rem; /* имитация пробела */
`

const UnitMeasurement = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.palette.secondary};
`

function CalculationInterestRate() {
  return (
    <Box id='componentCalculationInterestRate'>
      <Label>Процентная ставка</Label>

      <BoxOutput>
        <Output id='interestRate' htmlFor='amountInvestment investmentPeriod'>
          0.75
        </Output>
        <PercentDesignation as='span'>%</PercentDesignation>
        <UnitMeasurement>в день</UnitMeasurement>
      </BoxOutput>
    </Box>
  )
}

export default CalculationInterestRate
