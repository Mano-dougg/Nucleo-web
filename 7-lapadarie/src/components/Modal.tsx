import styles from '@/app/styles/modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <p>Adicionar pessoas a fila</p>
                <div className={styles.modalInputContainer}>
                    <input type="text" placeholder="Nome completo do cliente" />
                    <input type="number" placeholder="Total de pães" min={1}/>
                </div>
                <div className={styles.modalButtonContainer}>
                    <button className={styles.send}>Enviar</button>
                    <button className={styles.cancel} onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
