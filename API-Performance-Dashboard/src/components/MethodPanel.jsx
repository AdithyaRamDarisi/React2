function MethodPanel({ onFetch, onFetchAxios, onAdd }) {
  return (
    <div className="method-panel">
      <button onClick={onFetch} className="get-btn">
        GET - Fetch API
      </button>

      <button onClick={onFetchAxios} className="axios-btn">
        GET - Axios
      </button>

      <button onClick={onAdd} className="post-btn">
        POST - Add User
      </button>
    </div>
  );
}

export default MethodPanel;