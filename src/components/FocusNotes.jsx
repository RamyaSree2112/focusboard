
import { useState } from "react";
import "./FocusNotes.css";

function FocusNotes() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const notes = [
    {
      title: "Make today count.",
      description: "A little focus goes a long way.",
      nextTask: "Design landing page",
      progress: 62,
    },
    {
      title: "Small steps, big progress.",
      description: "Keep your progress moving forward.",
      nextTask: "Fix navigation",
      progress: 45,
    },
    {
      title: "Celebrate the wins.",
      description: "Every completed task moves you forward.",
      nextTask: "Review onboarding copy",
      progress: 85,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(
      (previousSlide) => (previousSlide + 1) % notes.length
    );
  };

  const previousSlide = () => {
    setCurrentSlide(
      (previousSlide) =>
        (previousSlide - 1 + notes.length) % notes.length
    );
  };

  const currentNote = notes[currentSlide];

  return (
    <section className="focus-notes">

      <div className="focus-note-content">

        <div className="focus-note-left">

          <div className="focus-note-label">
            <span>FOCUS NOTES</span>
            <span>
              {String(currentSlide + 1).padStart(2, "0")} / 03
            </span>
          </div>

          <h2 aria-live="polite">{currentNote.title}</h2>

          <p>{currentNote.description}</p>

          <div className="focus-progress">
            {notes.map((note, index) => (
              <button
                key={index}
                type="button"
                className={currentSlide === index ? "active" : ""}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to focus note ${index + 1}`}
                aria-current={
                  currentSlide === index ? "true" : undefined
                }
              />
            ))}
          </div>

        </div>

        <div className="focus-note-right">

          <div className="next-task-card">
            <div className="next-task-icon">✓</div>

            <div className="next-task-info">
              <span>NEXT UP</span>
              <h4>{currentNote.nextTask}</h4>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${currentNote.progress}%` }}
                />
              </div>

              <small>{currentNote.progress}%</small>
            </div>
          </div>

          <div className="carousel-buttons">
            <button
              type="button"
              className="carousel-prev"
              onClick={previousSlide}
              aria-label="Show previous focus note"
            >
              ‹
            </button>

            <button
              type="button"
              className="carousel-next"
              onClick={nextSlide}
              aria-label="Show next focus note"
            >
              ›
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default FocusNotes;
