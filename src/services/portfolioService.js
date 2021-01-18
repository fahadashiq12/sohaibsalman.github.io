import DesignFood from "../static/images/portfolio/design/fast-food.png";
import DesignPhotography from "../static/images/portfolio/design/photography.png";

import DesktopTMS from "../static/images/portfolio/desktop/tms.png";
import DesktopChat from "../static/images/portfolio/desktop/chat-app.png";
import DesktopCalculator from "../static/images/portfolio/desktop/calculator.PNG";
import DesktopTraveling from "../static/images/portfolio/desktop/traveling.png";

import WebTMS from "../static/images/portfolio/web/tms.png";
import WebFoodie from "../static/images/portfolio/web/foodie.png";
import WebFixit from "../static/images/portfolio/web/fixit.png";
import WebPortfolio from "../static/images/portfolio/web/porfolio-dark.png";
import WebLMS from "../static/images/portfolio/web/shaheen-library.png";
import WebCodeWork from "../static/images/portfolio/web/codework.png";

const types = Object.freeze({
  all: 0,
  ui: 1,
  frontend: 2,
  backend: 3,
  web: 4,
  desktop: 5,
  mobile: 6,
});

const portfolioHeader = {
  heading: "Portfolio",
  description: [
    {
      id: 1,
      text:
        "Welcome to my online portfolio. Here you can see all my previous work and projects along with their description. I have done a satisfactory work for the clients starting from basic programming tasks to business level softwares. Want some help building your software?",
    },
  ],
};

const projectFilters = [
  "All",
  "UI Design",
  "Frontend",
  "Backend",
  "Web Apps",
  "Desktop Apps",
  "Mobile Apps",
];

const projects = [
  {
    id: 1,
    title: "Desktop Tailor System",
    image: DesktopTMS,
    type: [types.desktop, types.backend],
    tools: "Win Forms, .NET, ADO.NET, C#, SQL Server",
    description:
      "A desktop applications for clothing brand to automate their tiresome manual tasks. Developed in .NET, C# using Windows Forms.",
  },
  {
    id: 2,
    title: "Online Tailor System",
    image: WebTMS,
    type: [types.web, types.frontend, types.backend],
    tools: "Web Forms, ASP.NET, ADO.NET, C#, SQL Server",
    description:
      "Web based applications for clothing brand to automate their tasks and centralize their data. Developed in ASP.NET, C# using Web Forms.",
  },
  {
    id: 11,
    title: "CodeWork.pk",
    image: WebCodeWork,
    type: [types.web, types.frontend, types.backend],
    tools: ".NET Core, Web API, ReactJs",
    description:
      "Developing a platform for programming students to enhance their skills by working directly with software companies.",
  },
  {
    id: 3,
    title: "Fast Food UI",
    image: DesignFood,
    type: [types.ui],
    tools: "Adobe Xd, Figma",
    description:
      "UI Design for a fast food company landing page. This landing page is designed in Adobe Xd and Figma.",
  },
  {
    id: 12,
    title: "Traveling System",
    image: DesktopTraveling,
    type: [types.desktop, types.backend],
    tools: "Win Forms, .NET, ADO.NET, C#, SQL Server",
    description:
      "A traveling platform for traveling agents and companies to organize and automate their tasks like booking, records, etc.",
  },
  {
    id: 8,
    title: "Foodie Website",
    image: WebFoodie,
    type: [types.frontend, types.ui],
    tools: "HTML, CSS/SASS, Bootstrap, JavaScript, jQuery",
    description:
      "A beautifull website design for Food Restaurants for the publicity of their business, containing all the info of the dishes and contact!",
  },
  {
    id: 5,
    title: "Calculator",
    image: DesktopCalculator,
    type: [types.desktop],
    tools: "Java Swing, Java",
    description:
      "A GUI based calculator develeped in Java, Java Swings. This calculator has the features of a simple calculator including storing results in memory.",
  },
  {
    id: 4,
    title: "Photographer UI",
    image: DesignPhotography,
    type: [types.ui],
    tools: "Adobe Xd, Figma",
    description:
      "UI Design for a photographer's website landing page. This landing page is designed in Adobe Xd and Figma.",
  },
  {
    id: 6,
    title: "Chat Application",
    image: DesktopChat,
    type: [types.desktop, types.backend],
    tools: "Java Swing, Java Sockets, Java, MySQL",
    description:
      "A chat application developed in Java, using Java Swing and Socket Programming. It has all the features like adding friend, sending messages!",
  },
  {
    id: 7,
    title: "Fixit Website",
    image: WebFixit,
    type: [types.frontend, types.ui],
    tools: "HTML, CSS/SASS, Bootstrap, JavaScript, jQuery",
    description:
      "A website designed and developed for a service provider based startup. Developed in HTML, CSS/SCSS, Bootstrap, JavaScript and jQyery.",
  },

  {
    id: 9,
    title: "Personal Portfolio",
    image: WebPortfolio,
    type: [types.frontend, types.ui],
    tools: "HTML, CSS/SASS, Bootstrap, JavaScript, jQuery",
    description:
      "My personal portfolio website, designed and developed in HTML, CSS/SCSS, Bootstrap and JavaScript.",
  },
  {
    id: 10,
    title: "Online Library System",
    image: WebLMS,
    type: [types.web, types.frontend, types.backend],
    tools: "HTML, CSS, JavaScript, PHP, MySQL",
    description:
      "An online library management system to manage all library tasks. Developed in PHP, HTML and simple CSS.",
  },
];

export function getPortfolioHeader() {
  return portfolioHeader;
}

export function getProjectFilters() {
  return projectFilters;
}

export function getProjects() {
  return projects;
}
