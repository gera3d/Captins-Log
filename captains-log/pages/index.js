import Head from 'next/head';
import VoiceRecorder from '../components/VoiceRecorder';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Captain's Log</title>
        <meta name="description" content="Capture and transcribe voice notes into shareable ideas." />
      </Head>
      <main>
        <h1>Captain's Log</h1>
        <VoiceRecorder />
      </main>
    </div>
  );
}