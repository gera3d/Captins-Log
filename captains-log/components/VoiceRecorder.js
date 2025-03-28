import { useState } from 'react';
import axios from 'axios';

export default function VoiceRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [transcription, setTranscription] = useState('');

  const startRecording = () => {
    // Implement audio recording logic here
    setRecording(true);
  };

  const stopRecording = () => {
    // Implement logic to stop recording and get audio URL
    setRecording(false);
    setAudioURL('sample-audio-url'); // Placeholder
    transcribeAudio('sample-audio-url');
  };

  const transcribeAudio = async (audioURL) => {
    try {
      const response = await axios.post('/api/transcribe', { audioURL });
      setTranscription(response.data.transcription);
    } catch (error) {
      console.error('Error transcribing audio:', error);
    }
  };

  return (
    <div>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioURL && <audio src={audioURL} controls />}
      {transcription && <p>Transcription: {transcription}</p>}
    </div>
  );
}