const root = ReactDOM.createRoot(document.getElementById('root'));

const PotatoPropaganda = () => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'header',
      { className: "bg-red-800 text-amber-100 py-12" },
      React.createElement(
        'div',
        { className: "max-w-6xl mx-auto px-4" },
        React.createElement(
          'h1',
          { className: "text-6xl font-bold mb-4" },
          "$POTATO"
        ),
        React.createElement(
          'p',
          { className: "text-2xl" },
          "UNITE UNDER THE BANNER OF THE MIGHTY TUBER!"
        )
      )
    ),
    React.createElement(
      'section',
      { className: "bg-amber-100 py-12" },
      React.createElement(
        'div',
        { className: "max-w-6xl mx-auto px-4" },
        React.createElement(
          'h2',
          { className: "text-4xl font-bold mb-4" },
          "About $POTATO"
        ),
        React.createElement(
          'p',
          { className: "text-xl" },
          "The mightiest tuber in crypto!"
        )
      )
    )
  );
};

// Add a console log to verify our component is being created
console.log('Creating PotatoPropaganda component');

try {
  root.render(React.createElement(PotatoPropaganda));
  console.log('Render completed');
} catch (error) {
  console.error('Error rendering:', error);
}
