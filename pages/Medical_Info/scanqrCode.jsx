import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-scanner'
import ToastMessage from '../../components/Toast';
import { useRouter } from 'next/router';
import {Navigate} from 'react-router-dom';

export default function Scanner() {
  const router = useRouter()
  const [delay , setDelay]= useState(50000);
  const [result, setResult] = useState('No result');
  // const pathDestination = "/healthRecord"

  const handleScan = (data) =>{
    if(data){
      setResult(data.text)
    }
  }

  const handleError = (err) =>{
    if(err){
      ToastMessage({
        type: 'error',
        message: err
      })
    }
  }

  useEffect(() => {
    if(result){
      const idcode = (result.split("id="))?.[1]
      if(idcode){
        router.push(`/healthRecord/save?${idcode}`)
    }
    }
  },[result])

  const previewStyle ={
    height:240,
    width:320,
  }

  return(
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        />
    </div>
  )
}
