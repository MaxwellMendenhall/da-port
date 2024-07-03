import React from 'react';
import ReactModal from 'react-modal';

type Post = {
    id: number;
    title: string;
    description: string;
    mediaUrl: string;
};

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    post: Post;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, post }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            className="fixed inset-0 z-50 overflow-y-auto"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75"
            style={{ content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', border: 'none', background: 'white', borderRadius: '12px', width: '90%', maxWidth: '960px', padding: '1rem', color: 'black', textAlign: 'center' } }}
        >
            <video
                src={post.mediaUrl}
                className="mt-4 max-w-full h-auto"
                muted
                controls
                autoPlay
            />
            <button onClick={onRequestClose} className="mt-8 inline-block rounded bg-blue-500 px-6 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none">
                Close
            </button>
        </ReactModal>
    );
};

export default Modal;

