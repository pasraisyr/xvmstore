import React from 'react'
import { X, ZoomIn } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  imageUrl: string | null
  imageAlt: string
  onClose: () => void
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  imageAlt,
  onClose,
}) => {
  if (!isOpen || !imageUrl) return null

  return (
    <div className="image-lightbox-overlay" onClick={onClose}>
      <div className="image-lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="image-lightbox-close"
          onClick={onClose}
          aria-label="Tutup preview"
        >
          <X size={26} />
        </button>
        <div className="image-lightbox-content">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="image-lightbox-img"
          />
        </div>
        <div className="image-lightbox-hint">
          <ZoomIn size={16} />
          <span>{imageAlt} — Paparan Saiz Penuh</span>
        </div>
      </div>
    </div>
  )
}

