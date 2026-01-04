import React, { useState, useEffect } from 'react';

function App() {
  const [dict, setDict] = useState(null);

  useEffect(() => {
    fetch('/CANTON/data/canto_dict.json')  // ← 注意路径！
      .then(res => res.json())
      .then(data => setDict(data));
  }, []);

  if (!dict) return <p>加载中...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>粤语学习器</h1>
      <p>共收录 {Object.keys(dict).length} 个词条</p>
      {/* 你可以在这里加搜索功能 */}
    </div>
  );
}

export default App;
