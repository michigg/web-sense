# WebSense
[![Build Status](https://github.drone.michigg.de/api/badges/michigg/web-sense/status.svg)](https://github.drone.michigg.de/michigg/web-sense) [![Quality Gate Status](https://sonarqube.michigg.de/api/project_badges/measure?project=michigg%3Aweb-sense&metric=alert_status)](https://sonarqube.michigg.de/dashboard?id=michigg%3Aweb-sense) [![Coverage](https://sonarqube.michigg.de/api/project_badges/measure?project=michigg%3Aweb-sense&metric=coverage)](https://sonarqube.michigg.de/dashboard?id=michigg%3Aweb-sense)

This project was created during a master thesis.

With this project we want to evaluate a web based approach for mobile crowd sensing frameworks. Currently, the noise measurement use case is implemented as an application example. Usually, crowd sensing
frameworks use native applications for their clients. For example [Medusa](https://github.com/USC-NSL/Medusa) and [AWARE](https://awareframework.com/).

This would lead to a high implementation effort because both iOS and Android applications need to be implemented. Therefore, a progressive web app is used as an alternative way to create a crowd sensing application that runs on any device with a browser. This is a prototype to evaluate the possibilities of a web based crowd sensing framework. The prototype was evaluated by experts and thereafter by a qualitative user study. The implementation process shows that a web based approach cannot offer opportunistic crowd sensing use cases because sensors cannot run in the background yet. An implementation using the PWA approach does not have the capabilities of a native app because some sensors of the mobile device that native applications can access are not accessible using web technologies.

## Repository Notes
Label and emoji ideas are from:
- https://gitmoji.dev/
- https://seantrane.com/posts/logical-colorful-github-labels-18230/
- https://medium.com/@dave_lunny/sane-github-labels-c5d2e6004b63

Commit messages shall use the structure defined by Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/

## Repository Structure
- ???? `backend`: Includes source code and build files for the nginx API server
- ???? `frontend`: Includes source code and build files for PWA client
- ???? `docker-compose.prod.yml`: Builds and starts the prototype production ready (Both backend and frontend)
- ???? `docker-compose.yml`: Builds and starts the prototype development ready (Both backend and frontend)
- ???? `sonar-project.properties`: [SonarQube](https://www.sonarqube.org/) configuration used for code quality analysis

For further information see the `README.md` files in the folders that were presented.

## Screen Design
### Tasks
The following screenshots show the task selection (left) and the task "L??rm in der Stadt" (right) 
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

## Extensability
### Task Configuration
Example

```
[
  {
    "id": 1,
    "title": "L??rm in der Stadt",
    "description": "Mit der Teilnahme bei 'L??rm in der Stadt' kannst du die lautesten und leisesten Orte in deiner Stadt entdecken. Benutze einfach dein Smartphone und nehme mit Hilfe des Mikrofons den L??rm in deiner Umgebung auf. Abschlie??end kannst du uns noch mit deinem pers??nlichen L??rmempfinden weiterhelfen.",
    "inputDescriptions": {
      "GEOLOCATION": "Die Position wird ben??tigt, damit wir wissen, wo der L??rm auftrat.",
      "MIC": "Das Mikrofon wird zur Aufnahme des Umgebungsl??rms genutzt. Es wird dabei keine Sprachaufnahme angefertigt.",
      "SURVEY": "Die Umfrage nutzen wir, um uns einen besseren Eindruck von der L??rmbeschaffenheit zu machen."
    },
    "steps": [
      {
        "id": "noise-step-1",
        "type": "SensorTaskStep",
        "title": "Umgebungsl??rm aufnehmen",
        "description": "In diesem Schritt misst du den Umgebungsl??rm mit deinem Mikrofon im Smartphone. Bevor es los geht bitten wir dich die nachfolgenden Schritte zu beachten.",
        "instructions": [
          {
            "title": "Vorraussetzung",
            "description": "Da wir uns f??r den L??rm in der Stadt interessieren, bitten wir dich, Aufnahmen nur au??erhalb von geschlossenen Einrichtungen wie Wohnungen oder ??ffentlichen Geb??uden zu machen."
          },
          {
            "title": "Halte dein Smartphone richtig",
            "image": {
              "src": "/img/noise/noise-smartphone-position.jpg",
              "alt": "placeholder"
            },
            "description": ",Damit die Aufnahmen so pr??zise wie m??glich werden, halte dein Smarphone vor dir in Brusth??he und halte es von dir Weg."
          },
          {
            "title": "Ein Moment der Stille",
            "description": "Die Aufnahme dauert etwa 10 Sekunden. Wichtig ist, dass du dich w??hrend der Aufnahme ruhig verh??lst. Wir wollen ja nur den Umgebungsl??rm messen. ;)"
          }
        ],
        "activityComponentName": "ActivityNoiseMeasurement",
        "inputTypes": [
          "GEOLOCATION",
          "MIC"
        ],
        "resultActivityComponentName": "ActivityNoiseQuantitativeMeasurement"
      },
      {
        "id": "noise-step-2",
        "type": "SurveyTaskStep",
        "title": "Subjektive Wahrnehmung",
        "description": "Mit dieser Umfrage kannst du uns helfen die L??rmquelle besser einzusch??tzen.",
        "instructions": [],
        "questions": [
          {
            "id": "question-1",
            "type": "TEXT",
            "title": "L??rmquelle",
            "question": "Was hat deiner Meinung nach den L??rm verursacht?"
          },
          {
            "id": "question-2",
            "type": "TEXT",
            "title": "L??rmeigenschaft",
            "question": "Wie w??rdest du den L??rm beschreiben? (Bsp.: Impulsartig, gleichm????ig langanhaltend)"
          },
          {
            "id": "question-3",
            "type": "SINGLE_CHOICE",
            "title": "L??rmfrequenz",
            "question": "Wie h??ufig tritt deiner Meinung nach der L??rm auf?",
            "options": [
              {
                "value": "oneTimePerWeek",
                "text": "Einmal in der Woche"
              },
              {
                "value": "manyTimesPerWeek",
                "text": "Mehrmals in der Woche"
              },
              {
                "value": "daily",
                "text": "T??glich"
              },
              {
                "value": "manyTimesPerDay",
                "text": "Mehrmals am Tag"
              },
              {
                "value": "noSpecification",
                "text": "Wei?? ich nicht"
              }
            ]
          },
          {
            "id": "question-4",
            "type": "SINGLE_CHOICE",
            "title": "Bel??stigungsgrad",
            "question": "Wie sehr empfindest du den Umgebungsl??rm als st??rend?",
            "options": [
              {
                "value": "veryAnnoying",
                "text": "??u??erst st??rend"
              },
              {
                "value": "stronglyAnnoying",
                "text": "Stark st??rend"
              },
              {
                "value": "mediumAnnoying",
                "text": "Mittelm????ig st??rend"
              },
              {
                "value": "smallAnnoying",
                "text": "Etwas st??rend"
              },
              {
                "value": "notAnnoying",
                "text": "??berhaupt nicht st??rend"
              },
              {
                "value": "noSpecification",
                "text": "Wei?? ich nicht"
              }
            ]
          }
        ],
        "resultActivityComponentName": "ActivityNoiseQualitativeMeasurement"
      }
    ]
  },
  {
    "id": 2,
    "title": "Staualarm",
    "description": "I love cake chocolate cake marshmallow sugar plum powder. Shortbread pie jelly-o bonbon icing. I love gingerbread topping donut fruitcake cupcake. Gummies gummi bears chocolate bar oat cake candy canes. Bear claw candy canes gummies carrot cake I love biscuit lollipop muffin. Toffee jelly beans halvah halvah topping muffin lollipop. Lemon drops cookie pastry brownie fruitcake drag??e bonbon. Drag??e pie marshmallow cheesecake pastry. Marshmallow candy canes powder jelly beans I love. Jelly beans pie I love macaroon marzipan danish tiramisu.",
    "inputDescriptions": {
      "GEOLOCATION": "Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o",
      "DUMMY": "Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o"
    },
    "steps": [
      {
        "id": "smell-step-1",
        "type": "SensorTaskStep",
        "title": "Durchf??hrung",
        "description": "Dr??cken Sie auf Start. F??llen Sie anschlie??end das angezeigte Formular aus.",
        "instructions": [],
        "activityComponentName": "ActivityNoiseMeasurement",
        "inputTypes": [
          "GEOLOCATION",
          "DUMMY"
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "M??llj??ger",
    "description": "Jelly beans caramels pastry toffee tiramisu croissant wafer. Powder jujubes icing jelly cake I love I love marzipan. Cupcake candy bonbon I love dessert. Bear claw tiramisu apple pie brownie bear claw I love. Cotton candy I love cookie muffin cheesecake sesame snaps donut. I love liquorice candy canes sugar plum apple pie. Carrot cake gummies fruitcake pudding tart bonbon liquorice. Dessert danish chocolate cake bear claw pastry carrot cake sesame snaps tiramisu gummies.",
    "inputDescriptions": {
      "GEOLOCATION": "Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o",
      "SURVEY": "Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o",
      "DUMMY": "Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o"
    },
    "steps": [
      {
        "id": "waste-step-1",
        "type": "SensorTaskStep",
        "title": "Durchf??hrung",
        "description": "cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o.",
        "instructions": [],
        "activityComponentName": "ActivityNoiseMeasurement",
        "inputTypes": [
          "GEOLOCATION",
          "DUMMY"
        ]
      },
      {
        "id": "waste-step-2",
        "type": "SurveyTaskStep",
        "title": "Durchf??hrung",
        "description": "cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o.",
        "instructions": [],
        "questions": []
      }
    ]
  }
]
```
