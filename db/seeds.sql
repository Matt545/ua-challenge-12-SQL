INSERT INTO department (name)
VALUES
  ('Technology'),
  ('Management');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Tech Staff', 92.500, 1),
  ('Tech Lead', 150.500, 1),
  ('Manager', 90.500, 2),
  ('CEO', 250.980, 2),
  ('Front Desk Intern', 36.667, 1);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 4),
  ('Virginia', 'Woolf', 1, 5),
  ('Piers', 'Gaveston', 1, 5),
  ('Charles', 'LeRoi', 2, 7),
  ('Katherine', 'Mansfield', 2, 7),
  ('Dora', 'Carrington', 3, 7),
  ('Edward', 'Bellamy', 4, NULL),
  ('Montague', 'Summers', 5, 6),
  ('Octavia', 'Butler', 5, 6),
  ('Unica', 'Zurn', 1, 4);
