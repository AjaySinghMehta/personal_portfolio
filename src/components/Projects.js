import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Sales_insights_ _ Tableau Public.png";
import projImg2 from "../assets/img/PowerBI_HR_Data.png";
import projImg3 from "../assets/img/WebScraping_img.png";
import projImg4 from "../assets/img/Nextflix_img.png";
import projImg5 from "../assets/img/Financial_analysis.png";
import projImg6 from "../assets/img/movie_recommendation.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: <a href="https://public.tableau.com/app/profile/ajay.mehta2966/viz/Sales_insights_/Dashboard1" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }} target="_blank">Tableau Sales Insight</a>,
      description: "In my Tableau project, I've synthesized 'Customers,' 'Dates,' 'Markets,' 'Products,' and 'Transactions' for comprehensive insights.",
      imgUrl: projImg1,
    },
    {
      title: <a href="https://app.powerbi.com/groups/me/reports/746f6819-52e5-4f68-86e7-96935c348eff/ReportSection?experience=power-bi&clientSideAuth=0" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }} target="_blank">PowerBI HR Data</a>,
      description: "In this project, HR data fuels talent strategy, highlighting retirements for succession planning, aligning job satisfaction with diversity, and visualizing performance for recruitment via Power BI's dynamic dashboard.",
      imgUrl: projImg2,
    },
    {
      title: <a href="https://github.com/AjaySinghMehta/Scraping-Blogs-from-Blackcoffer" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }} target="_blank">WebScraping using BeautifulSoup</a>,
      description: "Embarking on a Python-powered odyssey across 100 blog pages, this scraper delves beyond sentiment analysis. Navigating subjectivity, polarity, and more, it crafts a rich dataset, offering decision-makers seamless insights. Let the digital exploration unfold!",
      imgUrl: projImg3,
    },
    {
      title: <a href="https://github.com/AjaySinghMehta/Netflix-dataset-performing-data_analysis" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }} target="_blank">Netflix data analysis</a>,
      description: "Uncover Netflix Insights: Explore data's role in entertainment decisions. With pandas, raw data undergoes thorough analysis, duplicate management, null value handling, and trend visualization. Decode release patterns, director insights, and show vs. movie stats. Reshape streaming choices with data-driven clarity.",
      imgUrl: projImg4,
    },
    {
      title: <a href="https://github.com/AjaySinghMehta/StockPrediction_using_yahoo_finance_sp500" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }} target="_blank">Stock Price Prediction - Yahoo Finance</a>,
      description: "Data analysis & ML in one  forecasting S&P 500 trends. Utilizing RandomForestClassifier, parameters were fine-tuned, features engineered, and rigorous backtesting performed. Result: Accurate insights for smarter investment choices.",
      imgUrl: projImg5,
    },
    {
      title: <a href="https://github.com/AjaySinghMehta/movie_recommendation" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }} target="_blank">Movie Recommendation System</a>,
      description: "Developed a Content-Based Movie Recommender using advanced TF-IDF methods. Utilized Python, Pandas, NumPy & Scikit-learn for thorough data preprocessing. Implemented Cosine Similarity for personalized recommendations. Crafted an interactive Streamlit web application. Enhanced matching efficiency with TF-IDF optimization. Passionate about data analysis & ML!",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Discover my Projects Collection showcasing diverse professional endeavors, from data analyses to machine learning implementations, demonstrating expertise and passion for innovation.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Data science is a multidisciplinary field that combines statistical analysis,
                          machine learning, programming, and domain expertise to extract insights and knowledge
                          from complex datasets. At its core, data science is about uncovering patterns, trends,
                          and correlations hidden within vast amounts of data, and using this information to make
                          informed decisions and predictions. Data scientists utilize a variety of tools and techniques
                          to collect, clean, and preprocess data before applying advanced algorithms to uncover meaningful
                          insights. These insights can range from understanding customer behavior and market trends to
                          optimizing business processes and improving decision-making. Data science has become indispensable in
                          today's data-driven world, where organizations across industries rely on data-driven insights to gain a
                          competitive edge, drive innovation, and solve complex problems. With the exponential growth of data generated every day, 
                          the demand for skilled data scientists continues to rise, making data science a dynamic and exciting field with endless 
                          opportunities for exploration and discovery.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Just to ask how is life? Nah!! not really Coming soon....</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}