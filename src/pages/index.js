import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Farcaster Radio</h1>
      <p>Start your audio broadcast</p>
      
      <div className="action-buttons">
        <Link href="/broadcast" className="primary-button">
          Go Live
        </Link>
        <Link href="/channels" className="secondary-button">
          Browse Channels
        </Link>
      </div>
    </div>
  );
}