import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function NewContactModal({closeModal}) {

  function handleSubmit(e) {
    // you can maintain state variables here using useState to keep filter values and then on submit you can pass those values
    
    e.preventDefault()
    ApplyFilter()
    // this will pass input values
    closeModal()
  }

  return (
    <>
      
    </>
  )
}