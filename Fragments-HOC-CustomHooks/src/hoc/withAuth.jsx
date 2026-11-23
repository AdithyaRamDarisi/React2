function withAuth(Component) {
  return function ProtectedComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please login to access this page.</h2>;
    }

    return <Component {...props} />;
  };
}

export default withAuth;