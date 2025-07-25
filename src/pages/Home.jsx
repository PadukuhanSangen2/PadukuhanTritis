import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowUp } from 'react-icons/fa';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleShowModal = (img) => {
    setModalImage(img);
    setShowModal(true);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galeriImageList = [
    { id: 50 },
    { id: 41 },
    { id: 34 },
    { id: 4 },
    { id: 20 },
    { id: 32 },
    { id: 16 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 }
  ];



  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero d-flex align-items-center text-white">
        <div className="position-relative w-100 vh-100 overflow-hidden">
          {/* Background Video */}
          <img
            src="/imghome.jpg"
            alt="Background"
            className="position-absolute top-0 start-0"
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />


          {/* Optional: Overlay hitam transparan */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 1,
            }}
          ></div>

          {/* Overlay + Content */}
          <div className="position-relative z-2 d-flex flex-column justify-content-center align-items-center h-100 text-center text-white px-3">
            <motion.h1
              className="display-4 fw-bold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Selamat Datang di Pedukuhan Tritis
            </motion.h1>
            <motion.p
              className="lead text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Informasi resmi dan potensi unggulan dari Pedukuhan kami.
            </motion.p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link to="/profil" className="btn btn-warning mt-3 btn-animate text-white">
                Lihat Profil Kami
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tentang Pedukuhan */}
      <section className="section bg-light text-center py-5">
        <div className="container">
          <motion.h2 className="mb-3" whileInView={{ y: 0, opacity: 1 }} initial={{ y: 40, opacity: 0 }} transition={{ duration: 0.5 }}>
            Tentang Pedukuhan
          </motion.h2>
          <motion.p className="text-muted" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Pedukuhan Tritis adalah sebuah dusun di Desa Planjan, Kecamatan Saptosari, Kabupaten Gunungkidul. Dikenal sebagai kawasan asri yang kental dengan nilai kearifan lokal, masyarakatnya hidup dalam semangat gotong royong dan aktif melestarikan budaya seperti karawitan dan gejog lesung. Selain itu, warga juga mengembangkan UMKM berbasis hasil alam setempat, menjadikan Tritis contoh harmoni antara alam, tradisi, dan pemberdayaan masyarakat.
          </motion.p>
        </div>
      </section>

      {/* Spacer */}
      <div className="my-4"></div>

      {/* Carousel Section */}
      <section className="carousel-section mb-5">
        <div className="container">
          <Carousel fade interval={5000} indicators={true}>
            {[
              {
                image: '/home1.png',
                title: 'Harmoni Kehidupan Pedukuhan',
                desc: 'Kehidupan masyarakat yang rukun, gotong royong, dan penuh kehangatan.'
              },
              {
                image: '/home2.png',
                title: 'Lingkungan Hijau dan Asri',
                desc: 'Pedukuhan kami menjunjung kelestarian alam dan kebersihan lingkungan.'
              }
            ].map((slide, idx) => (
              <Carousel.Item key={idx}>
                <div
                  className="position-relative rounded shadow overflow-hidden"
                  style={{ height: '400px' }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                  >
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

      </section>

      {/* Potensi Pedukuhan (Versi Video 1080x1920) */}
      <section className="section text-center py-5">
        <div className="container">
          <h2 className="mb-4">Potensi Unggulan</h2>
          <div className="row g-4">
            {[
              {
                title: 'Emping Melinjo',
                text: 'Olahan khas Pedukuhan yang dibuat dari biji melinjo pilihan.',
                image: '/images/img18.png'
              },
              {
                title: 'Telaga Omang',
                text: 'Wisata alam berupa telaga yang sejuk dan alami.',
                image: '/images/img62.png'
              },
              {
                title: 'Gejog Lesung',
                text: 'Kesenian musik tradisional menggunakan lesung dan alu.',
                image: '/images/img13.png'
              },
              {
                title: 'Meubel Kayu',
                text: 'Pengolahan kayu lokal menjadi produk mebel berkualitas.',
                image: '/images/img63.jpg'
              },
              {
                title: 'Wayang Wong',
                text: 'Seni pertunjukan drama tari klasik berbasis tradisi Jawa.',
                image: '/images/img16.png'
              },
              {
                title: 'Karawitan',
                text: 'Seni musik gamelan yang diwariskan secara turun-temurun.',
                image: '/images/img38.png'
              }
            ].map((item, i) => (
              <motion.div
                className="col-md-4"
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="card h-100 shadow-sm card-hover">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      objectFit: 'cover',
                      height: '533px', // 16:9 potrait ratio
                      width: '100%',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Statistik Singkat */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <div className="row">
            {[['78+', 'Keluarga'], ['6', 'Dasa Wisma / Kelompok'], ['50+', 'Lansia Terbantu'], ['5+', 'Jumlah Kegiatan Aktif']].map(([count, label], i) => (
              <motion.div className="col-md-3" key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ delay: i * 0.2, duration: 0.5 }}>
                <h2>{count}</h2>
                <p>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="section bg-light text-center py-5">
        <div className="container">
          <h2 className="mb-4">Galeri Kegiatan</h2>
          <div className="row g-3">
            {galeriImageList.map((item, i) => {
              const imageSrc = `/images/img${item.id}.png`;
              return (
                <motion.div
                  className="col-6 col-md-2"
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div style={{ aspectRatio: '9/16', overflow: 'hidden', borderRadius: '0.5rem' }}>
                    <img
                      src={imageSrc}
                      alt={`Galeri ${item.id}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
          <Link to="/galeri" className="btn btn-outline-primary mt-4 btn-animate">
            Lihat Galeri Lainnya
          </Link>
        </div>
      </section>


      {/* CTA
      <section className="section cta text-center text-white py-5">
        <div className="container">
          <motion.h2 className="fw-bold" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>Hubungi Kami</motion.h2>
          <motion.p className="text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>Tertarik berkunjung atau menjalin kerja sama? Kami siap menyambut Anda dengan tangan terbuka!</motion.p>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }}>
            <Link to="/kontak" className="btn btn-warning btn-animate">Hubungi Sekarang</Link>
          </motion.div>
        </div>
      </section> */}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-top-btn btn btn-warning shadow rounded-circle"
          onClick={handleScrollTop}
        >
          <FaArrowUp />
        </button>
      )}

      {/* Modal Image Viewer */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Body className="p-0">
          <img src={modalImage} alt="Preview" className="img-fluid w-100" />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;