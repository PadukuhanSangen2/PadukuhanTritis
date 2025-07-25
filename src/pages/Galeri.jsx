import './Galeri.css';
import { useState } from 'react';

function Galeri() {
  const imageList = [
    { id: 1, title: 'Kegiatan Gotong Royong', src: '/images/img1.png' },
    { id: 2, title: 'Pelatihan UMKM', src: '/images/img2.png' },
    { id: 10, title: 'Upacara Adat', src: '/images/img10.png' },
    { id: 15, title: 'Lomba 17 Agustus', src: '/images/img15.png' },
    { id: 13, title: 'Kegiatan Anak-anak', src: '/images/img13.png' },
    { id: 29, title: 'Senam Pagi', src: '/images/img29.png' },
    { id: 21, title: 'Bersih Dusun', src: '/images/img21.png' },
    { id: 8, title: 'Pelatihan Digital', src: '/images/img8.png' },
    { id: 9, title: 'Gambar 9', src: '/images/img9.png' },
    { id: 3, title: 'Gambar 10', src: '/images/img3.png' },
    { id: 11, title: 'Gambar 11', src: '/images/img11.png' },
    { id: 12, title: 'Gambar 12', src: '/images/img12.png' },
    { id: 5, title: 'Gambar 13', src: '/images/img5.png' },
    { id: 14, title: 'Gambar 14', src: '/images/img14.png' },
    { id: 4, title: 'Gambar 15', src: '/images/img4.png' },
    { id: 16, title: 'Gambar 16', src: '/images/img16.png' },
    { id: 17, title: 'Gambar 17', src: '/images/img17.png' },
    { id: 18, title: 'Gambar 18', src: '/images/img18.png' },
    { id: 19, title: 'Gambar 19', src: '/images/img19.png' },
    { id: 20, title: 'Gambar 20', src: '/images/img20.png' },
    { id: 6, title: 'Gambar 21', src: '/images/img6.png' },
    { id: 22, title: 'Gambar 22', src: '/images/img22.png' },
    { id: 23, title: 'Gambar 23', src: '/images/img23.png' },
    { id: 24, title: 'Gambar 24', src: '/images/img24.png' },
    { id: 25, title: 'Gambar 25', src: '/images/img25.png' },
    { id: 26, title: 'Gambar 26', src: '/images/img26.png' },
    { id: 27, title: 'Gambar 27', src: '/images/img27.png' },
    { id: 28, title: 'Gambar 28', src: '/images/img28.png' },
    { id: 7, title: 'Gambar 29', src: '/images/img7.png' },
    { id: 30, title: 'Gambar 30', src: '/images/img30.png' },
    { id: 31, title: 'Gambar 31', src: '/images/img31.png' },
    { id: 32, title: 'Gambar 32', src: '/images/img32.png' },
    { id: 33, title: 'Gambar 33', src: '/images/img33.png' },
    { id: 34, title: 'Gambar 34', src: '/images/img34.png' },
    { id: 35, title: 'Gambar 35', src: '/images/img35.png' },
    { id: 36, title: 'Gambar 36', src: '/images/img36.png' },
    { id: 37, title: 'Gambar 37', src: '/images/img37.png' },
    { id: 38, title: 'Gambar 38', src: '/images/img38.png' },
    { id: 39, title: 'Gambar 39', src: '/images/img39.png' },
    { id: 40, title: 'Gambar 40', src: '/images/img40.png' },
    { id: 41, title: 'Gambar 41', src: '/images/img41.png' },
    { id: 42, title: 'Gambar 42', src: '/images/img42.png' },
    { id: 43, title: 'Gambar 43', src: '/images/img43.png' },
    { id: 44, title: 'Gambar 44', src: '/images/img44.png' },
    { id: 45, title: 'Gambar 45', src: '/images/img45.png' },
    { id: 46, title: 'Gambar 46', src: '/images/img46.png' },
    { id: 47, title: 'Gambar 47', src: '/images/img47.png' },
    { id: 48, title: 'Gambar 48', src: '/images/img48.png' },
    { id: 49, title: 'Gambar 49', src: '/images/img49.png' },
    { id: 50, title: 'Gambar 50', src: '/images/img50.png' },
    { id: 51, title: 'Gambar 51', src: '/images/img51.png' },
    { id: 52, title: 'Gambar 52', src: '/images/img52.png' },
    { id: 53, title: 'Gambar 53', src: '/images/img53.png' },
    { id: 54, title: 'Gambar 54', src: '/images/img54.png' },
    { id: 55, title: 'Gambar 55', src: '/images/img55.png' },
    { id: 56, title: 'Gambar 56', src: '/images/img56.png' },
    { id: 57, title: 'Gambar 57', src: '/images/img57.png' },
    { id: 58, title: 'Gambar 58', src: '/images/img58.png' },
    { id: 59, title: 'Gambar 59', src: '/images/img59.png' },
    { id: 60, title: 'Gambar 60', src: '/images/img60.png' },
    { id: 61, title: 'Gambar 60', src: '/images/img61.png' },
    { id: 62, title: 'Gambar 60', src: '/images/img62.png' }
  ];


  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = Math.ceil(imageList.length / itemsPerPage);
  const paginatedImages = imageList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="galeri-container">
      <h2 className="text-center mb-4">Galeri Foto Padukuhan</h2>

      <div className="video-grid">
        {paginatedImages.map((image) => (
          <div
            key={image.id}
            className="video-card"
            onClick={() => openModal(image)}
          >
            <img
              className="video-content"
              src={image.src}
              alt={image.title}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="video-overlay">
              <span>🔍 Lihat Gambar</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          &laquo; Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          Next &raquo;
        </button>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="modal-video" />
            <button className="close-btn" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeri;
