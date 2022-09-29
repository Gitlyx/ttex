import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const RatingText = () => {
  const positive = useSelector<RootState, number>(
    (state) => state.stats.positive
  );
  const neutral = useSelector<RootState, number>(
    (state) => state.stats.neutral
  );
  const negative = useSelector<RootState, number>(
    (state) => state.stats.negative
  );
  const calculate = (stat: number): string => {
    if(stat === 0){
      return '0%';
    }else{
      return ((stat / (positive + neutral + negative)) * 100).toFixed(1) + '%';
    }

  }

  return (
    <>
      <Typography fontSize={24} variant='overline'>
        Statistics
      </Typography>

      <Typography variant='overline'>
        Positive: {positive} ({calculate(positive)})
      </Typography>
      <Typography variant='overline'>
        Neutral: {neutral} ({calculate(neutral)})
      </Typography>
      <Typography variant='overline'>
        Negative: {negative} ({calculate(negative)})
      </Typography>
      <Typography variant='overline'>
        <div>Total ratings: {positive + neutral + negative}</div>
      </Typography>
    </>
  );
}