CREATE TABLE clients (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE client_meetings (
  id INT NOT NULL AUTO_INCREMENT,
  client_id INT NOT NULL,
  meeting_date DATE NOT NULL,
  meeting_time TIME NOT NULL,
  meeting_subject VARCHAR(255) NOT NULL,
  meeting_notes TEXT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
INSERT INTO clients (name, email, phone)
VALUES (
    'John Doe',
    'john.doe@example.com',
    '(123) 456-7890'
  );
INSERT INTO client_meetings (
    client_id,
    meeting_date,
    meeting_time,
    meeting_subject,
    meeting_notes
  )
VALUES (
    1,
    '2023-10-16',
    '10:00 AM',
    'Initial consultation',
    'Discuss the client' s requirements for the project.');