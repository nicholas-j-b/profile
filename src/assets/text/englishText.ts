export class EnglishText {

    public static readonly crimeText = `
During my time at Crime Runners, the leading escape room in Vienna, we released our largest project, a massive Escape Room built with extensive technological/mechanised integration. My responsibility was developing all the software for the riddles, designing and implementing microcontroller solutions, developing systematic backup/replacement methodolgy as well as maintenance and improvements on existing systems. A large part of my work drew on inspiration from the Internet of Things technology available, such as the Raspberry Pi and Arduino, as well as the typical APIs and Protocols for that field.

The final result included around 20 Arduinos and Raspberry Pis each, all connected to offer the players a highly tactile, semi-linear, interactive adventure. The implementation involved, among many other things, reading inputs such as touching, moving, aligning or combining objects to control the state of the room with respect to opening/closing doors, displaying patterns in holograms or firing a smoke machine etc.

The two biggest challenges I faced during this projects were as follows:

1. Designing a system with little precedence. 
Developing such an advanced Escape room in 2017/2018 put us as front runners for using this technology in this way. Other similar projects mostly hid implementation details. Some of the most basic decisions such as 'Should these be conected on an I2C bus, SPC or over the network?' involved a lot of documentation reading and hands on, trial and error.

2. 'Physical' Debugging. 
Some gems include: 
 - Electrical pulses on nearby powercables causing false readings on RFID readers.
 - Making everything break-proof for over-enthusiastic customers.
 - Rats (maybe?) pulling out cables in walls.
 - Inconsistent signal strength of wireless communication devices.

Things I learned:
 - Seeing a project through all stages: conceptualisation, design, implementation, maintanance.
 - Self directed research into unfamiliar topics.
 - Being realistic with deadlines and estimating the unknown.
 - Translating highly technical work for people with no experience in the field.
 - Understanding and communicating requirements and consequences of decisions.

Technoligies/Tools/Protocols etc used:
 - Python
 - C++
 - I2C
 - SPC
 - MQTT
 - Git
 - Node-RED
 - Bash

Overall an incredibly fun and challenging project. Be sure to play the room 'Going Underground' if you get the chance.
`;

    public static readonly cloudText = `
So far at Cloudflight I've been involved in three projects for the customers Schachermayer, Erste Gruppe and LKW Walter.

For Schachermayer, a warehousing and logistics company, our team built a comprehensive parcel tracking application to ensure that the 80000+ parcels a day made it to their correct destination. This included an app for the Truck Drivers, one for the workers on the warehouse floor and one for Logistics Experts providing live updates to the requirements - that all connected to one integrated service.

This is where I cut my teeth as an agile software developer, working in a team that delivered many complex, new features each Sprint.

I learnt to value the biweekly 'Retros' as an opportunity to look back, regroup and focus on what parts of the development process could be improved. 

One initiative that came from the Retros for which I took responsibility was rethinking our testing environment. Inspired by Robert Martin's 'Clean Code' that I was reading at the time, I saw the long term benefit of adding the necessary abstractions to streamline the process of writing integration, unit and regression tests. Throughout the project, our tests became a source of confidence during refactoring and architectural changes.

This project taught me a lot about fast-paced teamwork, the benefits of agile development and the value of clean code. 

-------

For the Erste Gruppe, banking and finance, our team built a proof-of-concept application for aggregating multiple bank accounts of a single person into one overview. 

The main challenge that this presented was navigating poorly documented, proprietary APIs. Showing that this project was viable involved massaging the interfaces into a common protocol (which they're already supposed to be following).

We decided on the microservices architecture in order to split the process of standardisation of each bank interface into independently functioning services - allowing us to call our own neatly organised services from the end application.

This was the first project in Cloudflight where I had maintainer rights on the repository and approved pull requests of colleagues, forcing me to think even more critically - not just about the state of the codebase - but about the future of the project and what still needs to be built on top of what was there.

-------

I'm currently involved in a long-term team creating software for the ongoing needs of LKW Walter, a logistics and trucking company.

In this project we've been refactoring and containerising software from their previous provider, as well as expanding the applications and features avalailable to their transport managers.

This project is teaching me about companies with massive extant codebases and large organisational structures. Navigating and adding to programs that have an unending number of services/dependencies impossible for any one person to understand is training my ability to find and focus on what is relevant and to dive into the code of dependencies reading and debugging libraries I previously didn't know existed. This project also has four staging environments between local development and production - giving me the opportunity and necessity to understand more of the dev-ops side of CI/CD.

    `
}