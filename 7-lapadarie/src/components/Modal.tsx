import React, { useState } from 'react';
import styles from '@/app/styles/modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddClient: (name: string, totalBread: number) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddClient }) => {
    const [name, setName] = useState("");
    const [totalBread, setTotalBread] = useState<number | string>("");

    const handleSubmit = () => {
        if (typeof totalBread === "number" && name.trim() !== "") {
            onAddClient(name, totalBread);
            setName("");
            setTotalBread("");
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <p>Adicionar pessoas a fila</p>
                <div className={styles.modalInputContainer}>
                    <input 
                        type="text" 
                        placeholder="Nome completo do cliente"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Total de pães" 
                        value={typeof totalBread === "number" ? totalBread : ""}
                        onChange={(e) => setTotalBread(e.target.value ? Number(e.target.value) : "")}
                    />
                </div>
                <div className={styles.modalButtonContainer}>
                    <button className={styles.send} onClick={handleSubmit}>Enviar</button>
                    <button className={styles.cancel} onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
