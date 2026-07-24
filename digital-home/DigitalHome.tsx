import React, { useState } from "react";
import "./DigitalHome.css";

type JourneyItem = {
  id: string;
  title: string;
  meta: string;
  time: string;
  completed?: boolean;
};

type Habitat = {
  id: string;
  name: string;
  description: string;
  className: string;
};

const defaultJourney: JourneyItem[] = [
  {
    id: "spending",
    title: "Review this week's spending",
    meta: "Finance · about 10 minutes",
    time: "Now",
  },
  {
    id: "water",
    title: "Water the vegetable beds",
    meta: "Garden · before sunset",
    time: "6:40",
  },
  {
    id: "prepare",
    title: "Prepare tomorrow gently",
    meta: "Home · choose one priority",
    time: "Later",
  },
];

const habitats: Habitat[] = [
  {
    id: "garden",
    name: "The Garden",
    description: "Seasonal plans, beds and harvests",
    className: "garden",
  },
  {
    id: "finance",
    name: "Finance",
    description: "Steady progress without pressure",
    className: "finance",
  },
  {
    id: "health",
    name: "Health",
    description: "Energy, medication and wellbeing",
    className: "health",
  },
  {
    id: "kitchen",
    name: "The Kitchen",
    description: "Meals, pantry and less waste",
    className: "kitchen",
  },
];

interface DigitalHomeProps {
  userName?: string;
  onOpenHabitat?: (habitatId: string) => void;
  onCaptureSeed?: () => void;
  onSeeTheDay?: () => void;
  journey?: JourneyItem[];
  temperature?: string;
  dayContext?: string;
}

export default function DigitalHome({
  userName = "Ricky",
  onOpenHabitat,
  onCaptureSeed,
  onSeeTheDay,
  journey = defaultJourney,
  temperature = "19°",
  dayContext = "Quiet evening · one appointment tomorrow",
}: DigitalHomeProps) {
  const [journeyState, setJourneyState] = useState<Record<string, boolean>>({});

  const toggleJourneyItem = (id: string) => {
    setJourneyState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="le-home">
      <div className="le-shell">
        {/* TOPBAR */}
        <header className="le-topbar">
          <div className="le-brand">
            <div className="le-mark">⌁</div>
            <strong>Life Evolved</strong>
          </div>
          <div className="le-profile">
            <div className="le-avatar">RH</div>
            <span>{userName}</span>
          </div>
        </header>

        {/* HERO */}
        <section className="le-hero">
          <div>
            <div className="le-kicker">Friday · Your digital home</div>
            <h1>
              Good evening,
              <br />
              {userName}.
            </h1>
            <p>
              Your world is in good shape. There are three gentle steps waiting
              when you are ready.
            </p>
          </div>
          <aside className="le-glance" aria-label="Today at a glance">
            <div>
              <span className="le-kicker">Today at a glance</span>
              <strong>{temperature}</strong>
            </div>
            <p>
              {dayContext}
              <br />
              Your garden may need water.
            </p>
          </aside>
        </section>

        {/* MAIN GRID */}
        <main className="le-grid">
          {/* TODAY'S JOURNEY */}
          <section className="le-journey">
            <div className="le-section-title">
              <h2>Today's journey</h2>
              <button onClick={onSeeTheDay}>See the day →</button>
            </div>
            <div className="le-journey-list">
              {journey.map((item) => (
                <label key={item.id} className="le-journey-item">
                  <input
                    type="checkbox"
                    checked={journeyState[item.id] || false}
                    onChange={() => toggleJourneyItem(item.id)}
                    aria-label={`Complete ${item.title}`}
                  />
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.meta}</small>
                  </span>
                  <em>{item.time}</em>
                </label>
              ))}
            </div>
            <div className="le-seed-note">
              <strong>A seed worth returning to</strong>
              <p>
                "Create a simple weekend workshop plan." Captured three days ago.
              </p>
            </div>
          </section>

          {/* HABITAT CARDS */}
          {habitats.map((habitat) => (
            <button
              key={habitat.id}
              className={`le-habitat ${habitat.className}`}
              onClick={() => onOpenHabitat?.(habitat.id)}
              aria-label={`Enter ${habitat.name}`}
            >
              <h3>{habitat.name}</h3>
              <p>{habitat.description}</p>
              <span className="le-enter">↗</span>
            </button>
          ))}
        </main>

        {/* LOWER SECTION */}
        <section className="le-lower">
          {/* ECOSYSTEM */}
          <article className="le-ecosystem">
            <div>
              <div className="le-kicker">Your living ecosystem</div>
              <h2>Something is taking root.</h2>
              <p>
                Your ecosystem grows through real life—not streaks. A small
                branch has appeared after a week of tending to what matters.
              </p>
            </div>
            <div className="le-tree">♧</div>
          </article>

          {/* SEED CAPTURE */}
          <article className="le-capture">
            <div>
              <div className="le-kicker">Seed capture</div>
              <h2>What mustn't be forgotten?</h2>
            </div>
            <button onClick={onCaptureSeed}>Plant a seed +</button>
          </article>
        </section>
      </div>
    </div>
  );
}
