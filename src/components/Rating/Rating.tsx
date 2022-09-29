import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RatingButton } from '../RatingButton/RatingButton';
import { RatingText } from '../Stats/Stats';
import { incrementPositive, incrementNegative, incrementNeutral } from '../Stats/statsSlice';


export const Rating = ( ) => {
  const dispacher = useDispatch();

    return (
      <>
        <div>
          <RatingButton
            text='Positive'
            color='success'
            onClick={() => dispacher(incrementPositive())}
          />
          <RatingButton
            text='Positive'
            color='primary'
            onClick={() => dispacher(incrementNeutral())}
          />
          <RatingButton
            text='Positive'
            color='error'
            onClick={() => dispacher(incrementNegative())}
          />
        </div>
        <RatingText />
      </>
    );    
}

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
