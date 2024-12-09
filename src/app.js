const root = ReactDOM.createRoot(document.getElementById('root'));

const PotatoPropaganda = () => {
  const aiMemeCoins = [
    { name: "WOJAK", ticker: "$WOJAK", twitter: "https://twitter.com/wojaktoken" },
    { name: "PEPE", ticker: "$PEPE", twitter: "https://twitter.com/pepecoineth" },
  ];

  return React.createElement(
    'div',
    { className: "min-h-screen bg-amber-50 text-stone-900" },
    React.createElement(
      'header',
      { className: "bg-red-800 text-amber-100 py-12 relative overflow-hidden" },
      React.createElement(
        'div',
        { className: "max-w-6xl mx-auto px-4" },
        React.createElement('h1', { className: "text-6xl font-bold mb-4" }, "$POTATO"),
        React.createElement('p', { className: "text-2xl font-bold" }, "UNITE UNDER THE BANNER OF THE MIGHTY TUBER!")
      )
    )
  );
};

root.render(React.createElement(PotatoPropaganda));
