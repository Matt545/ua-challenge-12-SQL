INSERT INTO department (name)
VALUES
  ('IT'),
  ('Management'),
  ('Sales'),
  ('HR');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Data Analyst', 92500, 1),
  ('IT Lead', 150500, 2),
  ('Web Developer', 90500, 1),
  ('CEO', 250980, 2),
  ('HR Intern', 36667, 4),
  ('Sales Rep', 42667, 3),
  ('Lead Salesman', 55890, 3),
  ('HR Lead', 60000, 4);

INSERT INTO managers (first_name, last_name, manager_id)
VALUES
  ('Ronald', 'Firbank', 4),
  ('Virginia', 'Woolf', 5),
  ('Piers', 'Gaveston', 5),
  ('Charles', 'LeRoi', 7),
  ('Katherine', 'Mansfield', 7),
  ('Dora', 'Carrington', 7),
  ('Edward', 'Bellamy', 7),
  ('Montague', 'Summers', 6),
  ('Octavia', 'Butler', 6),
  ('Unica', 'Zurn', 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 4),
  ('Virginia', 'Woolf', 3, 5),
  ('Piers', 'Gaveston', 1, 5),
  ('Charles', 'LeRoi', 2, 7),
  ('Katherine', 'Mansfield', 2, 7),
  ('Dora', 'Carrington', 3, 4),
  ('Edward', 'Bellamy', 4, NULL),
  ('Montague', 'Summers', 7, 7),
  ('Octavia', 'Butler', 8, NULL),
  ('Unica', 'Zurn', 6, 8);
