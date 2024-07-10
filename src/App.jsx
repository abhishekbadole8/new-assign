import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/*  */}
      <MenuBar />

      {/* Main */}
      <main>
        <section className="hero">
          <div className="initiative">An IIT Delhi Alumni Initiative</div>
          <h1>
            Become an Expert in the field of <span>Data Science</span> with 6
            courses
          </h1>
          <p>
            A specially crafted Tech Kickstarter, with 5+ extensive online
            courses.
          </p>
          <div className="features">
            <span>Personal Mentorship</span>
            <span>Internship Assistance</span>
            <span>Industry Certified Courses</span>
          </div>
          <div className="cta-buttons">
            <button className="enroll-btn">Enroll Now</button>
            <button className="know-more-btn">Know More</button>
          </div>
        </section>
        <section className="stats">
          <div className="stat-item">
            <span>24</span>
            <p>Courses</p>
          </div>
          <div className="stat-item">
            <span>30k+</span>
            <p>Learners</p>
          </div>
          <div className="stat-item">
            <span>100k+</span>
            <p>Doubts Solved</p>
          </div>
          <div className="stat-item">
            <span>10k+</span>
            <p>Student Projects</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
