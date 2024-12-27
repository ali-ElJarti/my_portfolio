import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am an Industrial Digital Transformation Engineer with a strong foundation in bridging the gap between production, supervision, and management using cutting-edge technologies. With expertise in real-time integrated information systems, I focus on enhancing decision-making, communication, and operational workflows by developing innovative solutions.
        </p>
        <p>
          I have extensive experience in web and industrial application development, including creating predictive maintenance solutions with MATLAB and Azure Cloud, integrating web-based supervision tools using MQTT and OPC UA, and developing virtual reality training applications using Unity and Blender. Additionally, I am proficient in building efficient and scalable applications using technologies like Flask, React, SQL, and Docker.
        </p>
        <p>
          My academic projects and professional experiences have enabled me to work on diverse solutions like SAP data migration, assembly line optimization using ARENA and Grafana, and HSE-focused VR applications. I thrive on learning new technologies and applying them to solve complex challenges.
        </p>
        <p>
          I am a collaborative team player with a passion for innovation and continuous improvement. My commitment to staying current with industry best practices ensures that I can make meaningful contributions to any project or team.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;

