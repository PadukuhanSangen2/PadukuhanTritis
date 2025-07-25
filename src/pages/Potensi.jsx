import './Potensi.css';
import Carousel from 'react-bootstrap/Carousel';

const potensiData = [
  {
    title: 'Emping Melinjo',
    description: `Emping melinjo merupakan salah satu produk unggulan dusun yang telah diproduksi secara turun-temurun oleh para ibu rumah tangga.
    Proses pembuatannya masih mempertahankan cara tradisional, dimulai dari pemilihan biji melinjo terbaik, penumbukan dengan lesung, penjemuran hingga penggorengan.
    UMKM ini tidak hanya menjaga cita rasa khas emping yang gurih dan renyah, tetapi juga menjadi sumber penghasilan utama bagi keluarga. Produk ini dipasarkan di berbagai pasar lokal dan mulai merambah ke penjualan online
    sebagai oleh-oleh khas desa.`,
    media: ['/images/img18.png', '/images/img51.png'],
  },
  {
    title: 'Telaga Omang',
    description: `Telaga Omang adalah salah satu daya tarik wisata alam Pedukuhan Sukamaju yang telah dikembangkan menjadi destinasi ekowisata berbasis masyarakat.
    Dengan airnya yang jernih, udara segar, dan lingkungan yang masih alami, telaga ini menawarkan pengalaman rekreasi yang tenang dan menyegarkan.
    Warga setempat membentuk kelompok sadar wisata yang mengelola area sekitar telaga, menyediakan fasilitas sederhana seperti saung bambu, jalur tracking ringan, dan spot selfie alami.
    UMKM kuliner sekitar telaga juga berkembang dengan menyajikan makanan khas seperti nasi jagung, gorengan, dan minuman herbal hangat.`,
    media: ['/images/img62.png','/images/telaga.png', '/images/img31.png'],
  },
  {
    title: 'Gejog Lesung',
    description: `Gejog Lesung adalah kesenian tradisional yang menggunakan lesung (alat penumbuk padi) dan alu sebagai instrumen musik.
    Alat yang dulunya digunakan untuk menumbuk padi ini, kini menjadi alat utama dalam pertunjukan ritmis yang menghibur dan menggugah semangat.
    Pertunjukan ini dilakukan oleh ibu-ibu yang memukul lesung dengan pola tertentu, menciptakan bunyi-bunyian unik yang menyatu dalam harmoni.
    Gejog Lesung sering ditampilkan dalam acara panen raya, festival dusun, dan penyambutan tamu, serta dilestarikan melalui pelatihan kepada generasi muda sebagai warisan budaya lokal.`,
    media: ['/images/img13.png', '/images/img14.png'],
  },
  {
    title: 'Wayang Wong',
    description: `Wayang Wong adalah pertunjukan drama tari yang mengangkat kisah-kisah pewayangan seperti Ramayana dan Mahabharata.
    Di Pedukuhan Sukamaju, seni ini hidup dalam sanggar budaya yang dibentuk oleh para seniman dan pelaku seni lokal.
    Pertunjukan Wayang Wong memadukan gerak tari, dialog berbahasa Jawa klasik, serta tata rias dan busana yang kaya makna simbolik.
    Kegiatan ini tidak hanya menjadi media hiburan, tetapi juga sarana edukasi budaya dan spiritual. Pertunjukan sering digelar pada acara selamatan desa dan hari-hari besar tradisional.`,
    media: ['/images/img16.png', '/images/img59.png'],
  },
  {
    title: 'Karawitan',
    description: `Karawitan adalah seni musik tradisional Jawa yang dimainkan dengan alat gamelan seperti saron, bonang, kendang, dan gong.
    Di Pedukuhan Sukamaju, kelompok karawitan aktif tampil dalam acara hajatan, pengajian, dan peringatan hari besar nasional atau keagamaan.
    Kegiatan ini tidak hanya menjaga kelestarian seni musik tradisional, tapi juga menjadi wadah silaturahmi antarwarga dan ekspresi spiritual.
    Kelompok karawitan yang terdiri dari bapak-bapak dan pemuda desa juga menjadi mitra pelengkap untuk pertunjukan wayang, tari tradisional, dan kegiatan sekolah budaya.`,
    media: ['/images/img15.png', '/images/img50.png',  '/images/img38.png'],
  },
];

function Potensi() {
  return (
    <div className="container py-5 potensi-container">
      <h2 className="text-center mb-5">Potensi UMKM & Budaya Pedukuhan Sukamaju</h2>

      {potensiData.map((item, index) => {
        const isReversed = index % 2 === 1;
        return (
          <div className="row mb-5 align-items-center potensi-item" key={index}>
            {isReversed ? (
              <>
                <div className="col-md-6 order-md-2 mb-3 mb-md-0">
                  <h4 className="fw-bold">{item.title}</h4>
                  <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>{item.description}</p>
                </div>
                <div className="col-md-6 order-md-1">
                  <Carousel interval={null} indicators={false}>
                    {item.media.map((src, idx) => (
                      <Carousel.Item key={idx}>
                        <div className="potensi-video-wrapper">
                          <img src={src} alt={item.title} style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 mb-3 mb-md-0">
                  <h4 className="fw-bold">{item.title}</h4>
                  <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>{item.description}</p>
                </div>
                <div className="col-md-6">
                  <Carousel interval={null} indicators={false}>
                    {item.media.map((src, idx) => (
                      <Carousel.Item key={idx}>
                        <div className="potensi-video-wrapper">
                          <img src={src} alt={item.title} style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Potensi;
