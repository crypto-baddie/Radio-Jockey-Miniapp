import { useState, useRef, useEffect } from 'react';
import { FaShare, FaMicrophone, FaMicrophoneSlash, FaStop } from 'react-icons/fa';
import styles from '../styles/Broadcast.module.css';

export default function Broadcast() {
  const [isLive, setIsLive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [listeners, setListeners] = useState(0);
  const audioStream = useRef(null);

  // Simulate listener count updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      setListeners(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isLive]);

  const handleGoLive = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStream.current = stream;
      setIsLive(true);
      // Here you would connect to Farcaster
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const handleEndBroadcast = () => {
    if (audioStream.current) {
      audioStream.current.getTracks().forEach(track => track.stop());
    }
    setIsLive(false);
    setListeners(0);
  };

  const toggleMute = () => {
    if (audioStream.current) {
      audioStream.current.getAudioTracks()[0].enabled = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const shareBroadcast = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Broadcast link copied to clipboard!');
  };

  return (
    <div className={styles.container}>
      {!isLive ? (
        <button className={styles.goLiveButton} onClick={handleGoLive}>
          Go Live
        </button>
      ) : (
        <>
          <div className={styles.status}>
            <span className={styles.liveIndicator}>● LIVE</span>
            <span>{listeners} listeners</span>
          </div>
          
          <div className={styles.controls}>
            <button onClick={shareBroadcast}>
              <FaShare /> Share
            </button>
            
            <button onClick={toggleMute}>
              {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
            
            <button className={styles.endButton} onClick={handleEndBroadcast}>
              <FaStop /> End
            </button>
          </div>
        </>
      )}
    </div>
  );
}