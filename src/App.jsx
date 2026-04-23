const navItems = [
  'Home',
  'Domain',
  'Milestones',
  'Documents',
  'Presentations',
  'About Us',
  'Contact Us',
]

const milestones = [
  { title: 'Project Proposal', date: 'Add your date', marks: 'Add marks', details: 'Initial concept presentation, problem statement, objectives, and proposed solution.' },
  { title: 'Progress Presentation 1', date: 'Add your date', marks: 'Add marks', details: 'Initial implementation progress, hardware setup, and early testing.' },
  { title: 'Progress Presentation 2', date: 'Add your date', marks: 'Add marks', details: 'Integrated system demonstration, module validation, and evaluation progress.' },
  { title: 'Final Assessment', date: 'Add your date', marks: 'Add marks', details: 'Final system demonstration, report submission, and overall evaluation.' },
  { title: 'Viva', date: 'Add your date', marks: 'Add marks', details: 'Individual and group questioning on technical knowledge, implementation, and outcomes.' },
]

const documents = [
  'Project Charter',
  'Proposal Document',
  'Status Documents / Checklists',
  'Final Thesis Document',
  'Research Paper',
]

const presentations = [
  { title: 'Proposal Presentation', link: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22168368_my_sliit_lk/IQAgsZIqoyvQSIynr5PwZpfQAdQXSCL6RO87QYu2Z0_WHeE?e=x0TCmm' },
  { title: 'Progress Presentation 1', link: null },
  { title: 'Progress Presentation 2', link: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22168368_my_sliit_lk/IQB3EzHTxKhxS7SpRyQQe1gsAdQJHsS_kekBd5S2NbDO69s?e=cCmw5U' },
  { title: 'Final Presentation', link: null },
]

const team = [
  { name: 'Kishoban R.', role: 'Health Monitoring Module', id: 'IT22171238', email: 'add-email@example.com' },
  { name: 'Mudalige D.H.T.H.', role: 'System Module', id: 'IT22279248', email: 'add-email@example.com' },
  { name: 'Samarasinghe S.C.D.', role: 'Communication / Security Module', id: 'IT22073150', email: 'add-email@example.com' },
  {
    name: 'Kumbukkotuwa K.R.D.M',
    role: 'Real-Time Data Visualization and System Interface for Soldier Monitoring',
    id: 'IT22168368',
    email: 'it22168368@my.sliit.lk',
  },
]

const kumbukkotuwaHighlights = [
  'Developed the real-time dashboard interface using React.js and Node-RED.',
  'Displayed soldier health metrics such as heart rate, temperature, SpO₂, and GPS location.',
  'Integrated MQTT/HTTP-based communication for low-latency data updates from the master ESP32 node.',
  'Implemented intuitive gauges, map-based soldier tracking, and color-coded health indicators.',
  'Optimized the dashboard for bandwidth-constrained environments using compact JSON payloads and asynchronous updates.',
]

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  )
}

function Card({ title, children, className = '' }) {
  return (
    <div className={`card ${className}`.trim()}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <header className="hero" id="home">
        <nav className="navbar container">
          <div className="logo">Battle Buddy 2.0</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#domain">Domain</a>
            <a href="#milestones">Milestones</a>
            <a href="#documents">Documents</a>
            <a href="#presentations">Slides</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content container">
          <div className="hero-text">
            <p className="eyebrow">Wearable IoT Research Project</p>
            <h1>Real-Time Soldier Health and Location Monitoring System</h1>
            <p className="lead">
              Battle Buddy 2.0 is a wearable frontline support system designed to monitor soldier
              vital signs, detect falls, track location, and transmit alerts to headquarters using
              secure long-range communication.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#domain">Explore Project</a>
              <a className="btn secondary" href="#about">Team Details</a>
            </div>
          </div>
          <div className="hero-panel card">
            <h3>Core Features</h3>
            <ul>
              <li>Heart Rate, SpO₂, and Temperature Monitoring</li>
              <li>Fall Detection using MPU6050</li>
              <li>GPS Tracking with Remote Updates</li>
              <li>LoRa-Based Long-Range Communication</li>
              <li>Emergency SOS and Command Feedback</li>
            </ul>
          </div>
        </div>
      </header>

      <Section id="domain" title="Domain">
        <div className="grid two">
          <Card title="Literature Survey">
            <p>
              Modern soldier support systems increasingly rely on IoT wearables, embedded sensors,
              and wireless telemetry to improve battlefield awareness. Prior studies show the value
              of continuous health monitoring, fall detection, and remote situational reporting,
              but many solutions are either short-range, power-intensive, or not designed for harsh
              field conditions.
            </p>
          </Card>
          <Card title="Research Gap">
            <p>
              Existing systems often lack an integrated wearable design that combines health
              monitoring, fall detection, location awareness, and long-range secure transmission in
              a practical field-ready format. Communication reliability over long distances also
              remains a challenge in remote environments.
            </p>
            <p>
              In addition, many existing monitoring solutions do not provide a lightweight and
              battlefield-ready visualization layer that combines health data and geolocation in one
              interface with very low latency.
            </p>
          </Card>
          <Card title="Research Problem">
            <p>
              Soldiers in remote or high-risk environments may suffer injuries, collapse, or lose
              communication without immediate support. Delayed identification of such incidents can
              reduce survival chances and compromise mission effectiveness.
            </p>
            <p>
              A major challenge is converting incoming field data into clear, actionable intelligence
              through a reliable dashboard that remains responsive under limited bandwidth and
              unstable connectivity.
            </p>
          </Card>
          <Card title="Research Objectives">
            <ul>
              <li>Monitor vital signs in near real time.</li>
              <li>Detect fall events and emergency conditions quickly.</li>
              <li>Transmit alerts and status updates over long distances.</li>
              <li>Provide a simple wearable architecture suitable for field use.</li>
              <li>Support reliable and secure communication with headquarters.</li>
              <li>Visualize soldier health and GPS data through an integrated live dashboard.</li>
            </ul>
          </Card>
          <Card title="Methodology">
            <p>
              The project uses a two-unit wearable architecture. The wrist unit captures health data
              using MAX30102 and MLX90614 sensors and sends processed readings via UART. The
              shoulder unit performs fall detection using MPU6050, acquires GPS coordinates, and
              forwards integrated data through SX1278 LoRa communication to the monitoring side.
            </p>
            <p>
              For the visualization subsystem, the master ESP32 node forwards parsed data through
              Wi-Fi using MQTT or HTTP, Node-RED handles backend processing and streaming, and a
              React.js dashboard presents live metrics, map-based tracking, and alert states.
            </p>
          </Card>
          <Card title="Technologies Used">
            <ul>
              <li>ESP32 Microcontrollers</li>
              <li>MAX30102 Pulse Oximeter Sensor</li>
              <li>MLX90614 Temperature Sensor</li>
              <li>MPU6050 IMU Sensor</li>
              <li>NEO-M8N GPS Module</li>
              <li>SX1278 LoRa Module</li>
              <li>Node-RED Backend Flows</li>
              <li>React Frontend for Project Website and Dashboard</li>
              <li>MQTT / HTTP Protocols</li>
            </ul>
          </Card>
        </div>

        <div className="spaced-top">
          <Card title="Kumbukkotuwa K R D M - Individual Contribution" className="feature-card">
            <p>
              This project component focuses on real-time data visualization and the system
              interface for soldier monitoring. It receives parsed sensor data from the master ESP32
              node and transforms it into an interactive dashboard for commanders and monitoring
              personnel.
            </p>
            <ul>
              {kumbukkotuwaHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              The novelty of this contribution is a lightweight yet responsive monitoring dashboard
              that supports real-time decision-making through map-based GPS tracking, health
              gauges, historical movement visibility, and traffic-light style status indicators.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="milestones" title="Milestones">
        <div className="timeline">
          {milestones.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-dot" />
              <Card title={item.title}>
                <p><strong>Date:</strong> {item.date}</p>
                <p><strong>Marks Allocated:</strong> {item.marks}</p>
                <p>{item.details}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      <Section id="documents" title="Documents">
        <div className="grid two">
          {documents.map((doc) => (
            <Card key={doc} title={doc}>
              <p>Replace this text with a document link or uploaded file URL.</p>
              <a className="text-link" href="#">Add link</a>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="presentations" title="Slides of Past Presentations">
        <div className="grid two">
          {presentations.map((item) => (
            <Card key={item.title} title={item.title}>
              {item.link ? (
                <a className="text-link" href={item.link} target="_blank" rel="noopener noreferrer">View Slides</a>
              ) : (
                <>
                  <p>Replace with the slide deck link for this presentation.</p>
                  <a className="text-link" href="#">Add slide link</a>
                </>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section id="about" title="About Us">
        <div className="grid two">
          {team.map((member) => (
            <Card key={member.id} title={member.name}>
              <p><strong>Role:</strong> {member.role}</p>
              <p><strong>Student ID:</strong> {member.id}</p>
              <p><strong>Email:</strong> {member.email}</p>
              {member.id === 'IT22168368' && (
                <>
                  <p><strong>Focus Area:</strong> React.js dashboard, Node-RED integration, MQTT/HTTP communication, GPS map visualization, and low-latency health status monitoring.</p>
                  <p><strong>Contribution:</strong> Built the real-time system interface that displays soldier vitals, location updates, and color-coded alerts for rapid operational awareness.</p>
                </>
              )}
            </Card>
          ))}
        </div>
        <div className="card spaced-top">
          <h3>Supervisor</h3>
          <p>Anuradha Jayakody</p>
          <p>Project ID: 25-26J-014</p>
        </div>
      </Section>

      <Section id="contact" title="Contact Us">
        <div className="grid two">
          <Card title="General Contact Details">
            <p><strong>Email:</strong> yourprojectemail@example.com</p>
            <p><strong>Phone:</strong> +94 XX XXX XXXX</p>
            <p><strong>Institution:</strong> Sri Lanka Institute of Information Technology (SLIIT)</p>
          </Card>
          <Card title="Quick Contact Template">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea rows="5" placeholder="Your Message"></textarea>
              <button type="button" className="btn primary">Send Message</button>
            </form>
          </Card>
        </div>
      </Section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Battle Buddy 2.0 Project Website</p>
          <p>{navItems.join(' • ')}</p>
        </div>
      </footer>
    </div>
  )
}
