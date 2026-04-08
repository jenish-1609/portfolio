import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Cloud-Based AI Workflow Orchestrator",
    category: "AI Workflow Automation Platform",
    description:
      "A scalable cloud platform that orchestrates complex AI workflows using distributed task queues and real-time monitoring. Features automated pipeline execution, intelligent retry mechanisms, and comprehensive logging with LangSmith integration for debugging AI model interactions.",
    tools:
      "FastAPI, Celery, Redis, Docker, AWS Lambda, AWS SQS, OpenAI API, LangSmith, Prometheus",
    image: "/images/workflow-orchestrator.png",
  },
  {
    title: "AI Image and Video Detection Tool",
    category: "AI Content Detection System",
    description:
      "An intelligent content analysis platform that uses computer vision and machine learning to detect and classify objects, scenes, and activities in images and videos. Includes real-time processing capabilities, batch analysis workflows, and integration with cloud storage for large-scale media processing.",
    tools:
      "Python, React.js, Node.js, Flask, PostgreSQL, Supabase, AWS, OpenCV, FFmpeg, Kubernetes",
    image: "/images/ai-detection.png",
  },
  {
    title: "TransactHub",
    category: "Real-Time Payment and Wallet Platform",
    description:
      "A comprehensive fintech solution providing secure wallet management, real-time payment processing, and transaction tracking. Features include multi-currency support, instant transfers, transaction history analytics, and seamless integration with banking APIs for a complete digital payment experience.",
    tools:
      "Turborepo, Next.js, Express, React Context API, Tailwind CSS, Docker, AWS, PostgreSQL",
    image: "/images/transacthub.png",
  },
  {
    title: "Wireless Telematics Platform",
    category: "Fleet-Scale Data Collection and Visualization",
    description:
      "An IoT platform for collecting and analyzing telemetry data from vehicle fleets. Captures real-time sensor data including GPS, fuel consumption, engine diagnostics, and driver behavior metrics. Features real-time dashboards, historical data analysis, and predictive maintenance alerts.",
    tools:
      "C++, Python, Linux, Raspberry Pi, LTE/WiFi/BLE, MQTT, Kafka, InfluxDB, Grafana, Docker, AWS",
    image: "/images/wireless-telematics.png",
  },
  {
    title: "Embedded Systems Firmware",
    category: "Real-Time Sensor Acquisition and Control",
    description:
      "High-performance firmware for embedded systems handling real-time sensor data acquisition and control systems. Implements efficient interrupt-driven architectures, multi-threaded processing with FreeRTOS, and robust communication protocols for industrial automation and IoT applications.",
    tools: "C++, C, STM32, FreeRTOS, SPI, I2C, CAN, UART, GDB, Python, Bash",
    image: "/images/embedded-firmware.png",
  },
  {
    title: "Linux-Based Wireless Evaluation Platform",
    category: "Rapid Prototyping for Next-Gen Wireless Testing",
    description:
      "A flexible testing platform for evaluating wireless communication protocols and IoT device performance. Supports rapid prototyping of WiFi, Bluetooth, and custom wireless protocols with automated testing suites, performance benchmarking, and comprehensive logging for wireless network analysis.",
    tools:
      "C++, Linux, Python, WiFi, Bluetooth/BLE, REST APIs, Docker, PostgreSQL, GitHub Actions",
    image: "/images/wireless-evaluation.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
