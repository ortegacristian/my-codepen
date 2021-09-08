import React from 'react'

//Componentes
import { PenHeader } from './PenHeader/PenHeader';
import { PenContent } from './PenContent/PenContent';
import { PenFooter } from './PenFooter/PenFooter';

//Styles
import './Pen.css';

export const Pen = () => {

  return (
      <>
        <PenHeader />
        <PenContent />
        <PenFooter />
      </>
  )
}
