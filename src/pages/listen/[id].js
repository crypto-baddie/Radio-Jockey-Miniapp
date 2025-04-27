import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Listen.module.css';

export default function Listen() {
  const router = useRouter();
  const { id } = router.query;
  const [isPlaying, setIsPlaying] = useState(false);
  
  // In a real app, you would fetch the stream based on the ID
  const channel = {
    id: 1,
    name: "Market Talk",
    host: "crypto_analyst",
    description: "Daily analysis of crypto markets"
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Here you would connect to the actual audio stream
  };

  return (
    <div className={styles.container}>
      <h1>{channel.name}</h1>
      <p>Host: @{channel.host}</p>
      <p>{channel.description}</p>
      
      <button 
        onClick={togglePlay} 
        className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`}
      >
        {isPlaying ? 'Stop Listening' : 'Tune In'}
      </button>
      
      <div className={styles.backLink}>
        <a onClick={() => router.back()}>← Back to channels</a>
      </div>
    </div>
  );
}