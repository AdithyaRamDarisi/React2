function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading data...</p>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default withLoading;