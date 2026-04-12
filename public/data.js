import dwellaImage from "../src/images/dwella.png";
import movieAppImage from "../src/images/movradar.png";
import dwellaPreview from "../src/images/dwella-preview.png";
import movieAppPreview from "../src/images/movradar-preview.png";
import bankistImage from "../src/images/bankist.png";
import bankistPreview from "../src/images/bankist-preview.png";
import gymbayImage from "../src/images/gymbay.png";
import gymbayPreview from "../src/images/gymbay-preview.png";

const projectsDone = [
  {
    title: "Movradar",
    description:
      "A movie discovery app with API integration, favorites, and dynamic UI.",
    live: "https://movradar.netlify.app/",
    github: "https://github.com/timlane1132/MovRadar",
    tech: ["React", "API", "JavaScript"],
    image: movieAppImage,
    preview: movieAppPreview,
  },
  {
    title: "Dwella",
    description:
      "A real estate platform for seamless property discovery and landlord-tenant interaction.",
    live: "https://mydwella.africa/",
    github: "https://github.com/timlane1132/Dwella",
    tech: ["React", "CSS", "API"],
    image: dwellaImage,
    preview: dwellaPreview,
  },
  {
    title: "Gymbay",
    description:
      "A fitness platform for seamless workout discovery and trainer interaction.",
    live: "https://gymbay.netlify.app/",
    github: "https://github.com/timlane1132/Gymbay",
    tech: ["React", "CSS", "API"],
    image: gymbayImage,
    preview: gymbayPreview,
  },
  {
    title: "Bankist",
    description:
      "A modern banking app with a focus on user experience and financial management.",
    live: "https://bankist.netlify.app/",
    github: "https://github.com/timlane1132/Bankist",
    tech: ["JavaScript", "CSS", "HTML"],
    image: bankistImage,
    preview: bankistPreview,
  },
];

export default projectsDone;
