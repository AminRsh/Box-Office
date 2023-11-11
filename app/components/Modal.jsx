import React from 'react'

function Modal({isvisible, onClose, children}) {
    if (!isvisible) return null
    
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose()
    }
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm
        flex justify-center items-center z-50" id="wrapper" onClick={ handleClose }>
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-white rounded p-8 border-4 border-[#C0C0C0]">{children}</div>
            </div>
        </div>
    )
}

export default Modal