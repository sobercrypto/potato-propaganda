import React from 'react';
import { Twitter, Telegram, Discord } from 'lucide-react';

const PotatoPropaganda = () => {
  const aiMemeCoins = [
    { name: "WOJAK", ticker: "$WOJAK", twitter: "https://twitter.com/wojaktoken" },
    { name: "PEPE", ticker: "$PEPE", twitter: "https://twitter.com/pepecoineth" },
    // Add more coins as needed
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-stone-900">
      {/* Hero Section with Propaganda Style */}
      <header className="bg-red-800 text-amber-100 py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 transform -rotate-2">
            $POTATO
          </h1>
          <p className="text-2xl font-semibold mb-8 transform rotate-1">
            UNITE UNDER THE BANNER OF THE MIGHTY TUBER!
          </p>
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 bg-amber-100 text-red-800 px-6 py-3 rounded-lg font-bold hover:bg-amber-200 transition-colors">
              <Twitter size={24} />
              Join the Revolution
            </a>
            <a href="#" className="flex items-center gap-2 bg-red-900 text-amber-100 px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
              <Telegram size={24} />
              Telegram
            </a>
          </div>
        </div>
        {/* Decorative potato symbols */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-700 rounded-full opacity-20"></div>
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-red-900 rounded-full opacity-20"></div>
      </header>

      {/* Lore Section */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-red-800">The Great Potato Prophecy</h2>
          <div className="prose prose-lg">
            <p className="text-xl mb-6">
              In the dark times of the great meme wars, when tokens rose and fell like autumn leaves,
              there emerged a prophecy of a mighty tuber that would unite all memecoin holders under
              one banner. That tuber... is $POTATO.
            </p>
            <p className="text-xl mb-6">
              Born in the fertile soil of blockchain innovation, nourished by the wisdom of ancient
              farming traditions, $POTATO represents more than just a token - it is the future of
              decentralized agriculture-themed finance.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-red-800 text-amber-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Phase 1: Germination</h3>
              <ul className="space-y-2">
                <li>• Launch $POTATO token</li>
                <li>• Build core community of potato believers</li>
                <li>• Establish meme farming protocols</li>
              </ul>
            </div>
            <div className="bg-red-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Phase 2: Growth</h3>
              <ul className="space-y-2">
                <li>• Deploy potato-based NFT collection</li>
                <li>• Launch PotatoSwap DEX</li>
                <li>• Establish cross-chain potato bridges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Meme Coins Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-red-800">Fellow Revolutionaries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {aiMemeCoins.map((coin, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{coin.name}</h3>
                <p className="text-gray-600 mb-2">{coin.ticker}</p>
                <a 
                  href={coin.twitter}
                  className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={16} />
                  Follow
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-amber-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              $POTATO - Rise of the Tubers © 2024
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Telegram size={24} />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Discord size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PotatoPropaganda;
