import styled from 'styled-components'
import StyledSpan from '../../styled/StyledSpan'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 22px;
  min-height: 106px;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette.shades.secondary[100]};

  @media (min-width: 1200px) {
    max-width: 200px;
  }
`

const Span = styled(StyledSpan)`
  line-height: 1.31;
`

const BoxOutput = styled.div`
  display: flex;
  align-items: first baseline;
`

const Output = styled.output`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.17;

  &::after {
    content: '%';
    margin-right: 0.5rem; /* имитация пробела */
  }
`

const UnitMeasurement = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.palette.secondary};
`

function CalculationInterestRate() {
  return (
    <Box id='componentCalculationInterestRate'>
      <Span as='span'>Процентная ставка</Span>

      <BoxOutput>
        <Output id='interestRate' htmlFor='amountInvestment inputRangeInvestmentPeriod'>
          0.75
        </Output>
        <UnitMeasurement>в день</UnitMeasurement>
      </BoxOutput>
    </Box>
  )
}

export default CalculationInterestRate
