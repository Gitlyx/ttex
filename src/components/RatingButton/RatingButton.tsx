import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
interface RatingButtonProps {
  text: string;
  onClick: () => any;
  color: 'success' | 'primary' | 'error' | 'warning' | 'info' | 'secondary';
}

export const RatingButton = ({ text, onClick, color }: RatingButtonProps) => {
  const dispatcher = useDispatch();
  return (
    <Button
      sx={{ m: 1 }}
      variant='contained'
      color={color}
      onClick={() => dispatcher(onClick())}
      style={{ width: '200px' }}
    >
      {text}
    </Button>
  );
};