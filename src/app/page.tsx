import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTj8By4hPzXuJiczKjv49x5QCGfG2FFt7QexXqgdT2ap8/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Choose your own adventure!',
  description: 'A frame that lets you choose your own adventure!',
  openGraph: {
    title: 'Choose your own adventure!',
    description: 'A frame that lets you choose your own adventure!',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTj8By4hPzXuJiczKjv49x5QCGfG2FFt7QexXqgdT2ap8/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Choose your own adventure!</h1>
    </>
  );
}