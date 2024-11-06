"use client";
import { useState, useEffect } from "react";
import Topics from "./components/Topics";
import ActionBar from "./components/ActionBar";
import Landing from "./components/Landing";
import topicsData from "/public/topics.json";

export default function Page() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    setTopics(topicsData);
  }, []);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const toHome = () => {
    setSelectedTopic(null);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-hidden pb-14">
        {!selectedTopic && (
          <Landing handleTopicClick={handleTopicClick} topics={topics} />
        )}
        {selectedTopic && (
          <Topics
            topics={topics}
            selectedTopic={selectedTopic}
            handleTopicClick={handleTopicClick}
          />
        )}
      </div>
      <ActionBar
        selectedTopic={selectedTopic}
        toHome={toHome}
        handleTopicClick={handleTopicClick}
        className="fixed bottom-0 left-0 right-0 h-12" // Fixed positioning
      />
    </div>
  );
}
