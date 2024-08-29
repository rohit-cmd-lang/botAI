import { useState, useEffect } from "react";

import HomePage from "./components/pages/HomePage";
import { Provider } from "react-redux";
import store from "./store";
import ChatPage from "./components/pages/ChatPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PastConversations from "./components/pages/PastConversations";
import sampleData from "./sampleData.json";

const App = () => {
  const data = sampleData;
  console.log(data);
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route index path="/" element={<HomePage data={data} />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/history" element={<PastConversations />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
