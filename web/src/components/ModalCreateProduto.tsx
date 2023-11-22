import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  

  type ModalCreateProdutoProps = {
    ModalType : boolean
    onCloseModal : () => void
  }
  
  export const ModalCreateProduto = ( {ModalType, onCloseModal} : 
    ModalCreateProdutoProps) => {
        return(
    <div>
      
      <Modal
        isOpen={ModalType}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={onCloseModal}>close</button>
        <div>Produto</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
    )
}