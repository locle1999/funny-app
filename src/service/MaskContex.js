/* eslint-disable react/react-in-jsx-scope */
import {useToast} from 'native-base';
import {createContext, useContext, useState} from 'react';
import {Platform} from 'react-native';
import SToastAlert from '../components/SToastAlert';

const MaskContext = createContext(null);

export const MaskProvider = ({children}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const toast = useToast();

  const showError = errorMessage => {
    setMessage(errorMessage);
    setShowPopup(true);
  };

  const showToastAlert = ({placement, status, title, variant, description}) => {
    toast.show({
      placement,
      duration: Platform.OS === 'android' ? 1000 : 2000,
      render: () => {
        return (
          <SToastAlert
            status={status}
            title={title}
            variant={variant}
            description={description}
          />
        );
      },
    });
  };

  return (
    <MaskContext.Provider
      value={{
        showError,
        showToastAlert,
      }}>
      {children}
    </MaskContext.Provider>
  );
};

export const useMask = () => {
  const data = useContext(MaskContext);
  return data;
};
