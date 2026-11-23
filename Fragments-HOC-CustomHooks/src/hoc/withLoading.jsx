function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading data...</h2>;
    }

    return <Component {...props} />;
  };
}

export default withLoading;