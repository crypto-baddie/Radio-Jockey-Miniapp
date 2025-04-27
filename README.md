# Radio-Jockey-Miniapp
A Farcaster mini app for one-way audio broadcasting, allowing users to go live, share themed radio channels, and engage listeners with simple controls.



## Features

- **One-way audio broadcasting** (no video or chat)
- **Simple controls**: Share, Mute, End
- **Live listener count** display
- **Themed channels**: Create stations for markets, news, tech, etc.
- **Mobile-friendly** UI for broadcasting on-the-go
- **Farcaster integration** for identity and sharing


### Prerequisites
- Node.js v16+
- npm/yarn
- Farcaster developer account (for production)

### Installation
```bash
# Clone the repository
git clone https://github.com/cryptobaddie/farcaster-radio-jockey.git

# Navigate to project directory
cd farcaster-radio-jockey

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 App Flow

1. **Homepage** → Tap "Go Live" to start broadcasting
2. **Broadcast Screen**:
   - Share your stream link
   - Toggle microphone mute
   - See live listener count
   - End broadcast when done
3. **Channels**:
   - Browse existing radio channels
   - Create your own themed channel

## 🛠️ Tech Stack

- **Frontend**: Next.js (React)
- **Styling**: CSS Modules
- **Audio**: Web Audio API
- **Authentication**: Farcaster JS SDK
- **Deployment**: Vercel/Netlify

## 📂 Project Structure

```
farcaster-radio-jockey/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Next.js page routes
│   ├── styles/          # CSS modules
│   └── utils/           # Helper functions
├── public/              # Static assets
└── next.config.js       # Next.js configuration
```

## 🌐 Deployment

1. **Vercel** (Recommended):
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Deploy
   vercel
   ```

2. **Netlify**:
   - Set build command: `npm run build`
   - Set publish directory: `out`

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_FARCASTER_API_KEY=your_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



