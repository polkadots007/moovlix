// import { FooterContainer } from '../containers/Footer';
// import { Form } from '../components';
// import { useState, useContext } from 'react';
// import { FirebaseContext } from '../context/firebase';
// import * as ROUTES from '../constants/Routes';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { HeaderContainer } from '../containers/Header';

import { RegistrationContainer } from '../containers/ContentSignUp';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Header';

export default function Registration() {
  return (
    <>
      <HeaderContainer bg={false} toggletheme={true}>
        <RegistrationContainer />
      </HeaderContainer>
      <FooterContainer toggletheme={true} />
    </>
  );
}
