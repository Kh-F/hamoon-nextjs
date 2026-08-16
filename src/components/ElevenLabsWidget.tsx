import Script from 'next/script';

export default function ElevenLabsWidget({ agentId }: { agentId: string }) {
  return (
    <>
      <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
      <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="afterInteractive" async />
    </>
  );
}
