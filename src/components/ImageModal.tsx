import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, caption }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[var(--forest-deep)]/95 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-[110]"
      >
        <X size={32} />
      </button>

      <div 
        className="relative max-w-7xl w-full max-h-full flex flex-col items-center justify-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt={caption || 'Enlarged view'} 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
          />
        </div>
        
        {caption && (
          <div className="text-center animate-in slide-in-from-bottom-4 duration-500">
            <p className="text-white font-serif text-xl md:text-2xl font-medium tracking-wide">
              {caption}
            </p>
            <div className="w-12 h-px bg-[var(--bronze-glow)] mx-auto mt-4 opacity-60"></div>
          </div>
        )}
      </div>
    </div>
  );
};
