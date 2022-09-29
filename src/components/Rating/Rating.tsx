import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RatingButton } from '../RatingButton/RatingButton';
import { RatingText } from '../Stats/Stats';
import { incrementPositive, incrementNegative, incrementNeutral, setZero } from '../Stats/statsSlice';


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
            text='Neutral'
            color='info'
            onClick={() => dispacher(incrementNeutral())}
          />
          <RatingButton
            text='Negative'
            color='error'
            onClick={() => dispacher(incrementNegative())}
          />
        </div>
        <div>
          <RatingButton
            text='Reset'
            color='secondary'
            onClick={() => dispacher(setZero())}
          />
        </div>
        <RatingText />
      </>
    );    
}

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
