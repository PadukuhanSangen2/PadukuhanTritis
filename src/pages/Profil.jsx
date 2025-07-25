import './Profil.css';
import { motion } from 'framer-motion';

function Profil() {
  return (
    <div className="profil-container">
      {/* Hero Section */}
      <section className="hero-profil text-white text-center py-5">
        <div className="container">
          <motion.h2 className="fw-bold" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>Profil Pedukuhan Tritis</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Pedukuhan Tritis adalah sebuah dusun yang terletak di Desa Planjan, Kecamatan Saptosari, Kabupaten Gunungkidul. Pedukuhan ini dikenal sebagai kawasan yang asri dan kental dengan nilai-nilai kearifan lokal. Dikelilingi perbukitan kapur dan alam yang masih alami, Tritis menyimpan potensi budaya dan sosial yang kuat. Masyarakatnya hidup dalam semangat gotong royong serta masih melestarikan berbagai tradisi seperti karawitan, gejog lesung, dan kesenian rakyat lainnya. Selain potensi budaya, warga Pedukuhan Tritis juga aktif dalam mengembangkan UMKM berbasis hasil alam dan kekayaan lokal. Suasana damai dan kehidupan sosial yang erat menjadikan Tritis sebagai contoh harmoni antara tradisi, alam, dan pemberdayaan masyarakat.
          </motion.p>
        </div>
      </section>

      {/* Sejarah dan Visi Misi */}
      <section className="section bg-light py-5"> 
        <div className="container text-center">
          <motion.div
            className="profil-box sejarah-box mb-5"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="section-title">📜 Sejarah Singkat Pedukuhan</h3>
            <p className="lead text-muted">
              Pedukuhan Tritis yang terletak di Desa Planjan, Kecamatan Saptosari, Kabupaten Gunungkidul, memiliki sejarah yang unik dan sarat makna. Dahulu, wilayah ini dikenal dengan nama <strong>Risonggo</strong>, sebuah istilah yang berarti hutan penuh duri. Nama ini menggambarkan kondisi wilayah saat itu—lebat, terjal, dan belum tersentuh peradaban, hanya dihuni oleh beberapa rumah sederhana.
            </p>

            {/* Timeline */}
            <div className="timeline-container my-4 text-start">
              <h4 className="mb-3">⏳ Timeline Sejarah</h4>
              <ul className="timeline">
                <li><strong>Zaman Prabu Brawijaya</strong>: Wilayah Risonggo berupa hutan penuh duri yang liar dan belum dihuni.</li>
                <li><strong>Permukiman Awal</strong>: Beberapa keluarga mulai menetap, membuka lahan, dan membangun rumah.</li>
                <li><strong>Penamaan "Tritis"</strong>: Karena letaknya di pinggiran wilayah kekuasaan, masyarakat menyebutnya “Tritis” yang berarti “pinggir” atau “emper”.</li>
                <li><strong>Masa Kerajaan Mataram</strong>: Dusun mulai dikenal dan masuk dalam struktur wilayah administratif kerajaan.</li>
                <li><strong>Masa Kini</strong>: Tritis berkembang sebagai dusun yang asri, lestari, dan kaya nilai budaya.</li>
              </ul>
            </div>

            {/* Trivia Box */}
            <div className="trivia-box mt-4 p-3 bg-warning-subtle rounded">
              <h5>🔍 Tahukah Kamu?</h5>
              <p>
                Kata “Tritis” dalam filosofi Jawa tak hanya berarti pinggiran. Ia juga menggambarkan tetesan air pertama — lambang awal kehidupan, harapan, dan ketekunan. Dari hutan duri Risonggo, dusun ini tumbuh menjadi permata kecil yang penuh semangat kebersamaan.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="profil-box visi-box"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="section-title">🎯 Visi & Misi Kami</h3>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <ul className="visi-list list-unstyled text-start">
                  <li>✅ Mewujudkan dusun yang mandiri dan berdaya saing</li>
                  <li>🌱 Melestarikan budaya lokal serta kelestarian lingkungan</li>
                  <li>📈 Mendorong pertumbuhan UMKM dan pertanian digital</li>
                  <li>📚 Meningkatkan akses pendidikan dan literasi digital</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Struktur Pemerintahan */}
      <section className="section py-5">
        <div className="container">
          <motion.h3
            className="text-center mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            Struktur Pemerintahan Pedukuhan
          </motion.h3>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <table className="table-custom">
              <thead>
                <tr>
                  <th>Jabatan</th>
                  <th>Nama</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Kepala Pedukuhan</td><td>Pak Subandi</td></tr>
                <tr><td>Ketua RW 10</td><td>Pak Widodo</td></tr>
                <tr><td>Ketua RT 01</td><td>Pak Sariyanto</td></tr>
                <tr><td>Ketua RT 02</td><td>Pak Subroto</td></tr>
                <tr><td>Ketua Karang Taruna</td><td>Pak Rohmad Gunadi</td></tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Peta Lokasi */}
      <section className="section bg-light py-5 text-center">
        <div className="container">
          <motion.h3
            className="mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            Lokasi Pedukuhan Tritis
          </motion.h3>
          <motion.div
            className="ratio ratio-16x9"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d705.6310793513688!2d110.5490239697685!3d-8.086888986360236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb11fc8c8000f%3A0x27b57aeb896bb5b1!2sBalai%20Pedukuhan%20Tritis!5e1!3m2!1sen!2sid!4v1752056096013!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Peta Pedukuhan"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Kontak */}
      <section className="section text-center py-5">
        <div className="container">
          <motion.h3
            className="mb-3"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            Kontak Informasi
          </motion.h3>
          <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2 }}>
            Alamat: Pedukuhan Tritis, Kelurahan Planjan, Kapanewon Saptosari
          </motion.p>
          <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.3 }}>
            Instagram: @diptatarunatritis
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default Profil;
