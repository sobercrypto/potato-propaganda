const root = ReactDOM.createRoot(document.getElementById('root'));

const PotatoPropaganda = () => {
  const aiMemeCoins = [
    { name: "WOJAK", ticker: "$WOJAK", twitter: "https://twitter.com/wojaktoken" },
    { name: "PEPE", ticker: "$PEPE", twitter: "https://twitter.com/pepecoineth" },
    { name: "MILADY", ticker: "$LADYS", twitter: "https://twitter.com/miladytoken" },
    { name: "SILLY", ticker: "$SILLY", twitter: "https://twitter.com/sillydragon_" },
    { name: "SPONGE", ticker: "$SPONGE", twitter: "https://twitter.com/spongeoneth" }
  ];

  return React.createElement(
    'div',
    { className: "min-h-screen bg-amber-50 text-stone-900" },
    // Hero Section
    React.createElement(
      'header',
      { className: "bg-red-800 text-amber-100 py-12 relative overflow-hidden" },
      React.createElement(
        'div',
        { className: "max-w-6xl mx-auto px-4" },
        React.createElement('h1', { className: "text-6xl font-bold mb-4 transform -rotate-2" }, "$POTATO"),
        React.createElement('p', { className: "text-2xl font-bold mb-8" }, "UNITE UNDER THE BANNER OF THE MIGHTY TUBER!"),
        React.createElement(
          'div',
          { className: "flex gap-4" },
          React.createElement(
            'a',
            { 
              href: "#",
              className: "bg-amber-100 text-red-800 px-6 py-3 rounded-lg font-bold hover:bg-amber-200 transition-colors"
            },
            "Join the Revolution"
          ),
          React.createElement(
            'a',
            { 
              href: "#",
              className: "bg-red-900 text-amber-100 px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            },
            "Telegram"
          )
        )
      )
    ),

    // Lore Section
    React.createElement(
      'section',
      { className: "py-16 bg-amber-100" },
      React.createElement(
        'div',
        { className: "max-w-4xl mx-auto px-4" },
        React.createElement('h2', { className: "text-4xl font-bold mb-8 text-red-800" }, "The Great Potato Prophecy"),
        React.createElement(
          'p',
          { className: "text-xl mb-6" },
          "In the dark times of the great meme wars, when tokens rose and fell like autumn leaves, there emerged a prophecy of a mighty tuber that would unite all memecoin holders under one banner. That tuber... is $POTATO."
        ),
        React.createElement(
          'p',
          { className: "text-xl mb-6" },
          "Born in the fertile soil of blockchain innovation, nourished by the wisdom of ancient farming traditions, $POTATO represents more than just a token - it is the future of decentralized agriculture-themed finance."
        )
      )
    ),

    // AI Meme Coins Section
    React.createElement(
      'section',
      { className: "py-16 bg-amber-50" },
      React.createElement(
        'div',
        { className: "max-w-6xl mx-auto px-4" },
        React.createElement('h2', { className: "text-4xl font-bold mb-8 text-red-800" }, "Fellow Revolutionaries"),
        React.createElement(
          'div',
          { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" },
          aiMemeCoins.map((coin, index) =>
            React.createElement(
              'div',
              { 
                key: index,
                className: "bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              },
              React.createElement('h3', { className: "text-xl font-bold mb-2" }, coin.name),
              React.createElement('p', { className: "text-gray-600 mb-2" }, coin.ticker),
              React.createElement(
                'a',
                {
                  href: coin.twitter,
                  className: "text-blue-500 hover:text-blue-600",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                "Follow"
              )
            )
          )
        )
      )
    )
  );
};

root.render(React.createElement(PotatoPropaganda));
