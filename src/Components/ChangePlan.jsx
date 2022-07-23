import React from 'react'
import style from "./ChangePlan.module.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'

const ChangePlan = () => {


    const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <div>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className={style.mainDiv}>
            <ModalHeader className={style.modelHeader}>Change Pricing Plan</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <div style={{border:"1px solid red",display:"flex", fontSize:"15px"}}>
                 <ModalHeader>Without Fuel</ModalHeader>
                 <ModalHeader>With Fuel</ModalHeader>
               </div>
            </ModalBody>
        </ModalContent>
        </Modal>
    </div>
  )
}

export default ChangePlan;