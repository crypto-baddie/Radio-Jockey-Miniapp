import Link from 'next/link';
import styles from '../styles/Channels.module.css';

const mockChannels = [
  { id: 1, name: "Market Talk", host: "crypto_analyst", listeners: 42 },
  { id: 2, name: "Daily News", host: "news_anchor", listeners: 128 },
  { id: 3, name: "Tech Updates", host: "web3_dev", listeners: 75 },
];

export default function Channels() {
  return (
    <div className={styles.container}>
      <h1>Radio Channels</h1>
      
      <div className={styles.channelList}>
        {mockChannels.map(channel => (
          <div key={channel.id} className={styles.channelCard}>
            <h3>{channel.name}</h3>
            <p>Host: @{channel.host}</p>
            <p>{channel.listeners} listeners</p>
            <Link href={`/listen/${channel.id}`} className={styles.joinButton}>
              Tune In
            </Link>
          </div>
        ))}
      </div>
      
      <Link href="/broadcast" className={styles.createButton}>
        Create Your Own Channel
      </Link>
    </div>
  );
}