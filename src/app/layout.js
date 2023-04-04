import "./globals.css";

export const metadata = {
  title: "Toxicity Detector",
  description: "Detect toxicity factors in text.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {/* header hasno links, just a centre alignedheading */}
        <header className='bg-gray-800 py-3'>
          <div className='max-w-7xl w-11/12 mx-auto sm:px-6 lg:px-8'>
            <h1 className='text-2xl font-bold text-white'>Toxicity Detector</h1>
          </div>
        </header>
        <>{children}</>
        <footer className='bg-gray-800 py-4'>
          <div className='max-w-7xl w-11/12 mx-auto sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center'>
              <div>
                <a
                  href='https://github.com/priyansh32'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-gray-400'
                >
                  Github
                </a>
                <span className='text-gray-500 mx-3'>/</span>
                <a
                  href='https://twitter.com/priyanshh32'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-gray-400'
                >
                  Twitter
                </a>
              </div>
              <div className='text-gray-500 text-sm'>
                Made with ❤️ by Priyansh
              </div>
            </div>
            <div className='mt-4 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between'>
              <div className='flex flex-col'>
                <span className='font-bold text-gray-100 uppercase mb-2'>
                  Disclaimer
                </span>
                <span className='text-gray-400 text-sm'>
                  This project uses a pre-trained Text toxicity detection model
                  available at{" "}
                  <a
                    href='https://www.tensorflow.org/js/models'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-500 hover:text-gray-400 underline'
                  >
                    TensorFlow.js
                  </a>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
