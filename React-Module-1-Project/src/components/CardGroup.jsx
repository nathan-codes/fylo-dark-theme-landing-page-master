import Card from "./Card"
import anyfileImage from "../images/icon-any-file.svg";
import colloborationImage from "../images/icon-collaboration.svg";
import accessanywhereImage from "../images/icon-access-anywhere.svg";
import securityImage from "../images/icon-security.svg";

import  "./CardGroup.css"

const data = [
  {
    image: accessanywhereImage,
    title: "Access your files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    image: securityImage,
    title: "Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    image: colloborationImage,
    title: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    image: anyfileImage,
    title: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

function CardGroup() {
  const cardGroup = data.map((card) => {
    return <Card title={card.title} image={card.image} text={card.text} />
  })
  return (
    <section className="CardGroup">

      {cardGroup}
    </section>
  )
}

export default CardGroup
