# WebSense
[![Build Status](https://github.drone.michigg.de/api/badges/michigg/web-sense/status.svg)](https://github.drone.michigg.de/michigg/web-sense) [![Quality Gate Status](https://sonarqube.michigg.de/api/project_badges/measure?project=michigg%3Aweb-sense&metric=alert_status)](https://sonarqube.michigg.de/dashboard?id=michigg%3Aweb-sense) [![Coverage](https://sonarqube.michigg.de/api/project_badges/measure?project=michigg%3Aweb-sense&metric=coverage)](https://sonarqube.michigg.de/dashboard?id=michigg%3Aweb-sense)

With this project we want to evaluate a web based approach
for mobile crowd sensing frameworks. Currently, the noise mea-
surement use case is implemented as an application example. Usually, crowd sensing
frameworks use native applications for their clients. For example [Medusa](https://github.com/USC-NSL/Medusa) and [AWARE](https://awareframework.com/).
This would lead to a
high implementation effort because both iOS and Android applications
need to be implemented. Therefore, a progressive web app is used as an
alternative way to create a crowd sensing application that runs on any
device with a browser. This is a prototype to evaluate the possibili-
ties of a web based crowd sensing framework. The prototype was evaluated
by experts and thereafter by a qualitative user study. The implementation
process shows that a web based approach cannot offer opportunistic
crowd sensing use cases because sensors cannot run in the background
yet. An implementation using the PWA approach does not have the capa-
bilities of a native app because some sensors of the mobile device that
native applications can access are not accessible using web technologies.
The evaluations show that the structure of the prototype is sufficient for
the potential users to execute tasks.

## Screen Design
### Tasks
The following screenshots show the task selection (left) and the task "Lärm in der Stadt" (right) 
<p float="left">
  <img src="./documentation/screenshots/prototype2/tasks.png" width="30%" />
  <img src="./documentation/screenshots/prototype2/task-noise.png" width="30%" />
  <img src="./documentation/screenshots/prototype2/task-noise-bottom.png" width="30%" /> 
</p>


### Task Execution
<p float="left">
  <img src="./documentation/screenshots/prototype2/task-noise-activity-noise-top.png" width="30%" />
  <img src="./documentation/screenshots/prototype2/task-noise-activity-noise-bottom.png" width="30%" />
  <img src="./documentation/screenshots/prototype2/task-noise-activity-noise-bottom-running.png" width="30%" /> 
</p>
<p float="left">
  <img src="./documentation/screenshots/prototype2/task-noise-activity-survey-top.png" width="30%" />
  <img src="./documentation/screenshots/prototype2/task-noise-activity-survey-bottom.png" width="30%" />
</p>

### Task Results
<p float="left">
  <img src="./documentation/screenshots/prototype2/task-noise-finished-top.png" width="30%" /> 
  <img src="./documentation/screenshots/prototype2/task-noise-finished-middle.png" width="30%" />
</p>
<p float="left">
  <img src="./documentation/screenshots/prototype2/task-noise-finished-middle-graph.png" width="30%" />
  <img src="./documentation/screenshots/prototype2/task-noise-finished-middle-graph-2.png" width="30%" />
 <img src="./documentation/screenshots/prototype2/task-noise-finished-middle-graph-3.png" width="30%" />
</p>
<p float="left">
  <img src="./documentation/screenshots/prototype2/task-noise-finished-middle-graph-metadata-open.png" width="30%" />
  <img src="./documentation/screenshots/prototype2/task-noise-finished-middle-survey.png" width="30%" /> 
  <img src="./documentation/screenshots/prototype2/task-noise-finished-bottom.png" width="30%" />
</p>

### Measurements
<p float="left">
  <img src="./documentation/screenshots/prototype2/measurements.png" width="30%" />
  <img src="./documentation/screenshots/prototype2/measurement-top.png" width="30%" /> 
  <img src="./documentation/screenshots/prototype2/measurement-bottom.png" width="30%" />
</p>

### Settings
<p float="left">
  <img src="./documentation/screenshots/prototype2/settings.png" width="30%" />
  <img src="./documentation/screenshots/prototype2/settings-bottom.png" width="30%" /> 
</p>

## System Design
The vizualization of the software architecture was created with the [C4 model](https://c4model.com/). C4 stands for context, container, component and code.
### Context
This diagram shows the system within its environment.
![This is an image](./documentation/diagrams/c4/C4_Context.png)

### Container
Shows the different high level software parts like the different applications and the internal services.
![This is an image](./documentation/diagrams/c4/C4_Container.png)

### Component - PWA
It zooms into the previously shown services and displays their internal components.
![This is an image](./documentation/diagrams/c4/C4_Component.png)

## Repository Notes
Label and emoji ideas are from:
- https://gitmoji.dev/
- https://seantrane.com/posts/logical-colorful-github-labels-18230/
- https://medium.com/@dave_lunny/sane-github-labels-c5d2e6004b63

Commit messages shall use the structure defined by Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/

## Repository Structure
- 📁 `backend`: Includes source code and build files for the nginx API server
- 📁 `frontend`: Includes source code and build files for PWA client
- 📄 `docker-compose.prod.yml`: Builds and starts the prototype production ready (Both backend and frontend)
- 📄 `docker-compose.yml`: Builds and starts the prototype development ready (Both backend and frontend)
- 📄 `sonar-project.properties`: [SonarQube](https://www.sonarqube.org/) configuration used for code quality analysis

For further information see the `README.md` files in the folders that were presented.