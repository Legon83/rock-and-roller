import styles from '@/styles/videoSection.module.css'

const VideoSection = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        width="100%"  // Ajusta el tamaño según lo necesites
        height="auto"
        controls  // Activa los controles de reproducción
      >
        <source src="/videos/uso.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    </div>
  );
};

export default VideoSection;