import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const RatingText = () => {
  const positive = useSelector<RootState, number>(state => state.stats.positive);
  const neutral = useSelector<RootState, number>(state => state.stats.neutral);
  const negative = useSelector<RootState, number>(state => state.stats.negative);
  
  return (
    <>
      <Typography fontSize={24} variant='overline'>
        Statistics
      </Typography>
      <Typography variant='overline'>
        <div>
          Positive: {positive} (
          {((positive / (positive + neutral + negative)) * 100).toFixed(1) +
            '%'}
          )
        </div>
        <div>
          Neutral: {neutral} (
          {((neutral / (positive + neutral + negative)) * 100).toFixed(1) + '%'}
          )
        </div>
        <div>
          Negative: {negative} (
          {((negative / (positive + neutral + negative)) * 100).toFixed(1) +
            '%'}
          )
        </div>
        <div>Total ratings: {positive + neutral + negative}</div>
      </Typography>
    </>
  );
}